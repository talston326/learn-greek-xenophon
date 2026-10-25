(function () {
  "use strict";
  // Xenophon, Apology 1. Greek: E. C. Marchant, ed. (1921), Perseus.
  // Glosses, morphology and syntax notes: prototype annotations for instructor review.
  const passages = [
    {
      translation: "It seems to me worth recalling Socrates, including how, when he was summoned to trial, he considered both his defense and the end of his life.",
      words: [
        ["Σωκράτους","of Socrates","Σωκράτης","noun · genitive singular masculine","Object of the infinitive μεμνῆσθαι (a verb of remembering).",[7]],
        ["δὲ","now / and","δέ","postpositive connective particle","Connects this account with preceding or wider discourse.",[3]],
        ["ἄξιόν","worthwhile","ἄξιος","adjective · neuter nominative/accusative singular","Impersonal predicate with εἶναι: 'it is worthwhile'.",[6,7]],
        ["μοι","to me","ἐγώ","personal pronoun · dative singular","Dative of the person judging with δοκεῖ.",[5]],
        ["δοκεῖ","it seems","δοκέω","verb · present active indicative, 3rd singular","Impersonal 'it seems'; takes an infinitival construction.",[4,6]],
        ["εἶναι","to be","εἰμί","verb · present active infinitive","Complements δοκεῖ and connects with the predicate ἄξιόν.",[3,5]],
        ["μεμνῆσθαι","to remember","μιμνῄσκομαι","verb · perfect middle infinitive (present sense)","Infinitive expressing what is worthwhile; governs Σωκράτους (genitive).",[1,3]],
        ["καὶ","also","καί","conjunction","Adds the following question of how Socrates planned.",[9]],
        ["ὡς","how","ὡς","conjunction / indirect interrogative","Introduces an indirect account of how he deliberated.",[15]],
        ["ἐπειδὴ","when","ἐπειδή","temporal conjunction","Introduces the temporal subordinate clause.",[11,15]],
        ["ἐκλήθη","he was summoned","καλέω","verb · aorist passive indicative, 3rd singular","Verb of the temporal clause; understood subject is Socrates.",[10,12,14]],
        ["εἰς","to","εἰς","preposition + accusative","Introduces the destination/context: trial.",[14]],
        ["τὴν","the","ὁ","article · accusative singular feminine","Modifies δίκην.",[14]],
        ["δίκην","trial","δίκη","noun · accusative singular feminine","Object of εἰς: summoned to trial.",[12,13]],
        ["ἐβουλεύσατο","he deliberated","βουλεύομαι","verb · aorist middle indicative, 3rd singular","Main verb of the indirect 'how' clause; governs περὶ with genitives.",[9,10,16,19,22]],
        ["περί","about","περί","preposition + genitive","Governs ἀπολογίας and τελευτῆς; concerns two subjects of deliberation.",[15,19,22]],
        ["τε","both / and","τε","enclitic coordinating particle","Forms a coordination with καί.",[20]],
        ["τῆς","the","ὁ","article · genitive singular feminine","Modifies ἀπολογίας.",[19]],
        ["ἀπολογίας","defense","ἀπολογία","noun · genitive singular feminine","First object of περί: his defense.",[16,19,22]],
        ["καὶ","and","καί","coordinating conjunction","Pairs with τε to coordinate the two concerns.",[17,22]],
        ["τῆς","the","ὁ","article · genitive singular feminine","Modifies τελευτῆς.",[22]],
        ["τελευτῆς","end","τελευτή","noun · genitive singular feminine","Second object of περί; modified by τοῦ βίου.",[16,19,23,24]],
        ["τοῦ","of the","ὁ","article · genitive singular masculine","Modifies βίου.",[24]],
        ["βίου.","life","βίος","noun · genitive singular masculine","Possessive/descriptive genitive dependent on τελευτῆς: end of life.",[22,23]]
      ]
    },
    {
      translation: "Others too, then, have written about this, and all have remarked on his lofty manner of speaking. That makes it clear that Socrates really did speak that way.",
      words: [
        ["γεγράφασι","have written","γράφω","verb · perfect active indicative, 3rd plural","Main verb; ἄλλοι is its subject; περὶ τούτου specifies the topic.",[4,5,7]],
        ["μὲν","indeed","μέν","postpositive particle","Prepares a contrast with the later ἀλλʼ.",[1]],
        ["οὖν","then","οὖν","inferential particle","Marks a transition in Xenophon's argument.",[1]],
        ["περὶ","about","περί","preposition + genitive","Introduces the topic of the writing.",[5]],
        ["τούτου","this","οὗτος","demonstrative pronoun · genitive singular neuter","Object of περί; refers to the preceding subject.",[4]],
        ["καὶ","also","καί","adverb / conjunction","Adds that other writers treated the subject.",[7]],
        ["ἄλλοι","others","ἄλλος","adjective used substantively · nominative plural masculine","Subject of γεγράφασι.",[1]],
        ["καὶ","and","καί","conjunction","Coordinates the following generalization.",[9]],
        ["πάντες","everyone / all","πᾶς","adjective used substantively · nominative plural masculine","Subject of ἔτυχον; refers to the writers.",[10]],
        ["ἔτυχον","noticed / touched on","τυγχάνω","verb · aorist active indicative, 3rd plural","Governs the genitive μεγαληγορίας in this idiom.",[9,12]],
        ["τῆς","the","ὁ","article · genitive singular feminine","Modifies μεγαληγορίας.",[12]],
        ["μεγαληγορίας","lofty speaking","μεγαληγορία","noun · genitive singular feminine","Genitive complement of ἔτυχον; characterized by αὐτοῦ.",[10,13]],
        ["αὐτοῦ·","his","αὐτός","personal pronoun · genitive singular masculine","Possessive genitive qualifying μεγαληγορίας.",[12]],
        ["ᾧ","whereby / from which","ὅς","relative pronoun · dative singular neuter","Refers back to the fact that all authors noted the manner of speaking; connects it with δῆλον.",[16]],
        ["καὶ","also / indeed","καί","adverb","Emphasizes Xenophon's inference.",[16]],
        ["δῆλον","it is clear","δῆλος","adjective · neuter nominative/accusative singular","Impersonal predicate; followed by an ὅτι clause stating what is clear.",[14,17]],
        ["ὅτι","that","ὅτι","subordinating conjunction","Introduces the content of what is clear.",[21]],
        ["τῷ","in","ὁ","article · dative singular neuter","With ὄντι creates the idiom τῷ ὄντι: 'in fact'.",[19]],
        ["ὄντι","fact / reality","εἰμί","participle · present active, dative singular neuter","Substantivized participle in the idiom τῷ ὄντι: 'really'.",[18,21]],
        ["οὕτως","thus / like this","οὕτως","adverb","Modifies ἐρρήθη: manner in which it was spoken.",[21]],
        ["ἐρρήθη","was spoken","λέγω","verb · aorist passive indicative, 3rd singular","Passive verb whose agent is ὑπὸ Σωκράτους.",[17,20,22,23]],
        ["ὑπὸ","by","ὑπό","preposition + genitive","Introduces the personal agent of the passive verb.",[21,23]],
        ["Σωκράτους.","Socrates","Σωκράτης","noun · genitive singular masculine","Object of ὑπό; agent of ἐρρήθη.",[21,22]]
      ]
    },
    {
      translation: "But they did not make clear that Socrates already thought death more desirable for himself than life. As a result, his lofty speech appears more foolish than it really was.",
      words: [
        ["ἀλλʼ","but","ἀλλά","adversative conjunction (elided)","Introduces Xenophon's objection to previous accounts.",[13]],
        ["ὅτι","that","ὅτι","subordinating conjunction","Introduces the content that others failed to explain.",[5,11,13]],
        ["ἤδη","already","ἤδη","adverb","Modifies ἡγεῖτο: by this time.",[5]],
        ["ἑαυτῷ","to himself","ἑαυτοῦ","reflexive pronoun · dative singular masculine","Dative of reference/judgment with ἡγεῖτο.",[5]],
        ["ἡγεῖτο","he considered","ἡγέομαι","verb · imperfect middle indicative, 3rd singular (deponent)","Governs indirect discourse with εἶναι; understood subject is Socrates.",[4,6,7,10]],
        ["αἱρετώτερον","more preferable","αἱρετός","comparative adjective · accusative singular masculine","Predicate adjective agreeing with θάνατον in the infinitival clause; takes comparative genitive τοῦ βίου.",[7,9,10]],
        ["εἶναι","to be","εἰμί","verb · present active infinitive","Infinitive in indirect statement following ἡγεῖτο.",[5,6,10]],
        ["τοῦ","than the","ὁ","article · genitive singular masculine","Modifies βίου.",[9]],
        ["βίου","life","βίος","noun · genitive singular masculine","Genitive of comparison with αἱρετώτερον: than life.",[6,8]],
        ["θάνατον,","death","θάνατος","noun · accusative singular masculine","Subject of εἶναι in indirect statement; predicate αἱρετώτερον.",[6,7]],
        ["τοῦτο","this","οὗτος","demonstrative pronoun · accusative singular neuter","Resumptive direct object of διεσαφήνισαν, referring to the preceding ὅτι clause.",[2,13]],
        ["οὐ","not","οὐ","negative particle","Negates διεσαφήνισαν.",[13]],
        ["διεσαφήνισαν·","they explained clearly","διασαφηνίζω","verb · aorist active indicative, 3rd plural","Main verb; implied subject is the earlier writers; direct object τοῦτο.",[11,12]],
        ["ὥστε","so that / with the result","ὥστε","result conjunction","Introduces the result of the omission.",[17]],
        ["ἀφρονεστέρα","more foolish","ἄφρων","comparative adjective · nominative singular feminine","Predicate adjective agreeing with μεγαληγορία through εἶναι.",[17,18,20]],
        ["αὐτοῦ","his","αὐτός","pronoun · genitive singular masculine","Possessive genitive with μεγαληγορία.",[20]],
        ["φαίνεται","seems / appears","φαίνομαι","verb · present middle/passive indicative, 3rd singular","Main verb of result clause; takes infinitive εἶναι.",[14,15,18,20]],
        ["εἶναι","to be","εἰμί","verb · present active infinitive","Complementary infinitive of φαίνεται; links the subject and predicate.",[15,17,20]],
        ["ἡ","the","ὁ","article · nominative singular feminine","Modifies μεγαληγορία.",[20]],
        ["μεγαληγορία.","lofty speech","μεγαληγορία","noun · nominative singular feminine","Subject of φαίνεται; predicate ἀφρονεστέρα.",[15,17,19]]
      ]
    }
  ];
  const GreekWordIds = new Set();
  passages.forEach((p, s) => p.words.forEach((w, i) => GreekWordIds.add(s + "-" + (i + 1))));
  const container = document.querySelector("[data-reader-passage]");
  const details = document.querySelector("[data-word-details]");
  const support = document.querySelector("[data-translation-support]");
  const modeRadios = [...document.querySelectorAll('input[name="reader-mode"]')];
  const complete = document.querySelector("[data-mark-complete]");
  const progress = document.querySelector("[data-reading-progress]");
  if (!container || !details || !support || !complete) return;
  let mode = "interlinear";
  let selected = null;
  const session = window.xenophonAuth?.readSession?.();
  const learner = session?.email?.trim().toLowerCase() || "guest";
  const progressKey = "xenophon-apology-prototype-v1:section-1:" + learner;
  try { complete.checked = localStorage.getItem(progressKey) === "read"; } catch (_) {}
  function showProgress() {
    progress.textContent = complete.checked ? "§1 marked as read (1 of 34 sections)" : "§1 not yet marked complete";
  }
  function clearAndAppend(parent, ...children) { parent.replaceChildren(...children); }
  function setMode(next) {
    mode = next;
    if (next !== "greek") support.checked = true;
    modeRadios.forEach(radio => { radio.checked = radio.value === next; });
    render();
  }
  function selectWord(s, index) {
    selected = s + "-" + index;
    const word = passages[s].words[index - 1];
    if (!word) return;
    const links = word[5].filter(i => GreekWordIds.has(s + "-" + i));
    const heading = document.createElement("h3");
    heading.textContent = word[0].replace(/[.,;·]$/u, "");
    heading.lang = "grc";
    const fields = [["Lemma", word[2]], ["Meaning", word[1]], ["Parsing", word[3]], ["Syntax", word[4]]];
    const dl = document.createElement("dl");
    fields.forEach(([label, value]) => {
      const dt = document.createElement("dt"); dt.textContent = label;
      const dd = document.createElement("dd"); dd.textContent = value;
      if (label === "Lemma") dd.lang = "grc";
      dl.append(dt, dd);
    });
    const relatedTitle = document.createElement("h4"); relatedTitle.textContent = "Related words";
    const related = document.createElement("div"); related.className = "apology-related";
    links.forEach(i => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = passages[s].words[i - 1][0].replace(/[.,;·]$/u, "");
      b.lang = "grc";
      b.addEventListener("click", () => selectWord(s, i));
      related.appendChild(b);
    });
    clearAndAppend(details, heading, dl, relatedTitle, related);
    document.querySelectorAll("[data-apology-word]").forEach(el => {
      const id = el.dataset.apologyWord;
      el.classList.toggle("is-selected", id === selected);
      el.classList.toggle("is-related", links.some(i => id === s + "-" + i));
      el.setAttribute("aria-pressed", String(id === selected));
    });
  }
  function render() {
    const elements = passages.map((p, s) => {
      const block = document.createElement("section");
      block.className = "apology-paragraph";
      const number = document.createElement("span");
      number.className = "apology-sentence-number";
      number.textContent = "Sentence " + (s + 1);
      block.appendChild(number);
      if (mode === "english") {
        const english = document.createElement("p");
        english.className = "apology-english-text";
        english.textContent = p.translation;
        block.appendChild(english);
        return block;
      }
      const line = document.createElement("div");
      line.className = mode === "interlinear" ? "apology-interlinear" : "apology-greek-prose";
      line.lang = "grc";
      p.words.forEach((w, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "apology-word";
        button.dataset.apologyWord = s + "-" + (i + 1);
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", w[0].replace(/[.,;·]$/u, "") + "; show grammatical analysis");
        const greek = document.createElement("span");
        greek.className = "apology-greek-token";
        greek.textContent = w[0];
        button.appendChild(greek);
        if (mode === "interlinear" && support.checked) {
          const gloss = document.createElement("span");
          gloss.className = "apology-english-gloss";
          gloss.lang = "en";
          gloss.textContent = w[1];
          gloss.setAttribute("aria-hidden", "true");
          button.appendChild(gloss);
        }
        button.addEventListener("click", () => selectWord(s, i + 1));
        line.appendChild(button);
      });
      block.appendChild(line);
      return block;
    });
    container.replaceChildren(...elements);
    if (selected) {
      const [s, i] = selected.split("-").map(Number);
      selectWord(s, i);
    }
  }
  modeRadios.forEach(radio => radio.addEventListener("change", () => setMode(radio.value)));
  support.addEventListener("change", () => {
    if (!support.checked && mode === "english") { setMode("greek"); support.checked = false; }
    if (!support.checked && mode === "interlinear") { setMode("greek"); support.checked = false; }
    render();
  });
  complete.addEventListener("change", () => {
    try { complete.checked ? localStorage.setItem(progressKey, "read") : localStorage.removeItem(progressKey); } catch (_) {}
    showProgress();
  });
  showProgress();
  render();
}());