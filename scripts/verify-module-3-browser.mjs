// Real rendered pages; account/profile/progress requests are fixtures, never writes.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.MODULE3_PLAYWRIGHT_MODULE||'/Users/tomalston/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=process.env.MODULE3_URL||'https://learn-greek-xenophon.netlify.app';
const fixtures=process.argv.includes('--fixtures');
const staged=process.argv.includes('--staged');
const output=process.env.MODULE3_QA_OUTPUT||'/private/tmp/module3-browser-qa';
fs.mkdirSync(output,{recursive:true});
const lessons=Array.from({length:12},(_,i)=>JSON.parse(fs.readFileSync(`content/lessons/lesson-${i+25}.json`)));
const report={base,contentFixtures:fixtures,accountAndProgressFixtures:true,lessons:[],errors:[]};
const browser=await chromium.launch({headless:true,executablePath:process.env.MODULE3_CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
async function context(role='professor',width=1440,exam=true){
  const ctx=await browser.newContext({viewport:{width,height:1000}});
  if(staged){
    const release=JSON.parse(fs.readFileSync('/private/tmp/xenophon-module3-release/manifest.json'));
    const uploads=Object.values(release.uploads);
    await ctx.route('**/*',route=>{
      const u=new URL(route.request().url());const upload=uploads.find(x=>x.path===u.pathname);
      return upload?route.fulfill({path:upload.file}):route.continue();
    });
  }
  await ctx.addInitScript(({role,exam})=>localStorage.setItem('learn-greek-session',JSON.stringify({email:'module3-qa@example.invalid',name:'Module III QA',roles:[role],activeRole:role,progress:{currentLessonId:'lesson-36',passedQuizRevisions:{'lesson-12':exam?['lesson-12-final-v1','module-1-exam-v1']:['lesson-12-final-v1']}}})),{role,exam});
  await ctx.route('**/api/**',async route=>{
    const u=new URL(route.request().url());
    if(u.pathname==='/api/lesson-content'){
      const lesson=lessons.find(l=>l.id===u.searchParams.get('slug'));
      if(!fixtures||!lesson)return route.continue();
      return route.fulfill({contentType:'application/json',body:JSON.stringify({content:lesson,source:'module3-test-fixture'})});
    }
    if(u.pathname==='/api/lesson-metadata')return route.continue();
    const data=u.pathname==='/api/site-settings'?{settings:{lessonAccess:'open'}}:{ok:true};
    return route.fulfill({contentType:'application/json',body:JSON.stringify(data)});
  });
  return ctx;
}
async function answer(page,questions,correctCount=questions.length){
  await page.locator('.quiz-question').first().waitFor();
  const count=await page.locator('.quiz-question').count();assert.equal(count,questions.length);
  await page.evaluate(({questions,correctCount})=>{
    document.querySelector('[data-activity-result]').textContent='';
    [...document.querySelectorAll('.quiz-question')].forEach((fieldset,index)=>{
      const prompt=fieldset.querySelector('legend').textContent.replace(/^\d+\.\s*/,'').trim();
      const q=questions.find(q=>q.prompt===prompt);if(!q)throw Error('Unknown rendered question: '+prompt);
      const choice=q.choices.find(c=>Boolean(c.correct)===(index<correctCount));
      const label=[...fieldset.querySelectorAll('label')].find(l=>l.querySelector('span:last-child')?.textContent.trim()===choice.text);
      if(!label)throw Error('Missing rendered answer: '+choice.text);
      label.querySelector('input').checked=true;
    });
  },{questions,correctCount});
  await page.locator('[data-quiz-form] button[type=submit]').click();
  await page.waitForFunction(()=>/Passed with|Score:|could not be saved/.test(document.querySelector('[data-activity-result]')?.textContent||''));
  await page.waitForFunction(()=>!document.querySelector('[data-quiz-form]')?.dataset.checking);
}
try{
  const ctx=await context();const page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  for(const lesson of lessons){
    const n=lesson.number;
    await page.goto(`${base}/lesson.html?lesson=${n}&page=1`);
    await page.locator('.greek-reading .reading-paragraph').first().waitFor();
    assert.equal(await page.locator('.greek-reading .reading-paragraph').count(),lesson.reading.paragraphs.length);
    assert.equal(await page.locator('.lesson-hero__title').textContent(),lesson.title);
    await page.waitForFunction(()=>document.querySelector('.lesson-hero img')?.naturalWidth>0);
    assert.equal(await page.locator('.translation-toggle').count(),1);
    await page.locator('.translation-toggle summary').click();
    assert.ok((await page.locator('.translation-toggle').textContent()).includes(lesson.reading.translation.slice(0,40)));
    if([25,28,31,33,36].includes(n)){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:`${output}/lesson-${n}-desktop.png`});}
    for(const type of ['vocab-flashcards','grammar-flashcards']){
      await page.goto(`${base}/activity.html?lesson=${n}&type=${type}`);
      await page.locator('[data-flashcard-flip]').click();
      assert.equal(await page.locator('.flashcard-card__label').textContent(),'Answer');
      await page.locator('[data-flashcard-known]').click();
      assert.equal(await page.locator('.flashcard-card__label').textContent(),'Prompt');
    }
    await page.goto(`${base}/activity.html?lesson=${n}&type=vocab-practice`);
    await page.locator('.quiz-question').first().waitFor();
    const prompt=await page.locator('.quiz-question legend').first().textContent();
    const question=lesson.activities['vocab-practice'].questions.find(q=>q.prompt===prompt);
    assert.ok(question,'Vocabulary round uses the authored bank');
    const correct=question.choices.find(c=>c.correct).text;
    await page.locator('.quiz-question').first().getByText(correct,{exact:true}).click();
    await page.locator('[data-topic-feedback]').first().filter({hasText:'Correct'}).waitFor();
    await page.goto(`${base}/lesson.html?lesson=${n}&page=2`);
    await page.locator('.grammar-subsection').first().waitFor();
    assert.equal(await page.locator('.grammar-subsection').count(),lesson.grammar.sections.length);
    if(n===25)await page.screenshot({path:`${output}/lesson-${n}-grammar.png`});
    for(const section of lesson.grammar.sections){
      await page.locator(`[data-lesson-topic="${section.practiceTopic}"] a`).waitFor();
      assert.equal(await page.locator(`[data-lesson-topic="${section.practiceTopic}"] a`).count(),1);
      await page.goto(`${base}/activity.html?lesson=${n}&type=topic-practice&topic=${section.practiceTopic}`);
      await page.locator('.quiz-question').first().waitFor();
      assert.ok(await page.locator('.quiz-question').count()>=Math.min(6,lesson.activities['topic-practice'].roundSize||5));
      await page.goto(`${base}/lesson.html?lesson=${n}&page=2`);
    }
    await page.goto(`${base}/lesson.html?lesson=${n}&page=3`);
    await page.getByRole('link',{name:'Take Final Lesson Quiz',exact:true}).waitFor();
    assert.ok((await page.locator('[data-lesson-template]').textContent()).includes(lesson.culture.sections[0].title));
    if(n===36)await page.screenshot({path:`${output}/lesson-${n}-culture.png`,fullPage:true});
    await page.goto(`${base}/activity.html?lesson=${n}&type=grammar-exercises`);
    await answer(page,lesson.activities['grammar-exercises'].questions);
    assert.match(await page.locator('[data-activity-result]').textContent(),/Passed with 100%/);
    await page.goto(`${base}/activity.html?lesson=${n}&type=lesson-quiz`);
    await page.locator('[data-quiz-form]').waitFor();
    await page.locator('[data-quiz-form]').evaluate(f=>f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
    assert.match(await page.locator('[data-activity-result]').textContent(),/Answer every question/);
    await answer(page,lesson.activities['lesson-quiz'].questions,23);
    assert.match(await page.locator('[data-activity-result]').textContent(),/Score: 77%/);
    await answer(page,lesson.activities['lesson-quiz'].questions,24);
    assert.match(await page.locator('[data-activity-result]').textContent(),/Passed with 80%/);
    await answer(page,lesson.activities['lesson-quiz'].questions);
    assert.match(await page.locator('[data-activity-result]').textContent(),/Passed with 100%/);
    report.lessons.push({number:n,readingParagraphs:lesson.reading.paragraphs.length,grammarSections:lesson.grammar.sections.length,topicLinks:true,flashcardsAndVocabularyPractice:true,grammarScoring:true,finalQuizThresholdAndRequiredAnswers:true});
    console.log(`Lesson ${n}: rendered pages, topics, grammar scoring, final quiz passed.`);
  }
  await ctx.close();
  const mobile=await context('student',390);const mp=await mobile.newPage();mp.on('pageerror',e=>report.errors.push(e.message));
  for(const l of lessons){
    await mp.goto(`${base}/lesson.html?lesson=${l.number}&page=1`);await mp.locator('.greek-reading').waitFor();
    assert.equal(await mp.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Mobile overflow ${l.number}`);
    assert.equal(await mp.locator('.vocab-group h3, .lesson-flashcard-link').evaluateAll(els=>els.every(el=>el.getBoundingClientRect().right<=innerWidth&&el.getBoundingClientRect().left>=0)),true,`Mobile vocabulary clipping ${l.number}`);
    if([25,28,31,33,36].includes(l.number))await mp.screenshot({path:`${output}/lesson-${l.number}-mobile.png`});
    for(const number of [2,3]){
      await mp.goto(`${base}/lesson.html?lesson=${l.number}&page=${number}`);
      await mp.locator('.lesson-page-heading').waitFor();
      assert.equal(await mp.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Mobile page ${number} overflow ${l.number}`);
    }
  }
  await mp.goto(`${base}/lesson.html?lesson=25&page=2`);
  await mp.locator('[data-required-gate="grammar-exercises"]').waitFor();
  assert.equal(await mp.locator('[data-required-gate="grammar-exercises"]').getAttribute('aria-disabled'),'true');
  await mp.goto(`${base}/activity.html?lesson=25&type=grammar-exercises`);await answer(mp,lessons[0].activities['grammar-exercises'].questions);
  await mp.goto(`${base}/lesson.html?lesson=25&page=2`);await mp.locator('[data-required-gate="grammar-exercises"]').waitFor();
  assert.equal(await mp.locator('[data-required-gate="grammar-exercises"]').getAttribute('aria-disabled'),'false');
  report.mobileAllLessons=true;report.studentGrammarGate=true;await mobile.close();
  assert.deepEqual(report.errors,[]);report.passed=true;
}finally{await browser.close();fs.writeFileSync(`${output}/report.json`,JSON.stringify(report,null,2));}
console.log(JSON.stringify(report));
