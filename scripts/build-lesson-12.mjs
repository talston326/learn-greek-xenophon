// Build the canonical Lesson 12, browser fallback, and database publication migration.
import fs from 'node:fs';

const read = file => fs.readFileSync(file, 'utf8');
const write = (file, value) => fs.writeFileSync(file, value);
const lesson = structuredClone(JSON.parse(read('content/lessons/lesson-11.json')));
const source = 'https://www.tha.de/~harsch/graeca/Chronologia/S_ante04/Xenophon/xen_ana3.html';
const vocab = (category, entries) => ({category, items: entries.map(([greek, english, dictionaryForm, status='required vocabulary']) => ({greek, english, dictionaryForm, status, lemma:greek.replace(/^(ὁ|ἡ|τὸ) /u,'').split(',')[0], audioPlaceholder:true}))});
const para = (greek, translation, gloss) => ({greek, translation, gloss:gloss.map(([greek,english])=>({greek,english}))});
const paragraphs = [
  para('Ὁ Ξενοφῶν πάλιν εἰς τὰς Ἀθήνας ἔρχεται. ὁ δὲ Σωκράτης περὶ τῆς μαντείας ἀκούει.', 'Xenophon comes back to Athens. Socrates hears about the oracle.', [['πάλιν','back, again'],['εἰς τὰς Ἀθήνας','to Athens'],['ἔρχεται','comes; a middle-form verb'],['ὁ δὲ Σωκράτης','Socrates, in turn'],['περὶ τῆς μαντείας','about the oracle’s response'],['ἀκούει','he hears']]),
  para('ἐπεὶ δὲ πάλιν ἦλθε, λέγει τὴν μαντείαν τῷ Σωκράτει.', 'When he had returned, he reports the oracle’s response to Socrates.', [['ἐπεὶ','when'],['πάλιν ἦλθε','he returned; aorist of ἔρχομαι'],['λέγει','he reports'],['τὴν μαντείαν','the oracle’s response'],['τῷ Σωκράτει','to Socrates; dative recipient']]),
  para('ὁ δ᾽ ἀκούσας ᾐτιᾶτο αὐτὸν ὅτι οὐ τοῦτο πρῶτον ἠρώτα· πότερον λῷον εἴη αὐτῷ πορεύεσθαι ἢ μένειν;', 'After hearing him, Socrates reproached him because he had not first asked this: was it better for him to go or to stay?', [['ὁ δ᾽','Socrates, in turn'],['ἀκούσας','after hearing; aorist participle'],['ᾐτιᾶτο αὐτὸν','he reproached him; past middle form'],['ὅτι','because'],['οὐ τοῦτο πρῶτον ἠρώτα','he had not asked this first'],['πότερον','whether'],['ἢ','or'],['λῷον εἴη','it would be better; optative'],['αὐτῷ','for him; dative of interest'],['πορεύεσθαι ἢ μένειν','to travel or to stay; infinitives']]),
  para('ἀλλ᾽ αὐτὸς κρίνας ἰτέον εἶναι τοῦτ᾽ ἐπυνθάνετο· ὅπως ἂν κάλλιστα πορευθείη.', 'Instead, having decided himself that he must go, he asked this: how he might travel as well as possible.', [['ἀλλ᾽','but, instead'],['αὐτὸς κρίνας','having decided himself; aorist participle'],['ἰτέον εἶναι','that he must go; necessity construction'],['τοῦτ᾽ ἐπυνθάνετο','he asked this; past middle form'],['ὅπως ἂν','how he might; introduces an indirect question'],['κάλλιστα','as well as possible'],['πορευθείη','he might travel; aorist optative']]),
  para('ἐπεὶ μέντοι οὕτως ἤρου, ταῦτ᾽, ἔφη, χρὴ ποιεῖν ὅσα ὁ θεὸς ἐκέλευσεν.', 'Nevertheless, since you asked in this way, he said, you must do what the god instructed.', [['ἐπεὶ μέντοι','nevertheless, since'],['οὕτως ἤρου','you asked in this way; aorist middle'],['ταῦτ᾽','these things'],['ἔφη','he said; past of φημί'],['χρὴ ποιεῖν','one must do'],['ὅσα','all that, whatever'],['ὁ θεὸς ἐκέλευσεν','the god instructed; aorist']]),
  para('ὁ μὲν δὴ Ξενοφῶν οὕτω θυσάμενος οἷς ἀνεῖλεν ὁ θεὸς ἐξέπλει,', 'Xenophon, then, sacrificed as the god had directed and sailed away.', [['ὁ μὲν δὴ Ξενοφῶν','Xenophon, then'],['οὕτω θυσάμενος','having sacrificed in this way; aorist middle participle'],['οἷς','to those gods; dative plural'],['ἀνεῖλεν ὁ θεὸς','the god directed; aorist'],['ἐξέπλει','he sailed away; imperfect']]),
  para('καὶ καταλαμβάνει ἐν Σάρδεσι Πρόξενον καὶ Κῦρον μέλλοντας ἤδη ὁρμᾶν τὴν ἄνω ὁδόν, καὶ συνεστάθη Κύρῳ.', 'He finds Proxenus and Cyrus at Sardis already about to set out on the journey inland, and he is introduced to Cyrus.', [['καταλαμβάνει','he finds, catches up with'],['ἐν Σάρδεσι','at Sardis; place dative'],['Πρόξενον καὶ Κῦρον','Proxenus and Cyrus; direct objects'],['μέλλοντας ἤδη ὁρμᾶν','already about to set out'],['τὴν ἄνω ὁδόν','the journey inland, literally the upper road'],['συνεστάθη Κύρῳ','he was introduced to Cyrus; dative of person']]),
  para('Ὁ Ξενοφῶν οὖν σὺν τῷ Προξένῳ πρὸς Κῦρον πορεύεται. ἡ ἄνω ὁδὸς ἤδη ἄρχεται.', 'So Xenophon travels with Proxenus toward Cyrus. The journey inland is now beginning.', [['Ὁ Ξενοφῶν οὖν','so Xenophon'],['σὺν τῷ Προξένῳ','with Proxenus; σύν + dative'],['πρὸς Κῦρον','toward Cyrus; πρός + accusative'],['πορεύεται','travels; present middle'],['ἡ ἄνω ὁδὸς','the inland journey'],['ἤδη ἄρχεται','is now beginning; middle form']])
];

