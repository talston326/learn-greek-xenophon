// Independently written controlled Greek. These are adaptations, never quotations.
export const titles={24:'Learning to Bring the Army Home',25:'Mastering Oneself',26:'Habits of Discipline',27:'What Is Enough?',28:'The Desire to Live Well',29:'Endurance and Its Limits',30:'Knowing Oneself',31:'Desire and Responsibility',32:'The Well-Ordered Household',33:'Training the Self',34:'Nothing in Excess',35:'What is Self-Control?',36:'The Disciplined Life',37:'Justice is the Greatest Good'};
const p=(greek,translation,gloss)=>({greek,translation,gloss:gloss.split('|').map(x=>{const i=x.indexOf('=');return {greek:x.slice(0,i),english:x.slice(i+1)}})});
const vocab=s=>s.split('\n').filter(Boolean).map(x=>{const [greek,english,dictionaryForm]=x.split('|');return {greek,english,dictionaryForm,lemma:dictionaryForm.split(',')[0],status:'required vocabulary',audioPlaceholder:true}});
export const readings={
25:{greekTitle:'Ὁ Σωκράτης καὶ αἱ ἐπιθυμίαι',source:'Xenophon, Memorabilia 1.3.5–8 and 1.5.1–5',work:'Memorabilia',url:'https://monadnock.net/xenophon/mem1-3.html',extra:[{title:'Memorabilia 1.5 — self-control and trust',url:'https://monadnock.net/xenophon/mem1-5.html'}],boundary:'The habits and question of trust follow Xenophon. The sequence of a typical day and the direct questions below are newly composed teaching arrangements, not a dated encounter or verbatim speech.',focus:'Imperfect forms describe habitual conduct; aorists view selected actions as wholes.',paragraphs:[
p('Ὁ Σωκράτης ἐν ταῖς Ἀθήναις ἔζη. πολλάκις ἐν τῇ ἀγορᾷ τοῖς φίλοις διελέγετο. οὐ μόνον περὶ τῆς πόλεως ἔλεγεν, ἀλλὰ καὶ περὶ τοῦ βίου καὶ τῶν ἐπιθυμιῶν.','Socrates lived in Athens. He often conversed with his friends in the marketplace. He spoke not only about the city but also about life and desires.','ἔζη=lived; imperfect of ζάω|διελέγετο=was conversing; imperfect middle|ἔλεγεν=used to speak|τοῦ βίου=life|τῶν ἐπιθυμιῶν=desires'),
p('Σῖτον μὲν ἤσθιεν ὁ Σωκράτης, ποτὸν δὲ ἔπινεν· ὀλίγων δὲ ἐδεῖτο. ἡ γὰρ πεῖνα αὐτῷ τὸν σῖτον ἡδὺν ἐποίει. οὐκ ἀεὶ τὰ πολυτελῆ ἐζήτει.','Socrates ate food and drank drink, but he needed few things. For hunger made his food pleasant to him. He was not always seeking expensive things.','ἤσθιεν=used to eat|ἔπινεν=used to drink|ἐδεῖτο=needed; takes genitive|πεῖνα=hunger|ἡδὺν=pleasant; accusative masculine|ἐποίει=made; imperfect of ποιέω|τὰ πολυτελῆ=expensive things; supported adjective'),
p('Οἱ μὲν φίλοι ἔβλεπον τὸν βίον αὐτοῦ, οἱ δὲ τοὺς λόγους ἤκουον. ὁ Σωκράτης οὐ λόγῳ μόνον ἐδίδασκεν· καὶ τῷ ἔργῳ παράδειγμα παρεῖχεν.','Some friends observed his way of life, while others listened to his words. Socrates did not teach by speech alone; he also provided an example by action.','ἔβλεπον=were observing|ἤκουον=were listening|λόγῳ=by speech|ἐδίδασκεν=used to teach|τῷ ἔργῳ=by action|παρεῖχεν=provided; imperfect of παρέχω'),
p('Σκέψασθε νῦν τὴν ἐρώτησιν· τίς ἄρξει τῶν φίλων ἐν κινδύνῳ; ὁ τῶν ἐπιθυμιῶν ἥττων ἢ ὁ ἑαυτοῦ κρατῶν; οἱ φίλοι οὐ μόνον ἡδονὴν ἀλλὰ καὶ βοήθειαν ζητοῦσιν.','Consider the question now: who will lead friends in danger? The person weaker than his desires or the person mastering himself? Friends seek not only pleasure but also help.','Σκέψασθε=consider; middle imperative|ἄρξει=will lead; future|ἥττων=weaker; supported comparative|ἑαυτοῦ κρατῶν=mastering himself; κρατέω with genitive|ἡδονὴν=pleasure|βοήθειαν=help'),
p('Ἐν τῷ παραδείγματι ὁ ἀνὴρ ἤσθιεν, ὁ δὲ φίλος ἦλθεν. ὁ ἀνὴρ τὸν φίλον εἶδεν καὶ ἤκουσεν. οὐ πᾶσα χρεία ἔμενεν· ἔργον γὰρ ἦν παρόν.','In the example the man was eating, and his friend arrived. The man saw his friend and listened. Not every need waited; for a task was at hand.','Ἐν τῷ παραδείγματι=in the teaching example|ἤσθιεν=was eating; background action|ἦλθεν=arrived; aorist|εἶδεν=saw; aorist|χρεία=need|παρόν=at hand; participle of πάρειμι'),
p('Ἡ ἐγκράτεια οὐ λόγος μόνον ἐστίν. ὁ μὲν ἀνὴρ περὶ τοῦ ἀγαθοῦ ἔλεγεν, ὁ δὲ τὸ ἀγαθὸν ἔπραττεν. τίς τῶν δύο τοῖς φίλοις πιστὸς ἦν;','Self-mastery is not merely a word. One man was speaking about the good, while the other was doing good. Which of the two was dependable to his friends?','Ἡ ἐγκράτεια=self-mastery|ἔπραττεν=was doing|τῶν δύο=of the two|πιστὸς=dependable|ἦν=was; imperfect of εἰμί')],vocabulary:vocab(`ὁ βίος|way of life|βίος, βίου, ὁ
ἡ ἐπιθυμία|desire|ἐπιθυμία, ἐπιθυμίας, ἡ
ἡ ἐγκράτεια|self-mastery|ἐγκράτεια, ἐγκρατείας, ἡ
ὁ σῖτος|food, grain|σῖτος, σίτου, ὁ
τὸ ποτόν|beverage|ποτόν, ποτοῦ, τό
ἡ πεῖνα|hunger|πεῖνα, πείνης, ἡ
ἡ ἡδονή|pleasure|ἡδονή, ἡδονῆς, ἡ
ἡ βοήθεια|help|βοήθεια, βοηθείας, ἡ
ἡ χρεία|need|χρεία, χρείας, ἡ
τὸ παράδειγμα|example|παράδειγμα, παραδείγματος, τό
πιστός|dependable|πιστός, πιστή, πιστόν
ὀλίγος|little, few|ὀλίγος, ὀλίγη, ὀλίγον
ἐσθίω|eat|ἐσθίω
πίνω|drink|πίνω
ζητέω|seek|ζητέω
πράττω|do, act|πράττω
διδάσκω|teach|διδάσκω
ἀκούω|listen|ἀκούω
κρατέω|master, prevail over|κρατέω
πολλάκις|often|πολλάκις`)},
26:{greekTitle:'Ὃς ἑαυτοῦ κρατεῖ',source:'Xenophon, Memorabilia 2.1.1–9',work:'Memorabilia',url:'https://monadnock.net/xenophon/mem2-1.html',boundary:'The contrast between training for rule and preferring an easier life follows the dialogue with Aristippus. The Greek is simplified and the closing questions are course reflection, not additional ancient testimony.',focus:'Track each relative pronoun back to its antecedent; its case comes from its role in its own clause.',paragraphs:[
p('Ὁ Σωκράτης τῷ Ἀριστίππῳ διαλέγεται περὶ παιδείας. δύο νέους ἐν τῷ λόγῳ τίθησιν· ὁ μὲν ἄρξει, ὁ δὲ οὐ βούλεται ἄρχειν. τίς παιδεία τοῖς νέοις προσήκει;','Socrates discusses education with Aristippus. He sets two young men before him in the discussion: one will rule, while the other does not wish to rule. What education suits the young men?','τῷ Ἀριστίππῳ=with Aristippus|παιδείας=education|τίθησιν=sets; supported -μι verb|ἄρξει=will rule|προσήκει=suits, is appropriate'),
p('Ὁ νέος ὃς ἄρξει οὐ πάντοτε τὴν ἑαυτοῦ ἡδονὴν ζητεῖ. ἔργα γάρ ἐστιν ἃ οὐ μένει. ὁ φίλος ᾧ βοηθεῖν δεῖ ἐν κινδύνῳ ἐστίν.','The young man who will rule does not always seek his own pleasure. For there are tasks which do not wait. The friend whom it is necessary to help is in danger.','ὃς=who; relative subject|ἃ=which; neuter plural subject|οὐ μένει=do not wait; neuter plural with singular verb|ᾧ=whom; dative with βοηθεῖν|δεῖ=it is necessary'),
p('Ὁ Σωκράτης περὶ σίτου καὶ ποτοῦ καὶ ὕπνου ἐρωτᾷ. ὁ ἄρχων, ὃν οἱ φίλοι ἐκάλουν, ἤδη ἐπόνει. οὐκ ἀεὶ καθῆται ἐν τῇ οἰκίᾳ.','Socrates asks about food, drink, and sleep. The ruler, whom the friends were calling, was already working. He is not always sitting in the house.','ὕπνου=sleep|ὃν=whom; relative accusative|ἐκάλουν=were calling|ἐπόνει=was working|καθῆται=sits; supported form'),
p('Ἔξω πολλάκις ἐστὶν ἡ ἐργασία. οἱ ἄνδρες αἴσθησιν ἔχουσι τοῦ ψύχους καὶ τοῦ θέρους. ἡ ὁδὸς βαθεῖαν χαράδραν ἔχει· βαρὺς δὲ ὁ πόνος.','Work is often outdoors. The men feel the cold and the summer heat. The road has a deep ravine; the toil is heavy.','ἡ ἐργασία=work|τοῦ ψύχους=the cold; -εσ- noun|τοῦ θέρους=summer heat; -εσ- noun|βαθεῖαν=deep; feminine accusative|χαράδραν=ravine|βαρὺς=heavy'),
p('Ὁ δὲ Ἀρίστιππος λέγει· «οὐ βούλομαι ἄρχειν. ἡ ἀρχὴ πολλὰ ἔργα παρέχει. ἐγὼ βίον ζητῶ ὃς ἡδονὴν ἔχει.» ὁ Σωκράτης τὸν λόγον ἐξετάζει.','Aristippus says, “I do not wish to rule. Office brings many tasks. I seek a life which has pleasure.” Socrates examines the claim.','ἡ ἀρχὴ=office, rule|παρέχει=provides, brings|βίον=life|ὃς=which; agrees with βίον in gender and number|ἐξετάζει=examines'),
p('Τίς τὴν παιδείαν αἱρεῖται; τίνα τὰ ἔργα ὠφελεῖ; ὁ τῶν ἄλλων ἄρχων ἑαυτοῦ κρατεῖ; ταῦτα νῦν ζητοῦμεν. ὁ γὰρ καλὸς λόγος οὐ πᾶσαν ἀπορίαν λύει.','Who chooses the education? Whom do the tasks help? Does the person ruling others master himself? We now investigate these matters. For a fine argument does not resolve every difficulty.','αἱρεῖται=chooses; middle|τίνα=whom; interrogative accusative|ταῦτα=these matters|ζητοῦμεν=we investigate|ἀπορίαν=difficulty|λύει=resolves')],vocabulary:vocab(`ἡ παιδεία|education|παιδεία, παιδείας, ἡ
ὁ νέος|young man|νέος, νέου, ὁ
ἡ ἀρχή|office, rule|ἀρχή, ἀρχῆς, ἡ
ὁ ὕπνος|sleep|ὕπνος, ὕπνου, ὁ
ἡ ἐργασία|work|ἐργασία, ἐργασίας, ἡ
ὁ πόνος|toil|πόνος, πόνου, ὁ
τὸ ψῦχος|cold|ψῦχος, ψύχους, τό
τὸ θέρος|summer|θέρος, θέρους, τό
ἡ χαράδρα|ravine|χαράδρα, χαράδρας, ἡ
ἡ ἀπορία|difficulty|ἀπορία, ἀπορίας, ἡ
βαθύς|deep|βαθύς, βαθεῖα, βαθύ
βαρύς|heavy|βαρύς, βαρεῖα, βαρύ
ἡδύς|pleasant|ἡδύς, ἡδεῖα, ἡδύ
ὅς|who, which (relative)|ὅς, ἥ, ὅ
ἄρχω|rule|ἄρχω
πονέω|toil, work hard|πονέω
καλέω|call|καλέω
ἐξετάζω|examine|ἐξετάζω
ἔξω|outside|ἔξω
πάντοτε|always|πάντοτε`)},
27:{greekTitle:'Τίς πλουσιώτερός ἐστιν;',source:'Xenophon, Oeconomicus 2.1–8',work:'Oeconomicus',url:'https://www.gutenberg.org/files/1173/1173-h/1173-h.htm',boundary:'The reversal of rich and poor and the obligations of Critobulus follow Xenophon. Monetary amounts are omitted. The final comparison questions are course-written; no modern budget is attributed to the ancient speakers.',focus:'Comparatives require a standard of comparison; distinguish possessions from needs.',paragraphs:[
p('Ὁ Κριτόβουλος τῷ Σωκράτει διαλέγεται περὶ χρημάτων. πολλὰ μὲν ἔχει, πλείω δὲ ζητεῖ. ὁ Σωκράτης ὀλίγα ἔχει· ὅμως δὲ οὐ πλείω ζητεῖ.','Critobulus talks with Socrates about money. He has much, but seeks more. Socrates has little; nevertheless he does not seek more.','Ὁ Κριτόβουλος=Critobulus|περὶ χρημάτων=about money|πλείω=more; neuter plural comparative|ὀλίγα=few things|ὅμως=nevertheless'),
p('Ὁ Σωκράτης λέγει· «ἐμοὶ τὰ ἐμὰ ἱκανά ἐστιν· σοὶ δὲ τὰ σὰ οὐχ ἱκανά.» ὁ Κριτόβουλος γελᾷ. πλουσιώτερος γὰρ εἶναι δοκεῖ τοῦ Σωκράτους.','Socrates says, “My possessions are sufficient for me, but yours are not sufficient for you.” Critobulus laughs. For he seems to be richer than Socrates.','τὰ ἐμὰ=my possessions|ἱκανά=sufficient|τὰ σὰ=your possessions|γελᾷ=laughs|πλουσιώτερος=richer|τοῦ Σωκράτους=than Socrates; genitive of comparison'),
p('Ὁ μὲν Κριτόβουλος μείζονα οἰκίαν καὶ πλείονα χρήματα ἔχει. ὁ δὲ Σωκράτης ἐλάττονα ζητεῖ. οὐ γὰρ ἡ αὐτὴ χρεία ἀμφοτέροις ἐστίν.','Critobulus has a larger house and more money. Socrates seeks less. For both men do not have the same need.','μείζονα=larger; accusative feminine|πλείονα=more; neuter plural|ἐλάττονα=less; neuter plural|ἡ αὐτὴ=the same|ἀμφοτέροις=for both; supported form'),
p('Ὁ Κριτόβουλος ξένους δέχεται καὶ τοὺς πολίτας θεραπεύει. ἡ πόλις δὲ χρήματα αἰτεῖ. οὐ μόνον τὰ ἑαυτοῦ ἔργα, ἀλλὰ καὶ τὰ κοινὰ σκοπεῖ.','Critobulus receives guests and attends to his fellow citizens. The city asks for money. He considers not only his own affairs but also public affairs.','ξένους=guests|δέχεται=receives|θεραπεύει=attends to|αἰτεῖ=asks for|τὰ κοινὰ=public affairs'),
p('Τί οὖν ἄμεινόν ἐστιν; πλείω ἔχειν ἢ ἐλαττόνων δεῖσθαι; ὁ μὲν πλουσιώτατος οὐ πάντοτε εὐδαιμονέστατός ἐστιν. πολλάκις γὰρ οὐχ ἡσυχώτερον ζῇ.','What, then, is better: to have more or to need less? The richest person is not always the happiest. For he often does not live more peacefully.','ἄμεινόν=better; neuter|δεῖσθαι=to need; genitive object|πλουσιώτατος=richest|εὐδαιμονέστατός=happiest|ἡσυχώτερον=more peacefully; comparative adverb|ζῇ=lives'),
p('Ὁ Σωκράτης οὐ τῶν πενήτων καταφρονεῖ. τὴν χρείαν πρὸς τὰ χρήματα συγκρίνει. ἐν τῷ λόγῳ τὸ «πλέον» οὐ ταὐτόν ἐστι τῷ «ἱκανόν».','Socrates does not look down on poor people. He compares need with resources. In the argument, “more” is not the same as “enough.”','τῶν πενήτων=poor people; genitive|καταφρονεῖ=looks down on; takes genitive|συγκρίνει=compares|τὸ «πλέον»=the word more|ταὐτόν=the same; contraction of τὸ αὐτό')],vocabulary:vocab(`τὰ χρήματα|resources, money|χρῆμα, χρήματος, τό
ἡ οἰκία|house|οἰκία, οἰκίας, ἡ
ὁ ξένος|guest, stranger|ξένος, ξένου, ὁ
ὁ πολίτης|citizen|πολίτης, πολίτου, ὁ
πλούσιος|wealthy|πλούσιος, πλουσία, πλούσιον
πένης|poor person|πένης, πένητος, ὁ, ἡ
ἱκανός|sufficient|ἱκανός, ἱκανή, ἱκανόν
μέγας|large|μέγας, μεγάλη, μέγα
πολύς|much, many|πολύς, πολλή, πολύ
ἡσύχιος|quiet|ἡσύχιος, ἡσυχία, ἡσύχιον
εὐδαίμων|happy, flourishing|εὐδαίμων, εὔδαιμον
πλείων|more|πλείων, πλεῖον
ἐλάττων|less, smaller|ἐλάττων, ἔλαττον
ἀμείνων|better|ἀμείνων, ἄμεινον
γελάω|laugh|γελάω
δέχομαι|receive|δέχομαι
αἰτέω|ask for|αἰτέω
σκοπέω|consider|σκοπέω
θεραπεύω|attend to|θεραπεύω
ὅμως|nevertheless|ὅμως`)},
28:{greekTitle:'Ποτέραν ὁδὸν αἱρήσεται ὁ Ἡρακλῆς;',source:'Xenophon, Memorabilia 2.1.21–34, Socrates’ retelling of Prodicus’ Choice of Heracles',work:'Memorabilia',url:'https://www.hs-augsburg.de/homes/harsch/graeca/Chronologia/S_ante05/Prodikos/pro_hera.html',boundary:'This is an allegory attributed to Prodicus within Xenophon’s Socratic dialogue. The speeches are drastically shortened and newly worded. The reader’s final question is supplied; no historical meeting is asserted.',focus:'Demonstratives and questions distinguish two speakers, their promises, and the paths they recommend.',paragraphs:[
p('Ὁ Ἡρακλῆς νέος ὢν ἐν ἡσυχίᾳ ἐκάθητο. περὶ τοῦ βίου ἐσκόπει· ποτέραν ὁδὸν αἱρήσεται; δύο γυναῖκες προσῆλθον. ἡ μὲν Ἀρετὴ ἦν, ἡ δὲ Κακία.','Heracles, when young, was sitting in a quiet place. He was considering his life: which of two roads will he choose? Two women approached. One was Virtue, the other Vice.','ὢν=being; participle of εἰμί|ἐκάθητο=was sitting|ποτέραν=which of two; feminine accusative|αἱρήσεται=will choose|προσῆλθον=approached|Ἀρετὴ=Virtue; personification|Κακία=Vice; personification'),
p('Ἡ Κακία πρώτη λέγει· «ἥδε ἡ ὁδὸς ἡδεῖά ἐστιν. δεῦρο ἐλθέ. ἐνταῦθα σῖτον καὶ ποτὸν εὑρήσεις. οὐ πολλοὺς πόνους ἕξεις.»','Vice speaks first: “This road here is pleasant. Come here. Here you will find food and drink. You will not have many toils.”','πρώτη=first; feminine|ἥδε ἡ ὁδὸς=this road here|δεῦρο=here, hither|ἐνταῦθα=here, there|εὑρήσεις=will find|ἕξεις=will have'),
p('«Τίνες τὸν σῖτον παρασκευάζουσιν; πόθεν τὰ χρήματα;» ταύτας τὰς ἐρωτήσεις ὁ ἀναγινώσκων νῦν ἐρωτᾷ. ἡ μὲν ἐπαγγελία ἡδεῖά ἐστιν· ἡ δὲ ἐργασία τίνος;','“Who prepares the food? Where do the resources come from?” The reader now asks these questions. The promise is pleasant; but whose is the work?','Τίνες=who? plural|πόθεν=from where?|ταύτας τὰς ἐρωτήσεις=these questions|ὁ ἀναγινώσκων=the reader|ἐπαγγελία=promise|τίνος=whose?'),
p('Ἡ δὲ Ἀρετὴ λέγει· «ἐκείνη ἡ ὁδὸς ἄλλην ἐλπίδα παρέχει. οὐδὲν τῶν καλῶν ἄνευ πόνου οἱ θεοὶ διδόασιν. τοῖς φίλοις βοήθει καὶ τὰ καλὰ πράττε.»','Virtue says, “That road offers a different hope. The gods give none of the fine things without toil. Help your friends and do noble things.”','ἐκείνη ἡ ὁδὸς=that road|ἐλπίδα=hope|οὐδὲν=none, nothing|ἄνευ πόνου=without toil|διδόασιν=give; supported -μι form|βοήθει=help; imperative'),
p('Ἑκατέρα γυνὴ περὶ εὐδαιμονίας λέγει. ἡ μὲν τὴν νῦν ἡδονὴν δεικνύει, ἡ δὲ τὸν ἔπειτα βίον. οὐ πᾶσα ἡδονὴ κακή· τίς δὲ ἡδονὴ τοὺς φίλους βλάπτει;','Each woman speaks about happiness. One shows present pleasure, the other life afterwards. Not every pleasure is bad; but which pleasure harms friends?','Ἑκατέρα=each of two|εὐδαιμονίας=happiness|δεικνύει=shows; supported verb|ἔπειτα=afterwards|βλάπτει=harms'),
p('Οὗτος ὁ μῦθος οὐχ ἱστορία μάχης ἐστίν. πρόκεινται δύο βίοι. τίνα βίον θαυμάζεις; πῶς κρίνεις τὰς ἐπαγγελίας; ἡ καλὴ ὄψις οὐ μόνη τὴν ἀλήθειαν δηλοῖ.','This story is not an account of a battle. Two ways of life lie before us. Which life do you admire? How do you judge the promises? A fine appearance does not by itself reveal the truth.','Οὗτος ὁ μῦθος=this tale|πρόκεινται=lie before us; supported form|πῶς=how?|κρίνεις=you judge|ὄψις=appearance|δηλοῖ=reveals; supported -όω contract')],vocabulary:vocab(`ὁ μῦθος|tale|μῦθος, μύθου, ὁ
ἡ ἀρετή|virtue|ἀρετή, ἀρετῆς, ἡ
ἡ κακία|vice|κακία, κακίας, ἡ
ἡ ὁδός|road|ὁδός, ὁδοῦ, ἡ
ἡ ἐλπίς|hope|ἐλπίς, ἐλπίδος, ἡ
ἡ ἐπαγγελία|promise|ἐπαγγελία, ἐπαγγελίας, ἡ
ἡ εὐδαιμονία|happiness|εὐδαιμονία, εὐδαιμονίας, ἡ
ἡ ὄψις|appearance|ὄψις, ὄψεως, ἡ
ἡ ἀλήθεια|truth|ἀλήθεια, ἀληθείας, ἡ
ὅδε|this here|ὅδε, ἥδε, τόδε
οὗτος|this, that|οὗτος, αὕτη, τοῦτο
ἐκεῖνος|that over there|ἐκεῖνος, ἐκείνη, ἐκεῖνο
ποῖος|what sort of|ποῖος, ποία, ποῖον
πότερος|which of two|πότερος, ποτέρα, πότερον
κρίνω|judge|κρίνω
θαυμάζω|admire|θαυμάζω
παρασκευάζω|prepare|παρασκευάζω
πόθεν|from where|πόθεν
πῶς|how|πῶς
δεῦρο|here, hither|δεῦρο`)}
};
Object.assign(readings,{
29:{greekTitle:'Ἔστησαν ἐν τῇ χιόνι',source:'Xenophon, Anabasis 4.5.3–9',work:'Anabasis',url:'https://en.wikisource.org/wiki/Anabasis_(Dakyns)/Book_4/Chapter_5',boundary:'The snow, unequal access to fires, hunger-collapse, and distribution of food follow Xenophon. The compact sequence and closing judgment are adapted. A soldier’s command in the grammar workshop is invented practice, not a quotation.',focus:'Read athematic aorists beside imperfect background and familiar thematic aorists.',paragraphs:[
p('Οἱ Ἕλληνες διὰ τῆς Ἀρμενίας ἐπορεύοντο. χιὼν πολλὴ ἦν, καὶ τὸ ψῦχος χαλεπὸν ἦν. οἱ στρατιῶται καὶ τὰ ὑποζύγια ἐπόνουν· οὐ πάντες τὸν πόνον ἤνεγκαν.','The Greeks were marching through Armenia. There was much snow, and the cold was severe. The soldiers and pack animals struggled; not all endured the hardship.','τῆς Ἀρμενίας=Armenia|χιὼν=snow|τὸ ψῦχος=the cold|τὰ ὑποζύγια=pack animals|ἐπόνουν=were toiling|ἤνεγκαν=endured; aorist of φέρω'),
p('Πολλὰ μὲν τῶν ὑποζυγίων ἀπέθανεν, ἀπέθανον δὲ καὶ ἄνθρωποι. οὐ μόνον στρατιῶται ἀλλὰ καὶ δοῦλοι ἐν τῇ χιόνι ἦσαν. ὁ πόνος κοινὸς ἦν, ἡ δὲ δύναμις οὐκ ἴση.','Many of the pack animals died, and people died too. Not only soldiers but also enslaved people were in the snow. The hardship was shared, but their strength was not equal.','ἀπέθανεν=died; neuter plural subject with singular verb|ἀπέθανον=died; plural|δοῦλοι=enslaved people|κοινὸς=shared|δύναμις=strength|ἴση=equal'),
p('Οἱ πρῶτοι πῦρ ἔκαιον. οἱ δὲ ὕστερον ἐλθόντες τῷ πυρὶ προσῆλθον. οἱ πρῶτοι σῖτον ᾔτουν καὶ τότε τοὺς ἄλλους προσεδέχοντο.','Those who arrived first were keeping a fire burning. Those who came later approached the fire. The first arrivals demanded food and only then admitted the others.','πῦρ=fire|ἔκαιον=were burning|ὕστερον=later|τῷ πυρὶ=the fire; dative|ᾔτουν=were asking; imperfect of αἰτέω|προσεδέχοντο=were admitting; imperfect middle'),
p('Τῇ ὑστεραίᾳ οἱ ἄνδρες πάλιν ἐπορεύοντο. τινὲς δὲ ἔπεσον καὶ ἔμειναν. ὁ Ξενοφῶν ἔστη παρὰ τοῖς ἀσθενέσιν· οὐκ ἔγνω εὐθὺς τὸ πάθος.','On the next day the men were marching again. Some fell and remained behind. Xenophon stopped beside the weak men; he did not immediately recognize their condition.','Τῇ ὑστεραίᾳ=on the next day|ἔπεσον=fell; thematic aorist|ἔστη=stood, stopped; athematic aorist|τοῖς ἀσθενέσιν=the weak men|ἔγνω=recognized; athematic aorist|τὸ πάθος=condition, suffering'),
p('Ἀνήρ τις τὸ πάθος ἔγνω καὶ τῷ Ξενοφῶντι εἶπεν. ὁ δὲ παρὰ τὰ ὑποζύγια ἔβη καὶ σῖτον ἐζήτει. οἱ δυνατοὶ ἔφερον τὸν σῖτον τοῖς ἀσθενέσιν.','A man recognized the condition and told Xenophon. Xenophon went to the pack animals and looked for food. Those who were strong carried the food to the weak.','Ἀνήρ τις=a certain man|ἔβη=went; athematic aorist of βαίνω|ἐζήτει=was seeking|οἱ δυνατοὶ=those able, the strong|ἔφερον=were carrying'),
p('Οἱ ἀσθενεῖς ἔφαγον, εἶτα ἀνέστησαν καὶ ἐπορεύοντο. οὐ λόγος μόνον αὐτοὺς ἔσωσεν. τροφῆς γὰρ ἐδέοντο. ἐνταῦθα ἡ ἐπιμέλεια τοῖς φίλοις κέρδος ἔφερεν.','The weak men ate, then got up and continued marching. Words alone did not save them. For they needed nourishment. Here care brought benefit to their companions.','ἔφαγον=ate; thematic aorist|ἀνέστησαν=got up; athematic aorist|τροφῆς=nourishment; genitive|ἐδέοντο=needed|ἡ ἐπιμέλεια=care|κέρδος=benefit')],vocabulary:vocab(`ἡ χιών|snow|χιών, χιόνος, ἡ
τὸ πῦρ|fire|πῦρ, πυρός, τό
τὸ ὑποζύγιον|pack animal|ὑποζύγιον, ὑποζυγίου, τό
ὁ δοῦλος|enslaved man|δοῦλος, δούλου, ὁ
ἡ δύναμις|strength, ability|δύναμις, δυνάμεως, ἡ
τὸ πάθος|suffering, condition|πάθος, πάθους, τό
τὸ κέρδος|gain, benefit|κέρδος, κέρδους, τό
ἡ τροφή|nourishment|τροφή, τροφῆς, ἡ
ἡ ἐπιμέλεια|care|ἐπιμέλεια, ἐπιμελείας, ἡ
ἀσθενής|weak|ἀσθενής, ἀσθενές
δυνατός|able, strong|δυνατός, δυνατή, δυνατόν
ἴσος|equal|ἴσος, ἴση, ἴσον
βαίνω|go, step|βαίνω
γιγνώσκω|recognize, know|γιγνώσκω
ἵστημι|set upright, stand|ἵστημι
πίπτω|fall|πίπτω
καίω|burn|καίω
ἀποθνῄσκω|die|ἀποθνῄσκω
ὕστερον|later|ὕστερον
εἶτα|then|εἶτα`)},
30:{greekTitle:'Γνῶθι σεαυτόν',source:'Xenophon, Memorabilia 4.2.24–30; introductory context 4.2.1–8',work:'Memorabilia',url:'https://monadnock.net/xenophon/mem4-2.html',boundary:'The books, Delphic maxim, and examination of ability follow the source. The two-tablet classroom exercise is explicitly supplied to practice -όω verbs and numbers; it is not a report about Euthydemus.',focus:'Recognize -όω contractions and keep the speaker’s confidence separate from evidence.',paragraphs:[
p('Ὁ Εὐθύδημος πολλὰ βιβλία εἶχεν. σοφὸς εἶναι ἐνόμιζεν καὶ λέγειν καὶ πράττειν ἐβούλετο. ὁ δὲ Σωκράτης αὐτῷ διελέγετο καὶ τὴν γνώμην αὐτοῦ ἐξήταζεν.','Euthydemus had many books. He thought he was wise and wished to speak and act. Socrates conversed with him and examined his judgment.','Ὁ Εὐθύδημος=Euthydemus|βιβλία=books, scrolls|εἶχεν=had; imperfect|ἐνόμιζεν=thought|ἐβούλετο=wished|ἐξήταζεν=was examining'),
p('Ὁ Σωκράτης ἐρωτᾷ· «ἐν Δελφοῖς τὰ γράμματα εἶδες;» ὁ δὲ Εὐθύδημος ὁμολογεῖ. τὰ γράμματα λέγει· «γνῶθι σεαυτόν.» ἡ δὲ ἐρώτησις οὐκ ὀλίγον ἔργον παρέχει.','Socrates asks, “Did you see the inscription at Delphi?” Euthydemus agrees. The inscription says, “Know yourself.” The question presents no small task.','ἐν Δελφοῖς=at Delphi|τὰ γράμματα=the inscription; neuter plural|γνῶθι=know; athematic aorist imperative|σεαυτόν=yourself|παρέχει=presents'),
p('Τὸ ὄνομα μόνον οὐ δηλοῖ τὴν δύναμιν τοῦ ἀνθρώπου. ὁ ἵππον ζητῶν οὐ τὸ ὄνομα μόνον σκοπεῖ. τὸν ἵππον ἐξετάζει· ταχὺς ἢ βραδύς ἐστιν;','The name alone does not reveal a person’s ability. Someone looking for a horse does not consider only its name. He examines the horse: is it fast or slow?','τὸ ὄνομα=name|δηλοῖ=makes clear; -όω contract|τὴν δύναμιν=ability|ὁ ἵππον ζητῶν=someone seeking a horse|ταχὺς=fast|βραδύς=slow'),
p('Οὕτω καὶ ὁ ἄνθρωπος τὰ ἑαυτοῦ ἔργα σκοπεῖ. ὁ μὲν ἑαυτὸν γιγνώσκων τὰ χρήσιμα ζητεῖ. ὁ δὲ οὐ γιγνώσκων πολλάκις ἁμαρτάνει· ἡ ἐλπὶς οὐ πᾶν ἔργον κατορθοῖ.','In the same way a person examines his own actions. Someone who knows himself seeks useful things. Someone who does not know often makes mistakes; hope does not make every undertaking succeed.','Οὕτω=in this way|τὰ χρήσιμα=useful things|ἁμαρτάνει=makes mistakes|κατορθοῖ=makes successful; -όω contract|ἡ ἐλπὶς=hope'),
p('Ἐν τῇ ἀσκήσει δύο πίνακας πληροῦμεν. ἐν μὲν τῷ πρώτῳ τὰ ἔργα γράφομεν, ἐν δὲ τῷ δευτέρῳ τὰ τεκμήρια. οὐ χρυσοῦς πίναξ ἀληθῆ γνώμην παρέχει.','In the exercise we fill two tablets. On the first we write the tasks, and on the second the evidence. A golden tablet does not provide a true judgment.','Ἐν τῇ ἀσκήσει=in the course exercise|πίνακας=tablets|πληροῦμεν=we fill; -όω contract|τῷ δευτέρῳ=the second|τεκμήρια=evidence|χρυσοῦς=golden; contract adjective'),
p('«Ὡς ἐγὼ νομίζω, σοφός εἰμι» οὐ ταὐτόν ἐστι τῷ «τὸ ἔργον ὀρθῶς πράττω». τίνα οὖν τεκμήρια ζητοῦμεν; ὁ Σωκράτης οὐ μόνον τὸν λόγον ἀλλὰ καὶ τὸν βίον ἐξετάζει.','“As I think, I am wise” is not the same as “I do the task correctly.” What evidence, then, do we seek? Socrates examines not only speech but also life.','Ὡς=as|νομίζω=I think|ταὐτόν=the same|ὀρθῶς=correctly|τεκμήρια=evidence')],vocabulary:vocab(`τὸ βιβλίον|book, scroll|βιβλίον, βιβλίου, τό
τὸ γράμμα|letter, written mark|γράμμα, γράμματος, τό
τὸ ὄνομα|name|ὄνομα, ὀνόματος, τό
ὁ πίναξ|tablet|πίναξ, πίνακος, ὁ
τὸ τεκμήριον|evidence|τεκμήριον, τεκμηρίου, τό
ἡ ἄσκησις|practice, exercise|ἄσκησις, ἀσκήσεως, ἡ
χρήσιμος|useful|χρήσιμος, χρησίμη, χρήσιμον
ταχύς|fast|ταχύς, ταχεῖα, ταχύ
βραδύς|slow|βραδύς, βραδεῖα, βραδύ
χρυσοῦς|golden|χρυσοῦς, χρυσῆ, χρυσοῦν
πρῶτος|first|πρῶτος, πρώτη, πρῶτον
δεύτερος|second|δεύτερος, δευτέρα, δεύτερον
δηλόω|make clear|δηλόω
πληρόω|fill|πληρόω
κατορθόω|make successful|κατορθόω
νομίζω|think, suppose|νομίζω
ἁμαρτάνω|make a mistake|ἁμαρτάνω
γιγνώσκω|recognize, know|γιγνώσκω
ὡς|as; how; that (context-dependent)|ὡς
ὀρθῶς|correctly|ὀρθῶς`)},
31:{greekTitle:'Ἡ Πάνθεια οὐ πείθεται',source:'Xenophon, Cyropaedia 5.1.2–18 and 6.1.31–36',work:'Cyropaedia',url:'https://heritageinstitute.com/zoroastrianism/reference/xenophon/cyropaedia/cyropaedia6.htm',extra:[{title:'Cyropaedia 5.1 — Araspas’ confidence',url:'https://heritageinstitute.com/zoroastrianism/reference/xenophon/cyropaedia/cyropaedia5.htm'}],boundary:'The core events follow Xenophon’s literary account of Cyrus the Great. Present and imperfect forms replace some original tense constructions. Panthea’s refusal and appeal remain central. The reflective questions are the course’s, not quotations.',focus:'Ask who acts and who is affected: a passive subject is not necessarily a person without agency.',paragraphs:[
p('Ἡ Πάνθεια αἰχμάλωτός ἐστιν. ὁ Ἄρασπας ὑπὸ τοῦ Κύρου φύλαξ αὐτῆς τάττεται. ἡ γυνὴ ὑπὸ τούτου ἐφυλάττετο. οὗτος ὁ Κῦρος οὐχ ὁ τῶν Ἑλλήνων φίλος ἐν τῇ Ἀναβάσει ἐστίν, ἀλλὰ ὁ παλαιὸς βασιλεύς.','Panthea is a captive. Araspas is appointed her guardian by Cyrus. The woman was guarded by him. This Cyrus is not the Greeks’ ally in the Anabasis, but the earlier king.','αἰχμάλωτός=captive|ὁ Ἄρασπας=Araspas|ὑπὸ τοῦ Κύρου=by Cyrus; agent|φύλαξ=guardian|τάττεται=is appointed; passive|ἐφυλάττετο=was guarded; imperfect passive|ὁ παλαιὸς βασιλεύς=the earlier king'),
p('Ὁ Ἄρασπας ἑαυτῷ πιστεύει. τῶν ἐπιθυμιῶν κρατεῖν νομίζει. ὁ δὲ Κῦρος οὐχ οὕτως ἑαυτῷ πιστεύει καὶ τὴν καλὴν γυναῖκα ἰδεῖν οὐ βούλεται.','Araspas trusts himself. He thinks he can master his desires. Cyrus does not trust himself in the same way and does not wish to see the beautiful woman.','ἑαυτῷ=himself; dative with πιστεύω|κρατεῖν=to master; genitive object|νομίζει=thinks|ἰδεῖν=to see; aorist infinitive|βούλεται=wishes'),
p('Ὁ χρόνος προχωρεῖ· ὁ δὲ Ἄρασπας τῆς γυναικὸς ἐρᾷ. αὐτῇ λόγους προσφέρει. ἡ δὲ Πάνθεια οὐ πείθεται· τὸν ἑαυτῆς ἄνδρα φιλεῖ καὶ τὴν ἀδικίαν οὐ δέχεται.','Time passes, and Araspas desires the woman. He makes proposals to her. Panthea is not persuaded; she loves her husband and does not accept the wrongdoing.','ἐρᾷ=desires, is in love with; takes genitive|προσφέρει=offers|οὐ πείθεται=is not persuaded|ἑαυτῆς=her own|τὴν ἀδικίαν=wrongdoing'),
p('Ἡ γυνὴ ὑπὸ τοῦ φύλακος ἀπειλαῖς φοβεῖται. ὁ Ἄρασπας βίᾳ χρήσεσθαι λέγει. ἡ Πάνθεια οὐ σιωπᾷ· ἄγγελον πρὸς τὸν Κῦρον πέμπει καὶ βοήθειαν ζητεῖ.','The woman is frightened by her guardian’s threats. Araspas says he will use force. Panthea does not remain silent; she sends a messenger to Cyrus and seeks help.','ὑπὸ τοῦ φύλακος=by the guardian|ἀπειλαῖς=with threats; means|φοβεῖται=is frightened|βίᾳ χρήσεσθαι=to use force; future infinitive in the threat|ἄγγελον=messenger'),
p('Ὁ Κῦρος Ἀρτάβαζον πέμπει. ὁ Ἄρασπας ὑπὸ τοῦ Ἀρταβάζου ἐλέγχεται. ὁ γὰρ φύλαξ τὴν γυναῖκα φυλάττειν ὤφειλεν, οὐ φοβεῖν. νῦν δὲ αὐτὸς αἰσχύνεται.','Cyrus sends Artabazus. Araspas is rebuked by Artabazus. For the guardian ought to have protected the woman, not frightened her. Now he himself is ashamed.','Ἀρτάβαζον=Artabazus|ἐλέγχεται=is rebuked|ὤφειλεν=ought; imperfect of ὀφείλω|φυλάττειν=to protect|αἰσχύνεται=is ashamed; middle form'),
p('Σκόπει τὰς δύο φωνάς· «ὁ φύλαξ τὴν γυναῖκα φοβεῖ» καὶ «ἡ γυνὴ ὑπὸ τοῦ φύλακος φοβεῖται». ὁ αὐτὸς ἄνθρωπος ἀδικεῖ. τὸ δὲ πάθος τῆς γυναικὸς οὐ διὰ τὴν φωνὴν ἀφανὲς γίγνεται.','Consider the two voices: “The guardian frightens the woman” and “The woman is frightened by the guardian.” The same person does wrong. The woman’s suffering does not become invisible because of the grammatical voice.','Σκόπει=consider; imperative|τὰς δύο φωνάς=the two grammatical voices|ὁ αὐτὸς=the same|ἀδικεῖ=does wrong|ἀφανὲς=invisible; supported adjective')],vocabulary:vocab(`ὁ φύλαξ|guardian|φύλαξ, φύλακος, ὁ
ὁ ἄγγελος|messenger|ἄγγελος, ἀγγέλου, ὁ
ἡ ἀπειλή|threat|ἀπειλή, ἀπειλῆς, ἡ
ἡ βία|force|βία, βίας, ἡ
ἡ ἀδικία|wrongdoing|ἀδικία, ἀδικίας, ἡ
ἡ φωνή|voice|φωνή, φωνῆς, ἡ
ὁ χρόνος|time|χρόνος, χρόνου, ὁ
αἰχμάλωτος|captive|αἰχμάλωτος, αἰχμάλωτον
παλαιός|old, earlier|παλαιός, παλαιά, παλαιόν
τάττω|appoint, arrange|τάττω
πιστεύω|trust|πιστεύω
ἐράω|desire, love passionately|ἐράω
πείθω|persuade|πείθω
φοβέω|frighten|φοβέω
σιωπάω|be silent|σιωπάω
πέμπω|send|πέμπω
ἐλέγχω|rebuke, test|ἐλέγχω
φυλάττω|guard|φυλάττω
ἀδικέω|do wrong|ἀδικέω
αἰσχύνομαι|be ashamed|αἰσχύνομαι`)},
32:{greekTitle:'Ποῦ κεῖται τὰ σκεύη;',source:'Xenophon, Oeconomicus 8.11–20 and 9.2–10',work:'Oeconomicus',url:'https://www.gutenberg.org/files/1173/1173-h/1173-h.htm',boundary:'Ischomachus’ ship comparison and household organization are adapted from his report to Socrates. The concise questions about objects are course wording. His wife’s views reach us through a male speaker and author, not an independent transcript.',focus:'δύναμαι, κεῖμαι, and ἐπίσταμαι connect ability and knowledge with the practical arrangement of objects.',paragraphs:[
p('Ὁ Ἰσχόμαχος τῷ Σωκράτει περὶ τῆς οἰκίας λέγει. «ποῦ κεῖται τὰ σκεύη;» οὐ μικρὰ αὕτη ἡ ἐρώτησίς ἐστιν. ὁ γὰρ ζητῶν πολλάκις οὐ δύναται εὑρίσκειν.','Ischomachus speaks with Socrates about the household. “Where are the objects?” This is not a small question. For someone searching often cannot find them.','Ὁ Ἰσχόμαχος=Ischomachus|κεῖται=lie, are situated; neuter plural subject|τὰ σκεύη=equipment, objects|δύναται=is able|εὑρίσκειν=to find'),
p('Ὁ Ἰσχόμαχος ναῦν Φοινικικὴν εἶδεν. ἐν τῇ νηὶ πολλὰ σκεύη ἔκειτο· ἕκαστον δὲ τὴν ἑαυτοῦ χώραν εἶχεν. ὁ τῶν σκευῶν φύλαξ ἠπίστατο τὰς χώρας.','Ischomachus saw a Phoenician ship. Much equipment lay in the ship, and each item had its own place. The keeper of the equipment knew the places.','ναῦν Φοινικικὴν=a Phoenician ship|ἐν τῇ νηὶ=in the ship|ἔκειτο=lay; imperfect|ἕκαστον=each item|χώραν=place|ἠπίστατο=knew; imperfect'),
p('Ἡ ναῦς ἐν τῇ θαλάττῃ κινεῖται. ὅμως δὲ οἱ ναῦται τὰ χρήσιμα λαβεῖν δύνανται. ἡ δὲ οἰκία μένει· τί οὖν κωλύει καὶ ἐνθάδε τάξιν εἶναι;','The ship moves on the sea. Nevertheless the sailors can get useful things. But the house stays still; what then prevents order here too?','κινεῖται=moves; middle/passive|οἱ ναῦται=sailors|λαβεῖν=to get; aorist infinitive|δύνανται=are able|κωλύει=prevents|τάξιν=order'),
p('Ἡ γυνὴ τὴν τάξιν ζητεῖ. ὁ Ἰσχόμαχος τὰ οἰκήματα αὐτῇ δεικνύει. ὁ μὲν σῖτος ἐν ξηρῷ κεῖται, ὁ δὲ οἶνος ἐν ψυχρῷ. τὰ δὲ ἱμάτια ἄλλην χώραν ἔχει.','His wife asks for the arrangement. Ischomachus shows her the rooms. Grain lies in a dry place, wine in a cool place. Clothing has another place.','Ἡ γυνὴ=his wife|οἰκήματα=rooms|δεικνύει=shows; supported verb|ξηρῷ=dry place; substantival adjective|ψυχρῷ=cool place|ἱμάτια=clothes'),
p('Οἱ ἐν τῇ οἰκίᾳ οὐ πάντες τὰ αὐτὰ ἐπίστανται. ἡ μὲν γυνὴ τὰ ἔργα σκοπεῖ, οἱ δὲ δοῦλοι πονοῦσιν. ἡ τάξις καὶ μνήμης καὶ ἐργασίας δεῖται.','Not everyone in the house knows the same things. The wife oversees the work, while enslaved workers labor. Order requires both memory and work.','τὰ αὐτὰ=the same things|ἐπίστανται=know|σκοπεῖ=oversees|δοῦλοι=enslaved workers|μνήμης=memory; genitive|δεῖται=needs; takes genitive'),
p('Νῦν ἡμεῖς τὴν τάξιν ἐξετάζομεν. τίς εὑρίσκει τὰ σκεύη; τίς αὐτὰ κομίζει; τίς κελεύει; τὸ «δύναμαι» καὶ τὸ «ἐπίσταμαι» οὐ τὸ αὐτὸ δηλοῖ.','Now we examine the arrangement. Who finds the objects? Who carries them? Who gives orders? “I am able” and “I know how” do not mean the same thing.','ἡμεῖς=we|ἐξετάζομεν=examine|κομίζει=carries|κελεύει=gives orders|δηλοῖ=makes clear, means')],vocabulary:vocab(`τὸ σκεῦος|piece of equipment|σκεῦος, σκεύους, τό
ἡ ναῦς|ship|ναῦς, νεώς, ἡ
ὁ ναύτης|sailor|ναύτης, ναύτου, ὁ
ἡ τάξις|order, arrangement|τάξις, τάξεως, ἡ
ἡ χώρα|place, space|χώρα, χώρας, ἡ
τὸ οἴκημα|room|οἴκημα, οἰκήματος, τό
τὸ ἱμάτιον|cloak, garment|ἱμάτιον, ἱματίου, τό
ὁ οἶνος|wine|οἶνος, οἴνου, ὁ
ἡ μνήμη|memory|μνήμη, μνήμης, ἡ
ξηρός|dry|ξηρός, ξηρά, ξηρόν
ψυχρός|cool, cold|ψυχρός, ψυχρά, ψυχρόν
ἕκαστος|each|ἕκαστος, ἑκάστη, ἕκαστον
δύναμαι|be able|δύναμαι
κεῖμαι|lie, be situated|κεῖμαι
ἐπίσταμαι|know, understand how|ἐπίσταμαι
εὑρίσκω|find|εὑρίσκω
κινέω|move|κινέω
κομίζω|carry, convey|κομίζω
κωλύω|prevent|κωλύω
κελεύω|order, command|κελεύω`)}
});
Object.assign(readings,{
33:{greekTitle:'Τίς τὴν παιδείαν αἱρεῖται;',source:'Xenophon, Constitution of the Lacedaemonians 2.1–9',work:'Constitution of the Lacedaemonians',url:'https://www.gutenberg.org/files/1178/1178-h/1178-h.htm',boundary:'Xenophon describes and praises institutions attributed to Lycurgus. The questions about consent and the predictions in the last paragraphs are course discussion, not quotations or additional Spartan laws.',focus:'Distinguish first and second aorist passives from deponent aorists; connect passive verbs to the people who act.',paragraphs:[
p('Ὁ Ξενοφῶν τὴν τῶν Λακεδαιμονίων παιδείαν γράφει. οἱ παῖδες ἐπαιδεύοντο ὑπὸ τοῦ παιδονόμου. οὗτος ἀνὴρ τῶν πολιτῶν ἦν καὶ ἐξουσίαν εἶχεν.','Xenophon describes the education of the Spartans. The boys were educated by the supervisor of boys. He was a citizen and had authority.','τὴν τῶν Λακεδαιμονίων παιδείαν=the education of the Spartans|ἐπαιδεύοντο=were educated; imperfect passive|ὑπὸ τοῦ παιδονόμου=by the supervisor of boys|τῶν πολιτῶν=one of the citizens|ἐξουσίαν=authority'),
p('Οἱ παῖδες ἐδιδάχθησαν πείθεσθαι. οὐκ ἀεὶ ὑποδήματα εἶχον· γυμνοῖς γὰρ τοῖς ποσὶν ἐπορεύοντο. ἓν ἱμάτιον διὰ τοῦ ἐνιαυτοῦ ἔφερον.','The boys were taught to obey. They did not always have shoes; for they walked with bare feet. They wore one cloak throughout the year.','ἐδιδάχθησαν=were taught; first aorist passive|πείθεσθαι=to obey|ὑποδήματα=shoes|γυμνοῖς γὰρ τοῖς ποσὶν=with bare feet|τοῦ ἐνιαυτοῦ=the year'),
p('Ὀλίγος σῖτος τοῖς παισὶ παρεσκευάσθη. ἔστι δὲ ἐν τῷ λόγῳ καὶ κλοπὴ τροφῆς. ὁ δὲ ληφθεὶς παῖς ἐκολάσθη· οὐ γὰρ λάθρᾳ τὸ ἔργον ἔπραξεν.','Little food was prepared for the boys. The account also includes theft of food. But the boy who was caught was punished, for he did not carry out the act secretly.','παρεσκευάσθη=was prepared; aorist passive|κλοπὴ=theft|τροφῆς=food|ληφθεὶς=caught; aorist passive participle|ἐκολάσθη=was punished|λάθρᾳ=secretly'),
p('Ὁ Ξενοφῶν τὴν καρτερίαν ἐπαινεῖ. ἡμεῖς δὲ καὶ περὶ τῶν παίδων ἐρωτῶμεν. τίς τὴν παιδείαν εἵλετο; οἱ παῖδες ἢ οἱ τῆς πόλεως ἄρχοντες;','Xenophon praises endurance. We also ask about the boys. Who chose the education: the boys or those governing the city?','τὴν καρτερίαν=endurance|ἐπαινεῖ=praises|ἡμεῖς=we, the readers|ἐρωτῶμεν=ask|εἵλετο=chose; aorist middle'),
p('Ἐν παραδείγματι ὁ παῖς ἐφάνη ἀνδρεῖος καὶ τῷ διδασκάλῳ ἀπεκρίνατο. οὐ πᾶς ὁ παθὼν εὖ ἐπαιδεύθη. τὸ γὰρ πάθος οὐκ ἀεὶ τὴν φρόνησιν παρέχει.','In a teaching example the boy appeared brave and answered the teacher. Not everyone who suffered was well educated. For suffering does not always provide good judgment.','Ἐν παραδείγματι=in a teaching example|ἐφάνη=appeared; second aorist passive form|ἀπεκρίνατο=answered; aorist middle of a deponent|ὁ παθὼν=the person who suffered|ἐπαιδεύθη=was educated|τὴν φρόνησιν=good judgment'),
p('Τί ἐκ τῆς παιδείας γενήσεται; ὁ νέος παιδευθήσεται καὶ δοκιμασθήσεται. ἀλλὰ τίς αὐτὸν φυλάξει; ἡ τῶν παίδων σωτηρία καὶ ἡ τῶν πολιτῶν ἀρετὴ ἄξιαι λόγου εἰσίν.','What will result from the education? The young man will be educated and tested. But who will protect him? The safety of the boys and the virtue of the citizens are worthy of discussion.','γενήσεται=will result; future of γίγνομαι|παιδευθήσεται=will be educated|δοκιμασθήσεται=will be tested|φυλάξει=will protect|σωτηρία=safety|ἄξιαι λόγου=worthy of discussion')],vocabulary:vocab(`ἡ παιδεία|education|παιδεία, παιδείας, ἡ
ὁ παιδονόμος|supervisor of boys|παιδονόμος, παιδονόμου, ὁ
ὁ παῖς|child, boy|παῖς, παιδός, ὁ
ἡ ἐξουσία|authority|ἐξουσία, ἐξουσίας, ἡ
τὸ ὑπόδημα|shoe|ὑπόδημα, ὑποδήματος, τό
ὁ πούς|foot|πούς, ποδός, ὁ
ὁ ἐνιαυτός|year|ἐνιαυτός, ἐνιαυτοῦ, ὁ
ἡ κλοπή|theft|κλοπή, κλοπῆς, ἡ
ἡ τροφή|nourishment|τροφή, τροφῆς, ἡ
ἡ καρτερία|endurance|καρτερία, καρτερίας, ἡ
τὸ πάθος|experience, suffering|πάθος, πάθους, τό
ἡ σωτηρία|safety|σωτηρία, σωτηρίας, ἡ
γυμνός|bare|γυμνός, γυμνή, γυμνόν
παιδεύω|educate|παιδεύω
παρασκευάζω|prepare|παρασκευάζω
κολάζω|punish|κολάζω
ἐπαινέω|praise|ἐπαινέω
ἀποκρίνομαι|answer|ἀποκρίνομαι
δοκιμάζω|test|δοκιμάζω
λάθρᾳ|secretly|λάθρᾳ`)},
34:{greekTitle:'Μέτρον ἐν τῷ συμποσίῳ',source:'Xenophon, Symposium 2.24–27',work:'Symposium',url:'https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Sym.+2&lang=original',boundary:'The comparison of wine to water nourishing plants follows Socrates in the Symposium. The serving instructions and -μι practice sentences are reconstructed teaching dialogue, not a transcript. The lesson title is a traditional maxim, not a quotation assigned here to Xenophon.',focus:'Notice δίδωμι and τίθημι: what is given, what is placed, and who receives it?',paragraphs:[
p('Ὁ Καλλίας τοὺς φίλους ἐπὶ δεῖπνον καλεῖ. μετὰ δὲ τὸ δεῖπνον οἱ φίλοι πίνουσι καὶ διαλέγονται. ὁ Σωκράτης πάρεστιν· οὐ σιωπᾷ, ἀλλὰ περὶ τοῦ οἴνου λέγει.','Callias invites friends to dinner. After dinner the friends drink and converse. Socrates is present; he does not remain silent but speaks about wine.','Ὁ Καλλίας=Callias|ἐπὶ δεῖπνον=to dinner|μετὰ δὲ τὸ δεῖπνον=after dinner|πάρεστιν=is present|σιωπᾷ=remains silent'),
p('Ὁ οἶνος ἡδονὴν δίδωσιν, ἀλλὰ τὸ πολὺ βλάπτει. ὁ Σωκράτης τὰ φυτὰ παράδειγμα τίθησιν. ὀλίγον ὕδωρ τὰ φυτὰ αὔξει· τὸ δὲ πολὺ ὕδωρ κακὸν παρέχει.','Wine gives pleasure, but excess harms. Socrates sets out plants as an example. A little water makes plants grow; too much water causes harm.','δίδωσιν=gives; present of δίδωμι|τὸ πολὺ=excess, too much|τὰ φυτὰ=plants|τίθησιν=sets out; present of τίθημι|αὔξει=makes grow'),
p('Καὶ οἱ ἄνθρωποι μέτρου δέονται. ὁ Σωκράτης οὐ κελεύει πάντας πολὺ πίνειν. μικρὰ ποτήρια καὶ πολλάκις· οὕτως οἱ φίλοι ἡδέως τὴν ἑσπέραν διάγουσιν.','People too need measure. Socrates does not urge everyone to drink a great deal. Small cups, and frequently: in this way the friends spend the evening pleasantly.','μέτρου δέονται=need measure; genitive|μικρὰ ποτήρια=small cups|πολλάκις=frequently|ἡδέως=pleasantly|τὴν ἑσπέραν=the evening|διάγουσιν=spend'),
p('Ἐν τῷ ἡμετέρῳ παραδείγματι ὁ φίλος λέγει· «δὸς τὸ ποτήριον, θὲς δὲ τὸν κρατῆρα ἐν μέσῳ.» ὁ ἕτερος τὸ ποτήριον δίδωσι καὶ τὸν κρατῆρα τίθησιν.','In our teaching example the friend says, “Give the cup, and put the mixing bowl in the middle.” The other gives the cup and places the mixing bowl.','Ἐν τῷ ἡμετέρῳ παραδείγματι=in our teaching example|δὸς=give; aorist imperative|θὲς=put; aorist imperative|τὸν κρατῆρα=the mixing bowl|ἐν μέσῳ=in the middle'),
p('Ἔδοσαν μὲν τὸν οἶνον, ἔθεσαν δὲ τὰ ποτήρια. νῦν οἱ συμπόται λόγους ἀντὶ κραυγῆς ἀκούουσιν. ἡ τῶν φίλων συνουσία οὐ τῷ πλήθει τοῦ οἴνου μόνον κρίνεται.','They gave the wine and placed the cups. Now the fellow drinkers hear conversation instead of shouting. The gathering of friends is not judged by the quantity of wine alone.','Ἔδοσαν=they gave; aorist|ἔθεσαν=they placed; aorist|οἱ συμπόται=fellow drinkers|ἀντὶ κραυγῆς=instead of shouting|τῷ πλήθει=by the quantity|κρίνεται=is judged'),
p('Τί δίδομεν τοῖς φίλοις; τί τίθεμεν ἐν μέσῳ; οὐ ποτὸν μόνον, ἀλλὰ καὶ λόγον καὶ προσοχήν. ὁ δὲ τοῦ σώματος κύριος καὶ τοῦ ἄλλου ἀκούει.','What do we give our friends? What do we place in the middle? Not only drink, but also conversation and attention. The person in command of his body also listens to the other person.','δίδομεν=we give|τίθεμεν=we place|προσοχήν=attention|τοῦ σώματος=of the body|κύριος=master, in command')],vocabulary:vocab(`τὸ δεῖπνον|dinner|δεῖπνον, δείπνου, τό
ὁ οἶνος|wine|οἶνος, οἴνου, ὁ
τὸ φυτόν|plant|φυτόν, φυτοῦ, τό
τὸ ὕδωρ|water|ὕδωρ, ὕδατος, τό
τὸ μέτρον|measure|μέτρον, μέτρου, τό
τὸ ποτήριον|drinking cup|ποτήριον, ποτηρίου, τό
ὁ κρατήρ|mixing bowl|κρατήρ, κρατῆρος, ὁ
ἡ ἑσπέρα|evening|ἑσπέρα, ἑσπέρας, ἡ
ὁ συμπότης|fellow drinker|συμπότης, συμπότου, ὁ
ἡ κραυγή|shouting|κραυγή, κραυγῆς, ἡ
ἡ συνουσία|gathering, company|συνουσία, συνουσίας, ἡ
τὸ πλῆθος|quantity, multitude|πλῆθος, πλήθους, τό
ἡ προσοχή|attention|προσοχή, προσοχῆς, ἡ
δίδωμι|give|δίδωμι
τίθημι|put, place|τίθημι
βλάπτω|harm|βλάπτω
σιωπάω|be silent|σιωπάω
αὔξω|make grow|αὔξω
διάγω|spend time|διάγω
ἡδέως|pleasantly|ἡδέως`)},
35:{greekTitle:'Τί ἐστιν ἐγκράτεια;',source:'Xenophon, Memorabilia 3.9.4–5 and 4.5.1–12',work:'Memorabilia',url:'https://monadnock.net/xenophon/mem4-5.html',extra:[{title:'Memorabilia 3.9 — wisdom and self-control',url:'https://monadnock.net/xenophon/mem3-9.html'}],boundary:'The argument about knowledge, conduct, freedom, and appetite follows these two passages. Their combination, setting, and the -μι examples are newly composed; Xenophon does not stage this as one continuous conversation.',focus:'Use genitive absolutes to identify background circumstances; distinguish causing someone to stand from standing oneself.',paragraphs:[
p('Τοῦ Σωκράτους λέγοντος, οἱ φίλοι ἤκουον. ὁ δὲ περὶ σοφίας καὶ σωφροσύνης ἔλεγεν. οὐκ ἀρκεῖ τὸ ἀγαθὸν εἰδέναι καὶ τὸ κακὸν πράττειν.','While Socrates was speaking, the friends listened. He spoke about wisdom and sound self-control. It is not enough to know the good and do what is bad.','Τοῦ Σωκράτους λέγοντος=while Socrates was speaking; genitive absolute|σωφροσύνης=sound self-control|ἀρκεῖ=is enough|εἰδέναι=to know; perfect infinitive with present sense|τὸ κακὸν=what is bad'),
p('Ὁ Σωκράτης ἐρωτᾷ περὶ ἐλευθερίας. τῶν ἐπιθυμιῶν ἀρχουσῶν, ὁ ἄνθρωπος κύριος ἑαυτοῦ ἐστιν; ὁ γὰρ τῆς ἡδονῆς δοῦλος πολλάκις τὸ βέλτιστον οὐ πράττει.','Socrates asks about freedom. When desires rule, is the person master of himself? For the slave of pleasure often fails to do what is best.','ἐλευθερίας=freedom|τῶν ἐπιθυμιῶν ἀρχουσῶν=when desires rule; genitive absolute|ἑαυτοῦ=of himself|δοῦλος=slave; metaphor here|τὸ βέλτιστον=what is best'),
p('Ὁ ἐγκρατὴς καὶ μανθάνειν δύναται καὶ τοῖς φίλοις βοηθεῖν. οὐ πᾶσαν ἡδονὴν ἀφαιρεῖται· τὴν δὲ ὥραν καὶ τὸ μέτρον σκοπεῖ. οὕτως ὁ λόγος πρὸς τὸν βίον ἄγει.','The self-controlled person can both learn and help friends. He does not take away every pleasure; he considers the right time and measure. In this way the argument leads toward life.','Ὁ ἐγκρατὴς=the self-controlled person|μανθάνειν=to learn|ἀφαιρεῖται=takes away; middle|ὥραν=the right time|σκοπεῖ=considers'),
p('Ἐν παραδείγματι ὁ διδάσκαλος τὸν παῖδα ἵστησιν. ὁ δὲ παῖς ἔστη καὶ ἤκουσεν. τοῦ λόγου παυσαμένου, ὁ παῖς ἀπῆλθεν. οὐχ ὁ αὐτὸς τὰ πάντα πράττει.','In a teaching example the teacher makes the boy stand. The boy stood and listened. When the speech ended, the boy went away. The same person does not perform every action.','Ἐν παραδείγματι=in a teaching example|ἵστησιν=makes stand; transitive present|ἔστη=stood; intransitive second aorist|τοῦ λόγου παυσαμένου=when the speech ended; genitive absolute|ἀπῆλθεν=went away'),
p('Ἄλλο παράδειγμα· οἱ πολῖται τὸν ἄνδρα ἄρχοντα καθιστᾶσιν. ἐκεῖνος δὲ ἀπέστη τῆς ἀρχῆς. οἱ πολῖται αὐτὸν κατέστησαν· αὐτὸς δὲ ἀπέστη.','Another example: the citizens appoint the man ruler. He then withdrew from office. The citizens appointed him, but he himself withdrew.','καθιστᾶσιν=appoint; present of καθίστημι|ἀπέστη=withdrew; second aorist|τῆς ἀρχῆς=from office; genitive of separation|κατέστησαν=appointed; transitive aorist|αὐτὸς=he himself'),
p('Τῶν φίλων ζητούντων, ὁ λόγος οὐ παύεται. ἡ ἐγκράτεια μόνον ἡσυχία ἐστίν, ἢ δύναμις πρὸς τὸ καλῶς πράττειν; τὴν ἀπόκρισιν ἐν τῷ βίῳ καὶ ἐν τοῖς ἔργοις ζητοῦμεν.','While the friends investigate, the discussion does not stop. Is self-mastery merely quietness, or a capacity to act well? We seek the answer in life and actions.','Τῶν φίλων ζητούντων=while the friends investigate|ἡσυχία=quietness|δύναμις=capacity|πρὸς τὸ καλῶς πράττειν=for acting well|τὴν ἀπόκρισιν=the answer')],vocabulary:vocab(`ἡ σοφία|wisdom|σοφία, σοφίας, ἡ
ἡ σωφροσύνη|sound self-control|σωφροσύνη, σωφροσύνης, ἡ
ἡ ἐλευθερία|freedom|ἐλευθερία, ἐλευθερίας, ἡ
ὁ δοῦλος|slave|δοῦλος, δούλου, ὁ
ἡ ὥρα|season, right time|ὥρα, ὥρας, ἡ
ἡ δύναμις|capacity, power|δύναμις, δυνάμεως, ἡ
ἡ ἡσυχία|quietness|ἡσυχία, ἡσυχίας, ἡ
ἡ ἀπόκρισις|answer|ἀπόκρισις, ἀποκρίσεως, ἡ
ὁ διδάσκαλος|teacher|διδάσκαλος, διδασκάλου, ὁ
ἐγκρατής|self-controlled|ἐγκρατής, ἐγκρατές
κύριος|in command, master|κύριος, κυρία, κύριον
ἵστημι|make stand|ἵστημι
καθίστημι|appoint, establish|καθίστημι
ἀφίστημι|make withdraw|ἀφίστημι
μανθάνω|learn|μανθάνω
σκοπέω|consider|σκοπέω
παύομαι|cease|παύομαι
ἀρκέω|be sufficient|ἀρκέω
ἀφαιρέω|take away|ἀφαιρέω
καλῶς|well|καλῶς`)},
36:{greekTitle:'Ἀπὸ τοῦ ἑαυτοῦ πρὸς τὴν πόλιν',source:'Xenophon, Hellenica 2.4.38–43',work:'Hellenica',url:'https://en.wikisource.org/wiki/Hellenica_(Dakyns)/Book_2/Chapter_4',boundary:'The settlement, return, sacrifice, and oath follow Hellenica 2.4.38–42. The δείκνυμι/ἵημι examples and interpretive questions are course composition. Section 43 describes a later killing of leaders at Eleusis and subsequent reconciliation; it is not the same event as the first return in 403 BCE.',focus:'Read supplementary participles as completing verbs of perception or continuance; bring together the module’s patterns without introducing advanced indirect discourse.',paragraphs:[
p('Οἱ ἐκ τοῦ Πειραιῶς καὶ οἱ ἐκ τοῦ ἄστεως ἐπολέμουν. Παυσανίας δὲ καὶ οἱ πρέσβεις περὶ διαλλαγῶν ἐπράττοντο. τέλος οἱ ἄνδρες ἐπαύσαντο μαχόμενοι.','The men from Piraeus and the men from the city had been fighting. Pausanias and the envoys negotiated reconciliation. At last the men stopped fighting.','Οἱ ἐκ τοῦ Πειραιῶς=the men from Piraeus|τοῦ ἄστεως=the city|οἱ πρέσβεις=the envoys|διαλλαγῶν=reconciliation|ἐπαύσαντο μαχόμενοι=stopped fighting; supplementary participle'),
p('Οἱ δὲ ἐκ τοῦ Πειραιῶς εἰς τὴν πόλιν ἀνέβησαν. τὰ ὅπλα εἶχον καὶ εἰς τὴν ἀκρόπολιν ἦλθον. ἐκεῖ τῇ Ἀθηνᾷ ἔθυσαν. εἶτα οἱ πολῖται ἐβουλεύοντο.','The men from Piraeus went up into the city. They had their arms and came to the Acropolis. There they sacrificed to Athena. Then the citizens deliberated.','ἀνέβησαν=went up; athematic second aorist|τὰ ὅπλα=arms|τὴν ἀκρόπολιν=the Acropolis|ἔθυσαν=sacrificed|ἐβουλεύοντο=deliberated'),
p('Οἱ πολῖται ὤμοσαν μὴ μνησικακήσειν. οὐκ ἀεὶ τὰ παλαιὰ κακὰ πρὸς τοὺς ἄλλους φέρειν ἔμελλον. χαλεπὸν δὲ τὸ ἔργον· οἱ γὰρ ἄνθρωποι πολλὰ ἔπαθον.','The citizens swore not to bear grudges. They were not going to keep bringing old wrongs against one another. But the task was difficult, for the people had suffered much.','ὤμοσαν=swore; aorist of ὄμνυμι|μὴ μνησικακήσειν=not to bear grudges; future infinitive in the oath|τὰ παλαιὰ κακὰ=old wrongs|ἔμελλον=were going to|ἔπαθον=suffered'),
p('Ἐν τῷ διδακτικῷ παραδείγματι ὁ πολίτης τὴν ἀκρόπολιν δείκνυσιν. ὁ φίλος ὁρᾷ τοὺς ἄνδρας ἀναβαίνοντας. «οὗτοι ἤδη παύονται μαχόμενοι· τί δὲ ποιήσουσιν αὔριον;»','In the teaching example the citizen points out the Acropolis. His friend sees the men going up. “These men are now ceasing to fight; but what will they do tomorrow?”','διδακτικῷ παραδείγματι=teaching example|δείκνυσιν=points out; present of δείκνυμι|ὁρᾷ=sees|ἀναβαίνοντας=going up; supplementary participle with τοὺς ἄνδρας|αὔριον=tomorrow'),
p('Ἄλλο παράδειγμα· ὁ ἀνὴρ ἵησι τὸ βέλος, ὁ δὲ φίλος ἀφίησι τὸν λίθον. τὸ δὲ μὴ βάλλειν καὶ μὴ βλάπτειν κρίσιν ἔχει. οὐ πᾶσα δύναμις εὐθὺς εἰς ἔργον ἔρχεται.','Another example: the man sends a missile, and his companion lets go of a stone. But refraining from throwing and harming involves a decision. Not every power immediately passes into action.','ἵησι=sends; present of ἵημι|τὸ βέλος=missile|ἀφίησι=lets go of; present of ἀφίημι|μὴ βάλλειν=not throwing; articular infinitive|κρίσιν=a decision'),
p('Ὁ Ξενοφῶν ὕστερον καὶ περὶ τῶν ἐν Ἐλευσῖνι γράφει· οἱ στρατηγοὶ αὐτῶν ἀπέθανον. οὐ ῥᾳδία ἦν ἡ διαλλαγή. τίς οὖν ἡ σωφροσύνη τοῦ πολίτου; τὴν ἀρχὴν καὶ τὴν ὀργὴν μετὰ κρίσεως ἔχειν.','Xenophon later also writes about those at Eleusis: their generals died. Reconciliation was not easy. What, then, is the citizen’s self-control? To hold power and anger with judgment.','ὕστερον=later|ἐν Ἐλευσῖνι=at Eleusis|οἱ στρατηγοὶ=the generals|ἀπέθανον=died; they were killed in the source|ἡ διαλλαγή=reconciliation|μετὰ κρίσεως=with judgment')],vocabulary:vocab(`ὁ πρέσβυς|envoy, elder|πρέσβυς, πρέσβεως, ὁ
ἡ διαλλαγή|reconciliation|διαλλαγή, διαλλαγῆς, ἡ
τὸ ἄστυ|city, town|ἄστυ, ἄστεως, τό
ἡ ἀκρόπολις|acropolis|ἀκρόπολις, ἀκροπόλεως, ἡ
τὰ ὅπλα|arms|ὅπλον, ὅπλου, τό
τὸ βέλος|missile|βέλος, βέλους, τό
ὁ λίθος|stone|λίθος, λίθου, ὁ
ἡ κρίσις|judgment, decision|κρίσις, κρίσεως, ἡ
ἡ ὀργή|anger|ὀργή, ὀργῆς, ἡ
παλαιός|old, ancient|παλαιός, παλαιά, παλαιόν
δείκνυμι|show, point out|δείκνυμι
ἵημι|send, let go|ἵημι
ἀφίημι|release|ἀφίημι
ὄμνυμι|swear|ὄμνυμι
μνησικακέω|bear grudges|μνησικακέω
θύω|sacrifice|θύω
βουλεύομαι|deliberate|βουλεύομαι
βάλλω|throw|βάλλω
αὔριον|tomorrow|αὔριον
ὕστερον|later|ὕστερον`)}
});
