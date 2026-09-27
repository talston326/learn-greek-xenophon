// Deterministic Lesson 10 content, fallback, and publication migration.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const at=name=>path.join(root,name);
const vocab=(category,items)=>({category,items:items.map(([greek,english,dictionaryForm,status='required vocabulary'])=>({
  greek,english,dictionaryForm,status,lemma:greek.replace(/^(?:ὁ|ἡ|τὸ)\s+/u,'').split(',')[0],audioPlaceholder:true
}))});
// The 2026 revision develops the dilemma and names Proxenus's Theban guest friendship.
const paragraphs=[
  {greek:'Ὅτε ὁ Ξενοφῶν ἐν Ἀθήναις μένει, γράμμα παρὰ Προξένου τοῦ Θηβαίου, παλαιοῦ ξένου, αὐτῷ ἥκει. ἐπεὶ δὲ τὸ γράμμα ἀναγιγνώσκει, μανθάνει ὅτι ὁ ξένος αὐτὸν πρὸς Κῦρον καλεῖ.',
   translation:'While Xenophon is staying in Athens, a letter comes to him from Proxenus of Thebes, a longstanding guest friend. As he reads it, he learns that his guest friend is inviting him to join Cyrus.',
   gloss:[['Ὅτε','while; time clause'],['ἐν Ἀθήναις','in Athens'],['μένει','is staying'],['παρὰ Προξένου τοῦ Θηβαίου','from Proxenus the Theban'],['παλαιοῦ ξένου','of a longstanding guest friend'],['αὐτῷ ἥκει','comes to him'],['ἐπεὶ','as, when'],['ἀναγιγνώσκει','reads'],['μανθάνει ὅτι','learns that'],['αὐτὸν','him; object pronoun'],['πρὸς Κῦρον','to Cyrus the Younger'],['καλεῖ','invites']]},
  {greek:'ὁ Προξένος γράφει· «ὦ Ξενοφῶν, ἐλθὲ πρὸς ἐμέ· σὺ μὲν ἐμοὶ ξένος εἶ, ἐγὼ δὲ σὲ τῷ Κύρῳ, ᾧ φίλος εἰμί, φίλον ποιήσω. ἐμοὶ γὰρ οὗτος τῆς πατρίδος τιμιώτερός ἐστιν.»',
   translation:'Proxenus writes: “Xenophon, come to me. You are my guest friend, and I will make you a friend of Cyrus, whose friend I am. To me, Cyrus is more valuable than my homeland.”',
   gloss:[['ἐλθὲ','come!; command'],['πρὸς ἐμέ','to me'],['ἐμοὶ','to me'],['ξένος','guest friend'],['σὲ','you; object pronoun'],['τῷ Κύρῳ','to Cyrus'],['ᾧ φίλος εἰμί','whose friend I am; relative clause'],['ποιήσω','I will make'],['οὗτος','this man, Cyrus'],['τῆς πατρίδος','than my homeland; comparative genitive'],['τιμιώτερός ἐστιν','is more valuable']]},
  {greek:'ὁ Ξενοφῶν χαίρει μὲν ὅτι ὁ παλαιὸς φίλος αὐτὸν καλεῖ, θαυμάζει δὲ ὅτι ὁ Προξένος τὸν Κῦρον τῆς πατρίδος προτιμᾷ. «ὁ ἐμὸς φίλος με καλεῖ», φησίν, «ἀλλ᾽ ἡ ἐμὴ πόλις Ἀθῆναί ἐστιν· πῶς ἅμα τῷ φίλῳ καὶ τῇ πόλει πιστὸς ἔσομαι;»',
   translation:'Xenophon is pleased that his old friend is inviting him, but astonished that Proxenus puts Cyrus before his homeland. “My friend is calling me,” he says, “but my city is Athens. How can I be loyal to both my friend and my city?”',
   gloss:[['χαίρει μὲν ὅτι','is pleased that; first half of a contrast'],['θαυμάζει δὲ ὅτι','but is astonished that'],['προτιμᾷ','puts before, prefers'],['τῆς πατρίδος','to his homeland; comparative genitive'],['ὁ ἐμὸς φίλος','my friend; possessive adjective'],['με','me; object pronoun'],['φησίν','he says'],['ἀλλ᾽','but; elision of ἀλλά'],['ἡ ἐμὴ πόλις','my city'],['πῶς ἅμα','how at the same time'],['τῷ φίλῳ καὶ τῇ πόλει','to my friend and city'],['πιστὸς ἔσομαι','will I be loyal?; future form']]},
  {greek:'ὁ Ξενοφῶν οὔπω τῷ Προξένῳ ἀποκρίνεται, ἀλλὰ τὸ γράμμα πρὸς τὸν Σωκράτην φέρει. «ὁ παλαιὸς φίλος μου», λέγει, «με πρὸς Κῦρον καλεῖ· σὺ δὲ τί περὶ ταύτης τῆς ὁδοῦ νομίζεις;»',
   translation:'Xenophon does not yet reply to Proxenus. Instead, he takes the letter to Socrates. “My old friend is inviting me to Cyrus,” he says. “What do you think of this journey?”',
   gloss:[['οὔπω','not yet'],['τῷ Προξένῳ','to Proxenus'],['ἀποκρίνεται','replies; middle form'],['πρὸς τὸν Σωκράτην','to Socrates'],['φέρει','takes, carries'],['ὁ παλαιὸς φίλος μου','my old friend; postposed μου'],['περὶ ταύτης τῆς ὁδοῦ','about this journey; feminine genitive'],['νομίζεις','do you think?']]},
  {greek:'ὁ Σωκράτης, ἐπεὶ τὸ γράμμα ἀναγιγνώσκει, οὐ περὶ τοῦ Προξένου πρῶτον ἐρωτᾷ, ἀλλὰ περὶ τοῦ Κύρου· «οὐ νομίζουσιν οἱ Ἀθηναῖοι ὅτι ὁ Κῦρος τοῖς Λακεδαιμονίοις ἐν τῷ πολέμῳ ἐβοήθησεν;» «ναί», ἀποκρίνεται ὁ Ξενοφῶν, «καὶ τούτου οὐκ ἐπιλανθάνονται.»',
   translation:'After reading the letter, Socrates asks first about Cyrus, rather than Proxenus: “Don’t the Athenians believe that Cyrus helped the Spartans during the war?” “Yes,” Xenophon replies, “and they have not forgotten it.”',
   gloss:[['ἐπεὶ','after, when'],['οὐ περὶ τοῦ Προξένου πρῶτον','not first about Proxenus'],['ἐρωτᾷ','asks'],['οὐ νομίζουσιν οἱ Ἀθηναῖοι ὅτι','do the Athenians not believe that?'],['τοῖς Λακεδαιμονίοις','the Spartans'],['ἐν τῷ πολέμῳ','during the war'],['ἐβοήθησεν','helped; past tense'],['ἀποκρίνεται','replies'],['τούτου οὐκ ἐπιλανθάνονται','they do not forget this; genitive with middle verb']]},
  {greek:'«φοβοῦμαι οὖν», φησὶν ὁ Σωκράτης, «μὴ οἱ συμπολῖταί σου σε αἰτιάσωνται, ἐὰν Κύρῳ φίλος γένῃ. ὁ μὲν Προξένος φίλος σός ἐστιν· τῆς δὲ σῆς πατρίδος μὴ ἐπιλανθάνου.»',
   translation:'“I fear, then,” Socrates says, “that your fellow citizens may accuse you if you become Cyrus’s friend. Proxenus is your friend, but do not forget your homeland.”',
   gloss:[['φοβοῦμαι','I fear; middle form'],['οὖν','then, therefore'],['φησὶν','he says'],['μὴ οἱ συμπολῖταί σου σε αἰτιάσωνται','that your fellow citizens may accuse you; fear clause'],['ἐὰν Κύρῳ φίλος γένῃ','if you become Cyrus’s friend; conditional clause'],['φίλος σός ἐστιν','is your friend; predicate possessive adjective'],['τῆς δὲ σῆς πατρίδος','but your homeland; genitive possessive adjective'],['μὴ ἐπιλανθάνου','do not forget; middle command']]},
  {greek:'ὁ Ξενοφῶν ἐρωτᾷ· «τί οὖν ποιῶ;» ὁ δὲ Σωκράτης ἀποκρίνεται· «οὐ μικρὸν τὸ βούλευμά σου ἐστίν. πρὶν οὖν τῷ Προξένῳ ἀποκρίνεσθαι, πρὸς Δελφοὺς πορεύου καὶ τὸν Ἀπόλλωνα περὶ ταύτης τῆς ὁδοῦ ἐρώτα.»',
   translation:'“What, then, should I do?” Xenophon asks. Socrates replies, “Your decision is no small matter. Before answering Proxenus, go to Delphi and consult Apollo about this journey.”',
   gloss:[['τί οὖν ποιῶ','what, then, should I do?'],['ἀποκρίνεται','replies'],['οὐ μικρὸν τὸ βούλευμά σου','your decision is no small matter'],['πρὶν οὖν τῷ Προξένῳ ἀποκρίνεσθαι','before answering Proxenus; infinitive construction'],['πρὸς Δελφοὺς','to Delphi'],['πορεύου','go; middle command'],['τὸν Ἀπόλλωνα','Apollo'],['περὶ ταύτης τῆς ὁδοῦ','about this journey'],['ἐρώτα','ask, consult; command']]},
  {greek:'ὁ Ξενοφῶν τὸ γράμμα αὖθις ἀναγιγνώσκει καὶ τὰ τοῦ Σωκράτους ἐν νῷ ἔχει. «τὸ μὲν γράμμα παρὰ τοῦ φίλου μου ἐστίν», φησίν, «τὸ δὲ βούλευμα ἐμόν· πρῶτον τὸν θεὸν ἐρωτήσω.»',
   translation:'Xenophon reads the letter again and keeps Socrates’s words in mind. “The letter is from my friend,” he says, “but the decision is mine. First I shall consult the god.”',
   gloss:[['αὖθις','again'],['ἀναγιγνώσκει','reads'],['τὰ τοῦ Σωκράτους ἐν νῷ ἔχει','keeps Socrates’s words in mind'],['παρὰ τοῦ φίλου μου','from my friend'],['τὸ δὲ βούλευμα ἐμόν','but the decision is mine; predicate possessive'],['πρῶτον','first'],['τὸν θεὸν','the god, Apollo'],['ἐρωτήσω','I shall ask; future form']]}
];

