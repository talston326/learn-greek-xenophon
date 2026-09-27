import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const at = name => path.join(root, name);
const vocab = (category, items) => ({category, items: items.map(([greek, english, dictionaryForm, status='required vocabulary']) => ({
  greek, english, ...(dictionaryForm ? {dictionaryForm} : {}), status,
  lemma: greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u,'').split(',')[0], audioPlaceholder:true
}))});
const paragraphs = [
  {
    greek:'ὕστερον ἐν ταῖς Ἀθήναις στάσις ἐστίν. οἱ πολέμιοι τὴν γῆν τοῦ Ἀριστάρχου ἔχουσιν. ἐν τῇ οἰκίᾳ αἱ ἀδελφαὶ καὶ αἱ ἄλλαι συγγενεῖς οἰκοῦσιν. πολλοὶ ἄνθρωποι, ὀλίγος δὲ σῖτος.',
    translation:'Later, there is civil strife in Athens. Enemies hold Aristarchus’s land. His sisters and other female relatives live in the house. There are many people, but little grain.',
    gloss:[['ὕστερον','later; this marks a time jump after the Eleusis reading'],['στάσις','civil strife; supplied third-declension noun'],['τοῦ Ἀριστάρχου','of Aristarchus'],['αἱ ἄλλαι συγγενεῖς','the other female relatives; supplied form'],['οἰκοῦσιν','they live; contracted verb, supplied'],['ὀλίγος δὲ σῖτος','but little grain; δέ marks contrast']]
  },
  {
    greek:'ὁ Σωκράτης τὸν Ἀρίσταρχον βλέπει. «διὰ τί σκυθρωπὸς εἶ, ὦ Ἀρίσταρχε;» ὁ δὲ λέγει· «πολλαὶ γυναῖκες ἐν τῇ οἰκίᾳ εἰσίν. οἱ πολέμιοι τὴν γῆν ἔχουσιν. πῶς ἄρτον παρέχω;»',
    translation:'Socrates sees Aristarchus. “Why are you gloomy, Aristarchus?” He replies, “Many women are in the house. Our enemies hold the land. How can I provide bread?”',
    gloss:[['σκυθρωπὸς εἶ','you are gloomy'],['ὦ Ἀρίσταρχε','Aristarchus!; direct address'],['γυναῖκες','women; supplied third-declension form'],['οἱ πολέμιοι','the enemies'],['πῶς ἄρτον παρέχω;','How do I provide bread?; παρέχω is supplied']]
  },
  {
    greek:'ὁ Σωκράτης λέγει· «αἱ γυναῖκες ἱμάτια καλὰ ποιοῦσιν;» ὁ Ἀρίσταρχος λέγει· «ναί· καλῶς ποιοῦσιν.» ὁ Σωκράτης λέγει· «ἔριον φέρε. τὸ ἔργον αὐταῖς χρήσιμόν ἐστιν.»',
    translation:'Socrates asks, “Do the women make good clothes?” Aristarchus says, “Yes, they make them well.” Socrates says, “Bring wool. The work is useful to them.”',
    gloss:[['ἱμάτια','clothes; neuter plural'],['καλῶς','well; adverb describing how they work'],['ἔριον','wool'],['αὐταῖς','to them; supplied pronoun'],['χρήσιμόν ἐστιν','it is useful']]
  },
  {
    greek:'ὁ Ἀρίσταρχος ἔριον φέρει. ἐν τῇ οἰκίᾳ ἡ Μέλιττα, ἀδελφὴ τοῦ Ἀριστάρχου, τὸ ἔριον βλέπει. «τὸ ἔριον ἀγαθόν ἐστιν. τί λέγεις, ὦ Θάλεια;» ἡ Θάλεια, ἀδελφιδῆ τοῦ Ἀριστάρχου, λέγει· «ἐγὼ νήθω ταχέως.»',
    translation:'Aristarchus brings wool. At home Melitta, his sister, looks at it. “The wool is good. What do you say, Thaleia?” Thaleia, his niece, says, “I spin quickly.”',
    gloss:[['ἡ Μέλιττα','Melitta; an invented name for an unnamed sister'],['τί λέγεις, ὦ Θάλεια;','What do you say, Thaleia?'],['ἡ Θάλεια','Thaleia; an invented name for an unnamed niece'],['ἀδελφιδῆ τοῦ Ἀριστάρχου','Aristarchus’s niece; ἀδελφιδῆ is a supplied kinship word'],['νήθω','I spin wool'],['ταχέως','quickly; adverb, supplied as a whole word']]
  },
  {
    greek:'ἡ Μέλιττα λέγει· «σὺ μὲν ἔριον νήθεις, ἐγὼ δὲ ἱμάτιον ὑφαίνω. αἱ ἄλλαι τὰ ἱμάτια βλέπουσιν· τὰ καλὰ μένει, τὰ κακὰ πάλιν ὑφαίνομεν.» αἱ γυναῖκες τὴν γνώμην ἀκούουσιν καὶ τὸ ἔργον αὐταὶ διαιροῦσιν.',
    translation:'Melitta says, “You spin wool; I weave a garment. The others inspect the clothes: the good pieces stay; we weave the bad pieces again.” The women hear her proposal and divide the work themselves.',
    gloss:[['σὺ μὲν … ἐγὼ δὲ','you on one hand … I on the other; paired contrast'],['ὑφαίνω','I weave'],['τὰ καλὰ … τὰ κακὰ','the good pieces … the bad pieces; adjective used as a noun'],['πάλιν','again'],['τὴν γνώμην','the proposal or judgment'],['αὐταὶ διαιροῦσιν','they themselves divide; both forms supplied']]
  },
  {
    greek:'ἡ Θάλεια ταχέως νήθει· ἡ Μέλιττα καλῶς ὑφαίνει. αἱ ἄλλαι γυναῖκες τὰ μικρὰ καὶ τὰ μεγάλα ἱμάτια βλέπουσιν. «τὸ μικρὸν ἱμάτιον καλόν,» λέγει μία, «τὸ δὲ μέγα ἱμάτιον οὔπω καλόν.»',
    translation:'Thaleia spins quickly; Melitta weaves well. The other women inspect the small and large garments. “The small garment is good,” one says, “but the large garment is not yet good.”',
    gloss:[['νήθει','she spins'],['ὑφαίνει','she weaves'],['τὰ μικρὰ καὶ τὰ μεγάλα ἱμάτια','the small and large garments; note irregular μεγάλα'],['μία','one woman; supplied form'],['οὔπω','not yet']]
  },
  {
    greek:'ὕστερον πολλὰ ἱμάτια ἐν τῇ οἰκίᾳ ἐστίν. ὁ οἶκος νῦν ἄρτον ἔχει. ἡ Μέλιττα λέγει· «τὸ ἔριον οὐκ ἄρτος ἐστίν, ἀλλὰ τὸ καλὸν ἔργον ἄρτον φέρει.» ἡ Θάλεια τὴν ἀδελφὴν τοῦ Ἀριστάρχου ἀκούει καὶ γελᾷ.',
    translation:'Later there are many garments in the house, and the household now has bread. Melitta says, “Wool is not bread, but good work brings bread.” Thaleia hears Aristarchus’s sister and laughs.',
    gloss:[['ὕστερον','later'],['πολλὰ ἱμάτια','many garments; irregular πολύς in the neuter plural'],['ὁ οἶκος','the household'],['νῦν','now'],['γελᾷ','she laughs; contracted verb, supplied']]
  },
  {
    greek:'ὁ Ἀρίσταρχος τὰς γυναῖκας βλέπει. «ὑμεῖς καλῶς ἐργάζεσθε,» λέγει. ἡ δὲ Θάλεια λέγει· «ἡμεῖς ἐργαζόμεθα· σὺ δὲ τί ποιεῖς;» αἱ γυναῖκες γελῶσιν. ὁ Ἀρίσταρχος πρὸς τὸν Σωκράτην βαδίζει καὶ περὶ τοῦ οἴκου λέγει.',
    translation:'Aristarchus sees the women. “You work well,” he says. Thaleia replies, “We work; what do you do?” The women laugh. Aristarchus goes to Socrates and tells him about the household.',
    gloss:[['ἐργάζεσθε','you all work; middle-form verb supplied'],['ἐργαζόμεθα','we work; middle-form verb supplied'],['γελῶσιν','they laugh; contracted verb, supplied'],['περὶ τοῦ οἴκου','about the household; περί with the genitive here']]
  }
];

