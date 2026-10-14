// Publish the saved-translation feature without shipping unrelated working files.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const siteId='be94eba7-c4f0-4c37-bd3e-e8e1701dea09';
const output='/private/tmp/xenophon-reading-translations-release';
const mode=process.argv[2]||'prepare';
const config=JSON.parse(fs.readFileSync(path.join(process.env.HOME,'Library/Preferences/netlify/config.json')));
const headers={Authorization:`Bearer ${config.users[config.userId].auth.token}`};
async function api(endpoint,options={}) {const r=await fetch(`https://api.netlify.com/api/v1/${endpoint}`,{...options,headers:{...headers,...options.headers}});assert(r.ok,`Netlify ${endpoint.split('?')[0]}: ${r.status}`);return r.json();}
const sha1=file=>crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex');
const sha256=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
fs.mkdirSync(output,{recursive:true});
if(mode==='prepare') {
 const site=await api(`sites/${siteId}`);const deploy=await api(`deploys/${site.published_deploy.id}`);const files=await api(`deploys/${deploy.id}/files`);
 const updates=new Map();
 const baseline={};
 for(const name of ['lesson.html','lesson.js','styles.css']) {const r=await fetch(`${deploy.deploy_ssl_url}/${name}`);assert(r.ok);baseline[name]=await r.text();fs.writeFileSync(path.join(output,'baseline-'+name),baseline[name]);}
 // Exactly three missing integration calls; assert the current local file has no other differences.
 const local=fs.readFileSync('lesson.js','utf8');assert.equal(local.split('\n').filter(l=>!l.includes('window.xenophonReadingTranslation')).join('\n'),baseline['lesson.js']);
 updates.set('/lesson.js',path.resolve('lesson.js'));
 let html=baseline['lesson.html'];assert(!html.includes('src="reading-translation.js'));
 html=html.replace(/  <script src="lesson\.js[^\n]+/,match=>'  <script src="reading-translation.js?v=translations-20261011"></script>\n'+match.replace(/\?[^"\n]+/,'?v=translations-20261011'));
 html=html.replace(/(href="styles\.css)(?:\?[^"\n]+)?/,'$1?v=translations-20261011');
 fs.writeFileSync(path.join(output,'lesson.html'),html);updates.set('/lesson.html',path.join(output,'lesson.html'));
 const style=fs.readFileSync('styles.css','utf8');const a=style.indexOf('    .reading-translation {');const b=style.indexOf('    .translation-toggle summary {',a);assert(a>=0&&b>a);
 assert(!baseline['styles.css'].includes('.reading-translation {'));
 fs.writeFileSync(path.join(output,'styles.css'),baseline['styles.css']+'\n'+style.slice(a,b));updates.set('/styles.css',path.join(output,'styles.css'));
 for(const name of ['reading-translation.js','reading-translations.js'])updates.set('/'+name,path.resolve(name));
 let review=fs.readFileSync('reading-translations.html','utf8').replace(/(href="styles\.css|src="reading-translations\.js)\?[^"\n]+/g,'$1?v=translations-20261011');
 fs.writeFileSync(path.join(output,'reading-translations.html'),review);updates.set('/reading-translations.html',path.join(output,'reading-translations.html'));
 const manifest=Object.fromEntries(files.map(f=>[f.path,f.sha]));const uploads={};
 for(const [name,file]of updates){const sha=sha1(file);manifest[name]=sha;uploads[sha]={path:name,file};}
 const root=path.join(output,'backend');fs.mkdirSync(path.join(root,'netlify/functions/_shared'),{recursive:true});
 for(const name of ['reading-translations','staff-reading-translations'])fs.copyFileSync(`netlify/functions/${name}.mts`,path.join(root,`netlify/functions/${name}.mts`));
 fs.copyFileSync('netlify/functions/_shared/course-auth.mts',path.join(root,'netlify/functions/_shared/course-auth.mts'));fs.copyFileSync('achievement-catalog.js',path.join(root,'achievement-catalog.js'));
 const modules=path.join(root,'node_modules');if(fs.existsSync(modules)&&fs.lstatSync(modules).isSymbolicLink())fs.unlinkSync(modules);if(!fs.existsSync(modules))fs.cpSync('/private/tmp/module2-preserved-backend/node_modules',modules,{recursive:true,dereference:true});fs.copyFileSync('package.json',path.join(root,'package.json'));
 const {zipFunctions}=await import('/Users/tomalston/.npm/_npx/ce0ef0652bd83019/node_modules/@netlify/zip-it-and-ship-it/dist/main.js');
 const added=await zipFunctions(path.join(root,'netlify/functions'),path.join(root,'bundles'),{basePath:root,config:{'*':{nodeBundler:'esbuild',nodeVersion:'24'}}});
 fs.writeFileSync(path.join(output,'new-functions.json'),JSON.stringify(added,null,2));assert.equal(added.length,2);
 const preserved=JSON.parse(fs.readFileSync('/private/tmp/module2-preserved-backend/functions.json'));
 const functions={},functionUploads={},functions_config={};
 for(const f of deploy.available_functions){const bundle=preserved.find(b=>b.name===f.n);assert(bundle,`Missing published bundle ${f.n}`);const sha=sha256(bundle.path);functions[f.n]=sha;functionUploads[sha]={name:f.n,file:bundle.path,runtime:f.r,invocationMode:f.im};functions_config[f.n]={...(f.dn?{display_name:f.dn}:{}),...(f.g?{generator:f.g}:{}),build_data:f.bd,priority:f.p,routes:(f.ro||[]).map(r=>({pattern:r.p,...(r.l?{literal:r.l}:{}),...(r.e?{expression:r.e}:{}),methods:r.m,prefer_static:r.ps}))};}
 for(const f of added){const sha=sha256(f.path);functions[f.name]=sha;functionUploads[sha]={name:f.name,file:f.path,runtime:f.runtimeVersion,invocationMode:'stream'};functions_config[f.name]={build_data:{runtimeAPIVersion:2,bootstrapVersion:f.bootstrapVersion},routes:f.routes};}
 const record={baselineDeploy:deploy.id,baselineFiles:files,baselineFunctions:deploy.available_functions,updates:[...updates.keys()],uploads,functionUploads,payload:{files:manifest,functions,functions_config,function_schedules:deploy.function_schedules||[],branch:deploy.branch,framework:deploy.framework,draft:true,async:true}};
 fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(record,null,2));console.log(JSON.stringify({prepared:true,baselineDeploy:deploy.id,staticUpdates:record.updates,preservedFunctions:deploy.available_functions.length,addedFunctions:added.map(f=>({name:f.name,routes:f.routes,runtime:f.runtimeVersion,bootstrap:f.bootstrapVersion}))}));
} else if(['preview','publish'].includes(mode)) {
 const record=JSON.parse(fs.readFileSync(path.join(output,'manifest.json')));const site=await api(`sites/${siteId}`);assert.equal(site.published_deploy.id,record.baselineDeploy);
 let deploy=await api(`sites/${siteId}/deploys?title=${encodeURIComponent('Restore saved reading translations and comparison')}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...record.payload,draft:mode!=='publish'})});
 fs.writeFileSync(path.join(output,mode+'.json'),JSON.stringify({id:deploy.id,url:deploy.deploy_ssl_url}));
 while(deploy.state==='preparing'){await sleep(1500);deploy=await api(`deploys/${deploy.id}`);}
 for(const sha of deploy.required_functions||[]){const u=record.functionUploads[sha];assert(u);await api(`deploys/${deploy.id}/functions/${encodeURIComponent(u.name)}?runtime=${u.runtime}&invocation_mode=${u.invocationMode}`,{method:'PUT',headers:{'Content-Type':'application/octet-stream'},body:fs.readFileSync(u.file)});}
 for(const sha of deploy.required||[]){const u=record.uploads[sha];assert(u);await api(`deploys/${deploy.id}/files${u.path.split('/').map(encodeURIComponent).join('/')}`,{method:'PUT',headers:{'Content-Type':'application/octet-stream'},body:fs.readFileSync(u.file)});}
 for(let i=0;i<60&&deploy.state!=='ready';i++){await sleep(1500);deploy=await api(`deploys/${deploy.id}`);assert.notEqual(deploy.state,'error');}assert.equal(deploy.state,'ready');
 const actual=await api(`deploys/${deploy.id}/files`);const map=new Map(actual.map(f=>[f.path,f.sha]));for(const f of record.baselineFiles)if(!record.updates.includes(f.path))assert.equal(map.get(f.path),f.sha,`Unrelated file ${f.path}`);
 for(const f of record.baselineFunctions){const now=deploy.available_functions.find(g=>g.n===f.n);assert(now);assert.deepEqual(now.ro,f.ro);for(const k of ['r','im','m','rg'])assert.equal(now[k],f[k],`${f.n} ${k}`);}
 const result={id:deploy.id,url:deploy.deploy_ssl_url,mode,state:deploy.state,staticUpdates:record.updates,preservedFiles:record.baselineFiles.filter(f=>!record.updates.includes(f.path)).length,preservedFunctions:record.baselineFunctions.length,functions:deploy.available_functions.length};fs.writeFileSync(path.join(output,mode+'.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));
} else throw Error('Use prepare, preview, or publish');
