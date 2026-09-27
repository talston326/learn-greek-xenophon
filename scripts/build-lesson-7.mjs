import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lessonPath = path.join(root, 'content/lessons/lesson-7.json');
const migrationPath = path.join(root, 'db/migrations/0025_publish_lesson_7.sql');
const fallbackPath = path.join(root, 'lesson-data.js');
const scriptPath = path.join(root, 'script.js');
const prior = JSON.parse(fs.readFileSync(path.join(root, 'content/lessons/lesson-6.json'), 'utf8'));

const vocab = (category, items) => ({ category, items: items.map(([greek, english, dictionaryForm, status = 'required vocabulary']) => ({
  greek, english, ...(dictionaryForm ? { dictionaryForm } : {}), status,
  lemma: greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u, '').split(',')[0], audioPlaceholder: true
})) });
const reading = [
  {
    greek: 'ἐν ταῖς Ἀθήναις, παρὰ τὸ Δίπυλον, οἱ ἄνθρωποι τὴν πομπὴν βλέπουσιν. ἡ πομπὴ διὰ τῆς Ἱερᾶς Πύλης πρὸς τὴν Ἐλευσῖνα βαδίζει. ὁ Ξενοφῶν καὶ ὁ Κλεινίας μετὰ τῶν ἄλλων βαδίζουσιν.',
    translation: 'In Athens, near the Dipylon, people watch the procession. The procession walks through the Sacred Gate toward Eleusis. Xenophon and Clinias walk with the others.',
    gloss: [
      ['ἐν ταῖς Ἀθήναις', 'in Athens; the city name is plural'], ['τὸ Δίπυλον', 'the Dipylon, the larger gate beside the Sacred Gate'],
      ['ἡ Ἱερὰ Πύλη', 'the Sacred Gate; the Eleusinian road passed through it'], ['πρὸς τὴν Ἐλευσῖνα', 'toward Eleusis; name form supplied'],
      ['μετὰ τῶν ἄλλων', 'with the others; μετά takes the genitive here']
    ]
  },
  {
    greek: 'ἡ Μυρρίνη καὶ ἡ ἀδελφὴ αὐτῆς ἐν τῇ πομπῇ εἰσίν. ἡ Μυρρίνη ἄρτον καὶ ὕδωρ φέρει· ἡ ἀδελφὴ καλάθιον φέρει. ἡ Μυρρίνη τὴν ἀδελφὴν ἄγει.',
    translation: 'Myrrhine and her sister are in the procession. Myrrhine carries bread and water; her sister carries a small basket. Myrrhine guides her sister.',
    gloss: [['ἡ Μυρρίνη', 'Myrrhine, a fictional Athenian pilgrim'], ['ὕδωρ', 'water; third-declension noun supplied'], ['καλάθιον', 'small basket; supplied reading word'], ['ἄγει', 'leads or guides']]
  },
  {
    greek: 'ὁ Ξενοφῶν λέγει· «ὦ Μυρρίνη, διὰ τί πρὸς τὴν Ἐλευσῖνα βαδίζεις;» ἡ δὲ Μυρρίνη λέγει· «ἡ μήτηρ μου ἐν τῇ χώρᾳ ἐστίν. ἡ γῆ σῖτον φέρει. ἐγὼ τῇ θεᾷ δῶρα φέρω.»',
    translation: 'Xenophon says, “Myrrhine, why do you walk toward Eleusis?” Myrrhine says, “My mother is in the countryside. The earth bears grain. I bring gifts to the goddess.”',
    gloss: [['ὦ Μυρρίνη', 'Myrrhine!; form of direct address'], ['ἡ μήτηρ μου', 'my mother; μήτηρ is a supplied third-declension noun'], ['ἡ γῆ', 'the earth or land'], ['σῖτον', 'grain; direct object'], ['τῇ θεᾷ', 'to the goddess; dative singular of θεά'], ['δῶρα', 'gifts; neuter plural']]
  },
  {
    greek: 'ὁ Κλεινίας λέγει· «ἐγὼ τὴν πύλην βλέπω· σὺ τὴν πομπὴν βλέπεις, ὦ Ξενοφῶν;» ὁ Ξενοφῶν λέγει· «ναί· ἡ πομπὴ βαδίζει. ἡμεῖς μετὰ τῆς πομπῆς βαδίζομεν. ὑμεῖς, ὦ φίλαι, βαδίζετε;»',
    translation: 'Clinias says, “I see the gate; do you see the procession, Xenophon?” Xenophon says, “Yes; the procession is moving. We walk with the procession. Are you walking, friends?”',
    gloss: [['ἐγὼ … βλέπω', 'I see; first-person singular'], ['σὺ … βλέπεις', 'you see; second-person singular'], ['ἡμεῖς … βαδίζομεν', 'we walk; first-person plural'], ['ὑμεῖς … βαδίζετε', 'you all walk; second-person plural statement/question'], ['ὦ φίλαι', 'female friends!; plural form of direct address']]
  },
  {
    greek: 'ἡ Μυρρίνη λέγει· «ναί· αἱ φίλαι βαδίζουσιν. ἡ ἀδελφή μου τὴν καλὴν πομπὴν βλέπει· ἐγὼ δὲ τὴν μακρὰν ὁδὸν βλέπω. ἡμεῖς ὕδωρ φέρομεν.»',
    translation: 'Myrrhine says, “Yes; the women friends are walking. My sister watches the beautiful procession, but I watch the long road. We carry water.”',
    gloss: [['αἱ φίλαι', 'the female friends; feminine nominative plural'], ['τὴν καλὴν πομπήν', 'the beautiful procession; feminine accusative singular agreement'], ['τὴν μακρὰν ὁδόν', 'the long road; ὁδός is a feminine second-declension noun, supplied here'], ['φέρομεν', 'we carry']]
  },
  {
    greek: 'ἐπὶ τῇ Ἱερᾷ Ὁδῷ οἱ ἄνθρωποι πρὸς τὴν Ἐλευσῖνα βαδίζουσιν. ἡ Μυρρίνη τῇ ἀδελφῇ λέγει· «ἡ Δήμητρα τὴν Κόρην ζητεῖ. ἡμεῖς πρὸς τὸ ἱερὸν βαδίζομεν.»',
    translation: 'On the Sacred Way the people walk toward Eleusis. Myrrhine says to her sister, “Demeter looks for Kore. We walk toward the sanctuary.”',
    gloss: [['ἐπὶ τῇ Ἱερᾷ Ὁδῷ', 'on the Sacred Way; fixed place-name, feminine second-declension ὁδός supplied'], ['τῇ ἀδελφῇ', 'to her sister; dative singular'], ['ἡ Δήμητρα', 'Demeter; name forms supplied'], ['τὴν Κόρην', 'Kore or Persephone; accusative singular'], ['τὸ ἱερόν', 'sanctuary']]
  },
  {
    greek: 'πρὸ τῶν πυλῶν τοῦ ἱεροῦ ἡ πομπὴ μένει. ἡ Μυρρίνη τὴν ἀδελφὴν βλέπει· ὁ Ξενοφῶν καὶ ὁ Κλεινίας τὴν Μυρρίνην ἀκούουσιν. ἡ ὁδὸς μακρά ἐστιν, ἀλλὰ ἡ πομπὴ καλή.',
    translation: 'Before the gates of the sanctuary the procession pauses. Myrrhine looks at her sister; Xenophon and Clinias listen to Myrrhine. The road is long, but the procession is beautiful.',
    gloss: [['πρὸ τῶν πυλῶν', 'before the gates; genitive plural'], ['τοῦ ἱεροῦ', 'of the sanctuary'], ['μένει', 'stays or pauses'], ['τὴν Μυρρίνην', 'Myrrhine as direct object'], ['ἡ ὁδός', 'the road; feminine noun of the second declension, formally studied in Lesson 8']]
  }
];
const sections = [
  {
    id:'present-persons',title:'1. All Six Present Active Persons',practiceTopic:'present-persons',
    body:[
      'The ending of a regular present active verb identifies its subject. The reading places all six persons in speech and narration: βλέπω, βλέπεις, βλέπει, βλέπομεν, βλέπετε, βλέπουσι(ν). The stem βλεπ- stays recognizable while the ending changes.',
      'Greek often omits a subject pronoun because the verb ending identifies the person. Add ἐγώ, σύ, ἡμεῖς, or ὑμεῖς for emphasis or contrast. Third-person plural -ουσι(ν) and third-person singular -ει were introduced earlier; this lesson completes the set.',
      'The final ν in βλέπουσιν can appear before a vowel or pause; βλέπουσι is also a normal form. The form βλέπετε can be either a plural present statement or a plural command. Context and punctuation decide; here ὑμεῖς … βαδίζετε; asks what the group is doing.'
    ],
    table:{title:'Present active indicative of βλέπω',headers:['Person','Pronoun','Form','Meaning'],greekColumns:[1,2],rows:[['1st singular','ἐγώ','βλέπω','I see'],['2nd singular','σύ','βλέπεις','you see'],['3rd singular','—','βλέπει','he, she, or it sees'],['1st plural','ἡμεῖς','βλέπομεν','we see'],['2nd plural','ὑμεῖς','βλέπετε','you all see'],['3rd plural','—','βλέπουσι(ν)','they see']]},
    checks:[{prompt:'What ending in βαδίζομεν means “we”?',answer:'-ομεν is first-person plural: “we walk.”'}],
    examples:[{greek:'ἐγὼ βλέπω· ἡμεῖς βλέπομεν.',english:'I see; we see.'}]
  },
  {
    id:'noun-adjective-review',title:'2. Read Gender, Number, and Case Together',practiceTopic:'agreement-review',
    body:[
      'Lesson 6 gave plural article, noun, and adjective forms. Review those endings beside the singular forms before adding a new feminine pattern. The article points to a noun’s gender, number, and case, while the adjective agrees with the noun in all three.',
      'A shared case does not require identical endings in different declensions: τῇ καλῇ θεᾷ is feminine dative singular throughout, while ὁ καλὸς φίλος is masculine nominative singular. In the reading, τὴν καλὴν πομπήν is a matched feminine accusative singular phrase.',
      'Do not assume every noun ending -ος is masculine. The reading’s ἡ ὁδός is feminine but belongs to the second declension. Its full group is scheduled for Lesson 8, so recognize this fixed word without using it as a first-declension model.'
    ],
    table:{title:'Familiar agreement across singular and plural',headers:['Phrase','Gender / number / case','Job'],greekColumns:[0],rows:[['ὁ καλὸς φίλος','masculine singular nominative','subject'],['τοὺς καλοὺς φίλους','masculine plural accusative','direct object'],['ἡ καλὴ πομπή','feminine singular nominative','subject'],['τὴν καλὴν πομπήν','feminine singular accusative','direct object'],['αἱ καλαὶ πομπαί','feminine plural nominative','subject']]},
    checks:[{prompt:'Why does καλὴν match πομπήν?',answer:'Both are feminine accusative singular.'}],
    examples:[{greek:'ἡ καλὴ πομπὴ βαδίζει.',english:'The beautiful procession is moving.'}]
  },
  {
    id:'eta-feminines',title:'3. First-Declension Feminines in -η',practiceTopic:'eta-feminines',
    body:[
      'Many first-declension feminine nouns have -η in the nominative singular. Use ἡ πομπή as the model: πομπή, πομπῆς, πομπῇ, πομπήν. The article gives the same four case jobs reviewed in Lesson 4. The long vowel appears as η, with an iota subscript in the dative.',
      'The plural uses the familiar Lesson 6 endings -αι, -ας, -ῶν, -αις: πομπαί, πομπάς, πομπῶν, πομπαῖς. The genitive plural ending draws the accent to itself. ἡ Κόρη and ἡ πύλη follow the same broad -η pattern; their own accents remain part of each word.',
      'If a dictionary gives πομπή, πομπῆς, ἡ, its genitive and article tell you both the stem pattern and gender. Do not infer a noun’s gender from its English meaning.'
    ],
    table:{title:'ἡ πομπή, πομπῆς',headers:['Case','Singular','Plural'],greekColumns:[1,2],rows:[['Nominative','ἡ πομπή','αἱ πομπαί'],['Accusative','τὴν πομπήν','τὰς πομπάς'],['Genitive','τῆς πομπῆς','τῶν πομπῶν'],['Dative','τῇ πομπῇ','ταῖς πομπαῖς']]},
    checks:[{prompt:'Which form means “to the procession”?',answer:'τῇ πομπῇ, feminine dative singular.'}],
    examples:[{greek:'ἡ Μυρρίνη ἐν τῇ πομπῇ ἐστίν.',english:'Myrrhine is in the procession.'}]
  },
  {
    id:'alpha-feminines',title:'4. First-Declension Feminines in -α',practiceTopic:'alpha-feminines',
    body:[
      'After ε, ι, or ρ, first-declension feminine nouns commonly keep long α through the singular. Compare ἡ θεά, θεᾶς, θεᾷ, θεάν and ἡ χώρα, χώρας, χώρᾳ, χώραν. This long alpha takes iota subscript in the dative. Other first-declension alpha stems can change to η in the genitive and dative; meet those as separate dictionary patterns rather than forcing every -α noun into this table.',
      'The plural endings are the same as the -η group: θεαί, θεάς, θεῶν, θεαῖς. The article changes with the case, and the adjective must agree. In ἡ καλὴ θεά, καλὴ has a different vowel from θεά, but both words are feminine nominative singular.',
      'θεᾷ is written with an iota subscript. Read it as one syllable; the subscript identifies the dative singular ending and is important in writing Greek accurately.'
    ],
    table:{title:'ἡ θεά, θεᾶς',headers:['Case','Singular','Plural'],greekColumns:[1,2],rows:[['Nominative','ἡ θεά','αἱ θεαί'],['Accusative','τὴν θεάν','τὰς θεάς'],['Genitive','τῆς θεᾶς','τῶν θεῶν'],['Dative','τῇ θεᾷ','ταῖς θεαῖς']]},
    checks:[{prompt:'What is the dative singular of ἡ θεά?',answer:'τῇ θεᾷ.'}],
    examples:[{greek:'ἐγὼ τῇ θεᾷ δῶρα φέρω.',english:'I bring gifts to the goddess.'}]
  }
];

