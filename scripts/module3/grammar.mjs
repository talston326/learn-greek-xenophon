// Teaching examples are course compositions, not additional source testimony.
export const grammar={};
const s=(id,title,body,rows,tasks)=>({id,title,practiceTopic:id,body:body.split('\n'),table:{title,headers:['Form or construction','Meaning / analysis'],greekColumns:[0],rows:rows.split('\n').map(x=>x.split('|'))},tasks:tasks.split('\n').map(x=>x.split('|'))});
grammar[25]=[
s('imperfect-active','1. Building the imperfect active',`The imperfect indicative presents a past action from within: it was happening, used to happen, or kept happening. Add the augment to the present stem, then secondary endings. A consonant-initial stem takes ἐ-; an initial vowel normally lengthens.
The active endings are -ον, -ες, -ε(ν), -ομεν, -ετε, -ον. First singular and third plural coincide, so find the subject. The imperfect uses the present stem, not the aorist stem.`, `ἔλυον|I was releasing / they were releasing
ἔλυες / ἔλυε(ν)|you were releasing / he or she was releasing
ἐλύομεν / ἐλύετε|we were releasing / you (plural) were releasing
ἤκουον|I was listening / they were listening`, `Parse ἐλύομεν.|imperfect active, first plural|present active, first plural|aorist active, third plural|imperfect active, second plural
Choose “you (singular) were listening.”|ἤκουες|ἀκούεις|ἤκουον|ἤκουε
Why can ἔλυον need a stated subject?|First singular and third plural are identical.|It has no tense.|It is always passive.|It is a participle.
Identify the stem used in the imperfect.|present stem|future stem|aorist passive stem|perfect stem
Translate οἱ φίλοι ἔλεγον.|The friends were speaking.|The friends will speak.|The friend spoke.|The friends are speaking.
What marks past indicative time in ἤκουον?|the augmented initial vowel|a sigma suffix|the article|a future ending`),
s('imperfect-middle','2. Imperfect middle and deponent verbs',`Middle and passive imperfects share one set of endings: -όμην, -ου, -ετο, -όμεθα, -εσθε, -οντο. Their meaning depends on the verb and context. A deponent such as διαλέγομαι retains its ordinary sense, “converse.”
Do not call every -ετο form passive. In the reading διελέγετο means “he was conversing”; ἐδεῖτο means “he needed” and takes a genitive. Formal passive analysis becomes a main topic in Lesson 31.`, `ἐλυόμην / ἐλύου|I / you (singular) was/were releasing for myself/yourself
ἐλύετο / ἐλυόμεθα|he was / we were releasing for himself/ourselves
ἐλύεσθε / ἐλύοντο|you (plural) / they were releasing for yourselves/themselves
διελέγετο|he was conversing`, `Translate διελέγετο in the reading.|He was conversing.|He was being conversed.|He will speak.|They conversed.
Parse ἐλύοντο.|imperfect middle/passive, third plural|present active, third plural|imperfect active, first singular|aorist active, third singular
Choose “we were conversing.”|διελεγόμεθα|διελέγετο|διαλεγόμεθα|διελέγοντο
What case follows ἐδεῖτο here?|genitive|accusative only|nominative|vocative
Does a middle ending by itself prove a passive meaning?|No; consult the verb and context.|Yes, always.|Only in the plural.|Only after an article.
Choose the second singular middle imperfect ending.|-ου|-εις|-εται|-ονται`),
s('contract-imperfect','3. Contract verbs and εἰμί in the past',`Contract verbs retain their contraction rules after augmentation: ἐποίεε becomes ἐποίει, and ἐποίεον becomes ἐποίουν. The latter can mean “I was making” or “they were making.” Identify person from context.
Learn εἰμί separately: ἦν, ἦσθα, ἦν, ἦμεν, ἦτε, ἦσαν. English “was” does not automatically make a Greek form passive; εἰμί simply links a subject with a description.`, `ἐποίουν / ἐποίει|I/they was/were making / he or she was making
ἐποιοῦμεν / ἐποιεῖτε|we were making / you (plural) were making
ἦν / ἦσθα / ἦν|I was / you were / he or she was
ἦμεν / ἦτε / ἦσαν|we were / you (plural) were / they were`, `Translate ἡ πεῖνα τὸν σῖτον ἡδὺν ἐποίει.|Hunger made the food pleasant.|Hunger will make the food pleasant.|The food made hunger pleasant.|Hunger is pleasant food.
Choose “they were dependable.”|πιστοὶ ἦσαν|πιστὸς ἦν|πιστοί εἰσιν|πιστὸς εἶ
Parse ἐποίει.|imperfect active, third singular of ποιέω|present active, third singular|aorist middle, second singular|future active, first singular
Why is ἐποίουν ambiguous without context?|It can be first singular or third plural.|It can only be an imperative.|It lacks a stem.|It always means both past and future.
Choose “you (singular) were.”|ἦσθα|ἦτε|ἦμεν|ἦσαν
What does εἰμί do in πιστὸς ἦν?|link the subject to a description|mark a passive agent|introduce an infinitive of purpose|form a future passive`),
s('aspect','4. Choosing a viewpoint: imperfect and aorist',`Imperfect and aorist are both past in the indicative, but they offer different views. ἤσθιεν shows eating in progress; ἦλθεν presents an arrival as a whole. Neither tense tells us by itself how many minutes an event lasted.
A long event can be aorist when summarized; a brief action can be imperfect when pictured in progress or repeated. Use the narrative setting, not the rule “aorist means sudden.”`, `ὁ ἀνὴρ ἤσθιεν.|The man was eating.
ὁ φίλος ἦλθεν.|The friend arrived.
πολλάκις ἔλεγεν.|He often used to speak.
ἤκουσεν.|He listened (viewed as a whole).`, `Which tense best frames the meal as ongoing when a friend arrives?|imperfect|future|present infinitive|future passive
Does an aorist necessarily describe an instantaneous event?|No; it presents an event as a whole.|Yes; always under a second.|Yes; unless plural.|It has no aspect.
Translate πολλάκις ἔλεγεν.|He often used to speak.|He will speak once.|He has never spoken.|They are speaking now.
In ἤσθιεν ... ἦλθεν, which form gives background?|ἤσθιεν|ἦλθεν|both are future|neither is past
What distinguishes ἤκουον from ἤκουσα most directly?|ongoing/repeated viewpoint versus whole-event viewpoint|good action versus bad action|singular versus plural only|question versus statement
Can a lengthy journey be summarized by an aorist?|Yes, if viewed as one whole event.|No, lengthy events require imperfect.|Only without a subject.|Only in direct speech`)
];
grammar[26]=[
s('relative','1. Relative pronouns: agreement and case',`A relative pronoun links a description to an antecedent. It agrees with that antecedent in gender and number, but its case comes from its role inside the relative clause. In βίον ... ὃς ἡδονὴν ἔχει, βίον is accusative while ὃς is nominative because it is the subject of ἔχει.
First bracket the relative clause, then ask who does what within it. Do not simply copy the antecedent’s case. The relative has a rough breathing and usually an accent: distinguish ὅς from the article ὁ.`, `ὃς / ἣ / ὅ|who/which: masculine, feminine, neuter nominative singular
ὃν / ἣν / ὅ|whom/which: accusative singular
οὗ / ἧς / οὗ|whose/of which: genitive singular
ᾧ / ᾗ / ᾧ|to/for whom: dative singular`, `Why is ὃς nominative in βίον ζητῶ ὃς ἡδονὴν ἔχει?|It is the subject of ἔχει.|It copies βίον’s case.|All relatives are nominative.|It is an article.
Choose the relative in “the friend whom I help” with βοηθέω.|ᾧ|ὃς|ὃν|οὗ
What does a relative copy from its antecedent?|gender and number|case only|tense and voice|person and mood
Parse ἣν.|feminine accusative singular relative|masculine nominative singular article|neuter dative plural relative|feminine genitive plural article
In ἔργα ἃ οὐ μένει, why is μένει singular?|A neuter plural subject can take a singular verb.|ἃ is singular.|ἔργα is a vocative.|All relative clauses have singular verbs.
Translate ὁ ἄρχων ὃν οἱ φίλοι ἐκάλουν.|the ruler whom the friends were calling|the ruler who called the friends|the friends whom the ruler will call|the ruler whose friends slept`),
s('es-nouns','2. Neuter nouns with an -εσ- stem',`In nouns such as τὸ γένος, the sigma between vowels disappears and the neighboring vowels contract: γένεσ-ος becomes γένους. The nominative and accusative singular end in -ος; this does not make the noun masculine or second declension.
The article reveals gender and case. Learn nominative plus genitive together. Plural γένη is nominative or accusative, while γενῶν is genitive plural. The same pattern explains ψύχους and θέρους in the reading.`, `τὸ γένος / τοῦ γένους|kind, race / of the kind
τῷ γένει / τὰ γένη|to the kind / the kinds
τῶν γενῶν / τοῖς γένεσι(ν)|of the kinds / to the kinds
τὸ ψῦχος / τοῦ ψύχους|cold / of the cold`, `Identify the gender of τὸ ψῦχος.|neuter|masculine|feminine|common masculine and feminine
Choose the genitive singular of γένος.|γένους|γένοῦ|γένη|γένει
What happened to the stem sigma in γένους?|It disappeared between vowels before contraction.|It became a tau.|It is an augment.|It became the article.
Parse γένεσιν.|dative plural|genitive singular|accusative singular|nominative plural only
Translate τοῦ θέρους.|of the summer heat|to the summer heats|the winter road|of the men
Why should -ος alone not determine gender?|Neuter third-declension nouns can end in -ος.|All -ος nouns are feminine.|Articles never indicate gender.|Gender changes with tense`),
s('u-adjectives','3. Adjectives in -ύς, -εῖα, -ύ',`These adjectives have a masculine and neuter pattern different from their feminine pattern: βαθύς, βαθεῖα, βαθύ. The feminine declines like a first-declension adjective, while masculine and neuter use stems in -υ/-ε.
An adjective agrees with its noun in gender, number, and case. A ravine is feminine: βαθεῖαν χαράδραν. A burden can be described by neuter βαρύ. Accent and breathing belong to the written form; learn whole forms rather than stripping them away.`, `βαθύς / βαθεῖα / βαθύ|deep: masculine / feminine / neuter nominative singular
βαθέος / βαθείας / βαθέος|genitive singular
βαθύν / βαθεῖαν / βαθύ|accusative singular
βαθεῖς / βαθεῖαι / βαθέα|nominative plural`, `Choose “a deep ravine” as an accusative object.|βαθεῖαν χαράδραν|βαθὺς χαράδραν|βαθέος χαράδραν|βαθεῖαι χαράδραν
Identify the neuter nominative singular of βαρύς.|βαρύ|βαρεῖα|βαρύν|βαρέος
What must an adjective share with its noun?|gender, number, case|stem and dictionary ending|tense and person|word length
Choose the feminine nominative singular of ἡδύς.|ἡδεῖα|ἡδύ|ἡδύν|ἡδέος
Parse βαθέος.|masculine or neuter genitive singular|feminine nominative plural|masculine accusative plural|neuter dative plural
Translate βαρὺς ὁ πόνος.|The toil is heavy.|The toil is sweet.|The ravine is deep.|The heavy men sleep.`),
s('clause-reading','4. Putting clauses and noun forms together',`A relative clause can interrupt the main statement. Find the main subject and verb first, then insert the description. In ὁ ἄρχων, ὃν οἱ φίλοι ἐκάλουν, ἐπόνει, the ruler was working; the friends were calling him.
Use noun endings to find the dependents of a verb or preposition. τοῦ ψύχους is a genitive noun, not a comparative adjective. Forms that look unusual become manageable when you identify article, stem, and clause role in that order.`, `ὁ νέος ὃς ἄρξει|the young man who will rule
ὁ φίλος ᾧ βοηθεῖν δεῖ|the friend whom it is necessary to help
τοῦ ψύχους καὶ τοῦ θέρους|of cold and summer heat
ὁ ἄρχων ... ἐπόνει|the ruler ... was working`, `What is the main verb in ὁ ἄρχων, ὃν οἱ φίλοι ἐκάλουν, ἐπόνει?|ἐπόνει|ἐκάλουν|ὃν|οἱ
Who does the calling in that sentence?|the friends|the ruler|the ravine|no stated subject
Translate ὁ νέος ὃς ἄρξει.|the young man who will rule|the young man whom they ruled|the ruler’s young son|the young men who ruled
Which form signals a genitive singular noun?|τοῦ ψύχους|βαθεῖαν|ὃν|ἄρξει
Which question determines the case of ᾧ in the reading?|What case does βοηθεῖν require?|What case is φίλος?|How many syllables has it?|Is the ruler wealthy?
What is the best first step with an interrupted main clause?|Find the main subject and verb.|Translate every word as nominative.|Ignore every relative.|Change all verbs to aorists.`)
];
grammar[27]=[
s('regular-comparison','1. Regular comparatives and superlatives',`A comparative sets one item against another; a superlative places it at an extreme within a group. Many adjectives use -τερος and -τατος: σοφός, σοφώτερος, σοφώτατος. Vowel length in the stem affects the connecting vowel; learn the listed forms.
Comparatives and superlatives still agree with their nouns. The ending -τερος does not remove gender, number, or case. A superlative can also have an intensive sense, “very wise,” where no definite comparison group is stated.`, `σοφός / σοφώτερος / σοφώτατος|wise / wiser / wisest
πλούσιος / πλουσιώτερος / πλουσιώτατος|wealthy / wealthier / wealthiest
χαλεπός / χαλεπώτερος / χαλεπώτατος|difficult / more difficult / most difficult
σοφωτέρα / σοφώτερον|wiser: feminine / neuter singular`, `Choose “wealthier.”|πλουσιώτερος|πλούσιος|πλουσιώτατος|πλουσίως
What does -τατος normally mark?|superlative|comparative|imperfect|relative pronoun
Choose the feminine nominative singular “wiser.”|σοφωτέρα|σοφώτερος|σοφώτερον|σοφωτέρου
Does a comparative adjective still agree with its noun?|Yes, in gender, number, and case.|No, it is always neuter.|Only in person.|Only in tense.
Translate χαλεπώτατον ἔργον.|a most difficult task|a task that was easy|two difficult tasks|a less difficult road
What can a superlative mean without a stated group?|very or exceptionally|never|yesterday|perhaps`),
s('irregular-comparison','2. Irregular comparison',`Frequent adjectives may change stems. ἀγαθός has βελτίων/βέλτιστος for “better/best”; κακός has χείρων/χείριστος; πολύς has πλείων/πλεῖστος; ὀλίγος has ἐλάττων/ἐλάχιστος. Meaning and context govern the choice among alternative Greek forms.
Comparatives in -ων have masculine/feminine nominative singular -ων and neuter -ον. βελτίονα and βελτίω are alternative accusative singular masculine/feminine forms. Recognize these contracted alternatives without treating them as different degrees.`, `ἀγαθός → βελτίων → βέλτιστος|good → better → best
κακός → χείρων → χείριστος|bad → worse → worst
πολύς → πλείων → πλεῖστος|much/many → more → most
ὀλίγος → ἐλάττων → ἐλάχιστος|little/few → less/fewer → least/fewest`, `Choose “best.”|βέλτιστος|βελτίων|ἀγαθός|χείρων
Identify the comparative of πολύς in this table.|πλείων|πλεῖστος|πολλοί|πολύ
Translate ἐλάχιστα χρήματα.|the least money|more money|the worst friend|many houses
Choose the neuter singular of βελτίων.|βέλτιον|βελτίων|βελτίστη|βελτίονος
Are βελτίονα and βελτίω necessarily different degrees?|No; they can be alternative case forms.|Yes; one is positive and one superlative.|Yes; one is always future.|Neither is an adjective.
Which pair means “worse / worst”?|χείρων / χείριστος|πλείων / πλεῖστος|βελτίων / βέλτιστος|ἐλάττων / ἐλάχιστος`),
s('comparison-syntax','3. Than: genitive or ἤ',`Greek can express the second term of comparison with a genitive: σοφώτερος τοῦ φίλου, “wiser than the friend.” Alternatively ἤ introduces the comparison, and the case follows the parallel construction: οὗτος σοφώτερός ἐστιν ἢ ἐκεῖνος.
A superlative often takes a partitive genitive: σοφώτατος τῶν φίλων, “wisest of the friends.” Distinguish this group from the genitive used after a comparative. Do not confuse either with a possessive genitive.`, `σοφώτερος τοῦ φίλου|wiser than the friend
σοφώτερος ἢ ὁ φίλος|wiser than the friend
σοφώτατος τῶν φίλων|wisest of the friends
ἐλάττονα χρήματα|less money`, `Translate πλουσιώτερος τοῦ Σωκράτους.|wealthier than Socrates|the wealth of Socrates|the wealthiest of all men|as wealthy as every man
What does τῶν φίλων supply after σοφώτατος?|the group within which he is wisest|a passive agent|a future time|the subject of an infinitive
Choose an equivalent of σοφώτερος τοῦ φίλου.|σοφώτερος ἢ ὁ φίλος|σοφώτατος τοῦ φίλου|σοφὸς καὶ ὁ φίλος|σοφώτερος ὁ φίλος ἐστί
Which word can introduce “than”?|ἤ|καί alone|μήν alone|οὐ
Why is ἐλάττονα accusative in ἐλάττονα χρήματα ἔχει?|It agrees with the object χρήματα.|All comparatives are accusative.|It is a past verb.|It is an agent.
In σοφώτατος τῶν φίλων, is τῶν φίλων a comparative genitive?|No, it is partitive after a superlative.|Yes, all genitives mean than.|No, it is dative.|Yes, σοφώτατος is comparative.`),
s('comparative-adverbs','4. Comparing actions and needs',`An adverb modifies an action or description rather than agreeing with a noun. Comparative adverbs commonly use the neuter singular comparative adjective; superlative adverbs use the neuter plural superlative: σοφώτερον, σοφώτατα.
In the reading, more possessions do not automatically produce better living. Keep the grammar precise: βέλτιον ζῆν compares ways of living; βελτίων βίος describes a life. μᾶλλον and μάλιστα are useful general adverbs meaning “more” and “most.”`, `σοφῶς / σοφώτερον / σοφώτατα|wisely / more wisely / most wisely
καλῶς / κάλλιον / κάλλιστα|well, nobly / better, more nobly / best, most nobly
μᾶλλον / μάλιστα|more / most
βέλτιον ζῆν|to live better`, `Choose “more wisely” modifying πράττει.|σοφώτερον|σοφωτέρα|σοφώτεροι|σοφωτέρου
Translate βέλτιον ζῆν.|to live better|a better life as subject|the best houses|to possess more land
What form commonly makes a superlative adverb?|neuter plural superlative|feminine genitive singular|masculine dative plural|present participle
Choose “most” as a general adverb.|μάλιστα|μᾶλλον|μέγας|μόνος
In βελτίων βίος, what is βελτίων?|an adjective agreeing with βίος|an adverb modifying an unstated verb|a relative pronoun|an imperfect
Translate σοφώτατα πράττει.|He acts most wisely.|He acts more quickly.|The wisest men act.|He was wealthy.`)
];
grammar[28]=[
s('demonstratives','1. Pointing: οὗτος and ἐκεῖνος',`ὅδε, ἥδε, τόδε points to “this here,” often something being introduced. οὗτος points to “this” person or thing, often something just mentioned; ἐκεῖνος points to “that,” often more remote. Their gender, number, and case follow their role and any noun they describe.
With a noun and article, the demonstrative normally stands outside the article–noun group: οὗτος ὁ βίος or ὁ βίος οὗτος. Without a noun it can stand on its own.`, `ὅδε / ἥδε / τόδε|this here: masculine / feminine / neuter
οὗτος / αὕτη / τοῦτο|this: masculine / feminine / neuter
τούτου / ταύτης / τούτου|genitive singular
τοῦτον / ταύτην / τοῦτο|accusative singular
ἐκεῖνος / ἐκείνη / ἐκεῖνο|that: masculine / feminine / neuter`, `Choose “this life” as subject.|οὗτος ὁ βίος|τοῦτον ὁ βίος|αὕτη ὁ βίος|τούτου βίος
Parse ταύτην.|feminine accusative singular|masculine nominative singular|neuter dative plural|feminine genitive plural
Which points to “that woman”?|ἐκείνη|ἐκεῖνο|ἐκεῖνος|τούτου
Where does a demonstrative normally stand with an article and noun?|outside the article–noun group|only between article and noun|always after the verb|always before a preposition
Translate ταῦτα ζητοῦμεν.|We investigate these things.|These women investigate us.|We investigated that man.|They will investigate.
Choose the neuter singular “this.”|τοῦτο|οὗτος|αὕτη|τούτου`),
s('interrogatives','2. Asking: τίς and τί',`Accented τίς asks “who?” or “which?”; neuter τί asks “what?” A question word can be a pronoun on its own or an adjective with a noun. The case shows its function: τίνα βίον αἱρεῖ; “Which life do you choose?”
Ask separately about the subject and the object. τίς αἱρεῖται; asks who chooses. τί αἱρεῖται; asks what someone chooses. The written question mark in Greek is a semicolon-shaped sign.`, `τίς / τί|who? / what?
τίνος / τίνι|whose? / to or for whom?
τίνα / τί|whom? (accusative) / what?
τίνες / τίνα|who? (plural) / what things?`, `Choose “Who chooses?”|τίς αἱρεῖται;|τί αἱρεῖται;|τίνι αἱρεῖται;|τις αἱρεῖται.
Translate τίνα βίον ζητεῖς;|Which life do you seek?|Whose life is easy?|Who seeks you?|Someone seeks a life.
What case is τίνι?|dative singular|accusative plural only|genitive singular|nominative neuter
What distinguishes τίς from enclitic τις in meaning?|question versus indefinite someone|past versus future|masculine versus feminine only|passive versus active
Choose “whose?”|τίνος|τίνα|τίνι|τίνες
What does τί ask in τί αἱρεῖται;?|what is chosen|who chooses|where the choice occurs|when the choice occurred`),
s('indefinites','3. Someone, something, a certain',`Indefinite τις/τι means “someone/something” or “a certain/some” with a noun. It is enclitic: its accent normally depends on neighboring words. Unlike interrogative τίς, it does not itself ask a question.
The forms largely match the interrogative but accentuation differs. Learn the distinction in context rather than assuming every written accent belongs to a question: enclitic accent rules can give an indefinite an accent in certain positions.`, `ἀνήρ τις|a certain man
τι / τινός / τινί|something / of something / to something
τινές / τινά|some people / some things
λόγον τινά|a certain argument (accusative)`, `Translate ἀνήρ τις.|a certain man|which man?|the same man|every man
Choose the indefinite neuter singular.|τι|τίς|οὗτος|αὕτη
In λόγον τινά, what does the indefinite modify?|λόγον|an unstated future verb|the speaker’s name|a preposition
Why is “any accent means question” unreliable?|Enclitic indefinites can receive an accent in some positions.|Greek has no question words.|All accents are optional.|τις is always interrogative.
Which translation fits τινές without a question context?|some people|whose?|this woman|nothing whatever
Does indefinite τις identify one named person?|No, it leaves the reference unspecified.|Yes, always Heracles.|Yes, always the speaker.|Only in a dative.`),
s('question-adverbs','4. Where, how, and why?',`Question adverbs do not decline: ποῦ asks “where?”, πόθεν “from where?”, ποῖ “to where?”, πῶς “how?”, and πότε “when?” Their indefinite partners include που, ποθεν, ποι, πως, ποτε.
In the Heracles story, questions help expose a promise: how does a way of life produce its rewards, and from where do necessities come? διὰ τί asks “why?” These are reading tools, not a new conditional or subjunctive system.`, `ποῦ / πόθεν / ποῖ|where? / from where? / to where?
πῶς / πότε|how? / when?
που / πως / ποτε|somewhere / somehow / at some time
διὰ τί|why?`, `Choose “from where?”|πόθεν|ποῦ|ποῖ|πότε
Translate πῶς ζῇς;|How do you live?|Where do you live?|When did you leave?|Which man lives?
Which asks about a destination?|ποῖ|πόθεν|πότε|τίνος
What does διὰ τί ask?|why|whose|how many men|which woman
Which can mean “somehow”?|πως|πῶς|ποῦ|τί
Do question adverbs agree with a noun in case?|No, they are indeclinable.|Yes, always genitive.|Only with Heracles.|They decline like γένος.`)
];
grammar[29]=[
s('root-aorists','1. Athematic second aorists',`Some second aorists attach endings directly to a root, without a thematic ο/ε vowel. Recognize ἔβην from βαίνω and ἔστην from ἵστημι. Like other aorist indicatives, they carry an augment and present a past event as a whole.
Their meaning must be learned with their principal parts. ἔβην means “I went/stepped”; ἔστην means “I stood,” not “I made someone stand.” The full transitive contrast returns in Lesson 35.`, `ἔβην / ἔβης / ἔβη|I went / you went / he or she went
ἔβημεν / ἔβητε / ἔβησαν|we went / you (plural) went / they went
ἔστην / ἔστη / ἔστησαν|I stood / he stood / they stood
ἀνέβησαν|they went up
ἔγνων / ἔγνως / ἔγνω|I / you / he recognized
ἔγνωμεν / ἔγνωτε / ἔγνωσαν|we / you (plural) / they recognized`, `Parse ἔβησαν.|second aorist active, third plural|imperfect middle, third plural|future passive, third singular|present active, first plural
Translate ἔστη.|He stood.|He made them stand.|He will stand.|They were standing.
What makes these aorists athematic?|Endings attach without a thematic ο/ε vowel.|They have no stem.|They cannot have an augment.|They are all passive.
Choose “we went.”|ἔβημεν|ἔβησαν|βαίνομεν|ἔβης
Which principal part must be distinguished from transitive ἔστησα?|ἔστην|ἔλυσα|ἐδίδαξα|ἔπεμψα
Translate ἀνέβησαν.|They went up.|They will go down.|We stood still.|He was ascending.`),
s('root-nonfinite','2. Aorist infinitives, participles, commands',`Outside the indicative, the aorist does not take an augment. βῆναι is an infinitive; βάς is a masculine nominative singular participle. Its feminine is βᾶσα, neuter βάν. The genitive βάντος reveals the -ντ- stem.
Aorist commands present the requested action as a whole: βῆθι, “go!” Compare στῆθι, “stand!” Aorist participles normally show action prior to the main verb, though context determines the precise relation.`, `βῆναι / στῆναι|to go / to stand
βάς / βᾶσα / βάν|having gone: masculine / feminine / neuter
βάντος / στάντος|genitive masculine or neuter participle
βῆθι / στῆθι|go! / stand! (singular commands)
γνῶναι / γνούς, γνοῦσα, γνόν / γνῶθι|to know / having known / know!`, `Choose the aorist infinitive “to go.”|βῆναι|ἔβην|βάς|βαίνει
Parse βᾶσα.|aorist active participle, feminine nominative singular|present active infinitive|aorist indicative, first singular|future middle participle
Why does βῆναι lack an augment?|The aorist infinitive is not indicative.|It is a future.|It is not a verb.|The subject is feminine.
Translate στῆθι.|Stand!|You stood yesterday.|They will stand.|To make stand.
Which form reveals the participial -ντ- stem?|βάντος|ἔβη|βῆναι|βῆθι
In a normal narrative, βάς before another past action often means what?|having gone first|always going next year|never having moved|being ordered to go`),
s('further-es','3. Recognizing -εσ- nouns in difficult terrain',`Apply the -εσ- noun pattern to the physical world: τὸ ὄρος, τοῦ ὄρους, “mountain”; τὸ βάθος, τοῦ βάθους, “depth.” τὸ χεῖλος, τοῦ χείλους can mean a lip or an edge. The genitive -ους comes from contraction, not second declension.
Nominative and accusative neuter forms coincide. τὰ ὄρη can therefore be a subject or object; context decides. After ἐν, τοῖς ὄρεσιν is dative plural.`, `τὸ ὄρος / τοῦ ὄρους / τῷ ὄρει|mountain / of a mountain / to a mountain
τὰ ὄρη / τῶν ὀρῶν / τοῖς ὄρεσι(ν)|mountains / of mountains / to mountains
τὸ βάθος / τοῦ βάθους|depth / of the depth
τὸ χεῖλος / τοῦ χείλους|lip, edge / of the edge`, `Translate ἐν τοῖς ὄρεσιν.|in the mountains|from the plain|onto the mountain|above the river
Choose the genitive singular of βάθος.|βάθους|βάθει|βάθη|βάθεσιν
Can τὰ ὄρη be an accusative object?|Yes; neuter nominative and accusative coincide.|No; it is always a subject.|Only if singular.|It is a verb.
Parse τῷ ὄρει.|dative singular|genitive plural|nominative singular|accusative plural
Which meaning can χεῖλος have besides lip?|edge|shield|hunger|oath
What explains the ending -ους in ὄρους?|loss of intervocalic sigma and contraction|an aorist ending|a masculine second-declension ending|a comparative suffix`),
s('narrative-care','4. Reading events, background, and physical limits',`A narrative may set snow and exhaustion in the background with imperfects, then use aorists for particular decisions. A participle can compress one action into the frame of another. Name the subject of each action rather than treating all soldiers as doing the same thing.
Vocabulary also carries the argument. Hunger and cold are physical conditions, not proof of a moral defect. In the reading, provision of food belongs to competent leadership. Grammar helps us see who notices, moves, gives, and recovers.`, `οἱ στρατιῶται ἔβαινον.|The soldiers were going.
οἱ στρατιῶται ἔβησαν.|The soldiers went.
ὁ ἀνὴρ βὰς ἔστη.|The man went and stood (having gone, he stood).
ἐν τῷ ὄρει|in the mountain region`, `Which form pictures marching as ongoing?|ἔβαινον|ἔβησαν|βῆναι|βῆθι
Translate ὁ ἀνὴρ βὰς ἔστη.|Having gone, the man stood.|The men will make a stand.|The man was being sent.|The man must not move.
What should you identify when a participle precedes a finite verb?|the subject and relation of the two actions|only the number of letters|an unstated future in every case|the author’s age
Which is a completed-view past movement?|ἔβησαν|βαίνουσιν|βήσονται|βαίνειν
Does using an aorist itself prove the march was short?|No; aspect is not a stopwatch.|Yes, all aorists are brief.|Only if snow is mentioned.|Yes, by definition.
What case follows ἐν in ἐν τῷ ὄρει?|dative|accusative|genitive|vocative`)
];
grammar[30]=[
s('omicron-contract','1. Contract verbs in -όω',`In -όω verbs, ο contracts with following vowels: δηλόω becomes δηλῶ, δηλόεις becomes δηλοῖς. Present infinitive δηλοῦν comes from δηλόειν. Read the contraction before deciding person and number.
The imperfect adds the augment before the contracted stem: ἐδήλουν, ἐδήλους, ἐδήλου. ἐδήλουν can be first singular or third plural. These verbs provide useful language for making something clear and judging something worthy.`, `δηλῶ / δηλοῖς / δηλοῖ|I / you / he makes clear
δηλοῦμεν / δηλοῦτε / δηλοῦσι(ν)|we / you (plural) / they make clear
δηλοῦν / δηλῶν|to make clear / making clear (masculine nominative singular)
ἐδήλουν / ἐδήλου|I/they was/were making clear / he was making clear`, `Choose “we make clear.”|δηλοῦμεν|δηλοῦτε|δηλοῖ|ἐδήλουν
Parse δηλοῦν.|present active infinitive|imperfect indicative, first singular|aorist passive participle|future active, third plural
Translate ἐδήλου.|He was making clear.|We will make clear.|Make clear!|They are clear.
Which form can mean either “I was” or “they were making clear”?|ἐδήλουν|δηλοῖς|δηλοῦμεν|δηλῶν
Identify the masculine nominative singular present participle.|δηλῶν|δηλοῦν|δηλοῖ|δηλοῦτε
What is the uncontracted verb behind δηλῶ?|δηλόω|δηλέω|δηλάω|δίδωμι`),
s('contract-nouns','2. Contract second-declension nouns',`Contract nouns bring adjacent vowels together in the noun stem and ending. νοῦς, νοῦ, “mind,” and πλοῦς, πλοῦ, “voyage,” preserve familiar second-declension cases under contracted spellings.
Use the article to check the result: τὸν νοῦν is accusative; τῷ νῷ is dative. The circumflex often marks a contraction. Do not mistake νοῦν for an infinitive simply because both may end in -οῦν.`, `ὁ νοῦς / τοῦ νοῦ|mind / of the mind
τῷ νῷ / τὸν νοῦν|to the mind / the mind (object)
ὁ πλοῦς / τοῦ πλοῦ|voyage / of the voyage
οἱ πλοῖ / τοὺς πλοῦς|voyages (subject) / voyages (object)`, `Parse τὸν νοῦν.|accusative singular noun|present infinitive|genitive plural noun|nominative singular adjective
Choose “to the mind.”|τῷ νῷ|τὸν νοῦν|τοῦ νοῦ|ὁ νοῦς
What is the dictionary meaning of πλοῦς?|voyage|wealth|citizen|desire
How can you distinguish νοῦν from an infinitive in context?|Use the article and sentence role.|Treat all -οῦν forms as verbs.|Remove all accents.|Assume both mean mind.
Choose the nominative plural of πλοῦς.|πλοῖ|πλοῦ|πλῷ|πλοῦν
What familiar declension underlies these contracted nouns?|second declension|first declension only|a participle paradigm|the relative pronoun paradigm`),
s('numbers','3. Numbers and measured claims',`One, two, three, and four require special attention. εἷς/μία/ἕν has three genders; τρεῖς is masculine/feminine, τρία neuter; τέτταρες is masculine/feminine, τέτταρα neuter. Most cardinal numbers from five through one hundred are indeclinable.
Numbers need not measure wisdom. The lesson’s inventory of books and resources is a teaching comparison, not a historical census of Euthydemus’s collection. Ordinals such as πρῶτος and δεύτερος decline as adjectives.`, `εἷς / μία / ἕν|one: masculine / feminine / neuter
δύο / δυοῖν|two / genitive or dative dual of two
τρεῖς / τρία; τριῶν / τρισί(ν)|three; genitive / dative
τέτταρες / τέτταρα; πέντε / δέκα|four; five / ten`, `Choose “three books” with neuter βιβλία.|τρία βιβλία|τρεῖς βιβλία|τριῶν βιβλία|μία βιβλία
Which is feminine “one”?|μία|εἷς|ἕν|δύο
Parse τρισίν.|dative of three|genitive of one|nominative of four|ordinal first
Which cardinal here is indeclinable?|πέντε|εἷς|τρεῖς|τέτταρες
How does δεύτερος behave?|It declines like an adjective.|It is always an adverb.|It is an imperfect verb.|It has only a neuter form.
Does a course example saying “ten books” establish Euthydemus’s historical total?|No; the inventory is a teaching example.|Yes; every teaching numeral is a source fact.|Only if written in Greek.|Yes; Xenophon gives that exact census here.`),
s('hos-family','4. ὡς and its compounds in context',`ὡς has several uses; let the sentence determine the sense. With a comparison it can mean “as”; with a superlative, “as ... as possible.” ὥσπερ means “just as,” and ὥστε commonly introduces a result, often with an infinitive.
Do not force every ὡς into the English “that.” Here learn these reading patterns as units. Extended indirect statement and advanced clause systems belong to later lessons.`, `ὡς φίλος|as a friend
ὡς τάχιστα|as quickly as possible
ὥσπερ ὁ φίλος|just as the friend
ὥστε μανθάνειν|so as to learn / with the result of learning`, `Translate ὡς τάχιστα.|as quickly as possible|as slowly as possible|that he ran yesterday|because he was first
What does ὥσπερ commonly introduce?|an explicit comparison|a passive agent|a genitive object|a future tense
Which sense fits ὡς φίλος?|as a friend|whose friend?|without a friend|the friend's friend
Which compound commonly introduces result?|ὥστε|ὥσπερ|οὗτος|τίνος
Should ὡς always be translated “that”?|No; its sense depends on construction and context.|Yes, without exception.|Only before a noun.|Only with a superlative.
In ὥστε μανθάνειν, what form is μανθάνειν?|present active infinitive|aorist indicative|future passive participle|genitive plural noun`)
];
grammar[31]=[
s('passive-present','1. Present passive: who receives the action?',`A passive verb makes the affected person or thing the grammatical subject. Compare ὁ φύλαξ φυλάττει τὴν γυναῖκα, “the guard protects the woman,” with ἡ γυνὴ φυλάττεται, “the woman is protected.” Present passive forms use the same endings as the present middle.
The endings are -ομαι, -ῃ, -εται, -όμεθα, -εσθε, -ονται. A form alone does not prove a passive meaning; read the verb’s meaning and the surrounding sentence.`, `φυλάττομαι / φυλάττῃ / φυλάττεται|I / you / she is/am/are protected
φυλαττόμεθα / φυλάττεσθε / φυλάττονται|we / you (plural) / they are protected
ἡ γυνὴ φυλάττεται.|The woman is protected.
ὁ φύλαξ φυλάττει τὴν γυναῖκα.|The guard protects the woman.`, `Who is the subject in ἡ γυνὴ φυλάττεται?|the woman|the guard|an unnamed king|the action itself
Choose “they are protected.”|φυλάττονται|φυλάττεται|φυλάττουσιν|ἐφυλάττοντο
What endings does the present passive share?|present middle endings|aorist active endings|future active endings|perfect active endings only
Convert “the guard protects the woman” to a passive idea.|The woman is protected by the guard.|The woman protects the guard.|The guard protected himself.|The guard will protect.
Parse φυλαττόμεθα.|present middle/passive, first plural|imperfect active, first plural|aorist passive, third plural|present active, second plural
Does the passive subject have to be morally responsible for the action?|No; grammatical subjecthood does not assign blame.|Yes; subjects always cause actions.|Only if feminine.|Only in the plural.`),
s('passive-imperfect','2. Imperfect passive: action in progress',`The imperfect passive uses augment, present stem, and middle/passive secondary endings. ἐφυλάττετο means “she was being protected” in the appropriate context. The imperfect can describe an ongoing state of custody without implying a completed rescue.
Compare present φυλάττεται and imperfect ἐφυλάττετο. Both can be passive; tense and aspect are separate from voice. Remember first singular -όμην and third plural -οντο.`, `ἐφυλαττόμην / ἐφυλάττου / ἐφυλάττετο|I / you / she was being protected
ἐφυλαττόμεθα / ἐφυλάττεσθε / ἐφυλάττοντο|we / you (plural) / they were being protected
ἐπέμπετο|he or she was being sent
ἐπαιδεύοντο|they were being educated`, `Translate ἐφυλάττετο in a passive context.|She was being protected.|She will protect herself.|They are protected.|She protected the guard.
Which feature marks the past indicative in ἐπέμπετο?|augment ἐ-|future sigma|aorist -θη-|article ὁ
Choose “they were being educated.”|ἐπαιδεύοντο|παιδεύονται|ἐπαίδευον|παιδεύσει
What stem forms the imperfect passive?|present stem|aorist passive stem|future active stem|perfect active stem
Does an imperfect passive necessarily mean the action was completed?|No; it views an ongoing or repeated past situation.|Yes, completion is its only meaning.|Only when singular.|Only without an agent.
Parse ἐφυλαττόμην.|imperfect middle/passive, first singular|present passive, first plural|aorist active, first singular|imperfect active, third plural`),
s('agency','3. Agent, instrument, and responsibility',`A personal agent is commonly expressed by ὑπό plus genitive: ὑπὸ τοῦ φύλακος, “by the guard.” An instrument can be a bare dative: λίθῳ, “with a stone.” Keep these roles distinct from the person affected.
A passive can leave the agent unstated. That is a grammatical choice, not evidence that nobody acted. In an ethical reading, ask whether the sentence names, obscures, or leaves open the person responsible.`, `ὑπὸ τοῦ φύλακος|by the guard (personal agent)
ὑπὸ τῶν ἀνδρῶν|by the men
λίθῳ|with a stone (instrument)
ἡ γυνὴ φυλάττεται ὑπὸ τοῦ φύλακος.|The woman is protected by the guard.`, `Choose the normal personal-agent construction here.|ὑπό plus genitive|ὑπό plus accusative always|ἐν plus nominative|a bare vocative
What role does λίθῳ have in “is struck with a stone”?|instrument|personal agent|subject|direct object
Translate ὑπὸ τῶν ἀνδρῶν.|by the men|to the men|above the men|without the men
If a passive omits an agent, what follows?|The sentence does not name the agent.|No person acted.|The subject caused it.|The action is imaginary.
Which phrase names a personal agent?|ὑπὸ τοῦ φύλακος|τὴν γυναῖκα|λίθῳ|ἐν τῇ οἰκίᾳ
Why separate grammatical voice from moral responsibility?|Voice shows sentence structure; responsibility requires contextual judgment.|Passive always proves innocence of every participant.|Active always means blame.|Greek has no agents.`),
s('voice-choice','4. Active, middle, passive, and deponent',`Active, middle, and passive describe different relationships between a subject and an action. A middle may involve the subject’s own interest, as in choosing for oneself; a passive presents the subject as affected. Deponent verbs use middle forms with meanings such as “answer” or “wish.”
Do not translate mechanically with “is being” whenever you see -ται. βούλεται means “wishes,” αἱρεῖται “chooses” in a suitable context, and φυλάττεται may be middle or passive depending on the sentence.`, `βούλεται|he or she wishes (deponent)
αἱρεῖται τὸν βίον|he or she chooses the life (middle)
φυλάττει|he or she protects (active)
φυλάττεται ὑπὸ τοῦ φίλου|he or she is protected by the friend (passive)`, `Translate βούλεται.|He wishes.|He is being wished.|They were protecting.|He was chosen.
Which is clearly passive with a stated agent?|φυλάττεται ὑπὸ τοῦ φίλου|φυλάττει τὸν φίλον|βούλεται ἀπιέναι|αἱρεῖται τὸν βίον
What guides the meaning of a shared middle/passive form?|lexical meaning and context|the final three letters alone|the gender of the reader|the length of the sentence
Identify active φυλάττει.|he or she protects|he or she is protected|they protect themselves|to have protected
In αἱρεῖται τὸν βίον, how is τὸν βίον functioning?|direct object of a middle verb|passive agent|genitive of separation|subject of αἱρεῖται
What is a deponent verb in this lesson’s terminology?|a verb using middle forms with a non-passive lexical meaning|a verb with no meaning|any passive verb|only a future verb`)
];
grammar[32]=[
s('dunamai','1. δύναμαι: capacity and its limits',`δύναμαι means “be able” and uses middle forms. It commonly takes an infinitive: δύναται εὑρίσκειν, “she can find.” The infinitive does not acquire the person and number of the finite verb.
Learn the present δύναμαι, δύνασαι, δύναται, δυνάμεθα, δύνασθε, δύνανται. Learn the imperfect forms: ἐδυνάμην, ἐδύνασο, ἐδύνατο; ἠδυνάμην and related variants also occur in Attic.`, `δύναμαι / δύνασαι / δύναται|I / you / he or she can
δυνάμεθα / δύνασθε / δύνανται|we / you (plural) / they can
ἐδυνάμην / ἐδύνασο / ἐδύνατο|I / you / he or she could
ἐδυνάμεθα / ἐδύνασθε / ἐδύναντο|we / you (plural) / they could`, `Choose “we can.”|δυνάμεθα|δύνασθε|δύνανται|ἐδυνάμεθα
Translate δύναται εὑρίσκειν.|She can find.|She is being found.|They could find.|She must be found.
Parse ἐδύνατο.|imperfect, third singular of δύναμαι|present, first plural|aorist active, third singular|future passive, second singular
What commonly completes δύναμαι?|an infinitive|a passive agent only|a vocative only|a comparative genitive only
Choose “you (singular) can.”|δύνασαι|δύναται|δύνασθε|δυνάμεθα
Does δύναμαι mean “I am being able-d” because it has middle forms?|No; it means I am able.|Yes, every middle is passive.|Only in past tense.|Only in plural.`),
s('keimai','2. κεῖμαι: where things lie',`κεῖμαι means “lie, be situated,” often describing the resulting location of something placed. It is not the ordinary active verb “put.” Use τίθημι when someone places an object; use κεῖμαι when describing where it lies.
The forms κεῖται and κεῖνται are especially useful in a household inventory. The imperfect ἔκειτο describes where something was lying or situated. Follow the location with a suitable phrase such as ἐν plus dative.`, `κεῖμαι / κεῖσαι / κεῖται|I / you / he or it lies
κείμεθα / κεῖσθε / κεῖνται|we / you (plural) / they lie
ἐκείμην / ἔκεισο / ἔκειτο|I / you / he or it was lying
ἐκείμεθα / ἔκεισθε / ἔκειντο|we / you (plural) / they were lying`, `Translate τὸ ἱμάτιον κεῖται.|The cloak lies there.|The cloak puts something down.|The man makes a cloak.|The cloak will be sold.
Choose “they were lying.”|ἔκειντο|κεῖνται|ἔκειτο|κεῖται
Which verb ordinarily means “I put” rather than “I lie”?|τίθημι|κεῖμαι|δύναμαι|ἐπίσταμαι
Parse κεῖσθε.|present, second plural|imperfect, third singular|present, first singular|future, third plural
What case normally follows ἐν for a location?|dative|nominative|accusative|vocative
Translate ἐν τῇ οἰκίᾳ ἔκειτο.|It was lying in the house.|It will enter the house.|It placed the house.|The houses were burning.`),
s('epistamai','3. ἐπίσταμαι: knowing how',`ἐπίσταμαι means “know, understand,” including knowing how to perform a task. With an infinitive it expresses practical knowledge: ἐπίσταται κομίζειν, “she knows how to carry.” This is different from δύναται, which emphasizes capacity or opportunity.
The present is ἐπίσταμαι, ἐπίστασαι, ἐπίσταται, ἐπιστάμεθα, ἐπίστασθε, ἐπίστανται. The imperfect is ἠπιστάμην, ἠπίστασο, ἠπίστατο, ἠπιστάμεθα, ἠπίστασθε, ἠπίσταντο.`, `ἐπίσταμαι / ἐπίστασαι / ἐπίσταται|I / you / he or she knows how
ἐπιστάμεθα / ἐπίστασθε / ἐπίστανται|we / you (plural) / they know how
ἠπιστάμην / ἠπίστασο / ἠπίστατο|I / you / he or she knew how
ἐπίσταται κομίζειν|she knows how to carry`, `Choose “they know how.”|ἐπίστανται|ἐπίσταται|ἠπίσταντο|ἐπιστάμεθα
Translate ἠπίστατο.|He knew or understood.|They will know.|He is being understood.|We know now.
Which verb emphasizes know-how rather than sheer capacity?|ἐπίσταμαι|δύναμαι|κεῖμαι|ἵημι
What is κομίζειν in ἐπίσταται κομίζειν?|a complementary infinitive|a nominative noun|a genitive absolute|a passive agent
Choose “we knew how.”|ἠπιστάμεθα|ἐπιστάμεθα|ἠπίστασθε|ἠπίσταντο
Does practical knowledge belong only to the household’s owner in the lesson?|No; workers’ knowledge makes order possible.|Yes; grammar proves ownership is expertise.|Only to visitors.|Only to someone giving commands.`),
s('complements','4. Matching verb and complement',`An infinitive can complete an idea left unfinished by a verb: “can ...,” “knows how ...,” “wishes ...”. In ordinary same-subject examples, the subject of the infinitive is the subject of the finite verb.
Contrast ability, skill, and location. δύναται κομίζειν says that carrying is possible; ἐπίσταται κομίζειν says the person knows how; κεῖται identifies where an object lies. Translate the full relationship, not just an isolated dictionary entry.`, `δύναται κομίζειν.|She can carry.
ἐπίσταται κομίζειν.|She knows how to carry.
βούλεται κομίζειν.|She wishes to carry.
τὸ σκεῦος κεῖται ἐν τῇ οἰκίᾳ.|The implement lies in the house.`, `In δύναται κομίζειν, who normally does the carrying?|the subject of δύναται|the infinitive itself|an unstated owner necessarily|the object being carried
Which sentence expresses willingness?|βούλεται κομίζειν|κεῖται ἐν τῇ οἰκίᾳ|ἐπίσταται κομίζειν|δύναται κομίζειν
Which expresses location?|τὸ σκεῦος κεῖται ἐν τῇ οἰκίᾳ|δύναται κομίζειν|ἐπίσταται κομίζειν|βούλεται κομίζειν
Why call κομίζειν complementary here?|It completes what the finite verb means.|It praises the reader.|It is an adjective agreeing with a noun.|It is always a quotation.
Choose the past “she could carry.”|ἐδύνατο κομίζειν|δύναται κομίζειν|κεῖται κομίζειν|ἐπίστασθε κομίζειν
What is the key difference between can and knows how?|capacity versus practical knowledge|present versus future necessarily|active versus passive necessarily|singular versus plural`)
];
grammar[33]=[
s('first-passive','1. First aorist passive',`The first aorist passive uses a stem in -θη- with active-shaped secondary endings: ἐλύθην, ἐλύθης, ἐλύθη. These endings do not make the meaning active. The stem, principal parts, and context identify the passive.
The infinitive λυθῆναι and participle λυθείς, λυθεῖσα, λυθέν lack the indicative augment. Consonants may change before θ: διδάσκω has ἐδιδάχθην. Learn the passive principal part rather than attaching -θην blindly.`, `ἐλύθην / ἐλύθης / ἐλύθη|I / you / he was released
ἐλύθημεν / ἐλύθητε / ἐλύθησαν|we / you (plural) / they were released
λυθῆναι / λυθείς|to be released / having been released
ἐδιδάχθησαν|they were taught`, `Parse ἐλύθησαν.|aorist passive indicative, third plural|imperfect active, third plural|future middle, third singular|present passive infinitive
Why is ἐλύθην passive despite its active-shaped ending?|Its -θη- stem identifies the aorist passive.|Every -ν ending is passive.|It has no subject.|The augment always means passive.
Choose “to be released” in the aorist.|λυθῆναι|ἐλύθην|λύειν|λύσασθαι
Translate ἐδιδάχθησαν.|They were taught.|They taught themselves.|They will teach.|He was teaching.
Identify the feminine nominative singular participle.|λυθεῖσα|λυθείς|λυθέν|λυθῆναι
Why consult principal parts for the aorist passive?|The stem may change before the passive marker.|All verbs use λύω’s stem.|Passive forms have no stems.|Only nouns have principal parts.`),
s('second-passive','2. Second aorist passive',`A second aorist passive has -η- rather than -θη-: γράφω has ἐγράφην, “I was written/inscribed,” and φαίνω has ἐφάνην, often “I appeared.” The label describes formation; some passive-shaped forms have an intransitive meaning.
Compare ἐγράφην with ἐλύθην. Both use the same personal endings, but their passive stems differ. Infinitive γραφῆναι and participle γραφείς follow the same non-indicative pattern without augment.`, `ἐγράφην / ἐγράφης / ἐγράφη|I / you / it was inscribed
ἐγράφημεν / ἐγράφητε / ἐγράφησαν|we / you (plural) / they were inscribed
γραφῆναι / γραφείς|to be inscribed / having been inscribed
ἐφάνη|he or she appeared`, `What distinguishes the second aorist passive formation?|It has -η- without θ.|It has no endings.|It is always future.|It has a thematic ο.
Translate ἐφάνη in “the boy appeared brave.”|he appeared|he was made visible by a stated agent necessarily|he will appear|they were teaching
Choose the aorist passive infinitive of γράφω.|γραφῆναι|γράφειν|γράψαι|ἐγράφη
Parse ἐγράφησαν.|aorist passive indicative, third plural|present active, third plural|imperfect passive, first singular|future active, third singular
Does every passive-shaped aorist require an English passive?|No; some have an intransitive lexical meaning.|Yes, without exception.|Only with boys.|Only if it contains θ.
Which pair contrasts first and second aorist passive stems?|ἐλύθην / ἐγράφην|λύω / λύεις|γράφω / γράφεις|λύειν / γράφειν`),
s('future-passive','3. Future passive',`The future passive is built on the aorist passive stem with -σ- and middle endings: λυθήσομαι, “I shall be released.” A second-passive stem likewise gives γραφήσομαι. Unlike the aorist indicative, these futures have no augment.
Keep future active λύσω, future middle λύσομαι, and future passive λυθήσομαι distinct. The future passive infinitive is λυθήσεσθαι. An expressed personal agent can still use ὑπό plus genitive.`, `λυθήσομαι / λυθήσῃ / λυθήσεται|I / you / he will be released
λυθησόμεθα / λυθήσεσθε / λυθήσονται|we / you (plural) / they will be released
γραφήσομαι|I shall be inscribed
παιδευθήσεται|he or she will be educated`, `Choose “they will be released.”|λυθήσονται|ἐλύθησαν|λύσουσιν|ἐλύοντο
What stem supplies the future passive?|aorist passive stem|present active stem alone|perfect active stem|noun stem
Translate παιδευθήσεται.|He will be educated.|He educated.|They are educating.|He was educating himself.
Which is future active rather than passive?|λύσω|λυθήσομαι|λυθήσεται|γραφήσομαι
Does the future passive take the aorist augment?|No.|Yes, always.|Only in first singular.|Only with -θη-.
Choose the future passive infinitive.|λυθήσεσθαι|λυθῆναι|λύειν|λύσασθαι`),
s('deponent-aorists','4. Deponents and responsible translation',`Deponent verbs do not all form the aorist the same way. ἀποκρίνομαι has ἀπεκρινάμην, “I answered,” with middle aorist forms. βούλομαι has ἐβουλήθην, “I wished,” with passive-shaped aorist forms. Neither requires an English passive.
Record the principal part and the meaning together. Distinguish morphological description from translation: ἐβουλήθην is passive in formation but means “I wished.” The question “who chose the training?” must still be answered from the narrative.`, `ἀποκρίνομαι → ἀπεκρινάμην|answer → I answered
βούλομαι → ἐβουλήθην|wish → I wished
πορεύομαι → ἐπορεύθην|travel → I traveled
ἐπαιδεύθην|I was educated (ordinary passive)`, `Translate ἀπεκρίνατο.|He answered.|He was being answered by someone necessarily.|He will answer.|We answered.
Which aorist means “I wished”?|ἐβουλήθην|ἐπαιδεύθην|ἐλύθην|ἐγράφην
Why is “I was traveled” wrong for ἐπορεύθην?|The verb’s lexical meaning is travel despite passive formation.|The form is a noun.|The augment means future.|All -θην forms are active in formation.
Which is an ordinary passive meaning here?|ἐπαιδεύθην, I was educated|ἐβουλήθην, I wished|ἐπορεύθην, I traveled|ἀπεκρινάμην, I answered
What should a vocabulary record include for these verbs?|aorist principal part and actual meaning|only the final letter|only an English passive|only the present accent
Does the form ἐπαιδεύθη prove the boy chose his education?|No; passive grammar does not establish consent.|Yes, it means he chose it.|Only if aorist.|Only in Sparta.`)
];
grammar[34]=[
s('didomi-present','1. δίδωμι in the present and imperfect',`δίδωμι is athematic: its endings attach to the stem without the ordinary thematic ο/ε. The present singular has a long vowel, δίδωμι, δίδως, δίδωσι; the plural has short ο, δίδομεν, δίδοτε, διδόασι.
The imperfect is irregular in the singular: ἐδίδουν, ἐδίδους, ἐδίδου; plural ἐδίδομεν, ἐδίδοτε, ἐδίδοσαν. A gift commonly has a recipient in the dative and an object in the accusative.`, `δίδωμι / δίδως / δίδωσι(ν)|I / you / he gives
δίδομεν / δίδοτε / διδόασι(ν)|we / you (plural) / they give
ἐδίδουν / ἐδίδους / ἐδίδου|I / you / he was giving
τῷ φίλῳ τὸ ποτήριον δίδωσιν.|He gives the cup to the friend.`, `Choose “we give.”|δίδομεν|δίδοτε|διδόασι|δίδως
What case marks the recipient in τῷ φίλῳ τὸ ποτήριον δίδωσιν?|dative|genitive|nominative|vocative
Translate ἐδίδου.|He was giving.|He will give.|They gave once.|Give!
Which is third plural present?|διδόασιν|δίδωσιν|δίδομεν|ἐδίδοσαν
What happens to the stem vowel in δίδομεν compared with δίδωμι?|It is short ο rather than long ω.|It disappears entirely.|It becomes η.|It marks passive voice.
Identify the direct object in the cup sentence.|τὸ ποτήριον|τῷ φίλῳ|δίδωσιν|an unstated speaker`),
s('tithemi-present','2. τίθημι in the present and imperfect',`τίθημι means “put, place” and follows a long/short vowel pattern: τίθημι, τίθης, τίθησι; τίθεμεν, τίθετε, τιθέασι. It can also mean “set out” an example or proposal.
The imperfect singular is ἐτίθην, ἐτίθεις, ἐτίθει; plural ἐτίθεμεν, ἐτίθετε, ἐτίθεσαν. Contrast τίθησι, someone puts something, with κεῖται, something lies in a location.`, `τίθημι / τίθης / τίθησι(ν)|I / you / he puts
τίθεμεν / τίθετε / τιθέασι(ν)|we / you (plural) / they put
ἐτίθην / ἐτίθεις / ἐτίθει|I / you / he was putting
παράδειγμα τίθησιν.|He sets out an example.`, `Choose “they put” in the present.|τιθέασιν|τίθησιν|τίθετε|ἐτίθεσαν
Translate παράδειγμα τίθησιν.|He sets out an example.|The example lies there.|They gave a gift.|He will stop speaking.
Which is second singular imperfect?|ἐτίθεις|τίθης|ἐτίθει|ἐτίθετε
What distinguishes τίθησι from κεῖται?|placing an object versus lying in a location|future versus past necessarily|good versus bad action|plural versus singular
Choose “we put.”|τίθεμεν|τίθετε|τιθέασι|τίθημι
Parse ἐτίθει.|imperfect active, third singular|present active, third singular|aorist passive, first singular|future active, second plural`),
s('kappa-aorists','3. Aorists: ἔδωκα and ἔθηκα',`δίδωμι and τίθημι have aorist active singulars in -κα: ἔδωκα, ἔδωκας, ἔδωκε; ἔθηκα, ἔθηκας, ἔθηκε. Their ordinary Attic plurals use shorter stems: ἔδομεν, ἔδοτε, ἔδοσαν; ἔθεμεν, ἔθετε, ἔθεσαν.
These are aorists, not perfects simply because κ appears. The infinitives are δοῦναι and θεῖναι. Aorist participles δούς and θείς identify someone who has given or placed.`, `ἔδωκα / ἔδωκε / ἔδοσαν|I gave / he gave / they gave
ἔθηκα / ἔθηκε / ἔθεσαν|I put / he put / they put
δοῦναι / θεῖναι|to give / to put (aorist)
δούς / θείς|having given / having put`, `Translate ἔθεσαν.|They put.|They were being put.|He gives.|We shall give.
Choose the aorist infinitive of δίδωμι.|δοῦναι|διδόναι|δίδωμι|ἔδωκα
Does κ in ἔδωκα make it a perfect?|No; it is an aorist principal part.|Yes; all κ forms are perfect.|It makes it future.|It makes it passive.
Choose “we gave.”|ἔδομεν|δίδομεν|ἔδοτε|διδόασιν
Parse θείς.|aorist active participle, masculine nominative singular|present active infinitive|aorist passive indicative|feminine genitive singular noun
Which is “he put” as a whole past event?|ἔθηκε|ἐτίθει|τίθησι|θήσει`),
s('mi-commands','4. Commands, infinitives, and future forms',`Learn a few high-frequency non-indicative forms as a usable set. Present διδόναι and τιθέναι view giving and placing as processes; aorist δοῦναι and θεῖναι view the actions as wholes. Aorist singular commands are δός and θές.
Future forms return to familiar -σω endings: δώσω and θήσω. In the reconstructed serving dialogue, commands direct a particular action. They do not prove that the ancient conversation used these exact words.`, `διδόναι / τιθέναι|to give / to put (present)
δοῦναι / θεῖναι|to give / to put (aorist)
δός / θές|give! / put! (aorist singular)
δώσω / θήσω|I shall give / I shall put`, `Translate δὸς τὸ ποτήριον.|Give the cup!|The cup was given.|He gives a cup.|We were giving cups.
Choose “put!” as an aorist singular command.|θές|τίθησι|θεῖναι|ἔθηκε
Which is the present infinitive “to put”?|τιθέναι|θεῖναι|θήσω|θείς
Translate δώσω.|I shall give.|I gave.|I was giving.|Give!
What distinction separates διδόναι and δοῦναι?|present versus aorist aspect|active versus passive voice|singular versus plural subject|question versus statement
How should the serving commands in this lesson be attributed?|new teaching dialogue based on the scene|verbatim Xenophon quotations|Spartan law|a preserved inscription`)
];
grammar[35]=[
s('genitive-absolute','1. The genitive absolute',`A genitive absolute supplies a circumstance with its own subject and participle, both in the genitive. τοῦ Σωκράτους λέγοντος means “while Socrates was speaking.” The phrase stands grammatically apart from the main clause: οἱ φίλοι ἤκουον, “the friends listened.”
The participle agrees with its own genitive subject, not the main subject. “Absolute” means detached in construction, not unconnected in meaning. Translate naturally as while, when, since, or although as context supports; do not choose cause automatically.`, `τοῦ Σωκράτους λέγοντος|while Socrates was speaking
τῶν φίλων ζητούντων|while the friends were investigating
τοῦ λόγου παυσαμένου|when the speech had ended
τῶν ἐπιθυμιῶν ἀρχουσῶν|when desires rule`, `What two elements form the core of a genitive absolute?|a genitive subject and agreeing participle|a nominative subject and infinitive|a dative agent and finite verb|two accusative nouns
Who is speaking in τοῦ Σωκράτους λέγοντος, οἱ φίλοι ἤκουον?|Socrates|the friends|both necessarily|an unnamed ruler
Translate τοῦ λόγου παυσαμένου.|when the speech had ended|the speech will end|to stop the speech|the speaker’s friend
What does absolute mean here?|grammatically detached from the main clause|morally certain|unrelated in meaning|always causal
With what does ἀρχουσῶν agree?|τῶν ἐπιθυμιῶν|the main subject regardless of gender|an unstated λόγος|the verb ἐστιν
Must every genitive absolute be translated “because”?|No; context decides the relation.|Yes, always.|Only with aorists.|Only with plural subjects.`),
s('absolute-aspect','2. Participial aspect and shared subjects',`A present participle normally shows action simultaneous with the main verb; an aorist participle normally presents a prior action. Thus λέγοντος may mean “while speaking,” and παυσαμένου “after it had ended.” The surrounding tense supplies the time frame.
When the participle describes the main subject, Greek normally uses an agreeing participle instead of a genitive absolute: ὁ φίλος λέγων ἔστη. Identify the people and relationships before translating.`, `τοῦ φίλου λέγοντος, ὁ παῖς ἤκουεν.|While the friend spoke, the boy listened.
τοῦ φίλου ἐλθόντος, ὁ παῖς ἔστη.|When the friend had arrived, the boy stood.
ὁ φίλος λέγων ἔστη.|The friend stood while speaking.
λέγοντος / ἐλθόντος|present / aorist participle, genitive masculine singular`, `Which participle usually presents an action prior to the main action?|aorist participle|present participle|every participle equally|only a future indicative
In ὁ φίλος λέγων ἔστη, who speaks and stands?|the friend does both|the boy speaks and the friend stands|two unnamed people|no subject is expressed
Why is λέγων nominative in that sentence?|It agrees with the main subject.|All participles are nominative.|It is a genitive absolute.|The verb is future.
Translate τοῦ φίλου ἐλθόντος.|when the friend had arrived|the friend will arrive|the friend who is being sent|to arrive for a friend
What supplies the larger time frame for a present participle?|the main verb and context|the English present tense always|its case alone|its gender alone
Which construction normally fits a separate circumstantial subject?|genitive absolute|a nominative adjective modifying the main subject|a bare imperative|a future infinitive only`),
s('histemi','3. ἵστημι: make stand or stand?',`Present active ἵστημι is normally transitive, “make stand, set up.” Its first aorist ἔστησα also causes someone or something to stand. The second aorist ἔστην is intransitive, “I stood.” This difference is lexical and grammatical, not merely a change of time.
Learn the present ἵστημι, ἵστης, ἵστησι; ἵσταμεν, ἵστατε, ἱστᾶσι. Present middle ἵσταμαι commonly means “stand” or “take one’s stand”; perfect ἕστηκα has the present state sense “I am standing.”`, `ἵστημι / ἵστησι / ἱστᾶσι|I / he / they make stand
ἔστησα τὸν παῖδα.|I made the boy stand.
ἔστην / στῆναι / στάς|I stood / to stand / having stood
ἕστηκα|I am standing (perfect form, resulting state)`, `Translate ἔστησα τὸν παῖδα.|I made the boy stand.|The boy made me stand.|I stood beside the boy.|The boy will stand.
Which means “I stood” without a direct object?|ἔστην|ἔστησα|ἵστημι|στήσω
What does ἕστηκα commonly express?|a present state of standing|a future act of teaching|a passive order|an unfinished wish
Choose third plural present active of ἵστημι.|ἱστᾶσιν|ἵστησιν|ἵσταμεν|ἔστησαν
Why distinguish first and second aorists of this verb?|They differ in transitive versus intransitive meaning.|They differ only in spelling.|One is always present tense.|Both always mean make stand.
Parse στάς.|second aorist active participle, masculine nominative singular|present passive infinitive|future active, second singular|genitive plural noun`),
s('histemi-compounds','4. καθίστημι and ἀφίστημι',`Compounds retain the important causative/intransitive contrast. καθίστημι can mean “appoint” someone to a role; κατέστησα means “I appointed,” while κατέστην can mean “I became/was established.” An appointment often uses two accusatives: the person and the role.
ἀφίστημι can mean “make withdraw”; ἀπέστην means “I withdrew” or “revolted.” A genitive may express separation: ἀπέστη τῆς ἀρχῆς, “he withdrew from office.” Do not confuse ἀφίστημι with ἀφίημι, “release,” in the next lesson.`, `τὸν ἄνδρα ἄρχοντα καθιστᾶσιν.|They appoint the man ruler.
κατέστησα / κατέστην|I appointed / I became or was established
ἀπέστησα / ἀπέστην|I made withdraw / I withdrew
ἀπέστη τῆς ἀρχῆς.|He withdrew from office.`, `What are the two accusatives in the appointment example?|person and role|two separate passive agents|time and place only|subject and its genitive
Translate ἀπέστη τῆς ἀρχῆς.|He withdrew from office.|He appointed the office.|They will rule.|He released a stone.
Choose “I appointed.”|κατέστησα|κατέστην|καθίσταμαι|ἀπέστην
What relation does τῆς ἀρχῆς express here?|separation|personal agent|instrument|direct object
Which means “I made someone withdraw”?|ἀπέστησα|ἀπέστην|κατέστην|ἕστηκα
Are ἀφίστημι and ἀφίημι the same verb?|No; their stems and meanings differ.|Yes; only accents differ.|Yes; one is its plural.|Only in the present.`)
];
grammar[36]=[
s('deiknumi','1. δείκνυμι: showing evidence',`δείκνυμι is a -νυμι verb: δείκνυμι, δείκνυς, δείκνυσι; δείκνυμεν, δείκνυτε, δεικνύασι. The infinitive is δεικνύναι. The stem outside the present system differs: future δείξω and aorist ἔδειξα.
The verb means “show” or “point out.” In historical interpretation, distinguish what the source shows from what a reconstruction imagines. A grammatical example about pointing at the Acropolis is not independent testimony.`, `δείκνυμι / δείκνυς / δείκνυσι(ν)|I / you / he shows
δείκνυμεν / δείκνυτε / δεικνύασι(ν)|we / you (plural) / they show
δεικνύναι / δεικνύς|to show / showing (masculine nominative singular)
δείξω / ἔδειξα|I shall show / I showed`, `Choose “they show.”|δεικνύασιν|δείκνυσιν|δείκνυμεν|ἔδειξαν
Translate δείξω.|I shall show.|I showed.|Show!|I was being shown.
Identify the present infinitive.|δεικνύναι|δείξαι|ἔδειξα|δείκνυσιν
What happens outside the present system of δείκνυμι?|The -νυ- present formation is absent in δείξω and ἔδειξα.|Every form remains identical.|All forms become passive.|The noun changes gender.
Parse ἔδειξα.|aorist active indicative, first singular|present active, first singular|future middle, first plural|imperfect passive, third plural
Does a newly composed pointing example prove a historical speech occurred?|No; it illustrates grammar.|Yes, Greek guarantees authenticity.|Only if it uses an aorist.|Only if a place name appears.`),
s('hiemi','2. ἵημι and ἀφίημι',`ἵημι means “send, let go.” Its present forms are ἵημι, ἵης, ἵησι; ἵεμεν, ἵετε, ἱᾶσι. ἀφίημι adds the sense “let go from, release.” Its infinitive is ἀφιέναι, distinct from ἀφιστάναι, “make withdraw.”
Learn future ἥσω and aorist singular ἧκα, ἧκας, ἧκε; the aorist plural uses εἷμεν, εἷτε, εἷσαν. The aorist infinitive is εἷναι, distinct from εἶναι, “to be”: the breathing matters.`, `ἵημι / ἵησι / ἱᾶσι|I / he / they send
ἀφίησι τὸν λίθον.|He lets go of the stone.
ἥσω / ἧκα / εἷσαν|I shall send / I sent / they sent
ἱέναι / εἷναι|to send (present / aorist)`, `Translate ἀφίησι τὸν λίθον.|He lets go of the stone.|He makes the stone stand.|The stone lies there.|He was shown a stone.
Choose “we send” in the present.|ἵεμεν|ἵετε|ἱᾶσι|εἷμεν
Which infinitive is aorist “to send”?|εἷναι|εἶναι|ἱέναι|ἵστασθαι
Why distinguish εἷναι and εἶναι?|They belong to different verbs: send and be.|They differ only in font.|Both always mean stand.|One is a noun.
Choose “I sent.”|ἧκα|ἥσω|ἵημι|ἵης
Which compound means release rather than make withdraw?|ἀφίημι|ἀφίστημι|καθίστημι|δείκνυμι`),
s('supplementary','3. Participles that complete a verb',`A supplementary participle completes a verb’s meaning rather than merely adding a circumstance. παύονται μαχόμενοι means “they stop fighting”; the participle agrees with the subject. With perception, ὁρᾷ τοὺς ἄνδρας ἀναβαίνοντας means “he sees the men going up”: the participle agrees with the accusative people perceived.
Distinguish a supplementary participle from an attributive participle with an article and from a genitive absolute. Ask what the main verb needs: stop doing what? see whom doing what? Extended indirect discourse is reserved for later lessons.`, `παύονται μαχόμενοι.|They stop fighting.
ὁρᾷ τοὺς ἄνδρας ἀναβαίνοντας.|He sees the men going up.
οἱ ἀναβαίνοντες|the people going up (substantival)
τῶν ἀνδρῶν ἀναβαινόντων|while the men go up (genitive absolute)`, `What completes παύονται in παύονται μαχόμενοι?|the participle μαχόμενοι|an unstated article|a genitive agent|an infinitive of purpose
With what does ἀναβαίνοντας agree in the perception example?|τοὺς ἄνδρας|the subject of ὁρᾷ|an unstated πόλις|the verb’s tense
Translate ἐπαύσαντο μαχόμενοι.|They stopped fighting.|They began to fight.|They were seen fighting.|The fighters will stop someone.
Which phrase is a genitive absolute?|τῶν ἀνδρῶν ἀναβαινόντων|οἱ ἀναβαίνοντες|παύονται μαχόμενοι|ὁρᾷ τοὺς ἄνδρας
What question helps identify a supplementary participle after see?|See whom doing what?|Whose noun is this?|Where is the augment in the article?|How many letters are there?
Translate οἱ ἀναβαίνοντες.|the people going up|while the men went up|to make them go up|he sees them`),
s('module-synthesis','4. From self to city: cumulative reading',`Use the module’s tools in a deliberate order: identify finite verbs; locate their subjects and objects; attach participles; then resolve pronouns and comparison. Distinguish the imperfect ἐπολέμουν from the aorist ἀνέβησαν, and the passive from an active verb with an affected object.
The oath phrase μὴ μνησικακήσειν is glossed as a future infinitive after “swore.” Recognize that local pattern without turning this lesson into the later indirect-discourse unit. Historical chronology also matters: the later killing at Eleusis is not the initial return to Athens.`, `ἐπολέμουν / ἀνέβησαν|they were fighting / they went up
ὤμοσαν μὴ μνησικακήσειν.|They swore not to bear grudges.
ὁ σοφώτερος πολίτης|the wiser citizen
τοῦ πολέμου παυσαμένου|when the war had ended`, `Which form gives an ongoing past viewpoint?|ἐπολέμουν|ἀνέβησαν|δείξω|ἵημι
What does μὴ μνησικακήσειν contribute to the oath?|the promise not to bear grudges|a command to begin war|a statement that memory vanishes|a passive agent
Parse ἀνέβησαν.|athematic second aorist active, third plural|present active, third plural|future passive, first singular|imperfect middle, third plural
Translate ὁ σοφώτερος πολίτης.|the wiser citizen|the wisest citizens|the citizen’s wisdom|a citizen who was shown
What construction is τοῦ πολέμου παυσαμένου?|genitive absolute|accusative object plus supplementary participle|a direct command|a comparative adverb
Why keep the Eleusis episode separate from the first return?|The source describes it as a later event.|All events occurred on the same day.|Eleusis is an invented location.|The later event erases the earlier oath.`)
];
