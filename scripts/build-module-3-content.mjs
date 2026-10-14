import fs from 'node:fs';
import {readings,titles} from './module3/readings.mjs';
import {grammar} from './module3/grammar.mjs';
import {cultures} from './module3/culture.mjs';
import {readingQuestions} from './module3/reading-questions.mjs';
const banners={25:'Socrates and companions share a simple meal in an Athenian courtyard',26:'Socrates and Aristippus discuss education near a palaestra',27:'Socrates and Critobulus consider household resources',28:'The young Heracles considers two personified ways of life',29:'Companions bring food and assistance to exhausted soldiers in snow',30:'Socrates and Euthydemus discuss understanding beside book rolls',31:'Panthea speaks with a messenger in a guarded setting',32:'Women and workers organize equipment in a Greek household',33:'Spartan boys practice under a supervisor',34:'Guests converse beside a mixing bowl at a symposium',35:'Socrates and companions examine self-command through conversation',36:'Athenian citizens cautiously return toward shared civic life'};
function pool(n,key,rows){return rows.map((r,i)=>{
 const [prompt,correct,...wrong]=r.values||r;
 if(wrong.length!==3||new Set([correct,...wrong]).size!==4)throw Error(`Bad choices ${n}/${key}/${i}`);
 const choices=wrong.map(text=>({text,correct:false,feedback:`Reconsider: ${correct}. ${r.explanation||''}`.trim()}));
 choices.splice(i%4,0,{text:correct,correct:true,feedback:`Correct. ${r.explanation||correct}`});
 return {id:`l${n}-${key}-${i+1}`,type:'multiple-choice',category:r.category||'Grammar',...(r.topic?{topic:r.topic}:{}),prompt,choices};
});}
const required=(n,key,title,rows)=>({title,description:'Complete every question. A score of 80% or higher is required.',threshold:80,required:true,requireAllAnswers:true,revision:`lesson-${n}-${key}-module-3-v1`,pointsPossible:rows.length,instructions:'Answer every question, then check your answers. Use the feedback to review before trying again.',questions:pool(n,key,rows)});
for(let n=25;n<=36;n++){
 const r=readings[n],g=grammar[n],c=cultures[n];
 const allWords=r.vocabulary;
 const vocabRows=allWords.flatMap((v,i)=>{
  const candidates=allWords.filter(x=>x!==v&&x.english!==v.english&&x.greek!==v.greek&&!x.english.split(/[,;]/).some(w=>v.english.split(/[,;]/).map(s=>s.trim()).includes(w.trim())));
  const wrong=[];for(let j=0;wrong.length<3;j++){const x=candidates[(i+j)%candidates.length];if(!wrong.includes(x))wrong.push(x);}
  return [{values:[`What does ${v.greek} mean as a dictionary entry?`,v.english,...wrong.map(x=>x.english)],category:'Vocabulary',topic:'vocabulary',explanation:v.dictionaryForm},{values:[`Which entry means “${v.english}”?`,v.greek,...wrong.map(x=>x.greek)],category:'Vocabulary',topic:'vocabulary',explanation:v.dictionaryForm}];
 });
 const wordRows=c.word.display.flatMap(([greek,english],i)=>{
  const others=Object.values(cultures).flatMap(x=>x.word.display).filter(x=>x[0]!==greek&&x[1]!==english).filter((x,j,a)=>a.findIndex(y=>y[0]===x[0]||y[1]===x[1])===j).slice(i*3,i*3+3);
  return [{values:[`Word Study: what does ${greek} mean here?`,english,...others.map(x=>x[1])],topic:'word-study',explanation:c.word.body[0]},{values:[`Word Study: which expression means “${english}”?`,greek,...others.map(x=>x[0])],topic:'word-study',explanation:c.word.body[1]}];
 });
 const grammarRows=g.flatMap(s=>s.tasks.map(values=>({values,topic:s.id,explanation:s.body.join(' ')})));
 const sections=g.map(({tasks,...s})=>({...s,examples:s.table.rows.filter(x=>x[0].includes('.')).slice(0,2).map(([greek,english])=>({greek,english})),checks:tasks.slice(0,2).map(([prompt,answer])=>({prompt,answer}))}));
 const finalRows=[...readingQuestions[n].map(values=>({values,category:'Reading'})),...vocabRows.filter((_,i)=>i%2===0).slice(0,6),...g.flatMap(s=>s.tasks.slice(0,3).map(values=>({values,category:'Grammar',topic:s.id}))),...c.questions.map(values=>({values,category:'Greek World'}))];
 if(finalRows.length!==30)throw Error(`Final count ${n}`);
 const banner={image:`assets/lesson-${n}-banner.png`,alt:`Educational reconstruction: ${banners[n]}`,caption:'Modern educational reconstruction, not an ancient eyewitness image.'};
 const sources=[{title:r.source,url:r.url},...(r.extra||[])];
 if(n===28)sources.push({title:'Prodicus’s Heracles story as preserved in Xenophon, Memorabilia 2.1.21–34 (Greek)',url:'https://www.hs-augsburg.de/homes/harsch/graeca/Chronologia/S_ante05/Prodikos/pro_hera.html'});
 if(n===34)sources.push({title:'Metropolitan Museum: Attic column-krater attributed to Lydos (earlier evidence for the vessel type)',url:'https://www.metmuseum.org/art/collection/search/253349'});
 const lesson={id:`lesson-${n}`,number:n,title:titles[n],greekTitle:r.greekTitle,scope:g.map(s=>s.title.replace(/^\d+\. /,'')).join('; '),theme:c.title,module:'σωφροσύνη — Self-Control and Discipline',banner,pages:[{page:1,slug:`lesson-${n}-page-1`,title:'Reading',template:'reading',showTranslation:false},{page:2,slug:`lesson-${n}-page-2`,title:'Language Study',template:'grammar'},{page:3,slug:`lesson-${n}-page-3`,title:c.title,template:'culture'}],
 vocabulary:[{category:'Words for the reading and language study',items:allWords}],
 reading:{title:r.greekTitle,audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[`${r.source}. Read this controlled course adaptation with the glosses, then revisit its source and historical setting on page three.`,r.boundary,r.focus],paragraphs:r.paragraphs.map(({translation,...p})=>p),translation:r.paragraphs.map(p=>p.translation).join('\n\n')+'\n',sourceCitation:`${r.source}. Newly composed controlled Greek adaptation, not a verbatim quotation. ${sources.map(x=>x.url).join(' ')}`,notesMarkdown:r.boundary},
 wordStudy:{label:`Word Study — ${c.word.title}`,blocks:[{title:c.word.title,practiceTopic:'word-study',body:c.word.body,display:c.word.display.map(([greek,english])=>({greek,english}))}]},
 grammar:{intro:'Read each explanation and reference table, then practice the topic before the required grammar check. Supplementary examples are course compositions; they do not add historical incidents to Xenophon’s account.',objectives:sections.map(s=>`Explain and apply ${s.title.replace(/^\d+\. /,'')}.`),sections,summary:{title:'Grammar Summary',items:sections.map(s=>`${s.title}: ${s.body[0]}`)}},
 culture:{title:c.title,banner,body:[],sections:c.sections,questions:c.questions.slice(0,4).map(([prompt,answer])=>({prompt,answer})),review:{title:'Before the Final Quiz',items:[`Identify the genre, purpose, and adaptation boundary of ${r.work}.`,r.focus,...c.questions.slice(3).map(([prompt,answer])=>`${prompt} ${answer}`)]},sources},enrichment:[],
 activities:{'vocab-flashcards':{title:`Lesson ${n} Vocabulary Flashcards`,cards:allWords.map(v=>({prompt:v.greek,answer:`${v.english} — ${v.dictionaryForm}`}))},'vocab-practice':{title:`Lesson ${n} Vocabulary Practice`,practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice every entry in both directions. Feedback includes the dictionary form.',questions:pool(n,'vocab',vocabRows)},'grammar-flashcards':{title:`Lesson ${n} Grammar Flashcards`,cards:sections.flatMap(s=>s.table.rows.map(([prompt,answer])=>({prompt,answer:`${answer} — ${s.title}`})))},'topic-practice':{title:`Lesson ${n} Topic Practice`,practiceMode:'rounds',roundSize:10,instructions:'Choose Word Study or a grammar section. Each topic has six questions with feedback.',questions:pool(n,'topic',[...wordRows,...grammarRows])},'grammar-exercises':required(n,'grammar-exercises',`Lesson ${n} Required Grammar Check`,grammarRows),'lesson-quiz':required(n,'final-quiz',`Lesson ${n} Final Quiz — ${titles[n]}`,finalRows)},previousLesson:{id:`lesson-${n-1}`,title:titles[n-1],fallbackUrl:`lesson.html?lesson=${n-1}&page=1`},nextLesson:{id:`lesson-${n+1}`,title:titles[n+1],fallbackUrl:`lesson.html?lesson=${n+1}&page=1`},contentRevision:`lesson-${n}-module-3-v1`};
 for(const [i,p] of lesson.reading.paragraphs.entries())for(const x of p.gloss)if(!p.greek.includes(x.greek))throw Error(`Unmatched gloss ${n}/${i+1}: ${x.greek}`);
 for(const [key,a] of Object.entries(lesson.activities))if(a.questions&&new Set(a.questions.map(x=>x.prompt)).size!==a.questions.length)throw Error(`Duplicate prompts ${n}/${key}`);
 fs.writeFileSync(`content/lessons/lesson-${n}.json`,JSON.stringify(lesson,null,2)+'\n');
 console.log(`Lesson ${n}: ${r.paragraphs.length} reading paragraphs, ${allWords.length} words, ${sections.length} grammar sections, ${c.sections.length} culture sections, 30 final questions.`);
}