Object.assign(lesson, {
  id:'lesson-12', number:12, title:'The Question He Did Not Ask', greekTitle:'Τὸ ἐρώτημα ὃ οὐκ ἠρώτα',
  scope:'Middle meanings, datives, prepositions, and cumulative Module 1 review',
  theme:'Socrates asks whether Xenophon should go before asking how to go well',
  banner:{image:'assets/lesson-12-socrates-banner.png',alt:'Educational reconstruction of Socrates speaking with Xenophon after the consultation at Delphi',caption:'Socrates questions Xenophon after his return from Delphi. The conversation’s central point comes from Xenophon, Anabasis 3.1.7.'},
  pages:[{page:1,slug:'lesson-12-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-12-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-12-page-3',title:'Toward the March of the Ten Thousand',template:'culture'}],
  vocabulary:[
    vocab('Questions and choices', [['πότερον','whether','πότερον'],['λῷον','better, more advantageous','λῷον'],['μένω','stay, remain','μένω'],['πυνθάνομαι','ask, inquire','πυνθάνομαι'],['κρίνω','decide, judge','κρίνω'],['ὅπως','how','ὅπως'],['κάλλιστα','as well as possible','κάλλιστα'],['ἡ μαντεία','oracular response','μαντεία, μαντείας, ἡ']]),
    vocab('Action and journey', [['χρή','one must','χρή'],['ποιέω','do, make','ποιέω'],['κελεύω','order, instruct','κελεύω'],['θύω','sacrifice','θύω'],['πορεύομαι','travel, go','πορεύομαι'],['σύν','with (+ dative)','σύν'],['πρός','toward (+ accusative)','πρός'],['ἡ ὁδός','road, journey','ὁδός, ὁδοῦ, ἡ'],['αἱ Σάρδεις','Sardis','Σάρδεις, Σάρδεων, αἱ','reading vocabulary'],['ὁρμάω','set out','ὁρμάω','reading vocabulary']])
  ],
  reading:{title:'Τὸ ἐρώτημα ὃ οὐκ ἠρώτα',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'Xenophon has returned from Delphi with Apollo’s instruction. Read for the difference between “whether to go” and “how to travel as well as possible.”',
    'Source note: Paragraphs 2–7 reproduce the substance and much of the Greek of Xenophon, Anabasis 3.1.7–8, divided into shorter units and with modern punctuation. Paragraphs 1 and 8 are simple connective adaptations. The banner scene and any implied spoken exchange beyond Xenophon’s reported words are adaptations; the ancient account reports Socrates’ reproach and advice, not a transcript of an extended dialogue.',
    'The original passage includes aorists, optatives, and participles beyond Module 1. Blue glosses explain each of these. Focus on the decision, the datives and prepositions, and the middle forms you already know.'
  ],paragraphs:paragraphs.map(({greek,gloss})=>({greek,gloss})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:`Xenophon, Anabasis 3.1.7–8. ${source}`,notesMarkdown:'The source says Xenophon reported the oracle to Socrates; Socrates faulted him for asking how to go well before asking whether going or staying was better. Socrates then told him to do what Apollo had instructed. Xenophon sacrificed accordingly, sailed, found Proxenus and Cyrus at Sardis, and was introduced to Cyrus. The source does not name the gods in this passage.'},
  wordStudy:{label:'Word Study — The Question Before the Journey',blocks:[{title:'Whether, or how?',practiceTopic:'word-study',body:[
    'πότερον … ἢ sets out a choice: “whether … or.” Socrates says the first question should have been whether it was better to travel or to stay. ὅπως asks “how.” Xenophon had already decided to go and asked how to make that journey most successfully.',
    'πορεύεσθαι is “to travel,” a middle infinitive. μένειν is “to stay,” an active infinitive. ἐπυνθάνετο, “he was asking,” belongs to πυνθάνομαι, a verb with middle forms and an active English meaning.',
    'Xenophon’s account ends with ἐν Σάρδεσι, “at Sardis,” and the pair Πρόξενον καὶ Κῦρον. Proxenus and Cyrus are the people he finds; the journey of the army is about to begin.'
  ],display:[{greek:'πότερον … ἢ',english:'whether … or'},{greek:'πορεύεσθαι ἢ μένειν',english:'to go or to stay'},{greek:'ὅπως ἂν κάλλιστα',english:'how as well as possible'},{greek:'τῷ Σωκράτει',english:'to Socrates'},{greek:'ἐν Σάρδεσι',english:'at Sardis'}]}]},
  grammar:{intro:'Use the final episode to bring Module 1 together. Translate the source with its glosses, then practice the middle, the dative, prepositions, and familiar verbs and nouns.',objectives:['Explain the choice marked by πότερον … ἢ and the different question introduced by ὅπως.','Read middle forms by meaning and identify their person and number.','Recognize a dative recipient, a dative after σύν or ἐν, and a dative of interest.','Choose cases after εἰς, πρός, ἐν, and σύν.','Review the active present, infinitives, noun agreement, and reading comprehension from Module 1.'],sections:[
    {id:'choice',title:'1. Whether to Go or How to Go',practiceTopic:'choice',body:['πότερον … ἢ frames two alternatives. Here they are πορεύεσθαι, “to travel,” and μένειν, “to stay.”','ὅπως asks how an action may happen. Xenophon asked how to travel κάλλιστα, “as well as possible,” after deciding to go.','The source’s λῷον εἴη and πορευθείη are advanced forms. Use the blue glosses to read their meanings; you do not need to produce these forms.'],table:{title:'The two questions',headers:['Greek','Meaning','Role'],greekColumns:[0],rows:[['πότερον … ἢ','whether … or','the choice'],['πορεύεσθαι ἢ μένειν','to travel or stay','the alternatives'],['ὅπως ἂν κάλλιστα','how as well as possible','the method']]},checks:[{prompt:'Which question did Socrates say should come first?',answer:'Whether it was better to travel or stay.'}],examples:[{greek:'πότερον πορεύεσθαι ἢ μένειν;',english:'Whether to travel or to stay?'}]},
    {id:'middle',title:'2. Middle Forms and Meanings',practiceTopic:'middle',body:['The present middle forms of πορεύομαι and πυνθάνομαι have active English meanings: “I travel” and “I ask.”','In the source, ἐπυνθάνετο is a past middle form, “he was asking”; ἤρου is an aorist middle, “you asked.” Both are glossed reading exposure.','The familiar present forms still matter: πορεύομαι, πορεύεται, πορεύονται; πυνθάνομαι, πυνθάνεται, πυνθάνονται.'],table:{title:'Meaning over mechanical voice',headers:['Form','Person','Meaning'],greekColumns:[0],rows:[['πορεύομαι','first singular','I travel'],['πορεύεται','third singular','he or she travels'],['πυνθάνομαι','first singular','I ask'],['ἐπυνθάνετο','third singular, past','he was asking']]},checks:[{prompt:'Does πορεύεται mean “he is traveled”?',answer:'No. It means “he travels.”'}],examples:[{greek:'ὁ Ξενοφῶν πορεύεται.',english:'Xenophon travels.'}]},
    {id:'dative',title:'3. The Dative: To, For, With, and At',practiceTopic:'dative',body:['τῷ Σωκράτει tells who receives Xenophon’s report: “to Socrates.”','αὐτῷ in λῷον εἴη αὐτῷ means “better for him.” The dative can show whose interest is involved.','Prepositions also call for a dative: σὺν τῷ Προξένῳ means “with Proxenus,” while ἐν Σάρδεσι means “at Sardis.”'],table:{title:'Four datives in the episode',headers:['Phrase','Meaning','Use'],greekColumns:[0],rows:[['τῷ Σωκράτει','to Socrates','recipient'],['αὐτῷ','for him','interest'],['σὺν τῷ Προξένῳ','with Proxenus','after σύν'],['ἐν Σάρδεσι','at Sardis','after ἐν']]},checks:[{prompt:'Why is Προξένῳ dative after σύν?',answer:'σύν takes the dative and means “with.”'}],examples:[{greek:'ὁ Ξενοφῶν λέγει τῷ Σωκράτει.',english:'Xenophon tells Socrates.'}]},
    {id:'prepositions',title:'4. Prepositions and Direction',practiceTopic:'prepositions',body:['εἰς and πρός with the accusative point toward a destination: εἰς τὰς Ἀθήνας, “to Athens,” and πρὸς Κῦρον, “toward Cyrus.”','ἐν with the dative marks location: ἐν Σάρδεσι, “at Sardis.” σύν with the dative marks accompaniment: σὺν τῷ Προξένῳ, “with Proxenus.”','Distinguish travel to a place from being in that place. The case helps you see the difference.'],table:{title:'Movement and location',headers:['Phrase','Case','Meaning'],greekColumns:[0],rows:[['εἰς τὰς Ἀθήνας','accusative','to Athens'],['πρὸς Κῦρον','accusative','toward Cyrus'],['ἐν Σάρδεσι','dative','at Sardis'],['σὺν τῷ Προξένῳ','dative','with Proxenus']]},checks:[{prompt:'Which phrase means “at Sardis”?',answer:'ἐν Σάρδεσι.'}],examples:[{greek:'πορεύεται πρὸς Κῦρον σὺν τῷ Προξένῳ.',english:'He travels toward Cyrus with Proxenus.'}]},
    {id:'module-review',title:'5. Module 1 Review',practiceTopic:'module-review',body:['In λέγει τὴν μαντείαν τῷ Σωκράτει, λέγει is present active, τὴν μαντείαν is the direct object, and τῷ Σωκράτει is the recipient.','The infinitives πορεύεσθαι and μένειν name the two possible actions. Compare active μένω and middle πορεύομαι.','Review noun and adjective agreement, familiar present endings, plural forms, and the earlier stories from Xenophon’s household through Proxenus’ invitation and Delphi.'],table:{title:'A cumulative sentence',headers:['Element','Form','Job'],greekColumns:[1],rows:[['subject','ὁ Ξενοφῶν','who acts'],['verb','λέγει','what he does'],['object','τὴν μαντείαν','what he reports'],['recipient','τῷ Σωκράτει','to whom']]},checks:[{prompt:'What does τὴν μαντείαν do in the sentence?',answer:'It is the direct object of λέγει.'}],examples:[{greek:'ὁ Ξενοφῶν λέγει τὴν μαντείαν τῷ Σωκράτει.',english:'Xenophon reports the oracle to Socrates.'}]}
  ],summary:{title:'Before the Final Quiz',items:['Socrates says the prior question was whether going or staying was better; Xenophon asked how to travel best.','A middle form can have an active English meaning; translate the verb, not the ending alone.','Datives name recipients, interests, accompaniment after σύν, and location after ἐν.','εἰς and πρός with the accusative point toward a destination.','The source ends at Sardis, where Proxenus and Cyrus are preparing to set out.']}},
  culture:{title:'Toward the March of the Ten Thousand',banner:{image:'assets/lesson-12-army-forward.png',display:'full',alt:'Educational reconstruction of Xenophon looking toward a gathering Greek army on the road inland',caption:'A forward-looking reconstruction: Xenophon joins Proxenus and Cyrus as the inland expedition is about to move. This is the bridge into the March of the Ten Thousand.',credit:'Original digital illustration generated for Learn Greek with Xenophon.'},body:[],sections:[{title:'Sardis: the end of this lesson, the start of the march',body:['Xenophon says he found Proxenus and Cyrus at Sardis just as they were about to begin τὴν ἄνω ὁδόν, “the journey inland.” He was introduced to Cyrus there. The episode closes with action rather than a further oracle: he had sacrificed according to Apollo’s instruction and had left for the expedition.','Sardis was the point at which Xenophon’s personal decision met Cyrus’ assembled force. The image looks ahead to the army, but the reading ends with Xenophon’s arrival and introduction, exactly where Anabasis 3.1.8 leaves this scene.']},{title:'The question that follows him',body:['Socrates’ criticism concerns the order of Xenophon’s questions. Asking how to travel well assumes a decision to travel. Asking whether to travel leaves that decision open. The difference is the lesson’s central reading problem.','The next module follows the expedition and the Greek soldiers later known as the Ten Thousand. Keep the distinction between what Xenophon reports here and what the later narrative will reveal: at this moment, Proxenus and Cyrus are preparing to set out.']}],questions:[{prompt:'Where did Xenophon find Proxenus and Cyrus?',answer:'At Sardis.'},{prompt:'What did the men at Sardis prepare to do?',answer:'Set out on the journey inland.'},{prompt:'What action did Xenophon take before he left?',answer:'He sacrificed as Apollo had instructed.'},{prompt:'What question did Socrates think should come first?',answer:'Whether it was better to go or stay.'}],review:{title:'Module 1 closes',items:['Read the contrast between πότερον … ἢ and ὅπως.','Explain the datives τῷ Σωκράτει, σὺν τῷ Προξένῳ, and ἐν Σάρδεσι.','Follow the sequence: oracle reported, Socrates’ response, sacrifices, departure, Sardis.']},sources:[{title:'Xenophon, Anabasis 3.1.4–8 (Greek text)',url:source},{title:'Xenophon, Anabasis Book 3 (Perseus English)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3'}]},
  enrichment:[],nextLesson:{id:'lesson-13',title:'The General Leads',fallbackUrl:'lesson.html?lesson=13&page=1'},previousLesson:{id:'lesson-11',title:'The Question at Delphi',fallbackUrl:'lesson.html?lesson=11&page=1'},contentRevision:'lesson-12-socrates-response-v1'
});

