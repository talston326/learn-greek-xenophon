// Build Lesson 11's canonical JSON, browser fallback, and publication migration.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const write=(name,value)=>fs.writeFileSync(path.join(root,name),value);
const vocab=(category,items)=>({category,items:items.map(([greek,english,dictionaryForm,status='required vocabulary'])=>({
  greek,english,dictionaryForm,status,lemma:greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u,'').split(',')[0],audioPlaceholder:true
}))});
const paragraph=(greek,translation,gloss)=>({greek,gloss:gloss.map(([greek,english])=>({greek,english})),translation});

const paragraphs=[
  paragraph('Ὁ Ξενοφῶν ἐξ Ἀθηνῶν πρὸς Δελφοὺς πορεύεται. τὸ γράμμα τοῦ Προξένου φέρει, καὶ τὴν τοῦ Σωκράτους συμβουλὴν ἐν νῷ ἔχει. ἤδη δὲ βούλεται πρὸς Κῦρον πορεύεσθαι.',
    'Xenophon travels from Athens toward Delphi. He carries Proxenus’s letter and keeps Socrates’s advice in mind. Yet he already wants to travel to Cyrus.',
    [['ἐξ Ἀθηνῶν','from Athens'],['πρὸς Δελφοὺς','toward Delphi'],['πορεύεται','travels; present middle form'],['τὸ γράμμα τοῦ Προξένου','Proxenus’s letter'],['τὴν τοῦ Σωκράτους συμβουλὴν','Socrates’s advice'],['ἐν νῷ ἔχει','keeps in mind'],['ἤδη','already'],['βούλεται','wants; deponent verb'],['πορεύεσθαι','to travel; middle infinitive']]),
  paragraph('Ἡ ὁδὸς μακρά ἐστιν. ὁ Ξενοφῶν παρὰ ὄρη καὶ ἐλαίας βαδίζει· ὁ δὲ Παρνασσὸς ὑπὲρ τῆς ὁδοῦ φαίνεται. ἄλλοι ὁδοιπόροι πρὸς τὸ ἱερὸν πορεύονται.',
    'The road is long. Xenophon walks past mountains and olive trees, while Parnassus appears above the road. Other travelers are also heading to the sanctuary.',
    [['παρὰ ὄρη καὶ ἐλαίας','past mountains and olive trees'],['Παρνασσὸς','Mount Parnassus'],['ὑπὲρ τῆς ὁδοῦ','above the road'],['φαίνεται','appears; middle/passive form'],['ἄλλοι ὁδοιπόροι','other travelers'],['τὸ ἱερὸν','the sanctuary']]),
  paragraph('Ὅτε εἰς Δελφοὺς ἀφικνεῖται, τὰ ἱερὰ οἰκήματα ἐν ταῖς κλιτύσιν ὁρᾷ. ἡ ἱερὰ ὁδὸς ἀναβαίνει πρὸς τὸν τοῦ Ἀπόλλωνος ναόν. ἐκεῖ ὁ Ξενοφῶν ἵσταται καὶ τὸν ναὸν βλέπει.',
    'When he arrives at Delphi, he sees sacred buildings on the slopes. The Sacred Way climbs toward Apollo’s temple. There Xenophon stops and looks at the temple.',
    [['Ὅτε','when'],['εἰς Δελφοὺς ἀφικνεῖται','arrives at Delphi; contracted deponent'],['τὰ ἱερὰ οἰκήματα','the sacred buildings'],['ἐν ταῖς κλιτύσιν','on the slopes'],['ἡ ἱερὰ ὁδὸς','the Sacred Way'],['ἀναβαίνει','climbs'],['τὸν τοῦ Ἀπόλλωνος ναόν','Apollo’s temple'],['ἵσταται','stands; middle form']]),
  paragraph('Πολλοὶ ἄνθρωποι πρὸς τὸν θεὸν ἔρχονται. οἱ μὲν δῶρα φέρουσιν, οἱ δὲ περὶ τῶν πραγμάτων μαντεύονται. ὁ Ξενοφῶν τὸν θόρυβον ἀκούει, ἀλλὰ ἡ γνώμη αὐτοῦ πρὸς τὴν ὁδὸν τοῦ Κύρου τρέπεται.',
    'Many people come to the god. Some bring gifts; others seek an oracle about their concerns. Xenophon hears the bustle, but his thoughts turn to the journey to Cyrus.',
    [['οἱ μὲν','some; first half of a contrast'],['οἱ δὲ','others; second half of a contrast'],['δῶρα','gifts'],['περὶ τῶν πραγμάτων','about their affairs'],['μαντεύονται','consult an oracle; deponent'],['τὸν θόρυβον','the bustle'],['ἡ γνώμη αὐτοῦ','his thought'],['πρὸς τὴν ὁδὸν τοῦ Κύρου τρέπεται','turns to the journey to Cyrus']]),
  paragraph('Ὁ Ξενοφῶν σκέπτεται· «ὁ Σωκράτης με πρὸς τὸν θεὸν πέμπει. ἐγὼ δὲ ἤδη βούλομαι πρὸς τὸν φίλον μου ἰέναι. τί οὖν τὸν Ἀπόλλωνα ἐρωτῶ;»',
    'Xenophon reflects: “Socrates sends me to the god. But I already want to go to my friend. What, then, do I ask Apollo?”',
    [['σκέπτεται','considers; deponent'],['με','me'],['πέμπει','sends'],['ἐγὼ δὲ','but I'],['βούλομαι','want; deponent'],['ἰέναι','to go; infinitive'],['τί οὖν','what, then'],['ἐρωτῶ','do I ask?; contracted active verb']]),
  paragraph('Πρὸς τὸ μαντεῖον ἔρχεται καὶ τὸν Ἀπόλλωνα ἐρωτᾷ· «τίσι θεοῖς δεῖ με θύειν καὶ εὔχεσθαι; βούλομαι καλῶς πορεύεσθαι καὶ σῷος οἴκαδε ἀφικνεῖσθαι.»',
    'He comes to the oracle and asks Apollo: “To which gods should I sacrifice and pray? I want to make the journey successfully and return home safely.”',
    [['τὸ μαντεῖον','the oracle'],['τίσι θεοῖς','to which gods; dative plural'],['δεῖ με','must I; impersonal verb plus accusative'],['θύειν','to sacrifice; active infinitive'],['εὔχεσθαι','to pray; middle infinitive'],['καλῶς πορεύεσθαι','to travel successfully'],['σῷος','safe'],['οἴκαδε','homeward, home'],['ἀφικνεῖσθαι','to arrive; contracted middle infinitive']]),
  paragraph('Ἡ ἀπόκρισις ἔρχεται· ὁ Ἀπόλλων δηλοῖ τίσι θεοῖς δεῖ θύειν. ὁ Ξενοφῶν ἀκούει καὶ τὴν ἀπόκρισιν δέχεται. τὰ ὀνόματα τῶν θεῶν ἐν τῇ διηγήσει αὐτοῦ οὐ σώζεται.',
    'The response comes: Apollo indicates to which gods he must sacrifice. Xenophon listens and receives the answer. The gods’ names are not preserved in his account.',
    [['Ἡ ἀπόκρισις','the response'],['δηλοῖ','indicates'],['τίσι θεοῖς δεῖ θύειν','to which gods one must sacrifice; dative plus infinitive'],['δέχεται','receives; deponent'],['τὰ ὀνόματα τῶν θεῶν','the gods’ names'],['ἐν τῇ διηγήσει αὐτοῦ','in his account'],['οὐ σώζεται','are not preserved; singular verb with neuter plural subject']]),
  paragraph('Ὁ Ξενοφῶν ἀπὸ τοῦ ἱεροῦ ἀπέρχεται. τὸ ὄρος ἔτι ὑπὲρ αὐτοῦ φαίνεται, ἡ δὲ ὁδὸς πρὸς Ἀθήνας ἔμπροσθεν κεῖται. τὴν τοῦ θεοῦ ἀπόκρισιν ἐν νῷ ἔχει.',
    'Xenophon leaves the sanctuary. The mountain still rises above him, and the road toward Athens lies ahead. He keeps the god’s response in mind.',
    [['ἀπὸ τοῦ ἱεροῦ','from the sanctuary'],['ἀπέρχεται','departs; deponent'],['ἔτι','still'],['ὑπὲρ αὐτοῦ','above him'],['ἔμπροσθεν','ahead'],['κεῖται','lies; middle form'],['ἐν νῷ ἔχει','keeps in mind']])
];

