import { loadCsv, normalizePlaces, normalizeGeography, visibleAtZoom, placeLabel, MAP_BOUNDS, LEVEL_ZOOMS } from './place-data.mjs';

async function initAtlas() {
const [PLACES, GEOGRAPHY, LAND, CLASSICAL_REGIONS] = await Promise.all([
 loadCsv('data/places.csv', normalizePlaces), loadCsv('data/geography.csv', normalizeGeography),
 fetch('terrain/land.geojson').then(r => { if (!r.ok) throw new Error('Coastline unavailable'); return r.json(); }),
 fetch('data/classical-regions.geojson').then(r => { if (!r.ok) throw new Error('Region overlay unavailable'); return r.json(); })
]);
const beigeImage=new Image();beigeImage.src='terrain/beige-relief.webp';await beigeImage.decode();
const colorImage = new Image();colorImage.src='terrain/natural-colors.webp';
let colorAvailable=true;try{await colorImage.decode()}catch{colorAvailable=false}
let terrainStyle='beige';try{terrainStyle=localStorage.getItem('xenophon-atlas-terrain')==='natural'&&colorAvailable?'natural':'beige'}catch{}
'use strict';
const $=id=>document.getElementById(id), safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fold=s=>s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/ς/g,'σ');
const greekCount=PLACES.filter(p=>p.gr).length;
for(const p of PLACES)p.search=fold([p.en,p.gr,...p.aliases].join('|'));
let lang='en';try{lang=localStorage.getItem('xenophon-atlas-language')==='gr'?'gr':'en'}catch{}
let selected=null, currentRegion='home', drawn=[],lastCount=0;
const regions={home:{bounds:[[34.45,18.9],[41.65,30.25]],name:'The Greek world'},attica:{bounds:[[37.60,23.25],[38.35,24.18]],name:'Attica'},peloponnese:{bounds:[[36.35,21.1],[38.38,23.75]],name:'The Peloponnese'},north:{bounds:[[39.1,20.1],[41.5,25.4]],name:'Northern Greece'},ionia:{bounds:[[37.1,26.2],[39,28.25]],name:'Ionia'},hellespont:{bounds:[[39.75,25.8],[41.3,29.2]],name:'The Hellespont & Propontis'},crete:{bounds:[[34.8,23.4],[35.75,26.4]],name:'Crete'}};
const map=L.map('map',{zoomControl:false,minZoom:5,maxZoom:10.5,zoomSnap:.25,zoomDelta:.5,preferCanvas:true,maxBounds:MAP_BOUNDS,maxBoundsViscosity:1,worldCopyJump:false,attributionControl:true});
function updateMinimumZoom(){map.setMinZoom(Math.max(5,map.getBoundsZoom(MAP_BOUNDS,false)));}
updateMinimumZoom();map.on('resize',updateMinimumZoom);
L.control.zoom({position:'topright'}).addTo(map);L.control.scale({position:'bottomleft',metric:true,imperial:true,maxWidth:130}).addTo(map);
map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');map.attributionControl.addAttribution('<a href="https://pleiades.stoa.org" target="_blank" rel="noopener">Pleiades contributors · CC BY 3.0</a> | <a href="https://naturalearthdata.com" target="_blank" rel="noopener">Natural Earth</a> | <a href="https://www.soest.hawaii.edu/wessel/gshhg/" target="_blank" rel="noopener">Shoreline: GSHHG · LGPL</a>');
map.createPane('landBase').style.zIndex=220;map.createPane('reliefPane').style.zIndex=230;map.createPane('coastPane').style.zIndex=240;
L.geoJSON(LAND,{pane:'landBase',interactive:false,smoothFactor:.25,style:{fillColor:'#e9e7d3',fillOpacity:1,stroke:false}}).addTo(map);
// Physical elevation tiles add regional relief; the small overview is limited to broad scales.
map.createPane('detailPane').style.zIndex=235;
const terrainCredit='<a href="https://registry.opendata.aws/terrain-tiles/" target="_blank" rel="noopener">Terrain: Mapzen / AWS</a>';
const terrainPolygons=LAND.geometry.coordinates.map(poly=>{
 const rings=poly.map(ring=>ring.map(([lon,lat])=>L.CRS.EPSG3857.latLngToPoint(L.latLng(lat,lon),0)));
 let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
 for(const p of rings[0]){minX=Math.min(minX,p.x);minY=Math.min(minY,p.y);maxX=Math.max(maxX,p.x);maxY=Math.max(maxY,p.y)}
 return {rings,minX,minY,maxX,maxY};
});
function maskLand(ctx,coords){
 const scale=2**coords.z,left=coords.x*256/scale,top=coords.y*256/scale,right=left+256/scale,bottom=top+256/scale;
 const padding=2/scale,clipBounds=L.bounds([left-padding,top-padding],[right+padding,bottom+padding]);
 ctx.globalCompositeOperation='destination-in';ctx.beginPath();let hasLand=false;
 for(const poly of terrainPolygons){
  if(poly.maxX<left||poly.minX>right||poly.maxY<top||poly.minY>bottom)continue;
  for(const ring of poly.rings){
   const clipped=L.LineUtil.simplify(L.PolyUtil.clipPolygon(ring,clipBounds,false),.25/scale);
   if(clipped.length<3)continue;
   hasLand=true;clipped.forEach((p,i)=>{const x=p.x*scale-coords.x*256,y=p.y*scale-coords.y*256;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();
  }
 }
 if(hasLand)ctx.fill('evenodd');else ctx.clearRect(0,0,256,256);
 ctx.globalCompositeOperation='source-over';
}
const colorNW=L.CRS.EPSG3857.latLngToPoint(L.latLng(44,12),0),colorSE=L.CRS.EPSG3857.latLngToPoint(L.latLng(32,33),0);
function paintColors(ctx,coords,image=colorImage){
 const scale=2**coords.z;
 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 ctx.drawImage(image,colorNW.x*scale-coords.x*256,colorNW.y*scale-coords.y*256,(colorSE.x-colorNW.x)*scale,(colorSE.y-colorNW.y)*scale);
}
const relief=new (L.GridLayer.extend({createTile(coords){
 const tile=document.createElement('canvas');tile.width=tile.height=256;
 const ctx=tile.getContext('2d');paintColors(ctx,coords,beigeImage);maskLand(ctx,coords);return tile;
}}))({pane:'reliefPane',minZoom:5,maxZoom:8.25,noWrap:true,bounds:MAP_BOUNDS,keepBuffer:1,updateWhenIdle:true});
const naturalTerrain=new (L.GridLayer.extend({createTile(coords){
 const tile=document.createElement('canvas');tile.width=tile.height=256;
 const ctx=tile.getContext('2d');paintColors(ctx,coords);maskLand(ctx,coords);tile.dataset.terrain='natural';return tile;
}}))({pane:'reliefPane',minZoom:5,maxZoom:11,maxNativeZoom:11,noWrap:true,bounds:MAP_BOUNDS,keepBuffer:1,updateWhenIdle:true});
const DetailTerrain=L.GridLayer.extend({
 createTile(coords,done){
  const tile=document.createElement('canvas');tile.width=tile.height=256;
  const img=new Image();img.crossOrigin='anonymous';let finished=false;
  const finish=(ok)=>{if(finished)return;finished=true;clearTimeout(timer);img.onload=img.onerror=null;tile.dataset.terrain=ok?'detail':'fallback';if(!ok)tile.getContext('2d').clearRect(0,0,256,256);done(null,tile)};
  const timer=setTimeout(()=>{finish(false);img.src=''},12000);
  tile.cancelTerrain=()=>{finish(false);img.src=''};
  img.onerror=()=>finish(false);
  img.onload=()=>{try{
   const ctx=tile.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
   const raw=ctx.getImageData(0,0,256,256),h=new Float32Array(65536);
   for(let i=0;i<h.length;i++){const k=i*4;h[i]=raw.data[k]*256+raw.data[k+1]+raw.data[k+2]/256-32768}
   const out=ctx.createImageData(256,256),scale=2**coords.z;
   let colors=null;
   if(terrainStyle==='natural'){ctx.clearRect(0,0,256,256);paintColors(ctx,coords);colors=ctx.getImageData(0,0,256,256).data}
   for(let y=0;y<256;y++){
    const lat=map.unproject([coords.x*256+128,coords.y*256+y],coords.z).lat;
    const meters=40075016.686*Math.cos(lat*Math.PI/180)/(256*scale);
    for(let x=0;x<256;x++){
     const i=y*256+x,k=i*4;
     const dx=(h[y*256+Math.min(255,x+1)]-h[y*256+Math.max(0,x-1)])/(meters*(x===0||x===255?1:2));
     const dy=(h[Math.min(255,y+1)*256+x]-h[Math.max(0,y-1)*256+x])/(meters*(y===0||y===255?1:2));
     // Northwest light, moderate slope exaggeration, and the atlas's warm palette.
     const sx=dx*1.6,sy=dy*1.6,light=(.5*sx+.5*sy+.7071)/Math.sqrt(1+sx*sx+sy*sy);
     const shade=Math.max(.53,Math.min(1.12,.66+.48*light));
     const height=Math.max(0,Math.min(1,h[i]/2400));
     out.data[k]=(colors?colors[k]:233-20*height)*shade;out.data[k+1]=(colors?colors[k+1]:231-24*height)*shade;out.data[k+2]=(colors?colors[k+2]:211-25*height)*shade;out.data[k+3]=255;
    }
   }
   ctx.putImageData(out,0,0);
   maskLand(ctx,coords);
   finish(true);
  }catch{finish(false)}};
  img.src=`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${coords.z}/${coords.x}/${coords.y}.png`;
  return tile;
 }
});
const detailedTerrain=new DetailTerrain({pane:'detailPane',minZoom:7,maxZoom:11,maxNativeZoom:11,tileSize:256,noWrap:true,bounds:MAP_BOUNDS,keepBuffer:1,updateWhenIdle:true,attribution:terrainCredit});
detailedTerrain.on('tileunload',e=>e.tile.cancelTerrain?.());
function updateTerrainStatus(){
 // The small overview raster is never stretched into a close regional view.
 const showOverview=terrainStyle==='beige'&&$('relief').checked&&map.getZoom()<=8.25;
 if(showOverview&&!map.hasLayer(relief))relief.addTo(map);
 else if(!showOverview&&map.hasLayer(relief))map.removeLayer(relief);
 const active=$('relief').checked&&$('detail-terrain').checked;
 const tiles=Object.values(detailedTerrain._tiles||{}).filter(t=>t.current);
 const failed=tiles.some(t=>t.el.dataset.terrain==='fallback');
 $('terrain-status').textContent=!$('relief').checked?'Relief hidden':!active?(map.getZoom()<=8.25?'Overview relief':'Physical coastline · detail hidden'):map.getZoom()<6.5?'Detailed terrain appears as you zoom in':detailedTerrain.isLoading()?'Loading detailed terrain…':failed?(map.getZoom()<=8.25?'Some terrain unavailable · overview relief beneath':'Some terrain unavailable · physical coastline beneath'):tiles.some(t=>t.el.dataset.terrain==='detail')?'Detailed terrain':(map.getZoom()<=8.25?'Overview relief':'Physical coastline');
 if(terrainStyle==='natural')$('terrain-status').textContent='Natural land colors · '+$('terrain-status').textContent.replace('overview relief beneath','local colors beneath');
}
function syncTerrain(){
 const shaded=$('relief').checked,detail=shaded&&$('detail-terrain').checked;
 if(terrainStyle==='natural')naturalTerrain.addTo(map);else map.removeLayer(naturalTerrain);
 detail?detailedTerrain.addTo(map):map.removeLayer(detailedTerrain);
 updateTerrainStatus();
}
detailedTerrain.on('loading load tileload',updateTerrainStatus);
map.on('zoomend',updateTerrainStatus);
window.addEventListener('online',()=>{if(map.hasLayer(detailedTerrain))detailedTerrain.redraw()});
$('detail-terrain').onchange=syncTerrain;
$('terrain-colors').value=terrainStyle;
if(!colorAvailable)$('terrain-colors').querySelector('[value="natural"]').disabled=true;
function setTerrainStyle(value){
 terrainStyle=value==='natural'&&colorAvailable?'natural':'beige';$('terrain-colors').value=terrainStyle;
 $('color-note').hidden=terrainStyle!=='natural';
 try{localStorage.setItem('xenophon-atlas-terrain',terrainStyle)}catch{}
 syncTerrain();detailedTerrain.redraw();
}
$('terrain-colors').onchange=()=>setTerrainStyle($('terrain-colors').value);
$('color-note').hidden=terrainStyle!=='natural';
syncTerrain();
L.geoJSON(LAND,{pane:'coastPane',interactive:false,smoothFactor:.25,style:{fill:false,color:'#638c94',weight:.6,opacity:.65}}).addTo(map);
// Geographical regions of the Classical period; approximate, not political borders.
let regionsVisible=false;
map.createPane('classicalRegions').style.zIndex=260;
map.getPane('classicalRegions').style.pointerEvents='none';
const regionOverlay=L.geoJSON(CLASSICAL_REGIONS,{pane:'classicalRegions',interactive:false,style:f=>({color:f.properties.color,fillColor:f.properties.color,fillOpacity:.32,opacity:.95,weight:1.8,dashArray:'5 3'})});
const regionCredit='<a href="https://commons.wikimedia.org/wiki/File:Ancient_Regions_Greece_and_Asia-en.svg" target="_blank" rel="noopener">Regions adapted from Anaxicrates / UndercoverClassicist · CC BY 4.0</a>';
function setRegionsVisible(visible){
 regionsVisible=visible;
 $('regions-toggle').setAttribute('aria-pressed',String(visible));
 $('regions-info').classList.toggle('hidden',!visible);
 if(visible){regionOverlay.addTo(map);map.attributionControl.addAttribution(regionCredit)}
 else{map.removeLayer(regionOverlay);map.attributionControl.removeAttribution(regionCredit)}
 atlas.draw();updateHash();
}
function renderRegionKey(){
 $('regions-key').replaceChildren();
 for(const f of CLASSICAL_REGIONS.features){
  const p=f.properties,b=document.createElement('button');b.className='region-key-item';
  const swatch=document.createElement('span');swatch.className='region-swatch';swatch.style.background=p.color;swatch.setAttribute('aria-hidden','true');
  b.append(swatch,document.createTextNode(lang==='gr'?p.gr:p.en));b.title=p.note;
  b.onclick=()=>{map.fitBounds(L.geoJSON(f).getBounds(),{padding:[30,45],maxZoom:9,animate:false});$('view-title').textContent=lang==='gr'?p.gr:p.en;$('region-description').textContent=p.note;document.body.classList.remove('menu-open');$('mobile-menu').setAttribute('aria-expanded','false')};
  $('regions-key').append(b);
 }
}
const GeographicLabels=L.Layer.extend({
 onAdd(m){this.canvas=L.DomUtil.create('canvas','atlas-canvas geography-canvas');m.getPanes().overlayPane.appendChild(this.canvas);m.on('zoomstart',this.hide,this);this.cityBoxes=[];this.drawn=[];},
 hide(){this.canvas.style.visibility='hidden';},
 onRemove(m){m.off('zoomstart',this.hide,this);this.canvas.remove();},
 setCityBoxes(boxes){this.cityBoxes=boxes.slice();},
 priorityBoxes(){
  if(!$('landscape').checked)return [];
  const ctx=this.canvas.getContext('2d');ctx.font='400 13px Georgia, "Times New Roman", serif';
  return GEOGRAPHY.filter(g=>Number(g.priority)>0&&map.getZoom()>=g.min_zoom&&map.getZoom()<=g.max_zoom).map(g=>{
   const point=map.latLngToContainerPoint([g.lat,g.lon]),w=ctx.measureText(placeLabel(g,lang)).width;
   return {feature:g,x:point.x-w/2-5,y:point.y-13,w:w+10,h:21};
  });
 },
 draw(){
  if(!this.canvas||!map._loaded)return;
  const size=map.getSize(),ratio=devicePixelRatio||1,c=this.canvas,zoom=map.getZoom();
  c.style.visibility='visible';L.DomUtil.setPosition(c,map.containerPointToLayerPoint([0,0]));
  c.width=size.x*ratio;c.height=size.y*ratio;c.style.width=size.x+'px';c.style.height=size.y+'px';
  const ctx=c.getContext('2d');ctx.scale(ratio,ratio);ctx.textAlign='center';this.drawn=[];
  if(!$('landscape').checked)return;
  const boxes=this.cityBoxes.filter(b=>!b.feature).slice();
  const free=b=>b.x>5&&b.y>5&&b.x+b.w<size.x-5&&b.y+b.h<size.y-35&&boxes.every(a=>a.x+a.w<b.x||a.x>b.x+b.w||a.y+a.h<b.y||a.y>b.y+b.h);
  const features=GEOGRAPHY.filter(g=>zoom>=g.min_zoom&&zoom<=g.max_zoom).sort((a,b)=>Number(b.priority)-Number(a.priority)||a.level-b.level);
  for(const g of features){
   if(g.type==='island'&&drawn.some(d=>d.label&&d.p.en===g.name_en&&map.distance([d.p.lat,d.p.lon],[g.lat,g.lon])<10000))continue;
   const point=map.latLngToContainerPoint([g.lat,g.lon]),text=placeLabel(g,lang),water=['sea','strait'].includes(g.type);
   const fontSize=water?14:g.type==='region'?15:13;
   ctx.font=`${water?'italic':g.type==='region'?'600':'400'} ${fontSize}px Georgia, "Times New Roman", serif`;
   const w=ctx.measureText(text).width;
   const box={x:point.x-w/2-5,y:point.y-fontSize,w:w+10,h:fontSize+8};
   if(!free(box))continue;boxes.push(box);
   ctx.lineWidth=3;ctx.lineJoin='round';ctx.strokeStyle=water?'#c5dde2bb':'#faf7e9cc';ctx.strokeText(text,point.x,point.y);
   ctx.fillStyle=water?'#356776bb':'#4b655abb';ctx.fillText(text,point.x,point.y);
   this.drawn.push({feature:g,text,box});
  }
 }
});

const CanvasAtlas=L.Layer.extend({onAdd(m){this._map=m;this.canvas=L.DomUtil.create('canvas','atlas-canvas');m.getPanes().overlayPane.appendChild(this.canvas);m.on('moveend zoomend resize',this.draw,this);m.on('zoomstart',this.hide,this);this.draw()},hide(){this.canvas.style.visibility='hidden'},onRemove(m){m.off('moveend zoomend resize',this.draw,this);m.off('zoomstart',this.hide,this);this.canvas.remove()},draw(){if(!this._map._loaded)return;this.canvas.style.visibility='visible';const size=map.getSize(),ratio=devicePixelRatio||1,c=this.canvas;L.DomUtil.setPosition(c,map.containerPointToLayerPoint([0,0]));c.width=size.x*ratio;c.height=size.y*ratio;c.style.width=size.x+'px';c.style.height=size.y+'px';const ctx=c.getContext('2d');ctx.scale(ratio,ratio);const zoom=map.getZoom(),bounds=map.getBounds(),dense=$('dense').checked;
 // Declutter labels in screen space; larger places always get first choice.
 const boxes=[],grid=new Map(),cell=55;
 function cells(b){let a=[];for(let x=Math.floor(b.x/cell);x<=Math.floor((b.x+b.w)/cell);x++)for(let y=Math.floor(b.y/cell);y<=Math.floor((b.y+b.h)/cell);y++)a.push(x+','+y);return a}
 function reserve(b){boxes.push(b);for(const key of cells(b)){if(!grid.has(key))grid.set(key,[]);grid.get(key).push(b)}}
 function free(b){if(b.x<5||b.y<5||b.x+b.w>size.x-5||b.y+b.h>size.y-5)return false;return cells(b).every(key=>(grid.get(key)||[]).every(a=>a.x+a.w<b.x||a.x>b.x+b.w||a.y+a.h<b.y||a.y>b.y+b.h))}
 reserve({x:10,y:8,w:Math.min(size.x-85,245),h:innerWidth<=800?116:70});
 for(const b of geographicLabels.priorityBoxes())reserve(b);reserve({x:size.x-65,y:0,w:65,h:100});
 // Settlement labels receive priority over geographic labels.


 let visible=PLACES.filter(p=>bounds.contains([p.lat,p.lon])&&$(p.category).checked&&($('rough').checked||p.precision!=='rough')&&(!$('greek-only').checked||p.gr));
 visible.sort((a,b)=>(a.id===selected?-10:a.rank)-(b.id===selected?-10:b.rank)||(b.gr?1:0)-(a.gr?1:0)||a.en.localeCompare(b.en));
 drawn=[];const labelPaint=[];let labelCount=0,dotCount=0;
 for(const p of visible){const pt=map.latLngToContainerPoint([p.lat,p.lon]);const chosen=p.id===selected;
 if(!visibleAtZoom(p,zoom))continue;
 const color=p.category==='settlement'?'#894d37':p.category==='landscape'?'#2d7275':'#827044';let r=chosen?5:p.rank===1?3.2:p.rank===2?2.6:zoom<7.5?1.3:2;

 ctx.beginPath();ctx.arc(pt.x,pt.y,r,0,Math.PI*2);ctx.fillStyle=p.precision==='rough'?'#f6f1e3':color;ctx.fill();ctx.lineWidth=chosen?2:1;ctx.strokeStyle=color;ctx.stroke();dotCount++;
 if(chosen){ctx.beginPath();ctx.arc(pt.x,pt.y,9,0,Math.PI*2);ctx.strokeStyle='#a55537';ctx.stroke()}
 const text=placeLabel(p,lang);
 const fontSize=p.rank===1?15:p.rank===2?13:12;ctx.font=(p.rank===1?'600 ':'')+fontSize+'px Georgia, "Times New Roman", serif';
 const w=ctx.measureText(text).width;const gap=dense?1:4;
 const alternatives=[{x:pt.x+r+5,y:pt.y-fontSize*.65},{x:pt.x-w-r-5,y:pt.y-fontSize*.65},{x:pt.x-w/2,y:pt.y-r-fontSize-5},{x:pt.x-w/2,y:pt.y+r+4},{x:pt.x+r+5,y:pt.y+r+6},{x:pt.x-w-r-5,y:pt.y+r+6},{x:pt.x-w-r-5,y:pt.y-r-fontSize-7},{x:pt.x+r+5,y:pt.y-r-fontSize-7},{x:pt.x-w/2,y:pt.y-r-fontSize-20},{x:pt.x-w/2,y:pt.y+r+20}];
 let label=null;
 for(const a of alternatives){const b={x:a.x-gap,y:a.y-gap,w:w+gap*2,h:fontSize+gap*2};if(free(b)||chosen){label={...a,w,h:fontSize};reserve(b);break}}
 if(label){labelPaint.push({text,label,fontSize,font:ctx.font,color:chosen?'#8a3d22':p.category==='landscape'?'#305c60':'#293d37'});labelCount++}
 drawn.push({p,x:pt.x,y:pt.y,label,text,r});
 }
 for(const t of labelPaint){ctx.font=t.font;ctx.lineJoin='round';ctx.lineWidth=3.2;ctx.strokeStyle='#faf7e9ee';ctx.strokeText(t.text,t.label.x,t.label.y+t.fontSize*.85);ctx.fillStyle=t.color;ctx.fillText(t.text,t.label.x,t.label.y+t.fontSize*.85)}
 geographicLabels.setCityBoxes(boxes);geographicLabels.draw();
 lastCount=dotCount;$('map-status').textContent=`${dotCount.toLocaleString()} places · ${labelCount.toLocaleString()} labels in view`;
 $('caption').textContent=regionsVisible?'Classical regions · 480–323 BCE · approximate geographical boundaries':lang==='gr'?'Ancient Greek names · † Greek form unavailable':'Zoom closer to reveal more places · select a dot for its source';
 }});
const geographicLabels = new GeographicLabels();
const atlas=new CanvasAtlas();
function home(region='home'){$('region-description').textContent='';currentRegion=region;map.fitBounds(regions[region].bounds,{padding:[22,30],maxZoom:region==='home'?7.5:10,animate:false});$('view-title').textContent=regions[region].name;document.body.classList.remove('menu-open');$('mobile-menu').setAttribute('aria-expanded','false')}
home();geographicLabels.addTo(map);atlas.addTo(map);
function updateHash(){const c=map.getCenter();history.replaceState(null,'',`#${map.getZoom().toFixed(2)}/${c.lat.toFixed(4)}/${c.lng.toFixed(4)}/${lang}${selected?'/'+selected:regionsVisible?'/':''}${regionsVisible?'/regions':''}`)}
function loadHash(){const a=location.hash.slice(1).split('/'),z=Number(a[0]),lat=Number(a[1]),lon=Number(a[2]);if(a.length>=4&&z>=5&&z<=10.5&&lat>=MAP_BOUNDS[0][0]&&lat<=MAP_BOUNDS[1][0]&&lon>=MAP_BOUNDS[0][1]&&lon<=MAP_BOUNDS[1][1]){lang=a[3]==='gr'?'gr':'en';map.setView([lat,lon],z,{animate:false});if(a[4]&&PLACES.some(p=>p.id===a[4]))selected=a[4];if(a[5]==='regions')setRegionsVisible(true)}}
loadHash();map.on('moveend',updateHash);
function setLanguage(value){lang=value;$('lang-en').setAttribute('aria-pressed',lang==='en');$('lang-gr').setAttribute('aria-pressed',lang==='gr');try{localStorage.setItem('xenophon-atlas-language',lang)}catch{}renderRegionKey();atlas.draw();search();if(selected)showDetail(PLACES.find(p=>p.id===selected));updateHash()}
$('regions-toggle').onclick=()=>{setRegionsVisible(!regionsVisible);document.body.classList.remove('menu-open');$('mobile-menu').setAttribute('aria-expanded','false')};
$('lang-en').onclick=()=>setLanguage('en');$('lang-gr').onclick=()=>setLanguage('gr');
function showDetail(p){if(!p)return;selected=p.id;$('detail').className='detail';const name=lang==='gr'?(p.gr||p.en):p.en;const alternate=lang==='gr'?p.en:(p.gr||'Greek form not available');$('detail').innerHTML=`<button class="close" id="close-detail" aria-label="Close place details">×</button><div class="eyebrow">${safe(p.type)} · ${safe(p.region)} · Level ${p.level}</div><h2 ${lang==='gr'&&p.gr?'lang="grc"':''}>${safe(name)}</h2><div class="alternate">${safe(alternate)}</div><span class="badge">${p.precision==='rough'?'Approximate location':'Gazetteer representative point'}</span>${!p.gr?'<span class="badge">Greek name unavailable</span>':''}${p.description?`<p><strong>Pleiades summary (across periods)</strong><br>${safe(p.description)}</p>`:''}${p.notes?`<p class="tiny">${safe(p.notes)}</p>`:''}${p.xenophon_ref?`<p>${safe(p.xenophon_ref)}</p>`:''}<p class="tiny">${p.lat.toFixed(4)}° N · ${p.lon.toFixed(4)}° E${p.precision==='rough'?' — coordinates are a rough representative position.':''}</p><a href="${safe(p.url)}" target="_blank" rel="noopener">View place in Pleiades ↗</a>${p.greekSource.startsWith('https://')?`<br><a href="${safe(p.greekSource)}" target="_blank" rel="noopener">Greek-name source ↗</a>`:p.gr?'<p class="tiny">Editorial Classical Greek display form.</p>':''}<p class="tiny">${safe(p.name_status)}. Coordinates checked against Pleiades on ${safe(p.verified_on)}.</p>`;$('close-detail').onclick=()=>{selected=null;$('detail').className='hidden';atlas.draw();updateHash()};atlas.draw();updateHash()}
function choose(p){$(p.category).checked=true;if(p.precision==='rough')$('rough').checked=true;if(!p.gr)$('greek-only').checked=false;map.setView([p.lat,p.lon],Math.max(map.getZoom(),9),{animate:false});showDetail(p);$('detail').scrollIntoView({block:'nearest'});if(innerWidth<=800){document.body.classList.add('menu-open');$('mobile-menu').setAttribute('aria-expanded','true')}}
map.on('click',e=>{const q=map.latLngToContainerPoint(e.latlng);let hits=drawn.filter(x=>Math.hypot(x.x-q.x,x.y-q.y)<12||(x.label&&q.x>=x.label.x&&q.x<=x.label.x+x.label.w&&q.y>=x.label.y&&q.y<=x.label.y+x.label.h));hits.sort((a,b)=>Math.hypot(a.x-q.x,a.y-q.y)-Math.hypot(b.x-q.x,b.y-q.y));if(hits.length){showDetail(hits[0].p);if(innerWidth<=800){document.body.classList.add('menu-open');$('mobile-menu').setAttribute('aria-expanded','true')}}});
let found=[];
function search(){const q=fold($('search').value.trim());$('results').replaceChildren();if(!q){found=[];return}found=PLACES.filter(p=>p.search.includes(q));found.sort((a,b)=>((fold(a.en)===q||fold(a.gr)===q)?-1:0)-((fold(b.en)===q||fold(b.gr)===q)?-1:0)||a.rank-b.rank||a.en.localeCompare(b.en));const msg=document.createElement('div');msg.className='result-meta';msg.textContent=found.length?`${found.length} matches${found.length>40?' · showing first 40':''}`:'No matching place in this edition. Try an alternate ancient spelling.';$('results').append(msg);for(const p of found.slice(0,40)){const b=document.createElement('button');b.className='result';b.innerHTML=`<strong>${safe(lang==='gr'?(p.gr||p.en+' †'):p.en)}</strong><small>${safe(lang==='gr'?p.en:p.gr||'Greek form unavailable')} · ${p.lat.toFixed(2)}° N, ${p.lon.toFixed(2)}° E</small>`;b.onclick=()=>choose(p);$('results').append(b)}}
$('search').addEventListener('input',search);$('search').addEventListener('keydown',e=>{if(e.key==='Enter'&&found.length){e.preventDefault();choose(found[0])}if(e.key==='Escape'){$('search').value='';search()}if(e.key==='ArrowDown'){$('results').querySelector('button')?.focus();e.preventDefault()}});$('clear-search').onclick=()=>{$('search').value='';search();$('search').focus()};
for(const b of document.querySelectorAll('[data-region]'))b.onclick=()=>home(b.dataset.region);
for(const id of ['settlement','site','landscape','rough','greek-only','dense'])$(id).onchange=()=>atlas.draw();
$('relief').onchange=syncTerrain;
$('coverage').textContent=`${PLACES.length.toLocaleString()} places · ${greekCount.toLocaleString()} with Greek names`;
$('source-summary').textContent=`${PLACES.length} curated places: ${PLACES.filter(p=>p.level===1).length} at overview level; ${GEOGRAPHY.length} separate geographic labels. Pleiades coordinates verified 30 September 2026.`;
$('about-count').textContent=`This edition contains ${PLACES.length.toLocaleString()} mapped places, with ${greekCount.toLocaleString()} ancient Greek display names. English mode uses familiar English names for the main cities and scholarly romanizations elsewhere.`;
$('about-open').onclick=()=>$('about').showModal();$('about-close').onclick=()=>$('about').close();$('about').onclick=e=>{if(e.target===$('about'))$('about').close()};
function closeExplorer(){document.body.classList.remove('menu-open');$('mobile-menu').setAttribute('aria-expanded','false');}
$('close-explorer').onclick=()=>{closeExplorer();$('mobile-menu').focus();};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-open'))closeExplorer();});
$('mobile-menu').onclick=()=>{const open=document.body.classList.toggle('menu-open');$('mobile-menu').setAttribute('aria-expanded',open)};
$('print-map').onclick=()=>window.print();
function toast(s){$('toast').textContent=s;$('toast').classList.remove('hidden');setTimeout(()=>$('toast').classList.add('hidden'),3500)}
$('copy-view').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);toast(location.protocol==='file:'?'Local view link copied; it works on this computer.':'View link copied.')}catch{toast('Copy the address in your browser to save this view.')}};
window.addEventListener('beforeprint',()=>map.invalidateSize());window.addEventListener('afterprint',()=>map.invalidateSize());
setLanguage(lang);
window.ATLAS={map,places:PLACES,geography:GEOGRAPHY,getDrawn:()=>drawn,getGeographicLabels:()=>geographicLabels.drawn,getLanguage:()=>lang,setLanguage,choose,home,levelZooms:LEVEL_ZOOMS,terrain:detailedTerrain,naturalTerrain,setTerrainStyle,getTerrainStyle:()=>terrainStyle};
// Expose the existing search and place-selection actions where WebMCP is supported.
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();
 const atlasTools=[
  {name:'find_atlas_places',title:'Find places in the atlas',description:'Search the existing ancient-place catalogue in English or Greek. Does not change the map.',inputSchema:{type:'object',properties:{query:{type:'string',minLength:1,maxLength:200}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute(input){if(!input||typeof input.query!=='string'||!input.query.trim()||input.query.length>200)throw new Error('Enter a place name of 1–200 characters.');const q=fold(input.query.trim());return PLACES.filter(p=>p.search.includes(q)).slice(0,20).map(p=>({id:p.id,english:p.en,greek:p.gr,latitude:p.lat,longitude:p.lon}))}},
  {name:'show_atlas_place',title:'Show a place on the atlas',description:'Navigate the visible map to a catalogue place and open its details; optionally change place-name language.',inputSchema:{type:'object',properties:{place_id:{type:'string'},language:{type:'string',enum:['en','gr']}},required:['place_id'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input.place_id!=='string'||(input.language!==undefined&&!['en','gr'].includes(input.language)))throw new Error('Provide a valid place ID and an optional en or gr language.');const p=PLACES.find(p=>p.id===input.place_id);if(!p)throw new Error('Place not found in this atlas.');if(input.language)setLanguage(input.language);choose(p);return {id:p.id,english:p.en,greek:p.gr,language:lang}}}
 ];
 for(const tool of atlasTools){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch{}}
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}

}
initAtlas().catch(error=>{console.error(error);document.getElementById('map-status').textContent='Atlas data could not load. Reload this page or check the server.';});