function question(id,category,topic,prompt,correct,wrong,why){
  if(wrong.length!==3 || new Set([correct,...wrong]).size!==4)throw Error(`Invalid choices ${id}`);
  const choices=[correct,...wrong], shift=Number(id.match(/\d+(?!.*\d)/)?.[0]||0)%4;
  return {id,type:'multiple-choice',...(topic?{topic}:{}),category,prompt,choices:Array.from({length:4},(_,i)=>{const n=(i-shift+4)%4;return{text:choices[n],correct:n===0,feedback:`${n===0?'Correct':'Review'}: ${why}`};})};
}
const rows={
  'word-study':[
    ['What contrast does πότερον … ἢ introduce?','whether … or','because … therefore','from … to','with … in','πότερον … ἢ marks alternatives.'],
    ['What does μένειν mean?','to stay','to travel','to ask','to sacrifice','μένειν means to stay.'],
    ['What does πορεύεσθαι mean?','to travel','to remain','to report','to meet','πορεύεσθαι means to travel.'],
    ['What does κάλλιστα mean here?','as well as possible','much later','with a friend','to Athens','κάλλιστα means as well as possible.'],
    ['What is ἡ μαντεία?','the oracle’s response','the road','the letter','the army','μαντεία is an oracle’s response.'],
    ['What does χρὴ ποιεῖν mean?','one must do','one must ask','one must remain','one must return','χρὴ ποιεῖν means one must do.'],
    ['What does ὅπως introduce?','how','whether','with whom','from where','ὅπως introduces how.'],
    ['What does πυνθάνομαι mean?','I ask or inquire','I travel','I sacrifice','I stay','πυνθάνομαι means ask or inquire.']
  ],
  choice:[
    ['Which question should Xenophon have asked first?','whether to go or stay','how quickly to sail','which ship to hire','where to meet Proxenus','Socrates faults the missing prior decision.'],
    ['What had Xenophon already decided?','to go','to stay','to return from Sardis','to refuse Proxenus','He had already decided to go.'],
    ['Which pair names the alternatives?','πορεύεσθαι ἢ μένειν','ἐν Σάρδεσι','σὺν τῷ Προξένῳ','τῷ Σωκράτει','The infinitives mean to travel or to stay.'],
    ['What did his actual question ask?','how to travel best','whether to stay in Athens','who wrote the letter','why Cyrus was king','He asked how to make the journey best.'],
    ['Which word means “whether”?','πότερον','ὅπως','σύν','ἐν','πότερον opens the choice.'],
    ['Which word means “how”?','ὅπως','πότερον','ἢ','οἷς','ὅπως asks how.']
  ],
  middle:[
    ['What does πορεύεται mean?','he travels','he is traveled','they travel','I travel','πορεύεται means he travels.'],
    ['What does πορεύομαι mean?','I travel','he travels','we travel','they travel','-ομαι marks first singular.'],
    ['What does πορεύονται mean?','they travel','he travels','I travel','you travel','-ονται marks third plural.'],
    ['What does ἐπυνθάνετο mean in the gloss?','he was asking','he was asked','they asked','I inquire','The past middle has active meaning.'],
    ['What does ἤρου mean in the gloss?','you asked','he went','they sacrificed','I asked','The source uses ἤρου for you asked.'],
    ['Which verb uses middle forms to mean “I inquire”?','πυνθάνομαι','λέγω','θύω','μένω','πυνθάνομαι means I inquire.']
  ],
  dative:[
    ['What is τῷ Σωκράτει in λέγει τὴν μαντείαν τῷ Σωκράτει?','recipient','direct object','subject','place','Socrates receives the report.'],
    ['What does σὺν τῷ Προξένῳ mean?','with Proxenus','toward Proxenus','from Proxenus','about Proxenus','σύν takes a dative and means with.'],
    ['What does ἐν Σάρδεσι mean?','at Sardis','toward Sardis','from Sardis','with Sardis','ἐν plus dative marks location.'],
    ['What does αὐτῷ mean after λῷον εἴη?','for him','toward him','him as object','from him','The dative shows whose interest is involved.'],
    ['Which case follows σύν here?','dative','accusative','genitive','nominative','σύν takes the dative.'],
    ['Which case is Σάρδεσι?','dative','accusative','genitive','nominative','Σάρδεσι is dative plural.']
  ],
  prepositions:[
    ['Which phrase means “to Athens”?','εἰς τὰς Ἀθήνας','ἐν Σάρδεσι','σὺν τῷ Προξένῳ','τῷ Σωκράτει','εἰς with accusative marks movement to.'],
    ['Which phrase means “toward Cyrus”?','πρὸς Κῦρον','ἐν Σάρδεσι','σὺν τῷ Προξένῳ','περὶ τῆς μαντείας','πρός with accusative points toward.'],
    ['Which phrase marks location?','ἐν Σάρδεσι','εἰς τὰς Ἀθήνας','πρὸς Κῦρον','σὺν τῷ Προξένῳ','ἐν with dative marks location.'],
    ['Which phrase marks accompaniment?','σὺν τῷ Προξένῳ','πρὸς Κῦρον','εἰς τὰς Ἀθήνας','ἐν Σάρδεσι','σύν means with.'],
    ['Which case follows εἰς?','accusative','dative','genitive','nominative','εἰς takes the accusative.'],
    ['Which case follows ἐν?','dative','accusative','genitive','nominative','ἐν takes the dative.']
  ],
  'module-review':[
    ['What is the direct object of λέγει?','τὴν μαντείαν','τῷ Σωκράτει','ὁ Ξενοφῶν','ἐν Σάρδεσι','He reports the oracle’s response.'],
    ['What is the subject of λέγει?','ὁ Ξενοφῶν','τὴν μαντείαν','τῷ Σωκράτει','πρὸς Κῦρον','Xenophon is the one reporting.'],
    ['Which verb is present active?','λέγει','πορεύεται','πυνθάνεται','ἔρχεται','λέγει is present active.'],
    ['Which is an active infinitive?','μένειν','πορεύεσθαι','πορεύεται','πυνθάνομαι','μένειν is an active infinitive.'],
    ['Which is a middle infinitive?','πορεύεσθαι','μένειν','λέγει','θύω','πορεύεσθαι is a middle infinitive.'],
    ['What happened before Xenophon sailed?','he sacrificed as directed','he met Cyrus at Athens','the army returned home','Socrates went to Sardis','Xenophon sacrificed as instructed.']
  ]
};
const a={};
a['vocab-flashcards']={title:'Lesson 12 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items.map(v=>({prompt:v.greek,answer:v.english})))};
const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
a['vocab-practice']={title:'Lesson 12 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice the required words in short rounds.',questions:required.flatMap((v,i)=>{const others=required.filter(w=>w.greek!==v.greek);return[
  question(`lesson-12-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,[1,3,5].map(j=>others[(i+j)%others.length].english),`${v.greek} means ${v.english}.`),
  question(`lesson-12-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which entry means “${v.english}”?`,v.greek,[2,4,6].map(j=>others[(i+j)%others.length].greek),`${v.greek} means ${v.english}.`)
];})};
a['grammar-flashcards']={title:'Lesson 12 Grammar Flashcards',cards:[{prompt:'πότερον … ἢ',answer:'whether … or'},{prompt:'ὅπως',answer:'how'},{prompt:'τῷ Σωκράτει',answer:'to Socrates'},{prompt:'σὺν τῷ Προξένῳ',answer:'with Proxenus'},{prompt:'ἐν Σάρδεσι',answer:'at Sardis'},{prompt:'πορεύεσθαι',answer:'to travel'},{prompt:'μένειν',answer:'to stay'}]};
const topicQuestions=Object.entries(rows).flatMap(([topic,items])=>items.map((r,i)=>question(`lesson-12-practice-${String(Object.values(rows).slice(0,Object.keys(rows).indexOf(topic)).reduce((n,x)=>n+x.length,0)+i+1).padStart(3,'0')}`,'Grammar',topic,r[0],r[1],r.slice(2,5),r[5])));
a['topic-practice']={title:'Lesson 12 Topic Practice',practiceMode:'rounds',roundSize:6,instructions:'Practice this topic, then return to the reading.',questions:topicQuestions};
const exerciseRows=Object.entries(rows).filter(([topic])=>topic!=='word-study').flatMap(([topic,items])=>items.slice(0,4).map(r=>({topic,r})));
a['grammar-exercises']={title:'Lesson 12 Grammar Exercises',description:'Required cumulative Module 1 grammar check',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-12-grammar-v1',instructions:'Answer all 20 questions and score at least 80% to continue.',questions:exerciseRows.map(({topic,r},i)=>question(`lesson-12-grammar-${String(i+1).padStart(2,'0')}`,'Grammar',topic,r[0],r[1],r.slice(2,5),r[5]))};
const readingRows=[
  ['To whom does Xenophon report the oracle?','Socrates','Proxenus','Cyrus','Apollo','He reports it to Socrates.'],
  ['What did Socrates fault?','the question Xenophon failed to ask first','the length of the road','the number of sacrifices','the words of the priestess','He faulted the unasked prior question.'],
  ['What choice should Xenophon have put first?','whether to go or stay','whether to bring a horse','whether to visit Sardis first','whether to write home','The first question was going versus staying.'],
  ['What had Xenophon already decided?','to go','to remain in Athens','to reject the oracle','to join a fleet','He had decided to go.'],
  ['What did Socrates tell him after hearing the report?','do what the god instructed','ask a second oracle','stay in Delphi','bring Cyrus to Athens','Socrates told him to obey the god’s instruction.'],
  ['Where did Xenophon find Proxenus and Cyrus?','at Sardis','at Delphi','at Athens','at Eleusis','He found them at Sardis.']
];
const cultureRows=[
  ['What journey were Proxenus and Cyrus about to begin?','the journey inland','the return to Athens','a voyage to Delphi','a procession to Eleusis','They were about to set out inland.'],
  ['Whom was Xenophon introduced to at Sardis?','Cyrus','Socrates','Apollo','Aristarchus','He was introduced to Cyrus.'],
  ['Which comes first in the source sequence?','the report to Socrates','the meeting at Sardis','the introduction to Cyrus','the inland march','The report comes before the journey.'],
  ['What does the final image point toward?','the army and inland expedition','Xenophon’s childhood school','the procession to Eleusis','a return to the oracle','It points toward the expedition.'],
  ['What did Xenophon do before sailing?','sacrificed as directed','met Cyrus in Athens','became a general','asked whether to stay','He sacrificed according to the god’s direction.'],
  ['Which detail is reported at the end of Anabasis 3.1.8?','Xenophon meets Proxenus and Cyrus at Sardis','Socrates accompanies the army','Apollo names Cyrus king','the army reaches the sea','Xenophon reaches Sardis and meets them.']
];
const vocabRows=[0,2,4,8,12,14].map(i=>{const v=required[i];return[`What does ${v.greek} mean?`,v.english,...required.filter(w=>w.greek!==v.greek).slice(0,3).map(w=>w.english),`${v.greek} means ${v.english}.`];});
const finalGrammar=[0,1,2,4,5,6,8,9,12,13,16,17].map(i=>exerciseRows[i].r);
const finalRows=[...readingRows.map(r=>['Reading',r]),...vocabRows.map(r=>['Vocabulary',r]),...finalGrammar.map(r=>['Grammar',r]),...cultureRows.map(r=>['Greek World',r])];
a['lesson-quiz']={title:'Lesson 12 Final Quiz — The Question He Did Not Ask',description:'Reading, vocabulary, grammar, and the road to Sardis',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-12-final-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Module 1.',questions:finalRows.map(([category,r],i)=>question(`lesson-12-final-${String(i+1).padStart(2,'0')}`,category,null,r[0],r[1],r.slice(2,5),r[5]))};
lesson.activities=a;

write('content/lessons/lesson-12.json',JSON.stringify(lesson,null,2)+'\n');
let fallback=read('lesson-data.js');
fallback=fallback.replace(/\{ number: 12, title: "The Examined Life"[^\n]+/,`{ number: 12, title: "The Question He Did Not Ask", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-12-socrates-banner.png", bannerAlt: "Socrates speaking with Xenophon after Delphi", grammarFocus: "Middle meanings, datives, prepositions, and cumulative Module 1 review", greekPhrase: "Τὸ ἐρώτημα ὃ οὐκ ἠρώτα", sourceAnchor: "Xenophon, Anabasis 3.1.7–8", cultureLead: "From Socrates’ question to Sardis and the march inland." },`);
const generated=`  // BEGIN GENERATED LESSON 12\n  LESSONS["lesson-12"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 12\n\n`;
fallback=/\/\/ BEGIN GENERATED LESSON 12/.test(fallback)
  ? fallback.replace(/  \/\/ BEGIN GENERATED LESSON 12[\s\S]*?  \/\/ END GENERATED LESSON 12\n\n/,generated)
  : fallback.replace(/  const ACTIVITY_LABELS = \{/,generated+'  const ACTIVITY_LABELS = {');
write('lesson-data.js',fallback);
write('script.js',read('script.js').replace('{ id: "lesson-12", title: "The Examined Life", grammar: "Module review: present, imperfect, infinitives, participles" }','{ id: "lesson-12", title: "The Question He Did Not Ask", grammar: "Middle meanings, datives, prepositions, and cumulative Module 1 review" }'));
write('db/seeds/0001_minimal_development_seed.sql',read('db/seeds/0001_minimal_development_seed.sql').replace("'lesson-12', 'Lesson 12', 'The Examined Life', 'Module review: present, imperfect, infinitives, participles'","'lesson-12', 'Lesson 12', 'The Question He Did Not Ask', 'Middle meanings, datives, prepositions, and cumulative Module 1 review'"));
let migration=read('db/migrations/0032_publish_lesson_11.sql');
migration=migration.replace(/^--.*\n/,'-- Publish complete Lesson 12, replacing the former placeholder.\n');
migration=migration.replace(/\$lesson11\$/g,'$lesson12$').replace(/patch jsonb := \$json\$[\s\S]*?\$json\$::jsonb;/,`patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;`);
migration=migration.replaceAll("slug='lesson-11-page-1'","slug='lesson-12-page-1'").replaceAll("slug='lesson-11'","slug='lesson-12'").replaceAll('lesson_11_delphi','lesson_12_socrates');
migration=migration.replace(/UPDATE public.lesson_content_overrides o\nSET content=jsonb_set[\s\S]*?COMMIT;/,`UPDATE public.lesson_content_overrides o\nSET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('The Question He Did Not Ask'::text),true),version=o.version+1,updated_at=now()\nWHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-11')\n  AND o.content #>> '{nextLesson,id}'='lesson-12'\n  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'The Question He Did Not Ask';\nCOMMIT;`);
write('db/migrations/0033_publish_lesson_12.sql',migration);
const pkg=JSON.parse(read('package.json'));
if(!pkg.scripts['db:migrate'].includes('0033_publish_lesson_12.sql'))pkg.scripts['db:migrate']+=' && node db/run-sql.mjs db/migrations/0033_publish_lesson_12.sql';
pkg.scripts['verify:lesson12']='node scripts/verify-lesson-12.mjs';
write('package.json',JSON.stringify(pkg,null,2)+'\n');
