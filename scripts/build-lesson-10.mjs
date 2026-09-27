// Deterministic Lesson 10 content, fallback, and publication migration.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const at=name=>path.join(root,name);
const vocab=(category,items)=>({category,items:items.map(([greek,english,dictionaryForm,status='required vocabulary'])=>({
  greek,english,dictionaryForm,status,lemma:greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u,'').split(',')[0],audioPlaceholder:true
}))});
const paragraphs=[
  {greek:'ὁ Ξενοφῶν ἐν Ἀθήναις ἐστίν. γράμμα παρὰ Προξένου, παλαιοῦ φίλου, ἥκει. ὁ Ξενοφῶν τὸ γράμμα λαμβάνει καὶ ἀναγιγνώσκει.',
   translation:'Xenophon is in Athens. A letter arrives from Proxenus, an old friend. Xenophon takes the letter and reads it.',
   gloss:[['ἐν Ἀθήναις','in Athens; place name'],['παρὰ Προξένου','from Proxenus; proper name'],['παλαιοῦ φίλου','of an old friend; genitive phrase'],['ἥκει','has arrived; supplied verb'],['λαμβάνει','takes; supplied verb'],['ἀναγιγνώσκει','reads; supplied verb']]},
  {greek:'ὁ Προξένος γράφει· «ὦ Ξενοφῶν, ἐλθὲ πρὸς ἐμέ. Κῦρος ἐμοὶ φίλος ἐστίν. ἐγώ σε φίλον τῷ Κύρῳ ποιήσω. σὺ ἐμοὶ φίλος εἶ.»',
   translation:'Proxenus writes: “Xenophon, come to me. Cyrus is my friend. I will make you a friend of Cyrus. You are my friend.”',
   gloss:[['ὁ Προξένος','Proxenus; name'],['ὦ Ξενοφῶν','Xenophon!; direct address'],['ἐλθὲ','come!; supplied command'],['πρὸς ἐμέ','to me; emphatic pronoun'],['Κῦρος','Cyrus the Younger; name'],['ἐμοὶ','to me; supplied dative pronoun'],['σε','you; object of ποιήσω'],['τῷ Κύρῳ','to Cyrus; proper name'],['ποιήσω','I will make; supplied future verb']]},
  {greek:'ὁ Ξενοφῶν τὸ γράμμα κατατίθησιν. «ὁ φίλος μου με καλεῖ,» λέγει· «ἡ ὁδὸς μακρά ἐστιν. ἡ δὲ ἐμὴ πόλις Ἀθῆναί ἐστιν.»',
   translation:'Xenophon sets down the letter. “My friend calls me,” he says, “but the journey is long, and my city is Athens.”',
   gloss:[['κατατίθησιν','sets down; supplied verb'],['ὁ φίλος μου','my friend; μου follows the noun'],['με','me; object of καλεῖ'],['καλεῖ','calls, invites; supplied verb'],['ἡ ὁδὸς','the road or journey'],['ἡ δὲ ἐμὴ πόλις','but my city; possessive adjective agrees with πόλις'],['Ἀθῆναί','Athens; plural place name']]},
  {greek:'αὕτη ἡ ὁδὸς καλὴ δοκεῖ, ἀλλὰ καὶ κίνδυνον ἔχει. ὁ Κῦρος τοῖς Λακεδαιμονίοις ἐν τῷ πολέμῳ ἐβοήθησε. οἱ Ἀθηναῖοι τούτου οὐκ ἐπιλανθάνονται.',
   translation:'This journey seems appealing, but it also carries danger. Cyrus helped the Spartans during the war. The Athenians do not forget this.',
   gloss:[['αὕτη ἡ ὁδὸς','this journey; feminine demonstrative'],['καλὴ δοκεῖ','seems attractive; supplied expression'],['κίνδυνον ἔχει','carries a risk'],['τοῖς Λακεδαιμονίοις','the Spartans; supplied plural dative'],['ἐν τῷ πολέμῳ','during the war'],['ἐβοήθησε','he helped; supplied past tense'],['τούτου οὐκ ἐπιλανθάνονται','they do not forget this; supplied genitive and middle verb']]},
  {greek:'ὁ Ξενοφῶν πρὸς τὸν Σωκράτην βαδίζει καὶ τὸ γράμμα αὐτῷ δείκνυσιν. «ὁ παλαιὸς φίλος μου με καλεῖ,» φησίν· «τί σὺ λέγεις περὶ ταύτης τῆς ὁδοῦ;»',
   translation:'Xenophon goes to Socrates and shows him the letter. “My old friend calls me,” he says. “What do you say about this journey?”',
   gloss:[['πρὸς τὸν Σωκράτην','to Socrates; proper name'],['βαδίζει','walks, goes'],['αὐτῷ','to him; supplied dative pronoun'],['δείκνυσιν','shows; supplied verb'],['ὁ παλαιὸς φίλος μου','my old friend'],['φησίν','he says; supplied verb'],['τί','what?; question word'],['περὶ ταύτης τῆς ὁδοῦ','about this journey; supplied genitive phrase']]},
  {greek:'ὁ Σωκράτης ἀκούει καὶ λέγει· «ὁ φίλος σου ἀγαθός ἐστιν. ἀλλ᾽ ὁ Κῦρος τοῖς Λακεδαιμονίοις ἐβοήθησε. οἱ Ἀθηναῖοι ἴσως σε αἰτιάσονται.»',
   translation:'Socrates listens and says: “Your friend is good. But Cyrus helped the Spartans. The Athenians may accuse you.”',
   gloss:[['ὁ φίλος σου','your friend; σου follows the noun'],['ἀλλ᾽','but; elision from ἀλλά'],['τοῖς Λακεδαιμονίοις','the Spartans'],['ἐβοήθησε','he helped; supplied past tense'],['ἴσως','perhaps'],['σε','you; object pronoun'],['αἰτιάσονται','they will accuse; supplied future middle form']]},
  {greek:'«ἡ σὴ πατρὶς Ἀθῆναί ἐστιν. μὴ ταχὺ κρῖνε. πρὸς Δελφοὺς πορεύου καὶ τὸν Ἀπόλλωνα περὶ τῆς ὁδοῦ ἐρώτα.» ὁ Ξενοφῶν ἀκούει.',
   translation:'“Your homeland is Athens. Do not decide quickly. Go to Delphi and consult Apollo about the journey.” Xenophon listens.',
   gloss:[['ἡ σὴ πατρὶς','your homeland; feminine possessive adjective'],['μὴ ταχὺ κρῖνε','do not decide quickly; supplied command'],['πρὸς Δελφοὺς','to Delphi; place name'],['πορεύου','go; supplied middle command'],['τὸν Ἀπόλλωνα','Apollo; proper name'],['περὶ τῆς ὁδοῦ','about the journey'],['ἐρώτα','ask; command from ἐρωτάω']]},
  {greek:'ὁ Ξενοφῶν τὸ γράμμα αὖθις βλέπει. ὁ φίλος αὐτὸν καλεῖ· ἡ δὲ πόλις αὐτοῦ ἐνταῦθα ἐστίν. «τοῦτο τὸ γράμμα περὶ ἐμοῦ ἐστίν,» λέγει· «νῦν πρὸς Δελφοὺς πορεύομαι.»',
   translation:'Xenophon looks again at the letter. His friend calls him, but his city is here. “This letter concerns me,” he says. “Now I am going to Delphi.”',
   gloss:[['αὖθις','again'],['αὐτὸν','him; object pronoun'],['ἡ δὲ πόλις αὐτοῦ','but his city'],['ἐνταῦθα','here'],['τοῦτο τὸ γράμμα','this letter; neuter demonstrative'],['περὶ ἐμοῦ','about me; emphatic genitive'],['πρὸς Δελφοὺς','to Delphi'],['πορεύομαι','I go; supplied middle form']]}
];

