(function () {
  const {isAdmin,shell,escape:e,request}=window.xenophonAdminWorkspace;if(!isAdmin || !shell)return;
  const params=new URLSearchParams(location.search);let modules=[],lesson,activityType='topic-practice',modeType='questions',topic='',offset=0,dirty=false,versions;
  const labels={'topic-practice':'Topic Practice','grammar-exercises':'Grammar Exercises','lesson-quiz':'Final Lesson Quiz','module-review-practice':'Module Review','module-exam':'Module Exam'};
  const topicLabel=value=>value.split('-').map(w=>w[0]?.toUpperCase()+w.slice(1)).join(' ');
  const field=(label,key,value,tag='input',extra='')=>`<label class="admin-field"><span>${e(label)}</span>${tag==='textarea'?`<textarea data-field="${key}" rows="3" ${extra}>${e(value)}</textarea>`:`<input data-field="${key}" value="${e(value)}" ${extra}>`}</label>`;
  async function overview(){
    shell.innerHTML='<p role="status">Loading course content…</p>';
    try{({modules}=await request('/api/admin/course-content',{action:'list'}));
      shell.innerHTML=`<section class="card admin-card"><div class="admin-grid"><label class="admin-field"><span>Find a lesson</span><input type="search" data-content-search placeholder="Lesson number, title, or module"></label><label class="admin-field"><span>Status</span><select data-content-filter><option value="all">All lessons</option><option value="published">Published content</option><option value="draft">Saved drafts</option><option value="planned">Planned lessons</option></select></label></div><p class="muted">Counts below describe published content. Saved drafts remain separate until you publish them.</p><p role="status" data-content-count></p></section><div data-content-list></div>`;
      shell.querySelector('[data-content-search]').addEventListener('input',renderList);shell.querySelector('[data-content-filter]').addEventListener('change',renderList);renderList();
    }catch(error){shell.innerHTML=`<section class="card admin-card"><p role="alert">${e(error.message)}</p><button class="secondary-button" data-content-retry>Retry</button></section>`;shell.querySelector('button').addEventListener('click',overview);}
  }
  function renderList(){
    const search=shell.querySelector('[data-content-search]').value.trim().toLowerCase(),filter=shell.querySelector('[data-content-filter]').value;let count=0;
    shell.querySelector('[data-content-list]').innerHTML=modules.map(module=>{
      const lessons=module.lessons.filter(l=>(!search || `${l.number} ${l.title} ${l.id} ${module.label} ${module.title}`.toLowerCase().includes(search)) && (filter==='all' || filter==='draft' && l.hasDraft || filter==='planned' && !l.hasContent || filter==='published' && l.hasContent && l.isPublished));count+=lessons.length;
      if(!lessons.length)return '';
      return `<section class="card admin-card"><h2>${e(module.label)} · ${e(module.title)}</h2><div class="admin-lesson-list">${lessons.map(l=>{
        const standard=/^lesson-\d+$/.test(l.id),number=l.id.replace('lesson-','');const open=standard?`lesson.html?lesson=${number}&page=1`:l.pageUrl || 'course-introduction.html';
        const link=(title,page)=>`<a class="secondary-button" href="lesson.html?lesson=${number}&page=${page}&edit=1">${title}</a>`;
        return `<article class="admin-lesson-row"><div><h3>${e(l.number)} · ${e(l.title)}</h3><p><span class="admin-status">${l.hasContent?(l.isPublished?'Published':'Unpublished'):'Planned'}</span>${l.hasDraft?' <span class="admin-status admin-status--draft">Saved draft</span>':''}${l.publishedVersion?` <span class="muted">Version ${l.publishedVersion}</span>`:''}</p></div>
          <dl class="admin-counts">${Object.entries(l.counts).map(([k,n])=>`<div><dt>${{vocabulary:'Vocabulary',reading:'Reading paragraphs',grammar:'Grammar topics',practice:'Practice questions',exercises:'Grammar exercises',quiz:'Quiz questions'}[k]}</dt><dd>${n}</dd></div>`).join('')}</dl>
          ${Object.keys(l.topicCounts).length?`<details><summary>Practice questions by topic</summary><ul>${Object.entries(l.topicCounts).map(([t,n])=>`<li>${e(topicLabel(t))}: ${n}</li>`).join('')}</ul></details>`:''}
          <div class="admin-actions"><a class="primary-button" href="${e(open)}">Open Lesson</a>${standard?`${link('Edit Reading',1)}${link('Edit Vocabulary',1)}${link('Edit Grammar',2)}${link('Edit Culture / History',3)}<a class="secondary-button" href="course-content.html?lesson=${number}&section=questions">Edit Question Banks</a>`:'<span class="muted">Introduction material is available through Open Lesson.</span>'}</div>
        </article>`;
      }).join('')}</div></section>`;
    }).join('');shell.querySelector('[data-content-count]').textContent=`${count} lesson${count===1?'':'s'} shown.`;
  }
  function activeMode(){return (lesson.activities[activityType].modes || []).find(m=>m.type===modeType);}
  function items(){const activity=lesson.activities[activityType];return modeType==='questions' ? (activity.questions || []).filter(q=>!topic || q.topic===topic) : activeMode()?.items || [];}
  function persist(){
    const activity=lesson.activities[activityType],shown=items().slice(offset,offset+10);
    shell.querySelectorAll('[data-item]').forEach((row,i)=>{
      const item=shown[i];row.querySelectorAll('[data-field]').forEach(input=>{item[input.dataset.field]=input.value;});
      if(modeType==='questions' && item.type!=='translation') item.choices=[...row.querySelectorAll('[data-choice]')].map((choice,i)=>({...item.choices[i],text:choice.querySelector('input[type="text"]').value,correct:choice.querySelector('input[type="radio"]').checked}));
      if(modeType==='fill-in-the-blank')item.accepted=row.querySelector('[data-accepted]').value.split('\n').map(t=>t.trim()).filter(Boolean);
      if(modeType==='translation-builder'){
        item.choices=row.querySelector('[data-phrases]').value.split('\n').map(t=>t.trim()).filter(Boolean);
        item.slots=[...row.querySelectorAll('[data-slot]')].map(s=>({label:s.querySelector('[data-slot-label]').value,answer:s.querySelector('[data-slot-answer]').value}));
      }
      if(modeType==='sentence-labeling')item.tokens=[...row.querySelectorAll('[data-token]')].map(t=>({text:t.querySelector('input').value,answer:t.querySelector('select').value}));
    });
    if(shell.querySelector('[data-bank-title]'))activity.title=shell.querySelector('[data-bank-title]').value;
    if(shell.querySelector('[data-bank-threshold]'))activity.threshold=Number(shell.querySelector('[data-bank-threshold]').value);
  }
  function renderEditor(){
    const activity=lesson.activities[activityType],list=items(),topics=[...new Set((activity.questions || []).map(q=>q.topic).filter(Boolean))];
    shell.innerHTML=`<form class="admin-form" data-question-editor><section class="card admin-card"><a href="course-content.html">← All Course Content</a><h2>${e(lesson.title)} — Question Banks</h2><p class="muted">${versions.hasDraft?'Editing the saved draft. Students continue to see the published version.':'Editing published content. Save a draft to keep your work private until publication.'}</p>
      <div class="admin-grid"><label class="admin-field"><span>Question bank</span><select data-bank>${Object.keys(labels).map(k=>`<option value="${k}" ${k===activityType?'selected':''}>${labels[k]}${lesson.activities[k]?'':' — new bank'}</option>`).join('')}</select></label>
      <label class="admin-field"><span>Category</span><select data-bank-mode><option value="questions">Multiple Choice${activity.questions?.some(q=>q.type==='translation')?' / Translation':''}</option>${(activity.modes || []).map(m=>`<option value="${e(m.type)}" ${m.type===modeType?'selected':''}>${e(m.title)}</option>`).join('')}</select></label>
      ${topics.length&&modeType==='questions'?`<label class="admin-field"><span>Practice topic</span><select data-bank-topic><option value="">All topics</option>${topics.map(t=>`<option value="${e(t)}" ${t===topic?'selected':''}>${e(topicLabel(t))}</option>`).join('')}</select></label>`:''}
      <label class="admin-field"><span>Bank title</span><input data-bank-title value="${e(activity.title || labels[activityType])}" required></label>
      ${activityType!=='topic-practice'?`<label class="admin-field"><span>Passing score (%)</span><input data-bank-threshold type="number" min="1" max="100" step="1" value="${activity.threshold || 80}" required></label>`:''}</div>
      <p>${list.length} ${modeType==='questions'?'questions':'exercises'} · Showing ${list.length?offset+1:0}–${Math.min(offset+10,list.length)}</p></section>
      <div data-editor-items>${list.slice(offset,offset+10).map((item,i)=>renderItem(item,i+offset)).join('')}</div>
      <div class="admin-actions"><button type="button" class="secondary-button" data-add-item>Add ${modeType==='questions'?'Question':'Exercise'}</button><button type="button" class="secondary-button" data-editor-previous ${offset===0?'disabled':''}>Previous 10</button><button type="button" class="secondary-button" data-editor-next ${offset+10>=list.length?'disabled':''}>Next 10</button></div>
      <section class="card admin-card"><p>Save Draft keeps these changes available for later editing. Publish Changes updates the lesson students see.</p><div class="admin-actions"><button class="secondary-button" type="button" data-save-draft>Save Draft</button><button class="primary-button" type="submit">Publish Changes</button><span data-content-status role="status"></span></div></section></form>`;
    shell.querySelector('[data-bank-mode]').value=modeType;
    shell.querySelector('form').addEventListener('input',event=>{if(!event.target.matches('[data-bank], [data-bank-mode], [data-bank-topic]'))dirty=true;});
    for(const [selector,key] of [['[data-bank]','bank'],['[data-bank-mode]','mode'],['[data-bank-topic]','topic']])shell.querySelector(selector)?.addEventListener('change',event=>{persist();if(key==='bank'){activityType=event.target.value;lesson.activities[activityType] ||= {title:labels[activityType],questions:[],threshold:80};modeType='questions';topic='';}else if(key==='mode'){modeType=event.target.value;topic='';}else topic=event.target.value;offset=0;renderEditor();});
    shell.querySelector('[data-editor-previous]').addEventListener('click',()=>{persist();offset-=10;renderEditor();shell.scrollIntoView({block:'start'});});
    shell.querySelector('[data-editor-next]').addEventListener('click',()=>{persist();offset+=10;renderEditor();shell.scrollIntoView({block:'start'});});
    shell.querySelectorAll('[data-remove-item]').forEach(button=>button.addEventListener('click',()=>{persist();const item=list[Number(button.dataset.removeItem)];const source=modeType==='questions'?activity.questions:activeMode().items;source.splice(source.indexOf(item),1);dirty=true;if(offset>=items().length)offset=Math.max(0,offset-10);renderEditor();}));
    shell.querySelectorAll('[data-add-choice]').forEach(button=>button.addEventListener('click',()=>{persist();list[Number(button.dataset.addChoice)].choices.push({text:'',correct:false});dirty=true;renderEditor();}));
    shell.querySelectorAll('[data-remove-choice]').forEach(button=>button.addEventListener('click',()=>{persist();const [index,choice]=button.dataset.removeChoice.split(':').map(Number);if(list[index].choices.length>2){list[index].choices.splice(choice,1);dirty=true;renderEditor();}}));
    shell.querySelectorAll('[data-add-token]').forEach(button=>button.addEventListener('click',()=>{persist();list[Number(button.dataset.addToken)].tokens.push({text:'',answer:''});dirty=true;renderEditor();}));
    shell.querySelectorAll('[data-remove-token]').forEach(button=>button.addEventListener('click',()=>{persist();const [i,j]=button.dataset.removeToken.split(':').map(Number);list[i].tokens.splice(j,1);dirty=true;renderEditor();}));
    shell.querySelectorAll('[data-add-slot]').forEach(button=>button.addEventListener('click',()=>{persist();list[Number(button.dataset.addSlot)].slots.push({label:'',answer:''});dirty=true;renderEditor();}));
    shell.querySelectorAll('[data-remove-slot]').forEach(button=>button.addEventListener('click',()=>{persist();const [i,j]=button.dataset.removeSlot.split(':').map(Number);list[i].slots.splice(j,1);dirty=true;renderEditor();}));
    shell.querySelector('[data-add-item]').addEventListener('click',()=>{persist();const item=modeType==='questions'?{id:`${lesson.id}-${activityType}-${crypto.randomUUID()}`,type:'multiple_choice',topic:topic || (activityType==='topic-practice'?topics[0] || 'general':''),prompt:'',choices:[{text:'',correct:true},{text:'',correct:false}]}:modeType==='sentence-labeling'?{sentence:'',tokens:[{text:'',answer:'S'}]}:modeType==='translation-builder'?{prompt:'',direction:'english-greek',choices:[],slots:[{label:'Subject',answer:''},{label:'Verb',answer:''},{label:'Direct object',answer:''}]}:{prompt:'',answer:''};(modeType==='questions'?activity.questions:activeMode().items).push(item);dirty=true;offset=Math.floor((items().length-1)/10)*10;renderEditor();});
    shell.querySelector('[data-save-draft]').addEventListener('click',()=>save('draft'));
    shell.querySelector('form').addEventListener('submit',event=>{event.preventDefault();save('publish');});
  }
  function renderItem(item,index){
    let body='';
    if(modeType==='questions'){
      body=field('Question','prompt',item.prompt,'textarea','required')+field('Explanation','explanation',item.explanation || '','textarea');
      if(item.topic)body+=field('Topic','topic',item.topic,'input','required');
      if(item.type==='translation')body+='<p class="muted">This translation question is shown for review. Its checker references are maintained with the translation curriculum.</p>';
      else body+=`<div class="admin-choices">${item.choices.map((c,j)=>`<div data-choice class="admin-choice"><label><input type="radio" name="correct-${index}" ${c.correct?'checked':''}> Correct answer</label><input type="text" value="${e(c.text)}" aria-label="Question ${index+1}, choice ${j+1}" required><button type="button" class="small-link" data-remove-choice="${index}:${j}" ${item.choices.length<=2?'disabled':''}>Remove choice</button></div>`).join('')}</div><button type="button" class="secondary-button" data-add-choice="${index}">Add Choice</button>`;
    }else if(modeType==='sentence-labeling'){
      body=field('Sentence','sentence',item.sentence,'textarea','required')+item.tokens.map((token,j)=>`<label class="admin-token" data-token><span>Phrase ${j+1}</span><input value="${e(token.text)}" required aria-label="Sentence ${index+1}, phrase ${j+1}"><select aria-label="Sentence ${index+1}, label ${j+1}">${[['','Unlabelled'],['S','Subject'],['C','Complement'],['DO','Direct object'],['LV','Linking verb'],['TV','Transitive verb'],['IV','Intransitive verb']].map(([v,l])=>`<option value="${v}" ${v===token.answer?'selected':''}>${l}</option>`).join('')}</select><button type="button" class="small-link" data-remove-token="${index}:${j}" ${item.tokens.length===1?'disabled':''}>Remove phrase</button></label>`).join('')+`<button type="button" class="secondary-button" data-add-token="${index}">Add Phrase</button>`;
    }else if(modeType==='translation-builder'){
      body=field('Translation prompt','prompt',item.prompt,'textarea','required')+`<label class="admin-field"><span>Translation direction</span><select data-field="direction"><option value="english-greek" ${item.direction==='english-greek'?'selected':''}>English to Greek</option><option value="greek-english" ${item.direction==='greek-english'?'selected':''}>Greek to English</option></select></label>`+`<label class="admin-field"><span>Phrase choices — one per line</span><textarea data-phrases rows="6" required>${e(item.choices.join('\n'))}</textarea></label>`+item.slots.map((slot,j)=>`<div class="admin-grid" data-slot><label class="admin-field"><span>Space ${j+1} label</span><input data-slot-label value="${e(slot.label)}" required></label><label class="admin-field"><span>Correct phrase</span><input data-slot-answer value="${e(slot.answer)}" required></label><button type="button" class="small-link" data-remove-slot="${index}:${j}" ${item.slots.length===1?'disabled':''}>Remove space</button></div>`).join('')+`<button type="button" class="secondary-button" data-add-slot="${index}">Add Space</button>`;
    }else body=field('Exercise prompt','prompt',item.prompt,'textarea','required')+field('Correct answer','answer',item.answer,'input','required')+(modeType==='fill-in-the-blank'?`<label class="admin-field"><span>Other accepted forms — one per line</span><textarea data-accepted rows="2">${e((item.accepted || []).join('\n'))}</textarea></label>`:'');
    return `<section class="card admin-card" data-item><div class="admin-row-heading"><h3>${modeType==='questions'?'Question':'Exercise'} ${index+1}</h3><button class="small-link" type="button" data-remove-item="${index}">Remove ${modeType==='questions'?'question':'exercise'}</button></div>${body}</section>`;
  }
  async function save(action){
    const form=shell.querySelector('form');if(!form.reportValidity())return;persist();const activity=lesson.activities[activityType];activity.authoritative=true;
    const status=shell.querySelector('[data-content-status]');status.textContent=action==='draft'?'Saving draft…':'Publishing lesson…';const buttons=[...form.querySelectorAll('button')];const disabled=buttons.map(b=>b.disabled);buttons.forEach(b=>b.disabled=true);
    try{const saved=await request('/api/admin/course-content',{action,slug:lesson.id,activityType,content:lesson,...versions});versions={hasDraft:action==='draft',publishedVersion:saved.publishedVersion,draftVersion:saved.draftVersion};dirty=false;renderEditor();shell.querySelector('[data-content-status]').textContent=action==='draft'?'Draft saved. Published content is unchanged.':'Changes published.';}
    catch(error){status.textContent=error.message;buttons.forEach((b,i)=>b.disabled=disabled[i]);}
  }
  async function loadEditor(){
    shell.innerHTML='<p role="status">Loading question banks…</p>';
    try{const slug=window.xenophonLessonData.normalizeLessonParam(params.get('lesson'));const data=await request('/api/admin/course-content',{action:'read',slug});lesson=data.content;lesson.activities ||= {};versions={hasDraft:data.hasDraft,publishedVersion:data.publishedVersion,draftVersion:data.draftVersion};lesson.activities[activityType] ||= {title:labels[activityType],questions:[]};renderEditor();}
    catch(error){shell.innerHTML=`<section class="card admin-card"><p role="alert">${e(error.message)}</p><a href="course-content.html">Return to Course Content</a></section>`;}
  }
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
  if(params.has('lesson'))loadEditor();else overview();
})();