const sections = [
  {id:'masculine-first',title:'1. First-Declension Masculine Nouns',practiceTopic:'masculine-first',body:[
    'Some masculine nouns end in -ας or -ης in the nominative but belong to the first declension. Their articles reveal masculine gender. Compare ὁ νεανίας, τοῦ νεανίου and ὁ πολίτης, τοῦ πολίτου; unlike the feminine nouns of Lesson 7, their genitive singular ends in -ου.',
    'The dative singular is νεανίᾳ or πολίτῃ, and the accusative singular is νεανίαν or πολίτην. In the plural, the article follows the familiar masculine pattern: οἱ, τοὺς, τῶν, τοῖς. The noun endings are -αι, -ας, -ῶν, -αις.',
    'This table is a form comparison. The main reading stays with Aristarchus’s female relatives; ὁ νεανίας and ὁ πολίτης are grammar models, not additional people in the episode.'
  ],table:{title:'ὁ νεανίας and ὁ πολίτης',headers:['Case','-ας singular','-ης singular','Plural example'],greekColumns:[1,2,3],rows:[['Nominative','ὁ νεανίας','ὁ πολίτης','οἱ νεανίαι'],['Accusative','τὸν νεανίαν','τὸν πολίτην','τοὺς νεανίας'],['Genitive','τοῦ νεανίου','τοῦ πολίτου','τῶν νεανιῶν'],['Dative','τῷ νεανίᾳ','τῷ πολίτῃ','τοῖς νεανίαις']]},checks:[{prompt:'Why is ὁ νεανίας masculine?',answer:'Its article is ὁ, and its genitive singular is τοῦ νεανίου.'}],examples:[{greek:'ὁ νεανίας τὸ ἔριον φέρει.',english:'The young man brings the wool.'}]},
  {id:'feminine-second',title:'2. Feminine Nouns of the Second Declension',practiceTopic:'feminine-second',body:[
    'Lesson 7 met ἡ ὁδός, the road to Eleusis. Its -ος ending looks like many masculine second-declension nouns, yet its article is feminine. Decline the noun like a second-declension -ος noun while keeping feminine articles and adjectives.',
    'The genitive and dative singular are τῆς ὁδοῦ and τῇ ὁδῷ. The plural is αἱ ὁδοί, τὰς ὁδούς, τῶν ὁδῶν, ταῖς ὁδοῖς. The article is your reliable case and gender clue.',
    'The story moves from the literal road of Lesson 7 to a household seeking a way forward. This is an English thematic connection; the reading does not claim that Xenophon used ὁδός as a metaphor in this episode.'
  ],table:{title:'ἡ ὁδός, ὁδοῦ',headers:['Case','Singular','Plural'],greekColumns:[1,2],rows:[['Nominative','ἡ ὁδός','αἱ ὁδοί'],['Accusative','τὴν ὁδόν','τὰς ὁδούς'],['Genitive','τῆς ὁδοῦ','τῶν ὁδῶν'],['Dative','τῇ ὁδῷ','ταῖς ὁδοῖς']]},checks:[{prompt:'Why is τὴν ὁδόν feminine?',answer:'The feminine article τὴν marks its gender even though the noun has a second-declension ending.'}],examples:[{greek:'ἡ ὁδὸς μακρά ἐστιν.',english:'The road is long.'}]},
  {id:'adjective-agreement',title:'3. Describing People, Wool, and Clothes',practiceTopic:'adjective-agreement',body:[
    'A regular first/second-declension adjective such as καλός, καλή, καλόν changes to agree with its noun in gender, number, and case. In the reading, ἱμάτια καλά means good clothes: both words are neuter plural nominative or accusative by form.',
    'Compare τὸ καλὸν ἱμάτιον, τὴν καλὴν οἰκίαν, and τὸν καλὸν νεανίαν. The endings need not be identical across different declensions; the case, gender, and number must match.',
    'An adjective can also stand without a repeated noun when the context supplies it: τὰ καλά means the good pieces in the women’s inspection of garments.'
  ],table:{title:'καλός, καλή, καλόν in useful phrases',headers:['Phrase','Agreement','Meaning'],greekColumns:[0],rows:[['τὸ καλὸν ἱμάτιον','neuter singular accusative','the good garment'],['τὴν καλὴν οἰκίαν','feminine singular accusative','the good house'],['τὸν καλὸν νεανίαν','masculine singular accusative','the good young man'],['τὰ καλὰ ἱμάτια','neuter plural accusative','the good garments']]},checks:[{prompt:'What does καλά agree with in τὰ καλὰ ἱμάτια?',answer:'It agrees with ἱμάτια: neuter plural in the same case.'}],examples:[{greek:'αἱ γυναῖκες τὰ καλὰ ἱμάτια βλέπουσιν.',english:'The women inspect the good garments.'}]},
  {id:'irregular-adjectives',title:'4. Two High-Frequency Adjectives: μέγας and πολύς',practiceTopic:'irregular-adjectives',body:[
    'μέγας, μεγάλη, μέγα means large or great. πολύς, πολλή, πολύ means much or many. Their nominative singular forms do not follow καλός, καλή, καλόν exactly, so learn their three gender forms together.',
    'The reading uses τὰ μεγάλα ἱμάτια and πολλὰ ἱμάτια. These are neuter plural forms. Also notice πολλαὶ γυναῖκες and πολλοὶ ἄνθρωποι: adjective and noun match gender and number.',
    'Only the forms used here are production targets. Other case forms of these irregular adjectives will be supplied when they appear in later readings.'
  ],table:{title:'Basic forms for size and quantity',headers:['Meaning','Masculine singular','Feminine singular','Neuter singular','Neuter plural'],greekColumns:[1,2,3,4],rows:[['large','μέγας','μεγάλη','μέγα','μεγάλα'],['much / many','πολύς','πολλή','πολύ','πολλά']]},checks:[{prompt:'Why does πολλὰ describe ἱμάτια?',answer:'Both are neuter plural.'}],examples:[{greek:'πολλὰ ἱμάτια ἐν τῇ οἰκίᾳ ἐστίν.',english:'Many garments are in the house.'}]},
  {id:'adverbs',title:'5. How the Work Is Done: Adverbs',practiceTopic:'adverbs',body:[
    'An adjective describes a noun: καλὸν ἱμάτιον, a good garment. An adverb describes an action: καλῶς ὑφαίνει, she weaves well. Many adverbs formed from first/second-declension adjectives end in -ως.',
    'The reading contrasts καλῶς (well) with ταχέως (quickly). Learn ταχέως as a word; it does not come from the καλός pattern. An adverb does not change to match the worker’s gender, number, or case.',
    'Ask “what is being described?” If it is the garment, choose an adjective. If it is the weaving, choose an adverb.'
  ],table:{title:'Adjective or adverb?',headers:['Greek','What it describes','Meaning'],greekColumns:[0],rows:[['καλὸν ἱμάτιον','a noun: ἱμάτιον','a good garment'],['καλῶς ὑφαίνει','a verb: ὑφαίνει','she weaves well'],['ταχέως νήθει','a verb: νήθει','she spins quickly']]},checks:[{prompt:'What does καλῶς describe in καλῶς ὑφαίνει?',answer:'It describes how she weaves, so it is an adverb.'}],examples:[{greek:'ἡ Μέλιττα καλῶς ὑφαίνει.',english:'Melitta weaves well.'}]}
];

