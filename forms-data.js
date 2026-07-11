(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  root.xenophonForms = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function () {
  const CATEGORIES = [
    "Articles",
    "Nouns",
    "Adjectives",
    "Pronouns",
    "Participles",
    "Verbs"
  ];

  const CASES_WITH_VOCATIVE = ["Nominative", "Genitive", "Dative", "Accusative", "Vocative"];
  const CASES_WITHOUT_VOCATIVE = ["Nominative", "Genitive", "Dative", "Accusative"];
  const PERSON_ROWS = ["First person", "Second person", "Third person"];

  function nounTable(caption, singular, plural) {
    return {
      caption,
      rowHeader: "Case",
      columnHeaders: ["Singular", "Plural"],
      rows: CASES_WITH_VOCATIVE.map((label, index) => ({
        label,
        cells: [singular[index], plural[index]]
      }))
    };
  }

  function genderTable(caption, rows, rowHeader = "Case") {
    return {
      caption,
      rowHeader,
      columnHeaders: ["Masculine", "Feminine", "Neuter"],
      rows
    };
  }

  function personTable(caption, singular, plural) {
    return {
      caption,
      rowHeader: "Person",
      columnHeaders: ["Singular", "Plural"],
      rows: PERSON_ROWS.map((label, index) => ({
        label,
        cells: [singular[index], plural[index]]
      }))
    };
  }

  const PARADIGMS = [
    {
      id: "definite-article",
      slug: "definite-article",
      page: "forms-definite-article.html",
      title: "The Definite Article",
      navigationLabel: "The Definite Article",
      category: "Articles",
      description: "Masculine, feminine, and neuter forms of the Greek article.",
      source: "John Williams White, First Greek Book, §758.",
      introduction: "The article marks gender, number, and case and often helps identify how a noun functions in a sentence.",
      headwords: [{ form: "ὁ, ἡ, τό", gloss: "the" }],
      notes: ["The definite article has no vocative forms."],
      sections: [
        {
          heading: "Singular",
          tables: [
            genderTable("Definite article, singular", [
              { label: "Nominative", cells: ["ὁ", "ἡ", "τό"] },
              { label: "Genitive", cells: ["τοῦ", "τῆς", "τοῦ"] },
              { label: "Dative", cells: ["τῷ", "τῇ", "τῷ"] },
              { label: "Accusative", cells: ["τόν", "τήν", "τό"] }
            ])
          ]
        },
        {
          heading: "Plural",
          tables: [
            genderTable("Definite article, plural", [
              { label: "Nominative", cells: ["οἱ", "αἱ", "τά"] },
              { label: "Genitive", cells: ["τῶν", "τῶν", "τῶν"] },
              { label: "Dative", cells: ["τοῖς", "ταῖς", "τοῖς"] },
              { label: "Accusative", cells: ["τούς", "τάς", "τά"] }
            ])
          ]
        }
      ]
    },
    {
      id: "first-declension-nouns",
      slug: "first-declension-nouns",
      page: "forms-first-declension-nouns.html",
      title: "Nouns of the First Declension",
      navigationLabel: "Nouns of the First Declension",
      category: "Nouns",
      description: "Common feminine and masculine first-declension noun patterns.",
      source: "John Williams White, First Greek Book, §§739–740.",
      introduction: "First-declension nouns are mostly feminine, but masculine nouns in -ης and -ας use first-declension endings with masculine article forms.",
      headwords: [
        { form: "ἡ τιμή", gloss: "honor" },
        { form: "ἡ χώρα", gloss: "country, land" },
        { form: "ἡ θάλαττα", gloss: "sea" },
        { form: "ὁ πολίτης", gloss: "citizen" },
        { form: "ὁ νεανίας", gloss: "young man" }
      ],
      notes: ["The main feminine patterns use -η or long -α throughout the singular; some nouns show short -α in the nominative and accusative singular but -ης and -ῃ in the genitive and dative."],
      sections: [
        { heading: "Feminine nouns in -η", lemma: "ἡ τιμή", gloss: "honor", tables: [nounTable("ἡ τιμή, first declension feminine in -η", ["τιμή", "τιμῆς", "τιμῇ", "τιμήν", "τιμή"], ["τιμαί", "τιμῶν", "τιμαῖς", "τιμάς", "τιμαί"])] },
        { heading: "Feminine nouns in long -α", lemma: "ἡ χώρα", gloss: "country, land", tables: [nounTable("ἡ χώρα, first declension feminine in long -α", ["χώρα", "χώρας", "χώρᾳ", "χώραν", "χώρα"], ["χῶραι", "χωρῶν", "χώραις", "χώρας", "χῶραι"])] },
        { heading: "Feminine nouns with short -α in the nominative and accusative singular", lemma: "ἡ θάλαττα", gloss: "sea", tables: [nounTable("ἡ θάλαττα, first declension feminine with short -α", ["θάλαττα", "θαλάττης", "θαλάττῃ", "θάλατταν", "θάλαττα"], ["θάλατται", "θαλαττῶν", "θαλάτταις", "θαλάττας", "θάλατται"])] },
        { heading: "Masculine nouns in -ης", lemma: "ὁ πολίτης", gloss: "citizen", tables: [nounTable("ὁ πολίτης, first declension masculine in -ης", ["πολίτης", "πολίτου", "πολίτῃ", "πολίτην", "πολῖτα"], ["πολῖται", "πολιτῶν", "πολίταις", "πολίτας", "πολῖται"])] },
        { heading: "Masculine nouns in -ας", lemma: "ὁ νεανίας", gloss: "young man", tables: [nounTable("ὁ νεανίας, first declension masculine in -ας", ["νεανίας", "νεανίου", "νεανίᾳ", "νεανίαν", "νεανία"], ["νεανίαι", "νεανιῶν", "νεανίαις", "νεανίας", "νεανίαι"])] }
      ]
    },
    {
      id: "second-declension-nouns",
      slug: "second-declension-nouns",
      page: "forms-second-declension-nouns.html",
      title: "Nouns of the Second Declension",
      navigationLabel: "Nouns of the Second Declension",
      category: "Nouns",
      description: "Masculine -ος and neuter -ον patterns, with a note on feminine -ος nouns.",
      source: "John Williams White, First Greek Book, §741.",
      introduction: "Second-declension nouns often end in -ος or -ον. Neuter nominative, accusative, and vocative forms are identical, and the neuter plural ends in -α.",
      headwords: [
        { form: "ὁ λόγος", gloss: "word, speech" },
        { form: "τό δῶρον", gloss: "gift" },
        { form: "ἡ ὁδός", gloss: "road, way" }
      ],
      notes: ["Some second-declension nouns in -ος are feminine, such as ἡ ὁδός; their noun endings follow the -ος pattern while their article is feminine."],
      sections: [
        { heading: "Masculine nouns in -ος", lemma: "ὁ λόγος", gloss: "word, speech", tables: [nounTable("ὁ λόγος, second declension masculine in -ος", ["λόγος", "λόγου", "λόγῳ", "λόγον", "λόγε"], ["λόγοι", "λόγων", "λόγοις", "λόγους", "λόγοι"])] },
        { heading: "Neuter nouns in -ον", lemma: "τό δῶρον", gloss: "gift", tables: [nounTable("τό δῶρον, second declension neuter in -ον", ["δῶρον", "δώρου", "δώρῳ", "δῶρον", "δῶρον"], ["δῶρα", "δώρων", "δώροις", "δῶρα", "δῶρα"])] }
      ]
    },
    {
      id: "third-declension-nouns",
      slug: "third-declension-nouns",
      page: "forms-third-declension-nouns.html",
      title: "Nouns of the Third Declension",
      navigationLabel: "Nouns of the Third Declension",
      category: "Nouns",
      description: "Representative consonant-stem, i-stem, and diphthong-stem noun patterns.",
      source: "John Williams White, First Greek Book, §§743–749.",
      introduction: "Third-declension endings attach to different stems, so one ending chart cannot cover every noun transparently.",
      headwords: [
        { form: "ὁ φύλαξ, φύλακος", gloss: "guard" },
        { form: "τό σῶμα, σώματος", gloss: "body" },
        { form: "ἡ πόλις, πόλεως", gloss: "city" },
        { form: "ὁ βασιλεύς, βασιλέως", gloss: "king" }
      ],
      notes: ["Memorize the nominative and genitive singular together; the genitive usually reveals the stem used by the rest of the paradigm."],
      sections: [
        { heading: "Consonant-stem masculine", lemma: "ὁ φύλαξ, φύλακος", gloss: "guard", tables: [nounTable("ὁ φύλαξ, φύλακος, third declension consonant-stem masculine", ["φύλαξ", "φύλακος", "φύλακι", "φύλακα", "φύλαξ"], ["φύλακες", "φυλάκων", "φύλαξι(ν)", "φύλακας", "φύλακες"])] },
        { heading: "Neuter consonant-stem", lemma: "τό σῶμα, σώματος", gloss: "body", tables: [nounTable("τό σῶμα, σώματος, third declension neuter consonant-stem", ["σῶμα", "σώματος", "σώματι", "σῶμα", "σῶμα"], ["σώματα", "σωμάτων", "σώμασι(ν)", "σώματα", "σώματα"])] },
        { heading: "I-stem feminine", lemma: "ἡ πόλις, πόλεως", gloss: "city", tables: [nounTable("ἡ πόλις, πόλεως, third declension i-stem feminine", ["πόλις", "πόλεως", "πόλει", "πόλιν", "πόλι"], ["πόλεις", "πόλεων", "πόλεσι(ν)", "πόλεις", "πόλεις"])] },
        { heading: "Diphthong-stem masculine", lemma: "ὁ βασιλεύς, βασιλέως", gloss: "king", tables: [nounTable("ὁ βασιλεύς, βασιλέως, third declension diphthong-stem masculine", ["βασιλεύς", "βασιλέως", "βασιλεῖ", "βασιλέα", "βασιλεῦ"], ["βασιλεῖς", "βασιλέων", "βασιλεῦσι(ν)", "βασιλέας", "βασιλεῖς"])] }
      ]
    },
    {
      id: "adjectives",
      slug: "adjectives",
      page: "forms-adjectives.html",
      title: "Adjectives",
      navigationLabel: "Adjectives",
      category: "Adjectives",
      description: "Common adjective patterns across first, second, and third declensions.",
      source: "John Williams White, First Greek Book, §§750–753.",
      introduction: "Greek adjectives agree with the nouns they modify in gender, number, and case.",
      headwords: [
        { form: "ἀγαθός, ἀγαθή, ἀγαθόν", gloss: "good" },
        { form: "ἄδικος, ἄδικον", gloss: "unjust" },
        { form: "ἀληθής, ἀληθές", gloss: "true" }
      ],
      notes: ["Three-termination adjectives show separate masculine, feminine, and neuter nominative forms. Two-termination adjectives use one form for masculine and feminine and another for neuter."],
      sections: [
        {
          heading: "First-and-second-declension adjective",
          lemma: "ἀγαθός, ἀγαθή, ἀγαθόν",
          gloss: "good",
          tables: [
            genderTable("ἀγαθός, singular", [
              { label: "Nominative", cells: ["ἀγαθός", "ἀγαθή", "ἀγαθόν"] },
              { label: "Genitive", cells: ["ἀγαθοῦ", "ἀγαθῆς", "ἀγαθοῦ"] },
              { label: "Dative", cells: ["ἀγαθῷ", "ἀγαθῇ", "ἀγαθῷ"] },
              { label: "Accusative", cells: ["ἀγαθόν", "ἀγαθήν", "ἀγαθόν"] },
              { label: "Vocative", cells: ["ἀγαθέ", "ἀγαθή", "ἀγαθόν"] }
            ]),
            genderTable("ἀγαθός, plural", [
              { label: "Nominative", cells: ["ἀγαθοί", "ἀγαθαί", "ἀγαθά"] },
              { label: "Genitive", cells: ["ἀγαθῶν", "ἀγαθῶν", "ἀγαθῶν"] },
              { label: "Dative", cells: ["ἀγαθοῖς", "ἀγαθαῖς", "ἀγαθοῖς"] },
              { label: "Accusative", cells: ["ἀγαθούς", "ἀγαθάς", "ἀγαθά"] },
              { label: "Vocative", cells: ["ἀγαθοί", "ἀγαθαί", "ἀγαθά"] }
            ])
          ]
        },
        {
          heading: "Two-termination adjective",
          lemma: "ἄδικος, ἄδικον",
          gloss: "unjust",
          tables: [
            { caption: "ἄδικος, masculine and feminine", rowHeader: "Case", columnHeaders: ["Singular", "Plural"], rows: CASES_WITH_VOCATIVE.map((label, index) => ({ label, cells: [["ἄδικος", "ἀδίκου", "ἀδίκῳ", "ἄδικον", "ἄδικε"][index], ["ἄδικοι", "ἀδίκων", "ἀδίκοις", "ἀδίκους", "ἄδικοι"][index]] })) },
            { caption: "ἄδικον, neuter", rowHeader: "Case", columnHeaders: ["Singular", "Plural"], rows: CASES_WITH_VOCATIVE.map((label, index) => ({ label, cells: [["ἄδικον", "ἀδίκου", "ἀδίκῳ", "ἄδικον", "ἄδικον"][index], ["ἄδικα", "ἀδίκων", "ἀδίκοις", "ἄδικα", "ἄδικα"][index]] })) }
          ]
        },
        {
          heading: "Third-declension adjective",
          lemma: "ἀληθής, ἀληθές",
          gloss: "true",
          tables: [
            { caption: "ἀληθής, masculine and feminine", rowHeader: "Case", columnHeaders: ["Singular", "Plural"], rows: CASES_WITH_VOCATIVE.map((label, index) => ({ label, cells: [["ἀληθής", "ἀληθοῦς", "ἀληθεῖ", "ἀληθῆ", "ἀληθές"][index], ["ἀληθεῖς", "ἀληθῶν", "ἀληθέσι(ν)", "ἀληθεῖς", "ἀληθεῖς"][index]] })) },
            { caption: "ἀληθές, neuter", rowHeader: "Case", columnHeaders: ["Singular", "Plural"], rows: CASES_WITH_VOCATIVE.map((label, index) => ({ label, cells: [["ἀληθές", "ἀληθοῦς", "ἀληθεῖ", "ἀληθές", "ἀληθές"][index], ["ἀληθῆ", "ἀληθῶν", "ἀληθέσι(ν)", "ἀληθῆ", "ἀληθῆ"][index]] })) }
          ]
        }
      ]
    },
    {
      id: "pronouns",
      slug: "pronouns",
      page: "forms-pronouns.html",
      title: "Pronouns",
      navigationLabel: "Pronouns",
      category: "Pronouns",
      description: "Personal, intensive, demonstrative, and relative pronoun forms.",
      source: "John Williams White, First Greek Book, §§759–764.",
      introduction: "Pronouns have their own common patterns and should be learned as reference paradigms rather than forced into noun charts.",
      headwords: [
        { form: "ἐγώ", gloss: "I" },
        { form: "σύ", gloss: "you" },
        { form: "αὐτός, αὐτή, αὐτό", gloss: "self; he, she, it" },
        { form: "οὗτος, αὕτη, τοῦτο", gloss: "this" },
        { form: "ὅς, ἥ, ὅ", gloss: "who, which" }
      ],
      sections: [
        {
          heading: "First- and second-person personal pronouns",
          tables: [
            { caption: "ἐγώ and σύ", rowHeader: "Case", columnHeaders: ["First person singular", "Second person singular", "First person plural", "Second person plural"], rows: CASES_WITHOUT_VOCATIVE.map((label, index) => ({ label, cells: [["ἐγώ", "ἐμοῦ / μου", "ἐμοί / μοι", "ἐμέ / με"][index], ["σύ", "σοῦ / σου", "σοί / σοι", "σέ / σε"][index], ["ἡμεῖς", "ἡμῶν", "ἡμῖν", "ἡμᾶς"][index], ["ὑμεῖς", "ὑμῶν", "ὑμῖν", "ὑμᾶς"][index]] })) }
          ]
        },
        {
          heading: "αὐτός",
          lemma: "αὐτός, αὐτή, αὐτό",
          gloss: "self; he, she, it",
          tables: [
            genderTable("αὐτός, singular", [
              { label: "Nominative", cells: ["αὐτός", "αὐτή", "αὐτό"] },
              { label: "Genitive", cells: ["αὐτοῦ", "αὐτῆς", "αὐτοῦ"] },
              { label: "Dative", cells: ["αὐτῷ", "αὐτῇ", "αὐτῷ"] },
              { label: "Accusative", cells: ["αὐτόν", "αὐτήν", "αὐτό"] }
            ]),
            genderTable("αὐτός, plural", [
              { label: "Nominative", cells: ["αὐτοί", "αὐταί", "αὐτά"] },
              { label: "Genitive", cells: ["αὐτῶν", "αὐτῶν", "αὐτῶν"] },
              { label: "Dative", cells: ["αὐτοῖς", "αὐταῖς", "αὐτοῖς"] },
              { label: "Accusative", cells: ["αὐτούς", "αὐτάς", "αὐτά"] }
            ])
          ]
        },
        {
          heading: "Demonstrative pronoun",
          lemma: "οὗτος, αὕτη, τοῦτο",
          gloss: "this",
          tables: [
            genderTable("οὗτος, singular", [
              { label: "Nominative", cells: ["οὗτος", "αὕτη", "τοῦτο"] },
              { label: "Genitive", cells: ["τούτου", "ταύτης", "τούτου"] },
              { label: "Dative", cells: ["τούτῳ", "ταύτῃ", "τούτῳ"] },
              { label: "Accusative", cells: ["τοῦτον", "ταύτην", "τοῦτο"] }
            ]),
            genderTable("οὗτος, plural", [
              { label: "Nominative", cells: ["οὗτοι", "αὗται", "ταῦτα"] },
              { label: "Genitive", cells: ["τούτων", "τούτων", "τούτων"] },
              { label: "Dative", cells: ["τούτοις", "ταύταις", "τούτοις"] },
              { label: "Accusative", cells: ["τούτους", "ταύτας", "ταῦτα"] }
            ])
          ]
        },
        {
          heading: "Relative pronoun",
          lemma: "ὅς, ἥ, ὅ",
          gloss: "who, which",
          tables: [
            genderTable("ὅς, singular", [
              { label: "Nominative", cells: ["ὅς", "ἥ", "ὅ"] },
              { label: "Genitive", cells: ["οὗ", "ἧς", "οὗ"] },
              { label: "Dative", cells: ["ᾧ", "ᾗ", "ᾧ"] },
              { label: "Accusative", cells: ["ὅν", "ἥν", "ὅ"] }
            ]),
            genderTable("ὅς, plural", [
              { label: "Nominative", cells: ["οἵ", "αἵ", "ἅ"] },
              { label: "Genitive", cells: ["ὧν", "ὧν", "ὧν"] },
              { label: "Dative", cells: ["οἷς", "αἷς", "οἷς"] },
              { label: "Accusative", cells: ["οὕς", "ἅς", "ἅ"] }
            ])
          ]
        }
      ]
    },
    {
      id: "participles",
      slug: "participles",
      page: "forms-participles.html",
      title: "Participles",
      navigationLabel: "Participles",
      category: "Participles",
      description: "Present active and present middle/passive participle reference forms for λύω.",
      source: "John Williams White, First Greek Book, §§754–755 and §765.",
      introduction: "Participles are verbal adjectives. These forms show the present active and present middle/passive participles of λύω.",
      headwords: [
        { form: "λύων, λύουσα, λῦον", gloss: "loosing" },
        { form: "λυόμενος, λυομένη, λυόμενον", gloss: "being loosed; loosing for oneself" }
      ],
      notes: ["The present active participle uses third-declension masculine and neuter forms with first-declension feminine forms; the present middle/passive participle declines like a first-and-second-declension adjective."],
      sections: [
        {
          heading: "Present active participle",
          lemma: "λύων, λύουσα, λῦον",
          gloss: "loosing",
          tables: [
            genderTable("Present active participle, principal forms", [
              { label: "Nominative singular", cells: ["λύων", "λύουσα", "λῦον"] },
              { label: "Genitive singular", cells: ["λύοντος", "λυούσης", "λύοντος"] },
              { label: "Nominative plural", cells: ["λύοντες", "λύουσαι", "λύοντα"] },
              { label: "Genitive plural", cells: ["λυόντων", "λυουσῶν", "λυόντων"] }
            ], "Form")
          ]
        },
        {
          heading: "Present middle/passive participle",
          lemma: "λυόμενος, λυομένη, λυόμενον",
          gloss: "being loosed; loosing for oneself",
          tables: [
            genderTable("Present middle/passive participle, singular", [
              { label: "Nominative", cells: ["λυόμενος", "λυομένη", "λυόμενον"] },
              { label: "Genitive", cells: ["λυομένου", "λυομένης", "λυομένου"] },
              { label: "Dative", cells: ["λυομένῳ", "λυομένῃ", "λυομένῳ"] },
              { label: "Accusative", cells: ["λυόμενον", "λυομένην", "λυόμενον"] }
            ]),
            genderTable("Present middle/passive participle, plural", [
              { label: "Nominative", cells: ["λυόμενοι", "λυόμεναι", "λυόμενα"] },
              { label: "Genitive", cells: ["λυομένων", "λυομένων", "λυομένων"] },
              { label: "Dative", cells: ["λυομένοις", "λυομέναις", "λυομένοις"] },
              { label: "Accusative", cells: ["λυομένους", "λυομένας", "λυόμενα"] }
            ])
          ]
        }
      ]
    },
    {
      id: "omega-verbs",
      slug: "omega-verbs",
      page: "forms-omega-verbs.html",
      title: "Verbs in -ω",
      navigationLabel: "Verbs in -ω",
      category: "Verbs",
      description: "Present-system indicative, imperative, infinitive, and participle forms of λύω.",
      source: "John Williams White, First Greek Book, §765.",
      introduction: "λύω is a regular model for many verbs in -ω in the present system.",
      headwords: [{ form: "λύω", gloss: "loose, release" }],
      sections: [
        { heading: "Present active indicative", tables: [personTable("λύω, present active indicative", ["λύω", "λύεις", "λύει"], ["λύομεν", "λύετε", "λύουσι(ν)"])] },
        { heading: "Present middle/passive indicative", tables: [personTable("λύω, present middle/passive indicative", ["λύομαι", "λύῃ", "λύεται"], ["λυόμεθα", "λύεσθε", "λύονται"])] },
        { heading: "Imperfect active indicative", tables: [personTable("λύω, imperfect active indicative", ["ἔλυον", "ἔλυες", "ἔλυε(ν)"], ["ἐλύομεν", "ἐλύετε", "ἔλυον"])] },
        { heading: "Imperfect middle/passive indicative", tables: [personTable("λύω, imperfect middle/passive indicative", ["ἐλυόμην", "ἐλύου", "ἐλύετο"], ["ἐλυόμεθα", "ἐλύεσθε", "ἐλύοντο"])] },
        { heading: "Present active imperative", tables: [{ caption: "λύω, present active imperative", rowHeader: "Person", columnHeaders: ["Singular", "Plural"], rows: [{ label: "Second person", cells: ["λῦε", "λύετε"] }, { label: "Third person", cells: ["λυέτω", "λυόντων"] }] }] },
        { heading: "Present middle/passive imperative", tables: [{ caption: "λύω, present middle/passive imperative", rowHeader: "Person", columnHeaders: ["Singular", "Plural"], rows: [{ label: "Second person", cells: ["λύου", "λύεσθε"] }, { label: "Third person", cells: ["λυέσθω", "λυέσθων"] }] }] },
        { heading: "Present infinitives and participles", tables: [{ caption: "λύω, present infinitives and participle headwords", rowHeader: "Form", columnHeaders: ["Active", "Middle/Passive"], rows: [{ label: "Infinitive", cells: ["λύειν", "λύεσθαι"] }, { label: "Participle headwords", cells: ["λύων, λύουσα, λῦον", "λυόμενος, λυομένη, λυόμενον"] }] }] }
      ]
    },
    {
      id: "eimi",
      slug: "eimi",
      page: "forms-eimi.html",
      title: "The Verb εἰμί",
      navigationLabel: "The Verb εἰμί",
      category: "Verbs",
      description: "Core present and imperfect forms of εἰμί, “be.”",
      source: "John Williams White, First Greek Book, §795.",
      introduction: "εἰμί is the common irregular verb “be.” Its forms should be learned as a separate paradigm.",
      headwords: [{ form: "εἰμί", gloss: "be" }],
      sections: [
        { heading: "Present indicative", tables: [personTable("εἰμί, present indicative", ["εἰμί", "εἶ", "ἐστί(ν)"], ["ἐσμέν", "ἐστέ", "εἰσί(ν)"])] },
        { heading: "Imperfect indicative", tables: [personTable("εἰμί, imperfect indicative", ["ἦν", "ἦσθα", "ἦν"], ["ἦμεν", "ἦτε", "ἦσαν"])] },
        { heading: "Present imperative", tables: [{ caption: "εἰμί, present imperative", rowHeader: "Person", columnHeaders: ["Singular", "Plural"], rows: [{ label: "Second person", cells: ["ἴσθι", "ἔστε"] }, { label: "Third person", cells: ["ἔστω", "ἔστων"] }] }] },
        { heading: "Present infinitive and participle", tables: [{ caption: "εἰμί, present infinitive and participle", rowHeader: "Form", columnHeaders: ["Masculine", "Feminine", "Neuter"], rows: [{ label: "Infinitive", cells: ["εἶναι", "εἶναι", "εἶναι"] }, { label: "Participle nominative singular", cells: ["ὤν", "οὖσα", "ὄν"] }, { label: "Participle genitive singular", cells: ["ὄντος", "οὔσης", "ὄντος"] }] }] }
      ]
    }
  ];

  function getParadigms() {
    return PARADIGMS.map((paradigm) => ({ ...paradigm }));
  }

  function getParadigm(idOrSlug) {
    return PARADIGMS.find((paradigm) => paradigm.id === idOrSlug || paradigm.slug === idOrSlug) || null;
  }

  function getCategories() {
    return [...CATEGORIES];
  }

  function getNavigationItems() {
    return [
      { label: "All Forms", href: "forms.html", id: "forms-index" },
      ...PARADIGMS.map((paradigm) => ({
        label: paradigm.navigationLabel,
        href: paradigm.page,
        id: paradigm.id
      }))
    ];
  }

  return {
    getCategories,
    getNavigationItems,
    getParadigm,
    getParadigms
  };
});