const lesson = {
  id:'lesson-7',number:7,title:'The Road to Eleusis',greekTitle:'Ἡ πομπὴ πρὸς τὴν Ἐλευσῖνα',
  scope:'All present active indicative persons; noun and adjective agreement; first-declension feminine -η and long -α forms',
  theme:'Wisdom and Socrates; reconstructed Eleusinian procession',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-7-eleusis-procession.png',alt:'Illustrated pilgrims, including Myrrhine and Xenophon, on the road by the Dipylon and adjacent Sacred Gate toward Eleusis',caption:'A reconstructed public procession near the Kerameikos gates; the Sacred Way to Eleusis passed through the Sacred Gate beside the Dipylon.'},
  pages:[{page:1,slug:'lesson-7-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-7-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-7-page-3',title:'Eleusis and the Sacred Way',template:'culture'}],
  vocabulary:[
    vocab('Nouns',[['ἡ πομπή','procession','πομπή, πομπῆς, ἡ'],['ἡ πύλη','gate','πύλη, πύλης, ἡ'],['ἡ ἀδελφή','sister','ἀδελφή, ἀδελφῆς, ἡ'],['ἡ θεά','goddess','θεά, θεᾶς, ἡ'],['ἡ χώρα','countryside, land','χώρα, χώρας, ἡ'],['ἡ γῆ','earth, land','γῆ, γῆς, ἡ'],['ὁ σῖτος','grain','σῖτος, σίτου, ὁ'],['τὸ δῶρον','gift','δῶρον, δώρου, τό'],['ἡ ὁδός','road (feminine second-declension noun; full pattern in Lesson 8)','ὁδός, ὁδοῦ, ἡ','reading vocabulary']]),
    vocab('Verbs',[['βαδίζω','walk'],['βλέπω','see, watch'],['φέρω','carry, bear'],['μένω','stay, pause'],['ἄγω','lead, guide'],['ζητέω','seek; ζητεῖ means “she seeks”','ζητέω','reading vocabulary']]),
    vocab('Words and expressions',[['ἐγώ','I'],['σύ','you (singular)'],['ἡμεῖς','we'],['ὑμεῖς','you (plural)'],['μετά + genitive','with',null,'reading vocabulary'],['πρός + accusative','toward',null,'reading vocabulary']])
  ],
  reading:{title:'Ἡ πομπὴ πρὸς τὴν Ἐλευσῖνα',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'At the Kerameikos gates, Xenophon and Clinias join a procession toward Eleusis. Myrrhine, an Athenian woman traveling with her sister, explains why she is going and helps her sister along the road. Read for the six persons of present active verbs and for feminine -η and -α nouns.',
    'This journey and every conversation are reconstructed for the course. Xenophon’s participation in an Eleusinian procession is not attested. The public route, worship of Demeter and Kore, and women’s participation are historically grounded; the reading stops before the secret rites.',
    'The Dipylon and Sacred Gate were neighboring gateways, but the Sacred Way passed through the Sacred Gate. Blue glosses explain proper names, a few third-declension forms, the fixed name Ἱερὰ Ὁδός, and other words outside this lesson’s production goals.'
  ],paragraphs:reading.map(({greek,gloss})=>({greek,gloss:gloss.map(([greek,english])=>({greek,english}))})),translation:reading.map(p=>p.translation).join('\n\n'),sourceCitation:'Course reconstruction. Historical context: Homeric Hymn to Demeter; The Metropolitan Museum of Art, “Mystery Cults in the Greek and Roman World” (https://www.metmuseum.org/de/essays/mystery-cults-in-the-greek-and-roman-world); Oxford Classical Dictionary, “Dipylon” (https://academic.oup.com/edited-volume/61673/chapter-abstract/548725279).',notesMarkdown:'The characters’ journey and dialogue are fictional. The procession and the sanctuary are public historical setting; this reading does not claim to describe the initiates’ secret rites.'},
  wordStudy:{label:'Word Study — A Procession and Its Dictionary Forms',blocks:[{title:'From πομπή to the case forms you read',practiceTopic:'word-study',body:[
    'A dictionary lists πομπή, πομπῆς, ἡ: nominative singular, genitive singular, and feminine article. The genitive reveals the -η stem. In the story ἡ πομπή moves, Xenophon sees τὴν πομπήν, and the friends walk μετὰ τῆς πομπῆς.',
    'The related English word “pomp” ultimately comes from Greek πομπή by way of Latin pompa. Here πομπή means an organized public procession; its English descendant is a memory aid, not a full translation in every context.',
    'Compare θεά, θεᾶς, ἡ. The long α stays in the singular after ε: θεά, θεᾶς, θεᾷ, θεάν. The article ἡ still marks a feminine noun. The grammar tables below put these two first-declension patterns side by side.'
  ],display:[{greek:'ἡ πομπή',english:'the procession as subject'},{greek:'τὴν πομπήν',english:'the procession as direct object'},{greek:'τῆς πομπῆς',english:'of or with the procession'},{greek:'τῇ θεᾷ',english:'to the goddess'}]}]},
  grammar:{intro:'Lesson 6 practiced plural cases. Lesson 7 completes the regular present active indicative and gives the full singular and plural forms of first-declension feminine nouns in -η and long -α. Keep the article and adjective attached to the noun as you read.',objectives:[
    'Identify and form all six persons of a regular present active indicative verb.',
    'Distinguish present indicative -ετε from an imperative by context.',
    'Identify case, number, and gender in article–adjective–noun phrases.',
    'Decline first-declension feminine -η and long -α nouns in four singular and four plural cases.',
    'Recognize supplied irregular names and later grammar without treating them as production targets.'
  ],sections,summary:{title:'Grammar Summary',items:['Present active endings: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).','The article and adjective agree with a noun in gender, number, and case.','First-declension -η model: πομπή, πομπῆς, πομπῇ, πομπήν; plural πομπαί, πομπάς, πομπῶν, πομπαῖς.','Long -α model after ε, ι, or ρ: θεά, θεᾶς, θεᾷ, θεάν; plural θεαί, θεάς, θεῶν, θεαῖς.','The Sacred Way’s ὁδός is a supplied feminine second-declension noun, formally treated in Lesson 8.']}},
  culture:{title:'Eleusis in Greek Religious Life',banner:{image:'assets/lesson-7-eleusis-procession.png',alt:'Original historical illustration of pilgrims near the Dipylon and Sacred Gate, heading toward Eleusis',caption:'A course illustration of the public procession. The Dipylon stood near the Sacred Gate, through which the Sacred Way led toward Eleusis; the individual pilgrims are imagined.',credit:'Original illustration generated for Learn Greek with Xenophon (2026); historical reconstruction, not an ancient artifact.'},body:[
    'Eleusis was a sanctuary of Demeter and her daughter Kore, also called Persephone, west of Athens. In the Homeric Hymn to Demeter, the goddess searches for her daughter and comes to Eleusis; the story ties loss, return, and grain to the place. Athenians honored the goddesses in the city’s public religious calendar. The Great Mysteries brought the sanctuary and Athens together through a series of ceremonies and a large public procession.',
    'The procession traveled from central Athens toward Eleusis along the Sacred Way. It passed through the Kerameikos gateway district. The Dipylon was the prominent neighboring gate; the Sacred Way itself left through the smaller Sacred Gate beside it. This detail matters when picturing the route: the gathering area could be described as near the Dipylon, but the procession’s exit onto the Sacred Way belongs to the Sacred Gate. Eleusis was about 21 kilometers from Athens, a substantial walk rather than a short city parade.',
    'For Athens, the Mysteries were a major civic festival that connected public space, sacred road, and the sanctuary. For other Greeks, Eleusis was also a destination for personal religious participation and hope concerning life after death. Initiation was not limited to Athenian male citizens: women, non-Athenians, and enslaved people could be included, subject to the festival’s requirements. That broader participation gave Eleusis a reach beyond one city, even while Athens administered the festival.',
    'The public parts of the festival can be discussed: travel, gathering, reverence for Demeter and Kore, and arrival at the sanctuary. Initiates were bound to secrecy about what occurred in the inner rites. Ancient and modern writers have made suggestions, but our evidence does not justify presenting a detailed script of those rites as fact. This is why the reading pauses outside the sanctuary.',
    'Myrrhine’s desire to honor Demeter for the grain that supports her family is an invented individual motive consistent with the goddess’s association with agriculture. Her journey and words are not recorded by an ancient author. Xenophon and Clinias joining her is likewise a course reconstruction, not a documented episode in Xenophon’s life. The illustration shows the public journey rather than an initiation.'
  ],questions:[{prompt:'Why did Eleusis matter to Athenians?',answer:'It was the sanctuary of Demeter and Kore, and its Great Mysteries were a major festival connecting Athens, the Sacred Way, and Eleusis.'},{prompt:'Why did Eleusis matter beyond Athens?',answer:'Initiation could include non-Athenians, women, and enslaved people as well as Athenian men, making it a wider Greek religious destination.'},{prompt:'Did the procession leave by the Dipylon?',answer:'It gathered in the nearby Kerameikos gate area; the Sacred Way passed through the adjacent Sacred Gate.'},{prompt:'Why does the reading stop at the sanctuary?',answer:'The inner rites were secret, and the surviving evidence does not warrant an invented description of them.'}],review:{title:'Before the Final Quiz',items:['Say all six present active forms of βλέπω and name each person.','Decline ἡ πομπή and ἡ θεά in singular and plural.','Explain why τῇ θεᾷ is feminine dative singular.','Distinguish the neighboring Dipylon from the Sacred Gate and identify what is fictional in the reading.']},sources:[
    {title:'Homeric Hymn to Demeter (Perseus Digital Library)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D2'},
    {title:'The Metropolitan Museum of Art, Mystery Cults in the Greek and Roman World',url:'https://www.metmuseum.org/de/essays/mystery-cults-in-the-greek-and-roman-world'},
    {title:'The Metropolitan Museum of Art, Women in Classical Greece',url:'https://www.metmuseum.org/de/essays/women-in-classical-greece'},
    {title:'Oxford Classical Dictionary, Dipylon',url:'https://academic.oup.com/edited-volume/61673/chapter-abstract/548725279'},
    {title:'The Latsis Foundation, Kerameikos archaeology (PDF)',url:'https://www.latsis-foundation.org/content/elib/book_2/kerameikos_en.pdf'},
    {title:'The Metropolitan Museum of Art, Great Eleusinian Relief',url:'https://www.metmuseum.org/art/collection/search/248899'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-8',title:'A Household Finds a Way',fallbackUrl:'lesson.html?lesson=8&page=1'},contentRevision:'lesson-7-eleusis-complete-v1',previousLesson:{id:'lesson-6',title:'Strength of Body and Mind',fallbackUrl:'lesson.html?lesson=6&page=1'}
};

function question(id,category,topic,prompt,correct,wrong,explanation){
  if(wrong.length!==3 || new Set([correct,...wrong]).size!==4) throw new Error(`Bad choices: ${id}`);
  const texts=[correct,...wrong]; const shift=Number(id.match(/\d+$/)?.[0]||0)%4;
  const choices=Array.from({length:4},(_,i)=>{const index=(i-shift+4)%4;const isCorrect=index===0;return {text:texts[index],correct:isCorrect,feedback:isCorrect?`Correct: ${explanation}`:`Review: ${explanation}`};});
  return {id,type:'multiple-choice',...(topic?{topic}:{}),category,prompt,choices};
}
const core=[];
function add(topic,category,prompt,correct,a,b,c,why){core.push({topic,category,prompt,correct,wrong:[a,b,c],why:why||correct});}
// Word study: four cases, dictionary citation, and cognate meaning.
add('word-study','Word Study','Which dictionary citation is the procession?','πομπή, πομπῆς, ἡ','θεά, θεᾶς, ἡ','πύλη, πύλης, ἡ','χώρα, χώρας, ἡ','πομπή, πομπῆς, ἡ is the procession.');
add('word-study','Word Study','What does the article ἡ in πομπή, πομπῆς, ἡ identify?','feminine gender','masculine gender','plural number','accusative case','ἡ marks feminine gender in a dictionary citation.');
add('word-study','Word Study','Which form means “of the procession”?','τῆς πομπῆς','τῇ πομπῇ','τὴν πομπήν','αἱ πομπαί','τῆς πομπῆς is genitive singular.');
add('word-study','Word Study','Which form means “in the procession” after ἐν?','ἐν τῇ πομπῇ','ἐν τὴν πομπήν','ἐν αἱ πομπαί','ἐν τῆς πομπῆς','ἐν takes the dative here: τῇ πομπῇ.');
add('word-study','Word Study','The English word “pomp” is a memory aid for which Greek noun?','πομπή','πύλη','χώρα','θεά','English pomp ultimately derives from Greek πομπή.');
add('word-study','Word Study','What is the genitive singular of θεά?','θεᾶς','θεῶν','θεάν','θεᾷ','θεᾶς is the genitive singular of θεά.');
add('word-study','Word Study','Which citation identifies “goddess”?','θεά, θεᾶς, ἡ','πομπή, πομπῆς, ἡ','χώρα, χώρας, ἡ','σῖτος, σίτου, ὁ','θεά, θεᾶς, ἡ means goddess.');
add('word-study','Word Study','Why does the dictionary give πομπῆς after πομπή?','It shows the genitive and the stem pattern.','It gives a plural command.','It gives the verb tense.','It gives a masculine form.','The genitive helps identify a noun’s declension pattern.');
add('word-study','Word Study','Which phrase is an accusative singular procession?','τὴν πομπήν','ἡ πομπή','τῆς πομπῆς','τῇ πομπῇ','τὴν πομπήν is accusative singular.');
add('word-study','Word Study','Which phrase is a dative singular goddess?','τῇ θεᾷ','τὴν θεάν','τῆς θεᾶς','ἡ θεά','τῇ θεᾷ is dative singular.');
add('word-study','Word Study','In πομπή, πομπῆς, ἡ, what is the first form?','nominative singular','genitive singular','dative plural','accusative plural','πομπή is the nominative singular headword.');
add('word-study','Word Study','Which phrase means “with the procession” after μετά?','μετὰ τῆς πομπῆς','μετὰ τὴν πομπήν','μετὰ τῇ πομπῇ','μετὰ ἡ πομπή','μετά takes the genitive when it means with.');

const persons=[['1st singular','βλέπω','βλέπεις','βλέπει','βλέπομεν'],['2nd singular','βλέπεις','βλέπω','βλέπει','βλέπετε'],['3rd singular','βλέπει','βλέπω','βλέπουσιν','βλέπομεν'],['1st plural','βλέπομεν','βλέπω','βλέπετε','βλέπουσιν'],['2nd plural','βλέπετε','βλέπεις','βλέπομεν','βλέπουσιν'],['3rd plural','βλέπουσιν','βλέπει','βλέπετε','βλέπομεν']];
persons.forEach(([person,correct,a,b,c])=>add('present-persons','Grammar',`Which present active form is ${person} of βλέπω?`,correct,a,b,c,`${correct} is ${person}.`));
add('present-persons','Grammar','What does βαδίζομεν mean?','we walk','I walk','you all walk','they walk','-ομεν marks first-person plural.');
add('present-persons','Grammar','What does φέρεις mean?','you (one person) carry','I carry','we carry','they carry','-εις marks second-person singular.');
add('present-persons','Grammar','Which pronoun emphasizes “we”?','ἡμεῖς','ἐγώ','σύ','ὑμεῖς','ἡμεῖς means we.');
add('present-persons','Grammar','Which pronoun emphasizes “you all”?','ὑμεῖς','ἡμεῖς','σύ','ἐγώ','ὑμεῖς means you plural.');
add('present-persons','Grammar','In “ὑμεῖς βαδίζετε;” what is βαδίζετε?','present indicative: are you all walking?','singular command: walk!','first-person plural: we walk','third-person plural: they walk','The subject ὑμεῖς and question context show second-person plural indicative.');
add('present-persons','Grammar','What can the final ν in βλέπουσιν be called?','movable nu','iota subscript','augment','reduplication','The optional final -ν is movable nu.');

add('agreement-review','Grammar','What matches τὴν πομπήν as an adjective?','καλήν','καλός','καλοί','καλαῖς','καλήν is feminine accusative singular.');
add('agreement-review','Grammar','What matches αἱ πομπαί?','καλαί','καλή','καλοί','καλάς','καλαί is feminine nominative plural.');
add('agreement-review','Grammar','What is the case of τὴν καλὴν πομπήν?','accusative singular','nominative singular','genitive singular','dative plural','τὴν and -ήν mark accusative singular.');
add('agreement-review','Grammar','What is the case of ἡ καλὴ θεά?','nominative singular','accusative singular','dative singular','genitive plural','ἡ marks nominative singular feminine.');
add('agreement-review','Grammar','Which phrase is masculine accusative plural?','τοὺς καλοὺς φίλους','οἱ καλοὶ φίλοι','τῶν καλῶν φίλων','τοῖς καλοῖς φίλοις','τοὺς καλοὺς φίλους is masculine accusative plural.');
add('agreement-review','Grammar','Which words agree in τῇ καλῇ θεᾷ?','article, adjective, and noun','only article and adjective','only noun and verb','only pronoun and verb','All three words are feminine dative singular.');
add('agreement-review','Grammar','Is ἡ ὁδός masculine because it ends in -ος?','No; its article marks it feminine.','Yes; all -ος nouns are masculine.','Yes; roads are masculine in Greek.','No; it is neuter.','ἡ marks ὁδός as feminine, although it has a second-declension ending.');
add('agreement-review','Grammar','Which article belongs to feminine nominative plural?','αἱ','οἱ','τά','τοῖς','αἱ marks feminine nominative plural.');
add('agreement-review','Grammar','Which article belongs to feminine dative singular?','τῇ','τὴν','τῆς','αἱ','τῇ marks feminine dative singular.');
add('agreement-review','Grammar','Which phrase has a feminine accusative plural adjective?','τὰς καλὰς πομπάς','αἱ καλαὶ πομπαί','τῆς καλῆς πομπῆς','τῇ καλῇ πομπῇ','τὰς καλὰς πομπάς is feminine accusative plural.');
add('agreement-review','Grammar','Which phrase has a feminine genitive singular adjective?','τῆς καλῆς θεᾶς','τὴν καλὴν θεάν','τῇ καλῇ θεᾷ','αἱ καλαὶ θεαί','τῆς καλῆς θεᾶς is feminine genitive singular.');
add('agreement-review','Grammar','What three features must an attributive adjective match?','gender, number, and case','tense, person, and voice','person, number, and tense','accent, spelling, and meaning','An adjective matches its noun in gender, number, and case.');

const eta=[['nominative singular','ἡ πομπή','τὴν πομπήν','τῆς πομπῆς','τῇ πομπῇ'],['accusative singular','τὴν πομπήν','ἡ πομπή','τῆς πομπῆς','αἱ πομπαί'],['genitive singular','τῆς πομπῆς','τῇ πομπῇ','τὴν πομπήν','τῶν πομπῶν'],['dative singular','τῇ πομπῇ','τῆς πομπῆς','τὴν πομπήν','ταῖς πομπαῖς'],['nominative plural','αἱ πομπαί','τὰς πομπάς','τῶν πομπῶν','ταῖς πομπαῖς'],['accusative plural','τὰς πομπάς','αἱ πομπαί','τῆς πομπῆς','τῇ πομπῇ'],['genitive plural','τῶν πομπῶν','τῆς πομπῆς','ταῖς πομπαῖς','τὰς πομπάς'],['dative plural','ταῖς πομπαῖς','τῇ πομπῇ','τῶν πομπῶν','αἱ πομπαί']];
eta.forEach(([c,correct,a,b,d])=>add('eta-feminines','Grammar',`Which form of πομπή is ${c}?`,correct,a,b,d,`${correct} is ${c}.`));
add('eta-feminines','Grammar','Which ending is first-declension feminine genitive plural?','-ῶν','-ῃ','-άς','-αι','The first-declension feminine genitive plural ends in -ῶν.');
add('eta-feminines','Grammar','What is the dative singular of ἡ πύλη?','τῇ πύλῃ','τὴν πύλην','τῆς πύλης','ταῖς πύλαις','τῇ πύλῃ is dative singular.');
add('eta-feminines','Grammar','What is the accusative singular of ἡ ἀδελφή?','τὴν ἀδελφήν','τῆς ἀδελφῆς','τῇ ἀδελφῇ','αἱ ἀδελφαί','τὴν ἀδελφήν is accusative singular.');
add('eta-feminines','Grammar','What does the iota subscript in πομπῇ help mark?','dative singular','nominative plural','accusative singular','genitive plural','πομπῇ is dative singular.');

const alpha=[['nominative singular','ἡ θεά','τὴν θεάν','τῆς θεᾶς','τῇ θεᾷ'],['accusative singular','τὴν θεάν','ἡ θεά','τῆς θεᾶς','αἱ θεαί'],['genitive singular','τῆς θεᾶς','τῇ θεᾷ','τὴν θεάν','τῶν θεῶν'],['dative singular','τῇ θεᾷ','τῆς θεᾶς','τὴν θεάν','ταῖς θεαῖς'],['nominative plural','αἱ θεαί','τὰς θεάς','τῶν θεῶν','ταῖς θεαῖς'],['accusative plural','τὰς θεάς','αἱ θεαί','τῆς θεᾶς','τῇ θεᾷ'],['genitive plural','τῶν θεῶν','τῆς θεᾶς','ταῖς θεαῖς','τὰς θεάς'],['dative plural','ταῖς θεαῖς','τῇ θεᾷ','τῶν θεῶν','αἱ θεαί']];
alpha.forEach(([c,correct,a,b,d])=>add('alpha-feminines','Grammar',`Which form of θεά is ${c}?`,correct,a,b,d,`${correct} is ${c}.`));
add('alpha-feminines','Grammar','What is the genitive singular of ἡ χώρα?','τῆς χώρας','τὴν χώραν','τῇ χώρᾳ','τῶν χωρῶν','τῆς χώρας is genitive singular.');
add('alpha-feminines','Grammar','Which vowels commonly precede long retained α in this pattern?','ε, ι, ρ','ο, υ, ω','η, ω, ου','α, αι, ει','After ε, ι, or ρ, long alpha is commonly retained in the singular.');
add('alpha-feminines','Grammar','Which form means “to the countryside”?','τῇ χώρᾳ','τὴν χώραν','τῆς χώρας','αἱ χῶραι','τῇ χώρᾳ is dative singular.');
add('alpha-feminines','Grammar','Does every first-declension noun in -α follow θεά exactly?','No; other alpha stems may change to η in genitive and dative.','Yes; all -α nouns have identical singulars.','No; all -α nouns are masculine.','Yes; only the accent can differ.','The θεά table models long retained alpha, not every alpha-stem pattern.');

const topicQuestions=core.map((q,i)=>question(`lesson-7-practice-${String(i+1).padStart(3,'0')}`,q.category,q.topic,q.prompt,q.correct,q.wrong,q.why));
const gramIndices=[0,2,5,8,12,13,14,15,16,17,24,25,30,34,36,37,38,39,42,48,49,50,51,54];
const grammarExercises=gramIndices.map((index,i)=>{const q=core[index];return question(`lesson-7-grammar-exercise-${String(i+1).padStart(2,'0')}`,q.category,q.topic,`Grammar exercise ${i+1}: ${q.prompt}`,q.correct,q.wrong,q.why);});
const requiredVocab=lesson.vocabulary.flatMap(g=>g.items).filter(x=>x.status==='required vocabulary');
const vocabPractice=requiredVocab.flatMap((v,i)=>{
  const other=requiredVocab.filter(x=>x.english!==v.english);
  const distractors=[other[(i+1)%other.length],other[(i+5)%other.length],other[(i+9)%other.length]];
  const greekOptions=[other[(i+2)%other.length],other[(i+6)%other.length],other[(i+10)%other.length]];
  return [question(`lesson-7-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,distractors.map(x=>x.english),`${v.greek} means ${v.english}.`),question(`lesson-7-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which Greek entry means “${v.english}”?`,v.greek,greekOptions.map(x=>x.greek),`${v.greek} means ${v.english}.`)];
});
const quiz=[];
function final(category,prompt,correct,a,b,c,why){const n=quiz.length+1;quiz.push(question(`lesson-7-final-${String(n).padStart(2,'0')}`,category,null,prompt,correct,[a,b,c],why));}
final('Reading','Where does the public procession in the reading travel?','from Athens toward Eleusis','from Delphi to Athens','from Sparta to Olympia','from Eleusis to Corinth','It travels from Athens toward Eleusis.');
final('Reading','Who speaks to Xenophon about her reason for joining?','Myrrhine','Persephone','Gryllus','Socrates','Myrrhine explains why she travels.');
final('Reading','What does Myrrhine carry?','bread and water','a shield and spear','a wax tablet','a horse bridle','She carries bread and water.');
final('Reading','Who travels with Myrrhine?','her sister','her father','her teacher','her son','Her sister joins her.');
final('Reading','Where does the reading stop?','before the sanctuary gates','inside the secret rites','at the Athenian Agora','at Delphi','The story stops before the sanctuary gates.');
final('Reading','What is the status of Xenophon’s journey in this story?','course reconstruction','documented in the Anabasis','recorded by Pausanias as fact','quoted from a surviving diary','Xenophon’s attendance is not attested.');
const finalVocab=[0,2,3,7,9,11];finalVocab.forEach((i)=>{const v=requiredVocab[i];const others=requiredVocab.filter(x=>x.english!==v.english);final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);});
[12,13,15,17,24,25,37,42,43,49,51,54].forEach(i=>{const q=core[i];final('Grammar',q.prompt,q.correct,...q.wrong,q.why);});
final('Greek World','Which goddesses were central at Eleusis?','Demeter and Kore (Persephone)','Athena and Artemis','Hera and Aphrodite','Hestia and Nike','Eleusis centered on Demeter and her daughter Kore.');
final('Greek World','Which gate carried the Sacred Way out of Athens?','the Sacred Gate beside the Dipylon','the Dipylon itself','the Acropolis Propylaia','the Long Walls gate','The Sacred Way passed through the Sacred Gate beside the Dipylon.');
final('Greek World','How did Eleusis matter beyond Athens?','Non-Athenians as well as Athenians could be initiated.','Only Athenian male citizens could participate.','It was a military training camp.','It replaced all other Greek sanctuaries.','The Mysteries were open to a wider group than Athenian male citizens.');
final('Greek World','Which statement about women is accurate?','Women could participate in the Eleusinian Mysteries.','Women were always excluded.','Only priestesses could travel to Eleusis.','Women could watch but never be initiated.','Women could be included among initiates.');
final('Greek World','Why are the inner rites not described in this lesson?','They were secret and are not securely known in detail.','They occurred only at Delphi.','No one ever traveled to Eleusis.','They were identical to the Olympic games.','Initiates kept the inner rites secret.');
final('Greek World','Which part of Myrrhine’s story is invented?','her personal words and family motive','the existence of Demeter worship','the public road to Eleusis','the neighboring Kerameikos gates','Myrrhine is a fictional pilgrim in a historical setting.');

lesson.activities={
  'vocab-flashcards':{title:'Lesson 7 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 7 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 7 words in short rounds. Reading-only words remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 7 Grammar Flashcards',cards:[...persons.map(([p,f])=>({prompt:f,answer:`present active ${p}`})),{prompt:'τῇ πομπῇ',answer:'feminine dative singular: in or to the procession'},{prompt:'τῇ θεᾷ',answer:'feminine dative singular: to the goddess'},{prompt:'τῶν πομπῶν',answer:'feminine genitive plural: of the processions'}]},
  'topic-practice':{title:'Lesson 7 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice questions give immediate feedback and do not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 7 Grammar Exercises',description:'Present active persons, agreement, and first-declension feminine forms',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-7-grammar-exercises-v1',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 7 Final Quiz — The Road to Eleusis',description:'Reading, vocabulary, grammar, and Eleusis in Greek religious life',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-7-final-quiz-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 7 and continue to Lesson 8.',questions:quiz}
};

// Keep the published Lesson 6 navigation and canonical source aligned with this title.
prior.nextLesson.title=lesson.title;
fs.writeFileSync(path.join(root,'content/lessons/lesson-6.json'),JSON.stringify(prior,null,2)+'\n');
fs.writeFileSync(lessonPath,JSON.stringify(lesson,null,2)+'\n');

let fallback=fs.readFileSync(fallbackPath,'utf8');
const oldManifest='number: 7, title: "Examining Oneself"';
if(!fallback.includes(oldManifest) && !fallback.includes('number: 7, title: "The Road to Eleusis"')) throw new Error('Lesson 7 manifest not found');
fallback=fallback.replace(/\{ number: 7, title: "[^"]+",[^\n]+\},/,`{ number: 7, title: "The Road to Eleusis", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-7-eleusis-procession.png", bannerAlt: "Pilgrims near the Dipylon and Sacred Gate on the road toward Eleusis", grammarFocus: "All present active persons; first-declension feminine nouns", greekPhrase: "Ἡ πομπὴ πρὸς τὴν Ἐλευσῖνα", sourceAnchor: "Course reconstruction; public Eleusinian procession", cultureLead: "Eleusis, its procession, and its place in Greek religious life." },`);
fallback=fallback.replace('"id": "lesson-7",\n    "title": "Examining Oneself"','"id": "lesson-7",\n    "title": "The Road to Eleusis"');
// Rebuilds replace the generated block in place.
const generatedBlock=`  // BEGIN GENERATED LESSON 7\n  LESSONS["lesson-7"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 7`;
if(fallback.includes('  // BEGIN GENERATED LESSON 7')) {
  fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 7[\s\S]*?  \/\/ END GENERATED LESSON 7/g,generatedBlock);
} else {
  fallback=fallback.replace('  // END GENERATED LESSON 6',`  // END GENERATED LESSON 6\n${generatedBlock}`);
}
fs.writeFileSync(fallbackPath,fallback);
let outline=fs.readFileSync(scriptPath,'utf8');
outline=outline.replace('{ id: "lesson-7", title: "Examining Oneself", grammar: "Middle/passive voice (present), reflexive sense" }','{ id: "lesson-7", title: "The Road to Eleusis", grammar: "All present active persons; first-declension feminine nouns" }');
fs.writeFileSync(scriptPath,outline);

const sql=`-- Publish Lesson 7, preserving any administrator-edited predecessor.\nBEGIN;\nDO $lesson7$\nDECLARE\n  patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;\n  lesson_id_value uuid;\n  segment_id_value uuid;\n  reading_id_value uuid;\n  old_content jsonb;\n  old_version integer;\n  block_kind text;\n  group_item jsonb;\n  vocab_item jsonb;\n  vocab_id uuid;\n  vocab_order integer := 0;\n  paragraph_item jsonb;\n  gloss_item jsonb;\n  paragraph_order integer := 0;\n  gloss_order integer;\nBEGIN\n  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-7' FOR UPDATE;\n  SELECT content,version INTO old_content,old_version FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;\n  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN RETURN; END IF;\n  IF old_content IS NOT NULL AND NOT (old_version=1 AND old_content->>'title'='Examining Oneself' AND coalesce(jsonb_array_length(old_content->'pages'),0)=1) THEN\n    RAISE EXCEPTION 'Lesson 7 content has changed; review before replacing';\n  END IF;\n  IF old_content IS NOT NULL THEN\n    INSERT INTO public.lesson_content_versions (lesson_id,content,version,note) VALUES (lesson_id_value,old_content,old_version,'Before complete Lesson 7 Eleusis lesson');\n  END IF;\n  INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1)\n  ON CONFLICT (lesson_id) DO UPDATE SET content=EXCLUDED.content,version=public.lesson_content_overrides.version+1,updated_at=now();\n  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)\n  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;\n  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-7-page-1';\n  SELECT id INTO reading_id_value FROM public.readings WHERE lesson_id=lesson_id_value ORDER BY sort_order,id LIMIT 1;\n  IF reading_id_value IS NULL THEN\n    INSERT INTO public.readings (lesson_id,segment_id,title,sort_order) VALUES (lesson_id_value,segment_id_value,patch #>> '{reading,title}',1) RETURNING id INTO reading_id_value;\n  END IF;\n  UPDATE public.readings SET segment_id=segment_id_value,title=patch #>> '{reading,title}',\n    greek_text=(SELECT string_agg(p->>'greek',E'\\n\\n' ORDER BY n) FROM jsonb_array_elements(patch #> '{reading,paragraphs}') WITH ORDINALITY t(p,n)),\n    translation=patch #>> '{reading,translation}',notes_markdown=patch #>> '{reading,notesMarkdown}',source_citation=patch #>> '{reading,sourceCitation}'\n  WHERE id=reading_id_value;\n  DELETE FROM public.reading_glosses WHERE lesson_id=lesson_id_value AND reading_id=reading_id_value;\n  FOR paragraph_item IN SELECT value FROM jsonb_array_elements(patch #> '{reading,paragraphs}') LOOP\n    gloss_order:=0;\n    FOR gloss_item IN SELECT value FROM jsonb_array_elements(paragraph_item->'gloss') LOOP\n      INSERT INTO public.reading_glosses (lesson_id,reading_id,greek,english,lemma,display_form,part_of_speech,morphology,source,sort_order)\n      VALUES (lesson_id_value,reading_id_value,gloss_item->>'greek',gloss_item->>'english',gloss_item->>'greek',gloss_item->>'greek','Reading gloss','{}'::jsonb,'lesson_reading_gloss',paragraph_order*1000+gloss_order);\n      gloss_order:=gloss_order+1;\n    END LOOP;\n    paragraph_order:=paragraph_order+1;\n  END LOOP;\n  DELETE FROM public.lesson_vocabulary WHERE lesson_id=lesson_id_value;\n  FOR group_item IN SELECT value FROM jsonb_array_elements(patch->'vocabulary') LOOP\n    FOR vocab_item IN SELECT value FROM jsonb_array_elements(group_item->'items') LOOP\n      INSERT INTO public.vocabulary_items (lemma,display_form,gloss,part_of_speech,dictionary_form,morphology)\n      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_7_eleusis'))\n      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;\n      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';\n      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);\n      vocab_order:=vocab_order+1;\n    END LOOP;\n  END LOOP;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;\n  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','activities'] LOOP\n    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()\n    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;\n    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id\n      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN\n      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)\n      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),\n        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 ELSE 6 END);\n    END IF;\n  END LOOP;\nEND\n$lesson7$;\nUPDATE public.lesson_content_overrides o\nSET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('The Road to Eleusis'::text),true),\n    version=o.version+1,updated_at=now()\nWHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-6')\n  AND o.content #>> '{nextLesson,id}'='lesson-7'\n  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'The Road to Eleusis';\nCOMMIT;\n`;
fs.writeFileSync(migrationPath,sql);
console.log(`Built Lesson 7: ${reading.length} reading paragraphs, ${requiredVocab.length} required words, ${topicQuestions.length} topic practice, ${grammarExercises.length} grammar exercises, ${quiz.length} final quiz.`);