const sections=[
  {id:'middle-endings',title:'1. Recognizing the Present Middle',practiceTopic:'middle-endings',body:[
    'The present middle uses a different set of endings from the present active. Compare active λύω, λύεις, λύει with middle λύομαι, λύῃ (also written λύει), λύεται. The ending tells you who acts; it does not by itself supply an English translation.',
    'In the reading, πορεύεται is third-person singular, “he travels,” while πορεύομαι is first-person singular, “I travel.” The middle present infinitive ends in -εσθαι: πορεύεσθαι, “to travel.”',
    'A middle form can express an action involving the subject, but many common verbs simply use middle endings with an active English meaning. Always learn the verb’s meaning as well as its ending.'
  ],table:{title:'Present middle of πορεύομαι',headers:['Person','Singular','Plural'],greekColumns:[1,2],rows:[['first','πορεύομαι — I travel','πορευόμεθα — we travel'],['second','πορεύῃ — you travel','πορεύεσθε — you travel'],['third','πορεύεται — he/she travels','πορεύονται — they travel']]},checks:[{prompt:'Who travels in πορεύονται?',answer:'They travel; -ονται is third-person plural.'}],examples:[{greek:'ὁ Ξενοφῶν πορεύεται· οἱ ὁδοιπόροι πορεύονται.',english:'Xenophon travels; the travelers travel.'}]},
  {id:'deponents',title:'2. Middle Form, Active Meaning',practiceTopic:'deponents',body:[
    'Some frequently used Greek verbs have middle endings in the present although their ordinary English meanings are active. These are often called deponent verbs. πορεύομαι means “I travel,” not “I am traveled.”',
    'The reading also uses βούλομαι (“I want”), σκέπτομαι (“I consider”), μαντεύομαι (“I consult an oracle”), εὔχομαι (“I pray”), and δέχομαι (“I receive”). Their third-person forms end in -εται.',
    'Do not translate a middle ending mechanically as an English passive. Ask what the dictionary form means, and use the ending to identify person and number.'
  ],table:{title:'Common deponents in the story',headers:['Dictionary form','Reading form','Meaning'],greekColumns:[0,1],rows:[['βούλομαι','βούλεται','wants'],['σκέπτομαι','σκέπτεται','considers'],['μαντεύομαι','μαντεύονται','consult an oracle'],['εὔχομαι','εὔχομαι','I pray'],['δέχομαι','δέχεται','receives']]},checks:[{prompt:'Does βούλεται mean “he is wanted”?',answer:'No. βούλεται means “he wants”; βούλομαι is a deponent.'}],examples:[{greek:'ὁ Ξενοφῶν βούλεται πορεύεσθαι.',english:'Xenophon wants to travel.'}]},
  {id:'going-arriving',title:'3. Going, Coming, and Arriving',practiceTopic:'going-arriving',body:[
    'πορεύομαι describes traveling along a route. ἔρχομαι means “I come” or “I go,” and ἀπέρχομαι means “I go away.” These verbs have middle present forms and active meanings.',
    'ἀφικνέομαι (“I arrive”) contracts in Attic Greek: the reading has ἀφικνεῖται, “he arrives,” and ἀφικνεῖσθαι, “to arrive.” Recognize the contracted forms without treating their spelling as a new ending pattern to memorize in full.',
    'The destination often follows εἰς or πρός with the accusative: εἰς Δελφοὺς ἀφικνεῖται, “he arrives at Delphi”; πρὸς τὸ μαντεῖον ἔρχεται, “he comes to the oracle.”'
  ],table:{title:'Follow the route',headers:['Greek','Meaning','Cue'],greekColumns:[0],rows:[['πρὸς Δελφοὺς πορεύεται','travels toward Delphi','journey'],['εἰς Δελφοὺς ἀφικνεῖται','arrives at Delphi','arrival'],['πρὸς τὸ μαντεῖον ἔρχεται','comes to the oracle','approach'],['ἀπὸ τοῦ ἱεροῦ ἀπέρχεται','departs from the sanctuary','departure']]},checks:[{prompt:'Which form in the reading marks arrival?',answer:'ἀφικνεῖται means “he arrives.”'}],examples:[{greek:'ὁ Ξενοφῶν εἰς Δελφοὺς ἀφικνεῖται.',english:'Xenophon arrives at Delphi.'}]},
  {id:'wanting-infinitives',title:'4. Wanting to Do Something',practiceTopic:'wanting-infinitives',body:[
    'βούλομαι can take an infinitive for the action wanted. βούλομαι πορεύεσθαι means “I want to travel”; βούλεται ἰέναι means “he wants to go.” The infinitive does not change for the subject’s person.',
    'The middle infinitive normally ends in -εσθαι, as in πορεύεσθαι and εὔχεσθαι. ἀφικνεῖσθαι is the contracted infinitive of ἀφικνέομαι. ἰέναι is an irregular infinitive of εἶμι, “I go”; it is glossed in the reading.',
    'In Xenophon’s question, his wish to travel successfully and arrive home safely is already present. The grammar of wanting helps reveal the historical point: he asks how to make the journey, having already leaned toward making it.'
  ],table:{title:'Verb of wanting plus infinitive',headers:['Greek','Meaning','Action wanted'],greekColumns:[0],rows:[['βούλομαι πορεύεσθαι','I want to travel','πορεύεσθαι'],['βούλεται ἰέναι','he wants to go','ἰέναι'],['βούλομαι ἀφικνεῖσθαι','I want to arrive','ἀφικνεῖσθαι']]},checks:[{prompt:'What is wanted in βούλεται πορεύεσθαι?',answer:'To travel; πορεύεσθαι is the infinitive.'}],examples:[{greek:'βούλομαι καλῶς πορεύεσθαι.',english:'I want to travel successfully.'}]},
  {id:'asking-praying',title:'5. Asking Apollo and Praying to the Gods',practiceTopic:'asking-praying',body:[
    'ἐρωτάω (“I ask”) is an active alpha-contract verb from Lesson 9; ἐρωτῶ and ἐρωτᾷ are its contracted forms. Asking a question is not itself a middle verb. By contrast, εὔχομαι (“I pray”) uses middle endings.',
    'τίσι θεοῖς means “to which gods?” The question concerns recipients of sacrifice and prayer. θύω means “I sacrifice”; θύειν and εὔχεσθαι mean “to sacrifice” and “to pray.” The phrase δεῖ με + infinitives means “I must ...”; it is glossed rather than a production target.',
    'Anabasis 3.1.6 reports the subject of Xenophon’s question and says the god named the gods for sacrifice. It does not supply the response’s words or the gods’ names. The quoted question in our reading is an adaptation, not preserved ancient speech.'
  ],table:{title:'Keep the verb and its meaning together',headers:['Greek','Form','Meaning'],greekColumns:[0],rows:[['ἐρωτῶ','active, first singular','I ask'],['ἐρωτᾷ','active, third singular','he asks'],['εὔχομαι','middle, first singular','I pray'],['θύειν','active infinitive','to sacrifice'],['τίσι θεοῖς','dative plural','to which gods']]},checks:[{prompt:'Is ἐρωτᾷ a middle form?',answer:'No. It is a contracted active form of ἐρωτάω.'}],examples:[{greek:'τίσι θεοῖς δεῖ με θύειν καὶ εὔχεσθαι;',english:'To which gods must I sacrifice and pray?'}]}
];