const sections=[
 {id:'personal-pronouns',title:'1. Pronouns: Who Speaks, Who Is Addressed?',practiceTopic:'personal-pronouns',body:[
   'ἐγώ means “I,” and σύ means “you” when one person is addressed. The verb ending can already show the person, so Greek often uses these pronouns for emphasis or contrast: ἐγώ σε φίλον ποιήσω, “I will make you a friend.”',
   'The object forms are με (“me”) and σε (“you”). The short possessive forms μου (“my, of me”) and σου (“your, of you”) appear with nouns. These are forms of personal pronouns, not adjectives.',
   'In the reading, Proxenus says ἐγὼ δὲ σὲ ... φίλον ποιήσω, while Xenophon says ὁ ἐμὸς φίλος με καλεῖ. Follow the speaker and the case of each pronoun.'
 ],table:{title:'Core first- and second-person forms',headers:['Job','First person','Second person'],greekColumns:[1,2],rows:[['subject','ἐγώ — I','σύ — you'],['direct object','με — me','σε — you'],['possessor','μου — my','σου — your']]},checks:[{prompt:'In ὁ φίλος μου με καλεῖ, who receives the action?',answer:'με means “me”; μου means “my” and belongs with φίλος.'}],examples:[{greek:'ἐγώ σε καλέω· σὺ με ἀκούεις.',english:'I call you; you hear me.'}]},
 {id:'genitive-possession',title:'2. Possession with μου and σου',practiceTopic:'genitive-possession',body:[
   'The small genitive pronoun usually follows the noun it owns: ὁ φίλος μου, “my friend”; ἡ πόλις σου, “your city”; τὸ γράμμα σου, “your letter.” The noun keeps its own case according to its job in the sentence.',
   'The owner does not change the gender of the noun. Compare ὁ φίλος μου, ἡ ὁδός μου, and τὸ γράμμα μου: masculine, feminine, and neuter things can all belong to “me.”',
   'When reading, keep the possessor attached to the noun. In ὁ παλαιὸς φίλος μου, μου belongs to φίλος; in τὸ βούλευμά σου, σου belongs to βούλευμα.'
 ],table:{title:'A noun plus its possessor',headers:['Greek','Meaning','Thing owned'],greekColumns:[0],rows:[['ὁ φίλος μου','my friend','masculine'],['ἡ ὁδός σου','your road','feminine'],['τὸ γράμμα μου','my letter','neuter'],['ἡ πόλις αὐτοῦ','his city','feminine']]},checks:[{prompt:'Where does σου belong in ὁ φίλος σου?',answer:'It follows φίλος and means “your”; together they form “your friend.”'}],examples:[{greek:'ὁ φίλος μου τὸ γράμμα σου βλέπει.',english:'My friend sees your letter.'}]},
 {id:'possessive-adjectives',title:'3. Possessive Adjectives Agree with the Noun',practiceTopic:'possessive-adjectives',body:[
   'Greek can also say “my” with ἐμός, ἐμή, ἐμόν and “your” with σός, σή, σόν. Unlike μου and σου, these are adjectives: their endings agree with the thing owned in gender, number, and case.',
   'The reading has ἡ ἐμὴ πόλις, “my city,” and τῆς σῆς πατρίδος, “your homeland.” The feminine adjectives agree with πόλις and πατρίς. The genitive σῆς agrees with the genitive πατρίδος. The owner may be a man, but the ending follows the noun.',
   'The article normally stands before an attributive possessive adjective: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα. Compare ὁ φίλος μου. In φίλος σός ἐστιν and τὸ βούλευμα ἐμόν, the possessive adjective is a predicate: “is your friend,” “is mine.”'
 ],table:{title:'Singular nominative possessive adjectives',headers:['Thing owned','My','Your'],greekColumns:[1,2],rows:[['masculine friend','ὁ ἐμὸς φίλος','ὁ σὸς φίλος'],['feminine road','ἡ ἐμὴ ὁδός','ἡ σὴ ὁδός'],['neuter letter','τὸ ἐμὸν γράμμα','τὸ σὸν γράμμα']]},checks:[{prompt:'Why is ἐμή feminine in ἡ ἐμὴ πόλις?',answer:'It agrees with the feminine noun πόλις, not with the sex of the owner.'}],examples:[{greek:'ἡ ἐμὴ πόλις Ἀθῆναί ἐστιν.',english:'My city is Athens.'}]},
 {id:'demonstratives',title:'4. This Friend, This Road, This Letter',practiceTopic:'demonstratives',body:[
   'οὗτος, αὕτη, τοῦτο mean “this” for masculine, feminine, and neuter nouns. In the reading, οὗτος points to Cyrus; ταύτης τῆς ὁδοῦ means “of this journey.” The second is the feminine genitive form of αὕτη ἡ ὁδός.',
   'A demonstrative stands outside the article-plus-noun group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα. The sequence ὁ οὗτος φίλος is not the ordinary way to say “this friend.”',
   'The same forms can stand alone as pronouns. The reading has οὗτος, “this man,” pointing to Cyrus, and τούτου, “of this fact,” with ἐπιλανθάνονται. The latter refers to Cyrus’s aid to Sparta. Nominative examples in the table help you recognize the pattern; the reading itself uses genitive ταύτης.'
 ],table:{title:'Point to the person, road, or letter',headers:['Gender','Greek','Meaning'],greekColumns:[1],rows:[['masculine','οὗτος ὁ φίλος','this friend'],['feminine','αὕτη ἡ ὁδός','this journey'],['neuter','τοῦτο τὸ γράμμα','this letter'],['alone','τοῦτο','this fact']]},checks:[{prompt:'What does τοῦτο point to in τοῦτο τὸ γράμμα?',answer:'The neuter noun γράμμα, “letter.”'}],examples:[{greek:'αὕτη ἡ ὁδὸς μακρά ἐστιν.',english:'This journey is long.'}]},
 {id:'adjective-placement',title:'5. A Good Friend or a Friend Is Good?',practiceTopic:'adjective-placement',body:[
   'An adjective inside the article-and-noun group describes which person or thing: ὁ παλαιὸς φίλος, “the old friend”; ὁ ἀγαθὸς φίλος, “the good friend.” A second attributive pattern is ὁ φίλος ὁ παλαιός.',
   'An adjective outside that group can make a statement about the noun: ὁ φίλος ἀγαθός ἐστιν, “the friend is good.” The difference in position helps you distinguish description from a claim.',
   'In the reading, ὁ παλαιὸς φίλος μου identifies Proxenus, while φίλος σός ἐστιν says that Proxenus is “your friend.” Possessive adjectives can also be predicates: τὸ βούλευμα ἐμόν means “the decision is mine.”'
 ],table:{title:'Where the adjective stands',headers:['Greek','Pattern','Meaning'],greekColumns:[0],rows:[['ὁ ἀγαθὸς φίλος','attributive','the good friend'],['ὁ φίλος ὁ ἀγαθός','attributive','the good friend'],['ὁ φίλος ἀγαθός ἐστιν','predicate','the friend is good'],['ἡ ἐμὴ πόλις','attributive possession','my city']]},checks:[{prompt:'What changes between ὁ ἀγαθὸς φίλος and ὁ φίλος ἀγαθός ἐστιν?',answer:'The first identifies a good friend; the second states that the friend is good.'}],examples:[{greek:'ὁ παλαιὸς φίλος μου με καλεῖ.',english:'My old friend calls me.'}]}
];

