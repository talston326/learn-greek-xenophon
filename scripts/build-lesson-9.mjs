// Lesson 9 source data and deterministic publication assets.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const at=name=>path.join(root,name);
const vocab=(category,items)=>({category,items:items.map(([greek,english,dictionaryForm,status='required vocabulary'])=>({
  greek,english,dictionaryForm,status,lemma:greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u,'').split(',')[0],audioPlaceholder:true
}))});
const paragraphs=[
  {greek:'μετὰ τὸ δεῖπνον ὁ Σωκράτης καὶ οἱ φίλοι ἐν οἰκίᾳ φίλου εἰσίν. ὁ Πλάτων, ὁ Ἀντισθένης, καὶ ὁ Κριτόβουλος ἐπὶ κλινῶν κεῖνται. ὁ Ξενοφῶν παρὰ τῷ Σωκράτει κεῖται καὶ ἀκούει.',
   translation:'After dinner Socrates and his friends are in a friend’s house. Plato, Antisthenes, and Critobulus recline on couches. Xenophon reclines beside Socrates and listens.',
   gloss:[['μετὰ τὸ δεῖπνον','after dinner'],['ὁ Πλάτων','Plato; name supplied'],['ὁ Ἀντισθένης','Antisthenes; name supplied'],['ὁ Κριτόβουλος','Critobulus; name supplied'],['ἐπὶ κλινῶν κεῖνται','they recline on couches; supplied forms'],['παρὰ τῷ Σωκράτει','beside Socrates; supplied phrase']]},
  {greek:'ὁ Σωκράτης ἐρωτᾷ· «ὦ Κριτόβουλε, τίς ἐστι φίλος ἀγαθός;» ὁ Κριτόβουλος λέγει· «ὁ φίλος τὸν φίλον τιμᾷ καὶ ἐν κακοῖς οὐκ ἀπολείπει. ἐγὼ τοῦτον φίλον ἀγαθὸν νομίζω.»',
   translation:'Socrates asks, “Critobulus, who is a good friend?” Critobulus says, “A friend honors a friend and does not abandon him in trouble. I consider this person a good friend.”',
   gloss:[['ἐρωτᾷ','he asks; from ἐρωτάω'],['ὦ Κριτόβουλε','Critobulus!; direct address'],['τίς','who?; supplied question word'],['ἐν κακοῖς','in troubles; adjective used as a noun'],['οὐκ ἀπολείπει','does not abandon; supplied verb'],['τοῦτον','this person; supplied pronoun'],['νομίζω','I consider; supplied verb']]},
  {greek:'ὁ Πλάτων λέγει· «σὺ τὴν πίστιν τιμᾷς, ὦ Κριτόβουλε. ἀλλ᾽ ὁ φίλος καὶ ἀγαθὸς ἔστω. ἄνθρωπος κακὸς τὸν φίλον βλάπτει.» ὁ Κριτόβουλος ἐρωτᾷ· «οὐκ ἔστιν ἡ πίστις ἀγαθή;»',
   translation:'Plato says, “You honor loyalty, Critobulus. But let the friend also be good. A bad person harms his friend.” Critobulus asks, “Is loyalty not good?”',
   gloss:[['τὴν πίστιν','loyalty; supplied third-declension noun'],['τιμᾷς','you honor; from τιμάω'],['ἀλλ᾽','but; ἀλλά loses its final vowel before a following vowel'],['ἔστω','let him be; supplied command'],['βλάπτει','harms; supplied verb']]},
  {greek:'ὁ Ἀντισθένης λέγει· «καὶ ἡ χρεία μεγάλη ἐστίν. ὁ φίλος ὠφελεῖ τὸν φίλον· ἔργον ἀγαθὸν ποιεῖ.» ὁ Πλάτων λέγει· «ναί· ἀλλ᾽ ἄνευ ἀρετῆς τὸ ἔργον οὐκ ἀρκεῖ.»',
   translation:'Antisthenes says, “Practical need matters greatly too. A friend helps a friend; he does a good deed.” Plato says, “Yes, but without good character the deed is not enough.”',
   gloss:[['ἡ χρεία','need, practical usefulness; supplied noun'],['ὠφελεῖ','helps or benefits; supplied verb'],['ἄνευ ἀρετῆς','without good character; supplied phrase'],['οὐκ ἀρκεῖ','is not enough; supplied verb']]},
  {greek:'ὁ Ξενοφῶν ἐρωτᾷ· «ὦ Ἀντίσθενες, ὁ πλούσιος φίλος ὠφελεῖ, ἀλλ᾽ οὐ τιμᾷ. φίλος ἀγαθός ἐστιν;» ὁ Ἀντισθένης λέγει· «οὐ πάντως. τὸ χρήσιμον μόνον οὐκ ἀρκεῖ.»',
   translation:'Xenophon asks, “Antisthenes, a wealthy friend helps but does not honor his friend. Is he a good friend?” Antisthenes says, “Not necessarily. Usefulness alone is not enough.”',
   gloss:[['ὦ Ἀντίσθενες','Antisthenes!; direct address'],['ὁ πλούσιος φίλος','the wealthy friend'],['οὐ πάντως','not necessarily'],['τὸ χρήσιμον μόνον','usefulness alone; adjective used as a noun']]},
  {greek:'ὁ Κριτόβουλος λέγει· «ἐγὼ τοὺς φίλους ἀγαπῶ. σὺ τοὺς φίλους ἀγαπᾷς, ὦ Πλάτων;» ὁ Πλάτων λέγει· «ναί· καὶ τὰ καλά ἔργα τιμῶ.» ὁ Ἀντισθένης γελᾷ· «πολλὰ ἐρωτᾶτε, ὦ φίλοι.»',
   translation:'Critobulus says, “I care for my friends. Do you care for your friends, Plato?” Plato says, “Yes, and I honor good deeds.” Antisthenes laughs: “You ask many questions, friends.”',
   gloss:[['ἀγαπῶ','I care for; from ἀγαπάω'],['ἀγαπᾷς','you care for; from ἀγαπάω'],['τιμῶ','I honor; from τιμάω'],['γελᾷ','he laughs; from γελάω'],['ἐρωτᾶτε','you all ask; from ἐρωτάω']]},
  {greek:'ὁ Σωκράτης λέγει· «οἱ φίλοι οὐ μόνον ὠφελοῦσιν, ἀλλὰ καὶ ἀλλήλους τιμῶσιν. ἡμεῖς φίλους ἀγαθοὺς ζητοῦμεν· πρῶτον δὲ αὐτοὶ ἀγαθοὶ φίλοι ἐσμέν;» οἱ ἄλλοι σιγῶσιν.',
   translation:'Socrates says, “Friends do not only help; they also honor one another. We seek good friends; but are we ourselves good friends first?” The others fall silent.',
   gloss:[['οὐ μόνον','not only'],['ὠφελοῦσιν','they help; supplied contracted verb'],['ἀλλὰ καὶ','but also'],['ἀλλήλους','one another; supplied pronoun'],['τιμῶσιν','they honor; from τιμάω'],['πρῶτον','first'],['αὐτοὶ','we ourselves; supplied form'],['σιγῶσιν','they fall silent; supplied verb']]},
  {greek:'ὁ Ξενοφῶν τὸν Σωκράτην βλέπει καὶ λέγει· «σὺ ἡμᾶς ἐρωτᾷς, ἡμεῖς δὲ νῦν ἑαυτοὺς ἐρωτῶμεν.» ὁ Σωκράτης γελᾷ. ὁ Κριτόβουλος λέγει· «ἀπ᾽ ἀρχῆς ἄρχομαι· φίλος ἀγαθὸς εἶναι βούλομαι.»',
   translation:'Xenophon looks at Socrates and says, “You question us, and now we question ourselves.” Socrates laughs. Critobulus says, “I begin at the beginning: I want to be a good friend.”',
   gloss:[['ἡμᾶς','us; supplied pronoun'],['ἑαυτοὺς','ourselves; supplied pronoun'],['ἐρωτῶμεν','we ask; from ἐρωτάω'],['ἀπ᾽ ἀρχῆς','from the beginning; ἀπό is elided'],['ἄρχομαι','I begin; middle form supplied'],['εἶναι βούλομαι','I want to be; supplied phrase']]}
];

