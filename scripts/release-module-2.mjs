// Publish only Module II assets/content, retaining every other published file and function.
// Auth uses the existing Netlify CLI login; credentials are never written or logged.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

const siteId='be94eba7-c4f0-4c37-bd3e-e8e1701dea09';
const output='/private/tmp/xenophon-module2-release';
const mode=process.argv[2]||'prepare';
const config=JSON.parse(fs.readFileSync(path.join(process.env.HOME,'Library/Preferences/netlify/config.json'),'utf8'));
const token=config.users[config.userId].auth.token;
const headers={Authorization:`Bearer ${token}`};
const api=async(endpoint,options={})=>{
  const r=await fetch(`https://api.netlify.com/api/v1/${endpoint}`,{...options,headers:{...headers,...options.headers}});
  if(!r.ok){const detail=await r.json().catch(()=>({message:'No diagnostic'}));throw new Error(`Netlify ${endpoint.split('?')[0]} returned ${r.status}: ${String(detail.message||detail.error||JSON.stringify(detail)).slice(0,600)}`);}
  return r.json();
};
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const lessons=Array.from({length:12},(_,i)=>JSON.parse(fs.readFileSync(`content/lessons/lesson-${i+13}.json`,'utf8')));
fs.mkdirSync(output,{recursive:true});
if(mode==='prepare'){
  const site=await api(`sites/${siteId}`);
  const published=site.published_deploy;
  assert(published?.id,'No published deploy');
  const deploy=await api(`deploys/${published.id}`);
  const files=await api(`deploys/${published.id}/files`);
  assert(files.length>=300,'Incomplete published manifest');
  const updates=new Map();
  for(const name of ['lesson-data.js','script.js','module-2-andreia.html','lesson.html','activity.html','lessons.html']){
    const response=await fetch(`${deploy.deploy_ssl_url}/${name}`);
    assert(response.ok,`Published ${name}`);
    let text=await response.text();
    fs.writeFileSync(path.join(output,'baseline-'+name),text);
    if(name==='lesson-data.js'){
      for(const lesson of lessons){
        const n=lesson.number;
        const local=fs.readFileSync('lesson-data.js','utf8');
        const metadata=local.match(new RegExp(`^    \\{"number":${n},[^\\n]+`,'m'))?.[0];
        assert(metadata,`Module II metadata ${n}`);
        const row=new RegExp(`^    \\{(?: number: ${n},|"number":${n},)[^\\n]+`,'m');
        assert(row.test(text),`Published stub ${n}`);
        text=text.replace(row,metadata);
        const generated=`  // BEGIN GENERATED LESSON ${n}\n  LESSONS["lesson-${n}"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON ${n}\n\n`;
        const pattern=new RegExp(`  // BEGIN GENERATED LESSON ${n}\\n[\\s\\S]*?  // END GENERATED LESSON ${n}\\n\\n`);
        text=pattern.test(text)?text.replace(pattern,generated):text.replace('  const ACTIVITY_LABELS = {',generated+'  const ACTIVITY_LABELS = {');
      }
    }else if(name==='script.js'){
      for(const l of lessons){
        const pattern=new RegExp(`\\{ id: "${l.id}", title: "[^"\\n]+", grammar: "[^"\\n]+" \\}`);
        assert(pattern.test(text),`Published outline ${l.id}`);
        text=text.replace(pattern,`{ id: "${l.id}", title: ${JSON.stringify(l.title)}, grammar: ${JSON.stringify(l.scope)} }`);
      }
    }else if(name==='module-2-andreia.html'){
      // Apply only this task's HTML diff to the current published document.
      const initial='/private/tmp/module2-initial/module-2-andreia.html';
      assert(fs.existsSync(initial),'Missing pre-edit snapshot');
      let diff;
      try{diff=execFileSync('diff',['-u',initial,'module-2-andreia.html'],{encoding:'utf8',stdio:['ignore','pipe','pipe']});}
      catch(error){if(error.status!==1)throw error;diff=error.stdout;}
      // Netlify's HTML post-processing rewrites relative links in the served baseline.
      text=text.replace(/<a[^>]+href=['"](?:\/lessons|lessons\.html)#lesson-13['"][^>]*>Next: Begin Lesson 1<\/a>/, '<a class="primary-button" href="lessons.html#lesson-13">Next: Begin Lesson 1</a>');
      text=applyTextDiff(text,diff);
    }
    if(name==='lesson.html'){
      text=text.replace('</head>','  <link rel="stylesheet" href="module-2.css?v=module2-20261011">\n</head>');
      text=text.replace('</body>','  <script src="module-2-layout.js?v=module2-20261011"></script>\n</body>');
    }
    text=text.replace(/(src="(?:lesson-data|script)\.js)\?[^"\n]+/g,'$1?v=module2-20261011');
    fs.writeFileSync(path.join(output,name),text);
    updates.set('/'+name,path.join(output,name));
  }
  for(const lesson of lessons){
    updates.set('/'+lesson.banner.image,path.resolve(lesson.banner.image));
    updates.set(`/content/lessons/${lesson.id}.json`,path.resolve(`content/lessons/${lesson.id}.json`));
  }
  for(const name of ['module-2.css','module-2-layout.js'])updates.set('/'+name,path.resolve(name));
  const manifest=Object.fromEntries(files.map(f=>[f.path,f.sha]));
  const uploads={};
  for(const [name,file]of updates){const sha=crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex');manifest[name]=sha;uploads[sha]={path:name,file};}
  // Rebuild only the published function sources, verified against the previous
  // release checksums. Netlify requires fresh archive uploads for this deploy.
  const bundles=JSON.parse(fs.readFileSync('/private/tmp/module2-preserved-backend/functions.json','utf8'));
  const functionUploads={};
  const functions=Object.fromEntries(deploy.available_functions.map(f=>{
    const bundle=bundles.find(b=>b.name===f.n);assert(bundle,`Published function bundle ${f.n}`);
    assert.equal(bundle.runtimeVersion,f.r);assert.equal(bundle.bootstrapVersion,f.bd.bootstrapVersion);
    const sha=crypto.createHash('sha256').update(fs.readFileSync(bundle.path)).digest('hex');
    functionUploads[sha]={name:f.n,file:bundle.path,runtime:f.r,invocationMode:f.im};return[f.n,sha];
  }));
  const functions_config=Object.fromEntries(deploy.available_functions.map(f=>[f.n,{
    ...(f.dn?{display_name:f.dn}:{}),...(f.g?{generator:f.g}:{}),build_data:f.bd,priority:f.p,
    routes:(f.ro||[]).map(r=>({pattern:r.p,...(r.l?{literal:r.l}:{}),...(r.e?{expression:r.e}:{}),methods:r.m,prefer_static:r.ps}))
  }]));
  const record={baselineDeploy:deploy.id,siteId,updates:[...updates.keys()],baselineFiles:files,baselineFunctions:deploy.available_functions,uploads,functionUploads,payload:{files:manifest,functions,functions_config,function_schedules:deploy.function_schedules||[],branch:deploy.branch,framework:deploy.framework,draft:true,async:true}};
  fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(record,null,2));
  console.log(JSON.stringify({prepared:true,baselineDeploy:deploy.id,existingFiles:files.length,updatedFiles:updates.size,functionsPreserved:Object.keys(functions).length}));
}else if(mode==='preview'||mode==='publish'){
  const record=JSON.parse(fs.readFileSync(path.join(output,'manifest.json'),'utf8'));
  const site=await api(`sites/${siteId}`);
  assert.equal(site.published_deploy.id,record.baselineDeploy,'Published deploy changed; prepare again');
  const payload={...record.payload,draft:mode!=='publish'};
  let deploy=await api(`sites/${siteId}/deploys?title=${encodeURIComponent('Module II: complete Lessons 13–24')}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
  fs.writeFileSync(path.join(output,`${mode}.json`),JSON.stringify({id:deploy.id,url:deploy.deploy_ssl_url,state:deploy.state},null,2));
  while(deploy.state==='preparing'){await sleep(1500);deploy=await api(`deploys/${deploy.id}`);}
  for(const sha of deploy.required_functions||[]){
    const upload=record.functionUploads[sha];assert(upload,`Unknown required function ${sha}`);
    await api(`deploys/${deploy.id}/functions/${encodeURIComponent(upload.name)}?runtime=${upload.runtime}&invocation_mode=${upload.invocationMode}`,{method:'PUT',headers:{'Content-Type':'application/octet-stream'},body:fs.readFileSync(upload.file)});
  }
  for(const sha of deploy.required||[]){
    const upload=record.uploads[sha];assert(upload,`Unexpected required asset ${sha}`);
    const route=`deploys/${deploy.id}/files${upload.path.split('/').map(encodeURIComponent).join('/')}`;
    await api(route,{method:'PUT',headers:{'Content-Type':'application/octet-stream'},body:fs.readFileSync(upload.file)});
  }
  for(let i=0;i<60&&deploy.state!=='ready';i++){await sleep(1500);deploy=await api(`deploys/${deploy.id}`);if(deploy.state==='error')throw Error('Deploy failed: '+deploy.error_message);}
  assert.equal(deploy.state,'ready');
  const actual=await api(`deploys/${deploy.id}/files`);
  const actualMap=new Map(actual.map(f=>[f.path,f.sha]));
  for(const f of record.baselineFiles)if(!record.updates.includes(f.path))assert.equal(actualMap.get(f.path),f.sha,`Unrelated file changed: ${f.path}`);
  for(const f of record.baselineFunctions){const current=deploy.available_functions.find(g=>g.n===f.n);assert(current,`Lost function ${f.n}`);assert.deepEqual(current.ro,f.ro,`Function routes ${f.n}`);for(const key of ['r','im','m','rg'])assert.equal(current[key],f[key],`Function ${f.n} setting ${key}`);}
  const result={id:deploy.id,url:deploy.deploy_ssl_url,state:deploy.state,mode,updatedFiles:record.updates,unchangedFilesVerified:record.baselineFiles.length-record.baselineFiles.filter(f=>record.updates.includes(f.path)).length,functionsPreserved:deploy.available_functions.length};
  fs.writeFileSync(path.join(output,`${mode}.json`),JSON.stringify(result,null,2));
  console.log(JSON.stringify(result));
}else throw Error('Use prepare, preview or publish');

function applyTextDiff(text,diff){
  const lines=text.split('\n');let delta=0;
  for(const hunk of diff.split(/(?=^@@ )/m).slice(1)){
    const parts=hunk.split('\n');const header=parts.shift();const rows=parts.filter(l=>/^[ +\-]/.test(l));
    const before=rows.filter(l=>l[0]!=='+' ).map(l=>l.slice(1));
    const after=rows.filter(l=>l[0]!=='-' ).map(l=>l.slice(1));
    let start=Number(header.match(/^@@ -(\d+)/)[1])-1+delta;
    if(lines.slice(start,start+before.length).join('\n')!==before.join('\n')){
      start=lines.findIndex((_,i)=>lines.slice(i,i+before.length).join('\n')===before.join('\n'));
    }
    assert(start>=0,'Published HTML hunk differs');
    lines.splice(start,before.length,...after);delta+=after.length-before.length;
  }
  return lines.join('\n');
}