const lesson={
  id:'lesson-10',number:10,title:'The Letter from Proxenus',greekTitle:'Τὸ παρὰ Προξένου γράμμα',
  scope:'Personal pronouns, possession, possessive adjectives, demonstratives, and adjective placement',
  theme:'A friend’s invitation, Athens, and a consequential choice',module:'σοφία — Wisdom and Socrates',
  banner:{image:'assets/lesson-10-letter-banner.png',alt:'A bearded Xenophon studies a papyrus letter while Socrates speaks with him in a reconstructed Athenian courtyard',caption:'Xenophon weighs Proxenus’s invitation while consulting Socrates. The scene and letter’s visible form are reconstruction.'},
  pages:[{page:1,slug:'lesson-10-page-1',title:'Reading',template:'reading',showTranslation:false},{page:2,slug:'lesson-10-page-2',title:'Language Study',template:'grammar'},{page:3,slug:'lesson-10-page-3',title:'Guest Friendship and Mercenaries',template:'culture'}],
  vocabulary:[
    vocab('People and choices',[['ὁ φίλος','friend','φίλος, φίλου, ὁ'],['ὁ ξένος','guest friend','ξένος, ξένου, ὁ'],['ἡ πόλις','city, city-state','πόλις, πόλεως, ἡ'],['ἡ πατρίς','homeland','πατρίς, πατρίδος, ἡ'],['ὁ Κῦρος','Cyrus the Younger','Κῦρος, Κύρου, ὁ','reading vocabulary'],['ὁ Προξένος','Proxenus','Προξένος, Προξένου, ὁ','reading vocabulary'],['ὁ Θηβαῖος','Theban','Θηβαῖος, Θηβαίου, ὁ','reading vocabulary'],['τὸ βούλευμα','decision','βούλευμα, βουλεύματος, τό','reading vocabulary'],['ὁ πόλεμος','war','πόλεμος, πολέμου, ὁ']]),
    vocab('Letters and travel',[['τὸ γράμμα','letter','γράμμα, γράμματος, τό'],['ἡ ὁδός','road, journey','ὁδός, ὁδοῦ, ἡ'],['γράφω','write','γράφω'],['καλέω','call, invite','καλέω'],['ἐρωτάω','ask, consult','ἐρωτάω'],['πορεύομαι','go, travel','πορεύομαι','reading vocabulary'],['ἀναγιγνώσκω','read','ἀναγιγνώσκω','reading vocabulary'],['ἀποκρίνομαι','reply','ἀποκρίνομαι','reading vocabulary']]),
    vocab('Pronouns and describing',[['ἐγώ / με / μου','I / me / my','ἐγώ'],['σύ / σε / σου','you / you / your','σύ'],['ἐμός, ἐμή, ἐμόν','my','ἐμός, ἐμή, ἐμόν'],['σός, σή, σόν','your','σός, σή, σόν'],['οὗτος, αὕτη, τοῦτο','this','οὗτος, αὕτη, τοῦτο'],['παλαιός, παλαιά, παλαιόν','old, longstanding','παλαιός, παλαιά, παλαιόν'],['πιστός, πιστή, πιστόν','loyal','πιστός, πιστή, πιστόν','reading vocabulary']])
  ],
  reading:{title:'Τὸ παρὰ Προξένου γράμμα',audioPlaceholder:'Reading audio has not yet been recorded.',introduction:[
    'After the conversation about friendship, an invitation from Proxenus of Thebes makes friendship a personal dilemma. Proxenus is Xenophon’s longstanding guest friend. He offers to introduce Xenophon to Cyrus the Younger, although an Athenian association with Cyrus could invite suspicion after the war with Sparta.',
    'Source note: Xenophon, Anabasis 3.1.4–5 reports Proxenus’s invitation, his promise to make Xenophon a friend of Cyrus, his preference for Cyrus over his homeland, Socrates’s concern about Athens, and his advice to consult Apollo at Delphi. Anabasis 2.1.10 identifies Proxenus as Theban. Xenophon does not preserve the letter’s exact wording or the detailed conversation. The words, physical handoff, and private reactions in this reading are adaptations.',
    'The Greek keeps the present-tense narrative used in earlier lessons. Blue glosses support names, guest friendship, middle forms, past and future verbs, and clauses beyond the production target. Focus on pronouns, possession, demonstratives, and adjective placement as Xenophon weighs friend and city.'
  ],paragraphs:paragraphs.map(p=>({greek:p.greek,gloss:p.gloss.map(([greek,english])=>({greek,english}))})),translation:paragraphs.map(p=>p.translation).join('\n\n'),sourceCitation:'Xenophon, Anabasis 3.1.4–5 (invitation and counsel); 2.1.10 (Proxenus of Thebes). Letter wording and extended dialogue are adapted. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3',notesMarkdown:'Proxenus is identified as a Theban at Anabasis 2.1.10 and as Xenophon’s longstanding guest friend at 3.1.4. His invitation, promised introduction to Cyrus, Socrates’ Athenian concern, and the Delphic advice are reported at 3.1.4–5. The letter’s wording, physical handoff, and personal thoughts are course reconstruction.'},
  wordStudy:{label:'Word Study — Friend, Guest Friend, City',blocks:[{title:'Who belongs to whom?',practiceTopic:'word-study',body:[
    'ὁ φίλος is a friend; ὁ ξένος is a guest friend, a relationship that can reach across city borders. Proxenus is from Thebes and Xenophon is from Athens. They call one another ξένος in the reconstructed letter. The historical source calls Proxenus Xenophon’s longstanding guest friend.',
    'ὁ φίλος μου means “my friend,” with a short possessor after the noun. Compare ὁ ἐμὸς φίλος, with an adjective before the noun, and φίλος σός ἐστιν, with a possessive adjective making a statement.',
    'τὸ γράμμα is a letter; ἡ ὁδός can be a road or journey; τὸ βούλευμα is a decision. Cyrus here is Cyrus the Younger. The source does not say that Xenophon joined the army as a paid soldier at this point.'
  ],display:[{greek:'ὁ ξένος',english:'guest friend'},{greek:'ὁ φίλος μου',english:'my friend'},{greek:'ὁ ἐμὸς φίλος',english:'my friend'},{greek:'τὸ βούλευμα ἐμόν',english:'the decision is mine'}]}]},
  grammar:{intro:'The fuller reading asks who calls whom, whose city matters, and how an adjective’s position changes the claim. Read the longer clauses for meaning with the blue glosses; practice the target forms below.',objectives:[
    'Distinguish subject, object, and possessive forms of ἐγώ and σύ.',
    'Read μου and σου after a noun as possession.',
    'Match ἐμός and σός to the gender of the thing owned.',
    'Read οὗτος, αὕτη, and τοῦτο beside nouns and alone.',
    'Distinguish an attributive adjective from a predicate statement.'
  ],sections,summary:{title:'Grammar Summary',items:['ἐγώ / με / μου = I / me / my; σύ / σε / σου = you / you / your.','A possessor can follow the noun: ὁ φίλος μου, ἡ πόλις σου, τὸ γράμμα μου.','A possessive adjective agrees with the thing owned: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα.','Demonstratives stand outside the article group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα.','ὁ ἀγαθὸς φίλος identifies a good friend; ὁ φίλος ἀγαθός ἐστιν says that the friend is good.']}},
  culture:{title:'Guest Friendship and Mercenaries',banner:{
    image:'assets/lesson-10-persian-guard.jpg',alt:'Achaemenid limestone relief of the head of a Persian guard from Persepolis, with headdress, curled beard, bow, and quiver',
    caption:'Head of a Persian guard, ca. 486–465 BCE, from Persepolis in Iran. This is an earlier Achaemenid relief, not a portrait of Cyrus the Younger.',
    credit:'The Metropolitan Museum of Art, object 55.121.3. Public Domain; image unmodified.',
    sourceUrl:'https://www.metmuseum.org/art/collection/search/324433',
    licenseUrl:'https://www.metmuseum.org/about-the-met/policies-and-documents/open-access'
  },body:[],sections:[
    {title:'Guest Friendship Across City Borders',body:[
      'Proxenus was a Theban, while Xenophon was an Athenian. Xenophon calls him a longstanding ξένος (xenos), or guest friend. Guest friendship (xenia) joined people and households across cities through hospitality, trust, gifts, and help that could be returned over time. It offered a personal route to introductions far from home; Proxenus’s offer to bring Xenophon to Cyrus makes that relationship consequential.',
      'The name Proxenus resembles proxenos, a civic title for a person who helped visitors from another city. A name alone does not establish that this Proxenus held that office. Here the relevant bond is Xenophon’s stated guest friendship with him. The letter’s exact words and the exchange in the reading are adapted; the invitation and relationship are attested in Anabasis 3.1.4–5.'
    ]},
    {title:'Mercenaries after the Peloponnesian War',body:[
      'The Peloponnesian War ended with Athens’s surrender in 404 BCE. Athens gave up most of its fleet; years of war had damaged farms and livelihoods and left many Greeks experienced in military service. Paid service abroad was older than this defeat, but opportunities for professional soldiers became more prominent in the fourth century. Persian rulers and their rivals could recruit Greek troops, especially heavy infantry, with pay and personal connections.',
      'Cyrus the Younger used both resources as he assembled the expedition later known through Xenophon’s account of the Ten Thousand. Proxenus, a commander in Cyrus’s force and Xenophon’s guest friend, invited Xenophon to meet the prince. Xenophon explicitly says that when he first went, he was neither a general, a captain, nor an ordinary soldier. His situation should not be made identical to that of every paid fighter. The invitation still placed him in a world where military service abroad could pull against loyalties to a Greek city.',
      'That tension explains Socrates’s warning: Cyrus had aided Sparta against Athens, and Athenians might view Xenophon’s friendship with him with suspicion. The Persian guard relief above is from Persepolis and predates these events. It shows neither Cyrus nor the Greek soldiers; it evokes the larger imperial setting into which the invitation led.'
    ]}
  ],questions:[
    {prompt:'What was a guest friendship?',answer:'A lasting personal bond across communities, sustained by reciprocal hospitality and help. Xenophon calls the Theban Proxenus his longstanding guest friend.'},
    {prompt:'Why did paid Greek military service abroad become more prominent after the war?',answer:'Long war had damaged livelihoods and created experienced fighters, while rulers such as Cyrus could pay for Greek troops. Paid service already existed before 404 BCE.'},
    {prompt:'Was Xenophon already serving as an ordinary paid soldier when he accepted the invitation?',answer:'No. In Anabasis 3.1.4 he says that he first went neither as general, captain, nor ordinary soldier.'},
    {prompt:'Why did Socrates worry about Xenophon joining Cyrus?',answer:'Cyrus had aided Sparta against Athens; Athenians might accuse Xenophon for becoming his friend.'},
    {prompt:'What does the image show?',answer:'An earlier Achaemenid Persian guard relief from Persepolis, not a portrait of Cyrus or an image of the Ten Thousand.'}
  ],review:{title:'Before the Final Quiz',items:['Distinguish ὁ φίλος (friend) from ὁ ξένος (guest friend).','Read ὁ ἐμὸς φίλος, ὁ φίλος μου, and φίλος σός ἐστιν.','Read ταύτης τῆς ὁδοῦ and τῆς σῆς πατρίδος as feminine genitives.','Explain how Proxenus’s invitation connected guest friendship, military opportunity, and Athenian political risk.']},sources:[
    {title:'Xenophon, Anabasis 2.1.10 (Proxenus the Theban)',url:'https://www.greek-language.gr/digitalResources/ancient_greek/library/browse.html?page=2&text_id=112'},
    {title:'Xenophon, Anabasis 3.1.4–5 (guest friendship, invitation, Socrates)',url:'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3'},
    {title:'Xenophon, Hellenica 2.2.20 (Athenian surrender)',url:'https://www.livius.org/sources/content/xenophon-hellenica/xenophon-on-the-surrender-of-athens/'},
    {title:'Oxford Handbook of Ancient Greek History, guest friendship',url:'https://academic.oup.com/edited-volume/61673/chapter-abstract/548932058'},
    {title:'Oxford Handbook of Ancient Greek History, mercenaries',url:'https://academic.oup.com/edited-volume/61673/chapter-abstract/549654703'},
    {title:'Cambridge University Press, Contextualizing Paid Military Service',url:'https://www.cambridge.org/core/books/soldiers-wages-and-the-hellenistic-economies/contextualizing-paid-military-service/AA1069CC9A40B382ABA6078274303C3E'},
    {title:'The Metropolitan Museum of Art, Head of a Persian guard',url:'https://www.metmuseum.org/art/collection/search/324433'}
  ]},enrichment:[],activities:{},nextLesson:{id:'lesson-11',title:'The Question at Delphi',fallbackUrl:'lesson.html?lesson=11&page=1'},contentRevision:'lesson-10-guest-friendship-v2',previousLesson:{id:'lesson-9',title:'What Makes a Good Friend?',fallbackUrl:'lesson.html?lesson=9&page=1'}
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
    ['What does ὁ ξένος mean in this reading?','guest friend','enemy','hired soldier','stranger only','ξένος names an established guest friendship.'],
    ['What does καλέω mean?','I call or invite','I read','I write','I decide','καλέω means call or invite.'],
    ['What does γράφω mean?','I write','I go','I ask','I hear','γράφω means write.'],
    ['What does ἐρωτάω mean?','I ask or consult','I arrive','I accuse','I forget','ἐρωτάω means ask.'],
    ['What does ἀναγιγνώσκω mean?','I read','I send','I remember','I walk','ἀναγιγνώσκω means read.'],
    ['Who is Proxenus in this reading?','Xenophon’s Theban guest friend','the Persian king','an Athenian accuser','Apollo’s priest','Proxenus was Theban and Xenophon’s guest friend.'],
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
    ['What does τῆς σῆς πατρίδος mean?','of your homeland','of my homeland','his homeland','this homeland','σῆς agrees with feminine genitive πατρίδος.'],
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
    ['In φίλος σός ἐστιν, what is said of Proxenus?','he is your friend','he is old','he is good','he travels','σός is a predicate possessive adjective.'],
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
final('Reading','Who sends Xenophon the invitation?','Proxenus of Thebes','Socrates','Cyrus the Great','Critobulus','Proxenus is Xenophon’s Theban guest friend and the sender.');
final('Reading','What does Proxenus promise?','to make Xenophon a friend of Cyrus','to make Xenophon an Athenian general','to buy him a house','to send him to Sparta','The invitation offers a personal connection to Cyrus.');
final('Reading','Why might the invitation endanger Xenophon in Athens?','Cyrus had aided Sparta against Athens','Proxenus had stolen a letter','Delphi was closed','Xenophon had lost his horse','Socrates worries about an accusation over Cyrus’s support for Sparta.');
final('Reading','Whom does Xenophon consult after reading the letter?','Socrates','Plato','Critobulus','Aristarchus','Xenophon discusses the journey with Socrates.');
final('Reading','What does Socrates advise?','consult Apollo at Delphi','leave immediately for Sardis','ignore the letter','ask the Athenian assembly to write back','Socrates recommends Delphi.');
final('Reading','What contrast does Xenophon express at the end?','the letter is his friend’s, but the decision is his','the letter is Socrates’s, but the journey is Proxenus’s','the letter is from Sparta and the decision is Cyrus’s','he has already asked Apollo','Xenophon says the decision is his.');
for(const v of [requiredVocab[1],requiredVocab[3],requiredVocab[5],requiredVocab[8],requiredVocab[12],requiredVocab[15]]){
  const i=requiredVocab.indexOf(v),others=requiredVocab.filter(x=>x.english!==v.english);
  final('Vocabulary',`What does ${v.greek} mean?`,v.english,...[1,4,7].map(n=>others[(i+n)%others.length].english),`${v.greek} means ${v.english}.`);
}
for(const [ti,indices] of [[1,[0,2,8]],[2,[0,5,11]],[3,[1,4]],[4,[0,7]],[5,[0,3]]]){
  for(const j of indices){const q=bank[ti*12+j];final('Grammar',q.prompt,q.correct,...q.wrong,q.why);}
}
final('Greek World','Which Cyrus is Proxenus’s associate?','Cyrus the Younger','Cyrus the Great','the Athenian Cyrus','a Delphic priest','The lesson concerns Cyrus the Younger.');
final('Greek World','What relationship linked the Athenian Xenophon and Theban Proxenus?','longstanding guest friendship','shared Athenian citizenship','a Delphic priesthood','father and son','Xenophon calls Proxenus his longstanding guest friend.');
final('Greek World','What happened to Athens in 404 BCE?','it surrendered at the end of the Peloponnesian War','it conquered Persia','it founded Delphi','it hired Cyrus as king','Athens surrendered and lost most of its fleet.');
final('Greek World','Which statement about Greek paid military service is accurate?','It existed before 404 BCE and grew more prominent afterward.','It began only after 404 BCE.','All Greek men became paid soldiers.','The Ten Thousand were all landless Athenians.','Paid service predates 404 and became more prominent in the fourth century.');
final('Greek World','How does Xenophon describe his initial role in Cyrus’s expedition?','neither general, captain, nor ordinary soldier','captain of the entire force','Cyrus’s Persian satrap','Athenian ambassador','Anabasis 3.1.4 distinguishes his initial status from a regular soldier’s.');
final('Greek World','What does the culture-page relief show?','an earlier Persian guard from Persepolis','Cyrus the Younger','Xenophon with Socrates','a Greek mercenary at Delphi','The relief shows an Achaemenid guard, not the expedition.');
if(quiz.length!==30) throw new Error(`Expected thirty final questions, got ${quiz.length}`);
lesson.activities={
  'vocab-flashcards':{title:'Lesson 10 Vocabulary Flashcards',cards:lesson.vocabulary.flatMap(g=>g.items).map(v=>({prompt:v.greek,answer:v.english}))},
  'vocab-practice':{title:'Lesson 10 Vocabulary Practice',practiceMode:'rounds',roundSize:10,threshold:80,instructions:'Practice required Lesson 10 words in short rounds. Reading-only words remain glossed.',questions:vocabPractice},
  'grammar-flashcards':{title:'Lesson 10 Grammar Flashcards',cards:[{prompt:'ἐγώ / με / μου',answer:'I / me / my'},{prompt:'σύ / σε / σου',answer:'you / you / your'},{prompt:'ὁ φίλος μου',answer:'my friend'},{prompt:'ἡ σὴ ὁδός',answer:'your journey'},{prompt:'τοῦτο τὸ γράμμα',answer:'this letter'},{prompt:'ὁ ἀγαθὸς φίλος',answer:'the good friend'},{prompt:'ὁ φίλος ἀγαθός ἐστιν',answer:'the friend is good'}]},
  'topic-practice':{title:'Lesson 10 Grammar Topic Practice',practiceMode:'rounds',roundSize:10,instructions:'Choose a topic. Practice gives immediate feedback and does not gate the page.',questions:topicQuestions},
  'grammar-exercises':{title:'Lesson 10 Grammar Exercises',description:'Pronouns, possession, demonstratives, and adjective placement',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-10-grammar-exercises-v2',instructions:'Answer every question and score at least 80% to continue to the culture page.',questions:grammarExercises},
  'lesson-quiz':{title:'Lesson 10 Final Quiz — The Letter from Proxenus',description:'Reading, vocabulary, grammar, guest friendship, and mercenaries',threshold:80,required:true,requireAllAnswers:true,revision:'lesson-10-final-quiz-v2',pointsPossible:30,instructions:'Answer all 30 questions. Score at least 80% to complete Lesson 10 and continue to Lesson 11.',questions:quiz}
};

fs.writeFileSync(at('content/lessons/lesson-10.json'),JSON.stringify(lesson,null,2)+'\n');
let fallback=fs.readFileSync(at('lesson-data.js'),'utf8');
const manifest='{ number: 10, title: "The Letter from Proxenus", module: "σοφία — Wisdom and Socrates", moduleTheme: "Wisdom and Socrates", bannerImage: "assets/lesson-10-letter-banner.png", bannerAlt: "A bearded Xenophon studies Proxenus’s letter while speaking with Socrates", grammarFocus: "Pronouns, possession, demonstratives, and adjective placement", greekPhrase: "Τὸ παρὰ Προξένου γράμμα", sourceAnchor: "Xenophon, Anabasis 2.1.10 and 3.1.4–5", cultureLead: "Theban guest friendship and paid military service after the Peloponnesian War." }';
const manifestPattern=/\{ number: 10, title: "[^"]+",[^\n]+\},/;
if(!manifestPattern.test(fallback)) throw new Error('Lesson 10 manifest not found');
fallback=fallback.replace(manifestPattern,manifest+',');
const generated=`  // BEGIN GENERATED LESSON 10\n  LESSONS["lesson-10"] = ${JSON.stringify(lesson,null,2)};\n  // END GENERATED LESSON 10`;
if(fallback.includes('  // BEGIN GENERATED LESSON 10')) fallback=fallback.replace(/  \/\/ BEGIN GENERATED LESSON 10[\s\S]*?  \/\/ END GENERATED LESSON 10/g,generated);
else fallback=fallback.replace('  // END GENERATED LESSON 9',`  // END GENERATED LESSON 9\n${generated}`);
fs.writeFileSync(at('lesson-data.js'),fallback);
const template=fs.readFileSync(at('db/migrations/0030_publish_lesson_10.sql'),'utf8');
let sql=template.replace(/patch jsonb := \$json\$[\s\S]*?\$json\$::jsonb;/,`patch jsonb := $json$${JSON.stringify(lesson,null,2)}$json$::jsonb;`)
  .replace('-- Publish the complete Lesson 10 Proxenus reading and learning activities.','-- Refine Lesson 10 with the fuller reading, Theban guest friendship, and mercenary history.');
if(!sql.includes("slug='lesson-10'")||!sql.includes("slug='lesson-9'")) throw new Error('Lesson 10 migration transformation failed');
fs.writeFileSync(at('db/migrations/0031_refine_lesson_10_guest_friendship.sql'),sql);
console.log(`Built Lesson 10: ${paragraphs.length} reading paragraphs, ${requiredVocab.length} required words, ${topicQuestions.length} topic questions, ${grammarExercises.length} grammar exercises, and ${quiz.length} final questions.`);