const sections=[
  {id:'alpha-contract',title:'1. Alpha-Contract Verbs in the Present',practiceTopic:'alpha-contract',body:[
    'The dictionary form τιμάω means “I honor.” In the present active indicative, its stem ends in α. When that α meets the vowel of a personal ending, the two vowels contract: τιμάω → τιμῶ; τιμάεις → τιμᾷς; τιμάει → τιμᾷ.',
    'The same pattern gives τιμῶμεν, τιμᾶτε, and τιμῶσι(ν). The circumflex in these forms marks a long contracted vowel. Learn the written form and the person together rather than trying to pronounce two uncontracted vowels.',
    'The reading also uses ἐρωτάω (ask), ἀγαπάω (care for), and γελάω (laugh). Their present forms follow the same alpha-contract pattern.'
  ],table:{title:'Present active indicative of τιμάω',headers:['Person','Form','Meaning'],greekColumns:[1],rows:[['1st singular','τιμῶ','I honor'],['2nd singular','τιμᾷς','you honor'],['3rd singular','τιμᾷ','he or she honors'],['1st plural','τιμῶμεν','we honor'],['2nd plural','τιμᾶτε','you all honor'],['3rd plural','τιμῶσι(ν)','they honor']]},checks:[{prompt:'What person is τιμᾶτε?',answer:'Second-person plural: you all honor.'}],examples:[{greek:'ἡμεῖς τοὺς φίλους τιμῶμεν.',english:'We honor our friends.'}]},
  {id:'contract-in-dialogue',title:'2. Hear the Person in a Short Exchange',practiceTopic:'contract-dialogue',body:[
    'The ending still tells you who acts, just as with βλέπω. Compare ἐγὼ ἐρωτῶ, σὺ ἐρωτᾷς, and ὁ Σωκράτης ἐρωτᾷ. In the reading, ἐρωτᾶτε addresses several companions.',
    'Short exchanges naturally switch persons: “I care for my friends. Do you care for yours?” The Greek uses ἀγαπῶ and ἀγαπᾷς. Pronouns can be omitted unless the speaker wants emphasis or contrast.',
    'Keep the target to present active forms of alpha-contract verbs. Other verbs in the reading, such as ὠφελεῖ and σιγῶσιν, are glossed for comprehension rather than assigned as new production patterns.'
  ],table:{title:'Contracted forms in the reading',headers:['Dictionary form','Reading form','Person'],greekColumns:[0,1],rows:[['ἐρωτάω','ἐρωτᾷ','he asks'],['ἐρωτάω','ἐρωτᾶτε','you all ask'],['ἀγαπάω','ἀγαπῶ','I care for'],['ἀγαπάω','ἀγαπᾷς','you care for'],['γελάω','γελᾷ','he laughs']]},checks:[{prompt:'Who is the subject of ἀγαπᾷς?',answer:'One person addressed as “you.”'}],examples:[{greek:'ἐγὼ ἐρωτῶ· σὺ ἐρωτᾷς;',english:'I ask; do you ask?'}]},
  {id:'contract-accent',title:'3. Verb Accent and the Contracted Vowel',practiceTopic:'contract-accent',body:[
    'In most finite Greek verbs, the accent retreats as far toward the beginning as the ending permits. The familiar λύομεν has its accent on the first syllable; λύουσι has it on the next-to-last syllable.',
    'Contracted verbs have an added rule: when an accented vowel contracts with the next vowel, the resulting long vowel often takes a circumflex. Thus τιμάω appears as τιμῶ and τιμᾷς in the actual written forms.',
    'For this lesson, recognize the contrast between an uncontracted dictionary form such as τιμάω and a contracted form such as τιμῶ. Do not move the accent mechanically after contraction.'
  ],table:{title:'From citation form to written verb',headers:['Citation form','Written present form','Meaning'],greekColumns:[0,1],rows:[['τιμάω','τιμῶ','I honor'],['τιμάω','τιμᾷς','you honor'],['ἐρωτάω','ἐρωτᾷ','he or she asks'],['ἀγαπάω','ἀγαπῶμεν','we care for']]},checks:[{prompt:'Why does τιμῶ carry a circumflex?',answer:'The accented alpha and following vowel have contracted into a long vowel.'}],examples:[{greek:'ὁ φίλος τὸν φίλον τιμᾷ.',english:'A friend honors a friend.'}]},
  {id:'elision',title:'4. Elision Keeps Speech Moving',practiceTopic:'elision',body:[
    'A short final vowel can disappear before a following word that begins with a vowel. An apostrophe marks the missing vowel: ἀλλά becomes ἀλλ᾽ before ὁ or ἐγώ; ἀπό becomes ἀπ᾽ before ἀρχῆς.',
    'The meaning and grammar do not change. In the reading, ἀλλ᾽ ὁ φίλος still means “but the friend.” Read the elided word and the next word together, then expand it to its full form when identifying the vocabulary entry.',
    'Elision is not the same as verb contraction. Elision works across a word boundary and uses an apostrophe; contraction combines vowels within a word and changes the written verb form.'
  ],table:{title:'Full and elided forms',headers:['Full phrase','Elided phrase','Meaning'],greekColumns:[0,1],rows:[['ἀλλὰ ὁ φίλος','ἀλλ᾽ ὁ φίλος','but the friend'],['ἀλλὰ ἐγώ','ἀλλ᾽ ἐγώ','but I'],['ἀπὸ ἀρχῆς','ἀπ᾽ ἀρχῆς','from the beginning']]},checks:[{prompt:'What is the full form of ἀλλ᾽?',answer:'ἀλλά.'}],examples:[{greek:'ἀλλ᾽ ὁ φίλος καὶ ἀγαθὸς ἔστω.',english:'But let the friend also be good.'}]},
  {id:'article-clause',title:'5. The Article at the Start of a Clause',practiceTopic:'article-clause',body:[
    'At the start of a sentence or new clause, the article helps you identify the person being discussed: ὁ Σωκράτης ἐρωτᾷ, “Socrates asks.” The article is part of the noun phrase, not a separate word for “he.”',
    'After someone else speaks, ὁ δὲ Πλάτων can mean “Plato, in turn.” The small word δέ marks a new or contrasting step; it does not change the case of the article.',
    'In ὁ φίλος τὸν φίλον τιμᾷ, the first article is nominative, marking the subject, and the second is accusative, marking the person honored. That case contrast remains clear even in a short exchange.'
  ],table:{title:'Read the article with its noun',headers:['Greek','Article job','Meaning'],greekColumns:[0],rows:[['ὁ Σωκράτης ἐρωτᾷ','nominative subject','Socrates asks'],['ὁ φίλος τιμᾷ','nominative subject','the friend honors'],['τὸν φίλον τιμᾷ','accusative object','honors the friend']]},checks:[{prompt:'Which friend acts in ὁ φίλος τὸν φίλον τιμᾷ?',answer:'ὁ φίλος is the subject; τὸν φίλον receives the action.'}],examples:[{greek:'ὁ Σωκράτης ἐρωτᾷ· ὁ δὲ Κριτόβουλος λέγει.',english:'Socrates asks; Critobulus replies.'}]}
];

