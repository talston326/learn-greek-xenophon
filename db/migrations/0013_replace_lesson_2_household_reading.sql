-- Replace Lesson 2 with the Xenophon household reading and supporting morphology content.
-- This migration updates lesson content only; it does not touch student progress, grades, or activity rows.

BEGIN;

CREATE TEMP TABLE lesson_2_household_payload AS
SELECT
  $content${
  "id": "lesson-2",
  "number": 2,
  "title": "The Household of Xenophon",
  "greekTitle": "Ἡ οἰκία τοῦ Ξενοφῶντος",
  "scope": "Second-declension nouns, adjective agreement, possessive genitives, εἰμί, and simple prepositions",
  "theme": "Xenophon’s household, family responsibilities, and chores around the house and farm",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/module-1-sophia-banner.jpeg",
    "alt": "A classical Athenian household and farm scene",
    "text": "Ἡ οἰκία τοῦ Ξενοφῶντος",
    "caption": "ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-2-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-2-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-2-page-3",
      "title": "Greek World / Review / Quiz",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Proper Names",
      "items": [
        {
          "greek": "Γρύλλος",
          "english": "Gryllus",
          "status": "proper name",
          "dictionaryForm": "Γρύλλος, Γρύλλου, ὁ"
        }
      ]
    },
    {
      "category": "Nouns",
      "items": [
        {
          "greek": "ἀγρός, ὁ",
          "english": "field; farm",
          "status": "previously introduced vocabulary",
          "dictionaryForm": "ἀγρός, ἀγροῦ, ὁ"
        },
        {
          "greek": "ἄρτος, ὁ",
          "english": "bread",
          "status": "new required vocabulary",
          "dictionaryForm": "ἄρτος, ἄρτου, ὁ"
        },
        {
          "greek": "γεωργός, ὁ",
          "english": "farmer",
          "status": "new required vocabulary",
          "dictionaryForm": "γεωργός, γεωργοῦ, ὁ"
        },
        {
          "greek": "δεῖπνον, τό",
          "english": "dinner; evening meal",
          "status": "previously introduced vocabulary",
          "dictionaryForm": "δεῖπνον, δείπνου, τό"
        },
        {
          "greek": "δοῦλος, ὁ",
          "english": "male slave; male household servant",
          "status": "new required vocabulary",
          "dictionaryForm": "δοῦλος, δούλου, ὁ"
        },
        {
          "greek": "δούλη, ἡ",
          "english": "female slave; female household servant",
          "status": "new required vocabulary",
          "dictionaryForm": "δούλη, δούλης, ἡ"
        },
        {
          "greek": "ἔργον, τό",
          "english": "work; task",
          "status": "new required vocabulary",
          "dictionaryForm": "ἔργον, ἔργου, τό"
        },
        {
          "greek": "ἵππος, ὁ",
          "english": "horse",
          "status": "previously introduced vocabulary",
          "dictionaryForm": "ἵππος, ἵππου, ὁ"
        },
        {
          "greek": "κῆπος, ὁ",
          "english": "garden",
          "status": "new required vocabulary",
          "dictionaryForm": "κῆπος, κήπου, ὁ"
        },
        {
          "greek": "γυνή, ἡ",
          "english": "woman",
          "status": "teacher-supported exception",
          "dictionaryForm": "γυνή, γυναικός, ἡ"
        },
        {
          "greek": "μήτηρ, ἡ",
          "english": "mother",
          "status": "teacher-supported exception",
          "dictionaryForm": "μήτηρ, μητρός, ἡ"
        },
        {
          "greek": "ὄνος, ὁ/ἡ",
          "english": "donkey",
          "status": "new required vocabulary",
          "dictionaryForm": "ὄνος, ὄνου, ὁ/ἡ"
        },
        {
          "greek": "οἰκία, ἡ",
          "english": "house",
          "status": "new required vocabulary",
          "dictionaryForm": "οἰκία, οἰκίας, ἡ"
        },
        {
          "greek": "οἶκος, ὁ",
          "english": "household; home",
          "status": "previously introduced vocabulary",
          "dictionaryForm": "οἶκος, οἴκου, ὁ"
        },
        {
          "greek": "παῖς, ὁ/ἡ",
          "english": "child; boy; girl",
          "status": "teacher-supported exception",
          "dictionaryForm": "παῖς, παιδός, ὁ/ἡ"
        },
        {
          "greek": "πατήρ, ὁ",
          "english": "father",
          "status": "teacher-supported exception",
          "dictionaryForm": "πατήρ, πατρός, ὁ"
        },
        {
          "greek": "πέπλος, ὁ",
          "english": "robe; garment",
          "status": "new required vocabulary",
          "dictionaryForm": "πέπλος, πέπλου, ὁ"
        },
        {
          "greek": "ὕδωρ, τό",
          "english": "water",
          "status": "teacher-supported exception",
          "dictionaryForm": "ὕδωρ, ὕδατος, τό"
        },
        {
          "greek": "ξύλον, τό",
          "english": "wood; piece of firewood",
          "status": "new required vocabulary",
          "dictionaryForm": "ξύλον, ξύλου, τό"
        }
      ]
    },
    {
      "category": "Adjectives",
      "items": [
        {
          "greek": "ἀγαθός, -ή, -όν",
          "english": "good",
          "status": "previously introduced vocabulary",
          "dictionaryForm": "ἀγαθός, -ή, -όν"
        },
        {
          "greek": "μικρός, -ά, -όν",
          "english": "small",
          "status": "new required vocabulary",
          "dictionaryForm": "μικρός, -ά, -όν"
        }
      ]
    },
    {
      "category": "Verbs",
      "items": [
        {
          "greek": "βαδίζω",
          "english": "walk; go",
          "status": "previously introduced vocabulary",
          "principalParts": [
            "βαδίζω",
            "βαδιῶ"
          ]
        },
        {
          "greek": "δειπνέω",
          "english": "dine; eat dinner",
          "status": "new required vocabulary",
          "principalParts": [
            "δειπνέω",
            "δειπνήσω"
          ]
        },
        {
          "greek": "ἐργάζομαι",
          "english": "work",
          "status": "new required vocabulary",
          "principalParts": [
            "ἐργάζομαι",
            "ἐργάσομαι",
            "εἰργασάμην",
            "εἴργασμαι"
          ]
        },
        {
          "greek": "ἔρχομαι",
          "english": "come; go",
          "status": "previously introduced vocabulary",
          "principalParts": [
            "ἔρχομαι",
            "εἶμι",
            "ἦλθον",
            "ἐλήλυθα"
          ]
        },
        {
          "greek": "κελεύω",
          "english": "order; command; instruct",
          "status": "new required vocabulary",
          "principalParts": [
            "κελεύω",
            "κελεύσω",
            "ἐκέλευσα",
            "κεκέλευκα"
          ]
        },
        {
          "greek": "μένω",
          "english": "remain; stay",
          "status": "previously introduced vocabulary",
          "principalParts": [
            "μένω",
            "μενῶ",
            "ἔμεινα",
            "μεμένηκα"
          ]
        },
        {
          "greek": "οἰκέω",
          "english": "live; dwell",
          "status": "new required vocabulary",
          "principalParts": [
            "οἰκέω",
            "οἰκήσω",
            "ᾤκησα",
            "ᾤκηκα"
          ]
        },
        {
          "greek": "παρασκευάζω",
          "english": "prepare",
          "status": "new required vocabulary",
          "principalParts": [
            "παρασκευάζω",
            "παρασκευάσω",
            "παρεσκεύασα",
            "παρεσκεύακα"
          ]
        },
        {
          "greek": "ὑφαίνω",
          "english": "weave",
          "status": "new required vocabulary",
          "principalParts": [
            "ὑφαίνω",
            "ὑφανῶ",
            "ὕφηνα"
          ]
        },
        {
          "greek": "φέρω",
          "english": "carry; bring",
          "status": "previously introduced vocabulary",
          "principalParts": [
            "φέρω",
            "οἴσω",
            "ἤνεγκα",
            "ἐνήνοχα",
            "ἐνήνεγμαι",
            "ἠνέχθην"
          ]
        },
        {
          "greek": "φιλέω",
          "english": "love; be fond of",
          "status": "new required vocabulary",
          "principalParts": [
            "φιλέω",
            "φιλήσω",
            "ἐφίλησα",
            "πεφίληκα",
            "πεφίλημαι",
            "ἐφιλήθην"
          ]
        },
        {
          "greek": "φυλάσσω",
          "english": "guard; watch over",
          "status": "new required vocabulary",
          "principalParts": [
            "φυλάσσω",
            "φυλάξω",
            "ἐφύλαξα",
            "πεφύλαχα",
            "πεφύλαγμαι",
            "ἐφυλάχθην"
          ]
        }
      ]
    }
  ],
  "reading": {
    "title": "Ἡ οἰκία τοῦ Ξενοφῶντος",
    "paragraphs": [
      {
        "greek": "Ὁ Ξενοφῶν παῖς ἐστίν. ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ.",
        "gloss": [
          {
            "greek": "τοῦ πατρός",
            "english": "possessive genitive: of the father / the father’s"
          }
        ]
      },
      {
        "greek": "ὁ πατὴρ τοῦ Ξενοφῶντος Γρύλλος ἐστίν. ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν. ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται. ὁ δοῦλος μετὰ τοῦ πατρὸς ἐν τῷ ἀγρῷ ἐργάζεται.",
        "gloss": [
          {
            "greek": "ἀγαθὸς γεωργός",
            "english": "adjective and noun agree: good farmer"
          },
          {
            "greek": "ἐν τῷ ἀγρῷ",
            "english": "ἐν with the dative: in the field"
          },
          {
            "greek": "μετὰ τοῦ πατρός",
            "english": "μετά with the genitive means “with”"
          }
        ]
      },
      {
        "greek": "ἡ μήτηρ ἐν τῇ οἰκίᾳ μένει. ἡ μήτηρ τοῦ Ξενοφῶντος ἀγαθὴ γυνή ἐστιν. ἡ μήτηρ τὸν οἶκον φυλάσσει. ἡ μήτηρ τοῖς δούλοις κελεύει. αἱ δοῦλαι πέπλους ὑφαίνουσιν. αἱ δοῦλαι ἄρτον παρασκευάζουσιν. ἡ μήτηρ τὴν οἰκίαν φιλεῖ.",
        "gloss": [
          {
            "greek": "τοῖς δούλοις",
            "english": "dative plural; translate here as “to the servants”"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει. ὁ παῖς τὸν ἵππον ἄγει. καὶ τὸν ὄνον ἄγει. ὁ παῖς ὕδωρ φέρει. ὁ παῖς ξύλα φέρει. ὁ παῖς τὸν κῆπον φυλάσσει.",
        "gloss": [
          {
            "greek": "μετὰ τοῦ πατρός",
            "english": "μετά with the genitive means “with”"
          },
          {
            "greek": "εἰς τὸν ἀγρόν",
            "english": "εἰς with the accusative indicates motion toward"
          }
        ]
      },
      {
        "greek": "μετὰ τὸ ἔργον ὁ Ξενοφῶν εἰς τὴν οἰκίαν ἔρχεται. ἡ μήτηρ τὸ δεῖπνον παρασκευάζει. ὁ πατὴρ καὶ ὁ παῖς ἐν τῇ οἰκίᾳ δειπνοῦσιν. ἡ οἰκία τοῦ Γρύλλου μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.",
        "gloss": [
          {
            "greek": "μετὰ τὸ ἔργον",
            "english": "μετά with the accusative means “after”"
          },
          {
            "greek": "τοῦ Γρύλλου",
            "english": "possessive genitive: of Gryllus / Gryllus’s"
          }
        ]
      }
    ],
    "translation": "Xenophon is a boy. He lives in his father’s house.\n\nXenophon’s father is Gryllus. Gryllus is a good farmer. His father works in the field. The male household servant works with his father in the field.\n\nHis mother remains in the house. Xenophon’s mother is a good woman. His mother watches over the household. His mother gives instructions to the servants. The female household servants weave garments. The female household servants prepare bread. His mother loves the household.\n\nXenophon walks to the field with his father. The boy leads the horse. He also leads the donkey. The boy carries water. The boy carries firewood. The boy watches over the garden.\n\nAfter the work, Xenophon returns to the house. His mother prepares dinner. His father and the boy dine in the house. The house of Gryllus is not small, but it is beautiful.",
    "notesMarkdown": "These scenes are plausible reconstructions for language learning, not documented incidents from Xenophon’s childhood."
  },
  "wordStudy": {
    "label": "Language-Level Note",
    "blocks": [
      {
        "title": "Teacher-supported forms",
        "body": [
          "Some essential family and household words in this reading are not second-declension nouns: πατήρ, μήτηρ, παῖς, γυνή, and ὕδωρ.",
          "Learn these as required lexical items for now. Their full third-declension patterns will be treated later; this lesson stays focused on second-declension nouns, adjective agreement, possessive genitives, εἰμί, and simple prepositions."
        ],
        "display": [
          {
            "greek": "πατήρ",
            "english": "father"
          },
          {
            "greek": "μήτηρ",
            "english": "mother"
          },
          {
            "greek": "παῖς",
            "english": "child, boy, girl"
          },
          {
            "greek": "γυνή",
            "english": "woman"
          },
          {
            "greek": "ὕδωρ",
            "english": "water"
          }
        ]
      }
    ]
  },
  "culture": {
    "title": "Household Work and Xenophon’s Oeconomicus",
    "body": [
      "In a prosperous Athenian household, the father normally represented the family in public life and supervised property, agriculture, finances, and relationships outside the home. The mother managed the internal household. She supervised food preparation, storage, spinning, weaving, clothing production, and the work of household servants.",
      "Boys from landowning families learned how farms, animals, and household resources were managed. These subjects later became important in Xenophon’s Oeconomicus, a dialogue about the proper management of the household and estate.",
      "The specific scenes in this lesson are plausible reconstructions for beginning Greek. They are not documented biographical incidents from Xenophon’s childhood."
    ],
    "questions": [
      {
        "prompt": "What responsibilities did an Athenian father normally supervise?",
        "answer": "Public representation, property, agriculture, finances, and outside relationships."
      },
      {
        "prompt": "What work did the mother normally manage inside the household?",
        "answer": "Food preparation, storage, spinning, weaving, clothing production, and household servants."
      },
      {
        "prompt": "Why is this household setting useful for a Xenophon course?",
        "answer": "Household and estate management later become important themes in Xenophon’s Oeconomicus."
      }
    ]
  },
  "grammar": {
    "intro": "Lesson 2 uses Xenophon’s household to practice second-declension nouns, adjective agreement, possessive genitives, forms of εἰμί, and simple prepositions.",
    "sections": [
      {
        "id": "second-declension-nouns",
        "title": "1. Second-Declension Nouns",
        "body": [
          "Many masculine second-declension nouns have nominative singular in -ος and accusative singular in -ον.",
          "Neuter second-declension nouns normally have nominative and accusative singular in -ον. The article often helps you see the gender and case."
        ],
        "table": {
          "title": "Second-declension examples from the reading",
          "headers": [
            "Noun",
            "Gender",
            "Nominative singular",
            "Accusative singular"
          ],
          "greekColumns": [
            0,
            2,
            3
          ],
          "rows": [
            [
              "ὁ ἀγρός",
              "masculine",
              "ἀγρός",
              "ἀγρόν"
            ],
            [
              "ὁ δοῦλος",
              "masculine",
              "δοῦλος",
              "δοῦλον"
            ],
            [
              "ὁ οἶκος",
              "masculine",
              "οἶκος",
              "οἶκον"
            ],
            [
              "ὁ ἵππος",
              "masculine",
              "ἵππος",
              "ἵππον"
            ],
            [
              "ὁ ὄνος",
              "masculine or feminine",
              "ὄνος",
              "ὄνον"
            ],
            [
              "ὁ κῆπος",
              "masculine",
              "κῆπος",
              "κῆπον"
            ],
            [
              "τὸ δεῖπνον",
              "neuter",
              "δεῖπνον",
              "δεῖπνον"
            ],
            [
              "τὸ ἔργον",
              "neuter",
              "ἔργον",
              "ἔργον"
            ],
            [
              "τὸ ξύλον",
              "neuter",
              "ξύλον",
              "ξύλον"
            ]
          ],
          "note": "For neuter nouns, the nominative and accusative singular forms are the same."
        },
        "examples": [
          {
            "greek": "ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται.",
            "english": "The father works in the field."
          },
          {
            "greek": "ὁ παῖς τὸν ἵππον ἄγει.",
            "english": "The boy leads the horse."
          },
          {
            "greek": "ἡ μήτηρ τὸ δεῖπνον παρασκευάζει.",
            "english": "The mother prepares dinner."
          }
        ],
        "practiceTopic": "second-declension-nouns"
      },
      {
        "id": "adjective-agreement",
        "title": "2. Adjective Agreement",
        "body": [
          "An adjective agrees with the noun it modifies in gender, number, and case.",
          "The adjective changes form according to the noun: masculine ἀγαθός, feminine ἀγαθή, neuter ἀγαθόν."
        ],
        "table": {
          "title": "Adjective agreement in Lesson 2",
          "headers": [
            "Phrase",
            "Noun",
            "Adjective form",
            "Why it agrees"
          ],
          "greekColumns": [
            0,
            1,
            2
          ],
          "rows": [
            [
              "ἀγαθὸς γεωργός",
              "γεωργός",
              "ἀγαθός",
              "masculine nominative singular"
            ],
            [
              "ἀγαθὴ γυνή",
              "γυνή",
              "ἀγαθή",
              "feminine nominative singular"
            ],
            [
              "καλὴ οἰκία",
              "οἰκία",
              "καλή",
              "feminine nominative singular"
            ],
            [
              "μικρὰ οἰκία",
              "οἰκία",
              "μικρά",
              "feminine nominative singular"
            ]
          ]
        },
        "examples": [
          {
            "greek": "ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν.",
            "english": "Gryllus is a good farmer."
          },
          {
            "greek": "ἡ μήτηρ ἀγαθὴ γυνή ἐστιν.",
            "english": "The mother is a good woman."
          },
          {
            "greek": "ἡ οἰκία μικρὰ οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.",
            "english": "The house is not small, but it is beautiful."
          }
        ],
        "practiceTopic": "adjective-agreement"
      },
      {
        "id": "possessive-genitive",
        "title": "3. Possession with the Genitive",
        "body": [
          "The genitive can express possession.",
          "English often uses either “of” or an apostrophe-s construction where Greek uses the genitive."
        ],
        "table": {
          "title": "Possessive genitives",
          "headers": [
            "Greek phrase",
            "Literal meaning",
            "Natural English"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ἡ οἰκία τοῦ πατρός",
              "the house of the father",
              "the father’s house"
            ],
            [
              "ὁ πατὴρ τοῦ Ξενοφῶντος",
              "the father of Xenophon",
              "Xenophon’s father"
            ],
            [
              "ἡ οἰκία τοῦ Γρύλλου",
              "the house of Gryllus",
              "Gryllus’s house"
            ]
          ]
        },
        "practiceTopic": "possessive-genitive"
      },
      {
        "id": "eimi",
        "title": "4. εἰμί",
        "body": [
          "The reading uses forms of εἰμί to say what someone or something is.",
          "For now, learn ἐστίν and ἐστιν as forms meaning “is.” The negative phrase οὐκ ἐστίν means “is not.”"
        ],
        "formList": {
          "title": "Forms in the passage",
          "items": [
            {
              "greek": "ἐστίν",
              "english": "is"
            },
            {
              "greek": "ἐστιν",
              "english": "is"
            },
            {
              "greek": "οὐκ ἐστίν",
              "english": "is not"
            }
          ]
        },
        "examples": [
          {
            "greek": "Ὁ Ξενοφῶν παῖς ἐστίν.",
            "english": "Xenophon is a boy."
          },
          {
            "greek": "Ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν.",
            "english": "Gryllus is a good farmer."
          },
          {
            "greek": "Ἡ οἰκία μικρὰ οὐκ ἐστίν.",
            "english": "The house is not small."
          }
        ],
        "practiceTopic": "eimi"
      },
      {
        "id": "simple-prepositions",
        "title": "5. Simple Prepositions",
        "body": [
          "Prepositions often take a particular case after them.",
          "The meaning of a preposition may depend on the case that follows it."
        ],
        "table": {
          "title": "Prepositions in the reading",
          "headers": [
            "Pattern",
            "Example",
            "Meaning"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "ἐν + dative",
              "ἐν τῇ οἰκίᾳ",
              "in the house"
            ],
            [
              "ἐν + dative",
              "ἐν τῷ ἀγρῷ",
              "in the field"
            ],
            [
              "εἰς + accusative",
              "εἰς τὸν ἀγρόν",
              "into / to the field"
            ],
            [
              "μετά + genitive",
              "μετὰ τοῦ πατρός",
              "with the father"
            ],
            [
              "μετά + accusative",
              "μετὰ τὸ ἔργον",
              "after the work"
            ]
          ]
        },
        "practiceTopic": "simple-prepositions"
      }
    ],
    "summary": {
      "title": "Lesson 2 Grammar Summary",
      "items": [
        "Many masculine second-declension nouns have nominative singular -ος and accusative singular -ον.",
        "Neuter second-declension nominative and accusative singular forms are usually identical.",
        "Adjectives agree with nouns in gender, number, and case.",
        "The genitive can express possession.",
        "ἐν takes the dative here, εἰς takes the accusative, and μετά changes meaning with the genitive or accusative."
      ]
    }
  },
  "activities": {
    "vocab-practice": {
      "title": "Lesson 2 Vocabulary Practice",
      "questions": [
        {
          "id": "lesson-2-vocab-1",
          "type": "multiple_choice",
          "prompt": "What does γεωργός mean?",
          "choices": [
            {
              "text": "farmer",
              "correct": true,
              "feedback": "Correct. γεωργός means farmer."
            },
            {
              "text": "garden",
              "correct": false,
              "feedback": "κῆπος means garden; γεωργός is a farmer."
            },
            {
              "text": "bread",
              "correct": false,
              "feedback": "ἄρτος means bread; γεωργός is a farmer."
            }
          ]
        },
        {
          "id": "lesson-2-vocab-2",
          "type": "multiple_choice",
          "prompt": "Which Greek word means “household; home”?",
          "choices": [
            {
              "text": "οἶκος",
              "correct": true,
              "feedback": "Correct. οἶκος means household or home."
            },
            {
              "text": "ἔργον",
              "correct": false,
              "feedback": "ἔργον means work or task."
            },
            {
              "text": "ἄρτος",
              "correct": false,
              "feedback": "ἄρτος means bread."
            }
          ]
        },
        {
          "id": "lesson-2-vocab-3",
          "type": "multiple_choice",
          "prompt": "What does φυλάσσω mean?",
          "choices": [
            {
              "text": "guard; watch over",
              "correct": true,
              "feedback": "Correct. φυλάσσω means guard or watch over."
            },
            {
              "text": "dine",
              "correct": false,
              "feedback": "δειπνέω means dine; φυλάσσω means guard or watch over."
            },
            {
              "text": "weave",
              "correct": false,
              "feedback": "ὑφαίνω means weave; φυλάσσω means guard or watch over."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 2 Grammar Flashcards",
      "cards": [
        {
          "prompt": "What ending often marks masculine second-declension nominative singular?",
          "answer": "-ος"
        },
        {
          "prompt": "What ending often marks masculine second-declension accusative singular?",
          "answer": "-ον"
        },
        {
          "prompt": "What does the genitive often express?",
          "answer": "Possession: of someone or someone’s."
        },
        {
          "prompt": "What case follows ἐν in this lesson?",
          "answer": "Dative."
        },
        {
          "prompt": "What does μετά + genitive mean in this lesson?",
          "answer": "With."
        }
      ]
    },
    "topic-practice": {
      "title": "Practice This Topic",
      "topicInstructions": {
        "second-declension-nouns": "Identify the case of the highlighted second-declension noun.",
        "adjective-agreement": "Choose the adjective form that agrees with the noun.",
        "possessive-genitive": "Read the genitive as possession.",
        "eimi": "Choose the correct form of εἰμί.",
        "simple-prepositions": "Match each prepositional phrase with its case pattern or meaning."
      },
      "questions": [
        {
          "id": "lesson-2-topic-noun-1",
          "topic": "second-declension-nouns",
          "type": "multiple_choice",
          "prompt": "What case is τὸν ἀγρόν in εἰς τὸν ἀγρόν?",
          "choices": [
            {
              "text": "accusative singular",
              "correct": true,
              "feedback": "Correct. τὸν and -όν mark accusative singular here."
            },
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Nominative would be ὁ ἀγρός."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Dative would be τῷ ἀγρῷ."
            }
          ]
        },
        {
          "id": "lesson-2-topic-noun-2",
          "topic": "second-declension-nouns",
          "type": "multiple_choice",
          "prompt": "What case is τῷ ἀγρῷ in ἐν τῷ ἀγρῷ?",
          "choices": [
            {
              "text": "dative singular",
              "correct": true,
              "feedback": "Correct. ἐν takes the dative here."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Accusative singular would be τὸν ἀγρόν."
            },
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Nominative singular would be ὁ ἀγρός."
            }
          ]
        },
        {
          "id": "lesson-2-topic-agreement-1",
          "topic": "adjective-agreement",
          "type": "multiple_choice",
          "prompt": "Choose the adjective form: ___ γεωργός",
          "choices": [
            {
              "text": "ἀγαθός",
              "correct": true,
              "feedback": "Correct. γεωργός is masculine nominative singular."
            },
            {
              "text": "ἀγαθή",
              "correct": false,
              "feedback": "ἀγαθή is feminine nominative singular."
            },
            {
              "text": "ἀγαθόν",
              "correct": false,
              "feedback": "ἀγαθόν is neuter or masculine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-2-topic-agreement-2",
          "topic": "adjective-agreement",
          "type": "multiple_choice",
          "prompt": "Choose the adjective form: ___ οἰκία",
          "choices": [
            {
              "text": "καλή",
              "correct": true,
              "feedback": "Correct. οἰκία is feminine nominative singular here."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "καλός is masculine nominative singular."
            },
            {
              "text": "καλόν",
              "correct": false,
              "feedback": "καλόν is neuter or masculine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-2-topic-agreement-3",
          "topic": "adjective-agreement",
          "type": "multiple_choice",
          "prompt": "Choose the adjective form: ___ ἔργον",
          "choices": [
            {
              "text": "μικρόν",
              "correct": true,
              "feedback": "Correct. ἔργον is neuter nominative or accusative singular."
            },
            {
              "text": "μικρός",
              "correct": false,
              "feedback": "μικρός is masculine nominative singular."
            },
            {
              "text": "μικρά",
              "correct": false,
              "feedback": "μικρά is feminine nominative singular or neuter plural, not singular ἔργον."
            }
          ]
        },
        {
          "id": "lesson-2-topic-genitive-1",
          "topic": "possessive-genitive",
          "type": "multiple_choice",
          "prompt": "What does ἡ οἰκία τοῦ πατρός mean?",
          "choices": [
            {
              "text": "the father’s house",
              "correct": true,
              "feedback": "Correct. τοῦ πατρός is a possessive genitive."
            },
            {
              "text": "the father in the house",
              "correct": false,
              "feedback": "That would need a preposition such as ἐν."
            },
            {
              "text": "the father leads the house",
              "correct": false,
              "feedback": "There is no verb meaning leads in this phrase."
            }
          ]
        },
        {
          "id": "lesson-2-topic-prepositions-1",
          "topic": "simple-prepositions",
          "type": "multiple_choice",
          "prompt": "What does μετὰ τοῦ πατρός mean?",
          "choices": [
            {
              "text": "with the father",
              "correct": true,
              "feedback": "Correct. μετά with the genitive means with."
            },
            {
              "text": "after the father",
              "correct": false,
              "feedback": "In this lesson, μετά means after with the accusative, not with this genitive phrase."
            },
            {
              "text": "in the father",
              "correct": false,
              "feedback": "ἐν + dative expresses in."
            }
          ]
        },
        {
          "id": "lesson-2-topic-prepositions-2",
          "topic": "simple-prepositions",
          "type": "multiple_choice",
          "prompt": "What does μετὰ τὸ ἔργον mean?",
          "choices": [
            {
              "text": "after the work",
              "correct": true,
              "feedback": "Correct. μετά with the accusative means after."
            },
            {
              "text": "with the work",
              "correct": false,
              "feedback": "μετά means with when it takes the genitive."
            },
            {
              "text": "in the work",
              "correct": false,
              "feedback": "ἐν + dative expresses in."
            }
          ]
        },
        {
          "id": "lesson-2-topic-eimi-1",
          "topic": "eimi",
          "type": "multiple_choice",
          "prompt": "Complete: Ὁ Ξενοφῶν παῖς ___.",
          "choices": [
            {
              "text": "ἐστίν",
              "correct": true,
              "feedback": "Correct. ἐστίν means is."
            },
            {
              "text": "οὐκ ἐστίν",
              "correct": false,
              "feedback": "οὐκ ἐστίν would mean is not, but the reading says Xenophon is a boy."
            },
            {
              "text": "εἰς",
              "correct": false,
              "feedback": "εἰς is a preposition, not a verb."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 2 Grammar Exercises",
      "threshold": 80,
      "questions": [
        {
          "id": "lesson-2-grammar-noun-1",
          "type": "multiple_choice",
          "prompt": "Identify the form: ὁ δοῦλος",
          "choices": [
            {
              "text": "nominative singular",
              "correct": true,
              "feedback": "Correct. ὁ and -ος mark masculine nominative singular."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Accusative singular would be τὸν δοῦλον."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Genitive singular would be τοῦ δούλου."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Dative singular would be τῷ δούλῳ."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-noun-2",
          "type": "multiple_choice",
          "prompt": "Identify the form: τὸν ἵππον",
          "choices": [
            {
              "text": "accusative singular",
              "correct": true,
              "feedback": "Correct. τὸν and -ον mark masculine accusative singular."
            },
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Nominative singular would be ὁ ἵππος."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Genitive singular would be τοῦ ἵππου."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Dative singular would be τῷ ἵππῳ."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-noun-3",
          "type": "multiple_choice",
          "prompt": "Identify the form: τοῦ Γρύλλου",
          "choices": [
            {
              "text": "genitive singular",
              "correct": true,
              "feedback": "Correct. τοῦ and -ου mark genitive singular."
            },
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Nominative singular would be ὁ Γρύλλος."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Accusative singular would be τὸν Γρύλλον."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Dative singular would be τῷ Γρύλλῳ."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-noun-4",
          "type": "multiple_choice",
          "prompt": "Identify the form: τῷ ἀγρῷ",
          "choices": [
            {
              "text": "dative singular",
              "correct": true,
              "feedback": "Correct. τῷ and -ῷ mark dative singular."
            },
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Nominative singular would be ὁ ἀγρός."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Accusative singular would be τὸν ἀγρόν."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Genitive singular would be τοῦ ἀγροῦ."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-agreement-1",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ γεωργός",
          "choices": [
            {
              "text": "ἀγαθός",
              "correct": true,
              "feedback": "Correct. γεωργός is masculine nominative singular."
            },
            {
              "text": "ἀγαθή",
              "correct": false,
              "feedback": "ἀγαθή agrees with a feminine nominative singular noun."
            },
            {
              "text": "ἀγαθόν",
              "correct": false,
              "feedback": "ἀγαθόν is neuter nominative/accusative or masculine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-agreement-2",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ οἰκία",
          "choices": [
            {
              "text": "καλή",
              "correct": true,
              "feedback": "Correct. οἰκία is feminine nominative singular."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "καλός agrees with a masculine nominative singular noun."
            },
            {
              "text": "καλόν",
              "correct": false,
              "feedback": "καλόν agrees with a neuter singular noun or masculine accusative singular noun."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-agreement-3",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ ἔργον",
          "choices": [
            {
              "text": "μικρόν",
              "correct": true,
              "feedback": "Correct. ἔργον is neuter singular."
            },
            {
              "text": "μικρός",
              "correct": false,
              "feedback": "μικρός is masculine nominative singular."
            },
            {
              "text": "μικρά",
              "correct": false,
              "feedback": "μικρά does not agree with singular ἔργον here."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-genitive-1",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ πατὴρ τοῦ Ξενοφῶντος",
          "choices": [
            {
              "text": "Xenophon’s father",
              "correct": true,
              "feedback": "Correct. τοῦ Ξενοφῶντος is possessive genitive."
            },
            {
              "text": "Xenophon with the father",
              "correct": false,
              "feedback": "That would use a preposition such as μετά."
            },
            {
              "text": "Xenophon leads the father",
              "correct": false,
              "feedback": "There is no verb meaning leads in this phrase."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-genitive-2",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ δοῦλος τοῦ Γρύλλου",
          "choices": [
            {
              "text": "the servant of Gryllus / Gryllus’s servant",
              "correct": true,
              "feedback": "Correct. τοῦ Γρύλλου is possessive genitive."
            },
            {
              "text": "Gryllus with the servant",
              "correct": false,
              "feedback": "μετά with the genitive would express with."
            },
            {
              "text": "the servant in Gryllus",
              "correct": false,
              "feedback": "ἐν + dative expresses in."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-preposition-1",
          "type": "multiple_choice",
          "prompt": "What pattern is ἐν τῇ οἰκίᾳ?",
          "choices": [
            {
              "text": "ἐν + dative: in the house",
              "correct": true,
              "feedback": "Correct. τῇ οἰκίᾳ is dative after ἐν."
            },
            {
              "text": "εἰς + accusative: to the house",
              "correct": false,
              "feedback": "εἰς uses the accusative for motion toward."
            },
            {
              "text": "μετά + genitive: with the house",
              "correct": false,
              "feedback": "μετά with genitive means with."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-preposition-2",
          "type": "multiple_choice",
          "prompt": "What does εἰς τὸν ἀγρόν mean?",
          "choices": [
            {
              "text": "to / into the field",
              "correct": true,
              "feedback": "Correct. εἰς with the accusative indicates motion toward."
            },
            {
              "text": "in the field",
              "correct": false,
              "feedback": "In the field is ἐν τῷ ἀγρῷ."
            },
            {
              "text": "with the field",
              "correct": false,
              "feedback": "μετά with the genitive means with."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-eimi-1",
          "type": "multiple_choice",
          "prompt": "Complete: Ἡ οἰκία μικρὰ ___.",
          "choices": [
            {
              "text": "οὐκ ἐστίν",
              "correct": true,
              "feedback": "Correct. οὐκ ἐστίν means is not."
            },
            {
              "text": "εἰς",
              "correct": false,
              "feedback": "εἰς is a preposition, not a form of εἰμί."
            },
            {
              "text": "μετά",
              "correct": false,
              "feedback": "μετά is a preposition, not a form of εἰμί."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-translation-1",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ παῖς ὕδωρ φέρει.",
          "choices": [
            {
              "text": "The boy carries water.",
              "correct": true,
              "feedback": "Correct. φέρει means carries, and ὕδωρ is the thing carried."
            },
            {
              "text": "The boy prepares bread.",
              "correct": false,
              "feedback": "Prepares bread is ἄρτον παρασκευάζει."
            },
            {
              "text": "The boy remains in the house.",
              "correct": false,
              "feedback": "μένει means remains; φέρει means carries."
            }
          ]
        },
        {
          "id": "lesson-2-grammar-translation-2",
          "type": "multiple_choice",
          "prompt": "Translate: ἡ μήτηρ τὸ δεῖπνον παρασκευάζει.",
          "choices": [
            {
              "text": "The mother prepares dinner.",
              "correct": true,
              "feedback": "Correct. τὸ δεῖπνον is the direct object."
            },
            {
              "text": "The mother loves the garden.",
              "correct": false,
              "feedback": "φιλεῖ means loves; παρασκευάζει means prepares."
            },
            {
              "text": "The father works in the field.",
              "correct": false,
              "feedback": "That sentence would use ὁ πατήρ and ἐργάζεται."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 2 Quiz — The Household of Xenophon",
      "threshold": 80,
      "questions": [
        {
          "id": "lesson-2-quiz-1",
          "type": "multiple_choice",
          "prompt": "τίς ἐστιν ὁ πατὴρ τοῦ Ξενοφῶντος; (Who is Xenophon’s father?)",
          "choices": [
            {
              "text": "Γρύλλος",
              "correct": true,
              "feedback": "Correct. Xenophon’s father is Gryllus."
            },
            {
              "text": "ὁ δοῦλος",
              "correct": false,
              "feedback": "The servant works with the father; he is not named as Xenophon’s father."
            },
            {
              "text": "ὁ ὄνος",
              "correct": false,
              "feedback": "ὁ ὄνος is the donkey."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-2",
          "type": "multiple_choice",
          "prompt": "ποῦ ὁ πατὴρ ἐργάζεται; (Where does the father work?)",
          "choices": [
            {
              "text": "ἐν τῷ ἀγρῷ",
              "correct": true,
              "feedback": "Correct. The father works in the field."
            },
            {
              "text": "ἐν τῇ οἰκίᾳ",
              "correct": false,
              "feedback": "The mother remains in the house."
            },
            {
              "text": "μετὰ τὸ ἔργον",
              "correct": false,
              "feedback": "μετὰ τὸ ἔργον means after the work."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-3",
          "type": "multiple_choice",
          "prompt": "τίς ἐν τῇ οἰκίᾳ μένει; (Who remains in the house?)",
          "choices": [
            {
              "text": "ἡ μήτηρ",
              "correct": true,
              "feedback": "Correct. The mother remains in the house."
            },
            {
              "text": "ὁ πατήρ",
              "correct": false,
              "feedback": "The father works in the field."
            },
            {
              "text": "ὁ ἵππος",
              "correct": false,
              "feedback": "The horse is led by Xenophon."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-4",
          "type": "multiple_choice",
          "prompt": "τί αἱ δοῦλαι ὑφαίνουσιν; (What do the female servants weave?)",
          "choices": [
            {
              "text": "πέπλους",
              "correct": true,
              "feedback": "Correct. They weave garments."
            },
            {
              "text": "ἄρτον",
              "correct": false,
              "feedback": "They prepare bread; they weave garments."
            },
            {
              "text": "ξύλα",
              "correct": false,
              "feedback": "The boy carries firewood."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-5",
          "type": "multiple_choice",
          "prompt": "μετὰ τίνος ὁ Ξενοφῶν εἰς τὸν ἀγρὸν βαδίζει; (With whom does Xenophon walk to the field?)",
          "choices": [
            {
              "text": "μετὰ τοῦ πατρός",
              "correct": true,
              "feedback": "Correct. He walks with his father."
            },
            {
              "text": "μετὰ τὸ ἔργον",
              "correct": false,
              "feedback": "μετὰ τὸ ἔργον means after the work."
            },
            {
              "text": "μετὰ τῆς μητρός",
              "correct": false,
              "feedback": "The reading says he walks with his father."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-6",
          "type": "multiple_choice",
          "prompt": "τίνα ζῷα ὁ Ξενοφῶν ἄγει; (Which animals does Xenophon lead?)",
          "choices": [
            {
              "text": "τὸν ἵππον καὶ τὸν ὄνον",
              "correct": true,
              "feedback": "Correct. He leads the horse and the donkey."
            },
            {
              "text": "τὸν κύνα καὶ τὸν ἵππον",
              "correct": false,
              "feedback": "A dog is not part of this Lesson 2 reading."
            },
            {
              "text": "τὸν ὄνον καὶ τὸν κῆπον",
              "correct": false,
              "feedback": "κῆπος means garden, not an animal."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-7",
          "type": "multiple_choice",
          "prompt": "τί ὁ Ξενοφῶν φέρει; (What does Xenophon carry?)",
          "choices": [
            {
              "text": "ὕδωρ καὶ ξύλα",
              "correct": true,
              "feedback": "Correct. He carries water and firewood."
            },
            {
              "text": "ἄρτον καὶ πέπλους",
              "correct": false,
              "feedback": "The servants prepare bread and weave garments."
            },
            {
              "text": "τὸν ἵππον καὶ τὸν ὄνον",
              "correct": false,
              "feedback": "He leads the horse and donkey; he carries water and firewood."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-8",
          "type": "multiple_choice",
          "prompt": "ποῦ ὁ πατὴρ καὶ ὁ παῖς δειπνοῦσιν; (Where do the father and boy dine?)",
          "choices": [
            {
              "text": "ἐν τῇ οἰκίᾳ",
              "correct": true,
              "feedback": "Correct. They dine in the house."
            },
            {
              "text": "ἐν τῷ ἀγρῷ",
              "correct": false,
              "feedback": "They work in the field, but dine in the house."
            },
            {
              "text": "εἰς τὸν ἀγρόν",
              "correct": false,
              "feedback": "εἰς τὸν ἀγρόν means to the field."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-9",
          "type": "multiple_choice",
          "prompt": "μικρά ἐστιν ἡ οἰκία τοῦ Γρύλλου; (Is Gryllus’s house small?)",
          "choices": [
            {
              "text": "No. μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.",
              "correct": true,
              "feedback": "Correct. The house is not small, but beautiful."
            },
            {
              "text": "Yes. μικρά ἐστιν.",
              "correct": false,
              "feedback": "The sentence says μικρά οὐκ ἐστίν: it is not small."
            },
            {
              "text": "No. ἐν τῷ ἀγρῷ ἐστιν.",
              "correct": false,
              "feedback": "That answers where something is, not whether it is small."
            }
          ]
        },
        {
          "id": "lesson-2-quiz-10",
          "type": "multiple_choice",
          "prompt": "Which phrase shows possession with the genitive?",
          "choices": [
            {
              "text": "ἡ οἰκία τοῦ Γρύλλου",
              "correct": true,
              "feedback": "Correct. τοῦ Γρύλλου is a possessive genitive."
            },
            {
              "text": "ἐν τῇ οἰκίᾳ",
              "correct": false,
              "feedback": "This is ἐν with the dative, meaning in the house."
            },
            {
              "text": "εἰς τὸν ἀγρόν",
              "correct": false,
              "feedback": "This is εἰς with the accusative, showing motion toward."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-3",
    "title": "What is Wisdom?",
    "fallbackUrl": "lesson.html?lesson=3&page=1"
  }
}$content$::jsonb AS content,
  $greek$Ὁ Ξενοφῶν παῖς ἐστίν. ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ.

ὁ πατὴρ τοῦ Ξενοφῶντος Γρύλλος ἐστίν. ὁ Γρύλλος ἀγαθὸς γεωργός ἐστιν. ὁ πατὴρ ἐν τῷ ἀγρῷ ἐργάζεται. ὁ δοῦλος μετὰ τοῦ πατρὸς ἐν τῷ ἀγρῷ ἐργάζεται.

ἡ μήτηρ ἐν τῇ οἰκίᾳ μένει. ἡ μήτηρ τοῦ Ξενοφῶντος ἀγαθὴ γυνή ἐστιν. ἡ μήτηρ τὸν οἶκον φυλάσσει. ἡ μήτηρ τοῖς δούλοις κελεύει. αἱ δοῦλαι πέπλους ὑφαίνουσιν. αἱ δοῦλαι ἄρτον παρασκευάζουσιν. ἡ μήτηρ τὴν οἰκίαν φιλεῖ.

ὁ Ξενοφῶν μετὰ τοῦ πατρὸς εἰς τὸν ἀγρὸν βαδίζει. ὁ παῖς τὸν ἵππον ἄγει. καὶ τὸν ὄνον ἄγει. ὁ παῖς ὕδωρ φέρει. ὁ παῖς ξύλα φέρει. ὁ παῖς τὸν κῆπον φυλάσσει.

μετὰ τὸ ἔργον ὁ Ξενοφῶν εἰς τὴν οἰκίαν ἔρχεται. ἡ μήτηρ τὸ δεῖπνον παρασκευάζει. ὁ πατὴρ καὶ ὁ παῖς ἐν τῇ οἰκίᾳ δειπνοῦσιν. ἡ οἰκία τοῦ Γρύλλου μικρά οὐκ ἐστίν, ἀλλὰ καλή ἐστιν.$greek$::text AS greek_text,
  $translation$Xenophon is a boy. He lives in his father’s house.

Xenophon’s father is Gryllus. Gryllus is a good farmer. His father works in the field. The male household servant works with his father in the field.

His mother remains in the house. Xenophon’s mother is a good woman. His mother watches over the household. His mother gives instructions to the servants. The female household servants weave garments. The female household servants prepare bread. His mother loves the household.

Xenophon walks to the field with his father. The boy leads the horse. He also leads the donkey. The boy carries water. The boy carries firewood. The boy watches over the garden.

After the work, Xenophon returns to the house. His mother prepares dinner. His father and the boy dine in the house. The house of Gryllus is not small, but it is beautiful.$translation$::text AS translation,
  $notes$These scenes are plausible reconstructions for language learning, not documented incidents from Xenophon’s childhood.$notes$::text AS notes_markdown,
  $source$Plausible reconstruction for beginning Greek; cultural context informed by Xenophon, Oeconomicus.$source$::text AS source_citation;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
)
UPDATE public.lessons l
SET title = 'The Household of Xenophon',
    greek_title = 'Ἡ οἰκία τοῦ Ξενοφῶντος',
    grammar_focus = 'Second-declension nouns, adjective agreement, possessive genitives, εἰμί, simple prepositions'
FROM lesson
WHERE l.id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
INSERT INTO public.lesson_content_overrides (lesson_id, content, version)
SELECT lesson.id, payload.content, 6
FROM lesson, payload
ON CONFLICT (lesson_id) DO UPDATE
SET content = EXCLUDED.content,
    version = GREATEST(public.lesson_content_overrides.version, 6),
    updated_at = now();

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT * FROM lesson_2_household_payload
),
updated AS (
  UPDATE public.readings r
  SET title = 'Ἡ οἰκία τοῦ Ξενοφῶντος',
      greek_text = payload.greek_text,
      translation = payload.translation,
      notes_markdown = payload.notes_markdown,
      source_citation = payload.source_citation
  FROM lesson, payload
  WHERE r.lesson_id = lesson.id
  RETURNING r.id
)
INSERT INTO public.readings (lesson_id, title, greek_text, translation, notes_markdown, source_citation, sort_order)
SELECT lesson.id, 'Ἡ οἰκία τοῦ Ξενοφῶντος', payload.greek_text, payload.translation, payload.notes_markdown, payload.source_citation, 1
FROM lesson, payload
WHERE NOT EXISTS (SELECT 1 FROM updated);

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_reading$Reading$title_reading$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_reading$reading$kind_reading$, 'value', p.content->$path_reading$reading$path_reading$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_reading$reading$where_reading$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_wordStudy$Language-Level Note$title_wordStudy$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_wordStudy$wordStudy$kind_wordStudy$, 'value', p.content->$path_wordStudy$wordStudy$path_wordStudy$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_wordStudy$wordStudy$where_wordStudy$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_grammar$Grammar$title_grammar$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_grammar$grammar$kind_grammar$, 'value', p.content->$path_grammar$grammar$path_grammar$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_grammar$grammar$where_grammar$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_culture$Culture$title_culture$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_culture$culture$kind_culture$, 'value', p.content->$path_culture$culture$path_culture$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_culture$culture$where_culture$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_enrichment$Enrichment$title_enrichment$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_enrichment$enrichment$kind_enrichment$, 'value', p.content->$path_enrichment$enrichment$path_enrichment$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_enrichment$enrichment$where_enrichment$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
payload AS (
  SELECT content FROM lesson_2_household_payload
)
UPDATE public.lesson_content_blocks b
SET title = $title_activities$Activities$title_activities$,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', $kind_activities$activities$kind_activities$, 'value', p.content->$path_activities$activities$path_activities$),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' = $where_activities$activities$where_activities$;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
)
DELETE FROM public.reading_glosses rg
USING lesson
WHERE rg.lesson_id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
reading AS (
  SELECT r.id
  FROM public.readings r, lesson
  WHERE r.lesson_id = lesson.id
  ORDER BY r.sort_order, r.id
  LIMIT 1
),
payload AS (
  SELECT content FROM lesson_2_household_payload
),
glosses AS (
  SELECT
    lesson.id AS lesson_id,
    reading.id AS reading_id,
    gloss.value->>'greek' AS greek,
    gloss.value->>'english' AS english,
    gloss.value->>'greek' AS lemma,
    gloss.value->>'greek' AS display_form,
    ((paragraph.ordinality - 1) * 100 + (gloss.ordinality - 1))::integer AS sort_order
  FROM lesson, reading, payload
  CROSS JOIN LATERAL jsonb_array_elements(payload.content #> '{reading,paragraphs}') WITH ORDINALITY AS paragraph(value, ordinality)
  CROSS JOIN LATERAL jsonb_array_elements(COALESCE(paragraph.value->'gloss', '[]'::jsonb)) WITH ORDINALITY AS gloss(value, ordinality)
)
INSERT INTO public.reading_glosses (lesson_id, reading_id, greek, english, lemma, display_form, part_of_speech, morphology, source, sort_order)
SELECT lesson_id, reading_id, greek, english, lemma, display_form, 'Guided note', jsonb_build_object('source', 'lesson_2_household_migration'), 'lesson_reading_gloss', sort_order
FROM glosses
WHERE greek IS NOT NULL AND english IS NOT NULL;

CREATE TEMP TABLE lesson_2_household_vocabulary (
  sort_order integer NOT NULL,
  category text NOT NULL,
  lemma text NOT NULL,
  display_form text NOT NULL,
  gloss text NOT NULL,
  dictionary_form text,
  principal_parts text[],
  status text,
  gender text,
  article text
) ON COMMIT DROP;

INSERT INTO lesson_2_household_vocabulary (sort_order, category, lemma, display_form, gloss, dictionary_form, principal_parts, status, gender, article)
VALUES
    (1, $cat$Proper Names$cat$, $lemma$Γρύλλος$lemma$, $display$Γρύλλος$display$, $gloss$Gryllus$gloss$, $dict$Γρύλλος, Γρύλλου, ὁ$dict$, NULL::text[], $status$proper name$status$, NULL, NULL),
    (2, $cat$Nouns$cat$, $lemma$ἀγρός$lemma$, $display$ἀγρός, ὁ$display$, $gloss$field; farm$gloss$, $dict$ἀγρός, ἀγροῦ, ὁ$dict$, NULL::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (3, $cat$Nouns$cat$, $lemma$ἄρτος$lemma$, $display$ἄρτος, ὁ$display$, $gloss$bread$gloss$, $dict$ἄρτος, ἄρτου, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (4, $cat$Nouns$cat$, $lemma$γεωργός$lemma$, $display$γεωργός, ὁ$display$, $gloss$farmer$gloss$, $dict$γεωργός, γεωργοῦ, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (5, $cat$Nouns$cat$, $lemma$δεῖπνον$lemma$, $display$δεῖπνον, τό$display$, $gloss$dinner; evening meal$gloss$, $dict$δεῖπνον, δείπνου, τό$dict$, NULL::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (6, $cat$Nouns$cat$, $lemma$δοῦλος$lemma$, $display$δοῦλος, ὁ$display$, $gloss$male slave; male household servant$gloss$, $dict$δοῦλος, δούλου, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (7, $cat$Nouns$cat$, $lemma$δούλη$lemma$, $display$δούλη, ἡ$display$, $gloss$female slave; female household servant$gloss$, $dict$δούλη, δούλης, ἡ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (8, $cat$Nouns$cat$, $lemma$ἔργον$lemma$, $display$ἔργον, τό$display$, $gloss$work; task$gloss$, $dict$ἔργον, ἔργου, τό$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (9, $cat$Nouns$cat$, $lemma$ἵππος$lemma$, $display$ἵππος, ὁ$display$, $gloss$horse$gloss$, $dict$ἵππος, ἵππου, ὁ$dict$, NULL::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (10, $cat$Nouns$cat$, $lemma$κῆπος$lemma$, $display$κῆπος, ὁ$display$, $gloss$garden$gloss$, $dict$κῆπος, κήπου, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (11, $cat$Nouns$cat$, $lemma$γυνή$lemma$, $display$γυνή, ἡ$display$, $gloss$woman$gloss$, $dict$γυνή, γυναικός, ἡ$dict$, NULL::text[], $status$teacher-supported exception$status$, NULL, NULL),
    (12, $cat$Nouns$cat$, $lemma$μήτηρ$lemma$, $display$μήτηρ, ἡ$display$, $gloss$mother$gloss$, $dict$μήτηρ, μητρός, ἡ$dict$, NULL::text[], $status$teacher-supported exception$status$, NULL, NULL),
    (13, $cat$Nouns$cat$, $lemma$ὄνος$lemma$, $display$ὄνος, ὁ/ἡ$display$, $gloss$donkey$gloss$, $dict$ὄνος, ὄνου, ὁ/ἡ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (14, $cat$Nouns$cat$, $lemma$οἰκία$lemma$, $display$οἰκία, ἡ$display$, $gloss$house$gloss$, $dict$οἰκία, οἰκίας, ἡ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (15, $cat$Nouns$cat$, $lemma$οἶκος$lemma$, $display$οἶκος, ὁ$display$, $gloss$household; home$gloss$, $dict$οἶκος, οἴκου, ὁ$dict$, NULL::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (16, $cat$Nouns$cat$, $lemma$παῖς$lemma$, $display$παῖς, ὁ/ἡ$display$, $gloss$child; boy; girl$gloss$, $dict$παῖς, παιδός, ὁ/ἡ$dict$, NULL::text[], $status$teacher-supported exception$status$, NULL, NULL),
    (17, $cat$Nouns$cat$, $lemma$πατήρ$lemma$, $display$πατήρ, ὁ$display$, $gloss$father$gloss$, $dict$πατήρ, πατρός, ὁ$dict$, NULL::text[], $status$teacher-supported exception$status$, NULL, NULL),
    (18, $cat$Nouns$cat$, $lemma$πέπλος$lemma$, $display$πέπλος, ὁ$display$, $gloss$robe; garment$gloss$, $dict$πέπλος, πέπλου, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (19, $cat$Nouns$cat$, $lemma$ὕδωρ$lemma$, $display$ὕδωρ, τό$display$, $gloss$water$gloss$, $dict$ὕδωρ, ὕδατος, τό$dict$, NULL::text[], $status$teacher-supported exception$status$, NULL, NULL),
    (20, $cat$Nouns$cat$, $lemma$ξύλον$lemma$, $display$ξύλον, τό$display$, $gloss$wood; piece of firewood$gloss$, $dict$ξύλον, ξύλου, τό$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (21, $cat$Adjectives$cat$, $lemma$ἀγαθός$lemma$, $display$ἀγαθός, -ή, -όν$display$, $gloss$good$gloss$, $dict$ἀγαθός, -ή, -όν$dict$, NULL::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (22, $cat$Adjectives$cat$, $lemma$μικρός$lemma$, $display$μικρός, -ά, -όν$display$, $gloss$small$gloss$, $dict$μικρός, -ά, -όν$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (23, $cat$Verbs$cat$, $lemma$βαδίζω$lemma$, $display$βαδίζω$display$, $gloss$walk; go$gloss$, NULL, ARRAY[$part$βαδίζω$part$, $part$βαδιῶ$part$]::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (24, $cat$Verbs$cat$, $lemma$δειπνέω$lemma$, $display$δειπνέω$display$, $gloss$dine; eat dinner$gloss$, NULL, ARRAY[$part$δειπνέω$part$, $part$δειπνήσω$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (25, $cat$Verbs$cat$, $lemma$ἐργάζομαι$lemma$, $display$ἐργάζομαι$display$, $gloss$work$gloss$, NULL, ARRAY[$part$ἐργάζομαι$part$, $part$ἐργάσομαι$part$, $part$εἰργασάμην$part$, $part$εἴργασμαι$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (26, $cat$Verbs$cat$, $lemma$ἔρχομαι$lemma$, $display$ἔρχομαι$display$, $gloss$come; go$gloss$, NULL, ARRAY[$part$ἔρχομαι$part$, $part$εἶμι$part$, $part$ἦλθον$part$, $part$ἐλήλυθα$part$]::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (27, $cat$Verbs$cat$, $lemma$κελεύω$lemma$, $display$κελεύω$display$, $gloss$order; command; instruct$gloss$, NULL, ARRAY[$part$κελεύω$part$, $part$κελεύσω$part$, $part$ἐκέλευσα$part$, $part$κεκέλευκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (28, $cat$Verbs$cat$, $lemma$μένω$lemma$, $display$μένω$display$, $gloss$remain; stay$gloss$, NULL, ARRAY[$part$μένω$part$, $part$μενῶ$part$, $part$ἔμεινα$part$, $part$μεμένηκα$part$]::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (29, $cat$Verbs$cat$, $lemma$οἰκέω$lemma$, $display$οἰκέω$display$, $gloss$live; dwell$gloss$, NULL, ARRAY[$part$οἰκέω$part$, $part$οἰκήσω$part$, $part$ᾤκησα$part$, $part$ᾤκηκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (30, $cat$Verbs$cat$, $lemma$παρασκευάζω$lemma$, $display$παρασκευάζω$display$, $gloss$prepare$gloss$, NULL, ARRAY[$part$παρασκευάζω$part$, $part$παρασκευάσω$part$, $part$παρεσκεύασα$part$, $part$παρεσκεύακα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (31, $cat$Verbs$cat$, $lemma$ὑφαίνω$lemma$, $display$ὑφαίνω$display$, $gloss$weave$gloss$, NULL, ARRAY[$part$ὑφαίνω$part$, $part$ὑφανῶ$part$, $part$ὕφηνα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (32, $cat$Verbs$cat$, $lemma$φέρω$lemma$, $display$φέρω$display$, $gloss$carry; bring$gloss$, NULL, ARRAY[$part$φέρω$part$, $part$οἴσω$part$, $part$ἤνεγκα$part$, $part$ἐνήνοχα$part$, $part$ἐνήνεγμαι$part$, $part$ἠνέχθην$part$]::text[], $status$previously introduced vocabulary$status$, NULL, NULL),
    (33, $cat$Verbs$cat$, $lemma$φιλέω$lemma$, $display$φιλέω$display$, $gloss$love; be fond of$gloss$, NULL, ARRAY[$part$φιλέω$part$, $part$φιλήσω$part$, $part$ἐφίλησα$part$, $part$πεφίληκα$part$, $part$πεφίλημαι$part$, $part$ἐφιλήθην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (34, $cat$Verbs$cat$, $lemma$φυλάσσω$lemma$, $display$φυλάσσω$display$, $gloss$guard; watch over$gloss$, NULL, ARRAY[$part$φυλάσσω$part$, $part$φυλάξω$part$, $part$ἐφύλαξα$part$, $part$πεφύλαχα$part$, $part$πεφύλαγμαι$part$, $part$ἐφυλάχθην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL);

WITH upserted AS (
  INSERT INTO public.vocabulary_items (
    lemma,
    display_form,
    part_of_speech,
    gloss,
    dictionary_form,
    principal_parts,
    gender,
    article,
    morphology
  )
  SELECT
    lemma,
    display_form,
    category,
    gloss,
    dictionary_form,
    principal_parts,
    gender,
    article,
    jsonb_build_object(
      'source', 'lesson_2_household_migration',
      'lesson_slug', 'lesson-2',
      'category', category,
      'classification', status
    )
  FROM lesson_2_household_vocabulary
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      dictionary_form = COALESCE(EXCLUDED.dictionary_form, public.vocabulary_items.dictionary_form),
      principal_parts = COALESCE(EXCLUDED.principal_parts, public.vocabulary_items.principal_parts),
      gender = COALESCE(EXCLUDED.gender, public.vocabulary_items.gender),
      article = COALESCE(EXCLUDED.article, public.vocabulary_items.article),
      morphology = COALESCE(public.vocabulary_items.morphology, '{}'::jsonb)
        || jsonb_build_object('lesson_2_household', EXCLUDED.morphology),
      updated_at = now()
  RETURNING id
)
SELECT count(*) FROM upserted;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-2'
),
new_items AS (
  SELECT DISTINCT ON (v.sort_order)
    v.sort_order,
    vi.id AS vocabulary_item_id
  FROM lesson_2_household_vocabulary v
  JOIN public.vocabulary_items vi
    ON (vi.lemma = v.lemma AND vi.display_form = v.display_form AND vi.gloss = v.gloss)
    OR (v.dictionary_form IS NOT NULL AND vi.dictionary_form = v.dictionary_form)
  ORDER BY v.sort_order,
    (vi.lemma = v.lemma AND vi.display_form = v.display_form AND vi.gloss = v.gloss) DESC,
    vi.updated_at DESC NULLS LAST
),
removed AS (
  DELETE FROM public.lesson_vocabulary lv
  USING lesson
  WHERE lv.lesson_id = lesson.id
    AND NOT EXISTS (
      SELECT 1
      FROM new_items ni
      WHERE ni.vocabulary_item_id = lv.vocabulary_item_id
    )
  RETURNING lv.lesson_id
)
INSERT INTO public.lesson_vocabulary (lesson_id, vocabulary_item_id, sort_order)
SELECT lesson.id, new_items.vocabulary_item_id, new_items.sort_order
FROM lesson, new_items
ON CONFLICT (lesson_id, vocabulary_item_id) DO UPDATE
SET sort_order = EXCLUDED.sort_order;

DROP TABLE lesson_2_household_payload;

COMMIT;