const sections=[
 {id:'personal-pronouns',title:'1. Pronouns: Who Speaks, Who Is Addressed?',practiceTopic:'personal-pronouns',body:[
   'ἐγώ means “I,” and σύ means “you” when one person is addressed. The verb ending can already show the person, so Greek often uses these pronouns for emphasis or contrast: ἐγώ σε φίλον ποιήσω, “I will make you a friend.”',
   'The object forms are με (“me”) and σε (“you”). The short possessive forms μου (“my, of me”) and σου (“your, of you”) appear with nouns. These are forms of personal pronouns, not adjectives.',
   'In the reading, Proxenus says ἐγώ σε ... ποιήσω, while Xenophon says ὁ φίλος μου με καλεῖ. Follow the speaker and the case of each pronoun.'
 ],table:{title:'Core first- and second-person forms',headers:['Job','First person','Second person'],greekColumns:[1,2],rows:[['subject','ἐγώ — I','σύ — you'],['direct object','με — me','σε — you'],['possessor','μου — my','σου — your']]},checks:[{prompt:'In ὁ φίλος μου με καλεῖ, who receives the action?',answer:'με means “me”; μου means “my” and belongs with φίλος.'}],examples:[{greek:'ἐγώ σε καλέω· σὺ με ἀκούεις.',english:'I call you; you hear me.'}]},
 {id:'genitive-possession',title:'2. Possession with μου and σου',practiceTopic:'genitive-possession',body:[
   'The small genitive pronoun usually follows the noun it owns: ὁ φίλος μου, “my friend”; ἡ πόλις σου, “your city”; τὸ γράμμα σου, “your letter.” The noun keeps its own case according to its job in the sentence.',
   'The owner does not change the gender of the noun. Compare ὁ φίλος μου, ἡ ὁδός μου, and τὸ γράμμα μου: masculine, feminine, and neuter things can all belong to “me.”',
   'When reading, keep the possessor attached to the noun. In ὁ φίλος σου ἀγαθός ἐστιν, it is your friend who is good; σου is not the subject.'
 ],table:{title:'A noun plus its possessor',headers:['Greek','Meaning','Thing owned'],greekColumns:[0],rows:[['ὁ φίλος μου','my friend','masculine'],['ἡ ὁδός σου','your road','feminine'],['τὸ γράμμα μου','my letter','neuter'],['ἡ πόλις αὐτοῦ','his city','feminine']]},checks:[{prompt:'Where does σου belong in ὁ φίλος σου?',answer:'It follows φίλος and means “your”; together they form “your friend.”'}],examples:[{greek:'ὁ φίλος μου τὸ γράμμα σου βλέπει.',english:'My friend sees your letter.'}]},
 {id:'possessive-adjectives',title:'3. Possessive Adjectives Agree with the Noun',practiceTopic:'possessive-adjectives',body:[
   'Greek can also say “my” with ἐμός, ἐμή, ἐμόν and “your” with σός, σή, σόν. Unlike μου and σου, these are adjectives: their endings agree with the thing owned in gender, number, and case.',
   'The reading has ἡ ἐμὴ πόλις, “my city,” and ἡ σὴ πατρίς, “your homeland.” The feminine forms ἐμή and σή agree with feminine πόλις and πατρίς. The owner may be a man, but the ending follows the noun.',
   'The article normally stands before an attributive possessive adjective: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα. Compare the simpler postposed genitive ὁ φίλος μου.'
 ],table:{title:'Singular nominative possessive adjectives',headers:['Thing owned','My','Your'],greekColumns:[1,2],rows:[['masculine friend','ὁ ἐμὸς φίλος','ὁ σὸς φίλος'],['feminine road','ἡ ἐμὴ ὁδός','ἡ σὴ ὁδός'],['neuter letter','τὸ ἐμὸν γράμμα','τὸ σὸν γράμμα']]},checks:[{prompt:'Why is ἐμή feminine in ἡ ἐμὴ πόλις?',answer:'It agrees with the feminine noun πόλις, not with the sex of the owner.'}],examples:[{greek:'ἡ ἐμὴ πόλις Ἀθῆναί ἐστιν.',english:'My city is Athens.'}]},
 {id:'demonstratives',title:'4. This Friend, This Road, This Letter',practiceTopic:'demonstratives',body:[
   'οὗτος, αὕτη, τοῦτο mean “this” for masculine, feminine, and neuter nouns. The reading uses αὕτη ἡ ὁδός, “this journey,” and τοῦτο τὸ γράμμα, “this letter.”',
   'A demonstrative stands outside the article-plus-noun group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα. The sequence ὁ οὗτος φίλος is not the ordinary way to say “this friend.”',
   'The same forms can stand alone as pronouns. The reading has τοῦτο τὸ γράμμα, and a supplied genitive form, τούτου, means “of this fact” with the verb ἐπιλανθάνονται. The latter phrase refers to Cyrus’s aid to Sparta.'
 ],table:{title:'Point to the person, road, or letter',headers:['Gender','Greek','Meaning'],greekColumns:[1],rows:[['masculine','οὗτος ὁ φίλος','this friend'],['feminine','αὕτη ἡ ὁδός','this journey'],['neuter','τοῦτο τὸ γράμμα','this letter'],['alone','τοῦτο','this fact']]},checks:[{prompt:'What does τοῦτο point to in τοῦτο τὸ γράμμα?',answer:'The neuter noun γράμμα, “letter.”'}],examples:[{greek:'αὕτη ἡ ὁδὸς μακρά ἐστιν.',english:'This journey is long.'}]},
 {id:'adjective-placement',title:'5. A Good Friend or a Friend Is Good?',practiceTopic:'adjective-placement',body:[
   'An adjective inside the article-and-noun group describes which person or thing: ὁ παλαιὸς φίλος, “the old friend”; ὁ ἀγαθὸς φίλος, “the good friend.” A second attributive pattern is ὁ φίλος ὁ παλαιός.',
   'An adjective outside that group can make a statement about the noun: ὁ φίλος ἀγαθός ἐστιν, “the friend is good.” The difference in position helps you distinguish description from a claim.',
   'In the reading, ὁ παλαιὸς φίλος μου identifies Proxenus, while ὁ φίλος σου ἀγαθός ἐστιν is Socrates’ judgment. Possessive adjectives such as ἐμός and σός follow the attributive pattern.'
 ],table:{title:'Where the adjective stands',headers:['Greek','Pattern','Meaning'],greekColumns:[0],rows:[['ὁ ἀγαθὸς φίλος','attributive','the good friend'],['ὁ φίλος ὁ ἀγαθός','attributive','the good friend'],['ὁ φίλος ἀγαθός ἐστιν','predicate','the friend is good'],['ἡ ἐμὴ πόλις','attributive possession','my city']]},checks:[{prompt:'What changes between ὁ ἀγαθὸς φίλος and ὁ φίλος ἀγαθός ἐστιν?',answer:'The first identifies a good friend; the second states that the friend is good.'}],examples:[{greek:'ὁ παλαιὸς φίλος μου με καλεῖ.',english:'My old friend calls me.'}]}
];