const lesson = {
  id:'lesson-8',number:8,title:'A Household Finds a Way',greekTitle:'Ἔριον καὶ ἔργον',
  scope:'First-declension masculine and second-declension feminine nouns; adjective agreement; μέγας and πολύς; adverbs',
  theme:'Women’s textile work and household survival in Xenophon, Memorabilia 2.7',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-8-household-banner-v3.png',alt:'Four Athenian women work together with wool, a hand spindle, an upright weighted loom, and finished cloth; open courtyard space at left leaves the basket carrier visible beside the title',caption:'The women’s individual identities and this working scene are a reconstruction based on Xenophon’s account.'},
  pages:[{page:1,slug:'lesson-8-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-8-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-8-page-3',title:'Work and Survival in Athens',template:'culture'}],
  vocabulary:[
    vocab('Nouns',[['ἡ οἰκία','house, household','οἰκία, οἰκίας, ἡ'],['ἡ ἀδελφή','sister','ἀδελφή, ἀδελφῆς, ἡ'],['τὸ ἔριον','wool','ἔριον, ἐρίου, τό'],['τὸ ἔργον','work, task','ἔργον, ἔργου, τό'],['τὸ ἱμάτιον','garment, clothing','ἱμάτιον, ἱματίου, τό'],['ὁ σῖτος','grain','σῖτος, σίτου, ὁ'],['ἡ ὁδός','road, way','ὁδός, ὁδοῦ, ἡ'],['ὁ νεανίας','young man; grammar model','νεανίας, νεανίου, ὁ','reading vocabulary'],['ὁ πολίτης','citizen; grammar model','πολίτης, πολίτου, ὁ','reading vocabulary']]),
    vocab('Verbs',[['ποιέω','make','ποιέω'],['νήθω','spin wool','νήθω'],['ὑφαίνω','weave','ὑφαίνω'],['φέρω','carry, bring','φέρω'],['βλέπω','see, inspect','βλέπω']]),
    vocab('Describing and connecting',[['καλός, καλή, καλόν','good, fine','καλός, καλή, καλόν'],['μέγας, μεγάλη, μέγα','large, great','μέγας, μεγάλη, μέγα'],['πολύς, πολλή, πολύ','much, many','πολύς, πολλή, πολύ'],['ὀλίγος, ὀλίγη, ὀλίγον','little, few','ὀλίγος, ὀλίγη, ὀλίγον'],['καλῶς','well','καλῶς'],['ταχέως','quickly','ταχέως'],['ὕστερον','later','ὕστερον'],['νῦν','now','νῦν']])
  ],
  reading:{title:'Ἔριον καὶ ἔργον',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'Time has passed since the trip to Eleusis. Athens has endured the Peloponnesian War and, early in that war, a devastating plague. After Athens surrendered in 404 BCE, the oligarchic rulers known as the Thirty Tyrants took power with Spartan backing. Their opponents gathered at Piraeus, and civil conflict divided the city. In this turmoil, opponents hold Aristarchus’s land and his sisters, nieces, and cousins crowd into his home. Socrates asks what skills the women already have.',
    'The household crisis, Socrates’ advice to Aristarchus, the purchase of wool, the women’s work, and their later teasing complaint about his idleness come from Xenophon, Memorabilia 2.7. The passage does not give the women names or record their individual conversations. Melitta, Thaleia, their planning dialogue, and Xenophon’s placement of the scene within this course sequence are reconstructions.',
    'The Greek keeps the present-tense narrative used in earlier lessons. Blue glosses support proper names, kinship terms, contractions, middle-form verbs, and other forms beyond this lesson’s production targets.'
  ],paragraphs:paragraphs.map(p=>({greek:p.greek,gloss:p.gloss.map(([greek,english])=>({greek,english}))})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:'Xenophon, Memorabilia 2.7. The women’s names and direct speech are course reconstruction. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0208%3Abook%3D2',notesMarkdown:'Source-based retelling with reconstructed women’s voices. The Greek present tense is pedagogical; Xenophon does not date this conversation precisely or place Xenophon at it.'},
  wordStudy:{label:'Word Study — Wool, Work, and a Way Forward',blocks:[{title:'A noun’s article matters',practiceTopic:'word-study',body:[
    'The road from Lesson 7 was ἡ ὁδός. Its article says feminine even though its -ος ending resembles many masculine nouns. Compare ὁ οἶκος, the household, and ἡ ὁδός, the road. Read the article and noun together.',
    'The core pair ἔριον (wool) and ἔργον (work) names material and skilled activity. Xenophon says Aristarchus bought wool after Socrates urged him to use the women’s existing abilities. The women’s specific plan and words in our reading are imagined.',
    'The English title “finds a way” makes a thematic link to ὁδός. It is not a quotation or a claim about Xenophon’s wording in Memorabilia 2.7.'
  ],display:[{greek:'ἡ ὁδός',english:'the road; feminine second declension'},{greek:'τὸ ἔριον',english:'the wool; material'},{greek:'τὸ ἔργον',english:'the work; skilled activity'},{greek:'καλῶς ὑφαίνει',english:'she weaves well; adverb with a verb'}]}]},
  grammar:{intro:'Lesson 7 completed first-declension feminine patterns and introduced ἡ ὁδός as a reading word. Lesson 8 adds masculine first-declension and feminine second-declension nouns, then uses adjectives and adverbs to describe textile work and its results.',objectives:[
    'Recognize and form the case forms of first-declension masculine nouns in -ας and -ης.',
    'Decline ἡ ὁδός with feminine articles and second-declension noun endings.',
    'Match a regular first/second-declension adjective to its noun in gender, number, and case.',
    'Use the high-frequency forms of μέγας and πολύς that appear in the reading.',
    'Distinguish an adjective describing a thing from an adverb describing an action.'
  ],sections,summary:{title:'Grammar Summary',items:['First-declension masculine: ὁ νεανίας, τοῦ νεανίου and ὁ πολίτης, τοῦ πολίτου.','Feminine second-declension: ἡ ὁδός, τῆς ὁδοῦ, τῇ ὁδῷ, τὴν ὁδόν.','An adjective agrees with its noun in gender, number, and case: τὰ καλὰ ἱμάτια.','Learn μέγας, μεγάλη, μέγα and πολύς, πολλή, πολύ together; the reading uses μεγάλα and πολλά.','An adverb describes a verb: καλῶς ὑφαίνει, she weaves well.']}},
  culture:{title:'Textile Work and Household Survival',banner:{image:'assets/lesson-8-textile-banner.png',alt:'Reconstructed Athenian courtyard with women spinning wool, weaving at an upright weighted loom, and examining fabric',caption:'A visual reconstruction of spinning and weaving; the people and household details are imagined, and the small hanging clay weights represent archaeological loom weights.',credit:'Original illustration generated for Learn Greek with Xenophon (2026); historical reconstruction, not an ancient artifact.'},body:[
    'In Memorabilia 2.7, Xenophon describes Aristarchus distressed during political upheaval. His sisters, nieces, and cousins have come into his household; he says there are fourteen people apart from enslaved members. Enemies control his land, and income from his property in town has also disappeared. Socrates proposes that the household use work the women already know how to do.',
    'Aristarchus borrows money to begin, buys wool, and reports that the women work productively and that the household’s mood improves. Xenophon does not name the women, quote their planning, describe their exact division of tasks, or tell us who sold each finished garment. The reading gives them imagined choices and speech so learners can see skilled workers rather than only hear men discuss them.',
    'Textile making involved preparing wool, spinning thread, and weaving cloth. A sixth-century Attic lekythos in the Metropolitan Museum shows women with hand spindles and a loom; it is earlier than this episode but helps identify the equipment. Surviving clay loom weights provide further physical evidence for upright weighted looms. The illustrations here are reconstructions, not photographs of Aristarchus’s home.',
    'This story is also evidence of limits. Socrates addresses Aristarchus, and Aristarchus controls the borrowing and purchase in Xenophon’s version. The women’s competence is essential to the outcome, yet their own words are absent. Giving them dialogue in a lesson can reveal that absence, provided the reconstruction stays clearly labeled.',
    'The passage ends with a joke at Aristarchus’s expense: he reports that the women consider him the only idle person in the household. Socrates answers with a fable about a watchdog’s protective role. Students can ask whose work Xenophon makes visible, whose judgment he reports indirectly, and how a household responds when war disrupts ordinary income.'
  ],sections:[{title:'War, Plague, and the Return of Democracy',body:[
    'From 431 to 404 BCE, Athens fought Sparta and its allies in the Peloponnesian War. Early in the war, a devastating epidemic struck Athens in 430 BCE. Thucydides, who survived it, describes widespread illness and death. The plague came decades before Aristarchus’s crisis; Xenophon does not connect this household to any particular illness.',
    'After Athens surrendered in 404 BCE, an oligarchic board of Thirty took control with Spartan backing. The rulers later known as the Thirty Tyrants executed and expelled opponents and seized property. Democratic opponents gathered at Piraeus and fought those holding the city. This is the civil strife, or stasis, that forms the setting of Aristarchus’s complaint.',
    'Aristarchus says many people fled to Piraeus, while sisters, nieces, and cousins left behind came to him. He also says opponents held his land. Xenophon does not say that Aristarchus himself fled, identify his political allegiance, or date the conversation precisely.',
    'After further fighting and a negotiated settlement in 403 BCE, democracy returned to Athens. An amnesty aimed to limit reprisals, with exceptions for leading officials of the oligarchy. The city’s political recovery provides a wider frame for Xenophon’s smaller story of a household finding work and food.'
  ]}],questions:[{prompt:'What crisis does Aristarchus report?',answer:'Female relatives have joined a crowded household while conflict has cut off income from land and city property.'},{prompt:'What material does Aristarchus obtain after Socrates’ advice?',answer:'He obtains money and buys wool for the women’s textile work.'},{prompt:'Which parts of the reading are reconstructed?',answer:'The women’s names, individual speech, and exact planning and division of tasks.'},{prompt:'What evidence helps us picture textile work?',answer:'Xenophon’s account, ancient images of spinning and weaving, and surviving loom weights.'}],review:{title:'Before the Final Quiz',items:['Explain the time jump after Eleusis and identify the documented core of Memorabilia 2.7.','Decline ὁ νεανίας and ἡ ὁδός with their articles.','Explain why καλά agrees with ἱμάτια and why καλῶς describes ὑφαίνει.','Tell which women’s actions are supported by Xenophon and which details this lesson reconstructs.']},sources:[
    {title:'Thucydides, History of the Peloponnesian War 2.47–54 (the plague)',url:'https://www.livius.org/sources/content/thucydides-historian/the-plague/'},
    {title:'Xenophon, Hellenica 2.2–4 (defeat, the Thirty, and restoration)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C001%3A2'},
    {title:'Constitution of the Athenians 34–40 (the Thirty and democratic restoration)',url:'https://www.livius.org/sources/content/aristotle/constitution-of-the-athenians/the-regime-of-the-thirty/'},
    {title:'Xenophon, Memorabilia 2.7 (Perseus Digital Library)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0208%3Abook%3D2'},
    {title:'The Metropolitan Museum of Art, Women in Classical Greece',url:'https://www.metmuseum.org/de/essays/women-in-classical-greece'},
    {title:'The Metropolitan Museum of Art, Attic lekythos showing women spinning and weaving',url:'https://www.metmuseum.org/art/collection/search/253348'},
    {title:'The Metropolitan Museum of Art, Greek terracotta loom weight',url:'https://www.metmuseum.org/art/collection/search/252524'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-9',title:'What Makes a Good Friend?',fallbackUrl:'lesson.html?lesson=9&page=1'},contentRevision:'lesson-8-household-history-v2',previousLesson:{id:'lesson-7',title:'The Road to Eleusis',fallbackUrl:'lesson.html?lesson=7&page=1'}
};

function question(id,category,topic,prompt,correct,wrong,why){
  if(wrong.length!==3 || new Set([correct,...wrong]).size!==4) throw new Error(`Bad choices: ${id}`);
  const options=[correct,...wrong], shift=Number(id.match(/\d+(?!.*\d)/)?.[0]||0)%4;
  return {id,type:'multiple-choice',...(topic?{topic}:{}),category,prompt,choices:Array.from({length:4},(_,i)=>{const n=(i-shift+4)%4;return {text:options[n],correct:n===0,feedback:`${n===0?'Correct':'Review'}: ${why}`};})};
}
const core=[];
function add(topic,prompt,correct,a,b,c,why){core.push({topic,prompt,correct,wrong:[a,b,c],why});}
// Word study: the article, material, work, and documented/reconstructed boundary.
add('word-study','What does ἔριον mean?','wool','work','grain','road','ἔριον is wool, the material bought for the household.');
add('word-study','What does ἔργον mean?','work or task','wool','road','garment','ἔργον means work or task.');
add('word-study','Which article goes with ὁδός?','ἡ','ὁ','τό','οἱ','ὁδός is feminine: ἡ ὁδός.');
add('word-study','Which article goes with οἶκος?','ὁ','ἡ','τό','αἱ','οἶκος is masculine: ὁ οἶκος.');
add('word-study','Which phrase means “the wool”?','τὸ ἔριον','τὸ ἔργον','ἡ ὁδός','ὁ οἶκος','τὸ ἔριον means the wool.');
add('word-study','Which phrase means “the work”?','τὸ ἔργον','τὸ ἔριον','ἡ οἰκία','τὸ ἱμάτιον','τὸ ἔργον means the work.');
add('word-study','What does ὕστερον signal at the beginning of the reading?','a later time','a command','a question','a place name','ὕστερον means later and marks the time jump.');
add('word-study','Which is the dictionary citation for the feminine road?','ὁδός, ὁδοῦ, ἡ','ὁδός, ὁδοῦ, ὁ','οἶκος, οἴκου, ὁ','οἰκία, οἰκίας, ἡ','The final ἡ shows that ὁδός is feminine.');
add('word-study','Which word names a garment?','ἱμάτιον','ἔριον','ἔργον','σῖτος','ἱμάτιον means garment.');
add('word-study','Which detail is supplied by Xenophon’s account?','Aristarchus buys wool.','Melitta names each task.','Thaleia tests a garment.','Xenophon travels with the women.','Xenophon says wool was purchased.');
add('word-study','Which detail is a labeled reconstruction?','the women’s individual planning dialogue','the purchase of wool','Socrates’ advice to Aristarchus','the household’s crowded state','Xenophon does not preserve the women’s individual planning dialogue.');
add('word-study','Why is “finds a way” in the English title a theme rather than a quotation?','Xenophon does not use that wording in this account.','The road to Eleusis is the setting of this story.','The women do not work with wool.','The source is a modern novel.','The title is a thematic English connection, not Xenophon’s wording.');

const masc=[['nominative singular of νεανίας','ὁ νεανίας','τὸν νεανίαν','τοῦ νεανίου','τῷ νεανίᾳ'],['accusative singular of νεανίας','τὸν νεανίαν','ὁ νεανίας','τοῦ νεανίου','οἱ νεανίαι'],['genitive singular of νεανίας','τοῦ νεανίου','τὸν νεανίαν','τῷ νεανίᾳ','τῶν νεανιῶν'],['dative singular of νεανίας','τῷ νεανίᾳ','τοῦ νεανίου','τὸν νεανίαν','τοῖς νεανίαις'],['nominative plural of νεανίας','οἱ νεανίαι','τοὺς νεανίας','τῶν νεανιῶν','τοῖς νεανίαις'],['accusative plural of νεανίας','τοὺς νεανίας','οἱ νεανίαι','τῶν νεανιῶν','τῷ νεανίᾳ'],['genitive plural of νεανίας','τῶν νεανιῶν','τοῦ νεανίου','τοῖς νεανίαις','τοὺς νεανίας'],['dative plural of νεανίας','τοῖς νεανίαις','τῷ νεανίᾳ','τῶν νεανιῶν','οἱ νεανίαι']];
masc.forEach(([n,correct,a,b,c])=>add('masculine-first',`Which phrase is ${n}?`,correct,a,b,c,`${correct} is ${n}.`));
add('masculine-first','Which genitive singular belongs to ὁ πολίτης?','τοῦ πολίτου','τῆς πολίτης','τὸν πολίτην','τῷ πολίτῃ','First-declension masculine ὁ πολίτης has genitive τοῦ πολίτου.');
add('masculine-first','Which dative singular belongs to ὁ πολίτης?','τῷ πολίτῃ','τοῦ πολίτου','τὸν πολίτην','οἱ πολῖται','The dative singular is τῷ πολίτῃ.');
add('masculine-first','What marks νεανίας as masculine?','its article ὁ','its ending -ας alone','the English word young','its plural -αι','The article ὁ identifies masculine gender.');
add('masculine-first','What is distinctive about the genitive singular of first-declension masculine nouns here?','it ends in -ου','it ends in -ης','it ends in -αις','it has no article','νεανίου and πολίτου have -ου in the genitive singular.');

const road=[['nominative singular','ἡ ὁδός','τὴν ὁδόν','τῆς ὁδοῦ','τῇ ὁδῷ'],['accusative singular','τὴν ὁδόν','ἡ ὁδός','τῆς ὁδοῦ','αἱ ὁδοί'],['genitive singular','τῆς ὁδοῦ','τῇ ὁδῷ','τὴν ὁδόν','τῶν ὁδῶν'],['dative singular','τῇ ὁδῷ','τῆς ὁδοῦ','τὴν ὁδόν','ταῖς ὁδοῖς'],['nominative plural','αἱ ὁδοί','τὰς ὁδούς','τῶν ὁδῶν','ταῖς ὁδοῖς'],['accusative plural','τὰς ὁδούς','αἱ ὁδοί','τῆς ὁδοῦ','τῇ ὁδῷ'],['genitive plural','τῶν ὁδῶν','τῆς ὁδοῦ','ταῖς ὁδοῖς','τὰς ὁδούς'],['dative plural','ταῖς ὁδοῖς','τῇ ὁδῷ','τῶν ὁδῶν','αἱ ὁδοί']];
road.forEach(([n,correct,a,b,c])=>add('feminine-second',`Which form of ὁδός is ${n}?`,correct,a,b,c,`${correct} is ${n}.`));
add('feminine-second','Why is ὁδός feminine despite its -ος ending?','its article is ἡ','all -ος nouns are feminine','its article is ὁ','it is plural','The article ἡ identifies its feminine gender.');
add('feminine-second','Which phrase means “on the road” after ἐπί with a dative?','ἐπὶ τῇ ὁδῷ','ἐπὶ τὴν ὁδόν','ἐπὶ τῆς ὁδοῦ','ἐπὶ αἱ ὁδοί','ἐπὶ τῇ ὁδῷ uses the dative singular.');
add('feminine-second','What ending does ὁδός use in the genitive singular?','-ου','-ης','-ας','-αι','τῆς ὁδοῦ has the second-declension genitive -ου.');
add('feminine-second','What should you check first when an -ος noun may be feminine?','its article or dictionary citation','its English translation only','the preceding verb ending','the sentence length','The article or dictionary citation identifies its gender.');

add('adjective-agreement','What does καλά describe in τὰ καλὰ ἱμάτια?','the garments','the weaving action','the household','Socrates','καλά agrees with neuter plural ἱμάτια.');
add('adjective-agreement','Which phrase means “the good garment”?','τὸ καλὸν ἱμάτιον','ἡ καλὴ ἱμάτιον','ὁ καλὸς ἱμάτιον','τὰ καλὰ ἱμάτιον','ἱμάτιον is neuter singular, so use τὸ καλὸν.');
add('adjective-agreement','Which phrase means “the good house” as direct object?','τὴν καλὴν οἰκίαν','τὸ καλὸν οἰκίαν','τὴν καλὸν οἰκίαν','ἡ καλὴ οἰκίαν','οἰκίαν is feminine accusative singular.');
add('adjective-agreement','Which phrase means “the good young man” as direct object?','τὸν καλὸν νεανίαν','τὴν καλὴν νεανίαν','τὸ καλὸν νεανίαν','ὁ καλὸς νεανίαν','νεανίαν is masculine accusative singular.');
add('adjective-agreement','Which adjective agrees with ἱμάτια?','καλά','καλός','καλή','καλόν','ἱμάτια is neuter plural, matching καλά.');
add('adjective-agreement','Which adjective agrees with γυναῖκες?','καλαί','καλοί','καλά','καλή','γυναῖκες is feminine plural, matching καλαί.');
add('adjective-agreement','In τὰ καλὰ ἱμάτια, what are the gender and number?','neuter plural','masculine singular','feminine singular','masculine plural','Both καλὰ and ἱμάτια are neuter plural.');
add('adjective-agreement','What does τὰ καλά mean when the garments are already understood?','the good pieces','she works well','the large house','the good woman','An adjective can stand for the understood good garments.');
add('adjective-agreement','Do matching adjective and noun always have identical letter endings?','No; they must match gender, number, and case.','Yes; every ending must be spelled alike.','No; adjectives never inflect.','Yes; only the article changes.','Agreement is in gender, number, and case, not necessarily identical letters.');
add('adjective-agreement','Which phrase is feminine nominative singular?','ἡ καλὴ οἰκία','τὸ καλὸν ἱμάτιον','ὁ καλὸς νεανίας','τὰ καλὰ ἱμάτια','ἡ καλὴ οἰκία is feminine nominative singular.');
add('adjective-agreement','Which phrase is neuter accusative plural?','τὰ καλὰ ἱμάτια','τὸ καλὸν ἱμάτιον','τὴν καλὴν οἰκίαν','τὸν καλὸν νεανίαν','τὰ καλὰ ἱμάτια is neuter accusative plural.');
add('adjective-agreement','Which word describes a noun in καλὸν ἱμάτιον?','καλόν','καλῶς','νήθει','ὑφαίνει','καλόν is an adjective describing ἱμάτιον.');

add('irregular-adjectives','Which is the feminine singular of μέγας?','μεγάλη','μέγα','μεγάλα','πολλή','The feminine singular is μεγάλη.');
add('irregular-adjectives','Which is the neuter singular of μέγας?','μέγα','μεγάλη','μεγάλα','μέγας','The neuter singular is μέγα.');
add('irregular-adjectives','Which is the neuter plural of μέγας?','μεγάλα','μέγα','μεγάλη','μέγας','The neuter plural is μεγάλα.');
add('irregular-adjectives','Which is the feminine singular of πολύς?','πολλή','πολύ','πολλά','πολύς','The feminine singular is πολλή.');
add('irregular-adjectives','Which is the neuter singular of πολύς?','πολύ','πολλή','πολλά','πολύς','The neuter singular is πολύ.');
add('irregular-adjectives','Which is the neuter plural of πολύς?','πολλά','πολύ','πολλή','πολύς','The neuter plural is πολλά.');
add('irregular-adjectives','Which means “many garments”?','πολλὰ ἱμάτια','πολλὴ ἱμάτια','πολὺ ἱμάτια','πολλοὶ ἱμάτια','ἱμάτια is neuter plural and takes πολλά.');
add('irregular-adjectives','Which means “large garments”?','μεγάλα ἱμάτια','μεγάλη ἱμάτια','μέγα ἱμάτια','μέγας ἱμάτια','ἱμάτια is neuter plural and takes μεγάλα.');
add('irregular-adjectives','Which means “many women”?','πολλαὶ γυναῖκες','πολλοὶ γυναῖκες','πολλὰ γυναῖκες','πολλὴ γυναῖκες','γυναῖκες is feminine plural and takes πολλαί.');
add('irregular-adjectives','Which means “many people” with ἄνθρωποι?','πολλοὶ ἄνθρωποι','πολλαὶ ἄνθρωποι','πολλὰ ἄνθρωποι','πολὺ ἄνθρωποι','ἄνθρωποι is masculine plural and takes πολλοί.');
add('irregular-adjectives','What does μεγάλα describe in τὰ μεγάλα ἱμάτια?','the size of the garments','the speed of spinning','the quantity of wool','the age of the women','μεγάλα describes large garments.');
add('irregular-adjectives','What does πολλά describe in πολλὰ ἱμάτια?','the number of garments','the quality of weaving','the size of each garment','the speed of spinning','πολλά describes many garments.');

add('adverbs','Which means “she weaves well”?','καλῶς ὑφαίνει','καλὸν ὑφαίνει','καλὴ ὑφαίνει','καλοί ὑφαίνει','καλῶς describes how she weaves.');
add('adverbs','Which means “she spins quickly”?','ταχέως νήθει','καλὸν νήθει','ταχεῖα νήθει','μέγα νήθει','ταχέως is the adverb quickly.');
add('adverbs','What does καλῶς modify in καλῶς ὑφαίνει?','the verb ὑφαίνει','the noun ἱμάτιον','the noun οἰκία','the article ἡ','καλῶς describes the weaving action.');
add('adverbs','What does καλόν modify in καλὸν ἱμάτιον?','the noun ἱμάτιον','the verb ὑφαίνει','the adverb ταχέως','the verb νήθει','καλόν describes the garment.');
add('adverbs','Which word is an adverb?','καλῶς','καλός','καλή','καλόν','καλῶς means well and describes an action.');
add('adverbs','Which word is an adjective?','καλόν','καλῶς','ταχέως','ὕστερον','καλόν is an adjective form of καλός.');
add('adverbs','Does καλῶς change to agree with Melitta?','No; an adverb does not agree with a noun.','Yes; it becomes καλή.','Yes; it becomes καλά.','Yes; it becomes καλόν.','Adverbs do not agree in gender, number, or case.');
add('adverbs','Which asks how the woman works?','καλῶς','ἔριον','οἰκία','ἱμάτιον','καλῶς tells how an action is done.');
add('adverbs','Which phrase describes the quality of a garment?','καλὸν ἱμάτιον','καλῶς ὑφαίνει','ταχέως νήθει','ὕστερον ἔρχεται','καλὸν is an adjective describing ἱμάτιον.');
add('adverbs','Which phrase describes the manner of weaving?','καλῶς ὑφαίνει','καλὸν ἱμάτιον','καλὴ οἰκία','μέγα ἱμάτιον','καλῶς modifies ὑφαίνει.');
add('adverbs','How should ταχέως be learned in this lesson?','as the whole word “quickly”','as a case form of ὁδός','as the feminine of καλός','as a plural noun','ταχέως is a supplied adverb learned as a word.');
add('adverbs','Which pairing is correct?','καλόν describes a noun; καλῶς describes a verb.','καλῶς describes a noun; καλόν describes a verb.','Both are nouns.','Both are verb endings.','Adjectives describe nouns; adverbs describe actions.');

const topics=['word-study','masculine-first','feminine-second','adjective-agreement','irregular-adjectives','adverbs'];
if(topics.some(t=>core.filter(q=>q.topic===t).length!==12)) throw new Error('Each topic needs 12 questions');
const topicQuestions=core.map((q,i)=>question(`lesson-8-practice-${String(i+1).padStart(3,'0')}`,'Grammar',q.topic,q.prompt,q.correct,q.wrong,q.why));
const grammarExercises=topics.flatMap((topic,ti)=>[1,3,6,9].map((offset,j)=>{const q=core[ti*12+offset];return question(`lesson-8-grammar-exercise-${String(ti*4+j+1).padStart(2,'0')}`,'Grammar',topic,`Grammar exercise ${ti*4+j+1}: ${q.prompt}`,q.correct,q.wrong,q.why);}));
const requiredVocab=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
const vocabPractice=requiredVocab.flatMap((v,i)=>{
  const others=requiredVocab.filter(x=>x.english!==v.english);
  const pick=steps=>steps.map(n=>others[(i+n)%others.length]);
  return [question(`lesson-8-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,pick([1,5,9]).map(x=>x.english),`${v.greek} means ${v.english}.`),
    question(`lesson-8-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which Greek entry means “${v.english}”?`,v.greek,pick([2,6,10]).map(x=>x.greek),`${v.greek} means ${v.english}.`)];
});
const quiz=[];
const final=(category,prompt,correct,a,b,c,why)=>quiz.push(question(`lesson-8-final-${String(quiz.length+1).padStart(2,'0')}`,category,null,prompt,correct,[a,b,c],why));
final('Reading','What problem faces Aristarchus’s household?','many relatives and little income','a failed sea voyage','a lost horse','a dispute about a festival','Conflict has crowded the household and cut off income.');
final('Reading','Who gives Aristarchus practical advice?','Socrates','Clinias','Proxenus','Myrrhine','Socrates suggests using the women’s existing skills.');
final('Reading','What does Aristarchus bring to the household?','wool','bronze armor','a horse','a grain ship','He brings wool for textile work.');
final('Reading','What does Melitta propose in the reconstructed conversation?','divide the textile tasks and inspect the garments','leave Athens for Delphi','sell the loom','stop making clothing','Melitta proposes tasks and quality checks.');
final('Reading','What does Thaleia say she can do?','spin wool quickly','command cavalry','write an oracle','build a ship','Thaleia says she can spin quickly.');
final('Reading','Which part of the women’s scene is invented?','their names and individual dialogue','the purchase of wool','Aristarchus’s distress','Socrates’ advice','Xenophon does not record their names or individual words.');
for(const v of [requiredVocab[0],requiredVocab[2],requiredVocab[3],requiredVocab[4],requiredVocab[10],requiredVocab[17]]){
  const i=requiredVocab.indexOf(v), others=requiredVocab.filter(x=>x.english!==v.english); final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);
}
for(const [ti,indices] of [[1,[2,5]],[2,[2,7]],[3,[1,6]],[4,[2,6]],[5,[0,3]],[0,[6,10]]]){
  for(const j of indices){const q=core[ti*12+j];final('Grammar',q.prompt,q.correct,...q.wrong,q.why);}
}
final('Greek World','Which text supplies the core Aristarchus episode?','Xenophon’s Memorabilia 2.7','Homer’s Iliad 1','Plato’s Republic 10','Herodotus’ Histories 1','Memorabilia 2.7 preserves the Socrates–Aristarchus episode.');
final('Greek World','What does the source say Aristarchus bought?','wool','silver cups','horses','papyrus rolls','Aristarchus bought wool.');
final('Greek World','What is known about the women’s own words?','Xenophon does not preserve their individual dialogue.','Xenophon records every word.','Their letters survive.','They speak in the Anabasis.','Their individual words are absent from the source.');
final('Greek World','Which artifact helps explain the illustrated loom?','surviving clay loom weights','a Roman printing press','a medieval spinning wheel','a bronze cannon','Clay loom weights are physical evidence for weighted looms.');
final('Greek World','What work does the Metropolitan Museum’s Attic lekythos show?','women spinning and weaving','men training horses','a sea battle','an Eleusinian initiation','The lekythos shows women spinning and weaving.');
final('Greek World','How does Xenophon report the women teased Aristarchus?','They called him the only idle member of the household.','They said he wove too quickly.','They asked him to go to Delphi.','They refused to speak to him.','Aristarchus reports their complaint about his idleness.');

lesson.activities={
  'vocab-flashcards':{title:'Lesson 8 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 8 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 8 words in short rounds. Reading-only grammar models remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 8 Grammar Flashcards',cards:[{prompt:'ὁ νεανίας → genitive singular',answer:'τοῦ νεανίου'},{prompt:'ὁ πολίτης → genitive singular',answer:'τοῦ πολίτου'},{prompt:'ἡ ὁδός → dative singular',answer:'τῇ ὁδῷ'},{prompt:'ἡ ὁδός → accusative plural',answer:'τὰς ὁδούς'},{prompt:'μέγας / μεγάλη / μέγα',answer:'large or great: masculine / feminine / neuter'},{prompt:'πολύς / πολλή / πολύ',answer:'much or many: masculine / feminine / neuter'},{prompt:'καλὸν ἱμάτιον',answer:'a good garment; adjective describes noun'},{prompt:'καλῶς ὑφαίνει',answer:'she weaves well; adverb describes verb'}]},
  'topic-practice':{title:'Lesson 8 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice gives immediate feedback and does not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 8 Grammar Exercises',description:'Declension variants, adjective agreement, and adverbs',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-8-grammar-exercises-v1',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 8 Final Quiz — A Household Finds a Way',description:'Reading, vocabulary, grammar, and household work in Xenophon',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-8-final-quiz-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 8 and continue to Lesson 9.',questions:quiz}
};

fs.writeFileSync(at('content/lessons/lesson-8.json'),JSON.stringify(lesson,null,2)+'\n');
let fallback=fs.readFileSync(at('lesson-data.js'),'utf8');
const lesson8Manifest=`{ number: 8, title: "A Household Finds a Way", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-8-household-banner-v3.png", bannerAlt: "Athenian women spinning wool, weaving, and examining cloth together", grammarFocus: "Declension variants, adjective agreement, and adverbs", greekPhrase: "Ἔριον καὶ ἔργον", sourceAnchor: "Xenophon, Memorabilia 2.7; women’s dialogue reconstructed", cultureLead: "Women’s textile skills and a household’s response to civil strife." }`;
if(!/\{ number: 8, title: "[^"]+",[^\n]+\},/.test(fallback)) throw new Error('Lesson 8 manifest not found');
fallback=fallback.replace(/\{ number: 8, title: "[^"]+",[^\n]+\},/,lesson8Manifest+',');
fallback=fallback.replace(/\{ number: 9, title: "[^"]+",[^\n]+\},/,'{ number: 9, title: "What Makes a Good Friend?", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/module-1-sophia-banner.jpeg", bannerAlt: "A classical Athenian scene reserved for a Socratic friendship lesson", grammarFocus: "Alpha-contract verbs and elision", greekPhrase: "τίς ἐστὶ φίλος ἀγαθός;", sourceAnchor: "Xenophon, Memorabilia 2.6; reconstructed group discussion", cultureLead: "Socrates asks what makes a good friend." },');
const generated=`  // BEGIN GENERATED LESSON 8\n  LESSONS["lesson-8"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 8`;
if(fallback.includes('  // BEGIN GENERATED LESSON 8')) fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 8[\s\S]*?  \/\/ END GENERATED LESSON 8/g,generated);
else fallback=fallback.replace('  // END GENERATED LESSON 7',`  // END GENERATED LESSON 7\n${generated}`);
fs.writeFileSync(at('lesson-data.js'),fallback);
let outline=fs.readFileSync(at('script.js'),'utf8');
outline=outline.replace(/\{ id: "lesson-8", title: "[^"]+", grammar: "[^"]+" \}/,'{ id: "lesson-8", title: "A Household Finds a Way", grammar: "Declension variants, adjectives, and adverbs" }');
outline=outline.replace(/\{ id: "lesson-9", title: "[^"]+", grammar: "[^"]+" \}/,'{ id: "lesson-9", title: "What Makes a Good Friend?", grammar: "Alpha-contract verbs and elision" }');
fs.writeFileSync(at('script.js'),outline);

const sql=`-- Publish the complete Lesson 8 household reading and learning activities.\nBEGIN;\nDO $lesson8$\nDECLARE\n  patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;\n  lesson_id_value uuid;\n  segment_id_value uuid;\n  reading_id_value uuid;\n  old_content jsonb;\n  block_kind text;\n  group_item jsonb;\n  vocab_item jsonb;\n  vocab_id uuid;\n  vocab_order integer := 0;\n  paragraph_item jsonb;\n  gloss_item jsonb;\n  paragraph_order integer := 0;\n  gloss_order integer;\nBEGIN\n  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-8' FOR UPDATE;\n  SELECT content INTO old_content FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;\n  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN RETURN; END IF;\n  IF old_content IS NULL THEN\n    INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1);\n  ELSE\n    UPDATE public.lesson_content_overrides SET content=patch,version=version+1,updated_at=now() WHERE lesson_id=lesson_id_value;\n  END IF;\n  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)\n  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;\n  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-8-page-1';\n  SELECT id INTO reading_id_value FROM public.readings WHERE lesson_id=lesson_id_value ORDER BY sort_order,id LIMIT 1;\n  IF reading_id_value IS NULL THEN\n    INSERT INTO public.readings (lesson_id,segment_id,title,sort_order) VALUES (lesson_id_value,segment_id_value,patch #>> '{reading,title}',1) RETURNING id INTO reading_id_value;\n  END IF;\n  UPDATE public.readings SET segment_id=segment_id_value,title=patch #>> '{reading,title}',\n    greek_text=(SELECT string_agg(p->>'greek',E'\\n\\n' ORDER BY n) FROM jsonb_array_elements(patch #> '{reading,paragraphs}') WITH ORDINALITY t(p,n)),\n    translation=patch #>> '{reading,translation}',notes_markdown=patch #>> '{reading,notesMarkdown}',source_citation=patch #>> '{reading,sourceCitation}'\n  WHERE id=reading_id_value;\n  DELETE FROM public.reading_glosses WHERE lesson_id=lesson_id_value AND reading_id=reading_id_value;\n  FOR paragraph_item IN SELECT value FROM jsonb_array_elements(patch #> '{reading,paragraphs}') LOOP\n    gloss_order:=0;\n    FOR gloss_item IN SELECT value FROM jsonb_array_elements(paragraph_item->'gloss') LOOP\n      INSERT INTO public.reading_glosses (lesson_id,reading_id,greek,english,lemma,display_form,part_of_speech,morphology,source,sort_order)\n      VALUES (lesson_id_value,reading_id_value,gloss_item->>'greek',gloss_item->>'english',gloss_item->>'greek',gloss_item->>'greek','Reading gloss','{}'::jsonb,'lesson_reading_gloss',paragraph_order*1000+gloss_order);\n      gloss_order:=gloss_order+1;\n    END LOOP;\n    paragraph_order:=paragraph_order+1;\n  END LOOP;\n  DELETE FROM public.lesson_vocabulary WHERE lesson_id=lesson_id_value;\n  FOR group_item IN SELECT value FROM jsonb_array_elements(patch->'vocabulary') LOOP\n    FOR vocab_item IN SELECT value FROM jsonb_array_elements(group_item->'items') LOOP\n      INSERT INTO public.vocabulary_items (lemma,display_form,gloss,part_of_speech,dictionary_form,morphology)\n      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_8_household'))\n      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;\n      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';\n      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);\n      vocab_order:=vocab_order+1;\n    END LOOP;\n  END LOOP;\n  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)\n  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;\n  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','enrichment','activities'] LOOP\n    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()\n    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;\n    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id\n      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN\n      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)\n      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),\n        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 WHEN 'enrichment' THEN 5 ELSE 6 END);\n    END IF;\n  END LOOP;\nEND\n$lesson8$;\nUPDATE public.lesson_content_overrides o\nSET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('A Household Finds a Way'::text),true),version=o.version+1,updated_at=now()\nWHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-7')\n  AND o.content #>> '{nextLesson,id}'='lesson-8'\n  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'A Household Finds a Way';\nCOMMIT;\n`;
// Keep the already-published initial migration immutable; later revisions use separate migrations.
if (process.argv.includes('--rewrite-initial-migration')) fs.writeFileSync(at('db/migrations/0027_publish_lesson_8.sql'),sql);
console.log(`Built Lesson 8 content: ${paragraphs.length} reading paragraphs; ${requiredVocab.length} required words; ${topicQuestions.length} topic practice; ${grammarExercises.length} grammar exercises; ${quiz.length} final quiz.`);
