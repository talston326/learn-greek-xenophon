// Publish browser assets only. Database scripts, credentials, reports and server
// reference answers remain outside the static site. Functions bundle separately.
import fs from 'node:fs';import path from 'node:path';
const out=path.resolve('dist');fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
function copy(source,target){const stat=fs.statSync(source);if(stat.isDirectory()){fs.mkdirSync(target,{recursive:true});for(const name of fs.readdirSync(source))if(!name.startsWith('.')&&!name.endsWith('.md'))copy(path.join(source,name),path.join(target,name));}else{fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(source,target);}}
for(const name of fs.readdirSync('.'))if(/\.(html|js|css|webmanifest|ico)$/.test(name)||['_redirects','_headers','robots.txt'].includes(name))copy(name,path.join(out,name));
for(const name of ['assets','award-assets','content/lessons','content/Images','content/audio','content/vocabulary','maps/atlas','maps/assets'])if(fs.existsSync(name))copy(name,path.join(out,name));
for(const name of ['content/module-1-review.json','content/lesson-1-exercises.json','maps/source-data/cities.csv'])if(fs.existsSync(name))copy(name,path.join(out,name));
console.log('Browser assets prepared in dist; server files and private authoring material excluded.');
