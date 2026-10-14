(function () {
  const session=window.xenophonAuth?.readSession();
  const isAdmin=session?.activeRole==='administrator' && session.roles?.includes('administrator') && !session.professorPreview;
  const shell=document.querySelector('[data-admin-workspace]');
  if(!isAdmin && shell)shell.innerHTML='<section class="card admin-card"><h2>Administrator access required</h2><p>Switch to your Administrator role to use this page.</p><a class="primary-button" href="index.html">Return to Dashboard</a></section>';
  const escape=value=>String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
  async function request(path,payload){
    const response=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,accountEmail:session?.email,activeRole:session?.activeRole,password:window.xenophonAuth.readVisiblePassword(session?.email)})});
    const data=await response.json();
    if(!response.ok)throw new Error([data.error,...(data.details || [])].filter(Boolean).join(' '));
    return data;
  }
  window.xenophonAdminWorkspace={session,isAdmin,shell,escape,request};
})();
