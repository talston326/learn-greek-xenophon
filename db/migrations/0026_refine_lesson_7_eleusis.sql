-- Refine the published Lesson 7 reading, images, sanctuary plan, and quiz.
BEGIN;
DO $lesson7$
DECLARE
  patch jsonb := $json${
  "id": "lesson-7",
  "number": 7,
  "title": "The Road to Eleusis",
  "greekTitle": "Ἡ πομπὴ πρὸς τὴν Ἐλευσῖνα",
  "scope": "All present active indicative persons; noun and adjective agreement; first-declension feminine -η and long -α forms",
  "theme": "Wisdom and Socrates; reconstructed Eleusinian procession",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-7-road-banner-v2.png",
    "alt": "Xenophon, Clinias, Myrrhine, and her sister walk past Kerameikos grave monuments and a Dipylon Amphora-inspired vase after leaving by the Sacred Gate",
    "caption": "The four travelers pass Kerameikos graves. The tall Geometric vase evokes the much earlier Dipylon Amphora; its survival into Xenophon’s era is not documented."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-7-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-7-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-7-page-3",
      "title": "Eleusis and the Sacred Way",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Nouns",
      "items": [
        {
          "greek": "ἡ πομπή",
          "english": "procession",
          "dictionaryForm": "πομπή, πομπῆς, ἡ",
          "status": "required vocabulary",
          "lemma": "πομπή",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ πύλη",
          "english": "gate",
          "dictionaryForm": "πύλη, πύλης, ἡ",
          "status": "required vocabulary",
          "lemma": "πύλη",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ ἀδελφή",
          "english": "sister",
          "dictionaryForm": "ἀδελφή, ἀδελφῆς, ἡ",
          "status": "required vocabulary",
          "lemma": "ἀδελφή",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ θεά",
          "english": "goddess",
          "dictionaryForm": "θεά, θεᾶς, ἡ",
          "status": "required vocabulary",
          "lemma": "θεά",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ χώρα",
          "english": "countryside, land",
          "dictionaryForm": "χώρα, χώρας, ἡ",
          "status": "required vocabulary",
          "lemma": "χώρα",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ γῆ",
          "english": "earth, land",
          "dictionaryForm": "γῆ, γῆς, ἡ",
          "status": "required vocabulary",
          "lemma": "γῆ",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ σῖτος",
          "english": "grain",
          "dictionaryForm": "σῖτος, σίτου, ὁ",
          "status": "required vocabulary",
          "lemma": "σῖτος",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ δῶρον",
          "english": "gift",
          "dictionaryForm": "δῶρον, δώρου, τό",
          "status": "required vocabulary",
          "lemma": "δῶρον",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ ὁδός",
          "english": "road (feminine second-declension noun; full pattern in Lesson 8)",
          "dictionaryForm": "ὁδός, ὁδοῦ, ἡ",
          "status": "reading vocabulary",
          "lemma": "ὁδός",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Verbs",
      "items": [
        {
          "greek": "βαδίζω",
          "english": "walk",
          "status": "required vocabulary",
          "lemma": "βαδίζω",
          "audioPlaceholder": true
        },
        {
          "greek": "βλέπω",
          "english": "see, watch",
          "status": "required vocabulary",
          "lemma": "βλέπω",
          "audioPlaceholder": true
        },
        {
          "greek": "φέρω",
          "english": "carry, bear",
          "status": "required vocabulary",
          "lemma": "φέρω",
          "audioPlaceholder": true
        },
        {
          "greek": "μένω",
          "english": "stay, pause",
          "status": "required vocabulary",
          "lemma": "μένω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἄγω",
          "english": "lead, guide",
          "status": "required vocabulary",
          "lemma": "ἄγω",
          "audioPlaceholder": true
        },
        {
          "greek": "ζητέω",
          "english": "seek; ζητεῖ means “she seeks”",
          "dictionaryForm": "ζητέω",
          "status": "reading vocabulary",
          "lemma": "ζητέω",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Words and expressions",
      "items": [
        {
          "greek": "ἐγώ",
          "english": "I",
          "status": "required vocabulary",
          "lemma": "ἐγώ",
          "audioPlaceholder": true
        },
        {
          "greek": "σύ",
          "english": "you (singular)",
          "status": "required vocabulary",
          "lemma": "σύ",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡμεῖς",
          "english": "we",
          "status": "required vocabulary",
          "lemma": "ἡμεῖς",
          "audioPlaceholder": true
        },
        {
          "greek": "ὑμεῖς",
          "english": "you (plural)",
          "status": "required vocabulary",
          "lemma": "ὑμεῖς",
          "audioPlaceholder": true
        },
        {
          "greek": "μετά + genitive",
          "english": "with",
          "status": "reading vocabulary",
          "lemma": "μετά + genitive",
          "audioPlaceholder": true
        },
        {
          "greek": "πρός + accusative",
          "english": "toward",
          "status": "reading vocabulary",
          "lemma": "πρός + accusative",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Ἡ πομπὴ πρὸς τὴν Ἐλευσῖνα",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "At the Kerameikos gates, Xenophon and Clinias join a procession toward Eleusis. Myrrhine, an Athenian woman traveling with her sister, explains why she is going and helps her sister along the road. Read for the six persons of present active verbs and for feminine -η and -α nouns.",
      "This journey and every conversation are reconstructed for the course. Xenophon’s participation in an Eleusinian procession is not attested. The public route, worship of Demeter and Kore, and women’s participation are historically grounded; the reading stops before the secret rites.",
      "The roadside funerary monuments reflect the Kerameikos cemetery. The tall Geometric vase in the illustration evokes the eighth-century BCE Dipylon Amphora; whether that particular grave marker was still standing in Xenophon’s time is unknown.",
      "Blue glosses explain proper names, a few third-declension forms, the fixed name Ἱερὰ Ὁδός, and other words outside this lesson’s production goals."
    ],
    "paragraphs": [
      {
        "greek": "ἐν ταῖς Ἀθήναις οἱ ἄνθρωποι τὴν πομπὴν βλέπουσιν. ἡ πομπὴ διὰ τῆς Ἱερᾶς Πύλης πρὸς τὴν Ἐλευσῖνα βαδίζει. ὁ Ξενοφῶν καὶ ὁ Κλεινίας μετὰ τῶν ἄλλων βαδίζουσιν.",
        "gloss": [
          {
            "greek": "ἐν ταῖς Ἀθήναις",
            "english": "in Athens; the city name is plural"
          },
          {
            "greek": "ἡ Ἱερὰ Πύλη",
            "english": "the Sacred Gate; the Eleusinian road passed through it"
          },
          {
            "greek": "πρὸς τὴν Ἐλευσῖνα",
            "english": "toward Eleusis; name form supplied"
          },
          {
            "greek": "μετὰ τῶν ἄλλων",
            "english": "with the others; μετά takes the genitive here"
          }
        ]
      },
      {
        "greek": "ἡ Μυρρίνη καὶ ἡ ἀδελφὴ αὐτῆς ἐν τῇ πομπῇ εἰσίν. ἡ Μυρρίνη ἄρτον καὶ ὕδωρ φέρει· ἡ ἀδελφὴ καλάθιον φέρει. ἡ Μυρρίνη τὴν ἀδελφὴν ἄγει.",
        "gloss": [
          {
            "greek": "ἡ Μυρρίνη",
            "english": "Myrrhine, a fictional Athenian pilgrim"
          },
          {
            "greek": "ὕδωρ",
            "english": "water; third-declension noun supplied"
          },
          {
            "greek": "καλάθιον",
            "english": "small basket; supplied reading word"
          },
          {
            "greek": "ἄγει",
            "english": "leads or guides"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν λέγει· «ὦ Μυρρίνη, διὰ τί πρὸς τὴν Ἐλευσῖνα βαδίζεις;» ἡ δὲ Μυρρίνη λέγει· «ἡ μήτηρ μου ἐν τῇ χώρᾳ ἐστίν. ἡ γῆ σῖτον φέρει. ἐγὼ τῇ θεᾷ δῶρα φέρω.»",
        "gloss": [
          {
            "greek": "ὦ Μυρρίνη",
            "english": "Myrrhine!; form of direct address"
          },
          {
            "greek": "ἡ μήτηρ μου",
            "english": "my mother; μήτηρ is a supplied third-declension noun"
          },
          {
            "greek": "ἡ γῆ",
            "english": "the earth or land"
          },
          {
            "greek": "σῖτον",
            "english": "grain; direct object"
          },
          {
            "greek": "τῇ θεᾷ",
            "english": "to the goddess; dative singular of θεά"
          },
          {
            "greek": "δῶρα",
            "english": "gifts; neuter plural"
          }
        ]
      },
      {
        "greek": "ὁ Κλεινίας λέγει· «ἐγὼ τὴν πύλην βλέπω· σὺ τὴν πομπὴν βλέπεις, ὦ Ξενοφῶν;» ὁ Ξενοφῶν λέγει· «ναί· ἡ πομπὴ βαδίζει. ἡμεῖς μετὰ τῆς πομπῆς βαδίζομεν. ὑμεῖς, ὦ φίλαι, βαδίζετε;»",
        "gloss": [
          {
            "greek": "ἐγὼ … βλέπω",
            "english": "I see; first-person singular"
          },
          {
            "greek": "σὺ … βλέπεις",
            "english": "you see; second-person singular"
          },
          {
            "greek": "ἡμεῖς … βαδίζομεν",
            "english": "we walk; first-person plural"
          },
          {
            "greek": "ὑμεῖς … βαδίζετε",
            "english": "you all walk; second-person plural statement/question"
          },
          {
            "greek": "ὦ φίλαι",
            "english": "female friends!; plural form of direct address"
          }
        ]
      },
      {
        "greek": "ἡ Μυρρίνη λέγει· «ναί· αἱ φίλαι βαδίζουσιν. ἡ ἀδελφή μου τὴν καλὴν πομπὴν βλέπει· ἐγὼ δὲ τὴν μακρὰν ὁδὸν βλέπω. ἡμεῖς ὕδωρ φέρομεν.»",
        "gloss": [
          {
            "greek": "αἱ φίλαι",
            "english": "the female friends; feminine nominative plural"
          },
          {
            "greek": "τὴν καλὴν πομπήν",
            "english": "the beautiful procession; feminine accusative singular agreement"
          },
          {
            "greek": "τὴν μακρὰν ὁδόν",
            "english": "the long road; ὁδός is a feminine second-declension noun, supplied here"
          },
          {
            "greek": "φέρομεν",
            "english": "we carry"
          }
        ]
      },
      {
        "greek": "ἐπὶ τῇ Ἱερᾷ Ὁδῷ οἱ ἄνθρωποι πρὸς τὴν Ἐλευσῖνα βαδίζουσιν. ἡ Μυρρίνη τῇ ἀδελφῇ λέγει· «ἡ Δήμητρα τὴν Κόρην ζητεῖ. ἡμεῖς πρὸς τὸ ἱερὸν βαδίζομεν.»",
        "gloss": [
          {
            "greek": "ἐπὶ τῇ Ἱερᾷ Ὁδῷ",
            "english": "on the Sacred Way; fixed place-name, feminine second-declension ὁδός supplied"
          },
          {
            "greek": "τῇ ἀδελφῇ",
            "english": "to her sister; dative singular"
          },
          {
            "greek": "ἡ Δήμητρα",
            "english": "Demeter; name forms supplied"
          },
          {
            "greek": "τὴν Κόρην",
            "english": "Kore or Persephone; accusative singular"
          },
          {
            "greek": "τὸ ἱερόν",
            "english": "sanctuary"
          }
        ]
      },
      {
        "greek": "πρὸ τῶν πυλῶν τοῦ ἱεροῦ ἡ πομπὴ μένει. ἡ Μυρρίνη τὴν ἀδελφὴν βλέπει· ὁ Ξενοφῶν καὶ ὁ Κλεινίας τὴν Μυρρίνην ἀκούουσιν. ἡ ὁδὸς μακρά ἐστιν, ἀλλὰ ἡ πομπὴ καλή.",
        "gloss": [
          {
            "greek": "πρὸ τῶν πυλῶν",
            "english": "before the gates; genitive plural"
          },
          {
            "greek": "τοῦ ἱεροῦ",
            "english": "of the sanctuary"
          },
          {
            "greek": "μένει",
            "english": "stays or pauses"
          },
          {
            "greek": "τὴν Μυρρίνην",
            "english": "Myrrhine as direct object"
          },
          {
            "greek": "ἡ ὁδός",
            "english": "the road; feminine noun of the second declension, formally studied in Lesson 8"
          }
        ]
      }
    ],
    "translation": "In Athens people watch the procession. The procession walks through the Sacred Gate toward Eleusis. Xenophon and Clinias walk with the others.\n\nMyrrhine and her sister are in the procession. Myrrhine carries bread and water; her sister carries a small basket. Myrrhine guides her sister.\n\nXenophon says, “Myrrhine, why do you walk toward Eleusis?” Myrrhine says, “My mother is in the countryside. The earth bears grain. I bring gifts to the goddess.”\n\nClinias says, “I see the gate; do you see the procession, Xenophon?” Xenophon says, “Yes; the procession is moving. We walk with the procession. Are you walking, friends?”\n\nMyrrhine says, “Yes; the women friends are walking. My sister watches the beautiful procession, but I watch the long road. We carry water.”\n\nOn the Sacred Way the people walk toward Eleusis. Myrrhine says to her sister, “Demeter looks for Kore. We walk toward the sanctuary.”\n\nBefore the gates of the sanctuary the procession pauses. Myrrhine looks at her sister; Xenophon and Clinias listen to Myrrhine. The road is long, but the procession is beautiful.",
    "sourceCitation": "Course reconstruction. Historical context: Homeric Hymn to Demeter; The Metropolitan Museum of Art, “Mystery Cults in the Greek and Roman World” (https://www.metmuseum.org/de/essays/mystery-cults-in-the-greek-and-roman-world).",
    "notesMarkdown": "The characters’ journey and dialogue are fictional. The procession and the sanctuary are public historical setting; this reading does not claim to describe the initiates’ secret rites."
  },
  "wordStudy": {
    "label": "Word Study — A Procession and Its Dictionary Forms",
    "blocks": [
      {
        "title": "From πομπή to the case forms you read",
        "practiceTopic": "word-study",
        "body": [
          "A dictionary lists πομπή, πομπῆς, ἡ: nominative singular, genitive singular, and feminine article. The genitive reveals the -η stem. In the story ἡ πομπή moves, Xenophon sees τὴν πομπήν, and the friends walk μετὰ τῆς πομπῆς.",
          "The related English word “pomp” ultimately comes from Greek πομπή by way of Latin pompa. Here πομπή means an organized public procession; its English descendant is a memory aid, not a full translation in every context.",
          "Compare θεά, θεᾶς, ἡ. The long α stays in the singular after ε: θεά, θεᾶς, θεᾷ, θεάν. The article ἡ still marks a feminine noun. The grammar tables below put these two first-declension patterns side by side."
        ],
        "display": [
          {
            "greek": "ἡ πομπή",
            "english": "the procession as subject"
          },
          {
            "greek": "τὴν πομπήν",
            "english": "the procession as direct object"
          },
          {
            "greek": "τῆς πομπῆς",
            "english": "of or with the procession"
          },
          {
            "greek": "τῇ θεᾷ",
            "english": "to the goddess"
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Lesson 6 practiced plural cases. Lesson 7 completes the regular present active indicative and gives the full singular and plural forms of first-declension feminine nouns in -η and long -α. Keep the article and adjective attached to the noun as you read.",
    "objectives": [
      "Identify and form all six persons of a regular present active indicative verb.",
      "Distinguish present indicative -ετε from an imperative by context.",
      "Identify case, number, and gender in article–adjective–noun phrases.",
      "Decline first-declension feminine -η and long -α nouns in four singular and four plural cases.",
      "Recognize supplied irregular names and later grammar without treating them as production targets."
    ],
    "sections": [
      {
        "id": "present-persons",
        "title": "1. All Six Present Active Persons",
        "practiceTopic": "present-persons",
        "body": [
          "The ending of a regular present active verb identifies its subject. The reading places all six persons in speech and narration: βλέπω, βλέπεις, βλέπει, βλέπομεν, βλέπετε, βλέπουσι(ν). The stem βλεπ- stays recognizable while the ending changes.",
          "Greek often omits a subject pronoun because the verb ending identifies the person. Add ἐγώ, σύ, ἡμεῖς, or ὑμεῖς for emphasis or contrast. Third-person plural -ουσι(ν) and third-person singular -ει were introduced earlier; this lesson completes the set.",
          "The final ν in βλέπουσιν can appear before a vowel or pause; βλέπουσι is also a normal form. The form βλέπετε can be either a plural present statement or a plural command. Context and punctuation decide; here ὑμεῖς … βαδίζετε; asks what the group is doing."
        ],
        "table": {
          "title": "Present active indicative of βλέπω",
          "headers": [
            "Person",
            "Pronoun",
            "Form",
            "Meaning"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "1st singular",
              "ἐγώ",
              "βλέπω",
              "I see"
            ],
            [
              "2nd singular",
              "σύ",
              "βλέπεις",
              "you see"
            ],
            [
              "3rd singular",
              "—",
              "βλέπει",
              "he, she, or it sees"
            ],
            [
              "1st plural",
              "ἡμεῖς",
              "βλέπομεν",
              "we see"
            ],
            [
              "2nd plural",
              "ὑμεῖς",
              "βλέπετε",
              "you all see"
            ],
            [
              "3rd plural",
              "—",
              "βλέπουσι(ν)",
              "they see"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What ending in βαδίζομεν means “we”?",
            "answer": "-ομεν is first-person plural: “we walk.”"
          }
        ],
        "examples": [
          {
            "greek": "ἐγὼ βλέπω· ἡμεῖς βλέπομεν.",
            "english": "I see; we see."
          }
        ]
      },
      {
        "id": "noun-adjective-review",
        "title": "2. Read Gender, Number, and Case Together",
        "practiceTopic": "agreement-review",
        "body": [
          "Lesson 6 gave plural article, noun, and adjective forms. Review those endings beside the singular forms before adding a new feminine pattern. The article points to a noun’s gender, number, and case, while the adjective agrees with the noun in all three.",
          "A shared case does not require identical endings in different declensions: τῇ καλῇ θεᾷ is feminine dative singular throughout, while ὁ καλὸς φίλος is masculine nominative singular. In the reading, τὴν καλὴν πομπήν is a matched feminine accusative singular phrase.",
          "Do not assume every noun ending -ος is masculine. The reading’s ἡ ὁδός is feminine but belongs to the second declension. Its full group is scheduled for Lesson 8, so recognize this fixed word without using it as a first-declension model."
        ],
        "table": {
          "title": "Familiar agreement across singular and plural",
          "headers": [
            "Phrase",
            "Gender / number / case",
            "Job"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ὁ καλὸς φίλος",
              "masculine singular nominative",
              "subject"
            ],
            [
              "τοὺς καλοὺς φίλους",
              "masculine plural accusative",
              "direct object"
            ],
            [
              "ἡ καλὴ πομπή",
              "feminine singular nominative",
              "subject"
            ],
            [
              "τὴν καλὴν πομπήν",
              "feminine singular accusative",
              "direct object"
            ],
            [
              "αἱ καλαὶ πομπαί",
              "feminine plural nominative",
              "subject"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why does καλὴν match πομπήν?",
            "answer": "Both are feminine accusative singular."
          }
        ],
        "examples": [
          {
            "greek": "ἡ καλὴ πομπὴ βαδίζει.",
            "english": "The beautiful procession is moving."
          }
        ]
      },
      {
        "id": "eta-feminines",
        "title": "3. First-Declension Feminines in -η",
        "practiceTopic": "eta-feminines",
        "body": [
          "Many first-declension feminine nouns have -η in the nominative singular. Use ἡ πομπή as the model: πομπή, πομπῆς, πομπῇ, πομπήν. The article gives the same four case jobs reviewed in Lesson 4. The long vowel appears as η, with an iota subscript in the dative.",
          "The plural uses the familiar Lesson 6 endings -αι, -ας, -ῶν, -αις: πομπαί, πομπάς, πομπῶν, πομπαῖς. The genitive plural ending draws the accent to itself. ἡ Κόρη and ἡ πύλη follow the same broad -η pattern; their own accents remain part of each word.",
          "If a dictionary gives πομπή, πομπῆς, ἡ, its genitive and article tell you both the stem pattern and gender. Do not infer a noun’s gender from its English meaning."
        ],
        "table": {
          "title": "ἡ πομπή, πομπῆς",
          "headers": [
            "Case",
            "Singular",
            "Plural"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "Nominative",
              "ἡ πομπή",
              "αἱ πομπαί"
            ],
            [
              "Accusative",
              "τὴν πομπήν",
              "τὰς πομπάς"
            ],
            [
              "Genitive",
              "τῆς πομπῆς",
              "τῶν πομπῶν"
            ],
            [
              "Dative",
              "τῇ πομπῇ",
              "ταῖς πομπαῖς"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Which form means “to the procession”?",
            "answer": "τῇ πομπῇ, feminine dative singular."
          }
        ],
        "examples": [
          {
            "greek": "ἡ Μυρρίνη ἐν τῇ πομπῇ ἐστίν.",
            "english": "Myrrhine is in the procession."
          }
        ]
      },
      {
        "id": "alpha-feminines",
        "title": "4. First-Declension Feminines in -α",
        "practiceTopic": "alpha-feminines",
        "body": [
          "After ε, ι, or ρ, first-declension feminine nouns commonly keep long α through the singular. Compare ἡ θεά, θεᾶς, θεᾷ, θεάν and ἡ χώρα, χώρας, χώρᾳ, χώραν. This long alpha takes iota subscript in the dative. Other first-declension alpha stems can change to η in the genitive and dative; meet those as separate dictionary patterns rather than forcing every -α noun into this table.",
          "The plural endings are the same as the -η group: θεαί, θεάς, θεῶν, θεαῖς. The article changes with the case, and the adjective must agree. In ἡ καλὴ θεά, καλὴ has a different vowel from θεά, but both words are feminine nominative singular.",
          "θεᾷ is written with an iota subscript. Read it as one syllable; the subscript identifies the dative singular ending and is important in writing Greek accurately."
        ],
        "table": {
          "title": "ἡ θεά, θεᾶς",
          "headers": [
            "Case",
            "Singular",
            "Plural"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "Nominative",
              "ἡ θεά",
              "αἱ θεαί"
            ],
            [
              "Accusative",
              "τὴν θεάν",
              "τὰς θεάς"
            ],
            [
              "Genitive",
              "τῆς θεᾶς",
              "τῶν θεῶν"
            ],
            [
              "Dative",
              "τῇ θεᾷ",
              "ταῖς θεαῖς"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What is the dative singular of ἡ θεά?",
            "answer": "τῇ θεᾷ."
          }
        ],
        "examples": [
          {
            "greek": "ἐγὼ τῇ θεᾷ δῶρα φέρω.",
            "english": "I bring gifts to the goddess."
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "Present active endings: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν).",
        "The article and adjective agree with a noun in gender, number, and case.",
        "First-declension -η model: πομπή, πομπῆς, πομπῇ, πομπήν; plural πομπαί, πομπάς, πομπῶν, πομπαῖς.",
        "Long -α model after ε, ι, or ρ: θεά, θεᾶς, θεᾷ, θεάν; plural θεαί, θεάς, θεῶν, θεαῖς.",
        "The Sacred Way’s ὁδός is a supplied feminine second-declension noun, formally treated in Lesson 8."
      ]
    }
  },
  "culture": {
    "title": "Eleusis in Greek Religious Life",
    "banner": {
      "image": "assets/lesson-7-arrival-banner.png",
      "alt": "Xenophon, Clinias, Myrrhine, and her sister arrive at the classical sanctuary entrance at Eleusis, with the Telesterion beyond",
      "caption": "The four travelers arrive at the sanctuary entrance; the Telesterion (Τελεστήριον) is visible beyond. This is a reconstruction of the classical sanctuary, before the later Roman propylaea.",
      "credit": "Original illustration generated for Learn Greek with Xenophon (2026); historical reconstruction, not an ancient artifact."
    },
    "body": [
      "Eleusis was a sanctuary of Demeter and her daughter Kore, also called Persephone, west of Athens. In the Homeric Hymn to Demeter, the goddess searches for her daughter and comes to Eleusis; the story ties loss, return, and grain to the place. Athenians honored the goddesses in the city’s public religious calendar. The Great Mysteries brought the sanctuary and Athens together through a series of ceremonies and a large public procession.",
      "The procession traveled from central Athens through the Sacred Gate and along the Sacred Way to Eleusis, about 21 kilometers away. In the outer Kerameikos, the route passed funerary monuments, and small oil flasks could be left at graves. The banner’s monumental Geometric vase recalls the Dipylon Amphora, an eighth-century BCE grave marker from this cemetery; its presence beside the fourth-century procession is an artistic allusion, not a documented sight. At Eleusis the processional route led toward the Telesterion (Τελεστήριον), the large hall central to the Mysteries.",
      "For Athens, the Mysteries were a major civic festival that connected public space, sacred road, and the sanctuary. For other Greeks, Eleusis was also a destination for personal religious participation and hope concerning life after death. Initiation was not limited to Athenian male citizens: women, non-Athenians, and enslaved people could be included, subject to the festival’s requirements. That broader participation gave Eleusis a reach beyond one city, even while Athens administered the festival.",
      "The public parts of the festival can be discussed: travel, gathering, reverence for Demeter and Kore, and arrival at the sanctuary. Initiates were bound to secrecy about what occurred in the inner rites. Ancient and modern writers have made suggestions, but our evidence does not justify presenting a detailed script of those rites as fact. This is why the reading pauses outside the sanctuary.",
      "Myrrhine’s desire to honor Demeter for the grain that supports her family is an invented individual motive consistent with the goddess’s association with agriculture. Her journey and words are not recorded by an ancient author. Xenophon and Clinias joining her is likewise a course reconstruction, not a documented episode in Xenophon’s life. The illustrations show public travel and arrival rather than an initiation."
    ],
    "plan": {
      "title": "Plan of the Eleusis Sanctuary",
      "image": "assets/lesson-7-eleusis-sanctuary-map.jpg",
      "alt": "Plan of the sanctuary at Eleusis with the Sacred Way, later Roman propylaea, and the Telesterion labeled in Greek",
      "caption": "Follow Ἱερὰ Ὁδός (Sacred Way) at right toward Τελεστήριον (Telesterion) at center left. This archaeological plan shows later Roman buildings as well as the older sanctuary; its Μικρὰ and Μεγάλα Προπύλαια are later than the story’s setting.",
      "credit": "Photograph of an Eleusis archaeological plan by Davide Mauro, Wikimedia Commons, CC BY-SA 4.0; reproduced without alteration.",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Map_of_Eleusis.jpg",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    "questions": [
      {
        "prompt": "Why did Eleusis matter to Athenians?",
        "answer": "It was the sanctuary of Demeter and Kore, and its Great Mysteries were a major festival connecting Athens, the Sacred Way, and Eleusis."
      },
      {
        "prompt": "Why did Eleusis matter beyond Athens?",
        "answer": "Initiation could include non-Athenians, women, and enslaved people as well as Athenian men, making it a wider Greek religious destination."
      },
      {
        "prompt": "What was the Telesterion?",
        "answer": "The large hall at Eleusis associated with the Mysteries."
      },
      {
        "prompt": "Why does the reading stop at the sanctuary?",
        "answer": "The inner rites were secret, and the surviving evidence does not warrant an invented description of them."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Say all six present active forms of βλέπω and name each person.",
        "Decline ἡ πομπή and ἡ θεά in singular and plural.",
        "Explain why τῇ θεᾷ is feminine dative singular.",
        "Identify the Telesterion on the sanctuary plan and explain what is fictional in the reading."
      ]
    },
    "sources": [
      {
        "title": "Homeric Hymn to Demeter (Perseus Digital Library)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0138%3Ahymn%3D2"
      },
      {
        "title": "The Metropolitan Museum of Art, Mystery Cults in the Greek and Roman World",
        "url": "https://www.metmuseum.org/de/essays/mystery-cults-in-the-greek-and-roman-world"
      },
      {
        "title": "The Metropolitan Museum of Art, Women in Classical Greece",
        "url": "https://www.metmuseum.org/de/essays/women-in-classical-greece"
      },
      {
        "title": "National Archaeological Museum, Geometric Period and the Dipylon Amphora",
        "url": "https://www.namuseum.gr/en/collection/geometriki-periodos-3/"
      },
      {
        "title": "The Metropolitan Museum of Art, Death, Burial, and the Afterlife in Ancient Greece",
        "url": "https://www.metmuseum.org/es/essays/death-burial-and-the-afterlife-in-ancient-greece"
      },
      {
        "title": "Ephorate of Antiquities of West Attica, Archaeological Site of Eleusis",
        "url": "https://www.efada.gr/en-us/Archaeological-Sites-Monuments/Eleusis/Archaeological-Site-of-Eleusis"
      },
      {
        "title": "Ephorate of Antiquities of West Attica, Greater Propylaea",
        "url": "https://www.efada.gr/en-us/Archaeological-Sites-Monuments/Eleusis/Archaeological-Site-of-Eleusis/the-greater-propylaea"
      },
      {
        "title": "Wikimedia Commons, Map of Eleusis by Davide Mauro",
        "url": "https://commons.wikimedia.org/wiki/File:Map_of_Eleusis.jpg"
      },
      {
        "title": "The Metropolitan Museum of Art, Great Eleusinian Relief",
        "url": "https://www.metmuseum.org/art/collection/search/248899"
      }
    ]
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 7 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "ἡ πομπή",
          "answer": "procession"
        },
        {
          "prompt": "ἡ πύλη",
          "answer": "gate"
        },
        {
          "prompt": "ἡ ἀδελφή",
          "answer": "sister"
        },
        {
          "prompt": "ἡ θεά",
          "answer": "goddess"
        },
        {
          "prompt": "ἡ χώρα",
          "answer": "countryside, land"
        },
        {
          "prompt": "ἡ γῆ",
          "answer": "earth, land"
        },
        {
          "prompt": "ὁ σῖτος",
          "answer": "grain"
        },
        {
          "prompt": "τὸ δῶρον",
          "answer": "gift"
        },
        {
          "prompt": "ἡ ὁδός",
          "answer": "road (feminine second-declension noun; full pattern in Lesson 8)"
        },
        {
          "prompt": "βαδίζω",
          "answer": "walk"
        },
        {
          "prompt": "βλέπω",
          "answer": "see, watch"
        },
        {
          "prompt": "φέρω",
          "answer": "carry, bear"
        },
        {
          "prompt": "μένω",
          "answer": "stay, pause"
        },
        {
          "prompt": "ἄγω",
          "answer": "lead, guide"
        },
        {
          "prompt": "ζητέω",
          "answer": "seek; ζητεῖ means “she seeks”"
        },
        {
          "prompt": "ἐγώ",
          "answer": "I"
        },
        {
          "prompt": "σύ",
          "answer": "you (singular)"
        },
        {
          "prompt": "ἡμεῖς",
          "answer": "we"
        },
        {
          "prompt": "ὑμεῖς",
          "answer": "you (plural)"
        },
        {
          "prompt": "μετά + genitive",
          "answer": "with"
        },
        {
          "prompt": "πρός + accusative",
          "answer": "toward"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 7 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice required Lesson 7 words in short rounds. Reading-only words remain glossed.",
      "questions": [
        {
          "id": "lesson-7-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ πομπή mean?",
          "choices": [
            {
              "text": "procession",
              "correct": true,
              "feedback": "Correct: ἡ πομπή means procession."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "carry, bear",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “procession”?",
          "choices": [
            {
              "text": "ἡ πομπή",
              "correct": true,
              "feedback": "Correct: ἡ πομπή means procession."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "τὸ δῶρον",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ πύλη mean?",
          "choices": [
            {
              "text": "gate",
              "correct": true,
              "feedback": "Correct: ἡ πύλη means gate."
            },
            {
              "text": "goddess",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            },
            {
              "text": "gift",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            },
            {
              "text": "stay, pause",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “gate”?",
          "choices": [
            {
              "text": "ἡ πύλη",
              "correct": true,
              "feedback": "Correct: ἡ πύλη means gate."
            },
            {
              "text": "ἡ χώρα",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            },
            {
              "text": "ἄγω",
              "correct": false,
              "feedback": "Review: ἡ πύλη means gate."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀδελφή mean?",
          "choices": [
            {
              "text": "sister",
              "correct": true,
              "feedback": "Correct: ἡ ἀδελφή means sister."
            },
            {
              "text": "countryside, land",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "lead, guide",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “sister”?",
          "choices": [
            {
              "text": "ἡ ἀδελφή",
              "correct": true,
              "feedback": "Correct: ἡ ἀδελφή means sister."
            },
            {
              "text": "ἡ γῆ",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ θεά mean?",
          "choices": [
            {
              "text": "goddess",
              "correct": true,
              "feedback": "Correct: ἡ θεά means goddess."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "see, watch",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "I",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “goddess”?",
          "choices": [
            {
              "text": "ἡ θεά",
              "correct": true,
              "feedback": "Correct: ἡ θεά means goddess."
            },
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ χώρα mean?",
          "choices": [
            {
              "text": "countryside, land",
              "correct": true,
              "feedback": "Correct: ἡ χώρα means countryside, land."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            },
            {
              "text": "carry, bear",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            },
            {
              "text": "you (singular)",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “countryside, land”?",
          "choices": [
            {
              "text": "ἡ χώρα",
              "correct": true,
              "feedback": "Correct: ἡ χώρα means countryside, land."
            },
            {
              "text": "τὸ δῶρον",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            },
            {
              "text": "ἡμεῖς",
              "correct": false,
              "feedback": "Review: ἡ χώρα means countryside, land."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ γῆ mean?",
          "choices": [
            {
              "text": "earth, land",
              "correct": true,
              "feedback": "Correct: ἡ γῆ means earth, land."
            },
            {
              "text": "gift",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            },
            {
              "text": "stay, pause",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            },
            {
              "text": "we",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “earth, land”?",
          "choices": [
            {
              "text": "ἡ γῆ",
              "correct": true,
              "feedback": "Correct: ἡ γῆ means earth, land."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            },
            {
              "text": "ἄγω",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            },
            {
              "text": "ὑμεῖς",
              "correct": false,
              "feedback": "Review: ἡ γῆ means earth, land."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ σῖτος mean?",
          "choices": [
            {
              "text": "grain",
              "correct": true,
              "feedback": "Correct: ὁ σῖτος means grain."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "lead, guide",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "you (plural)",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “grain”?",
          "choices": [
            {
              "text": "ὁ σῖτος",
              "correct": true,
              "feedback": "Correct: ὁ σῖτος means grain."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ δῶρον mean?",
          "choices": [
            {
              "text": "gift",
              "correct": true,
              "feedback": "Correct: τὸ δῶρον means gift."
            },
            {
              "text": "see, watch",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "I",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "procession",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “gift”?",
          "choices": [
            {
              "text": "τὸ δῶρον",
              "correct": true,
              "feedback": "Correct: τὸ δῶρον means gift."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "ἡ πύλη",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does βαδίζω mean?",
          "choices": [
            {
              "text": "walk",
              "correct": true,
              "feedback": "Correct: βαδίζω means walk."
            },
            {
              "text": "carry, bear",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "you (singular)",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "gate",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “walk”?",
          "choices": [
            {
              "text": "βαδίζω",
              "correct": true,
              "feedback": "Correct: βαδίζω means walk."
            },
            {
              "text": "μένω",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "ἡμεῖς",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: βαδίζω means walk."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does βλέπω mean?",
          "choices": [
            {
              "text": "see, watch",
              "correct": true,
              "feedback": "Correct: βλέπω means see, watch."
            },
            {
              "text": "stay, pause",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "we",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “see, watch”?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω means see, watch."
            },
            {
              "text": "ἄγω",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "ὑμεῖς",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does φέρω mean?",
          "choices": [
            {
              "text": "carry, bear",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bear."
            },
            {
              "text": "lead, guide",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            },
            {
              "text": "you (plural)",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            },
            {
              "text": "goddess",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “carry, bear”?",
          "choices": [
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bear."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            },
            {
              "text": "ἡ χώρα",
              "correct": false,
              "feedback": "Review: φέρω means carry, bear."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μένω mean?",
          "choices": [
            {
              "text": "stay, pause",
              "correct": true,
              "feedback": "Correct: μένω means stay, pause."
            },
            {
              "text": "I",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "procession",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "countryside, land",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “stay, pause”?",
          "choices": [
            {
              "text": "μένω",
              "correct": true,
              "feedback": "Correct: μένω means stay, pause."
            },
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "ἡ πύλη",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "ἡ γῆ",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἄγω mean?",
          "choices": [
            {
              "text": "lead, guide",
              "correct": true,
              "feedback": "Correct: ἄγω means lead, guide."
            },
            {
              "text": "you (singular)",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            },
            {
              "text": "gate",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “lead, guide”?",
          "choices": [
            {
              "text": "ἄγω",
              "correct": true,
              "feedback": "Correct: ἄγω means lead, guide."
            },
            {
              "text": "ἡμεῖς",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            },
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: ἄγω means lead, guide."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐγώ mean?",
          "choices": [
            {
              "text": "I",
              "correct": true,
              "feedback": "Correct: ἐγώ means I."
            },
            {
              "text": "we",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “I”?",
          "choices": [
            {
              "text": "ἐγώ",
              "correct": true,
              "feedback": "Correct: ἐγώ means I."
            },
            {
              "text": "ὑμεῖς",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            },
            {
              "text": "τὸ δῶρον",
              "correct": false,
              "feedback": "Review: ἐγώ means I."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σύ mean?",
          "choices": [
            {
              "text": "you (singular)",
              "correct": true,
              "feedback": "Correct: σύ means you (singular)."
            },
            {
              "text": "you (plural)",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            },
            {
              "text": "goddess",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            },
            {
              "text": "gift",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “you (singular)”?",
          "choices": [
            {
              "text": "σύ",
              "correct": true,
              "feedback": "Correct: σύ means you (singular)."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            },
            {
              "text": "ἡ χώρα",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            },
            {
              "text": "βαδίζω",
              "correct": false,
              "feedback": "Review: σύ means you (singular)."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡμεῖς mean?",
          "choices": [
            {
              "text": "we",
              "correct": true,
              "feedback": "Correct: ἡμεῖς means we."
            },
            {
              "text": "procession",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "countryside, land",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “we”?",
          "choices": [
            {
              "text": "ἡμεῖς",
              "correct": true,
              "feedback": "Correct: ἡμεῖς means we."
            },
            {
              "text": "ἡ πύλη",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "ἡ γῆ",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-17-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὑμεῖς mean?",
          "choices": [
            {
              "text": "you (plural)",
              "correct": true,
              "feedback": "Correct: ὑμεῖς means you (plural)."
            },
            {
              "text": "gate",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            },
            {
              "text": "see, watch",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            }
          ]
        },
        {
          "id": "lesson-7-vocab-17-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “you (plural)”?",
          "choices": [
            {
              "text": "ὑμεῖς",
              "correct": true,
              "feedback": "Correct: ὑμεῖς means you (plural)."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            },
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you (plural)."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 7 Grammar Flashcards",
      "cards": [
        {
          "prompt": "βλέπω",
          "answer": "present active 1st singular"
        },
        {
          "prompt": "βλέπεις",
          "answer": "present active 2nd singular"
        },
        {
          "prompt": "βλέπει",
          "answer": "present active 3rd singular"
        },
        {
          "prompt": "βλέπομεν",
          "answer": "present active 1st plural"
        },
        {
          "prompt": "βλέπετε",
          "answer": "present active 2nd plural"
        },
        {
          "prompt": "βλέπουσιν",
          "answer": "present active 3rd plural"
        },
        {
          "prompt": "τῇ πομπῇ",
          "answer": "feminine dative singular: in or to the procession"
        },
        {
          "prompt": "τῇ θεᾷ",
          "answer": "feminine dative singular: to the goddess"
        },
        {
          "prompt": "τῶν πομπῶν",
          "answer": "feminine genitive plural: of the processions"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 7 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic. Practice questions give immediate feedback and do not gate the page.",
      "questions": [
        {
          "id": "lesson-7-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which dictionary citation is the procession?",
          "choices": [
            {
              "text": "χώρα, χώρας, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "πομπή, πομπῆς, ἡ",
              "correct": true,
              "feedback": "Correct: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "θεά, θεᾶς, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "πύλη, πύλης, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            }
          ]
        },
        {
          "id": "lesson-7-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What does the article ἡ in πομπή, πομπῆς, ἡ identify?",
          "choices": [
            {
              "text": "plural number",
              "correct": false,
              "feedback": "Review: ἡ marks feminine gender in a dictionary citation."
            },
            {
              "text": "accusative case",
              "correct": false,
              "feedback": "Review: ἡ marks feminine gender in a dictionary citation."
            },
            {
              "text": "feminine gender",
              "correct": true,
              "feedback": "Correct: ἡ marks feminine gender in a dictionary citation."
            },
            {
              "text": "masculine gender",
              "correct": false,
              "feedback": "Review: ἡ marks feminine gender in a dictionary citation."
            }
          ]
        },
        {
          "id": "lesson-7-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which form means “of the procession”?",
          "choices": [
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": true,
              "feedback": "Correct: τῆς πομπῆς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which form means “in the procession” after ἐν?",
          "choices": [
            {
              "text": "ἐν τῇ πομπῇ",
              "correct": true,
              "feedback": "Correct: ἐν takes the dative here: τῇ πομπῇ."
            },
            {
              "text": "ἐν τὴν πομπήν",
              "correct": false,
              "feedback": "Review: ἐν takes the dative here: τῇ πομπῇ."
            },
            {
              "text": "ἐν αἱ πομπαί",
              "correct": false,
              "feedback": "Review: ἐν takes the dative here: τῇ πομπῇ."
            },
            {
              "text": "ἐν τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: ἐν takes the dative here: τῇ πομπῇ."
            }
          ]
        },
        {
          "id": "lesson-7-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "The English word “pomp” is a memory aid for which Greek noun?",
          "choices": [
            {
              "text": "θεά",
              "correct": false,
              "feedback": "Review: English pomp ultimately derives from Greek πομπή."
            },
            {
              "text": "πομπή",
              "correct": true,
              "feedback": "Correct: English pomp ultimately derives from Greek πομπή."
            },
            {
              "text": "πύλη",
              "correct": false,
              "feedback": "Review: English pomp ultimately derives from Greek πομπή."
            },
            {
              "text": "χώρα",
              "correct": false,
              "feedback": "Review: English pomp ultimately derives from Greek πομπή."
            }
          ]
        },
        {
          "id": "lesson-7-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What is the genitive singular of θεά?",
          "choices": [
            {
              "text": "θεάν",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεᾷ",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεᾶς",
              "correct": true,
              "feedback": "Correct: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεῶν",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            }
          ]
        },
        {
          "id": "lesson-7-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which citation identifies “goddess”?",
          "choices": [
            {
              "text": "πομπή, πομπῆς, ἡ",
              "correct": false,
              "feedback": "Review: θεά, θεᾶς, ἡ means goddess."
            },
            {
              "text": "χώρα, χώρας, ἡ",
              "correct": false,
              "feedback": "Review: θεά, θεᾶς, ἡ means goddess."
            },
            {
              "text": "σῖτος, σίτου, ὁ",
              "correct": false,
              "feedback": "Review: θεά, θεᾶς, ἡ means goddess."
            },
            {
              "text": "θεά, θεᾶς, ἡ",
              "correct": true,
              "feedback": "Correct: θεά, θεᾶς, ἡ means goddess."
            }
          ]
        },
        {
          "id": "lesson-7-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Why does the dictionary give πομπῆς after πομπή?",
          "choices": [
            {
              "text": "It shows the genitive and the stem pattern.",
              "correct": true,
              "feedback": "Correct: The genitive helps identify a noun’s declension pattern."
            },
            {
              "text": "It gives a plural command.",
              "correct": false,
              "feedback": "Review: The genitive helps identify a noun’s declension pattern."
            },
            {
              "text": "It gives the verb tense.",
              "correct": false,
              "feedback": "Review: The genitive helps identify a noun’s declension pattern."
            },
            {
              "text": "It gives a masculine form.",
              "correct": false,
              "feedback": "Review: The genitive helps identify a noun’s declension pattern."
            }
          ]
        },
        {
          "id": "lesson-7-practice-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which phrase is an accusative singular procession?",
          "choices": [
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct: τὴν πομπήν is accusative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which phrase is a dative singular goddess?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": true,
              "feedback": "Correct: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "In πομπή, πομπῆς, ἡ, what is the first form?",
          "choices": [
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Review: πομπή is the nominative singular headword."
            },
            {
              "text": "dative plural",
              "correct": false,
              "feedback": "Review: πομπή is the nominative singular headword."
            },
            {
              "text": "accusative plural",
              "correct": false,
              "feedback": "Review: πομπή is the nominative singular headword."
            },
            {
              "text": "nominative singular",
              "correct": true,
              "feedback": "Correct: πομπή is the nominative singular headword."
            }
          ]
        },
        {
          "id": "lesson-7-practice-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which phrase means “with the procession” after μετά?",
          "choices": [
            {
              "text": "μετὰ τῆς πομπῆς",
              "correct": true,
              "feedback": "Correct: μετά takes the genitive when it means with."
            },
            {
              "text": "μετὰ τὴν πομπήν",
              "correct": false,
              "feedback": "Review: μετά takes the genitive when it means with."
            },
            {
              "text": "μετὰ τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: μετά takes the genitive when it means with."
            },
            {
              "text": "μετὰ ἡ πομπή",
              "correct": false,
              "feedback": "Review: μετά takes the genitive when it means with."
            }
          ]
        },
        {
          "id": "lesson-7-practice-013",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 1st singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω is 1st singular."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-014",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 2nd singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπεις",
              "correct": true,
              "feedback": "Correct: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-015",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 3rd singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπει",
              "correct": true,
              "feedback": "Correct: βλέπει is 3rd singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-016",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 1st plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπομεν",
              "correct": true,
              "feedback": "Correct: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-017",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 2nd plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπετε",
              "correct": true,
              "feedback": "Correct: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-018",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which present active form is 3rd plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": true,
              "feedback": "Correct: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-019",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "What does βαδίζομεν mean?",
          "choices": [
            {
              "text": "I walk",
              "correct": false,
              "feedback": "Review: -ομεν marks first-person plural."
            },
            {
              "text": "you all walk",
              "correct": false,
              "feedback": "Review: -ομεν marks first-person plural."
            },
            {
              "text": "they walk",
              "correct": false,
              "feedback": "Review: -ομεν marks first-person plural."
            },
            {
              "text": "we walk",
              "correct": true,
              "feedback": "Correct: -ομεν marks first-person plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-020",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "What does φέρεις mean?",
          "choices": [
            {
              "text": "you (one person) carry",
              "correct": true,
              "feedback": "Correct: -εις marks second-person singular."
            },
            {
              "text": "I carry",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            },
            {
              "text": "we carry",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            },
            {
              "text": "they carry",
              "correct": false,
              "feedback": "Review: -εις marks second-person singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-021",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which pronoun emphasizes “we”?",
          "choices": [
            {
              "text": "ὑμεῖς",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "ἡμεῖς",
              "correct": true,
              "feedback": "Correct: ἡμεῖς means we."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            },
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: ἡμεῖς means we."
            }
          ]
        },
        {
          "id": "lesson-7-practice-022",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Which pronoun emphasizes “you all”?",
          "choices": [
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you plural."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you plural."
            },
            {
              "text": "ὑμεῖς",
              "correct": true,
              "feedback": "Correct: ὑμεῖς means you plural."
            },
            {
              "text": "ἡμεῖς",
              "correct": false,
              "feedback": "Review: ὑμεῖς means you plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-023",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "In “ὑμεῖς βαδίζετε;” what is βαδίζετε?",
          "choices": [
            {
              "text": "singular command: walk!",
              "correct": false,
              "feedback": "Review: The subject ὑμεῖς and question context show second-person plural indicative."
            },
            {
              "text": "first-person plural: we walk",
              "correct": false,
              "feedback": "Review: The subject ὑμεῖς and question context show second-person plural indicative."
            },
            {
              "text": "third-person plural: they walk",
              "correct": false,
              "feedback": "Review: The subject ὑμεῖς and question context show second-person plural indicative."
            },
            {
              "text": "present indicative: are you all walking?",
              "correct": true,
              "feedback": "Correct: The subject ὑμεῖς and question context show second-person plural indicative."
            }
          ]
        },
        {
          "id": "lesson-7-practice-024",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "What can the final ν in βλέπουσιν be called?",
          "choices": [
            {
              "text": "movable nu",
              "correct": true,
              "feedback": "Correct: The optional final -ν is movable nu."
            },
            {
              "text": "iota subscript",
              "correct": false,
              "feedback": "Review: The optional final -ν is movable nu."
            },
            {
              "text": "augment",
              "correct": false,
              "feedback": "Review: The optional final -ν is movable nu."
            },
            {
              "text": "reduplication",
              "correct": false,
              "feedback": "Review: The optional final -ν is movable nu."
            }
          ]
        },
        {
          "id": "lesson-7-practice-025",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "What matches τὴν πομπήν as an adjective?",
          "choices": [
            {
              "text": "καλαῖς",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλήν",
              "correct": true,
              "feedback": "Correct: καλήν is feminine accusative singular."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-026",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "What matches αἱ πομπαί?",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλάς",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί is feminine nominative plural."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-027",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "What is the case of τὴν καλὴν πομπήν?",
          "choices": [
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Review: τὴν and -ήν mark accusative singular."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Review: τὴν and -ήν mark accusative singular."
            },
            {
              "text": "dative plural",
              "correct": false,
              "feedback": "Review: τὴν and -ήν mark accusative singular."
            },
            {
              "text": "accusative singular",
              "correct": true,
              "feedback": "Correct: τὴν and -ήν mark accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-028",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "What is the case of ἡ καλὴ θεά?",
          "choices": [
            {
              "text": "nominative singular",
              "correct": true,
              "feedback": "Correct: ἡ marks nominative singular feminine."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Review: ἡ marks nominative singular feminine."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Review: ἡ marks nominative singular feminine."
            },
            {
              "text": "genitive plural",
              "correct": false,
              "feedback": "Review: ἡ marks nominative singular feminine."
            }
          ]
        },
        {
          "id": "lesson-7-practice-029",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which phrase is masculine accusative plural?",
          "choices": [
            {
              "text": "τοῖς καλοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τοὺς καλοὺς φίλους is masculine accusative plural."
            },
            {
              "text": "τοὺς καλοὺς φίλους",
              "correct": true,
              "feedback": "Correct: τοὺς καλοὺς φίλους is masculine accusative plural."
            },
            {
              "text": "οἱ καλοὶ φίλοι",
              "correct": false,
              "feedback": "Review: τοὺς καλοὺς φίλους is masculine accusative plural."
            },
            {
              "text": "τῶν καλῶν φίλων",
              "correct": false,
              "feedback": "Review: τοὺς καλοὺς φίλους is masculine accusative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-030",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which words agree in τῇ καλῇ θεᾷ?",
          "choices": [
            {
              "text": "only noun and verb",
              "correct": false,
              "feedback": "Review: All three words are feminine dative singular."
            },
            {
              "text": "only pronoun and verb",
              "correct": false,
              "feedback": "Review: All three words are feminine dative singular."
            },
            {
              "text": "article, adjective, and noun",
              "correct": true,
              "feedback": "Correct: All three words are feminine dative singular."
            },
            {
              "text": "only article and adjective",
              "correct": false,
              "feedback": "Review: All three words are feminine dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-031",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Is ἡ ὁδός masculine because it ends in -ος?",
          "choices": [
            {
              "text": "Yes; all -ος nouns are masculine.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "Yes; roads are masculine in Greek.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "No; it is neuter.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "No; its article marks it feminine.",
              "correct": true,
              "feedback": "Correct: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            }
          ]
        },
        {
          "id": "lesson-7-practice-032",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which article belongs to feminine nominative plural?",
          "choices": [
            {
              "text": "αἱ",
              "correct": true,
              "feedback": "Correct: αἱ marks feminine nominative plural."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural."
            },
            {
              "text": "τά",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural."
            },
            {
              "text": "τοῖς",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-033",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which article belongs to feminine dative singular?",
          "choices": [
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῇ marks feminine dative singular."
            },
            {
              "text": "τῇ",
              "correct": true,
              "feedback": "Correct: τῇ marks feminine dative singular."
            },
            {
              "text": "τὴν",
              "correct": false,
              "feedback": "Review: τῇ marks feminine dative singular."
            },
            {
              "text": "τῆς",
              "correct": false,
              "feedback": "Review: τῇ marks feminine dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-034",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which phrase has a feminine accusative plural adjective?",
          "choices": [
            {
              "text": "τῆς καλῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὰς καλὰς πομπάς is feminine accusative plural."
            },
            {
              "text": "τῇ καλῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τὰς καλὰς πομπάς is feminine accusative plural."
            },
            {
              "text": "τὰς καλὰς πομπάς",
              "correct": true,
              "feedback": "Correct: τὰς καλὰς πομπάς is feminine accusative plural."
            },
            {
              "text": "αἱ καλαὶ πομπαί",
              "correct": false,
              "feedback": "Review: τὰς καλὰς πομπάς is feminine accusative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-035",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Which phrase has a feminine genitive singular adjective?",
          "choices": [
            {
              "text": "τὴν καλὴν θεάν",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "τῇ καλῇ θεᾷ",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "αἱ καλαὶ θεαί",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "τῆς καλῆς θεᾶς",
              "correct": true,
              "feedback": "Correct: τῆς καλῆς θεᾶς is feminine genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-036",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "What three features must an attributive adjective match?",
          "choices": [
            {
              "text": "gender, number, and case",
              "correct": true,
              "feedback": "Correct: An adjective matches its noun in gender, number, and case."
            },
            {
              "text": "tense, person, and voice",
              "correct": false,
              "feedback": "Review: An adjective matches its noun in gender, number, and case."
            },
            {
              "text": "person, number, and tense",
              "correct": false,
              "feedback": "Review: An adjective matches its noun in gender, number, and case."
            },
            {
              "text": "accent, spelling, and meaning",
              "correct": false,
              "feedback": "Review: An adjective matches its noun in gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-7-practice-037",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is nominative singular?",
          "choices": [
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": true,
              "feedback": "Correct: ἡ πομπή is nominative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-038",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is accusative singular?",
          "choices": [
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct: τὴν πομπήν is accusative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-039",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is genitive singular?",
          "choices": [
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": true,
              "feedback": "Correct: τῆς πομπῆς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-040",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is dative singular?",
          "choices": [
            {
              "text": "τῇ πομπῇ",
              "correct": true,
              "feedback": "Correct: τῇ πομπῇ is dative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-041",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is nominative plural?",
          "choices": [
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: αἱ πομπαί is nominative plural."
            },
            {
              "text": "αἱ πομπαί",
              "correct": true,
              "feedback": "Correct: αἱ πομπαί is nominative plural."
            },
            {
              "text": "τὰς πομπάς",
              "correct": false,
              "feedback": "Review: αἱ πομπαί is nominative plural."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": false,
              "feedback": "Review: αἱ πομπαί is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-042",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is accusative plural?",
          "choices": [
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὰς πομπάς is accusative plural."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τὰς πομπάς is accusative plural."
            },
            {
              "text": "τὰς πομπάς",
              "correct": true,
              "feedback": "Correct: τὰς πομπάς is accusative plural."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τὰς πομπάς is accusative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-043",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is genitive plural?",
          "choices": [
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τὰς πομπάς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": true,
              "feedback": "Correct: τῶν πομπῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-044",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which form of πομπή is dative plural?",
          "choices": [
            {
              "text": "ταῖς πομπαῖς",
              "correct": true,
              "feedback": "Correct: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-045",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Which ending is first-declension feminine genitive plural?",
          "choices": [
            {
              "text": "-αι",
              "correct": false,
              "feedback": "Review: The first-declension feminine genitive plural ends in -ῶν."
            },
            {
              "text": "-ῶν",
              "correct": true,
              "feedback": "Correct: The first-declension feminine genitive plural ends in -ῶν."
            },
            {
              "text": "-ῃ",
              "correct": false,
              "feedback": "Review: The first-declension feminine genitive plural ends in -ῶν."
            },
            {
              "text": "-άς",
              "correct": false,
              "feedback": "Review: The first-declension feminine genitive plural ends in -ῶν."
            }
          ]
        },
        {
          "id": "lesson-7-practice-046",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "What is the dative singular of ἡ πύλη?",
          "choices": [
            {
              "text": "τῆς πύλης",
              "correct": false,
              "feedback": "Review: τῇ πύλῃ is dative singular."
            },
            {
              "text": "ταῖς πύλαις",
              "correct": false,
              "feedback": "Review: τῇ πύλῃ is dative singular."
            },
            {
              "text": "τῇ πύλῃ",
              "correct": true,
              "feedback": "Correct: τῇ πύλῃ is dative singular."
            },
            {
              "text": "τὴν πύλην",
              "correct": false,
              "feedback": "Review: τῇ πύλῃ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-047",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "What is the accusative singular of ἡ ἀδελφή?",
          "choices": [
            {
              "text": "τῆς ἀδελφῆς",
              "correct": false,
              "feedback": "Review: τὴν ἀδελφήν is accusative singular."
            },
            {
              "text": "τῇ ἀδελφῇ",
              "correct": false,
              "feedback": "Review: τὴν ἀδελφήν is accusative singular."
            },
            {
              "text": "αἱ ἀδελφαί",
              "correct": false,
              "feedback": "Review: τὴν ἀδελφήν is accusative singular."
            },
            {
              "text": "τὴν ἀδελφήν",
              "correct": true,
              "feedback": "Correct: τὴν ἀδελφήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-048",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "What does the iota subscript in πομπῇ help mark?",
          "choices": [
            {
              "text": "dative singular",
              "correct": true,
              "feedback": "Correct: πομπῇ is dative singular."
            },
            {
              "text": "nominative plural",
              "correct": false,
              "feedback": "Review: πομπῇ is dative singular."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Review: πομπῇ is dative singular."
            },
            {
              "text": "genitive plural",
              "correct": false,
              "feedback": "Review: πομπῇ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-049",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is nominative singular?",
          "choices": [
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            },
            {
              "text": "ἡ θεά",
              "correct": true,
              "feedback": "Correct: ἡ θεά is nominative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-050",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is accusative singular?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "αἱ θεαί",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": true,
              "feedback": "Correct: τὴν θεάν is accusative singular."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-051",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is genitive singular?",
          "choices": [
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τῶν θεῶν",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": true,
              "feedback": "Correct: τῆς θεᾶς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-052",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is dative singular?",
          "choices": [
            {
              "text": "τῇ θεᾷ",
              "correct": true,
              "feedback": "Correct: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-053",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is nominative plural?",
          "choices": [
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: αἱ θεαί is nominative plural."
            },
            {
              "text": "αἱ θεαί",
              "correct": true,
              "feedback": "Correct: αἱ θεαί is nominative plural."
            },
            {
              "text": "τὰς θεάς",
              "correct": false,
              "feedback": "Review: αἱ θεαί is nominative plural."
            },
            {
              "text": "τῶν θεῶν",
              "correct": false,
              "feedback": "Review: αἱ θεαί is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-054",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is accusative plural?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τὰς θεάς is accusative plural."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: τὰς θεάς is accusative plural."
            },
            {
              "text": "τὰς θεάς",
              "correct": true,
              "feedback": "Correct: τὰς θεάς is accusative plural."
            },
            {
              "text": "αἱ θεαί",
              "correct": false,
              "feedback": "Review: τὰς θεάς is accusative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-055",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is genitive plural?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τὰς θεάς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τῶν θεῶν",
              "correct": true,
              "feedback": "Correct: τῶν θεῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-056",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form of θεά is dative plural?",
          "choices": [
            {
              "text": "ταῖς θεαῖς",
              "correct": true,
              "feedback": "Correct: ταῖς θεαῖς is dative plural."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: ταῖς θεαῖς is dative plural."
            },
            {
              "text": "τῶν θεῶν",
              "correct": false,
              "feedback": "Review: ταῖς θεαῖς is dative plural."
            },
            {
              "text": "αἱ θεαί",
              "correct": false,
              "feedback": "Review: ταῖς θεαῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-7-practice-057",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "What is the genitive singular of ἡ χώρα?",
          "choices": [
            {
              "text": "τῶν χωρῶν",
              "correct": false,
              "feedback": "Review: τῆς χώρας is genitive singular."
            },
            {
              "text": "τῆς χώρας",
              "correct": true,
              "feedback": "Correct: τῆς χώρας is genitive singular."
            },
            {
              "text": "τὴν χώραν",
              "correct": false,
              "feedback": "Review: τῆς χώρας is genitive singular."
            },
            {
              "text": "τῇ χώρᾳ",
              "correct": false,
              "feedback": "Review: τῆς χώρας is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-058",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which vowels commonly precede long retained α in this pattern?",
          "choices": [
            {
              "text": "η, ω, ου",
              "correct": false,
              "feedback": "Review: After ε, ι, or ρ, long alpha is commonly retained in the singular."
            },
            {
              "text": "α, αι, ει",
              "correct": false,
              "feedback": "Review: After ε, ι, or ρ, long alpha is commonly retained in the singular."
            },
            {
              "text": "ε, ι, ρ",
              "correct": true,
              "feedback": "Correct: After ε, ι, or ρ, long alpha is commonly retained in the singular."
            },
            {
              "text": "ο, υ, ω",
              "correct": false,
              "feedback": "Review: After ε, ι, or ρ, long alpha is commonly retained in the singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-059",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Which form means “to the countryside”?",
          "choices": [
            {
              "text": "τὴν χώραν",
              "correct": false,
              "feedback": "Review: τῇ χώρᾳ is dative singular."
            },
            {
              "text": "τῆς χώρας",
              "correct": false,
              "feedback": "Review: τῇ χώρᾳ is dative singular."
            },
            {
              "text": "αἱ χῶραι",
              "correct": false,
              "feedback": "Review: τῇ χώρᾳ is dative singular."
            },
            {
              "text": "τῇ χώρᾳ",
              "correct": true,
              "feedback": "Correct: τῇ χώρᾳ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-practice-060",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Does every first-declension noun in -α follow θεά exactly?",
          "choices": [
            {
              "text": "No; other alpha stems may change to η in genitive and dative.",
              "correct": true,
              "feedback": "Correct: The θεά table models long retained alpha, not every alpha-stem pattern."
            },
            {
              "text": "Yes; all -α nouns have identical singulars.",
              "correct": false,
              "feedback": "Review: The θεά table models long retained alpha, not every alpha-stem pattern."
            },
            {
              "text": "No; all -α nouns are masculine.",
              "correct": false,
              "feedback": "Review: The θεά table models long retained alpha, not every alpha-stem pattern."
            },
            {
              "text": "Yes; only the accent can differ.",
              "correct": false,
              "feedback": "Review: The θεά table models long retained alpha, not every alpha-stem pattern."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 7 Grammar Exercises",
      "description": "Present active persons, agreement, and first-declension feminine forms",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-7-grammar-exercises-v1",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-7-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 1: Which dictionary citation is the procession?",
          "choices": [
            {
              "text": "χώρα, χώρας, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "πομπή, πομπῆς, ἡ",
              "correct": true,
              "feedback": "Correct: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "θεά, θεᾶς, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            },
            {
              "text": "πύλη, πύλης, ἡ",
              "correct": false,
              "feedback": "Review: πομπή, πομπῆς, ἡ is the procession."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 2: Which form means “of the procession”?",
          "choices": [
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": true,
              "feedback": "Correct: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 3: What is the genitive singular of θεά?",
          "choices": [
            {
              "text": "θεῶν",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεάν",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεᾷ",
              "correct": false,
              "feedback": "Review: θεᾶς is the genitive singular of θεά."
            },
            {
              "text": "θεᾶς",
              "correct": true,
              "feedback": "Correct: θεᾶς is the genitive singular of θεά."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 4: Which phrase is an accusative singular procession?",
          "choices": [
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct: τὴν πομπήν is accusative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 5: Which present active form is 1st singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω is 1st singular."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 6: Which present active form is 2nd singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπεις",
              "correct": true,
              "feedback": "Correct: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 7: Which present active form is 3rd singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπει is 3rd singular."
            },
            {
              "text": "βλέπει",
              "correct": true,
              "feedback": "Correct: βλέπει is 3rd singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 8: Which present active form is 1st plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπομεν",
              "correct": true,
              "feedback": "Correct: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 9: Which present active form is 2nd plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπετε",
              "correct": true,
              "feedback": "Correct: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπετε is 2nd plural."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "present-persons",
          "category": "Grammar",
          "prompt": "Grammar exercise 10: Which present active form is 3rd plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": true,
              "feedback": "Correct: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Grammar exercise 11: What matches τὴν πομπήν as an adjective?",
          "choices": [
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλαῖς",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλήν",
              "correct": true,
              "feedback": "Correct: καλήν is feminine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Grammar exercise 12: What matches αἱ πομπαί?",
          "choices": [
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί is feminine nominative plural."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλάς",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Grammar exercise 13: Is ἡ ὁδός masculine because it ends in -ος?",
          "choices": [
            {
              "text": "No; it is neuter.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "No; its article marks it feminine.",
              "correct": true,
              "feedback": "Correct: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "Yes; all -ος nouns are masculine.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            },
            {
              "text": "Yes; roads are masculine in Greek.",
              "correct": false,
              "feedback": "Review: ἡ marks ὁδός as feminine, although it has a second-declension ending."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "agreement-review",
          "category": "Grammar",
          "prompt": "Grammar exercise 14: Which phrase has a feminine genitive singular adjective?",
          "choices": [
            {
              "text": "τῇ καλῇ θεᾷ",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "αἱ καλαὶ θεαί",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "τῆς καλῆς θεᾶς",
              "correct": true,
              "feedback": "Correct: τῆς καλῆς θεᾶς is feminine genitive singular."
            },
            {
              "text": "τὴν καλὴν θεάν",
              "correct": false,
              "feedback": "Review: τῆς καλῆς θεᾶς is feminine genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 15: Which form of πομπή is nominative singular?",
          "choices": [
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: ἡ πομπή is nominative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": true,
              "feedback": "Correct: ἡ πομπή is nominative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 16: Which form of πομπή is accusative singular?",
          "choices": [
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct: τὴν πομπήν is accusative singular."
            },
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 17: Which form of πομπή is genitive singular?",
          "choices": [
            {
              "text": "τῶν πομπῶν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": true,
              "feedback": "Correct: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῆς πομπῆς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 18: Which form of πομπή is dative singular?",
          "choices": [
            {
              "text": "τὴν πομπήν",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": true,
              "feedback": "Correct: τῇ πομπῇ is dative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τῇ πομπῇ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "eta-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 19: Which form of πομπή is genitive plural?",
          "choices": [
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τὰς πομπάς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": true,
              "feedback": "Correct: τῶν πομπῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 20: Which form of θεά is nominative singular?",
          "choices": [
            {
              "text": "ἡ θεά",
              "correct": true,
              "feedback": "Correct: ἡ θεά is nominative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: ἡ θεά is nominative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 21: Which form of θεά is accusative singular?",
          "choices": [
            {
              "text": "αἱ θεαί",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": true,
              "feedback": "Correct: τὴν θεάν is accusative singular."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 22: Which form of θεά is genitive singular?",
          "choices": [
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τῶν θεῶν",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": true,
              "feedback": "Correct: τῆς θεᾶς is genitive singular."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": false,
              "feedback": "Review: τῆς θεᾶς is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 23: Which form of θεά is dative singular?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": true,
              "feedback": "Correct: τῇ θεᾷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "alpha-feminines",
          "category": "Grammar",
          "prompt": "Grammar exercise 24: Which form of θεά is genitive plural?",
          "choices": [
            {
              "text": "τῶν θεῶν",
              "correct": true,
              "feedback": "Correct: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τὰς θεάς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 7 Final Quiz — The Road to Eleusis",
      "description": "Reading, vocabulary, grammar, and Eleusis in Greek religious life",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-7-final-quiz-v2",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 7 and continue to Lesson 8.",
      "questions": [
        {
          "id": "lesson-7-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Where does the public procession in the reading travel?",
          "choices": [
            {
              "text": "from Eleusis to Corinth",
              "correct": false,
              "feedback": "Review: It travels from Athens toward Eleusis."
            },
            {
              "text": "from Athens toward Eleusis",
              "correct": true,
              "feedback": "Correct: It travels from Athens toward Eleusis."
            },
            {
              "text": "from Delphi to Athens",
              "correct": false,
              "feedback": "Review: It travels from Athens toward Eleusis."
            },
            {
              "text": "from Sparta to Olympia",
              "correct": false,
              "feedback": "Review: It travels from Athens toward Eleusis."
            }
          ]
        },
        {
          "id": "lesson-7-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who speaks to Xenophon about her reason for joining?",
          "choices": [
            {
              "text": "Gryllus",
              "correct": false,
              "feedback": "Review: Myrrhine explains why she travels."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: Myrrhine explains why she travels."
            },
            {
              "text": "Myrrhine",
              "correct": true,
              "feedback": "Correct: Myrrhine explains why she travels."
            },
            {
              "text": "Persephone",
              "correct": false,
              "feedback": "Review: Myrrhine explains why she travels."
            }
          ]
        },
        {
          "id": "lesson-7-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Myrrhine carry?",
          "choices": [
            {
              "text": "a shield and spear",
              "correct": false,
              "feedback": "Review: She carries bread and water."
            },
            {
              "text": "a wax tablet",
              "correct": false,
              "feedback": "Review: She carries bread and water."
            },
            {
              "text": "a horse bridle",
              "correct": false,
              "feedback": "Review: She carries bread and water."
            },
            {
              "text": "bread and water",
              "correct": true,
              "feedback": "Correct: She carries bread and water."
            }
          ]
        },
        {
          "id": "lesson-7-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who travels with Myrrhine?",
          "choices": [
            {
              "text": "her sister",
              "correct": true,
              "feedback": "Correct: Her sister joins her."
            },
            {
              "text": "her father",
              "correct": false,
              "feedback": "Review: Her sister joins her."
            },
            {
              "text": "her teacher",
              "correct": false,
              "feedback": "Review: Her sister joins her."
            },
            {
              "text": "her son",
              "correct": false,
              "feedback": "Review: Her sister joins her."
            }
          ]
        },
        {
          "id": "lesson-7-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Where does the reading stop?",
          "choices": [
            {
              "text": "at Delphi",
              "correct": false,
              "feedback": "Review: The story stops before the sanctuary gates."
            },
            {
              "text": "before the sanctuary gates",
              "correct": true,
              "feedback": "Correct: The story stops before the sanctuary gates."
            },
            {
              "text": "inside the secret rites",
              "correct": false,
              "feedback": "Review: The story stops before the sanctuary gates."
            },
            {
              "text": "at the Athenian Agora",
              "correct": false,
              "feedback": "Review: The story stops before the sanctuary gates."
            }
          ]
        },
        {
          "id": "lesson-7-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What is the status of Xenophon’s journey in this story?",
          "choices": [
            {
              "text": "recorded by Pausanias as fact",
              "correct": false,
              "feedback": "Review: Xenophon’s attendance is not attested."
            },
            {
              "text": "quoted from a surviving diary",
              "correct": false,
              "feedback": "Review: Xenophon’s attendance is not attested."
            },
            {
              "text": "course reconstruction",
              "correct": true,
              "feedback": "Correct: Xenophon’s attendance is not attested."
            },
            {
              "text": "documented in the Anabasis",
              "correct": false,
              "feedback": "Review: Xenophon’s attendance is not attested."
            }
          ]
        },
        {
          "id": "lesson-7-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ πομπή mean?",
          "choices": [
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ἡ πομπή means procession."
            },
            {
              "text": "procession",
              "correct": true,
              "feedback": "Correct: ἡ πομπή means procession."
            }
          ]
        },
        {
          "id": "lesson-7-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀδελφή mean?",
          "choices": [
            {
              "text": "sister",
              "correct": true,
              "feedback": "Correct: ἡ ἀδελφή means sister."
            },
            {
              "text": "countryside, land",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "gift",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "carry, bear",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            }
          ]
        },
        {
          "id": "lesson-7-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ θεά mean?",
          "choices": [
            {
              "text": "stay, pause",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "goddess",
              "correct": true,
              "feedback": "Correct: ἡ θεά means goddess."
            },
            {
              "text": "earth, land",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            },
            {
              "text": "walk",
              "correct": false,
              "feedback": "Review: ἡ θεά means goddess."
            }
          ]
        },
        {
          "id": "lesson-7-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ δῶρον mean?",
          "choices": [
            {
              "text": "lead, guide",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "we",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            },
            {
              "text": "gift",
              "correct": true,
              "feedback": "Correct: τὸ δῶρον means gift."
            },
            {
              "text": "see, watch",
              "correct": false,
              "feedback": "Review: τὸ δῶρον means gift."
            }
          ]
        },
        {
          "id": "lesson-7-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does βλέπω mean?",
          "choices": [
            {
              "text": "stay, pause",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "you (singular)",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "procession",
              "correct": false,
              "feedback": "Review: βλέπω means see, watch."
            },
            {
              "text": "see, watch",
              "correct": true,
              "feedback": "Correct: βλέπω means see, watch."
            }
          ]
        },
        {
          "id": "lesson-7-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does μένω mean?",
          "choices": [
            {
              "text": "stay, pause",
              "correct": true,
              "feedback": "Correct: μένω means stay, pause."
            },
            {
              "text": "I",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "you (plural)",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: μένω means stay, pause."
            }
          ]
        },
        {
          "id": "lesson-7-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which present active form is 1st singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω is 1st singular."
            },
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπω is 1st singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which present active form is 2nd singular of βλέπω?",
          "choices": [
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπεις",
              "correct": true,
              "feedback": "Correct: βλέπεις is 2nd singular."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπεις is 2nd singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which present active form is 1st plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπουσιν",
              "correct": false,
              "feedback": "Review: βλέπομεν is 1st plural."
            },
            {
              "text": "βλέπομεν",
              "correct": true,
              "feedback": "Correct: βλέπομεν is 1st plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which present active form is 3rd plural of βλέπω?",
          "choices": [
            {
              "text": "βλέπουσιν",
              "correct": true,
              "feedback": "Correct: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπει",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπετε",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            },
            {
              "text": "βλέπομεν",
              "correct": false,
              "feedback": "Review: βλέπουσιν is 3rd plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What matches τὴν πομπήν as an adjective?",
          "choices": [
            {
              "text": "καλαῖς",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλήν",
              "correct": true,
              "feedback": "Correct: καλήν is feminine accusative singular."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλήν is feminine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What matches αἱ πομπαί?",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλάς",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            },
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί is feminine nominative plural."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: καλαί is feminine nominative plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of πομπή is accusative singular?",
          "choices": [
            {
              "text": "ἡ πομπή",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: τὴν πομπήν is accusative singular."
            },
            {
              "text": "τὴν πομπήν",
              "correct": true,
              "feedback": "Correct: τὴν πομπήν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of πομπή is genitive plural?",
          "choices": [
            {
              "text": "τῶν πομπῶν",
              "correct": true,
              "feedback": "Correct: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τῆς πομπῆς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            },
            {
              "text": "τὰς πομπάς",
              "correct": false,
              "feedback": "Review: τῶν πομπῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of πομπή is dative plural?",
          "choices": [
            {
              "text": "αἱ πομπαί",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "ταῖς πομπαῖς",
              "correct": true,
              "feedback": "Correct: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "τῇ πομπῇ",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            },
            {
              "text": "τῶν πομπῶν",
              "correct": false,
              "feedback": "Review: ταῖς πομπαῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of θεά is accusative singular?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "αἱ θεαί",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": true,
              "feedback": "Correct: τὴν θεάν is accusative singular."
            },
            {
              "text": "ἡ θεά",
              "correct": false,
              "feedback": "Review: τὴν θεάν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of θεά is dative singular?",
          "choices": [
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τὴν θεάν",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῇ θεᾷ is dative singular."
            },
            {
              "text": "τῇ θεᾷ",
              "correct": true,
              "feedback": "Correct: τῇ θεᾷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-7-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of θεά is genitive plural?",
          "choices": [
            {
              "text": "τῶν θεῶν",
              "correct": true,
              "feedback": "Correct: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τῆς θεᾶς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "ταῖς θεαῖς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            },
            {
              "text": "τὰς θεάς",
              "correct": false,
              "feedback": "Review: τῶν θεῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-7-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which goddesses were central at Eleusis?",
          "choices": [
            {
              "text": "Hestia and Nike",
              "correct": false,
              "feedback": "Review: Eleusis centered on Demeter and her daughter Kore."
            },
            {
              "text": "Demeter and Kore (Persephone)",
              "correct": true,
              "feedback": "Correct: Eleusis centered on Demeter and her daughter Kore."
            },
            {
              "text": "Athena and Artemis",
              "correct": false,
              "feedback": "Review: Eleusis centered on Demeter and her daughter Kore."
            },
            {
              "text": "Hera and Aphrodite",
              "correct": false,
              "feedback": "Review: Eleusis centered on Demeter and her daughter Kore."
            }
          ]
        },
        {
          "id": "lesson-7-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What was the Telesterion at Eleusis?",
          "choices": [
            {
              "text": "a gate in Athens",
              "correct": false,
              "feedback": "Review: The Telesterion was the large hall central to the Mysteries."
            },
            {
              "text": "a harbor warehouse",
              "correct": false,
              "feedback": "Review: The Telesterion was the large hall central to the Mysteries."
            },
            {
              "text": "the large hall associated with the Mysteries",
              "correct": true,
              "feedback": "Correct: The Telesterion was the large hall central to the Mysteries."
            },
            {
              "text": "an athletic training ground",
              "correct": false,
              "feedback": "Review: The Telesterion was the large hall central to the Mysteries."
            }
          ]
        },
        {
          "id": "lesson-7-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "How did Eleusis matter beyond Athens?",
          "choices": [
            {
              "text": "Only Athenian male citizens could participate.",
              "correct": false,
              "feedback": "Review: The Mysteries were open to a wider group than Athenian male citizens."
            },
            {
              "text": "It was a military training camp.",
              "correct": false,
              "feedback": "Review: The Mysteries were open to a wider group than Athenian male citizens."
            },
            {
              "text": "It replaced all other Greek sanctuaries.",
              "correct": false,
              "feedback": "Review: The Mysteries were open to a wider group than Athenian male citizens."
            },
            {
              "text": "Non-Athenians as well as Athenians could be initiated.",
              "correct": true,
              "feedback": "Correct: The Mysteries were open to a wider group than Athenian male citizens."
            }
          ]
        },
        {
          "id": "lesson-7-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which statement about women is accurate?",
          "choices": [
            {
              "text": "Women could participate in the Eleusinian Mysteries.",
              "correct": true,
              "feedback": "Correct: Women could be included among initiates."
            },
            {
              "text": "Women were always excluded.",
              "correct": false,
              "feedback": "Review: Women could be included among initiates."
            },
            {
              "text": "Only priestesses could travel to Eleusis.",
              "correct": false,
              "feedback": "Review: Women could be included among initiates."
            },
            {
              "text": "Women could watch but never be initiated.",
              "correct": false,
              "feedback": "Review: Women could be included among initiates."
            }
          ]
        },
        {
          "id": "lesson-7-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Why are the inner rites not described in this lesson?",
          "choices": [
            {
              "text": "They were identical to the Olympic games.",
              "correct": false,
              "feedback": "Review: Initiates kept the inner rites secret."
            },
            {
              "text": "They were secret and are not securely known in detail.",
              "correct": true,
              "feedback": "Correct: Initiates kept the inner rites secret."
            },
            {
              "text": "They occurred only at Delphi.",
              "correct": false,
              "feedback": "Review: Initiates kept the inner rites secret."
            },
            {
              "text": "No one ever traveled to Eleusis.",
              "correct": false,
              "feedback": "Review: Initiates kept the inner rites secret."
            }
          ]
        },
        {
          "id": "lesson-7-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which part of Myrrhine’s story is invented?",
          "choices": [
            {
              "text": "the public road to Eleusis",
              "correct": false,
              "feedback": "Review: Myrrhine is a fictional pilgrim in a historical setting."
            },
            {
              "text": "the Telesterion at Eleusis",
              "correct": false,
              "feedback": "Review: Myrrhine is a fictional pilgrim in a historical setting."
            },
            {
              "text": "her personal words and family motive",
              "correct": true,
              "feedback": "Correct: Myrrhine is a fictional pilgrim in a historical setting."
            },
            {
              "text": "the existence of Demeter worship",
              "correct": false,
              "feedback": "Review: Myrrhine is a fictional pilgrim in a historical setting."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-8",
    "title": "A Household Finds a Way",
    "fallbackUrl": "lesson.html?lesson=8&page=1"
  },
  "contentRevision": "lesson-7-eleusis-visuals-v2",
  "previousLesson": {
    "id": "lesson-6",
    "title": "Strength of Body and Mind",
    "fallbackUrl": "lesson.html?lesson=6&page=1"
  }
}$json$::jsonb;
  lesson_id_value uuid;
  segment_id_value uuid;
  reading_id_value uuid;
  old_content jsonb;
  old_version integer;
  block_kind text;
  group_item jsonb;
  vocab_item jsonb;
  vocab_id uuid;
  vocab_order integer := 0;
  paragraph_item jsonb;
  gloss_item jsonb;
  paragraph_order integer := 0;
  gloss_order integer;
BEGIN
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-7' FOR UPDATE;
  SELECT content,version INTO old_content,old_version FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;
  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN RETURN; END IF;
  IF old_content IS NOT NULL AND (old_version IS DISTINCT FROM 2 OR old_content->>'contentRevision' IS DISTINCT FROM 'lesson-7-eleusis-complete-v1') THEN
    RAISE EXCEPTION 'Lesson 7 content has changed; review before replacing';
  END IF;
  IF old_content IS NOT NULL THEN
    INSERT INTO public.lesson_content_versions (lesson_id,content,version,note) VALUES (lesson_id_value,old_content,old_version,'Before Lesson 7 visual and route revision');
  END IF;
  INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1)
  ON CONFLICT (lesson_id) DO UPDATE SET content=EXCLUDED.content,version=public.lesson_content_overrides.version+1,updated_at=now();
  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;
  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)
  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p
  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;
  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-7-page-1';
  SELECT id INTO reading_id_value FROM public.readings WHERE lesson_id=lesson_id_value ORDER BY sort_order,id LIMIT 1;
  IF reading_id_value IS NULL THEN
    INSERT INTO public.readings (lesson_id,segment_id,title,sort_order) VALUES (lesson_id_value,segment_id_value,patch #>> '{reading,title}',1) RETURNING id INTO reading_id_value;
  END IF;
  UPDATE public.readings SET segment_id=segment_id_value,title=patch #>> '{reading,title}',
    greek_text=(SELECT string_agg(p->>'greek',E'\n\n' ORDER BY n) FROM jsonb_array_elements(patch #> '{reading,paragraphs}') WITH ORDINALITY t(p,n)),
    translation=patch #>> '{reading,translation}',notes_markdown=patch #>> '{reading,notesMarkdown}',source_citation=patch #>> '{reading,sourceCitation}'
  WHERE id=reading_id_value;
  DELETE FROM public.reading_glosses WHERE lesson_id=lesson_id_value AND reading_id=reading_id_value;
  FOR paragraph_item IN SELECT value FROM jsonb_array_elements(patch #> '{reading,paragraphs}') LOOP
    gloss_order:=0;
    FOR gloss_item IN SELECT value FROM jsonb_array_elements(paragraph_item->'gloss') LOOP
      INSERT INTO public.reading_glosses (lesson_id,reading_id,greek,english,lemma,display_form,part_of_speech,morphology,source,sort_order)
      VALUES (lesson_id_value,reading_id_value,gloss_item->>'greek',gloss_item->>'english',gloss_item->>'greek',gloss_item->>'greek','Reading gloss','{}'::jsonb,'lesson_reading_gloss',paragraph_order*1000+gloss_order);
      gloss_order:=gloss_order+1;
    END LOOP;
    paragraph_order:=paragraph_order+1;
  END LOOP;
  DELETE FROM public.lesson_vocabulary WHERE lesson_id=lesson_id_value;
  FOR group_item IN SELECT value FROM jsonb_array_elements(patch->'vocabulary') LOOP
    FOR vocab_item IN SELECT value FROM jsonb_array_elements(group_item->'items') LOOP
      INSERT INTO public.vocabulary_items (lemma,display_form,gloss,part_of_speech,dictionary_form,morphology)
      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_7_eleusis'))
      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;
      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';
      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);
      vocab_order:=vocab_order+1;
    END LOOP;
  END LOOP;
  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)
  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;
  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','activities'] LOOP
    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()
    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;
    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN
      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)
      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),
        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 ELSE 6 END);
    END IF;
  END LOOP;
END
$lesson7$;
UPDATE public.lesson_content_overrides o
SET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('The Road to Eleusis'::text),true),
    version=o.version+1,updated_at=now()
WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-6')
  AND o.content #>> '{nextLesson,id}'='lesson-7'
  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'The Road to Eleusis';
COMMIT;
