// Original explanations and exercises following the approved grammar allocation.
export const grammar={};
function s(id,title,body,table,applied){
 const rows=table.trim().split('\n').map(x=>x.split('|'));
 const tasks=rows.slice(0,4).map(([form,meaning],i)=>[`Analyze or translate: ${form}`,meaning,...rows.slice(0,4).filter((_,j)=>j!==i).map(x=>x[1])]);
 tasks.push(...applied.trim().split('\n').map(x=>x.split('|')));
 return {id,title,practiceTopic:id,body:body.split('\n'),table:{title,headers:['Form or construction','Meaning and analysis'],greekColumns:[0],rows},tasks};
}
grammar[37]=[
s('subjunctive-active','1. Present and aorist active subjunctives',`Mood tells us how a clause presents its action. The subjunctive commonly marks an action envisaged, proposed, or dependent on a purpose or other condition. It is not simply a future tense. In regular active forms, the characteristic vowels are ω and η: λύω, λύῃς, λύῃ, λύωμεν, λύητε, λύωσι(ν). The first singular looks like the indicative, so use context.
The present subjunctive uses the present stem; the first aorist uses the sigmatic aorist stem without an augment: λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν). A second aorist uses its own stem, as λάβω. The present presents an activity as ongoing or repeated; the aorist views it as a whole. Neither stem by itself means present versus past time here.`, `λύωμεν|present active subjunctive, first plural: we may release
λύσητε|aorist active subjunctive, second plural: you may release
λάβῃ|second aorist active subjunctive, third singular: he or she may take
λύῃς|present active subjunctive, second singular: you may release
λύω, λύῃς, λύῃ, λύωμεν, λύητε, λύωσι(ν)|complete present active paradigm
λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν)|complete first aorist active paradigm`, `Why is there no augment in λάβω?|The augment marks past indicative time, not this subjunctive.|All second aorists lack augments even in the indicative.|It is a present indicative.|The initial vowel is always deleted.
What difference matters between ἵνα λύῃ and ἵνα λύσῃ?|Present versus aorist aspect, not present versus past time.|The second clause must refer to yesterday.|One is always a question.|The subjects must differ.`),
s('subjunctive-middle','2. Middle, passive, and contracted forms',`The present middle/passive subjunctive has λύωμαι, λύῃ, λύηται, λυώμεθα, λύησθε, λύωνται. The first aorist middle has λύσωμαι, λύσῃ, λύσηται, λυσώμεθα, λύσησθε, λύσωνται. Middle voice is interpreted from the verb and context; it does not always mean an action done to oneself.
Aorist passives use the passive stem and active-type endings: λυθῶ, λυθῇς, λυθῇ, λυθῶμεν, λυθῆτε, λυθῶσι(ν). Contract verbs retain contraction: τιμῶ, τιμᾷς, τιμᾷ; ποιῶ, ποιῇς, ποιῇ. Do not classify a form by its last two letters alone: identify stem, voice, mood, person, and clause signal.`, `λύηται|present middle/passive subjunctive, third singular
λύσηται|aorist middle subjunctive, third singular
λυθῇ|aorist passive subjunctive, third singular
τιμῶμεν|present active subjunctive, first plural of τιμάω
λυθῶ, λυθῇς, λυθῇ, λυθῶμεν, λυθῆτε, λυθῶσι(ν)|aorist passive paradigm
ποιῶ / ποιῇς / ποιῇ / ποιῶμεν / ποιῆτε / ποιῶσι(ν)|present active subjunctive of ποιέω`, `Translate ἵνα ὁ παῖς παιδευθῇ.|so that the child may be educated|because the child educated someone yesterday|if only the child had money|the educated child alone
What is the voice of ἕληται from αἱρέω?|Middle: may choose.|Passive: was chosen.|Active future: will destroy.|There is no verb here.`),
s('deliberation-exhortation','3. Deliberation, exhortation, and prohibition',`A deliberative subjunctive asks what one should do: τί ποιήσω; means “What should I do?” rather than a request for a fact already established. First-person plural exhortations invite a shared action: ἀκούσωμεν, “Let us listen.” The subject is included in the proposal.
A negative exhortation uses μή. A prohibition addressed to another person commonly uses μή with the aorist subjunctive for a prohibited action, or μή with the present imperative for ongoing or habitual conduct. Compare μὴ κλέψῃς and μὴ κλέπτε. This is a useful aspect distinction, not a rule that the aorist always means one moment and the present always means “stop.”`, `τί ποιήσω;|What should I do? Deliberative subjunctive.
ἀκούσωμεν.|Let us listen. Aorist exhortation.
μὴ κλέψῃς.|Do not steal. Aorist subjunctive prohibition.
μὴ κλέπτε.|Do not steal / stop stealing, as context requires. Present imperative.
μὴ ἀδικήσωμεν.|Let us not do wrong.
ποῦ τὸν χιτῶνα φέρω;|Where should I carry the tunic? Deliberation in context.`, `Which proposal includes the speaker?|κρίνωμεν, let us judge|κρῖνε, judge!|κρίνει, he judges|ἔκρινε, he judged
Which negative belongs in a normal prohibition?|μή|οὐ exclusively|καί|γάρ`),
s('purpose','4. Purpose and clause reading',`A purpose clause explains what an action aims to achieve. In primary sequence, ἵνα, ὅπως, or ὡς can introduce a subjunctive: ἐρωτῶ ἵνα μάθω, “I ask so that I may learn.” The intended result need not actually happen. Negative purpose normally has μή after the purpose conjunction.
Find the main action, purpose signal, subject, and subjunctive. A new subject may appear in the purpose clause. Compare διδάσκω ἵνα ὁ παῖς μάθῃ: I teach, but the child learns. We meet systematic general clauses in Lesson 39 and the full condition system in Lesson 44; do not label every subjunctive clause a purpose clause.`, `ἐρωτῶ ἵνα μάθω.|I ask so that I may learn.
διδάσκω ἵνα ὁ παῖς μάθῃ.|I teach so that the child may learn.
φυλάττω ἵνα μὴ ἀπόληται.|I guard it so that it may not be lost.
κρίνωμεν ἵνα τὸ δίκαιον φανῇ.|Let us judge so that what is just may become clear.
ἵνα + subjunctive|purpose envisaged, not proof of achievement`, `Who learns in διδάσκω ἵνα ὁ παῖς μάθῃ?|the child|the speaker necessarily|the judge necessarily|no one can be identified
Does a purpose clause prove the purpose succeeded?|No; it expresses an aim.|Yes, always.|Only with a present stem.|Only when the subject changes.`)
];
grammar[38]=[
s('give-place-subjunctive','1. δίδωμι and τίθημι in the subjunctive',`Athematic verbs do not keep their indicative endings in the subjunctive. The present of δίδωμι retains reduplication: διδῶ, διδῷς, διδῷ, διδῶμεν, διδῶτε, διδῶσι(ν). Its aorist uses the shorter stem: δῶ, δῷς, δῷ, δῶμεν, δῶτε, δῶσι(ν). Do not infer aorist simply from a circumflex.
Similarly τίθημι has τιθῶ, τιθῇς, τιθῇ, τιθῶμεν, τιθῆτε, τιθῶσι(ν), while the aorist has θῶ, θῇς, θῇ, θῶμεν, θῆτε, θῶσι(ν). The indicative aorists ἔδωκα and ἔθηκα do not supply a -κ- to these subjunctives. Identify the stem before choosing “give” or “place.”`, `διδῶμεν|present active subjunctive of δίδωμι, first plural
δῶμεν|aorist active subjunctive of δίδωμι, first plural
τιθῆτε|present active subjunctive of τίθημι, second plural
θῆτε|aorist active subjunctive of τίθημι, second plural
διδῶ, διδῷς, διδῷ, διδῶμεν, διδῶτε, διδῶσι(ν)|present: give as activity
θῶ, θῇς, θῇ, θῶμεν, θῆτε, θῶσι(ν)|aorist: place as a whole`, `Choose “What should we give?”|τί δῶμεν;|τί ἔδομεν;|τί δίδοτε;|τί δώσει;
What distinguishes διδῷ from δῷ?|Present stem with reduplication versus aorist stem.|Active versus passive voice.|Singular versus plural.|Past versus future time necessarily.`),
s('stand-send-subjunctive','2. ἵστημι and ἵημι',`The present subjunctive of ἵστημι is ἱστῶ, ἱστῇς, ἱστῇ, ἱστῶμεν, ἱστῆτε, ἱστῶσι(ν). The intransitive second aorist is στῶ, στῇς, στῇ, στῶμεν, στῆτε, στῶσι(ν), “take a stand.” The transitive first aorist στήσω means “set something up” in the appropriate subjunctive clause; distinguish it by construction from future indicative στήσω.
For ἵημι, learn present ἱῶ, ἱῇς, ἱῇ and aorist ὧ, ᾗς, ᾗ; plural present ἱῶμεν, ἱῆτε, ἱῶσι and aorist ὧμεν, ἧτε, ὧσι. Compounds make the forms easier to recognize: ἀφῶ, “I may release.” Keep rough breathings and iota subscripts in the forms you write.`, `ἱστῶμεν|present active subjunctive: we may set up
στῶμεν|second aorist active subjunctive: we may take a stand
ἱῇ|present active subjunctive of ἵημι: he may send forth
ἀφῇ|aorist active subjunctive of ἀφίημι: he may release
ἱστῶ / ἱστῇς / ἱστῇ / ἱστῶμεν / ἱστῆτε / ἱστῶσι(ν)|present paradigm of ἵστημι
στῶ / στῇς / στῇ / στῶμεν / στῆτε / στῶσι(ν)|intransitive aorist paradigm`, `Translate ἵνα τὸν δοῦλον ἀφῇ.|so that he may release the enslaved man|because the enslaved man stood yesterday|let us place the implements|if only the owner had listened
Which form normally means “let us take a stand”?|στῶμεν|στήσωμεν with an expressed object|ἵστατε|ἔστησαν`),
s('mi-middle','3. Middle forms and principal parts',`Middle subjunctives retain middle endings. δίδωμι has present διδῶμαι and aorist δῶμαι; τίθημι has τιθῶμαι and θῶμαι. The aorist middle θῶμαι can mean “establish for myself” or “adopt,” depending on the object. Voice is a relationship between subject and action, not a fixed English reflexive.
Use a principal-part chain to locate the right stem: δίδωμι, δώσω, ἔδωκα; τίθημι, θήσω, ἔθηκα; ἵστημι, στήσω, ἔστησα / ἔστην; ἵημι, ἥσω, ἧκα. These indicative parts guide recognition, but nonindicative forms may use a different stem shape. Compare τίθεσθαι, an infinitive, with τιθώμεθα, a finite first plural subjunctive.`, `θώμεθα|aorist middle subjunctive, first plural of τίθημι
τιθώμεθα|present middle subjunctive, first plural of τίθημι
δῶνται|aorist middle subjunctive, third plural of δίδωμι
τίθεσθαι|present middle/passive infinitive of τίθημι
θῶμαι, θῇ, θῆται, θώμεθα, θῆσθε, θῶνται|aorist middle paradigm of τίθημι
δῶμαι, δῷ, δῶται, δώμεθα, δῶσθε, δῶνται|aorist middle paradigm of δίδωμι`, `Which is a finite proposal “let us establish a rule for ourselves”?|νόμον θώμεθα|νόμον τίθεσθαι|νόμον ἔθεντο|νόμον θήσεις
Does middle voice always require “oneself” in English?|No; interpret the verb in context.|Yes, in every clause.|Only if the subject is plural.|Middle voice is identical to past time.`),
s('mi-applications','4. Proposals, purposes, and commands',`Use the same clause questions as in Lesson 37 with the less familiar stems. τί δῶμεν; deliberates; δῶμεν τὰ δῶρα exhorts; δότε τὰ δῶρα commands a plural audience. δῶμεν is not an infinitive, and δότε is not a subjunctive.
A purpose can have a different subject: δίδωμι τὴν κλεῖδα ἵνα ἡ ταμία φυλάττῃ, “I give the key so that the housekeeper may guard it.” Ask whose purpose the sentence expresses. Describing an owner’s plan does not establish that the person carrying it out chose it freely. Keep historical interpretation distinct from parsing.`, `τί θῶμεν;|What should we place? Deliberative question.
δῶμεν τὰ δῶρα.|Let us give the gifts. Exhortation.
δότε τὰ δῶρα.|Give the gifts! Plural imperative.
δίδωμι ἵνα ἡ ταμία φυλάττῃ.|I give it so that the housekeeper may guard it. Purpose.
μὴ τὰ σκεύη ἀφῇς.|Do not let the implements go. Aorist prohibition.`, `Who is the subject of φυλάττῃ in the purpose example?|the housekeeper|the speaker|the key|the gifts
Which construction is an infinitive rather than a finite proposal?|τὰ σκεύη θεῖναι|τὰ σκεύη θῶμεν|τὰ σκεύη θῆτε|τὰ σκεύη θῇ`)
];
grammar[39]=[
s('fear-clauses','1. Fear clauses: μή and μή οὐ',`After a verb of fearing, μή introduces the feared event: φοβοῦμαι μὴ ἀπόληται, “I fear that he may perish.” It is not translated “I fear that he may not perish.” To fear that something will not happen, use μή οὐ: φοβοῦμαι μὴ οὐ ἔλθῃ, “I fear that he may not come.” Separate the clause introducer from the negation.
Primary sequence normally takes the subjunctive for a prospective event. After a historical main verb, an optative may appear, or the subjunctive may be retained. We support the optative in reading here and teach it fully in Lessons 42–43. Fear about a fact already treated as actual can use an indicative; do not force every fear into an imagined future.`, `φοβοῦμαι μὴ ἔλθῃ.|I fear that he may come.
φοβοῦμαι μὴ οὐ ἔλθῃ.|I fear that he may not come.
φοβοῦμαι μὴ ἀπόλωνται.|I fear that they may perish.
ἐφοβεῖτο μὴ ἔλθοι.|He feared that he might come; supported oblique optative.
δέδοικα μή...|I am afraid that...; a perfect form with present force`, `What does οὐ negate in μὴ οὐ βούλωνται?|Their willingness: the fear is that they will not be willing.|The main verb of fearing.|The existence of a clause.|The subject’s plurality.
What should you do with a retained subjunctive after a past fear verb?|Interpret it in context; retention is possible.|Declare the sentence ungrammatical.|Translate it as an imperative.|Remove the negative.`),
s('general-clauses','2. Indefinite relatives and general time clauses',`An indefinite relative clause can use ἄν with a subjunctive: ὃς ἂν βοηθῇ, “whoever helps.” A general temporal clause uses combinations such as ὅταν (ὅτε + ἄν), “whenever,” and ἐπειδάν, “whenever/when.” The construction envisages any occasion or person meeting the description, rather than identifying one completed event.
Relative pronouns still take their case from their role inside the clause. In ᾧ ἂν βοηθῇς, the dative is required by βοηθέω. Distinguish a definite temporal ὅτε with indicative from a general ὅταν with subjunctive. Past general conditions with optative will be treated systematically later.`, `ὃς ἂν βοηθῇ|whoever helps; indefinite relative subject
ᾧ ἂν βοηθῇς|whomever you help; dative with βοηθέω
ὅταν κάμνῃ|whenever he is exhausted; general temporal clause
ὅτε ἔκαμνεν|when he was exhausted; definite past temporal clause
ὅταν + subjunctive|general or prospective occasion, interpreted from context`, `Why is ᾧ dative in ᾧ ἂν βοηθῇς?|βοηθέω governs the dative inside the relative clause.|It copies every antecedent’s case.|ἄν always requires a dative.|The clause is passive.
Which wording generalizes across occasions?|ὅταν ὁ στρατιώτης κάμνῃ|ὅτε χθὲς ἔκαμεν|ἐχθὲς ἔκαμεν|ὁ στρατιώτης τότε ἔκαμεν`),
s('reporting-introduction','3. A claim and a report of that claim',`Direct speech gives a speaker’s words as an utterance. Indirect statement embeds their claim under a reporting verb. λέγει ὅτι ἐπλήγη means “He says that he was struck”: the passive aorist belongs to the claim, not to the act of reporting. Identifying the report does not certify its truth.
With ὅτι or ὡς, the embedded clause remains finite. An infinitive construction is also common after suitable verbs: φησὶ τὸν στρατηγὸν παίειν. Its expressed subject is accusative; the general, not the reporting speaker, strikes. We develop the governing-verb patterns and relative tense in Lesson 40.`, `λέγει· ἐπλήγην.|He says, “I was struck.” Direct speech.
λέγει ὅτι ἐπλήγη.|He says that he was struck. Finite indirect statement.
φησὶ τὸν στρατηγὸν παίειν.|He says that the general strikes. Accusative and infinitive.
λέγει ὅτι οὐκ ἔπαισεν.|He says that he did not strike. Negative embedded claim.
ὅτι / ὡς + finite verb|two common introductions to an indirect assertion`, `Who is the subject of παίειν in φησὶ τὸν στρατηγὸν παίειν?|the general|necessarily the reporting speaker|the accuser’s father|no subject is possible
Does λέγει ὅτι make the embedded claim a proven fact?|No; it marks attribution.|Yes, automatically.|Only if the verb is aorist.|Only if there is a negative.`),
s('indirect-questions','4. Reporting questions without losing the question',`An indirect question preserves what is being asked: ἐρωτᾷ τίς ἔπαισεν, “He asks who struck.” A question word such as τίς, πῶς, or πότε does not become a relative merely because the question is embedded. A yes/no question can use εἰ, “whether.”
Track person and reference when shifting from direct speech. “Why did you strike me?” becomes “He asks why the general struck him.” The original “you” and “me” cannot both remain unchanged in a narrator’s report. At this stage use primary reporting frames; historical sequence is supported until formal instruction in Lesson 43.`, `ἐρωτᾷ τίς ἔπαισεν.|He asks who struck.
ἐρωτᾷ πότε ἔπαθεν.|He asks when he suffered.
ἐρωτᾷ εἰ ὁ στρατηγὸς ἔπαισεν.|He asks whether the general struck.
ἐρωτᾷ διὰ τί ὁ στρατηγὸς αὐτὸν ἔπαισεν.|He asks why the general struck him.
τί ποιήσω; → ἐρωτᾷ τί ποιήσῃ.|What should I do? → He asks what he should do.`, `How is εἰ translated in ἐρωτᾷ εἰ ἦλθεν?|whether|if only|whenever|so that
What must be checked when reporting “you struck me”?|The identities represented by both pronouns.|Only the number of syllables.|Only the main verb’s accent.|Whether the accusation is popular.`)
];
grammar[40]=[
s('reporting-infinitive','1. Infinitive reports and relative time',`After verbs such as φημί and νομίζω, an assertion can be reported with an infinitive. A different expressed subject normally stands in the accusative: φησὶ τὸν ἄνδρα λέγειν. If the subject is the same as the reporting verb, it is often omitted and predicates may remain nominative: φησὶ δίκαιος εἶναι, “He says that he himself is just.”
In indirect statement, the infinitive’s stem can express time relative to the report: present λέγειν is simultaneous, aorist εἰπεῖν prior, future ἐρεῖν later, and perfect εἰρηκέναι a completed action with its resulting relevance. This reporting use differs from a complementary infinitive after “wish,” where aspect is central and the aorist does not simply mark past time.`, `φησὶ τὸν ἄνδρα λέγειν.|He says that the man is speaking; simultaneous.
φησὶ τὸν ἄνδρα εἰπεῖν.|He says that the man spoke; prior.
φησὶ τὸν ἄνδρα ἐρεῖν.|He says that the man will speak; later.
φησὶ δίκαιος εἶναι.|He says that he himself is just; shared subject.
φησὶ τὸν ἄνδρα εἰρηκέναι.|He says that the man has spoken; perfect result/relevance.`, `Why is τὸν ἄνδρα accusative in the first report?|It is the expressed subject of the infinitive.|It must be the object of speaking.|All subjects in Greek are accusative.|φημί always governs two direct objects.
Does βούλεται εἰπεῖν mean “he wishes that he spoke yesterday”?|No; here the infinitive expresses the desired action as a whole.|Yes, every aorist infinitive is past.|Only if the subject is omitted.|Yes, because βούλεται is present.`),
s('participle-finite-report','2. Perception participles and finite reports',`Verbs of perception or knowledge often take a supplementary participle agreeing with the person or thing perceived: ὁρῶ τὸν δῆμον ὀργιζόμενον, “I see the people becoming angry.” The participle is part of the complement, not merely an optional circumstantial addition. Its case agrees with the relevant noun.
Verbs of saying and knowing can also introduce finite clauses with ὅτι or ὡς. Do not substitute infinitives, participles, and finite clauses mechanically after every verb: the governing verb and intended meaning matter. Compare hearing a person speaking, hearing the report that something happened, and asserting that it happened.`, `ὁρῶ τὸν δῆμον ὀργιζόμενον.|I see the people becoming angry; supplementary participle.
λέγει ὅτι χειμὼν ἐκώλυσεν.|He says that a storm prevented it; finite report.
ὁρῶ τὸν ἄνδρα ἐλθόντα.|I see that the man has arrived; aorist participle.
ἀκούω τὸν ἄνδρα λέγοντα.|I hear the man speaking; perceived action.
ὀργιζόμενον agrees with τὸν δῆμον|accusative masculine singular`, `What controls ὀργιζόμενον in the perception example?|τὸν δῆμον, the perceived people.|The first-person speaker.|The conjunction ὅτι.|A hidden feminine noun necessarily.
Why not replace every report with a participle?|Governing verbs license different complements and meanings.|Participles cannot have objects.|Greek has no finite reports.|All participles are passive.`),
s('phemi','3. φημί and negation',`Learn present φημί, φῄς, φησί(ν), φαμέν, φατέ, φασί(ν), and imperfect ἔφην, ἔφησθα, ἔφη, ἔφαμεν, ἔφατε, ἔφασαν. Most present indicative forms are enclitic in their usual use; φῄς is accented. Position and neighboring accents can affect how enclitics are written in a sentence.
οὔ φημι can deny the embedded assertion: “I say that it is not so” or “I deny.” Check the scope of negation before translating word for word as “I do not say.” A negative inside a finite report normally stays with its own verb: λέγει ὅτι οὐκ ἦλθεν.`, `φησί(ν)|he or she says; present third singular
φασί(ν)|they say; present third plural
ἔφησθα|you said; imperfect second singular
ἔφασαν|they said; imperfect third plural
φημί / φῄς / φησί / φαμέν / φατέ / φασί|present indicative paradigm
ἔφην / ἔφησθα / ἔφη / ἔφαμεν / ἔφατε / ἔφασαν|imperfect paradigm`, `Translate οὔ φημι τοῦτο δίκαιον εἶναι in its normal denial sense.|I deny that this is just.|I always say that it is just.|I ask who is just.|I saw a just person.
Which present form is normally accented rather than enclitic?|φῄς|φημί in its ordinary enclitic use|φαμέν in its ordinary enclitic use|φατέ in its ordinary enclitic use`),
s('articular-infinitive','4. The articular infinitive',`An article can turn an infinitive phrase into a noun-like unit: τὸ χωρὶς ἕκαστον κρίνειν, “trying each person separately.” The article is neuter singular; its case follows the phrase’s function. The infinitive itself does not acquire case endings.
An expressed subject of the infinitive is accusative. Other objects and adverbs remain inside the phrase. With prepositions, read the whole unit: πρὸ τοῦ τὴν βουλὴν κρῖναι, “before the council judges.” Here τὴν βουλήν is the infinitive’s subject, while τοῦ belongs to the entire infinitive phrase.`, `τὸ ἀκούειν|listening; nominative or accusative articular infinitive
τοῦ ἀκούειν|of listening; genitive articular infinitive
τῷ ἀκούειν|by/in listening; dative articular infinitive
πρὸ τοῦ τὴν βουλὴν κρῖναι|before the council judges; accusative subject within genitive phrase
τὸ χωρὶς ἕκαστον κρίνειν|trying each person separately`, `What has genitive case in πρὸ τοῦ κρῖναι?|The article marking the whole infinitive phrase.|A genitive ending on κρῖναι.|The main-clause subject necessarily.|The preposition itself.
Who judges in πρὸ τοῦ τὴν βουλὴν κρῖναι?|the council|the author necessarily|the infinitive has no subject|the accused necessarily`),
s('relative-attraction-euphony','5. Relative antecedents, attraction, and prefixes',`Normally a relative agrees with its antecedent in gender and number but takes case from its own clause. In attraction, a relative that would otherwise be accusative may adopt a genitive or dative antecedent’s case: τῶν ἀγαθῶν ὧν ἔχει, “of the good things which he has.” A relative can also have an understood antecedent: ὃ λέγει, “what he says.” Recover the clause’s function before parsing an attracted form.
Prepositional prefixes change spelling at boundaries. ἐκ becomes ἐξ before a vowel; συν- can become συμ- before a labial and συγ- before a velar; final vowels can elide, as ἀπό + ἄγω → ἀπάγω. A rough breathing can affect the final consonant, as κατά + ἵστημι → καθίστημι. Use these patterns to recover dictionary entries, not to invent a meaning from the prefix alone.`, `ὃ λέγει|what he says; understood antecedent
τῶν ἀγαθῶν ὧν ἔχει|of the good things which he has; attracted relative
ἐκ + ἄγω → ἐξάγω|ἐκ becomes ἐξ before a vowel
σύν + γράφω → συγγράφω|prefix nasal assimilates before a velar
σύν + βάλλω → συμβάλλω|prefix nasal assimilates before a labial
κατά + ἵστημι → καθίστημι|elision and aspiration at the compound boundary`, `In an attracted ὧν, should the genitive be copied into the English object relation?|No; reconstruct the relative clause’s function.|Yes, always translate “whose.”|It means the clause has no verb.|It must be a purpose clause.
Which dictionary pair explains ἀπάγω?|ἀπό + ἄγω|ἀνά + πάσχω|ἀεί + ἀγορά|ἀντί + ἔχω`)
];
grammar[41]=[
s('comparison-stems','1. Regular and irregular comparison',`Regular comparatives commonly use -τερος and superlatives -τατος: σοφός, σοφώτερος, σοφώτατος. Learn the whole adjective and accent. Some frequent comparisons use other stems: ἀγαθός can give ἀμείνων/ἄριστος or βελτίων/βέλτιστος; μέγας gives μείζων/μέγιστος, and πολύς gives πλείων/πλεῖστος. Their shades of meaning depend on context.
A comparative can compare with an explicit standard, imply “rather/too,” or contrast two alternatives. A superlative can mean the highest in a group or intensively “very.” Thus σοφώτατος need not always assert that someone is the wisest person in the world.`, `σοφώτερος / σοφώτατος|wiser / wisest or very wise; regular comparison
ἀμείνων / ἄριστος|better / best; irregular comparison of ἀγαθός
μείζων / μέγιστος|greater / greatest; comparison of μέγας
πλείων / πλεῖστος|more / most; comparison of πολύς
βελτίων / βέλτιστος|better / best; another comparison of ἀγαθός
ἥττων / ἥκιστος|less or inferior / least`, `Translate ἀνὴρ σοφώτατος where no comparison group is asserted.|a very wise man|a man who will become wise|the only wise man in history|a less wise man
Which pair compares μέγας?|μείζων, μέγιστος|πλείων, πλεῖστος|βελτίων, βέλτιστος|ἥττων, ἥκιστος`),
s('comparative-declension','2. Comparatives in -ων and -ον',`Comparatives such as μείζων have masculine/feminine nominative singular -ων and neuter -ον. The n-stem produces genitive μείζονος, dative μείζονι, and accusative masculine/feminine μείζονα. Neuter nominative and accusative agree: μεῖζον. Learn the accent as part of the form.
Contracted alternatives coexist with n-stem forms: accusative singular μείζω alongside μείζονα, plural masculine/feminine μείζους alongside μείζονες/μείζονας, and neuter plural μείζω alongside μείζονα. A form such as ἀμείνω can therefore be accusative singular masculine/feminine or neuter plural. Agreement and context resolve it.`, `μείζονος|genitive singular comparative, all genders
μείζονι|dative singular comparative, all genders
μείζονα / μείζω|accusative singular masculine/feminine, or neuter plural in context
μείζονες / μείζους|masculine/feminine nominative plural alternatives
μείζονας / μείζους|masculine/feminine accusative plural alternatives
μειζόνων / μείζοσι(ν)|genitive plural / dative plural`, `Parse ἀμείνω in τὴν πόλιν ἀμείνω ποιεῖ.|accusative feminine singular agreeing with πόλιν|nominative masculine singular|genitive plural|a future verb
Why must you inspect agreement when reading μείζω?|The contracted form can serve more than one case/number pattern.|It is always an indeclinable adverb.|Its gender is always masculine.|It never modifies a noun.`),
s('comparison-constructions','3. Standards of comparison and adverbs',`A comparative can take a genitive standard: μείζων τῆς οἰκίας, “larger than the house.” With ἤ, keep the compared items parallel in construction: σοφώτερος ἢ ὁ ἀδελφός. Distinguish the comparative’s standard from a possessive genitive elsewhere in the sentence.
Adverbs commonly use neuter singular comparative and neuter plural superlative: σοφῶς, σοφώτερον, σοφώτατα. Common irregular forms include εὖ, ἄμεινον/βέλτιον, ἄριστα/βέλτιστα, and μάλα, μᾶλλον, μάλιστα. Comparison can express degree of an action as well as a quality of a noun.`, `μείζων τῆς οἰκίας|larger than the house; genitive standard
σοφώτερος ἢ ὁ ἀδελφός|wiser than the brother; ἤ comparison
σοφώτερον πράττει|he acts more wisely; comparative adverb
σοφώτατα πράττει|he acts most wisely; superlative adverb
μάλα / μᾶλλον / μάλιστα|very / more / most
εὖ / βέλτιον / βέλτιστα|well / better / best`, `What does τῆς δαπάνης express after μικρότερον?|The standard: smaller than the expense.|The speaker of indirect speech.|Purpose.|An accusative absolute.
Which is an adverb modifying an action?|σοφώτερον πράττει|σοφώτερος ἀνήρ|σοφωτέρα γυνή|σοφώτερον τέκνον`),
s('care-object-clauses','4. Care and effort: ὅπως with future indicative',`Verbs of care and effort can take an object clause with ὅπως and future indicative: ἐπιμελοῦ ὅπως οἱ φύλακες φυλάξουσιν, “Take care that the guards will protect.” The clause states the result one is to see to. A negative object clause uses ὅπως μή. The future is a finite indicative, not a subjunctive merely because ὅπως appears.
Compare a purpose clause: ἆθλα δίδωσιν ἵνα οἱ πολῖται πονῶσιν, “He gives prizes so that the citizens may work.” First identify the governing verb and clause function, then the form. A ruler’s intention, a plan requiring effort, and an achieved result remain three different claims.`, `ἐπιμελοῦ ὅπως φυλάξουσιν.|Take care that they will protect; future indicative object clause.
σκόπει ὅπως ἐργάσονται.|See that they will work; future middle object clause.
δίδωσιν ἵνα πονῶσιν.|He gives so that they may work; subjunctive purpose.
ἐπιμελοῦ ὅπως μὴ ἀδικήσουσιν.|Take care that they will not do wrong; negative object clause.
φυλάξουσιν / φυλάξωσιν|future indicative / aorist subjunctive, third plural`, `Which form fits a care clause specifying “they will guard”?|φυλάξουσιν|φυλάξωσιν as the future indicative|ἐφύλαξαν|φυλάττειν alone
Does the presence of ὅπως prove the verb is subjunctive?|No; inspect the form and governing construction.|Yes, in every clause.|Only with plural subjects.|It proves the verb is an infinitive.`)
];
grammar[42]=[
s('optative-active','1. Present and aorist active optatives',`The optative presents wishes, possibilities, and certain subordinate reports or general situations. Regular present active forms are λύοιμι, λύοις, λύοι, λύοιμεν, λύοιτε, λύοιεν. The οι is a useful clue, but not every οι in a word marks an optative. Compare indicative λύει and optative λύοι.
First aorist active forms include λύσαιμι, λύσαις/λύσειας, λύσαι/λύσειε(ν), λύσαιμεν, λύσαιτε, λύσαιεν/λύσειαν. A second aorist uses its stem: λάβοιμι. No augment appears. Present versus aorist expresses aspect outside oblique reporting, not a simple present-versus-past time opposition.`, `λύοιμεν|present active optative, first plural
λύσαιμεν|aorist active optative, first plural
λάβοι|second aorist active optative, third singular
λύσειαν|alternative aorist active optative, third plural
λύοιμι / λύοις / λύοι / λύοιμεν / λύοιτε / λύοιεν|present active paradigm
λύσαιμι / λύσειας / λύσειε / λύσαιμεν / λύσαιτε / λύσειαν|common first-aorist active paradigm`, `What stem is used in λάβοιμι?|the second aorist stem λαβ-|the present stem λαμβαν-|a perfect stem|a future passive stem
Does an aorist optative wish necessarily refer to past time?|No; the aorist presents the wished action as a whole.|Yes, all aorists refer to yesterday.|Only when the subject is plural.|An optative cannot express a wish.`),
s('optative-other-forms','2. Middle, passive, and contract optatives',`Present middle/passive forms are λυοίμην, λύοιο, λύοιτο, λυοίμεθα, λύοισθε, λύοιντο. First aorist middle forms are λυσαίμην, λύσαιο, λύσαιτο, λυσαίμεθα, λύσαισθε, λύσαιντο. Aorist passive uses -ειη- in the singular, as λυθείην, λυθείης, λυθείη; plural λυθεῖμεν, λυθεῖτε, λυθεῖεν has shorter alternatives beside longer forms.
Contract verbs combine stem vowels with optative vowels. Learn τιμῴην/τιμῷμι, ποιοίην/ποιοῖμι and their common plurals τιμῷμεν, ποιοῖμεν. εἰμί has εἴην, εἴης, εἴη, εἶμεν/εἴημεν, εἶτε/εἴητε, εἶεν/εἴησαν. Use a reference table when recognizing alternative forms.`, `λύοιτο|present middle/passive optative, third singular
λύσαιτο|aorist middle optative, third singular
λυθείη|aorist passive optative, third singular
ποιοῖμεν|present active contract optative, first plural
λυοίμην / λύοιο / λύοιτο / λυοίμεθα / λύοισθε / λύοιντο|present middle/passive paradigm
εἴην / εἴης / εἴη / εἶμεν / εἶτε / εἶεν|optative of εἰμί`, `Choose “he might be educated” with potential ἄν.|παιδευθείη ἄν|παιδεύει ἄν|ἐπαίδευσε without ἄν|παιδεύειν alone
What does εἴη represent?|optative of εἰμί|aorist of ἵημι|present imperative of ὁράω|future infinitive of λέγω`),
s('wish-potential','3. Wishes and potentiality',`A wish for the future can use the optative alone or with εἴθε/εἰ γάρ: εἴθε δικαίως κρίνοιεν, “May they judge justly.” Negate such a wish with μή. This is an aspiration, not a claim that the action has occurred.
Potential optative normally has ἄν: δικαίως κρίνοιεν ἄν, “They might judge justly” or “They would judge justly,” depending on context. Negation is normally οὐ. The particle belongs to the potential statement, not to an ordinary wish. Translate the speaker’s degree of commitment before assigning an English modal.`, `εἴθε δικαίως κρίνοιεν.|May they judge justly; wish.
δικαίως κρίνοιεν ἄν.|They might judge justly; potential optative.
εἴθε μὴ ἀδικοῖεν.|May they not do wrong; negative wish.
οὐκ ἂν ἀδικοῖεν.|They would not do wrong; negative potential.
εἰ γὰρ εἰρήνη γένοιτο.|If only peace would come about.`, `Which particle normally marks a potential optative?|ἄν|ἵνα necessarily|ὅτε necessarily|γάρ alone
Does εἴθε κρίνοιεν assert a completed fair judgment?|No; it expresses a wish.|Yes; it is a perfect indicative.|It asserts a future certainty.|It has no subject.`),
s('optative-subordination','4. Optatives in subordinate clauses',`After a historical main verb, a purpose, fear, or finite report may shift to the optative: ἐδίδασκεν ἵνα μάθοι, “He taught so that the pupil might learn.” The optative is not a new main-clause wish merely because its ending resembles one. Retaining a subjunctive or indicative can also be possible, depending on the original construction.
In a finite report, the optative can represent the original speaker’s mood and tense from the narrator’s historical viewpoint. Compare λέγει ὅτι δίκαιός ἐστι with ἔλεγεν ὅτι δίκαιος εἴη. We develop athematic forms and indirect questions next. Do not place potential ἄν into every subordinate optative.`, `ἐδίδασκεν ἵνα μάθοι.|He taught so that the pupil might learn; secondary purpose.
ἐφοβεῖτο μὴ ἔλθοι.|He feared that he might come; secondary fear.
ἔλεγεν ὅτι δίκαιος εἴη.|He said that he was just; finite oblique report.
εἴθε μάθοι.|May he learn; independent wish.
ἔλεγεν ὅτι δίκαιός ἐστι.|He said that he is just; retained original indicative.`, `Why does μάθοι after ἵνα not mean “if only he would learn”?|The clause is a purpose dependent on a past main verb.|Every optative is a wish.|ἵνα is a noun.|The verb has an augment.
Must every past reporting verb force an optative?|No; retention of the original mood is possible.|Yes, without exception.|Only if the report is false.|Only if the speaker is unnamed.`)
];
grammar[43]=[
s('mi-optative-present','1. Present optatives of -μι verbs',`The present optative retains the present stem: διδοίην, τιθείην, ἱσταίην, ἱείην. These forms are not aorists merely because they contain -ιη-. Learn them beside δίδωμι, τίθημι, ἵστημι, and ἵημι, and keep the reduplicated present stem visible.
Singular endings commonly follow -ίην, -ίης, -ίη; plural forms include διδοῖμεν/διδοίημεν and τιθεῖμεν/τιθείημεν. Compare ἱσταῖμεν and ἱεῖμεν. Context tells whether the verb means giving, placing, setting up, or sending. A potential statement adds ἄν; a subordinate oblique optative does not acquire it automatically.`, `διδοίη|present active optative of δίδωμι, third singular
τιθείη|present active optative of τίθημι, third singular
ἱσταίη|present active optative of ἵστημι, third singular
ἱείη|present active optative of ἵημι, third singular
διδοίην / διδοίης / διδοίη / διδοῖμεν / διδοῖτε / διδοῖεν|present active optative of δίδωμι
τιθείην / τιθείης / τιθείη / τιθεῖμεν / τιθεῖτε / τιθεῖεν|present active optative of τίθημι`, `Which stem identifies a present rather than aorist form?|διδο- in διδοίη|δο- in δοίη|θε- in θείη|στα- in σταίη
Translate ἔλεγεν ὅτι δῶρα διδοίη.|He said that he was giving gifts.|He wished he had never received gifts.|He ordered us to give gifts.|He will say that gifts were destroyed.`),
s('mi-optative-aorist','2. Aorist optatives and voice',`The aorist active forms lose the present reduplication: δοίην, θείην, σταίην, εἵην. With δίδωμι and τίθημι, compare plural δοῖμεν and θεῖμεν; with intransitive ἔστην, σταῖμεν. The aorist of ἵημι has the rough breathing in εἵην, and compounds such as ἀφείην are common.
Middle forms include δοίμην and θείμην, with third singular δοῖτο and θεῖτο. A form’s voice and lexical construction matter: θείη may mean “might establish,” while θεῖτο may mean “might adopt for himself.” Do not confuse the active optative θείη with passive ἐτέθη, or add the indicative aorist -κ- to δοίη.`, `δοίη|aorist active optative of δίδωμι, third singular
θείη|aorist active optative of τίθημι, third singular
σταίη|intransitive aorist active optative of ἵστημι, third singular
ἀφείη|aorist active optative of ἀφίημι, third singular
δοίην / δοίης / δοίη / δοῖμεν / δοῖτε / δοῖεν|aorist active optative of δίδωμι
θείμην / θεῖο / θεῖτο / θείμεθα / θεῖσθε / θεῖντο|aorist middle optative of τίθημι`, `Choose “he might adopt a law for himself.”|νόμον θεῖτο ἄν|νόμον ἐτέθη|νόμον τίθησιν|νόμον ἔθετε
Which distinction is correct?|τιθείη is present; θείη is aorist.|Both are future indicatives.|θείη is always passive.|τιθείη is an imperative.`),
s('historical-statements','3. Historical reporting and retained mood',`In secondary sequence, an original finite indicative may appear as an optative: ἔλεγεν ὅτι τοῦτο δίκαιον εἴη. This reports what someone said, without turning the narrator into the original claimant. Original tense relations are preserved: a prior action is not made simultaneous merely because the main verb is past.
The original mood can be retained: ἔλεγεν ὅτι τοῦτο δίκαιόν ἐστιν. Mixed reporting is possible, so annotate each clause rather than enforcing a mechanical rule. An accusative-and-infinitive report remains an infinitive construction; it is not converted to an optative solely because φησί becomes ἔφη.`, `ἔλεγεν ὅτι δίκαιος εἴη.|He said that he was just; optative substitution.
ἔλεγεν ὅτι δίκαιός ἐστιν.|He said that he is just; retained indicative.
ἔφη τὸν ἄνδρα δίκαιον εἶναι.|He said that the man was just; infinitive retained.
ἔλεγεν ὅτι ὁ Κριτίας τὸν νόμον θείη.|He said that Critias had established the rule; aorist oblique optative.
φησὶ δώσειν → ἔφη δώσειν|future infinitive stays future relative to the report`, `What changes obligatorily when φησί becomes ἔφη in an infinitive report?|The reporting time; the infinitive need not change.|Every infinitive becomes an optative.|All subjects become nominative.|Every clause becomes a wish.
Does reporting Critias’ legal claim establish its justice?|No; attribution and evaluation are distinct.|Yes, because the claim uses law vocabulary.|Yes, if the optative is retained.|Only if the sentence is long.`),
s('historical-questions','4. Indirect questions and reconstructing direct speech',`After a historical verb of asking or considering, a direct indicative or deliberative subjunctive may become optative: τί δῶ; becomes ἠρώτα τί δοίη, “He asked what he should give.” A yes/no question still needs εἰ, “whether.” Keep the question’s focus, not just the verb ending.
Restore direct speech cautiously. A reported optative may reflect several original constructions, and pronouns depend on context. In ἠρώτα εἰ ὁ Κριτίας αὐτὸν ἀφείη, identify the person represented by αὐτόν before writing a direct question. The exercise may permit more than one defensible restoration; explain your choice.`, `ἠρώτα τί δοίη.|He asked what he should give.
ἐσκόπει τίνα νόμον θείη.|He considered what law he should establish.
ἠρώτα εἰ ὁ Κριτίας αὐτὸν ἀφείη.|He asked whether Critias would release him, in this context.
ἠρώτα πῶς τοῦτο γένοιτο.|He asked how this happened / might happen, depending on the original question.
τί δῶ; → ἠρώτα τί δοίη.|deliberative question shifted to historical reporting`, `What must precede restoring “him” as “me” in direct speech?|Identify who originally spoke and whom αὐτόν denotes.|Assume every pronoun denotes Critias.|Delete the reporting verb only.|Turn every verb into a future.
Can every oblique optative be restored to one uniquely certain direct form?|No; context may leave alternatives.|Yes, without context.|Only if the subject is plural.|Only if εἰ is present.`)
];
grammar[44]=[
s('conditions-open-vivid','1. Conditions: open and future more vivid',`A conditional sentence has a protasis, the if-clause, and an apodosis, its consequence. An open condition uses εἰ with indicative and presents an assumption without marking it as contrary to fact: εἰ τοῦτο ποιεῖ, ἀδικεῖ. The tense can be present or past as the context requires.
A future more vivid condition uses ἐάν with subjunctive, normally followed by a future indicative or equivalent consequence: ἐὰν ἐμμείνωμεν, πιστοὶ ἐσόμεθα. It presents a future contingency relatively directly, not as a guarantee that it will occur. Negative protasis normally uses μή; the apodosis follows the negation appropriate to its own construction.`, `εἰ τοῦτο ποιεῖ, ἀδικεῖ.|If he does this, he does wrong; open present condition.
εἰ τοῦτο ἐποίησεν, ἠδίκησεν.|If he did this, he did wrong; open past condition.
ἐὰν ἐμμείνωμεν, πιστοὶ ἐσόμεθα.|If we abide, we shall be trustworthy; future more vivid.
ἐὰν μὴ ἐμμείνωμεν, κινδυνεύσομεν.|If we do not abide, we shall be in danger; negative protasis.
πρότασις / ἀπόδοσις|if-clause / consequence`, `Which construction marks future more vivid?|ἐάν + subjunctive, with a future consequence|εἰ + optative, with ἄν + optative|εἰ + past indicative, with past indicative and ἄν|ὅτι + indicative alone
Does ἐάν guarantee that the condition will occur?|No; it envisages a contingency.|Yes, always.|Only in a negative clause.|It guarantees that it cannot occur.`),
s('conditions-less-general','2. Future less vivid and general conditions',`Future less vivid commonly uses εἰ with optative and an apodosis with optative plus ἄν: εἰ ἐμμένοιμεν, πιστοὶ ἂν εἴημεν. “If we were to abide, we would be trustworthy” presents a more tentative future possibility. It does not by itself say that we failed in the past.
Present general uses ἐάν + subjunctive and present indicative: whenever a citizen keeps an oath, trust grows. Past general uses εἰ + optative and imperfect indicative, without potential ἄν in the ordinary apodosis. These generalize across repeated occasions. Distinguish the time of the generalization from the stem aspect of the subordinate verb.`, `εἰ ἐμμένοιμεν, πιστοὶ ἂν εἴημεν.|If we were to abide, we would be trustworthy; future less vivid.
ἐὰν ὅρκον φυλάττῃ, πιστός ἐστιν.|Whenever he keeps an oath, he is trustworthy; present general.
εἰ ὅρκον φυλάττοι, πιστὸς ἦν.|Whenever he kept an oath, he was trustworthy; past general.
ὅταν ἀδικήσῃ, ζημιοῦται.|Whenever he does wrong, he is punished; general temporal equivalent.
εἰ + optative ... optative + ἄν|tentative future condition and potential consequence`, `Which apodosis normally belongs to a past general condition?|imperfect indicative without potential ἄν|future infinitive alone|imperative with εἴθε|perfect participle alone
Does εἰ ἐμμένοιμεν, πιστοὶ ἂν εἴημεν assert a past failure?|No; it envisages a tentative possibility.|Yes, necessarily.|It asserts a completed oath.|It contains no condition.`),
s('conditions-counterfactual','3. Contrary-to-fact conditions',`A contrary-to-fact condition normally has εἰ with a past indicative, and a past indicative with ἄν in the consequence. The imperfect often marks a present unreal situation: εἰ δίκαιος ἦν, οὐκ ἂν ἠδίκει, “If he were just, he would not be doing wrong.” The aorist commonly marks a past unreal action.
Compare εἰ ἔμεινεν, ἐσώθη with εἰ ἔμεινεν, ἐσώθη ἄν: the first is an open past condition; the second, in its normal reading, “If he had stayed, he would have been saved.” Mixed time relations are possible. Decide what time each clause describes before assigning a label.`, `εἰ δίκαιος ἦν, οὐκ ἂν ἠδίκει.|If he were just, he would not be doing wrong; present unreal.
εἰ ἔμεινεν, ἐσώθη ἄν.|If he had stayed, he would have been saved; past unreal.
εἰ ἔμεινεν, ἐσώθη.|If he stayed, he was saved; open past.
εἰ μὴ ἔφυγεν, ἀπέθανεν ἄν.|If he had not fled, he would have died; negative past unreal.
past indicative + ἄν|key signal in the ordinary unreal apodosis`, `What changes when ἄν is added to the past consequence in the example?|The ordinary reading becomes counterfactual.|The subject becomes plural.|The verb becomes an infinitive.|The protasis disappears.
Why should an imperfect in an unreal condition not automatically be translated as simple past?|It often describes a present unreal situation.|Imperfects never refer to past time.|All unreal conditions describe the future.|The augment has no function anywhere.`),
s('accusative-uses','4. Adverbial accusative and respect',`An accusative can measure extent in space or time without being a direct object: πολὺν χρόνον ἔμειναν, “They stayed a long time.” Other accusatives function adverbially. Identify the verb’s ordinary argument pattern before calling every accusative an object.
The accusative of respect limits the claim made by an adjective or verb: ἰσχυρὸς τὸ σῶμα, “strong in body.” It does not say that the body is an object being acted upon. Compare τὴν γνώμην πιστός, “trustworthy in judgment,” and distinguish this from an agreeing nominative description of the person.`, `πολὺν χρόνον ἔμειναν.|They stayed a long time; extent of time.
δέκα στάδια ἐπορεύθησαν.|They traveled ten stades; extent of space.
ἰσχυρὸς τὸ σῶμα|strong in body; accusative of respect
πιστὸς τὴν γνώμην|trustworthy in judgment; accusative of respect
τὸ πρῶτον|at first; adverbial accusative`, `Is τὸ σῶμα a direct object in ἰσχυρὸς τὸ σῶμα?|No; it limits the respect in which he is strong.|Yes; the adjective strikes a body.|It is always nominative here.|It is the subject of an infinitive.
Which phrase measures duration?|πολὺν χρόνον|τῷ φίλῳ|τοῦ νόμου|ὦ ἄνθρωπε`),
s('accusative-absolute','5. Accusative absolute',`An absolute construction supplies a circumstance without being a normal argument of the main clause. Impersonal participles often form an accusative absolute: ἐξόν, “it being permitted”; δέον, “it being necessary”; δυνατόν/ἀδύνατον ὄν, “it being possible/impossible.” An infinitive can complete the expression.
Compare ἐξὸν ἀπιέναι, ἔμεινεν, “Although it was possible to leave, he stayed.” The concessive force comes from context, not a special ending. The familiar genitive absolute commonly has a noun or pronoun plus agreeing participle; the impersonal accusative absolute is usually neuter singular.`, `ἐξὸν ἀπιέναι, ἔμεινεν.|Although departure was permitted, he stayed.
δέον βοηθεῖν, ἀπῆλθεν.|Although help was needed, he left.
ἀδύνατον ὂν ἀπιέναι, ἔμεινεν.|Since leaving was impossible, he stayed.
τοῦ φίλου ἀπελθόντος, ἔμεινεν.|After the friend departed, he stayed; genitive absolute.
ἐξόν / δέον|neuter singular impersonal accusative participles`, `Why is δέον not an accusative direct object here?|It supplies an independent circumstance with an infinitive.|Every participle is a direct object.|It agrees with an unstated feminine noun.|It is a finite indicative.
Where does “although” in ἐξὸν ἀπιέναι, ἔμεινεν come from?|The contrast supplied by context.|A separate word hidden in ἐξόν.|An aorist augment.|A genitive ending.`),
s('teos','6. Necessity with -τέος',`Verbal adjectives in -τέος express what must be done. In a personal construction the adjective agrees with the thing requiring action: ὁ νόμος φυλακτέος ἐστίν, “The law must be kept.” A dative can identify the responsible agent: ἡμῖν, “by us.”
In an impersonal construction neuter -τέον, often with ἐστί, expresses “one must.” An active verb can retain its ordinary object: ἡμῖν τὸν νόμον φυλακτέον, “We must keep the law.” Do not confuse this necessity adjective with -τός, which can express a state or possibility. In both constructions identify who must act and what action is required.`, `ὁ νόμος φυλακτέος ἐστίν.|The law must be kept; personal construction.
ἡμῖν τὸν νόμον φυλακτέον.|We must keep the law; impersonal with accusative object.
ἡμῖν βοηθητέον ἐστίν.|We must help; impersonal necessity.
οἱ ὅρκοι φυλακτέοι εἰσίν.|The oaths must be kept; plural agreement.
ἡμῖν|dative of responsible agent in these necessity constructions`, `Why is νόμον accusative in ἡμῖν τὸν νόμον φυλακτέον?|It remains the object of the impersonal verbal idea.|It agrees with ἡμῖν.|All subjects are accusative.|It is an accusative absolute by itself.
Which rendering captures -τέος here?|must be done|might once have been done|has already been done|is being done right now necessarily`)
];
grammar[45]=[
s('perfect-mp','1. Perfect middle/passive: formation and state',`The perfect commonly presents a resulting state: λέλυται can mean “has been released” and hence “is free.” The aorist ἐλύθη narrates the release as a whole. The perfect is not simply a more distant past tense. In the middle/passive, endings attach directly to the perfect stem, without a thematic vowel.
Learn λέλυμαι, λέλυσαι, λέλυται, λελύμεθα, λέλυσθε, λέλυνται. Identify the reduplicated stem λελυ- and the ending. Middle versus passive interpretation depends on the verb and context: πέπεισμαι, “I am convinced,” describes the subject’s state. Contract verbs often lengthen their stem vowel before perfect endings, as τετίμημαι.`, `λέλυμαι|perfect middle/passive indicative, first singular
λέλυσαι|perfect middle/passive indicative, second singular
λέλυται|perfect middle/passive indicative, third singular
λέλυνται|perfect middle/passive indicative, third plural
λελύμεθα / λέλυσθε|perfect middle/passive first / second plural
ἐλύθη / λέλυται|was released as an event / has been released and stands free`, `Which translation best contrasts πέπεισται with ἐπείσθη?|is convinced / was persuaded|will persuade / persuaded himself tomorrow|is persuading / must persuade|might persuade / let him persuade
Does the perfect middle/passive add an ordinary thematic ο or ε before its endings?|No; the endings attach to the perfect stem.|Yes, always.|Only in first singular.|Only when passive in meaning.`),
s('reduplication','2. Reduplication, vowels, and consonant stems',`A simple consonant often reduplicates with ε: λύω → λέλυμαι. Aspirated consonants use the corresponding unaspirated sound in reduplication: θύω → τέθυμαι, not an initial θ twice. Initial vowels commonly lengthen: ἀδικέω → ἠδίκημαι. Clusters and irregular verbs require principal parts; do not generate every perfect by repeating the first written letter.
Consonant stems change at the junction with endings: γράφω gives γέγραμμαι, γέγραψαι, γέγραπται; πράττω gives πέπραγμαι, πέπραξαι, πέπρακται. Dental stems often yield σ before the ending, as πεπείσμαι. Consonant-stem third plurals frequently use a participle with εἰσί: γεγραμμένοι εἰσί.`, `γέγραμμαι|perfect middle/passive first singular of γράφω; labial plus μ
γέγραπται|perfect middle/passive third singular of γράφω; labial plus τ
πέπρακται|perfect middle/passive third singular of πράττω; velar plus τ
ἠδίκημαι|perfect middle/passive of ἀδικέω; vowel lengthening
γέγραψαι / πέπραξαι|consonant-stem second singular forms
τέθυμαι|perfect middle/passive of θύω; aspirate reduplicates as τ`, `Why should γέγραπται be linked with γράφω despite π?|The consonant changes before the τ ending.|It is a different unrelated noun.|All perfects change φ to λ.|The form is future active.
Which is a legitimate periphrastic perfect plural?|γεγραμμένοι εἰσί|γράφονται εἰσί|γέγραπται ἔχουσι|γράφειν εἰσί`),
s('perfect-participles','3. Perfect participles and infinitives',`The perfect middle/passive participle uses -μένος, -μένη, -μένον, normally accented on the syllable before the ending: λελυμένος. It agrees in gender, number, and case with its noun. ὁ λελυμένος, with an article, can mean “the released man”; without an article it can supply a circumstance or predicate.
The perfect middle/passive infinitive is λελύσθαι. In indirect statement it reports a state resulting from prior action; after other governing verbs interpret aspect and construction. A participle plus εἰμί can form a periphrastic perfect, and with ἦν a past state. Keep agreement visible rather than treating the whole expression as indeclinable.`, `ὁ λελυμένος|the released man; substantival perfect passive participle
τὴν λελυμένην γυναῖκα|the released woman; accusative feminine agreement
λελύσθαι|perfect middle/passive infinitive
λελυμένοι εἰσίν|they are in a released state; periphrastic perfect
λελυμένος / λελυμένη / λελυμένον|masculine / feminine / neuter nominative singular
γεγραμμένος λόγος|a written speech; resultant state`, `Choose the participle agreeing with τὰ γράμματα.|γεγραμμένα|γεγραμμένος|γεγραμμένῃ|γεγραμμένη
What does the article do in ὁ λελυμένος?|Makes the participle function substantivally: the released person.|Turns it into a finite verb.|Makes its voice active.|Changes perfect into future.`),
s('pluperfect-mp','4. Pluperfect middle/passive',`The pluperfect places the resulting state at a past reference point: ἐλέλυτο, “he had been released.” It normally adds an augment before the reduplicated stem and secondary middle/passive endings. Learn ἐλελύμην, ἐλέλυσο, ἐλέλυτο, ἐλελύμεθα, ἐλέλυσθε, ἐλέλυντο.
Compare ἐπείσθη, “he was persuaded,” πέπεισται, “he is convinced,” and ἐπέπειστο, “he had been persuaded.” The pluperfect’s past viewpoint can be established by another event, such as the friend’s arrival. Consonant stems may use a periphrastic form, as γεγραμμένοι ἦσαν; agreement still matters.`, `ἐλελύμην|pluperfect middle/passive, first singular
ἐλέλυτο|pluperfect middle/passive, third singular
ἐλέλυντο|pluperfect middle/passive, third plural
ἐπέπειστο|he or she had been persuaded; pluperfect of πείθω
ἐλελύμην / ἐλέλυσο / ἐλέλυτο / ἐλελύμεθα / ἐλέλυσθε / ἐλέλυντο|pluperfect paradigm
γεγραμμένοι ἦσαν|they had been written; periphrastic past state`, `What distinguishes ἐπέπειστο from πέπεισται?|The resulting state is viewed at a past reference point.|Only the subject’s gender.|The first is necessarily active.|The second is a command.
Translate πρὶν ἐλθεῖν τὸν φίλον, ἐπέπειστο.|Before the friend arrived, he had been persuaded.|He will persuade his friend to leave.|The friend is now giving an order.|If only the friend were persuaded.`),
s('agent-dative','5. Dative of agent and other datives',`With perfect passive forms, a dative can mark the agent: ταῦτα ἡμῖν πέπρακται, “These things have been done by us.” It is particularly natural with a resulting state viewed as someone’s completed work. Ordinary passive agents can also be expressed with ὑπό plus genitive; a dative is not the universal agent construction in every tense.
Compare the agent with possession, recipient, and means. In δῶρον τῷ φίλῳ δίδοται, “a gift is given to the friend,” the friend is recipient. In λόγῳ πείθει, “he persuades by speech,” the dative expresses means. Ask who performs the action, who receives it, and what instrument or relation the phrase supplies.`, `ταῦτα ἡμῖν πέπρακται.|These things have been done by us; agent.
δῶρον τῷ φίλῳ δίδοται.|A gift is given to the friend; recipient.
λόγῳ πείθει.|He persuades by speech; means.
βιβλίον μοι ἐστίν.|I have a book; possessive dative.
ὑπὸ τοῦ φίλου ἐπείσθη.|He was persuaded by the friend; ὑπό plus genitive agent.`, `Why is τῷ φίλῳ not automatically an agent after δίδοται?|It may identify the recipient; meaning and construction decide.|Every dative is possession.|Passive verbs have no agents.|The article forces instrument.
Which construction especially favors a dative agent?|a perfect passive resulting state|every active future|every vocative address|every interrogative pronoun`)
];
grammar[46]=[
s('perfect-active','1. Active perfects in -κα and -α',`The active perfect often adds -κα to a reduplicated stem: λέλυκα, λέλυκας, λέλυκε(ν), λελύκαμεν, λελύκατε, λελύκασι(ν). The plural endings differ from present -ομεν/-ετε. Many verbs form a second perfect in -α with stem changes rather than -κα: γέγραφα, πέπομφα, πέπραχα, πέπονθα.
Principal parts identify these stems. Do not construct a perfect by attaching -κα indiscriminately: λαμβάνω → εἴληφα, λέγω → εἴρηκα, πάσχω → πέπονθα, γίγνομαι → γέγονα. Some perfects have strongly stative or intransitive senses. Form, lexical meaning, and context must be read together.`, `λέλυκα|first perfect active, first singular
γέγραφα|second perfect active of γράφω, first singular
πέπονθα|perfect active of πάσχω: I have suffered
εἴληφα|perfect active of λαμβάνω: I have taken
λέλυκα / λέλυκας / λέλυκε / λελύκαμεν / λελύκατε / λελύκασι|regular active perfect paradigm
εἴρηκα / γέγονα / πέπραχα|I have said / become / done`, `Which is the perfect of γράφω?|γέγραφα|γεγράφηκα as the standard Attic form|ἔγραψα|γράψω
Does every active perfect contain -κ-?|No; second perfects and irregular stems are common.|Yes, without exception.|Only in plural.|Only when the action is completed.`),
s('perfect-active-nonfinite','2. Active perfect participles and infinitives',`The active perfect infinitive ends in -κέναι or the corresponding second-perfect ending: λελυκέναι, γεγραφέναι, εἰρηκέναι. In a report it can express completed prior action with present relevance. Keep it distinct from aorist λῦσαι and future λύσειν.
The participle has masculine -κώς, feminine -κυῖα, neuter -κός: λελυκώς, λελυκυῖα, λελυκός. The masculine/neuter stem appears in λελυκότος; the feminine uses first-declension endings, as λελυκυίας. Second perfects follow corresponding patterns, such as γεγραφώς, γεγραφυῖα, γεγραφός.`, `λελυκέναι|perfect active infinitive
λελυκώς|perfect active participle, masculine nominative singular
λελυκυῖα|perfect active participle, feminine nominative singular
λελυκός|perfect active participle, neuter nominative/accusative singular
λελυκότος / λελυκυίας|masculine-neuter / feminine genitive singular
γεγραφέναι / γεγραφώς|second perfect active infinitive / masculine participle`, `Choose the feminine participle in ἡ ... γυνή, “the woman who has written.”|γεγραφυῖα|γεγραφώς|γεγραφός|γεγραφέναι
What is the contrast between λελυκέναι and λελύσθαι?|Perfect active versus perfect middle/passive infinitive.|Present versus future indicative.|Singular versus plural command.|Both are articles.`),
s('pluperfect-active','3. Active pluperfects',`The pluperfect views a perfect state or completed action from a past point. Regular forms include ἐλελύκειν, ἐλελύκεις, ἐλελύκει, ἐλελύκεμεν, ἐλελύκετε, ἐλελύκεσαν; longer plural variants with -κει- also occur. The augment precedes the perfect stem when regularly expressed.
Irregular stems persist: ἐγεγράφει, “he had written”; ἐπεπόνθει, “he had suffered”; εἰρήκει, “he had said.” Initial-vowel and reduplication patterns mean that the past marker is not always a detachable ἐ-. Compare ἔγραψε, γέγραφε, and ἐγεγράφει by their time and aspect in a connected narrative.`, `ἐλελύκειν|active pluperfect, first singular
ἐλελύκει|active pluperfect, third singular
ἐλελύκεσαν|active pluperfect, third plural
ἐγεγράφει|he or she had written; irregular perfect stem
ἐλελύκειν / ἐλελύκεις / ἐλελύκει / ἐλελύκεμεν / ἐλελύκετε / ἐλελύκεσαν|active pluperfect paradigm
ἐπεπόνθει / εἰρήκει|had suffered / had said`, `Translate ἤδη εἰρήκει πρὶν τὸν φίλον ἐλθεῖν.|He had already spoken before the friend arrived.|He is about to speak after the friend leaves.|He wished his friend would speak.|The friend must speak now.
Which stem remains in the pluperfect?|the perfect stem|only the present stem|only the future passive stem|a noun stem chosen at random`),
s('oida','4. οἶδα: perfect form, present knowledge',`οἶδα is morphologically perfect but usually means “I know.” Learn οἶδα, οἶσθα, οἶδε(ν), ἴσμεν, ἴστε, ἴσασι(ν). Do not translate each occurrence “I have seen” simply because the form is historically connected with seeing. The infinitive is εἰδέναι and the participle εἰδώς, εἰδυῖα, εἰδός.
Past knowledge is expressed by pluperfect-shaped forms such as ᾔδειν, ᾔδεις, ᾔδει and plural ᾖσμεν/ᾔδεμεν, ᾖστε/ᾔδετε, ᾖσαν/ᾔδεσαν. Common nonindicatives include subjunctive εἰδῶ and optative εἰδείην. Distinguish “knows” from “supposes” and a claim to knowledge from evidence that supports it.`, `οἶσθα|you know; second singular
ἴσμεν|we know; first plural
εἰδέναι|to know; infinitive
ᾔδει|he or she knew; past knowledge
οἶδα / οἶσθα / οἶδε / ἴσμεν / ἴστε / ἴσασι|present-meaning indicative paradigm
εἰδώς / εἰδυῖα / εἰδός|knowing; perfect-shaped participle`, `Translate οἶδα ὅτι γέγραφεν.|I know that he has written.|I saw that he will write.|I wish that he knew.|I am writing what he saw.
Which form means “they know”?|ἴσασι|ἴστε|ἴσμεν|οἶσθα`),
s('perfect-contrast','5. Aspect, evidence, and sequence',`Compare an event, a current result, and an earlier result: εἶπεν, εἴρηκεν, εἰρήκει. English may sometimes render a Greek perfect with a simple present or past, but your analysis should retain the Greek viewpoint. “He has taught” emphasizes an action with relevance to the present assessment; “he taught” may simply advance a narrative.
In source analysis, do not let a perfect claim become stronger than its evidence. “They have associated with Socrates” and “Socrates has taught their crimes” are different propositions. Grammar can reveal what is being asserted, but cannot by itself establish the assertion’s truth.`, `εἶπεν.|He spoke; aorist event.
εἴρηκεν.|He has spoken; perfect with present relevance.
εἰρήκει.|He had spoken; prior result at a past viewpoint.
οἶδεν.|He knows; present state expressed by perfect-shaped form.
δεδίδαχεν / ἐδίδαξεν|has taught / taught`, `Does a perfect tense prove the claim it expresses is true?|No; tense and evidence answer different questions.|Yes, by definition.|Only in a courtroom.|Only in the third person.
What is lost if every perfect is translated mechanically as “did long ago”?|Its resulting state or present relevance.|Its subject’s grammatical gender always.|Its status as a verb.|Its alphabet.`)
];
grammar[47]=[
s('primary-report-map','1. Mapping a sustained primary-sequence report',`Begin with the governing verb: λέγει, φησί, γράφει, or a future reporting verb. Mark the boundary of each report before translating. In ὁ Ξενοφῶν γράφει ὅτι ὁ Σωκράτης φησὶ τοὺς θεοὺς σημαίνειν, there are three levels: Xenophon writes; Socrates says; the gods give signs. Each verb has its own subject.
Primary sequence normally preserves the indicative in a finite statement and the subjunctive in an original deliberative or appropriate subordinate clause. The reporting verb’s present tense does not make every embedded action present: λέγει ὅτι ἔθυσεν reports a prior sacrifice. Work from the outer frame inward, then translate the whole thought in natural English.`, `λέγει ὅτι ἔθυσεν.|He says that he sacrificed; present report, past embedded action.
φησὶ τοὺς θεοὺς σημαίνειν.|He says that the gods give signs; accusative subject.
γράφει ὅτι ὁ Σωκράτης φησὶ τοὺς θεοὺς σημαίνειν.|He writes that Socrates says the gods give signs; nested report.
ἐρωτᾷ τί ποιήσῃ.|He asks what he should do; indirect deliberation.
γράψει ὅτι ἔθυσεν.|He will write that he sacrificed; future report, prior event.`, `Who gives signs in the nested example?|the gods|Xenophon as writer|Socrates as reporting speaker|the accuser necessarily
Should λέγει force ἔθυσεν into a present translation?|No; the embedded aorist retains its prior event.|Yes, all verbs must share the main tense.|Only if there is a comma.|Only if the sentence has three levels.`),
s('primary-relative-time','2. Relative time in nonfinite reports',`Under a reporting verb, distinguish simultaneous, prior, subsequent, and perfect-result relations. φησὶ θύειν, θῦσαι, θύσειν, τεθυκέναι can report “is sacrificing,” “sacrificed,” “will sacrifice,” and “has sacrificed.” The future infinitive retains its future relation even if the report is made now.
A perception participle follows its own governing construction. πολλοὺς αὐτὸν θύοντα ἑωρακέναι means that many have seen him sacrificing: πολλούς is the subject of “have seen,” αὐτόν the person seen, and θύοντα agrees with αὐτόν. Do not flatten all accusatives into objects of the outermost verb.`, `φησὶ θύειν.|He says that he is sacrificing; simultaneous.
φησὶ θῦσαι.|He says that he sacrificed; prior.
φησὶ θύσειν.|He says that he will sacrifice; subsequent.
φησὶ τεθυκέναι.|He says that he has sacrificed; perfect result/relevance.
φησὶ πολλοὺς αὐτὸν θύοντα ἑωρακέναι.|He says that many have seen him sacrificing.`, `In πολλοὺς αὐτὸν θύοντα ἑωρακέναι, who has seen?|many people|the sacrificial animal|the verb φησί|the infinitive itself
What does θύοντα agree with in that phrase?|αὐτόν, the person seen|πολλούς, the observers|an unstated neuter plural|the nominative writer`),
s('primary-pronouns-negatives','3. Pronouns and the scope of negation',`A report can change the person of pronouns while retaining the identity of their referents. Direct “I acknowledge gods” may become “Socrates says that he acknowledges gods.” If several men are present, English “he” may be less clear than a repeated name. Greek reflexives can point back to the reporting subject; ordinary pronouns require contextual resolution.
Negation also has scope. οὐ λέγει ὅτι ἀδικεῖ denies that he makes the statement; λέγει ὅτι οὐκ ἀδικεῖ reports a denial of wrongdoing. οὔ φησιν ἀδικεῖν commonly has the latter sense through negative raising. Read the governing construction and the argument rather than moving οὐ mechanically.`, `λέγει ὅτι οὐκ ἀδικεῖ.|He says that he does not do wrong; embedded denial.
οὐ λέγει ὅτι ἀδικεῖ.|He does not say that he does wrong; denial of reporting.
οὔ φησιν ἀδικεῖν.|He denies doing wrong; normal negative-raising reading.
ὁ Σωκράτης λέγει ὅτι αὐτὸς θύει.|Socrates says that he himself sacrifices; explicit reference.
αὐτός / ἑαυτόν|ordinary intensive/pronominal form / reflexive accusative`, `Why might you repeat “Socrates” in an English report?|To remove ambiguous speaker reference.|Because Greek never uses pronouns.|To change the historical claim.|Because an infinitive requires a proper name.
Which sentence explicitly places οὐ inside the reported assertion?|λέγει ὅτι οὐκ ἀδικεῖ|οὐ λέγει ὅτι ἀδικεῖ|ἐρωτᾷ τίς ἀδικεῖ|εἴθε μὴ ἀδικοίη`),
s('primary-nested-clauses','4. Subordinate clauses inside reports',`A report may contain a purpose, condition, relative, or question. Bracket it before translating: λέγει ὅτι, ἐὰν οἱ νέοι μανθάνωσιν, βελτίους ἔσονται. The condition belongs to the reported claim, while the outer ὅτι introduces that claim. Its subjunctive is licensed by ἐάν, not by the outer verb λέγει.
Build an annotation with four fields: speaker, governing verb, clause type, and time/aspect. Then produce a faithful connected translation. In a longer passage, follow repeated nouns and pronouns across paragraph boundaries. A fair report can be followed by criticism; do not rewrite a speaker’s position merely to make it easier to reject.`, `λέγει ὅτι ἐὰν μανθάνωσιν, βελτίους ἔσονται.|He says that if they learn, they will be better; embedded condition.
λέγει ὅτι διδάσκει ἵνα μανθάνωσιν.|He says that he teaches so that they may learn; embedded purpose.
λέγει ὅτι οἱ νέοι οὓς διδάσκει ἀκούουσιν.|He says that the young people whom he teaches listen; embedded relative.
ἐρωτᾷ εἰ οἱ νέοι μανθάνουσιν.|He asks whether the young people learn; indirect question.
ἐάν → μανθάνωσιν|the conditional conjunction licenses the subjunctive`, `What licenses μανθάνωσιν in the conditional report?|ἐάν inside the reported claim|the title of the work|the noun νέοι by itself|the author’s historical distance
What is the best first step in a three-level report?|Mark clause boundaries and identify each subject.|Translate every accusative as “him.”|Replace all finite verbs with infinitives.|Decide whether the speaker is right before parsing.`)
];
grammar[48]=[
s('secondary-system','1. Secondary sequence in connected reporting',`Historical reporting frames such as ἔλεγεν and ἔγραφεν can introduce an oblique optative in place of an original finite indicative or subjunctive. Present δίκαιός ἐστι becomes δίκαιος εἴη; an original deliberative τί ποιήσω; can become ἠρώτα τί ποιήσειε. The shift places the claim within a past report without erasing its original temporal relation.
Retention is also possible: ἔλεγεν ὅτι δίκαιός ἐστιν. A narrative can retain one clause and shift another. Explain the actual construction instead of treating variation as an error. Primary-to-secondary rewriting is therefore not a global replacement of every verb ending.`, `ἔλεγεν ὅτι δίκαιος εἴη.|He said that he was just; oblique optative.
ἔλεγεν ὅτι δίκαιός ἐστιν.|He said that he is just; retained indicative.
ἠρώτα τί ποιήσειε.|He asked what he should do; reported deliberation.
ἔγραφεν ὅτι οἱ πολῖται ἐμμένοιεν.|He wrote that the citizens abided; historical finite report.
λέγει ὅτι... → ἔλεγεν ὅτι...|change the reporting frame before reviewing dependent clauses`, `Must a historical report change every dependent verb to optative?|No; retained mood and nonfinite constructions must be respected.|Yes, without exception.|Only if the passage is long.|Only if it concerns Socrates.
What must a rewrite preserve?|The original claim’s speaker, negation, and temporal relations.|Only the number of words.|Only the position of the commas.|The same English tense in every clause.`),
s('secondary-nonfinite','2. Infinitives and participles retain relative time',`An infinitive report remains nonfinite after a historical reporting verb: ἔφη τὸν Σωκράτη ὠφελεῖν/ὠφελῆσαι/ὠφελήσειν. These are simultaneous, prior, and subsequent relative to the past report. ὠφεληκέναι presents a completed action with its relevant result. None must become an optative merely because ἔφη is past.
Participles retain their own agreement and aspect: ἔγραφεν αὐτὸν θαρροῦντα φαίνεσθαι, “He wrote that he appeared confident.” Map the accusative subject of φαίνεσθαι and the agreeing participle. Relative time is anchored to its governing construction, not automatically to the date on which the modern reader opens the page.`, `ἔφη ὠφελεῖν.|He said that he was benefiting others; simultaneous.
ἔφη ὠφελῆσαι.|He said that he had benefited others; prior aorist.
ἔφη ὠφελήσειν.|He said that he would benefit others; subsequent.
ἔφη ὠφεληκέναι.|He said that he had benefited others; perfect relevance.
ἔγραφεν αὐτὸν θαρροῦντα φαίνεσθαι.|He wrote that he appeared confident.`, `Does future ὠφελήσειν after ἔφη necessarily refer to our future today?|No; it is later than the past reporting point.|Yes, all future forms refer to today.|It must be a prohibition.|It has no time relation.
What happens to θαρροῦντα when the main reporting verb becomes past?|It remains an agreeing participle, interpreted within its construction.|It automatically becomes a finite optative.|It loses its accusative ending.|It becomes a noun.`),
s('secondary-nesting','3. Nested speakers, questions, and negation',`In ἔγραφεν ὅτι ὁ Ἑρμογένης ἔλεγεν ὅτι ὁ Σωκράτης δίκαιος εἴη, distinguish writer, informant, and subject of the judgment. A pronoun can otherwise seem to jump between them. Use repeated names in your translation when needed, while preserving the source’s attribution.
Indirect questions require the same care: ἠρώτα εἰ ἐσκεμμένος εἴη, “He asked whether he had considered it.” The perfect participle agrees with its subject and the optative of εἰμί supplies the historical reporting form. Keep a negative inside the clause it denies. “He said that he did not know” is different from “He did not say that he knew.”`, `ἠρώτα εἰ ἐσκεμμένος εἴη.|He asked whether he had considered it; perfect oblique question.
ἔλεγεν ὅτι οὐκ εἰδείη.|He said that he did not know; embedded denial.
οὐκ ἔλεγεν ὅτι εἰδείη.|He did not say that he knew; denial of reporting.
ἔγραφεν ὅτι ὁ Ἑρμογένης ἔλεγεν ὅτι ὁ Σωκράτης δίκαιος εἴη.|He wrote that Hermogenes said Socrates was just; three referents.
ἐσκεμμένος εἴη|perfect middle participle plus optative of εἰμί`, `Who is judged just in the three-referent report?|Socrates|Hermogenes|the writer necessarily|all three equally
What does εἰ introduce in ἠρώτα εἰ ἐσκεμμένος εἴη?|an indirect yes/no question|an independent wish|a relative clause|an imperative`),
s('cumulative-synthesis','4. Cumulative translation: form, argument, and evidence',`Read a sustained passage twice. First identify the argument, work, speaker, and chronology. Then bracket its clauses and annotate unfamiliar forms. Use subjunctive and optative signals, conditional systems, articular infinitives, absolute constructions, verbal adjectives, and perfect aspect to explain how the argument is built. Glossed exposure is support, not a demand to reproduce untaught paradigms.
For the final translation, write connected English that preserves attribution and distinctions in time. Recheck pronouns, negation, and argument structure before polishing style. In the accompanying reflection cite two course episodes and distinguish what the author records from what you infer. A reasoned disagreement with Xenophon can earn full credit when the Greek and evidence are represented accurately.`, `ἐὰν σκοπῶμεν, βελτίους κριταὶ γενησόμεθα.|If we examine, we shall become better judges; future more vivid.
εἰ ἐπαινοῖμεν, οὐκ ἂν δικαίως κρίνοιμεν.|If we were to praise, we would not judge justly; future less vivid.
ἡμῖν τὰ τεκμήρια ἐξεταστέον.|We must examine the evidence; impersonal necessity.
τοῦ λόγου γεγραμμένου, κρίνειν ἔξεστιν.|With the account written, it is possible to judge; genitive absolute with perfect participle.
τὸ πιστῶς ἀναφέρειν|reporting faithfully; articular infinitive`, `Which final reflection can receive full credit?|One that disagrees but accurately translates and supports its interpretation.|Only one that praises Xenophon unconditionally.|One that ignores the Greek and relies on opinion.|Only one that treats every speech as a transcript.
What should be checked before polishing English style?|Speaker reference, negatives, clause relations, and relative time.|Only whether every sentence has equal length.|Only modern punctuation.|Only whether the conclusion sounds impressive.`)
];