const lesson={
  id:'lesson-10',number:10,title:'The Letter from Proxenus',greekTitle:'Τὸ παρὰ Προξένου γράμμα',
  scope:'Personal pronouns, possession, possessive adjectives, demonstratives, and adjective placement',
  theme:'A friend’s invitation, Athens, and a consequential choice',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-10-letter-banner.png',alt:'A bearded Xenophon studies a papyrus letter while Socrates speaks with him in a reconstructed Athenian courtyard',caption:'Xenophon weighs Proxenus’s invitation while consulting Socrates. The scene and letter’s visible form are reconstruction.'},
  pages:[{page:1,slug:'lesson-10-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-10-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-10-page-3',title:'Cyrus, Persia, and Athens',template:'culture'}],
  vocabulary:[
    vocab('People and choices',[['ὁ φίλος','friend','φίλος, φίλου, ὁ'],['ἡ πόλις','city, city-state','πόλις, πόλεως, ἡ'],['ἡ πατρίς','homeland','πατρίς, πατρίδος, ἡ'],['ὁ Κῦρος','Cyrus the Younger','Κῦρος, Κύρου, ὁ','reading vocabulary'],['ὁ Προξένος','Proxenus','Προξένος, Προξένου, ὁ','reading vocabulary'],['ὁ κίνδυνος','risk, danger','κίνδυνος, κινδύνου, ὁ'],['ὁ πόλεμος','war','πόλεμος, πολέμου, ὁ']]),
    vocab('Letters and travel',[['τὸ γράμμα','letter','γράμμα, γράμματος, τό'],['ἡ ὁδός','road, journey','ὁδός, ὁδοῦ, ἡ'],['γράφω','write','γράφω'],['καλέω','call, invite','καλέω'],['βαδίζω','walk, go','βαδίζω'],['ἀκούω','hear, listen','ἀκούω'],['ἐρωτάω','ask, consult','ἐρωτάω'],['πορεύομαι','go, travel','πορεύομαι','reading vocabulary']]),
    vocab('Pronouns and describing',[['ἐγώ / με / μου','I / me / my','ἐγώ'],['σύ / σε / σου','you / you / your','σύ'],['ἐμός, ἐμή, ἐμόν','my','ἐμός, ἐμή, ἐμόν'],['σός, σή, σόν','your','σός, σή, σόν'],['οὗτος, αὕτη, τοῦτο','this','οὗτος, αὕτη, τοῦτο'],['παλαιός, παλαιά, παλαιόν','old, longstanding','παλαιός, παλαιά, παλαιόν'],['μακρός, μακρά, μακρόν','long','μακρός, μακρά, μακρόν']])
  ],
  reading:{title:'Τὸ παρὰ Προξένου γράμμα',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'After the conversation about friendship, a friend’s invitation gives Xenophon a decision to make. Proxenus invites him to join Cyrus. A connection with Cyrus is attractive, but it could put an Athenian under suspicion after Cyrus’s aid to Sparta. Xenophon discusses the journey with Socrates.',
    'Source note: Xenophon, Anabasis 3.1.4–5 reports that Proxenus sent an invitation, promised to introduce Xenophon to Cyrus, and that Xenophon consulted Socrates after reading the letter. Socrates feared an accusation in Athens because Cyrus had supported Sparta, and he advised Xenophon to consult Apollo at Delphi. The source does not preserve the letter’s wording, say that Xenophon physically showed it to Socrates, or record their conversation word for word. Those details below are adapted dialogue and visual reconstruction.',
    'The Greek keeps the present-tense narrative used in earlier lessons, with a few source-based past and future forms clearly glossed. Blue glosses support proper names, supplied verbs, and forms beyond the production target. This lesson asks you to read pronouns, possessors, demonstratives, and adjective position inside a personal dilemma.'
  ],paragraphs:paragraphs.map(p=>({greek:p.greek,gloss:p.gloss.map(([greek,english])=>({greek,english}))})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:'Xenophon, Anabasis 3.1.4–5. Letter wording and extended dialogue are adapted. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3',notesMarkdown:'Proxenus’s invitation, the promise of an introduction to Cyrus, Socrates’ Athenian concern, and the Delphic advice are reported in Anabasis 3.1.4–5. The letter’s text, courtyard, physical handoff, and personal thoughts are course reconstruction.'},
  wordStudy:{label:'Word Study — A Friend, a Letter, a Choice',blocks:[{title:'What belongs to whom?',practiceTopic:'word-study',body:[
    'ὁ φίλος μου means “my friend”; ὁ φίλος σου means “your friend.” The small words μου and σου follow the noun. In the letter, Proxenus emphasizes ἐγώ (“I”) and σε (“you”), making his offer personal.',
    'τὸ γράμμα is a letter; ἡ ὁδός can be a road or a journey. The invitation moves from a friend’s letter to a long road, but Athens remains Xenophon’s city and homeland.',
    'Cyrus here is Cyrus the Younger, a Persian prince. He is not Cyrus the Great, the earlier founder of the empire. His name and the names of Proxenus and Delphi remain supported reading vocabulary.'
  ],display:[{greek:'ὁ φίλος μου',english:'my friend'},{greek:'ἡ σὴ ὁδός',english:'your journey'},{greek:'τοῦτο τὸ γράμμα',english:'this letter'},{greek:'ἡ ἐμὴ πόλις',english:'my city'}]}]},
  grammar:{intro:'Lesson 9 practiced compact dialogue. Lesson 10 uses the same speakers’ voices to ask who calls whom, whose city matters, and how Greek places describing words around a noun.',objectives:[
    'Distinguish subject, object, and possessive forms of ἐγώ and σύ.',
    'Read μου and σου after a noun as possession.',
    'Match ἐμός and σός to the gender of the thing owned.',
    'Read οὗτος, αὕτη, and τοῦτο beside nouns and alone.',
    'Distinguish an attributive adjective from a predicate statement.'
  ],sections,summary:{title:'Grammar Summary',items:['ἐγώ / με / μου = I / me / my; σύ / σε / σου = you / you / your.','A possessor can follow the noun: ὁ φίλος μου, ἡ πόλις σου, τὸ γράμμα μου.','A possessive adjective agrees with the thing owned: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα.','Demonstratives stand outside the article group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα.','ὁ ἀγαθὸς φίλος identifies a good friend; ὁ φίλος ἀγαθός ἐστιν says that the friend is good.']}},
  culture:{title:'Cyrus, Persia, and Athens',banner:{
    image:'assets/lesson-10-persian-guard.jpg',alt:'Achaemenid limestone relief of the head of a Persian guard from Persepolis, with headdress, curled beard, bow, and quiver',
    caption:'Head of a Persian guard, ca. 486–465 BCE, from Persepolis in Iran. This is an earlier Achaemenid relief, not a portrait of Cyrus the Younger.',
    credit:'The Metropolitan Museum of Art, object 55.121.3. Public Domain; image unmodified.',
    sourceUrl:'https://www.metmuseum.org/art/collection/search/324433',
    licenseUrl:'https://www.metmuseum.org/about-the-met/policies-and-documents/open-access'
  },body:[
    'Cyrus in this lesson is Cyrus the Younger, a Persian prince who later led the expedition Xenophon joined. He should not be confused with Cyrus the Great, who founded the Achaemenid Empire generations earlier. The empire stretched across western Asia and beyond, so service with Cyrus meant entering a political world much larger than one Greek city.',
    'For Xenophon, the invitation raised an Athenian problem. Xenophon says Socrates worried that friendship with Cyrus could provoke an accusation at Athens, because Cyrus was believed to have aided the Spartans during their war with Athens. That is the risk behind Socrates’ advice to consult Apollo; the reading’s private conversation gives a beginner-accessible shape to the concern.',
    'The stone relief above comes from Persepolis and shows an Achaemenid Persian guard. It belongs to the Persian world but predates Xenophon’s decision and does not show Cyrus, Proxenus, or a Greek mercenary. Its bow, quiver, and carefully carved dress help students see a Persian imperial visual tradition without treating the image as an illustration of the reported meeting.',
    'Greek writers are important witnesses to this period, but they wrote from particular viewpoints. Xenophon reports his own earlier choice retrospectively, after the expedition’s dangers were known. In this lesson, the source-backed facts and the reconstructed words are identified before the reading so students can keep both in view.'
  ],questions:[
    {prompt:'Which Cyrus appears in the reading?',answer:'Cyrus the Younger, a Persian prince, not Cyrus the Great.'},
    {prompt:'Why did Socrates worry about the invitation?',answer:'Athenians might accuse Xenophon for becoming a friend of Cyrus, who had aided Sparta in the war against Athens.'},
    {prompt:'What does the culture image actually show?',answer:'An earlier Achaemenid Persian guard relief from Persepolis, not Cyrus the Younger or Xenophon.'},
    {prompt:'What did Socrates advise Xenophon to do?',answer:'Consult Apollo at Delphi about the proposed journey.'}
  ],review:{title:'Before the Final Quiz',items:['Distinguish ἐγώ, με, and μου; then σύ, σε, and σου.','Explain two ways to say “my friend”: ὁ φίλος μου and ὁ ἐμὸς φίλος.','Read αὕτη ἡ ὁδός and τοῦτο τὸ γράμμα.','Explain why friendship with Cyrus might trouble Athenians, and what the relief can actually show.']},sources:[
    {title:'Xenophon, Anabasis 3.1.4–5 (Proxenus, Cyrus, Socrates)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3'},
    {title:'The Metropolitan Museum of Art, The Achaemenid Persian Empire',url:'https://www.metmuseum.org/de/essays/the-achaemenid-persian-empire-550-330-b-c'},
    {title:'The Metropolitan Museum of Art, Head of a Persian guard',url:'https://www.metmuseum.org/art/collection/search/324433'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-11',title:'The Question at Delphi',fallbackUrl:'lesson.html?lesson=11&page=1'},contentRevision:'lesson-10-proxenus-complete-v1',previousLesson:{id:'lesson-9',title:'What Makes a Good Friend?',fallbackUrl:'lesson.html?lesson=9&page=1'}
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
const rows={
  'word-study':[
    ['What is τὸ γράμμα?','a letter','a city','a road','a war','γράμμα is a letter.'],
    ['What can ἡ ὁδός mean here?','a road or journey','a letter','a homeland','a guard','ὁδός can name the journey.'],
    ['What is ἡ πατρίς?','a homeland','a friend','a risk','an invitation','πατρίς is a homeland.'],
    ['What does ὁ κίνδυνος mean?','risk or danger','friendship','the road','the letter','κίνδυνος is danger.'],
    ['What does καλέω mean?','I call or invite','I read','I write','I decide','καλέω means call or invite.'],
    ['What does γράφω mean?','I write','I go','I ask','I hear','γράφω means write.'],
    ['What does ἐρωτάω mean?','I ask or consult','I arrive','I accuse','I forget','ἐρωτάω means ask.'],
    ['What does βαδίζω mean?','I walk or go','I send','I remember','I read','βαδίζω means walk.'],
    ['Who is Proxenus in this reading?','Xenophon’s old friend','the Persian king','an Athenian accuser','Apollo’s priest','Proxenus sent the invitation.'],
    ['Who is Cyrus in this reading?','Cyrus the Younger','Cyrus the Great','an Athenian general','a Delphic priest','The invitation concerns Cyrus the Younger.'],
    ['What is ὁ πόλεμος?','the war','the letter','the friend','the city','πόλεμος means war.'],
    ['What does παλαιός mean of a friend here?','old or longstanding','wealthy','angry','foreign','παλαιός describes an old friend.']
  ],
  'personal-pronouns':[
    ['Which pronoun means “I” as subject?','ἐγώ','με','μου','σε','ἐγώ is the subject form.'],
    ['Which short form means “me” as object?','με','μου','ἐγώ','σου','με is the object form.'],
    ['Which pronoun means “you” as subject?','σύ','σε','σου','μου','σύ is the subject form.'],
    ['Which short form means “you” as object?','σε','σύ','σου','με','σε is the object form.'],
    ['What is the job of σε in ἐγώ σε καλέω?','direct object','subject','possessor','adjective','σε is the person called.'],
    ['What is the job of με in ὁ φίλος με καλεῖ?','direct object','subject','possessor','place name','με is the person called.'],
    ['What is the job of ἐγώ in ἐγώ σε καλέω?','subject','direct object','possessor','article','ἐγώ names the speaker who acts.'],
    ['What is the job of σύ in σὺ με ἀκούεις?','subject','direct object','possessor','adverb','σύ names the person addressed as subject.'],
    ['Which pair gives first-person subject and object?','ἐγώ / με','σύ / σε','ἐγώ / σου','μου / με','ἐγώ is I; με is me.'],
    ['Which pair gives second-person subject and object?','σύ / σε','ἐγώ / με','σύ / μου','σε / σου','σύ is you as subject; σε is you as object.'],
    ['In ἐγώ σε φίλον ποιήσω, who is made a friend?','the person addressed','the speaker','Socrates','Athens','σε is the person addressed.'],
    ['Which form in the reading means emphatic “me” after πρός?','ἐμέ','ἐγώ','μου','με','πρὸς ἐμέ means to me.']
  ],
  'genitive-possession':[
    ['What is ὁ φίλος μου?','my friend','your friend','his friend','this friend','μου means my.'],
    ['What is ὁ φίλος σου?','your friend','my friend','his friend','a good friend','σου means your.'],
    ['What is τὸ γράμμα μου?','my letter','your letter','this letter','his letter','μου gives the possessor.'],
    ['What is τὸ γράμμα σου?','your letter','my letter','his letter','that letter','σου means your.'],
    ['What is ἡ πόλις μου?','my city','your city','his city','this city','μου means my.'],
    ['What is ἡ πόλις σου?','your city','my city','his city','their city','σου means your.'],
    ['Where does μου usually stand in ὁ φίλος μου?','after the noun','before the article','inside the verb','after the sentence','The short possessor follows φίλος.'],
    ['Which word is the possessor in ὁ φίλος σου?','σου','ὁ','φίλος','none','σου identifies whose friend.'],
    ['What gender is ὁ φίλος μου?','masculine','feminine','neuter','plural only','The noun φίλος is masculine; the owner form does not change it.'],
    ['What gender is ἡ ὁδός μου?','feminine','masculine','neuter','plural only','ὁδός is feminine.'],
    ['Which phrase means “his city”?','ἡ πόλις αὐτοῦ','ἡ πόλις μου','ἡ πόλις σου','αὕτη ἡ πόλις','αὐτοῦ is his.'],
    ['In ὁ φίλος μου με καλεῖ, which form means “my”?','μου','με','ὁ','καλεῖ','μου marks possession; με is the object.']
  ],
  'possessive-adjectives':[
    ['Which phrase means “my friend” with an adjective?','ὁ ἐμὸς φίλος','ἡ ἐμὴ φίλος','τὸ ἐμὸν φίλος','ὁ σὸς φίλος','ἐμός agrees with masculine φίλος.'],
    ['Which phrase means “my road”?','ἡ ἐμὴ ὁδός','ὁ ἐμὸς ὁδός','τὸ ἐμὸν ὁδός','ἡ σὴ ὁδός','ἐμή agrees with feminine ὁδός.'],
    ['Which phrase means “my letter”?','τὸ ἐμὸν γράμμα','ὁ ἐμὸς γράμμα','ἡ ἐμὴ γράμμα','τὸ σὸν γράμμα','ἐμόν agrees with neuter γράμμα.'],
    ['Which phrase means “your friend” with an adjective?','ὁ σὸς φίλος','ἡ σὴ φίλος','τὸ σὸν φίλος','ὁ ἐμὸς φίλος','σός agrees with masculine φίλος.'],
    ['Which phrase means “your road”?','ἡ σὴ ὁδός','ὁ σὸς ὁδός','τὸ σὸν ὁδός','ἡ ἐμὴ ὁδός','σή agrees with feminine ὁδός.'],
    ['Which phrase means “your letter”?','τὸ σὸν γράμμα','ὁ σὸς γράμμα','ἡ σὴ γράμμα','τὸ ἐμὸν γράμμα','σόν agrees with neuter γράμμα.'],
    ['Why is ἐμή feminine in ἡ ἐμὴ πόλις?','It agrees with πόλις.','The owner is a woman.','It is a plural form.','It is an object pronoun.','Possessive adjectives agree with the thing owned.'],
    ['What does ἡ σὴ πατρίς mean?','your homeland','my homeland','his homeland','this homeland','σή agrees with feminine πατρίς and means your.'],
    ['Which adjective form agrees with feminine πόλις?','ἐμή','ἐμός','ἐμόν','ἐμοῦ','ἐμή is feminine nominative singular.'],
    ['Which adjective form agrees with neuter γράμμα?','σόν','σός','σή','σου','σόν is neuter nominative singular.'],
    ['Which pair both means “my friend”?','ὁ φίλος μου / ὁ ἐμὸς φίλος','ὁ φίλος σου / ὁ σὸς φίλος','ὁ φίλος μου / ὁ σὸς φίλος','ὁ ἐμὸς φίλος / ὁ φίλος σου','Both expressions identify my friend.'],
    ['What controls the ending of σός, σή, σόν?','the noun describing the thing owned','the owner’s sex','the verb tense','the next preposition','The ending agrees with the noun.']
  ],
  'demonstratives':[
    ['Which phrase means “this friend”?','οὗτος ὁ φίλος','αὕτη ἡ φίλος','τοῦτο τὸ φίλος','ὁ οὗτος φίλος','οὗτος agrees with masculine φίλος and stands outside the article group.'],
    ['Which phrase means “this journey”?','αὕτη ἡ ὁδός','οὗτος ὁ ὁδός','τοῦτο τὸ ὁδός','ἡ αὕτη ὁδός','αὕτη agrees with feminine ὁδός.'],
    ['Which phrase means “this letter”?','τοῦτο τὸ γράμμα','οὗτος ὁ γράμμα','αὕτη ἡ γράμμα','τὸ τοῦτο γράμμα','τοῦτο agrees with neuter γράμμα.'],
    ['What gender is οὗτος?','masculine','feminine','neuter','plural','οὗτος is masculine singular.'],
    ['What gender is αὕτη?','feminine','masculine','neuter','plural','αὕτη is feminine singular.'],
    ['What gender is τοῦτο?','neuter','feminine','masculine','plural','τοῦτο is neuter singular.'],
    ['Where does the demonstrative stand in τοῦτο τὸ γράμμα?','outside the article-noun group','between article and noun','inside the verb','after a possessor','τοῦτο stands before τὸ γράμμα.'],
    ['What can τοῦτο mean when it stands alone?','this fact','my letter','your friend','they','A demonstrative can stand alone as a pronoun.'],
    ['Which form points to feminine ἡ πόλις?','αὕτη','οὗτος','τοῦτο','ἐμός','αὕτη points to a feminine noun.'],
    ['Which form points to neuter τὸ γράμμα?','τοῦτο','οὗτος','αὕτη','σός','τοῦτο points to a neuter noun.'],
    ['Which order is normal for “this friend”?','οὗτος ὁ φίλος','ὁ οὗτος φίλος','ὁ φίλος μου','ὁ καλὸς φίλος','The demonstrative stands outside ὁ φίλος.'],
    ['What does αὕτη ἡ ὁδὸς μακρά ἐστιν mean?','This journey is long.','My letter is old.','Your friend is good.','The road is his.','αὕτη ἡ ὁδός is this journey.']
  ],
  'adjective-placement':[
    ['What does ὁ ἀγαθὸς φίλος mean?','the good friend','the friend is good','my friend','this friend','The adjective is inside the article-noun group.'],
    ['What does ὁ φίλος ἀγαθός ἐστιν mean?','the friend is good','the good friend','my good friend','this good friend','The adjective makes a statement after the noun.'],
    ['Which phrase is attributive?','ὁ παλαιὸς φίλος','ὁ φίλος παλαιός ἐστιν','ὁ φίλος ἐστίν','φίλος ἐστίν','The adjective is inside the article-noun group.'],
    ['Which sentence is predicate?','ὁ φίλος ἀγαθός ἐστιν','ὁ ἀγαθὸς φίλος','ὁ φίλος ὁ ἀγαθός','ὁ ἐμὸς φίλος','The sentence states that the friend is good.'],
    ['Which is another attributive order for “the good friend”?','ὁ φίλος ὁ ἀγαθός','ὁ φίλος ἀγαθός ἐστιν','ὁ φίλος μου','οὗτος ὁ φίλος','Repeated article marks the second attributive position.'],
    ['In ὁ παλαιὸς φίλος μου, what does παλαιός describe?','φίλος','μου','ὁ','the verb','παλαιός describes the friend.'],
    ['In ὁ φίλος σου ἀγαθός ἐστιν, what is said of the friend?','he is good','he is old','he is yours alone','he travels','ἀγαθός is the predicate.'],
    ['Which phrase means “the long journey”?','ἡ μακρὰ ὁδός','ἡ ὁδὸς μακρά ἐστιν','τὸ μακρὸν γράμμα','ὁ μακρὸς φίλος','μακρά agrees with feminine ὁδός inside the group.'],
    ['Which sentence means “the journey is long”?','ἡ ὁδὸς μακρά ἐστιν','ἡ μακρὰ ὁδός','ἡ ἐμὴ ὁδός','αὕτη ἡ ὁδός','μακρά is predicative with ἐστιν.'],
    ['Which phrase contains attributive possession?','ἡ ἐμὴ πόλις','ἡ πόλις ἐμή ἐστιν','ἡ πόλις μου','αὕτη ἡ πόλις','ἐμή stands in the article-adjective-noun group.'],
    ['What signals the predicate in ὁ φίλος ἀγαθός ἐστιν?','ἀγαθός stands outside ὁ φίλος','the article is absent from φίλος','φίλος is an object','the noun is plural','The adjective is outside the article-noun group.'],
    ['Which translation fits ὁ φίλος ὁ ἀγαθός?','the good friend','the friend is good','your friend','this friend','The repeated article gives an attributive expression.']
  ]
};
for(const [topic,items] of Object.entries(rows)) for(const [prompt,correct,a,b,c,why] of items) add(topic,prompt,correct,a,b,c,why);
const topics=['word-study','personal-pronouns','genitive-possession','possessive-adjectives','demonstratives','adjective-placement'];
if(topics.some(t=>bank.filter(q=>q.topic===t).length!==12)) throw new Error('Every Lesson 10 topic needs twelve questions');
const topicQuestions=bank.map((q,i)=>question(`lesson-10-practice-${String(i+1).padStart(3,'0')}`,'Grammar',q.topic,q.prompt,q.correct,q.wrong,q.why));
const grammarExercises=topics.slice(1).flatMap((topic,ti)=>[1,4,7,10].map((index,j)=>{
  const q=bank[(ti+1)*12+index];return question(`lesson-10-grammar-exercise-${String(ti*4+j+1).padStart(2,'0')}`,'Grammar',topic,q.prompt,q.correct,q.wrong,q.why);
}));
// Add one mixed review item per grammar section, keeping the same 24-item gate as Lesson 9.
for(const [i,q] of [bank[14],bank[27],bank[41],bank[53]].entries()){
  grammarExercises.push(question(`lesson-10-grammar-exercise-${String(21+i).padStart(2,'0')}`,'Grammar',q.topic,q.prompt,q.correct,q.wrong,q.why));
}
const requiredVocab=lesson.vocabulary.flatMap(g=>g.items).filter(v=>v.status==='required vocabulary');
const vocabPractice=requiredVocab.flatMap((v,i)=>{
  const others=requiredVocab.filter(x=>x.english!==v.english);
  const pick=steps=>steps.map(n=>others[(i+n)%others.length]);
  return [question(`lesson-10-vocab-${i+1}-meaning`,'Vocabulary','vocabulary',`What does ${v.greek} mean?`,v.english,pick([1,5,9]).map(x=>x.english),`${v.greek} means ${v.english}.`),
    question(`lesson-10-vocab-${i+1}-form`,'Vocabulary','vocabulary',`Which Greek entry means “${v.english}”?`,v.greek,pick([2,6,10]).map(x=>x.greek),`${v.greek} means ${v.english}.`)];
});
const quiz=[];
const final=(category,prompt,correct,a,b,c,why)=>quiz.push(question(`lesson-10-final-${String(quiz.length+1).padStart(2,'0')}`,category,null,prompt,correct,[a,b,c],why));
final('Reading','Who sends Xenophon the invitation?','Proxenus','Socrates','Cyrus the Great','Critobulus','Proxenus is Xenophon’s old friend and sender.');
final('Reading','What does Proxenus promise?','to introduce Xenophon to Cyrus','to make Xenophon an Athenian general','to buy him a house','to send him to Sparta','The invitation offers a connection to Cyrus.');
final('Reading','Why might the invitation endanger Xenophon in Athens?','Cyrus had aided Sparta against Athens','Proxenus had stolen a letter','Delphi was closed','Xenophon had lost his horse','Socrates worries about an accusation over Cyrus’s support for Sparta.');
final('Reading','Whom does Xenophon consult after reading the letter?','Socrates','Plato','Critobulus','Aristarchus','Xenophon discusses the journey with Socrates.');
final('Reading','What does Socrates advise?','consult Apollo at Delphi','leave immediately for Sardis','ignore the letter','ask the Athenian assembly to write back','Socrates recommends Delphi.');
final('Reading','What remains open at the end of the lesson?','how Xenophon will respond to the journey after Delphi','whether Proxenus wrote a letter','whether Athens exists','whether Socrates knows Xenophon','The reading ends as Xenophon turns toward Delphi.');
for(const v of [requiredVocab[2],requiredVocab[5],requiredVocab[7],requiredVocab[8],requiredVocab[15],requiredVocab[17]]){
  const i=requiredVocab.indexOf(v),others=requiredVocab.filter(x=>x.english!==v.english);
  final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);
}
for(const [ti,indices] of [[1,[0,2,8]],[2,[0,5,11]],[3,[1,4]],[4,[0,7]],[5,[0,3]]]){
  for(const j of indices){const q=bank[ti*12+j];final('Grammar',q.prompt,q.correct,...q.wrong,q.why);}
}
final('Greek World','Which Cyrus is Proxenus’s associate?','Cyrus the Younger','Cyrus the Great','the Athenian Cyrus','a Delphic priest','The lesson concerns Cyrus the Younger.');
final('Greek World','Which Greek city had Cyrus aided in the war against Athens?','Sparta','Thebes','Corinth','Delphi','Socrates fears Athens’s response to Cyrus’s aid to Sparta.');
final('Greek World','What does the culture-page relief show?','an Achaemenid Persian guard','Cyrus the Younger','Xenophon with Socrates','Proxenus writing','It shows a Persian guard from Persepolis.');
final('Greek World','Where did the relief come from?','Persepolis in Iran','Athens','Delphi','Paestum','The Met identifies its findspot as Persepolis.');
final('Greek World','Is the relief a portrait of Cyrus the Younger?','No; it predates him and shows a guard.','Yes; it names him.','Yes; Xenophon commissioned it.','No; it is from Rome.','The guard relief is earlier and does not portray Cyrus.');
final('Greek World','What can we say about the letter’s exact wording?','Xenophon does not preserve it.','Xenophon quotes it in full.','It is carved on the relief.','Socrates wrote it.','The lesson’s letter speech is adapted dialogue.');
if(quiz.length!==30) throw new Error(`Expected thirty final questions, got ${quiz.length}`);
lesson.activities={
  'vocab-flashcards':{title:'Lesson 10 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 10 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 10 words in short rounds. Reading-only words remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 10 Grammar Flashcards',cards:[{prompt:'ἐγώ / με / μου',answer:'I / me / my'},{prompt:'σύ / σε / σου',answer:'you / you / your'},{prompt:'ὁ φίλος μου',answer:'my friend'},{prompt:'ἡ σὴ ὁδός',answer:'your journey'},{prompt:'τοῦτο τὸ γράμμα',answer:'this letter'},{prompt:'ὁ ἀγαθὸς φίλος',answer:'the good friend'},{prompt:'ὁ φίλος ἀγαθός ἐστιν',answer:'the friend is good'}]},
  'topic-practice':{title:'Lesson 10 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice gives immediate feedback and does not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 10 Grammar Exercises',description:'Pronouns, possession, demonstratives, and adjective placement',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-10-grammar-exercises-v1',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 10 Final Quiz — The Letter from Proxenus',description:'Reading, vocabulary, grammar, and Cyrus’s Persian world',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-10-final-quiz-v1',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 10 and continue to Lesson 11.',questions:quiz}
};

fs.writeFileSync(at('content/lessons/lesson-10.json'),JSON.stringify(lesson,null,2)+'\n');
let fallback=fs.readFileSync(at('lesson-data.js'),'utf8');
const manifest='{ number: 10, title: "The Letter from Proxenus", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-10-letter-banner.png", bannerAlt: "A bearded Xenophon studies Proxenus’s letter while speaking with Socrates", grammarFocus: "Pronouns, possession, demonstratives, and adjective placement", greekPhrase: "Τὸ παρὰ Προξένου γράμμα", sourceAnchor: "Xenophon, Anabasis 3.1.4–5", cultureLead: "Cyrus the Younger, Persia, and the political risk for an Athenian." }';
const manifestPattern=/\{ number: 10, title: "[^"]+",[^\n]+\},/;
if(!manifestPattern.test(fallback)) throw new Error('Lesson 10 manifest not found');
fallback=fallback.replace(manifestPattern,manifest+',');
const generated=`  // BEGIN GENERATED LESSON 10\n  LESSONS["lesson-10"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 10`;
if(fallback.includes('  // BEGIN GENERATED LESSON 10')) fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 10[\s\S]*?  \/\/ END GENERATED LESSON 10/g,generated);
else fallback=fallback.replace('  // END GENERATED LESSON 9',`  // END GENERATED LESSON 9\n${generated}`);
fs.writeFileSync(at('lesson-data.js'),fallback);
const template=fs.readFileSync(at('db/migrations/0029_publish_lesson_9.sql'),'utf8');
let sql=template.replace(/patch jsonb := \$json\$[\s\S]*?\$json\$::jsonb;/,'patch jsonb := __LESSON_JSON__;')
  .replaceAll('lesson-9','lesson-10').replaceAll('lesson9','lesson10')
  .replaceAll('lesson_9_friendship','lesson_10_proxenus')
  .replaceAll('What Makes a Good Friend?','The Letter from Proxenus')
  .replace("WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-8')","WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-9')")
  .replace('__LESSON_JSON__',`$json$${JSON.stringify(lesson,null,2)}$json$::jsonb`)
  .replace('-- Publish the complete Lesson 9 friendship reading and learning activities.','-- Publish the complete Lesson 10 Proxenus reading and learning activities.');
if(!sql.includes("slug='lesson-10'")||!sql.includes("slug='lesson-9'")) throw new Error('Lesson 10 migration transformation failed');
fs.writeFileSync(at('db/migrations/0030_publish_lesson_10.sql'),sql);
console.log(`Built Lesson 10: ${paragraphs.length} reading paragraphs, ${requiredVocab.length} required words, ${topicQuestions.length} topic questions, ${grammarExercises.length} grammar exercises, and ${quiz.length} final questions.`);
