(function () {
  const defaults={grammarPassingScore:80,quizPassingScore:80,lessonAccess:'open',registrationOpen:true,feedbackEnabled:true,translationEnabled:true};
  function apply(data) {
    window.xenophonSitePolicy.settings={...defaults,...data.settings};
    window.xenophonSitePolicy.course=data.course;
    window.xenophonOpenLessonAccess=window.xenophonSitePolicy.settings.lessonAccess==='open';
    for(const [selector,key] of [['.brand .course-code','code'],['.brand .course-title','title'],['.brand .term','term'],['.brand .dept','department'],['.brand h1','institution']]) {
      if(data.course?.[key])document.querySelectorAll(selector).forEach(el=>el.textContent=data.course[key]);
    }
    for (const [selector,enabled,message] of [['[data-register-form]',data.settings?.registrationOpen,'New student registration is currently closed. Existing students can still log in.'],['[data-feedback-form]',data.settings?.feedbackEnabled,'Feedback collection is currently paused.']]) {
      const form=document.querySelector(selector);
      if(form && enabled===false){form.querySelectorAll('input,textarea,select,button').forEach(el=>el.disabled=true);const status=form.querySelector('[data-register-status], [data-feedback-status]');if(status)status.textContent=message;}
    }
    document.dispatchEvent(new Event('site-policy-loaded'));
  }
  window.xenophonSitePolicy={settings:defaults,apply};
  window.xenophonSitePolicy.ready=fetch('/api/site-settings').then(r=>{if(!r.ok)throw new Error();return r.json();}).then(apply).catch(()=>{});
})();
