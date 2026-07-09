(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  root.xenophonPrincipalParts = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  const CATEGORIES = [
    { key: "present", label: "Present" },
    { key: "future", label: "Future" },
    { key: "aorist", label: "Aorist" },
    { key: "perfect", label: "Perfect" },
    { key: "perfectMiddlePassive", label: "Perfect Middle/Passive", shortLabel: "Perfect M/P" },
    { key: "aoristPassive", label: "Aorist Passive" }
  ];

  const VERBS = [
    {
      verbId: "luo",
      lemma: "λύω",
      displayLemma: "λύω",
      meaning: "I loose",
      dictionaryMeaning: "to loose, release",
      lessonReferences: [
        { label: "Lesson 1 vocabulary", href: "lesson.html?lesson=1&page=1" }
      ],
      notes: "λύω is the regular model verb. Its principal parts show the predictable future sigma, first aorist sigma, reduplicated perfect, and passive theta forms.",
      principalParts: {
        present: { form: "λύω", translation: "I loose" },
        future: { form: "λύσω", translation: "I will loose" },
        aorist: { form: "ἔλυσα", translation: "I loosed" },
        perfect: { form: "λέλυκα", translation: "I have loosed" },
        perfectMiddlePassive: { form: "λέλυμαι", translation: "I have been loosed" },
        aoristPassive: { form: "ἐλύθην", translation: "I was loosed" }
      }
    },
    {
      verbId: "eimi",
      lemma: "εἰμί",
      displayLemma: "εἰμί",
      meaning: "I am",
      dictionaryMeaning: "to be",
      lessonReferences: [
        { label: "Lesson 2 grammar and vocabulary", href: "lessons.html#lesson-2" }
      ],
      notes: "εἰμί is highly irregular and does not normally supply all six principal parts in the same way as regular lexical verbs.",
      principalParts: {
        present: { form: "εἰμί", translation: "I am" },
        future: { form: "ἔσομαι", translation: "I will be" },
        aorist: null,
        perfect: null,
        perfectMiddlePassive: null,
        aoristPassive: null
      }
    },
    {
      verbId: "lego",
      lemma: "λέγω",
      displayLemma: "λέγω",
      meaning: "I say",
      dictionaryMeaning: "to say, speak",
      lessonReferences: [
        { label: "Course vocabulary", href: "greek-english-vocabulary.html?search=λέγω" }
      ],
      notes: "λέγω uses principal parts from different historical roots, especially ἐρῶ and εἶπον, so the dictionary form alone will not always look like the form in a passage.",
      principalParts: {
        present: { form: "λέγω", translation: "I say" },
        future: { form: "ἐρῶ", translation: "I will say" },
        aorist: { form: "εἶπον", translation: "I said" },
        perfect: { form: "εἴρηκα", translation: "I have said" },
        perfectMiddlePassive: { form: "εἴρημαι", translation: "I have been said" },
        aoristPassive: { form: "ἐρρήθην", translation: "I was said" }
      },
      irregular: true
    },
    {
      verbId: "phero",
      lemma: "φέρω",
      displayLemma: "φέρω",
      meaning: "I carry",
      dictionaryMeaning: "to carry, bear",
      notes: "φέρω is a classic suppletive verb: several principal parts come from different stems. The future οἴσω and aorist ἤνεγκα are especially important to recognize.",
      principalParts: {
        present: { form: "φέρω", translation: "I carry" },
        future: { form: "οἴσω", translation: "I will carry" },
        aorist: { form: "ἤνεγκα", translation: "I carried" },
        perfect: { form: "ἐνήνοχα", translation: "I have carried" },
        perfectMiddlePassive: { form: "ἐνήνεγμαι", translation: "I have been carried" },
        aoristPassive: { form: "ἠνέχθην", translation: "I was carried" }
      },
      irregular: true
    },
    {
      verbId: "erchomai",
      lemma: "ἔρχομαι",
      displayLemma: "ἔρχομαι",
      meaning: "I come",
      dictionaryMeaning: "to come, go",
      notes: "ἔρχομαι has a middle-looking present but active meaning. Its aorist ἦλθον and perfect ἐλήλυθα are essential reading forms.",
      principalParts: {
        present: { form: "ἔρχομαι", translation: "I come" },
        future: { form: "εἶμι", translation: "I will go" },
        aorist: { form: "ἦλθον", translation: "I went/came" },
        perfect: { form: "ἐλήλυθα", translation: "I have come" },
        perfectMiddlePassive: null,
        aoristPassive: null
      },
      irregular: true
    },
    {
      verbId: "tithemi",
      lemma: "τίθημι",
      displayLemma: "τίθημι",
      meaning: "I place",
      dictionaryMeaning: "to put, place",
      notes: "τίθημι is a μι-verb. Its aorist ἔθηκα and perfect middle/passive κέκειμαι are especially useful for parsing forms that do not resemble regular ω-verbs.",
      principalParts: {
        present: { form: "τίθημι", translation: "I place" },
        future: { form: "θήσω", translation: "I will place" },
        aorist: { form: "ἔθηκα", translation: "I put" },
        perfect: { form: "τέθηκα", translation: "I have placed" },
        perfectMiddlePassive: { form: "κέκειμαι", translation: "I have been placed" },
        aoristPassive: { form: "ἐτέθην", translation: "I was placed" }
      },
      irregular: true
    },
    {
      verbId: "lambano",
      lemma: "λαμβάνω",
      displayLemma: "λαμβάνω",
      meaning: "I take",
      dictionaryMeaning: "to take, receive",
      notes: "λαμβάνω changes stem across its principal parts. The aorist ἔλαβον and future λήψομαι are common forms to connect back to the lexical verb.",
      principalParts: {
        present: { form: "λαμβάνω", translation: "I take" },
        future: { form: "λήψομαι", translation: "I will take" },
        aorist: { form: "ἔλαβον", translation: "I took" },
        perfect: { form: "εἴληφα", translation: "I have taken" },
        perfectMiddlePassive: { form: "εἴλημμαι", translation: "I have been taken" },
        aoristPassive: { form: "ἐλήφθην", translation: "I was taken" }
      },
      irregular: true
    },
    {
      verbId: "didomi",
      lemma: "δίδωμι",
      displayLemma: "δίδωμι",
      meaning: "I give",
      dictionaryMeaning: "to give",
      notes: "δίδωμι is a μι-verb. Students should watch for reduplication in the present and perfect, and for the compact aorist ἔδωκα.",
      principalParts: {
        present: { form: "δίδωμι", translation: "I give" },
        future: { form: "δώσω", translation: "I will give" },
        aorist: { form: "ἔδωκα", translation: "I gave" },
        perfect: { form: "δέδωκα", translation: "I have given" },
        perfectMiddlePassive: { form: "δέδομαι", translation: "I have been given" },
        aoristPassive: { form: "ἐδόθην", translation: "I was given" }
      },
      irregular: true
    },
    {
      verbId: "blepo",
      lemma: "βλέπω",
      displayLemma: "βλέπω",
      meaning: "I see",
      dictionaryMeaning: "to see, look",
      notes: "βλέπω is mostly regular in this set, though the future middle-looking form βλέψομαι should be learned as the future principal part.",
      principalParts: {
        present: { form: "βλέπω", translation: "I see" },
        future: { form: "βλέψομαι", translation: "I will see" },
        aorist: { form: "ἔβλεψα", translation: "I saw" },
        perfect: { form: "βέβλεφα", translation: "I have seen" },
        perfectMiddlePassive: { form: "βέβλεμμαι", translation: "I have been seen" },
        aoristPassive: { form: "ἐβλέφθην", translation: "I was seen" }
      }
    },
    {
      verbId: "poieo",
      lemma: "ποιέω",
      displayLemma: "ποιέω / ποιῶ",
      meaning: "I do/make",
      dictionaryMeaning: "to do, make",
      notes: "ποιέω contracts to ποιῶ in the present. Its other principal parts preserve the ποιη- stem clearly, which helps connect contracted forms back to the dictionary entry.",
      principalParts: {
        present: { form: "ποιῶ", translation: "I do/make" },
        future: { form: "ποιήσω", translation: "I will do/make" },
        aorist: { form: "ἐποίησα", translation: "I did/made" },
        perfect: { form: "πεποίηκα", translation: "I have done/made" },
        perfectMiddlePassive: { form: "πεποίημαι", translation: "I have been made" },
        aoristPassive: { form: "ἐποιήθην", translation: "I was made" }
      }
    },
    {
      verbId: "gignomai",
      lemma: "γίγνομαι",
      displayLemma: "γίγνομαι",
      meaning: "I become",
      dictionaryMeaning: "to become, come into being",
      notes: "γίγνομαι is deponent in the present and has several high-frequency narrative forms. The perfect middle/passive is γεγένημαι, corrected here from the old page's misspelling.",
      principalParts: {
        present: { form: "γίγνομαι", translation: "I become" },
        future: { form: "γενήσομαι", translation: "I will become" },
        aorist: { form: "ἐγενόμην", translation: "I became" },
        perfect: { form: "γέγονα", translation: "I have become" },
        perfectMiddlePassive: { form: "γεγένημαι", translation: "I have become / have been made" },
        aoristPassive: { form: "ἐγενήθην", translation: "I became / was made" }
      },
      irregular: true
    }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function getCategories() {
    return clone(CATEGORIES);
  }

  function getVerbs() {
    return clone(VERBS);
  }

  function getVerb(verbId) {
    return clone(VERBS.find((verb) => verb.verbId === verbId) || null);
  }

  function getPracticeForms() {
    return VERBS.flatMap((verb) =>
      CATEGORIES
        .map((category) => {
          const part = verb.principalParts[category.key];

          if (!part?.form) {
            return null;
          }

          return {
            id: `${verb.verbId}-${category.key}`,
            verbId: verb.verbId,
            lemma: verb.lemma,
            displayLemma: verb.displayLemma,
            categoryKey: category.key,
            categoryLabel: category.label,
            form: part.form,
            translation: part.translation,
            meaning: verb.dictionaryMeaning,
            irregular: Boolean(verb.irregular)
          };
        })
        .filter(Boolean)
    );
  }

  return {
    getCategories,
    getVerbs,
    getVerb,
    getPracticeForms
  };
});