const lesson={
  id:'lesson-9',number:9,title:'What Makes a Good Friend?',greekTitle:'Τίς ἐστι φίλος ἀγαθός;',
  scope:'Present active alpha-contract verbs; finite-verb accent; article at clause opening; elision',
  theme:'Friendship, character, and the Athenian symposium',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-9-symposium-banner.png',alt:'Five companions recline on couches in a reconstructed Athenian symposium room; an older Socrates speaks at the center',caption:'Socrates and four companions discuss friendship at an illustrated Athenian symposium.'},
  pages:[{page:1,slug:'lesson-9-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-9-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-9-page-3',title:'The Symposium and Athenian Conversation',template:'culture'}],
  vocabulary:[
    vocab('People and ideas',[['ὁ φίλος','friend','φίλος, φίλου, ὁ'],['ἡ φιλία','friendship','φιλία, φιλίας, ἡ'],['ἡ πίστις','loyalty, trust','πίστις, πίστεως, ἡ','reading vocabulary'],['ἡ ἀρετή','good character, excellence','ἀρετή, ἀρετῆς, ἡ'],['ἡ χρεία','need, use','χρεία, χρείας, ἡ'],['τὸ ἔργον','deed, work','ἔργον, ἔργου, τό'],['ἡ οἰκία','house','οἰκία, οἰκίας, ἡ'],['τὸ δεῖπνον','dinner','δεῖπνον, δείπνου, τό'],['ἡ κλίνη','couch','κλίνη, κλίνης, ἡ']]),
    vocab('Actions',[['τιμάω','honor','τιμάω'],['ἐρωτάω','ask a question','ἐρωτάω'],['ἀγαπάω','care for, cherish','ἀγαπάω'],['γελάω','laugh','γελάω'],['ζητέω','seek','ζητέω'],['λέγω','say','λέγω'],['ἀκούω','listen, hear','ἀκούω'],['ὠφελέω','help, benefit','ὠφελέω','reading vocabulary']]),
    vocab('Connecting and describing',[['ἀγαθός, ἀγαθή, ἀγαθόν','good','ἀγαθός, ἀγαθή, ἀγαθόν'],['ἀλλά / ἀλλ᾽','but','ἀλλά'],['πρῶτον','first','πρῶτον'],['μόνον','only, alone','μόνον'],['χρήσιμος, χρησίμη, χρήσιμον','useful','χρήσιμος, χρησίμη, χρήσιμον','reading vocabulary']])
  ],
  reading:{title:'Τίς ἐστι φίλος ἀγαθός;',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'After the household lesson, the course turns from helping one another to friendship itself. In a symposium room after dinner, Socrates asks his companions what makes a good friend. Critobulus prizes loyalty; Antisthenes points to useful help; Plato insists on character; Xenophon asks where those answers leave a person who helps without respect.',
    'Source note: Xenophon, Memorabilia 2.6 preserves a conversation in which Socrates asks Critobulus how to find a good friend and urges him to become good himself. Xenophon, Symposium 1.3–4 names Antisthenes and Critobulus among Socrates’ companions at a dinner invitation. No ancient source records this joint discussion with Plato and Xenophon. The gathering, the individual speeches, and the order of events below are a source-informed fictional reconstruction.',
    'The Greek uses present-tense dialogue. Blue glosses support names, a few philosophical terms, and forms outside the production targets. This lesson’s new forms are alpha-contract verbs such as τιμῶ and ἐρωτᾷ, plus elision in ἀλλ᾽ and ἀπ᾽.'
  ],paragraphs:paragraphs.map(p=>({greek:p.greek,gloss:p.gloss.map(([greek,english])=>({greek,english}))})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:'Xenophon, Memorabilia 2.6 and Symposium 1.3–4. The five-person discussion is a course reconstruction. https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Mem.+2.6&lang=original',notesMarkdown:'The scene and individual words are composed for this lesson. Memorabilia 2.6 supplies the central Socrates–Critobulus question; Symposium 1.3–4 supplies the attested Socratic circle.'},
  wordStudy:{label:'Word Study — Friend, Friendship, and Character',blocks:[{title:'A small vocabulary for a large question',practiceTopic:'word-study',body:[
    'ὁ φίλος is a friend; ἡ φιλία is friendship. The question τίς ἐστι φίλος ἀγαθός; asks what sort of person deserves that name. The words are short, but Socrates presses the group to examine what they mean.',
    'τιμάω means “honor” and ἀγαπάω means “care for.” These are the alpha-contract verbs you will form in Language Study. The noun ἀρετή means excellence or good character in this context; keep it as one supported reading word rather than a new philosophical system.',
    'In the reading, ἡ χρεία raises the question of practical need, and τὸ χρήσιμον means what is useful. The group weighs help against loyalty and character.'
  ],display:[{greek:'ὁ φίλος',english:'the friend'},{greek:'ἡ φιλία',english:'friendship'},{greek:'τιμῶ',english:'I honor; from τιμάω'},{greek:'ἀλλ᾽',english:'but; shortened from ἀλλά before a vowel'}]}]},
  grammar:{intro:'Lesson 8 used a few contracted verbs as supplied reading forms. Lesson 9 now makes present active verbs in -άω a production target, then shows how accent and elision help you read compact dialogue.',objectives:[
    'Form all six present active persons of an alpha-contract verb such as τιμάω.',
    'Recognize contracted ἐρωτάω, ἀγαπάω, and γελάω in brief exchanges.',
    'Explain why a contracted vowel can carry a circumflex.',
    'Expand elided ἀλλ᾽ and ἀπ᾽ to their full vocabulary forms.',
    'Use the article and case ending to read short clauses with φίλος.'
  ],sections,summary:{title:'Grammar Summary',items:['τιμάω → τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι(ν).','The same present active pattern gives ἐρωτῶ, ἀγαπῶ, and γελῶ.','Contraction can put a circumflex on the long vowel: τιμῶ, τιμᾷς.','Elision crosses a word boundary: ἀλλ᾽ ὁ φίλος = ἀλλὰ ὁ φίλος.','The article shows case: ὁ φίλος is the subject; τὸν φίλον is the object.']}},
  culture:{title:'The Symposium: Conversation after Dinner',banner:{
    image:'assets/lesson-9-tomb-of-diver-symposium.jpg',
    alt:'Ancient painted symposium scene on a side wall of the Tomb of the Diver: men recline on couches, converse, and raise cups',
    caption:'Banquet scene on a side wall of the Tomb of the Diver, about 475 BCE, from Greek Paestum in southern Italy. The diver is painted on the tomb’s lid, not in this scene.',
    credit:'Photograph by Carole Raddato, CC BY-SA 2.0. Unmodified image.',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Fresco_painting_from_lateral_walls_of_the_Tomb_of_the_Diver_depicting_a_symposium_scene,_5th_century_BC,_Paestum_Archaeological_Museum.jpg',
    licenseUrl:'https://creativecommons.org/licenses/by-sa/2.0/'
  },body:[
    'A symposium was a gathering for drinking together after a meal. In wealthier Greek households, invited men reclined on cushioned couches in a room arranged for conversation. Wine was commonly mixed with water in a large krater and served in cups. Guests could talk, recite poetry, play games, or listen to music. The format helped people build relationships and display wit, learning, and social standing.',
    'The image above is a real ancient painting from the Tomb of the Diver at Paestum, a Greek city in southern Italy. Its side walls show banquet scenes; the famous solitary diver appears on the underside of the lid. The tomb dates to about 475 BCE, earlier than the imagined setting of this lesson. It is valuable visual evidence for reclining diners, couches, and cups, but it is a funerary painting from outside Athens rather than a picture of a specific Athenian home.',
    'Xenophon’s Symposium describes a dinner gathering and names Socrates, Critobulus, and Antisthenes among those invited. The work shows that conversation could share a table with entertainment. Socrates’ question about friendship in Memorabilia 2.6 belongs to a different text and is the main source for the reading’s question.',
    'Participation was unequal. The conventional Athenian symposium was chiefly an activity of free men with the resources and invitations to attend. Enslaved people served guests, and some women appeared as paid entertainers or companions; respectable citizen women were generally outside this gathering. Those limits matter when using symposium conversation as a window onto Athenian life.'
  ],questions:[
    {prompt:'What happened at a symposium?',answer:'Invited guests drank together after dinner and could converse, hear music or poetry, and play games.'},
    {prompt:'Where was the Tomb of the Diver found?',answer:'At Paestum, a Greek city in southern Italy, not in Athens.'},
    {prompt:'Which part of that tomb bears the diver?',answer:'The underside of its lid; banquet scenes decorate the side walls.'},
    {prompt:'Who is named among Socrates’ companions in Xenophon’s Symposium 1.3–4?',answer:'Critobulus and Antisthenes are named with Socrates and others.'}
  ],review:{title:'Before the Final Quiz',items:['Explain the six present active forms of τιμάω.','Tell contraction within a verb from elision between words.','Identify the subject and object in ὁ φίλος τὸν φίλον τιμᾷ.','Describe what the Paestum fresco can and cannot show about Athenian symposia.']},sources:[
    {title:'Xenophon, Memorabilia 2.6 (friendship and Critobulus)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Mem.+2.6&lang=original'},
    {title:'Xenophon, Symposium 1.3–4 (Socrates’ companions)',url:'https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AgreekLit%3Atlg0032.tlg004.perseus-eng2%3A1.3-1.4/'},
    {title:'The Metropolitan Museum of Art, The Symposium in Ancient Greece',url:'https://www.metmuseum.org/essays/the-symposium-in-ancient-greece'},
    {title:'Paestum Archaeological Park, The Tomb of the Diver',url:'https://museopaestum.cultura.gov.it/la-tomba-del-tuffatore/?lang=en'},
    {title:'Wikimedia Commons, Tomb of the Diver symposium photograph and license',url:'https://commons.wikimedia.org/wiki/File:Fresco_painting_from_lateral_walls_of_the_Tomb_of_the_Diver_depicting_a_symposium_scene,_5th_century_BC,_Paestum_Archaeological_Museum.jpg'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-10',title:'The Letter from Proxenus',fallbackUrl:'lesson.html?lesson=10&page=1'},contentRevision:'lesson-9-friendship-complete-v1',previousLesson:{id:'lesson-8',title:'A Household Finds a Way',fallbackUrl:'lesson.html?lesson=8&page=1'}
};

function question(id,category,topic,prompt,correct,wrong,why){
  if(wrong.length!==3||new Set([correct,...wrong]).size!==4) throw new Error(`Repeated answer choice: ${id}`);
  const options=[correct,...wrong],shift=Number(id.match(/\d+(?!.*\d)/)?.[0]||0)%4;
  return {id,type:'multiple-choice',...(topic?{topic}:{}),category,prompt,choices:Array.from({length:4},(_,i)=>{
    const n=(i-shift+4)%4;return {text:options[n],correct:n===0,feedback:`${n===0?'Correct':'Review'}: ${why}`};
  })};
}
const bank=[];
const add=(topic,prompt,correct,a,b,c,why)=>bank.push({topic,prompt,correct,wrong:[a,b,c],why});
add('word-study','What does ὁ φίλος mean?','the friend','the dinner','the couch','the deed','φίλος names a friend.');
add('word-study','What does ἡ φιλία mean?','friendship','loyalty','need','excellence','φιλία names friendship.');
add('word-study','Which word means “good character” in this reading?','ἀρετή','χρεία','κλίνη','δεῖπνον','ἀρετή is excellence or good character.');
add('word-study','What does ἡ χρεία mean?','need or use','a couch','loyalty','a cup','χρεία names need or use.');
add('word-study','What does τιμάω mean?','I honor','I laugh','I ask','I seek','τιμάω means I honor.');
add('word-study','What does ἐρωτάω mean?','I ask','I honor','I laugh','I listen','ἐρωτάω means I ask.');
add('word-study','What does ἀγαπάω mean here?','I care for','I recline','I write','I depart','ἀγαπάω means I care for.');
add('word-study','Which is the full form of ἀλλ᾽?','ἀλλά','ἀπό','ἄνευ','αὐτός','ἀλλ᾽ is elided ἀλλά.');
add('word-study','What does τὸ δεῖπνον mean?','the dinner','the house','the deed','the couch','δεῖπνον is dinner.');
add('word-study','What does ἡ κλίνη mean?','the couch','friendship','character','question','κλίνη is a couch.');
add('word-study','What is τὸ χρήσιμον in the conversation?','what is useful','what is beautiful','what is costly','what is first','The neuter adjective names usefulness.');
add('word-study','What does πρῶτον mean?','first','quickly','never','together','πρῶτον means first.');

const honor=[['first-person singular','τιμῶ','τιμᾷς','τιμᾷ','τιμᾶτε'],['second-person singular','τιμᾷς','τιμῶ','τιμᾷ','τιμῶμεν'],['third-person singular','τιμᾷ','τιμᾷς','τιμᾶτε','τιμῶσιν'],['first-person plural','τιμῶμεν','τιμῶ','τιμᾶτε','τιμῶσιν'],['second-person plural','τιμᾶτε','τιμᾷς','τιμῶμεν','τιμῶσιν'],['third-person plural','τιμῶσιν','τιμᾷ','τιμᾶτε','τιμῶμεν']];
honor.forEach(([person,correct,a,b,c])=>add('alpha-contract',`Which form of τιμάω is ${person}?`,correct,a,b,c,`${correct} is ${person}.`));
add('alpha-contract','What does τιμῶ mean?','I honor','you honor','he honors','we honor','The -ῶ ending is first-person singular.');
add('alpha-contract','What does τιμᾷς mean?','you honor','I honor','he honors','they honor','The -ᾷς ending is second-person singular.');
add('alpha-contract','What does τιμῶμεν mean?','we honor','they honor','you all honor','I honor','The -ῶμεν ending is first-person plural.');
add('alpha-contract','What does τιμᾶτε mean?','you all honor','we honor','he honors','they honor','The -ᾶτε ending is second-person plural.');
add('alpha-contract','Which is the dictionary form of τιμᾷ?','τιμάω','τιμέω','τιμόω','τιμῶ','The alpha-contract dictionary form is τιμάω.');
add('alpha-contract','Which pair has the same person and number?','τιμᾷς / βλέπεις','τιμῶ / βλέπει','τιμᾶτε / βλέπομεν','τιμῶσιν / βλέπω','Both τιμᾷς and βλέπεις mean “you” singular.');

const dialogue=[
  ['ἐγὼ ἐρωτῶ','I ask','you ask','he asks','we ask'],
  ['σὺ ἐρωτᾷς','you ask','I ask','they ask','we ask'],
  ['ὁ Σωκράτης ἐρωτᾷ','Socrates asks','Socrates laughs','Socrates honors','Socrates listens'],
  ['ἡμεῖς ἐρωτῶμεν','we ask','you all ask','they ask','I ask'],
  ['ὑμεῖς ἐρωτᾶτε','you all ask','we ask','they ask','you ask (one person)'],
  ['οἱ φίλοι ἐρωτῶσιν','the friends ask','the friends honor','the friend asks','we ask'],
  ['ἐγὼ ἀγαπῶ','I care for','you care for','he cares for','we care for'],
  ['σὺ ἀγαπᾷς','you care for','I care for','she cares for','they care for'],
  ['ὁ Ἀντισθένης γελᾷ','Antisthenes laughs','Antisthenes asks','Antisthenes honors','Antisthenes seeks'],
  ['ἐγὼ γελῶ','I laugh','you laugh','he laughs','they laugh'],
  ['ἡμεῖς ἀγαπῶμεν','we care for','I care for','you all care for','they care for'],
  ['ὑμεῖς τιμᾶτε','you all honor','we honor','you honor (one person)','they honor']
];
dialogue.forEach(([greek,correct,a,b,c])=>add('contract-dialogue',`What does ${greek} mean?`,correct,a,b,c,`${greek} means ${correct}.`));
add('contract-accent','Which is the contracted first-person singular of τιμάω?','τιμῶ','τιμάω','τιμεῖ','τιμού','τιμῶ has the long contracted vowel.');
add('contract-accent','Which is the contracted second-person singular of τιμάω?','τιμᾷς','τιμάεις','τιμεῖς','τιμῶσιν','τιμᾷς is the written contracted form.');
add('contract-accent','Which is the contracted third-person singular of ἐρωτάω?','ἐρωτᾷ','ἐρωτάει','ἐρωτεῖ','ἐρωτῶ','ἐρωτᾷ is the third-person singular.');
add('contract-accent','Which is the contracted first-person plural of ἀγαπάω?','ἀγαπῶμεν','ἀγαπάομεν','ἀγαπᾶτε','ἀγαπῶσιν','ἀγαπῶμεν means we care for.');
add('contract-accent','What changes when τιμάω becomes τιμῶ?','adjacent vowels within the verb combine','a final vowel is dropped before another word','the subject becomes plural','the noun changes case','Contract verbs combine adjacent vowels inside a word.');
add('contract-accent','Why does τιμῶ have a circumflex?','its accented vowels contracted into one long vowel','the verb is past tense','the subject is plural','it follows a question mark','Contraction creates an accented long vowel.');
add('contract-accent','Which form has a circumflex on the contracted vowel?','τιμᾷς','βλέπεις','λέγεις','φέρεις','τιμᾷς has a circumflex on ᾷ.');
add('contract-accent','Which is a citation form rather than a written contracted present form?','γελάω','γελῶ','γελᾷ','γελῶμεν','γελάω is the dictionary citation form.');
add('contract-accent','Which written form means “I ask”?','ἐρωτῶ','ἐρωτάω','ἐρωτᾷ','ἐρωτᾶτε','ἐρωτῶ is first-person singular.');
add('contract-accent','Which written form means “they honor”?','τιμῶσιν','τιμᾶτε','τιμῶμεν','τιμᾷ','τιμῶσιν is third-person plural.');
add('contract-accent','Where does contraction operate in τιμάω → τιμῶ?','within one verb','between two different words','only in the article','only in a noun ending','The stem vowel and ending vowel combine inside the verb.');
add('contract-accent','Which pair correctly matches dictionary and reading form?','ἀγαπάω → ἀγαπῶ','ἀγαπάω → ἀγαπεῖ','ἐρωτάω → ἐρωτεῖ','τιμάω → τιμοῦ','ἀγαπῶ is a present form of ἀγαπάω.');

add('elision','What is the full form of ἀλλ᾽?','ἀλλά','ἀπό','ἄνευ','ἄρα','ἀλλ᾽ loses the final alpha of ἀλλά.');
add('elision','What is the full form of ἀπ᾽?','ἀπό','ἀλλά','ἐπί','παρά','ἀπ᾽ loses the final omicron of ἀπό.');
add('elision','Which phrase correctly elides ἀλλά before ὁ φίλος?','ἀλλ᾽ ὁ φίλος','ἀλλά᾽ ὁ φίλος','ἀλ᾽ ὁ φίλος','ἀλλ᾽ τὸν φίλον','ἀλλ᾽ ὁ φίλος drops the final alpha.');
add('elision','Which phrase correctly elides ἀπό before ἀρχῆς?','ἀπ᾽ ἀρχῆς','ἀπο᾽ ἀρχῆς','ἀπὸ᾽ ἀρχῆς','ἀπ᾽ τῆς φίλης','ἀπ᾽ ἀρχῆς means from the beginning.');
add('elision','What does ἀλλ᾽ ἐγώ mean?','but I','from me','and I','I ask','ἀλλ᾽ is shortened ἀλλά.');
add('elision','What does ἀπ᾽ ἀρχῆς mean?','from the beginning','after dinner','but first','before a friend','ἀπ᾽ is shortened ἀπό.');
add('elision','What does the apostrophe mark in ἀλλ᾽?','an omitted final vowel','a plural verb','a question','a dative case','The final alpha is omitted before a vowel.');
add('elision','When is ἀλλ᾽ used here?','before a following vowel','only at the end of a sentence','only before a consonant','only with plural subjects','The following word begins with a vowel.');
add('elision','Which is an example of elision across words?','ἀλλ᾽ ὁ φίλος','τιμάω → τιμῶ','ὁ φίλος → τοῦ φίλου','καλός → καλή','The final vowel of ἀλλά disappears before ὁ.');
add('elision','Which is an example of contraction within a verb?','ἐρωτάω → ἐρωτῶ','ἀλλά → ἀλλ᾽','ἀπό → ἀπ᾽','ὁ → τόν','ἐρωτῶ combines vowels inside one verb.');
add('elision','Does elision change the meaning of ἀλλά?','No; it still means but.','Yes; it means from.','Yes; it means first.','Yes; it becomes a verb.','The meaning stays the same.');
add('elision','Why is ἀλλ᾽ ὁ φίλος written with an apostrophe?','The final alpha of ἀλλά falls before ὁ.','The noun φίλος is plural.','The verb is contracted.','The article is omitted.','Elision marks a missing final vowel.');

add('article-clause','Which phrase is the subject in ὁ φίλος τὸν φίλον τιμᾷ?','ὁ φίλος','τὸν φίλον','τιμᾷ','both φίλος phrases','ὁ marks nominative subject.');
add('article-clause','Which phrase is the object in ὁ φίλος τὸν φίλον τιμᾷ?','τὸν φίλον','ὁ φίλος','τιμᾷ','both φίλος phrases','τὸν marks accusative object.');
add('article-clause','What does ὁ Σωκράτης ἐρωτᾷ mean?','Socrates asks.','Socrates answers.','They ask Socrates.','Socrates laughs.','ὁ Σωκράτης is the subject.');
add('article-clause','What does ὁ δὲ Πλάτων λέγει mean?','Plato, in turn, speaks.','Plato is the object.','Plato and Socrates speak.','The friends laugh.','δέ marks a new step in the exchange.');
add('article-clause','Which article is nominative masculine singular?','ὁ','τόν','τοῦ','τῷ','ὁ marks a masculine singular subject.');
add('article-clause','Which article is accusative masculine singular?','τόν','ὁ','τοῦ','τῷ','τόν marks a masculine singular object.');
add('article-clause','What case is τὸν φίλον?','accusative singular','nominative singular','genitive singular','dative singular','τόν and -ον mark accusative singular.');
add('article-clause','What case is ὁ φίλος?','nominative singular','accusative singular','genitive singular','dative singular','ὁ and -ος mark nominative singular.');
add('article-clause','In ὁ φίλος τιμᾷ, what does ὁ belong to?','the noun phrase ὁ φίλος','the verb τιμᾷ','the preceding sentence','the word ἀλλά','The article belongs with the noun.');
add('article-clause','Does δέ change the case of ὁ in ὁ δὲ Πλάτων?','No; ὁ is still nominative.','Yes; it becomes accusative.','Yes; it becomes genitive.','Yes; it becomes dative.','δέ signals a new step without changing case.');
add('article-clause','Which phrase could begin a clause with “the friend” as subject?','ὁ φίλος','τὸν φίλον','τοῦ φίλου','τῷ φίλῳ','ὁ φίλος is nominative.');
add('article-clause','Which Greek means “the friend honors the friend”?','ὁ φίλος τὸν φίλον τιμᾷ','τὸν φίλον ὁ φίλος τιμῶ','ὁ φίλος τὸν φίλον τιμᾶτε','ὁ φίλος τὸν φίλον τιμῶμεν','The nominative subject takes third-person singular τιμᾷ.');

const topics=['word-study','alpha-contract','contract-dialogue','contract-accent','elision','article-clause'];
if(topics.some(t=>bank.filter(q=>q.topic===t).length!==12)) throw new Error('Every Lesson 9 topic needs twelve questions');
const topicQuestions=bank.map((q,i)=>question(`lesson-9-practice-${String(i+1).padStart(3,'0')}`,'Grammar',q.topic,q.prompt,q.correct,q.wrong,q.why));
const grammarExercises=topics.flatMap((topic,ti)=>[1,4,7,10].map((index,j)=>{
  const q=bank[ti*12+index];return question(`lesson-9-grammar-exercise-${String(ti*4+j+1).padStart(2,'0')}`,'Grammar',topic,q.prompt,q.correct,q.wrong,q.why);
}));
const requiredVocab=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
const vocabPractice=requiredVocab.flatMap((v,i)=>{
  const others=requiredVocab.filter(x=>x.english!==v.english);
  const pick=steps=>steps.map(n=>others[(i+n)%others.length]);
  return [question(`lesson-9-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,pick([1,5,9]).map(x=>x.english),`${v.greek} means ${v.english}.`),
    question(`lesson-9-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which Greek entry means “${v.english}”?`,v.greek,pick([2,6,10]).map(x=>x.greek),`${v.greek} means ${v.english}.`)];
});
const quiz=[];
const final=(category,prompt,correct,a,b,c,why)=>quiz.push(question(`lesson-9-final-${String(quiz.length+1).padStart(2,'0')}`,category,null,prompt,correct,[a,b,c],why));
final('Reading','What question does Socrates ask Critobulus?','What makes a good friend?','Where is Eleusis?','Who bought the wool?','When will a ship sail?','Socrates asks about a good friend.');
final('Reading','Which quality does Critobulus first stress?','loyalty in trouble','wealth alone','speed at running','skill at weaving','Critobulus values someone who does not abandon a friend.');
final('Reading','What does Antisthenes first emphasize?','help that meets a need','the size of the house','festival offerings','military rank','Antisthenes points to useful help.');
final('Reading','What does Plato insist must accompany friendship?','good character','a costly cup','a large couch','a public office','Plato says character matters.');
final('Reading','What problem does Xenophon put to Antisthenes?','A person helps but does not honor a friend.','A friend cannot find a road.','A guest forgets dinner.','A man loses his land.','Xenophon asks whether help without respect suffices.');
final('Reading','What does Socrates ask the group to examine at the end?','whether they themselves are good friends','whether the krater is full','whether Plato owns a couch','whether Critobulus can weave','Socrates turns the question toward the seekers themselves.');
for(const v of [requiredVocab[0],requiredVocab[1],requiredVocab[3],requiredVocab[9],requiredVocab[10],requiredVocab[17]]){
  const i=requiredVocab.indexOf(v),others=requiredVocab.filter(x=>x.english!==v.english);
  final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);
}
for(const [ti,indices] of [[1,[0,4,8]],[2,[1,6,9]],[3,[1,5]],[4,[0,8]],[5,[0,1]]]){
  for(const j of indices){const q=bank[ti*12+j];final('Grammar',q.prompt,q.correct,...q.wrong,q.why);}
}
final('Greek World','What was a symposium?','a gathering to drink and converse after dinner','a military training ground','a weaving workshop','a public jury','A symposium combined drinking after dinner with conversation and other entertainment.');
final('Greek World','Where was the Tomb of the Diver found?','Paestum in southern Italy','Athens in Attica','Eleusis near Athens','Delphi in central Greece','The tomb is from the Greek city of Paestum.');
final('Greek World','Where is the diver painted in that tomb?','on the underside of its lid','on the symposium couch','on a drinking cup','on the room door','The diver is on the lid; the side walls show banquet scenes.');
final('Greek World','What do the side-wall frescoes depict?','banquet or symposium scenes','Athenian assembly voting','a cavalry charge','women at a loom','The walls show symposium scenes.');
final('Greek World','What vessel mixed wine with water?','a krater','a loom weight','a spindle','a writing tablet','A krater held the mixed wine.');
final('Greek World','Which ancient text asks Critobulus about friendship?','Xenophon’s Memorabilia 2.6','Homer’s Iliad 1','Thucydides 2.47','Xenophon’s Anabasis 3.1','Memorabilia 2.6 supplies the central question.');
if(quiz.length!==30) throw new Error(`Expected thirty final questions, got ${quiz.length}`);
lesson.activities={
  'vocab-flashcards':{title:'Lesson 9 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 9 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 9 words in short rounds. Reading-only words remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 9 Grammar Flashcards',cards:[{prompt:'τιμάω → I honor',answer:'τιμῶ'},{prompt:'τιμάω → you honor',answer:'τιμᾷς'},{prompt:'τιμάω → we honor',answer:'τιμῶμεν'},{prompt:'ἐρωτάω → he asks',answer:'ἐρωτᾷ'},{prompt:'ἀγαπάω → I care for',answer:'ἀγαπῶ'},{prompt:'ἀλλ᾽ → full form',answer:'ἀλλά'},{prompt:'ἀπ᾽ → full form',answer:'ἀπό'},{prompt:'ὁ φίλος / τὸν φίλον',answer:'subject / object'}]},
  'topic-practice':{title:'Lesson 9 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice gives immediate feedback and does not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 9 Grammar Exercises',description:'Alpha-contract verbs, accent, elision, and clause reading',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-9-grammar-exercises-v1',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 9 Final Quiz — What Makes a Good Friend?',description:'Reading, vocabulary, grammar, and the Greek symposium',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-9-final-quiz-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 9 and continue to Lesson 10.',questions:quiz}
};

fs.writeFileSync(at('content/lessons/lesson-9.json'),JSON.stringify(lesson,null,2)+'\n');
let fallback=fs.readFileSync(at('lesson-data.js'),'utf8');
const manifest='{ number: 9, title: "What Makes a Good Friend?", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-9-symposium-banner.png", bannerAlt: "Socrates and four companions recline in an Athenian symposium room", grammarFocus: "Alpha-contract verbs, accent, and elision", greekPhrase: "Τίς ἐστι φίλος ἀγαθός;", sourceAnchor: "Xenophon, Memorabilia 2.6; Symposium 1.3–4", cultureLead: "Friendship and conversation after dinner in the Greek symposium." }';
const manifestPattern=/\{ number: 9, title: "[^"]+",[^\n]+\},/;
if(!manifestPattern.test(fallback)) throw new Error('Lesson 9 manifest not found');
fallback=fallback.replace(manifestPattern,manifest+',');
const generated=`  // BEGIN GENERATED LESSON 9\n  LESSONS["lesson-9"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 9`;
if(fallback.includes('  // BEGIN GENERATED LESSON 9')) fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 9[\s\S]*?  \/\/ END GENERATED LESSON 9/g,generated);
else fallback=fallback.replace('  // END GENERATED LESSON 8',`  // END GENERATED LESSON 8\n${generated}`);
fs.writeFileSync(at('lesson-data.js'),fallback);

// Reuse the reviewed initial-publish SQL structure while inserting only Lesson 9 data.
const template=fs.readFileSync(at('db/migrations/0027_publish_lesson_8.sql'),'utf8');
let sql=template.replace(/patch jsonb := \$json\$[\s\S]*?\$json\$::jsonb;/,'patch jsonb := __LESSON_JSON__;')
  .replaceAll('lesson-8','lesson-9').replaceAll('lesson8','lesson9')
  .replaceAll('lesson_8_household','lesson_9_friendship')
  .replaceAll('A Household Finds a Way','What Makes a Good Friend?')
  .replace("WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-7')","WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-8')")
  .replace('__LESSON_JSON__',`$json$${JSON.stringify(lesson,null,2)}$json$::jsonb`)
  .replace('-- Publish the complete Lesson 8 household reading and learning activities.','-- Publish the complete Lesson 9 friendship reading and learning activities.');
if(!sql.includes("slug='lesson-9'")||!sql.includes("slug='lesson-8'")) throw new Error('Lesson 9 migration transformation failed');
const migrationPath=at('db/migrations/0029_publish_lesson_9.sql');
if(!fs.existsSync(migrationPath)||process.argv.includes('--rewrite-migration')) fs.writeFileSync(migrationPath,sql);

console.log(`Built Lesson 9: ${paragraphs.length} reading paragraphs, ${requiredVocab.length} required words, ${topicQuestions.length} topic questions, ${grammarExercises.length} grammar exercises, and ${quiz.length} final questions.`);