const lesson={
  id:'lesson-11',number:11,title:'The Question at Delphi',greekTitle:'Τὸ ἐν Δελφοῖς ἐρώτημα',
  scope:'Present middle forms and common deponents: traveling, arriving, wanting, consulting, and praying',
  theme:'Xenophon asks Apollo how to make a journey already in his mind',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-11-delphi-banner-v2.png',alt:'Reconstructed scene of a bearded Xenophon approaching the terraced sanctuary of Apollo at Delphi, with the triangular pediment of the temple visible',caption:'Xenophon approaches Delphi. The journey view is an educational reconstruction; the temple’s pitched roof and pediment follow the attested earlier temple.'},
  pages:[{page:1,slug:'lesson-11-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-11-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-11-page-3',title:'Delphi and the Greek World',template:'culture'}],
  vocabulary:[
    vocab('Travel and place',[
      ['πορεύομαι','travel, go','πορεύομαι'],['ἀφικνέομαι','arrive','ἀφικνέομαι'],['ἔρχομαι','come, go','ἔρχομαι'],['ἀπέρχομαι','go away, depart','ἀπέρχομαι'],['ἡ ὁδός','road, journey','ὁδός, ὁδοῦ, ἡ'],['τὸ ἱερόν','sanctuary','ἱερόν, ἱεροῦ, τό'],['ὁ ναός','temple','ναός, ναοῦ, ὁ'],['αἱ Δελφοί','Delphi','Δελφοί, Δελφῶν, αἱ','reading vocabulary'],['ὁ Παρνασσός','Mount Parnassus','Παρνασσός, Παρνασσοῦ, ὁ','reading vocabulary']]),
    vocab('Choice and inquiry',[
      ['βούλομαι','want, wish','βούλομαι'],['σκέπτομαι','consider, reflect','σκέπτομαι'],['μαντεύομαι','consult an oracle','μαντεύομαι'],['ἐρωτάω','ask, question','ἐρωτάω'],['τὸ μαντεῖον','oracle','μαντεῖον, μαντείου, τό'],['ἡ ἀπόκρισις','response, answer','ἀπόκρισις, ἀποκρίσεως, ἡ'],['ὁ Ἀπόλλων','Apollo','Ἀπόλλων, Ἀπόλλωνος, ὁ','reading vocabulary']]),
    vocab('Prayer and return',[
      ['θύω','sacrifice','θύω'],['εὔχομαι','pray','εὔχομαι'],['δέχομαι','receive','δέχομαι'],['ὁ θεός','god','θεός, θεοῦ, ὁ'],['οἴκαδε','homeward, home','οἴκαδε','reading vocabulary'],['σῷος','safe','σῷος, σῴα, σῷον','reading vocabulary']])
  ],
  reading:{title:'Τὸ ἐν Δελφοῖς ἐρώτημα',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'After Proxenus’s invitation, Xenophon follows Socrates’s advice and travels to Delphi. The question he brings concerns how to make his journey successfully and return safely; he is already inclined to go.',
    'Source note: Xenophon, Anabasis 3.1.5–6 reports Socrates’s advice, Xenophon’s visit, the substance of the question, and Apollo’s reply naming gods for sacrifice. The source does not preserve the wording of the question or reply, and it does not name those gods. The quoted question, interior reflection, road details, and visible actions in this reading are course adaptations.',
    'The reading retells the episode in the present tense. Blue glosses support place names, infinitives, datives, and constructions beyond today’s target. Focus on the middle forms and common deponents as Xenophon goes, arrives, wants, consults, prays, and receives an answer.'
  ],paragraphs:paragraphs.map(({greek,gloss})=>({greek,gloss})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:'Xenophon, Anabasis 3.1.5–6 (Delphi journey, question, response). The question’s quoted wording and scene details are adapted; the gods’ names and oracle’s wording are not preserved. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3',notesMarkdown:'Anabasis 3.1.6 reports that Xenophon asked Apollo which gods to sacrifice and pray to for a successful journey and safe return. It says Apollo named the gods but gives neither names nor exact wording. The reading’s route, atmosphere, dialogue, and thoughts are source-informed reconstruction; its final observation about the missing names describes the surviving text.'},
  wordStudy:{label:'Word Study — Going, Asking, and Receiving',blocks:[{title:'A journey already in mind',practiceTopic:'word-study',body:[
    'πορεύομαι means “travel,” ἀφικνέομαι means “arrive,” and ἀπέρχομαι means “depart.” All three use middle present forms with active English meanings. Trace Xenophon from Athens to Delphi and then away from the sanctuary.',
    'βούλομαι means “want.” His desire to visit Cyrus matters: the source’s question asks for a successful journey and safe return, not whether to undertake the journey. Lesson 12 will take up Socrates’s response to that choice.',
    'μαντεύομαι means “consult an oracle”; τὸ μαντεῖον is the oracle. ἐρωτάω means “ask” and is active, while εὔχομαι means “pray” and has middle form. The question is about τίσι θεοῖς, “to which gods.”'
  ],display:[{greek:'πορεύεται',english:'he travels'},{greek:'ἀφικνεῖται',english:'he arrives'},{greek:'βούλεται',english:'he wants'},{greek:'μαντεύονται',english:'they consult an oracle'},{greek:'τίσι θεοῖς',english:'to which gods?'}]}]},
  grammar:{intro:'The story turns on movement and intention. Read the present middle endings, then learn which common verbs use them for ordinary actions such as traveling, wanting, arriving, consulting, and praying.',objectives:[
    'Recognize the six present middle endings and the middle infinitive.',
    'Translate common deponents by their lexical meanings rather than as automatic passives.',
    'Distinguish traveling, arriving, approaching, and departing in the reading.',
    'Combine βούλομαι with an infinitive to express what someone wants to do.',
    'Distinguish active ἐρωτάω from middle εὔχομαι and identify τίσι θεοῖς as the gods addressed.'
  ],sections,summary:{title:'Grammar Summary',items:[
    'Present middle endings: -ομαι, -ῃ/-ει, -εται; -όμεθα, -εσθε, -ονται. The middle infinitive ends in -εσθαι.',
    'πορεύομαι, βούλομαι, σκέπτομαι, μαντεύομαι, εὔχομαι, and δέχομαι use middle forms with active English meanings.',
    'ἀφικνεῖται means “he arrives”; ἀφικνεῖσθαι means “to arrive.” Both are contracted forms of ἀφικνέομαι.',
    'βούλομαι πορεύεσθαι means “I want to travel.” The infinitive names the desired action.',
    'ἐρωτᾷ is active “he asks”; εὔχομαι is middle “I pray”; τίσι θεοῖς means “to which gods?”'
  ]}},
  culture:{title:'Delphi and the Greek World',banner:{image:'assets/lesson-11-tournaire-delphi.jpg',display:'full',alt:'Albert Tournaire’s 1894 painted reconstruction of the terraced sanctuary of Apollo at Delphi',caption:'Albert Tournaire, reconstruction of the Sanctuary of Apollo at Delphi, 1894. This is a modern imagined reconstruction, not a contemporary picture of Xenophon’s visit.',credit:'Albert Tournaire, 1894; Wikimedia Commons, public domain. Image unmodified.',sourceUrl:'https://commons.wikimedia.org/wiki/File:Delphi_by_Albert_Tournaire.jpg',licenseUrl:'https://creativecommons.org/publicdomain/mark/1.0/'},body:[],sections:[
    {title:'A sanctuary shared across Greek cities',body:[
      'Delphi stood on the slopes of Mount Parnassus in central Greece. Its Sanctuary of Apollo was Panhellenic: people from many Greek cities visited a site that was not the possession of any one polis. Greeks associated it with the omphalos, the “navel” or symbolic center of the world. The Pythia, Apollo’s priestess, delivered responses to those consulting the oracle.',
      'Visitors climbed the Sacred Way past dedications and treasuries erected by different communities. The sanctuary also hosted the Pythian Games. Delphi mattered to civic and personal decisions, but the evidence for particular oracles varies: later stories may shape how consultations are remembered. Tournaire’s painting above is a nineteenth-century reconstruction of the sanctuary, useful for imagining its terraces and monuments, not a direct record of how every building looked in Xenophon’s day.'
    ]},
    {title:'Croesus of Lydia: a visitor from beyond Greece',body:[
      'Delphi’s prestige reached rulers beyond the Greek city-states. Herodotus tells how Croesus, king of Lydia in Anatolia, tested several oracles, sent rich offerings to Delphi, and consulted Apollo before making war against Persia. Lydia was a non-Greek kingdom. Greek authors could call such peoples “barbarians,” a word referring to outsiders from the Greek-speaking world rather than a neutral judgment about their culture.',
      'In Herodotus’s account, the oracle said that crossing the Halys would destroy a great empire. Croesus expected Persia’s empire to fall, but his own kingdom fell. Herodotus then has Delphi explain that Croesus should have asked which empire was meant. The episode is a literary account from Herodotus, written after Croesus’s reign; it shows both Delphi’s reach and the importance of the question a consulter chose to ask. Xenophon’s question about the gods for his journey raises a different question about what he had already decided.'
    ]}
  ],questions:[
    {prompt:'Why was Delphi called Panhellenic?',answer:'People from many Greek cities visited and dedicated offerings there; it was a shared sanctuary rather than one city’s shrine.'},
    {prompt:'Who delivered oracular responses at Delphi?',answer:'The Pythia, Apollo’s priestess, delivered responses to those consulting the oracle.'},
    {prompt:'What was the Sacred Way?',answer:'The route through Apollo’s sanctuary past dedications and treasuries toward the temple.'},
    {prompt:'Why does Croesus belong in a lesson about Delphi’s wider importance?',answer:'Herodotus reports that the non-Greek Lydian king sent offerings and consulted the oracle, showing Delphi’s reputation beyond Greek city-states.'},
    {prompt:'What does the Croesus story suggest about asking an oracle?',answer:'Herodotus presents Croesus as interpreting an ambiguous answer in line with his own hopes instead of asking which empire would fall.'},
    {prompt:'What does the culture-page image show?',answer:'Albert Tournaire’s 1894 painted reconstruction of Apollo’s sanctuary, not an ancient eyewitness view.'}
  ],review:{title:'Before the Final Quiz',items:[
    'Follow Xenophon’s route with πορεύεται, ἀφικνεῖται, ἔρχεται, and ἀπέρχεται.',
    'Recognize middle endings in βούλεται, μαντεύονται, εὔχομαι, and δέχεται.',
    'Explain the actual subject of Xenophon’s question and why the oracle’s wording and gods’ names must remain unspecified.',
    'Explain why Delphi was Panhellenic and how Herodotus’s Croesus shows its reach beyond the Greek-speaking world.'
  ]},sources:[
    {title:'Xenophon, Anabasis 3.1.5–6 (Delphi consultation)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3'},
    {title:'UNESCO World Heritage Centre, Archaeological Site of Delphi',url:'https://whc.unesco.org/en/list/393/'},
    {title:'Archaeological Site of Delphi, Temple of Apollo',url:'https://delphi.culture.gr/the-temple-of-apollo/'},
    {title:'Herodotus, Histories 1.46–56, 1.90–91 (Croesus and Delphi)',url:'https://www-current.chs.harvard.edu/primary-source/herodotus-selections-part-i/'},
    {title:'Wikimedia Commons, Albert Tournaire, Delphi',url:'https://commons.wikimedia.org/wiki/File:Delphi_by_Albert_Tournaire.jpg'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-12',title:'The Question He Did Not Ask',fallbackUrl:'lesson.html?lesson=12&page=1'},contentRevision:'lesson-11-delphi-complete-v1',previousLesson:{id:'lesson-10',title:'The Letter from Proxenus',fallbackUrl:'lesson.html?lesson=10&page=1'}
};

function question(id,category,topic,prompt,correct,wrong,why){
  if(wrong.length!==3||new Set([correct,...wrong]).size!==4) throw new Error(`Repeated answer choice: ${id}`);
  const options=[correct,...wrong],shift=Number(id.match(/\d+(?!.*\d)/)?.[0]||0)%4;
  return {id,type:'multiple-choice',...(topic?{topic}:{}),category,prompt,choices:Array.from({length:4},(_,i)=>{
    const n=(i-shift+4)%4;return {text:options[n],correct:n===0,feedback:`${n===0?'Correct':'Review'}: ${why}`};
  })};
}
const rows={
  'word-study':[
    ['What does πορεύομαι mean?','I travel','I ask','I sacrifice','I hear','πορεύομαι means travel.'],
    ['What does ἀφικνέομαι mean?','I arrive','I depart','I pray','I receive','ἀφικνέομαι means arrive.'],
    ['What does βούλομαι mean?','I want','I see','I speak','I send','βούλομαι means want.'],
    ['What does μαντεύομαι mean?','I consult an oracle','I build a temple','I walk downhill','I carry a letter','μαντεύομαι means consult an oracle.'],
    ['What is τὸ μαντεῖον?','the oracle','the letter','the road','the mountain','μαντεῖον is an oracle.'],
    ['What is τὸ ἱερόν?','the sanctuary','the journey','the question','the response','ἱερόν is a sanctuary.'],
    ['What is ὁ ναός?','the temple','the priestess','the road','the mountain','ναός is a temple.'],
    ['What does εὔχομαι mean?','I pray','I ask','I arrive','I return','εὔχομαι means pray.'],
    ['What does θύω mean?','I sacrifice','I want','I hear','I receive','θύω means sacrifice.'],
    ['What is ἡ ἀπόκρισις?','the response','the temple','the gift','the road','ἀπόκρισις means response.'],
    ['What does οἴκαδε mean?','homeward','uphill','to the oracle','to the sea','οἴκαδε means homeward.'],
    ['What does σῷος mean?','safe','sacred','distant','wealthy','σῷος means safe.']
  ],
  'middle-endings':[
    ['Which form means “I travel”?','πορεύομαι','πορεύεται','πορεύονται','πορεύεσθε','-ομαι is first-person singular.'],
    ['Which form means “he travels”?','πορεύεται','πορεύομαι','πορευόμεθα','πορεύονται','-εται is third-person singular.'],
    ['Which form means “they travel”?','πορεύονται','πορεύεται','πορεύῃ','πορεύομαι','-ονται is third-person plural.'],
    ['Which form means “we travel”?','πορευόμεθα','πορεύομαι','πορεύεσθε','πορεύονται','-όμεθα is first-person plural.'],
    ['Which form means “you all travel”?','πορεύεσθε','πορεύῃ','πορεύεται','πορευόμεθα','-εσθε is second-person plural.'],
    ['Which form means “you travel” to one person?','πορεύῃ','πορεύεται','πορεύονται','πορευόμεθα','-ῃ is second-person singular.'],
    ['What person is βούλεται?','third-person singular','first-person singular','second-person plural','third-person plural','-εται marks third-person singular.'],
    ['What person is εὔχομαι?','first-person singular','third-person singular','first-person plural','third-person plural','-ομαι marks first-person singular.'],
    ['What person is μαντεύονται?','third-person plural','third-person singular','first-person singular','second-person singular','-ονται marks third-person plural.'],
    ['Which ending is first-person plural middle?','-όμεθα','-ομαι','-εσθε','-ονται','-όμεθα is first-person plural.'],
    ['Which ending is second-person plural middle?','-εσθε','-εται','-όμεθα','-ῃ','-εσθε is second-person plural.'],
    ['What does πορεύεσθαι mean?','to travel','he travels','they travel','we travel','-εσθαι marks a present middle infinitive.']
  ],
  deponents:[
    ['How should βούλεται be translated?','he wants','he is wanted','he is sent','he asks','βούλομαι has middle form and active meaning.'],
    ['How should δέχεται be translated?','he receives','he is received','he sacrifices','he consults','δέχομαι means receive.'],
    ['How should σκέπτεται be translated?','he considers','he is considered','he walks','he prays','σκέπτομαι means consider.'],
    ['How should μαντεύονται be translated?','they consult an oracle','they are prophesied','they build a shrine','they leave home','μαντεύομαι means consult an oracle.'],
    ['How should εὔχομαι be translated?','I pray','I am prayed','he prays','we pray','εὔχομαι means I pray.'],
    ['Which is a deponent meaning “travel”?','πορεύομαι','θύω','ἐρωτάω','βλέπω','πορεύομαι has middle forms and means travel.'],
    ['Which is a deponent meaning “want”?','βούλομαι','ἀκούω','φέρω','λέγω','βούλομαι has middle forms and means want.'],
    ['Which is a deponent meaning “receive”?','δέχομαι','ὁρῶ','γράφω','θύω','δέχομαι has middle forms and means receive.'],
    ['Which is an active verb rather than a deponent?','ἐρωτάω','εὔχομαι','βούλομαι','δέχομαι','ἐρωτάω is active.'],
    ['What does the middle ending alone tell you?','person and number, not a fixed English passive','that the verb must be passive','that the verb is future','that the subject is plural','Meaning must be learned with the verb.'],
    ['What does ἔρχομαι mean?','I come or go','I am carried','I pray','I sacrifice','ἔρχομαι has active English meaning.'],
    ['What does ἀπέρχομαι mean?','I depart','I arrive','I ask','I want','ἀπέρχομαι means depart.']
  ],
  'going-arriving':[
    ['Which reading form means “he arrives”?','ἀφικνεῖται','πορεύεται','ἀπέρχεται','εὔχεται','ἀφικνεῖται is the contracted arrival form.'],
    ['Which form means “to arrive”?','ἀφικνεῖσθαι','ἀφικνεῖται','ἀπέρχεται','πορεύεται','ἀφικνεῖσθαι is the contracted middle infinitive.'],
    ['Which form means “he departs”?','ἀπέρχεται','ἀφικνεῖται','βούλεται','μαντεύεται','ἀπέρχεται means departs.'],
    ['Which form means “he comes”?','ἔρχεται','δέχεται','σκέπτεται','θύει','ἔρχεται means comes or goes.'],
    ['What does εἰς Δελφοὺς ἀφικνεῖται mean?','he arrives at Delphi','he leaves Delphi','he prays to Delphi','he sends a letter to Delphi','εἰς plus accusative marks the destination.'],
    ['What does πρὸς Δελφοὺς πορεύεται mean?','he travels toward Delphi','he departs from Delphi','he consults Delphi','he returns from Delphi','πρός marks the direction of travel.'],
    ['What does ἀπὸ τοῦ ἱεροῦ ἀπέρχεται mean?','he leaves the sanctuary','he arrives at the sanctuary','he builds a sanctuary','he prays in a sanctuary','ἀπό marks departure from the sanctuary.'],
    ['What is the dictionary form behind ἀφικνεῖται?','ἀφικνέομαι','ἀπέρχομαι','πορεύομαι','μαντεύομαι','ἀφικνεῖται is contracted from ἀφικνέομαι.'],
    ['Which verb describes motion along a route?','πορεύομαι','δέχομαι','βούλομαι','σκέπτομαι','πορεύομαι means travel.'],
    ['Which verb emphasizes reaching the destination?','ἀφικνέομαι','ἀπέρχομαι','εὔχομαι','ἐρωτάω','ἀφικνέομαι means arrive.'],
    ['What destination follows εἰς in the reading?','Δελφούς','Ἀθηνῶν','Παρνασσός','Σωκράτης','εἰς Δελφούς means to Delphi.'],
    ['Which phrase marks movement away?','ἀπὸ τοῦ ἱεροῦ','εἰς Δελφούς','πρὸς τὸ μαντεῖον','πρὸς Κῦρον','ἀπό marks movement from a place.']
  ],
  'wanting-infinitives':[
    ['What does βούλομαι πορεύεσθαι mean?','I want to travel','I travel unwillingly','he wants to arrive','I am traveling','The infinitive names the action wanted.'],
    ['What does βούλεται ἰέναι mean?','he wants to go','he arrives','he is sent','they want to go','βούλεται is he wants; ἰέναι is to go.'],
    ['Which word is the infinitive in βούλομαι πορεύεσθαι?','πορεύεσθαι','βούλομαι','both words','neither word','πορεύεσθαι is to travel.'],
    ['Which word means “I want” in βούλομαι πορεύεσθαι?','βούλομαι','πορεύεσθαι','both words','neither word','βούλομαι means I want.'],
    ['What does ἀφικνεῖσθαι mean?','to arrive','he arrives','I arrive','they arrive','-εσθαι is infinitive after contraction.'],
    ['Which phrase means “I want to arrive”?','βούλομαι ἀφικνεῖσθαι','βούλεται ἀφικνεῖται','πορεύομαι ἰέναι','δέχομαι ἐρωτᾷ','βούλομαι plus infinitive expresses desire.'],
    ['What person is a present infinitive?','it has no person ending','first-person singular','third-person singular','second-person plural','An infinitive names an action without a person ending.'],
    ['Which ending usually marks a middle infinitive?','-εσθαι','-εται','-ομαι','-ονται','-εσθαι is the middle infinitive ending.'],
    ['What is the action wanted in βούλομαι καλῶς πορεύεσθαι?','to travel successfully','to pray to Apollo','to receive a gift','to leave Athens immediately','πορεύεσθαι names the desired action.'],
    ['What is ἰέναι?','an irregular infinitive meaning to go','a dative noun','a plural imperative','an article','ἰέναι means to go.'],
    ['Does πορεύεσθαι change when the subject changes?','no, the infinitive stays the same','yes, it takes -εται','yes, it takes -ονται','yes, it becomes a noun','Infinitives do not mark person.'],
    ['What does βούλεται πορεύεσθαι mean?','he wants to travel','I want to travel','they want to travel','he is traveled','βούλεται is he wants.']
  ],
  'asking-praying':[
    ['What does ἐρωτᾷ mean?','he asks','he prays','he arrives','he receives','ἐρωτᾷ is contracted active from ἐρωτάω.'],
    ['What does ἐρωτῶ mean?','I ask','he asks','they pray','I receive','ἐρωτῶ is first-person active.'],
    ['What does εὔχομαι mean?','I pray','I ask','I sacrifice','I arrive','εὔχομαι means I pray.'],
    ['What does τίσι θεοῖς mean?','to which gods','from which gods','the god asks','these gods','τίσι θεοῖς is dative plural.'],
    ['What does θύειν mean?','to sacrifice','he sacrifices','I sacrifice','to pray','θύειν is active infinitive.'],
    ['What does εὔχεσθαι mean?','to pray','he prays','I pray','to consult','εὔχεσθαι is middle infinitive.'],
    ['Which verb is active?','ἐρωτάω','εὔχομαι','μαντεύομαι','βούλομαι','ἐρωτάω is active.'],
    ['Which verb means to pray with middle endings?','εὔχομαι','ἐρωτάω','θύω','δηλόω','εὔχομαι is middle in form.'],
    ['To whom does Xenophon direct the question?','Apollo','Croesus','Proxenus','the Pythian Games','Anabasis says Xenophon asked Apollo.'],
    ['What does the question ask?','which gods to sacrifice and pray to','whether Proxenus wrote the letter','which temple to build','who won the Pythian Games','The question asks for gods for the journey.'],
    ['Does Anabasis 3.1.6 name the gods?','no','yes, all twelve Olympians','yes, Zeus alone','yes, Apollo alone','The passage does not supply their names.'],
    ['Is the reading’s quoted question a preserved ancient quotation?','no, it is an adaptation','yes, Xenophon records these exact words','yes, Herodotus quotes it','yes, it is written on the temple','The source reports its substance, not its exact wording.']
  ]
};

for(const [topic,items] of Object.entries(rows)) if(items.length!==12) throw new Error(`${topic} has ${items.length} questions`);
const topics=Object.keys(rows);
const bank=topics.flatMap(topic=>rows[topic].map(([prompt,correct,a,b,c,why])=>({topic,prompt,correct,wrong:[a,b,c],why})));
const topicQuestions=bank.map((q,i)=>question(`lesson-11-practice-${String(i+1).padStart(3,'0')}`,'Grammar',q.topic,q.prompt,q.correct,q.wrong,q.why));
const grammarExercises=topics.slice(1).flatMap((topic,ti)=>[1,3,6,9].map((index,j)=>{
  const [prompt,correct,a,b,c,why]=rows[topic][index];
  return question(`lesson-11-grammar-exercise-${String(ti*4+j+1).padStart(2,'0')}`,'Grammar',topic,prompt,correct,[a,b,c],why);
}));
for(const [i,[topic,index]] of [['middle-endings',11],['deponents',4],['going-arriving',7],['asking-praying',11]].entries()){
  const [prompt,correct,a,b,c,why]=rows[topic][index];
  grammarExercises.push(question(`lesson-11-grammar-exercise-${String(21+i).padStart(2,'0')}`,'Grammar',topic,prompt,correct,[a,b,c],why));
}
const required=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
const vocabPractice=required.flatMap((v,i)=>{
  const others=required.filter(x=>x.english!==v.english);
  const pick=steps=>steps.map(n=>others[(i+n)%others.length]);
  return [question(`lesson-11-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,pick([1,5,9]).map(x=>x.english),`${v.greek} means ${v.english}.`),
    question(`lesson-11-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which Greek entry means “${v.english}”?`,v.greek,pick([2,6,10]).map(x=>x.greek),`${v.greek} means ${v.english}.`)];
});
const quiz=[];
const final=(category,prompt,correct,a,b,c,why)=>quiz.push(question(`lesson-11-final-${String(quiz.length+1).padStart(2,'0')}`,category,null,prompt,correct,[a,b,c],why));
final('Reading','Why does Xenophon travel to Delphi?','to consult Apollo about his journey','to visit Croesus','to join the Pythian Games','to meet Proxenus there','Socrates advised him to consult Apollo.');
final('Reading','Toward whom is Xenophon already inclined to travel?','Cyrus the Younger','Croesus','Plato','the Spartan king','The invitation draws him toward Cyrus.');
final('Reading','What does Xenophon carry from Athens?','Proxenus’s letter','a Delphic inscription','Croesus’s gift','a Persian shield','The reading has him carrying Proxenus’s letter.');
final('Reading','What does Xenophon see on reaching Delphi?','sacred buildings on the slopes','the Athenian Acropolis','the Persian court','the walls of Sardis','The adapted setting places sanctuary buildings on the slopes.');
final('Reading','Which gods does Xenophon ask about?','the gods to sacrifice and pray to for his journey','the gods who founded Athens','the gods worshiped by Croesus alone','the gods in Proxenus’s home','His question concerns sacrifice and prayer for the journey.');
final('Reading','What does the passage preserve of Apollo’s answer?','that it named gods for sacrifice, but not their names or exact words','the complete words of the Pythia','a list of twelve gods','a refusal to answer','Anabasis 3.1.6 does not give the gods’ names or exact wording.');
for(const v of [required[0],required[1],required[7],required[9],required[12],required[15]]){
  const i=required.indexOf(v),others=required.filter(x=>x.english!==v.english);
  final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);
}
for(const [topic,indices] of [['middle-endings',[0,2,10]],['deponents',[0,3,8]],['going-arriving',[0,4]],['wanting-infinitives',[0,7]],['asking-praying',[1,3]]]){
  for(const i of indices){const [prompt,correct,a,b,c,why]=rows[topic][i];final('Grammar',prompt,correct,a,b,c,why);}
}
final('Greek World','Why is Delphi called a Panhellenic sanctuary?','people from many Greek cities visited it','only Athenians could enter','it belonged to Lydia','it was inside Sparta','People from many Greek communities visited Delphi.');
final('Greek World','Who delivered responses at Apollo’s oracle?','the Pythia, Apollo’s priestess','Croesus','Xenophon','Proxenus','The Pythia delivered oracular responses.');
final('Greek World','Which non-Greek ruler consulted Delphi in Herodotus’s account?','Croesus of Lydia','Cyrus the Younger','Socrates','Pericles','Herodotus tells of Croesus of Lydia consulting Delphi.');
final('Greek World','What did Herodotus say Croesus misread?','which empire would fall if he attacked Persia','the route to the Pythian Games','the gods named for Xenophon','Socrates’s advice','Croesus assumed the empire was Persia’s.');
final('Greek World','What did the Sacred Way lead through?','Apollo’s sanctuary past dedications and treasuries','the Persian capital','the Athenian harbor','Croesus’s palace','The Sacred Way passed monuments in the sanctuary.');
final('Greek World','What is the culture-page picture?','an 1894 painted reconstruction by Albert Tournaire','a photograph from Xenophon’s lifetime','a map drawn by Croesus','a portrait of the Pythia','Tournaire painted a modern reconstruction.');
if(quiz.length!==30) throw new Error(`Expected 30 final questions, got ${quiz.length}`);
lesson.activities={
  'vocab-flashcards':{title:'Lesson 11 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 11 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 11 words in short rounds. Reading-only words remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 11 Grammar Flashcards',cards:[{prompt:'πορεύομαι / πορεύεται / πορεύονται',answer:'I travel / he travels / they travel'},{prompt:'βούλομαι / βούλεται',answer:'I want / he wants'},{prompt:'ἀφικνεῖται / ἀφικνεῖσθαι',answer:'he arrives / to arrive'},{prompt:'μαντεύομαι',answer:'I consult an oracle'},{prompt:'εὔχομαι',answer:'I pray'},{prompt:'ἐρωτῶ / ἐρωτᾷ',answer:'I ask / he asks; active forms'},{prompt:'τίσι θεοῖς',answer:'to which gods?'}]},
  'topic-practice':{title:'Lesson 11 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice gives immediate feedback and does not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 11 Grammar Exercises',description:'Present middle endings, deponents, motion, infinitives, and inquiry',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-11-grammar-exercises-v1',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 11 Final Quiz — The Question at Delphi',description:'Reading, vocabulary, grammar, Delphi, and Croesus',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-11-final-quiz-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 11 and continue to Lesson 12.',questions:quiz}
};

write('content/lessons/lesson-11.json',JSON.stringify(lesson,null,2)+'\n');
let fallback=read('lesson-data.js');
const manifest='{ number: 11, title: "The Question at Delphi", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-11-delphi-banner-v2.png", bannerAlt: "Xenophon approaches the terraced Sanctuary of Apollo at Delphi", grammarFocus: "Present middle forms and common deponents", greekPhrase: "Τὸ ἐν Δελφοῖς ἐρώτημα", sourceAnchor: "Xenophon, Anabasis 3.1.5–6", cultureLead: "Delphi as a Panhellenic sanctuary and Croesus of Lydia as a consulter from beyond Greece." }';
const manifestPattern=/\{ number: 11, title: "[^"]+",[^\n]+\},/;
if(!manifestPattern.test(fallback)) throw new Error('Lesson 11 manifest not found');
fallback=fallback.replace(manifestPattern,manifest+',');
const generated=`  // BEGIN GENERATED LESSON 11\n  LESSONS["lesson-11"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 11`;
if(fallback.includes('  // BEGIN GENERATED LESSON 11')) fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 11[\s\S]*?  \/\/ END GENERATED LESSON 11/g,generated);
else fallback=fallback.replace('  // END GENERATED LESSON 10',`  // END GENERATED LESSON 10\n${generated}`);
write('lesson-data.js',fallback);
let sql=read('db/migrations/0031_refine_lesson_10_guest_friendship.sql');
sql=sql.replace(/patch jsonb := \$json\$[\s\S]*?\$json\$::jsonb;/,`patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;`)
  .replace(/^-- .*\n/,'-- Publish complete Lesson 11: Delphi, present middle forms, and Panhellenic history.\n')
  .replaceAll('$lesson10$','$lesson11$')
  .replace(/slug='lesson-(9|10)'/g,(_,n)=>`slug='lesson-${n==='10'?'11':'10'}'`)
  .replaceAll('lesson_10_proxenus','lesson_11_delphi')
  .replaceAll("'The Letter from Proxenus';","'The Question at Delphi';")
  .replaceAll("to_jsonb('The Letter from Proxenus'::text)","to_jsonb('The Question at Delphi'::text)");
// The template's reading-segment slug occurs as literal SQL, separate from lesson slugs.
sql=sql.replace("slug='lesson-10-page-1'","slug='lesson-11-page-1'")
  .replace("o.content #>> '{nextLesson,id}'='lesson-10'","o.content #>> '{nextLesson,id}'='lesson-11'");
if(!sql.includes("slug='lesson-11'")||!sql.includes("slug='lesson-10'")||!sql.includes("slug='lesson-11-page-1'")) throw new Error('Lesson 11 migration transformation failed');
write('db/migrations/0032_publish_lesson_11.sql',sql);
console.log(`Built Lesson 11: ${paragraphs.length} paragraphs, ${required.length} required words, ${topicQuestions.length} topic questions, ${grammarExercises.length} grammar exercises, ${quiz.length} final questions.`);
