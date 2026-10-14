(function () {
  const {isAdmin,shell,escape,request}=window.xenophonAdminWorkspace;if(!isAdmin || !shell)return;
  let current,dirty=false;
  const input=(name,label,value,type='text',extra='')=>`<label class="admin-field"><span>${label}</span><input name="${name}" type="${type}" value="${escape(value)}" required ${extra}></label>`;
  const check=(name,label,value)=>`<label class="admin-toggle"><input type="checkbox" name="${name}" ${value?'checked':''}> <span>${label}</span></label>`;
  function render(){
    const c=current.course,s=current.settings;
    shell.innerHTML=`<form data-settings-form class="admin-form">
      <section class="card admin-card"><h2>Course details</h2><div class="admin-grid">
        ${input('title','Course name',c.title,'text','maxlength="200"')}${input('code','Course code',c.code,'text','maxlength="200"')}
        ${input('term','Semester',c.term,'text','maxlength="200"')}${input('institution','Institution',c.institution,'text','maxlength="200"')}${input('department','Department',c.department,'text','maxlength="200"')}
      </div></section>
      <section class="card admin-card"><h2>Grading and progression</h2><p class="muted">These passing scores apply when a lesson has no score of its own. Lesson-specific scores and required module exams take precedence.</p><div class="admin-grid">
        ${input('grammarPassingScore','Default exercise passing score (%)',s.grammarPassingScore,'number','min="1" max="100" step="1"')}${input('quizPassingScore','Default quiz passing score (%)',s.quizPassingScore,'number','min="1" max="100" step="1"')}
        <label class="admin-field"><span>Lesson access</span><select name="lessonAccess"><option value="open" ${s.lessonAccess==='open'?'selected':''}>Open for development and testing</option><option value="sequential" ${s.lessonAccess==='sequential'?'selected':''}>Sequential — complete each lesson before advancing</option></select></label>
      </div></section>
      <section class="card admin-card"><h2>Registration and feedback</h2>${check('registrationOpen','Allow new student registrations',s.registrationOpen)}${check('feedbackEnabled','Accept course feedback',s.feedbackEnabled)}<p class="muted">Closing registration leaves existing accounts available. Turning off feedback keeps previously saved submissions available for review. Feedback is stored for administrator review.</p></section>
      <section class="card admin-card"><h2>Translation checking</h2><p>${current.translationKeyConfigured?'The OpenAI API key is configured on the server.':'An OpenAI API key is needed on the server for AI translation checking.'}</p>
        ${check('translationEnabled','Allow AI translation checking',s.translationEnabled)}
        <div class="admin-grid">${input('translationDailyLimit','Checks per student per day',s.translationDailyLimit,'number','min="1" max="1000" step="1"')}${input('translationMonthlyLimit','Monthly translation allowance (USD)',s.translationMonthlyLimit,'number','min="0" max="1000" step="0.01"')}</div>
        <p class="muted">A check reserves an estimated $0.005 per sentence against this allowance. OpenAI billing can differ. Setting the allowance to $0 stops new AI checks. Phrase-building exercises do not use AI credits.</p>
        <label class="admin-field"><span>Additional teaching guidelines</span><textarea name="translationGuidelines" rows="6" maxlength="6000">${escape(s.translationGuidelines)}</textarea></label>
        <p class="muted">These guidelines supplement the translation rubric. Correct words and grammar pass despite ordinary accent errors, with corrections in the feedback. Correct breathing marks remain required.</p>
      </section>
      <div class="admin-actions"><button class="primary-button" type="submit">Save Settings</button><button class="secondary-button" type="button" data-settings-reload>Discard edits / Reload</button><span data-settings-status role="status">${current.updated_at?'Last saved '+new Date(current.updated_at).toLocaleString():''}</span></div>
    </form>`;
    const form=shell.querySelector('form');
    form.addEventListener('input',()=>dirty=true);
    shell.querySelector('[data-settings-reload]').addEventListener('click',()=>{dirty=false;load();});
    form.addEventListener('submit',async e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const f=new FormData(form);const course=Object.fromEntries(['code','title','term','institution','department'].map(k=>[k,f.get(k)]));
      const settings={lessonAccess:f.get('lessonAccess'),translationGuidelines:f.get('translationGuidelines')};
      ['grammarPassingScore','quizPassingScore','translationDailyLimit','translationMonthlyLimit'].forEach(k=>settings[k]=Number(f.get(k)));
      ['registrationOpen','feedbackEnabled','translationEnabled'].forEach(k=>settings[k]=f.has(k));
      const status=shell.querySelector('[data-settings-status]');const buttons=[...form.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);status.textContent='Saving settings…';
      try{current=await request('/api/site-settings',{action:'save',version:current.version,course,settings});dirty=false;window.xenophonSitePolicy.apply(current);render();shell.querySelector('[data-settings-status]').textContent='Settings saved.';}
      catch(error){status.textContent=error.message;buttons.forEach(b=>b.disabled=false);}
    });
  }
  async function load(){shell.innerHTML='<p role="status">Loading settings…</p>';try{current=await request('/api/site-settings',{action:'read'});render();}catch(error){shell.innerHTML=`<section class="card admin-card"><p role="alert">${escape(error.message)}</p><button class="secondary-button" data-settings-retry>Retry</button></section>`;shell.querySelector('button').addEventListener('click',load);}}
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
  load();
})();
