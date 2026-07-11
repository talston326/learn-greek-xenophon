-- Replace Lesson 3 with the Xenophon education reading and supporting practice content.
-- This migration updates lesson content only; it does not touch student progress, grades, or activity rows.

BEGIN;

CREATE TEMP TABLE lesson_3_education_payload AS
SELECT
  $content${
  "id": "lesson-3",
  "number": 3,
  "title": "The Education of Xenophon",
  "greekTitle": "Ἡ παιδεία τοῦ Ξενοφῶντος",
  "scope": "Third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, and demonstratives",
  "theme": "Xenophon’s education, chores, household duties, and early school life",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/module-1-sophia-banner.jpeg",
    "alt": "A classical Athenian education scene with a young student and teacher",
    "text": "Ἡ παιδεία τοῦ Ξενοφῶντος",
    "caption": "ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-3-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-3-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-3-page-3",
      "title": "Greek World / Review / Test",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Proper Names",
      "items": [
        {
          "greek": "Ὅμηρος, ὁ",
          "english": "Homer",
          "status": "proper name",
          "dictionaryForm": "Ὅμηρος, Ὁμήρου, ὁ"
        }
      ]
    },
    {
      "category": "New Required Vocabulary",
      "items": [
        {
          "greek": "ἀκούω",
          "english": "hear; listen to",
          "status": "new required vocabulary",
          "principalParts": [
            "ἀκούω",
            "ἀκούσομαι",
            "ἤκουσα",
            "ἀκήκοα"
          ]
        },
        {
          "greek": "ἀναγιγνώσκω",
          "english": "read; read aloud",
          "status": "new required vocabulary",
          "principalParts": [
            "ἀναγιγνώσκω",
            "ἀναγνώσομαι",
            "ἀνέγνων",
            "ἀνέγνωκα"
          ]
        },
        {
          "greek": "βλέπω",
          "english": "see; look at",
          "status": "new required vocabulary",
          "principalParts": [
            "βλέπω",
            "βλέψω",
            "ἔβλεψα"
          ]
        },
        {
          "greek": "βούλομαι",
          "english": "wish; want",
          "status": "new required vocabulary",
          "principalParts": [
            "βούλομαι",
            "βουλήσομαι"
          ]
        },
        {
          "greek": "γενέσθαι",
          "english": "to become",
          "status": "new required vocabulary",
          "dictionaryForm": "γίγνομαι"
        },
        {
          "greek": "γράμμα, τό",
          "english": "letter; written character",
          "status": "new required vocabulary",
          "dictionaryForm": "γράμμα, γράμματος, τό"
        },
        {
          "greek": "γράφω",
          "english": "write",
          "status": "new required vocabulary",
          "principalParts": [
            "γράφω",
            "γράψω",
            "ἔγραψα",
            "γέγραφα",
            "γέγραμμαι",
            "ἐγράφην"
          ]
        },
        {
          "greek": "διδάσκαλος, ὁ",
          "english": "teacher",
          "status": "new required vocabulary",
          "dictionaryForm": "διδάσκαλος, διδασκάλου, ὁ"
        },
        {
          "greek": "διδασκαλεῖον, τό",
          "english": "school",
          "status": "new required vocabulary",
          "dictionaryForm": "διδασκαλεῖον, διδασκαλείου, τό"
        },
        {
          "greek": "διδάσκω",
          "english": "teach",
          "status": "new required vocabulary",
          "principalParts": [
            "διδάσκω",
            "διδάξω",
            "ἐδίδαξα",
            "δεδίδαχα"
          ]
        },
        {
          "greek": "ἐκεῖ",
          "english": "there",
          "status": "new required vocabulary"
        },
        {
          "greek": "ἐκεῖνος, ἐκείνη, ἐκεῖνο",
          "english": "that",
          "status": "new required vocabulary",
          "dictionaryForm": "ἐκεῖνος, ἐκείνη, ἐκεῖνο"
        },
        {
          "greek": "ἔπος, τό",
          "english": "word; verse; epic verse",
          "status": "new required vocabulary",
          "dictionaryForm": "ἔπος, ἔπους, τό"
        },
        {
          "greek": "ἐσθίω",
          "english": "eat",
          "status": "new required vocabulary",
          "principalParts": [
            "ἐσθίω",
            "ἔδομαι",
            "ἔφαγον",
            "ἐδήδοκα"
          ]
        },
        {
          "greek": "θεραπεύω",
          "english": "tend; care for",
          "status": "new required vocabulary",
          "principalParts": [
            "θεραπεύω",
            "θεραπεύσω",
            "ἐθεράπευσα",
            "τεθεράπευκα"
          ]
        },
        {
          "greek": "κομίζω",
          "english": "carry; bring",
          "status": "new required vocabulary",
          "principalParts": [
            "κομίζω",
            "κομιῶ",
            "ἐκόμισα",
            "κεκόμικα"
          ]
        },
        {
          "greek": "λούομαι",
          "english": "wash oneself; bathe",
          "status": "new required vocabulary",
          "principalParts": [
            "λούομαι",
            "λούσομαι",
            "ἐλουσάμην",
            "λέλουμαι"
          ]
        },
        {
          "greek": "μανθάνω",
          "english": "learn",
          "status": "new required vocabulary",
          "principalParts": [
            "μανθάνω",
            "μαθήσομαι",
            "ἔμαθον",
            "μεμάθηκα"
          ]
        },
        {
          "greek": "μουσική, ἡ",
          "english": "music",
          "status": "new required vocabulary",
          "dictionaryForm": "μουσική, μουσικῆς, ἡ"
        },
        {
          "greek": "νέος, νέα, νέον",
          "english": "young",
          "status": "new required vocabulary",
          "dictionaryForm": "νέος, νέα, νέον"
        },
        {
          "greek": "οὗτος, αὕτη, τοῦτο",
          "english": "this",
          "status": "new required vocabulary",
          "dictionaryForm": "οὗτος, αὕτη, τοῦτο"
        },
        {
          "greek": "παιδαγωγός, ὁ",
          "english": "attendant who escorts and supervises a boy",
          "status": "new required vocabulary",
          "dictionaryForm": "παιδαγωγός, παιδαγωγοῦ, ὁ"
        },
        {
          "greek": "παιδεύω",
          "english": "educate; train",
          "status": "new required vocabulary",
          "principalParts": [
            "παιδεύω",
            "παιδεύσω",
            "ἐπαίδευσα",
            "πεπαίδευκα",
            "πεπαίδευμαι",
            "ἐπαιδεύθην"
          ]
        },
        {
          "greek": "ποιέω",
          "english": "do; make",
          "status": "new required vocabulary",
          "principalParts": [
            "ποιέω",
            "ποιήσω",
            "ἐποίησα",
            "πεποίηκα",
            "πεποίημαι",
            "ἐποιήθην"
          ]
        },
        {
          "greek": "σκοπέω",
          "english": "examine; oversee",
          "status": "new required vocabulary",
          "principalParts": [
            "σκοπέω",
            "σκέψομαι",
            "ἐσκεψάμην"
          ]
        },
        {
          "greek": "σοφός, σοφή, σοφόν",
          "english": "wise",
          "status": "new required vocabulary",
          "dictionaryForm": "σοφός, σοφή, σοφόν"
        },
        {
          "greek": "ζῷον, τό",
          "english": "animal",
          "status": "new required vocabulary",
          "dictionaryForm": "ζῷον, ζῴου, τό"
        }
      ]
    },
    {
      "category": "Review Vocabulary",
      "items": [
        {
          "greek": "ἀγρός, ὁ",
          "english": "field; farm",
          "status": "review vocabulary",
          "dictionaryForm": "ἀγρός, ἀγροῦ, ὁ"
        },
        {
          "greek": "ἄρτος, ὁ",
          "english": "bread",
          "status": "review vocabulary",
          "dictionaryForm": "ἄρτος, ἄρτου, ὁ"
        },
        {
          "greek": "δοῦλος, ὁ",
          "english": "male slave; male household servant",
          "status": "review vocabulary",
          "dictionaryForm": "δοῦλος, δούλου, ὁ"
        },
        {
          "greek": "δούλη, ἡ",
          "english": "female slave; female household servant",
          "status": "review vocabulary",
          "dictionaryForm": "δούλη, δούλης, ἡ"
        },
        {
          "greek": "ἔργον, τό",
          "english": "work; task",
          "status": "review vocabulary",
          "dictionaryForm": "ἔργον, ἔργου, τό"
        },
        {
          "greek": "ἵππος, ὁ",
          "english": "horse",
          "status": "review vocabulary",
          "dictionaryForm": "ἵππος, ἵππου, ὁ"
        },
        {
          "greek": "κελεύω",
          "english": "order; command; instruct",
          "status": "review vocabulary",
          "principalParts": [
            "κελεύω",
            "κελεύσω",
            "ἐκέλευσα",
            "κεκέλευκα"
          ]
        },
        {
          "greek": "κῆπος, ὁ",
          "english": "garden",
          "status": "review vocabulary",
          "dictionaryForm": "κῆπος, κήπου, ὁ"
        },
        {
          "greek": "μήτηρ, ἡ",
          "english": "mother",
          "status": "review vocabulary",
          "dictionaryForm": "μήτηρ, μητρός, ἡ"
        },
        {
          "greek": "οἰκία, ἡ",
          "english": "house",
          "status": "review vocabulary",
          "dictionaryForm": "οἰκία, οἰκίας, ἡ"
        },
        {
          "greek": "ὄνος, ὁ/ἡ",
          "english": "donkey",
          "status": "review vocabulary",
          "dictionaryForm": "ὄνος, ὄνου, ὁ/ἡ"
        },
        {
          "greek": "παῖς, ὁ/ἡ",
          "english": "child; boy; girl",
          "status": "review vocabulary",
          "dictionaryForm": "παῖς, παιδός, ὁ/ἡ"
        },
        {
          "greek": "πατήρ, ὁ",
          "english": "father",
          "status": "review vocabulary",
          "dictionaryForm": "πατήρ, πατρός, ὁ"
        },
        {
          "greek": "πέπλος, ὁ",
          "english": "robe; garment",
          "status": "review vocabulary",
          "dictionaryForm": "πέπλος, πέπλου, ὁ"
        },
        {
          "greek": "παρασκευάζω",
          "english": "prepare",
          "status": "review vocabulary",
          "principalParts": [
            "παρασκευάζω",
            "παρασκευάσω",
            "παρεσκεύασα",
            "παρεσκεύακα"
          ]
        },
        {
          "greek": "ὕδωρ, τό",
          "english": "water",
          "status": "review vocabulary",
          "dictionaryForm": "ὕδωρ, ὕδατος, τό"
        },
        {
          "greek": "ὑφαίνω",
          "english": "weave",
          "status": "review vocabulary",
          "principalParts": [
            "ὑφαίνω",
            "ὑφανῶ",
            "ὕφηνα"
          ]
        },
        {
          "greek": "φέρω",
          "english": "carry; bring",
          "status": "review vocabulary",
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
          "status": "review vocabulary",
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
          "status": "review vocabulary",
          "principalParts": [
            "φυλάσσω",
            "φυλάξω",
            "ἐφύλαξα",
            "πεφύλαχα",
            "πεφύλαγμαι",
            "ἐφυλάχθην"
          ]
        },
        {
          "greek": "ξύλον, τό",
          "english": "wood; piece of firewood",
          "status": "review vocabulary",
          "dictionaryForm": "ξύλον, ξύλου, τό"
        }
      ]
    }
  ],
  "reading": {
    "title": "Ἡ παιδεία τοῦ Ξενοφῶντος",
    "paragraphs": [
      {
        "greek": "Ὁ Ξενοφῶν ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ. ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα φιλοῦσιν καὶ παιδεύειν βούλονται.",
        "gloss": [
          {
            "greek": "τὸν παῖδα",
            "english": "Accusative singular; direct object of φιλοῦσιν."
          },
          {
            "greek": "παιδεύειν βούλονται",
            "english": "“They want to educate.” The infinitive παιδεύειν completes the meaning of βούλονται."
          }
        ]
      },
      {
        "greek": "ὁ πατὴρ τὸν Ξενοφῶντα εἰς τὸν ἀγρὸν ἄγει. ἐκεῖ ὁ παῖς τὸν ἵππον θεραπεύει καὶ τὸν ὄνον ἄγει. ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν καὶ τὸν κῆπον φυλάσσειν.",
        "gloss": [
          {
            "greek": "τὸν Ξενοφῶντα",
            "english": "Accusative singular; direct object of ἄγει."
          },
          {
            "greek": "κελεύει τὸν παῖδα ὕδωρ φέρειν",
            "english": "“He orders the boy to carry water.” τὸν παῖδα is the person receiving the command; φέρειν is the commanded action."
          }
        ]
      },
      {
        "greek": "«οὗτος ὁ ἵππος καλός ἐστιν,» λέγει ὁ πατήρ· «ἐκεῖνος δὲ ὁ ὄνος μικρός ἐστιν. βούλομαι σε τὰ ζῷα θεραπεύειν.»",
        "gloss": [
          {
            "greek": "οὗτος ὁ ἵππος",
            "english": "“This horse.” The demonstrative and noun agree in gender, number, and case."
          },
          {
            "greek": "ἐκεῖνος ὁ ὄνος",
            "english": "“That donkey.” The demonstrative agrees with ὄνος."
          },
          {
            "greek": "σε",
            "english": "Accusative singular “you,” functioning as the subject of θεραπεύειν after βούλομαι."
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν τὸν πατέρα ἀκούει καὶ τὸ ἔργον ποιεῖ. τὸν ἵππον θεραπεύει, ὕδωρ φέρει, καὶ ξύλα εἰς τὴν οἰκίαν κομίζει."
      },
      {
        "greek": "ἐν δὲ τῇ οἰκίᾳ ἡ μήτηρ τὰ ἔργα τῶν δούλων σκοπεῖ. αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν καὶ τοὺς πέπλους ὑφαίνουσιν. ἡ μήτηρ κελεύει ταύτας τὰ ἔργα καλῶς ποιεῖν.",
        "gloss": [
          {
            "greek": "ταύτας",
            "english": "Feminine accusative plural of οὗτος; refers to the female servants."
          }
        ]
      },
      {
        "greek": "«αὕτη ἡ δούλη τὸν ἄρτον παρασκευάζει,» λέγει ἡ μήτηρ· «ἐκείνη δὲ τὸν πέπλον ὑφαίνει.»"
      },
      {
        "greek": "μετὰ τὰ ἔργα ὁ Ξενοφῶν λούεται καὶ ἐσθίει. ἔπειτα ὁ παιδαγωγὸς αὐτὸν εἰς τὸ διδασκαλεῖον ἄγει.",
        "gloss": [
          {
            "greek": "λούεται",
            "english": "Present middle: “he washes himself” or “he bathes.”"
          }
        ]
      },
      {
        "greek": "ἐν τῷ διδασκαλείῳ ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται. ὁ διδάσκαλος γράμματα γράφει καὶ τὸν παῖδα κελεύει γράφειν. ὁ Ξενοφῶν τὰ γράμματα βλέπει καὶ μανθάνει.",
        "gloss": [
          {
            "greek": "παιδεύεται",
            "english": "Present passive: “he is educated.”"
          },
          {
            "greek": "ὑπὸ τοῦ διδασκάλου",
            "english": "“By the teacher.” This identifies the agent of a passive verb."
          }
        ]
      },
      {
        "greek": "ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει. ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν καὶ καλῶς ἀναγιγνώσκειν. ὁ διδάσκαλος χαίρει, ὅτι ὁ παῖς φιλεῖ μανθάνειν."
      },
      {
        "greek": "οὗτος μὲν ὁ διδάσκαλος γράμματα διδάσκει· ἐκεῖνος δὲ ὁ διδάσκαλος μουσικὴν διδάσκει. οἱ παῖδες τὰ γράμματα μανθάνουσιν, τὴν μουσικὴν ἀκούουσιν, καὶ τοὺς τοῦ Ὁμήρου λόγους λέγουσιν."
      },
      {
        "greek": "ὁ Ξενοφῶν νέος ἐστίν, ἀλλὰ σοφὸς γενέσθαι βούλεται.",
        "gloss": [
          {
            "greek": "σοφὸς γενέσθαι βούλεται",
            "english": "“He wants to become wise.” Treat γενέσθαι as a vocabulary form here; the aorist system comes later."
          }
        ]
      }
    ],
    "translation": "Xenophon lives in his father’s house. His father and mother love the boy and want to educate him.\n\nHis father leads Xenophon to the farm. There the boy tends the horse and leads the donkey. His father orders the boy to carry water and guard the garden.\n\n“This horse is beautiful,” says his father, “but that donkey is small. I want you to tend the animals.”\n\nXenophon listens to his father and does the work. He tends the horse, carries water, and brings firewood into the house.\n\nIn the house, his mother oversees the work of the household servants. The female servants prepare the bread and weave the garments. His mother orders these women to do their work well.\n\n“This servant prepares the bread,” says his mother, “but that one weaves the garment.”\n\nAfter his chores, Xenophon washes himself and eats. Then the attendant leads him to school.\n\nAt school Xenophon is educated by the teacher. The teacher writes letters and orders the boy to write. Xenophon looks at the letters and learns.\n\nThe teacher reads Homer aloud. Xenophon wants to learn the verses and read well. The teacher is pleased because the boy loves to learn.\n\nThis teacher teaches letters, but that teacher teaches music. The boys learn their letters, listen to music, and recite the words of Homer.\n\nXenophon is young, but he wants to become wise.",
    "notesMarkdown": "The household and school scenes are plausible reconstructions for beginning Greek, not documented incidents from Xenophon’s childhood."
  },
  "wordStudy": {
    "label": "Learning Objectives",
    "blocks": [
      {
        "title": "By the end of Lesson 3",
        "body": [
          "You should be able to recognize third-person singular and plural present verbs, identify accusative direct objects, understand simple infinitive expressions, recognize introductory present middle and passive forms, identify and translate οὗτος and ἐκεῖνος, and read a short continuous narrative about Xenophon’s education and responsibilities."
        ],
        "display": [
          {
            "greek": "γράφει / γράφουσιν",
            "english": "he writes / they write"
          },
          {
            "greek": "τὸν ἵππον",
            "english": "accusative direct object"
          },
          {
            "greek": "μανθάνειν",
            "english": "to learn"
          },
          {
            "greek": "παιδεύεται",
            "english": "he is educated"
          },
          {
            "greek": "οὗτος / ἐκεῖνος",
            "english": "this / that"
          }
        ]
      }
    ]
  },
  "culture": {
    "title": "The Education of an Athenian Boy",
    "body": [
      "A boy from a prosperous Athenian family was normally educated outside the home by several adults. A παιδαγωγός, often an enslaved household attendant, accompanied him to school and supervised his behavior. One teacher taught reading, writing, and poetry, while another might teach music. Physical training took place under a separate instructor at the palaestra or gymnasium.",
      "Homer occupied a central place in Greek education. Boys learned passages from the Iliad and Odyssey, recited poetry aloud, and absorbed examples of courage, leadership, honor, anger, loyalty, and self-control.",
      "The household scenes in this lesson are plausible reconstructions rather than documented incidents from Xenophon’s childhood. They are consistent with the agricultural and educational world of a prosperous Athenian family. Xenophon later showed sustained interest in education, household management, horses, farming, leadership, and moral training."
    ],
    "questions": [
      {
        "prompt": "What did a παιδαγωγός do?",
        "answer": "He accompanied a boy to school and supervised his behavior."
      },
      {
        "prompt": "Why was Homer central to education?",
        "answer": "Boys recited Homeric poetry and absorbed examples of courage, leadership, honor, loyalty, and self-control."
      },
      {
        "prompt": "Are the scenes from Xenophon’s childhood documented?",
        "answer": "No. They are plausible reconstructions, not established biographical incidents."
      }
    ]
  },
  "grammar": {
    "intro": "Lesson 3 builds on the household narrative with third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, and demonstratives.",
    "sections": [
      {
        "id": "third-person-present-verbs",
        "title": "1. Third-Person Present Verbs",
        "body": [
          "Third-person verbs describe what he, she, it, or they do.",
          "A common third-person singular active ending is -ει. A common third-person plural active ending is -ουσι(ν)."
        ],
        "tables": [
          {
            "title": "Third-person singular",
            "headers": [
              "Greek",
              "Meaning"
            ],
            "greekColumns": [
              0
            ],
            "rows": [
              [
                "γράφει",
                "he, she, or it writes"
              ],
              [
                "φέρει",
                "he, she, or it carries"
              ],
              [
                "φυλάσσει",
                "he, she, or it guards"
              ],
              [
                "μανθάνει",
                "he, she, or it learns"
              ],
              [
                "κελεύει",
                "he, she, or it orders"
              ],
              [
                "ἐστίν",
                "he, she, or it is"
              ]
            ]
          },
          {
            "title": "Third-person plural",
            "headers": [
              "Greek",
              "Meaning"
            ],
            "greekColumns": [
              0
            ],
            "rows": [
              [
                "γράφουσιν",
                "they write"
              ],
              [
                "φέρουσιν",
                "they carry"
              ],
              [
                "φυλάσσουσιν",
                "they guard"
              ],
              [
                "μανθάνουσιν",
                "they learn"
              ],
              [
                "κελεύουσιν",
                "they order"
              ],
              [
                "εἰσίν",
                "they are"
              ]
            ]
          },
          {
            "title": "Singular and plural comparison",
            "headers": [
              "Singular",
              "Plural"
            ],
            "greekColumns": [
              0,
              1
            ],
            "rows": [
              [
                "ὁ παῖς γράφει.",
                "οἱ παῖδες γράφουσιν."
              ]
            ]
          }
        ],
        "examples": [
          {
            "greek": "ὁ πατὴρ τὸν παῖδα κελεύει.",
            "english": "The father orders the boy."
          },
          {
            "greek": "αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
            "english": "The female servants weave the garments."
          },
          {
            "greek": "ὁ διδάσκαλος γράμματα γράφει.",
            "english": "The teacher writes letters."
          },
          {
            "greek": "οἱ παῖδες τὰ γράμματα μανθάνουσιν.",
            "english": "The boys learn letters."
          }
        ],
        "checks": [
          {
            "prompt": "Which ending usually marks a third-person plural active verb in this lesson?",
            "answer": "-ουσι(ν), as in μανθάνουσιν."
          }
        ],
        "practiceTopic": "third-person-present-verbs"
      },
      {
        "id": "accusative-direct-objects",
        "title": "2. Accusative Direct Objects",
        "body": [
          "The direct object receives the action of the verb.",
          "In ὁ Ξενοφῶν φέρει τὸ ὕδωρ, the subject is ὁ Ξενοφῶν, the verb is φέρει, and the direct object is τὸ ὕδωρ.",
          "The nominative and accusative forms of neuter nouns are normally identical."
        ],
        "tables": [
          {
            "title": "Masculine examples",
            "headers": [
              "Nominative",
              "Accusative"
            ],
            "greekColumns": [
              0,
              1
            ],
            "rows": [
              [
                "ὁ ἵππος",
                "τὸν ἵππον"
              ],
              [
                "ὁ ὄνος",
                "τὸν ὄνον"
              ],
              [
                "ὁ κῆπος",
                "τὸν κῆπον"
              ],
              [
                "ὁ διδάσκαλος",
                "τὸν διδάσκαλον"
              ]
            ]
          },
          {
            "title": "Neuter examples",
            "headers": [
              "Nominative",
              "Accusative"
            ],
            "greekColumns": [
              0,
              1
            ],
            "rows": [
              [
                "τὸ ἔργον",
                "τὸ ἔργον"
              ],
              [
                "τὸ γράμμα",
                "τὸ γράμμα"
              ],
              [
                "τὸ ζῷον",
                "τὸ ζῷον"
              ]
            ]
          },
          {
            "title": "Plural direct objects",
            "headers": [
              "Phrase",
              "Meaning"
            ],
            "greekColumns": [
              0
            ],
            "rows": [
              [
                "τὰ γράμματα",
                "letters"
              ],
              [
                "τὰ ἔργα",
                "works / tasks"
              ],
              [
                "τοὺς πέπλους",
                "garments"
              ],
              [
                "τοὺς λόγους",
                "words / speeches"
              ]
            ]
          }
        ],
        "examples": [
          {
            "greek": "ὁ πατὴρ τὸν Ξενοφῶντα ἄγει.",
            "english": "The father leads Xenophon."
          },
          {
            "greek": "ὁ παῖς τὸν ἵππον θεραπεύει.",
            "english": "The boy tends the horse."
          },
          {
            "greek": "ἡ μήτηρ τὰ ἔργα σκοπεῖ.",
            "english": "The mother oversees the work."
          },
          {
            "greek": "ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει.",
            "english": "The teacher reads Homer aloud."
          }
        ],
        "checks": [
          {
            "prompt": "In ὁ παῖς τὸν ἵππον θεραπεύει, what receives the action?",
            "answer": "τὸν ἵππον receives the action and is the accusative direct object."
          }
        ],
        "practiceTopic": "accusative-direct-objects"
      },
      {
        "id": "simple-infinitive-expressions",
        "title": "3. Simple Infinitive Expressions",
        "body": [
          "The infinitive expresses “to do something.” A common present active infinitive ending is -ειν.",
          "Contract verbs may appear in contracted form, such as ποιεῖν.",
          "After κελεύω, the person receiving the command is accusative, and the infinitive expresses the commanded action."
        ],
        "table": {
          "title": "Present active infinitives",
          "headers": [
            "Verb",
            "Infinitive",
            "Meaning"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "γράφω",
              "γράφειν",
              "to write"
            ],
            [
              "φέρω",
              "φέρειν",
              "to carry"
            ],
            [
              "φυλάσσω",
              "φυλάσσειν",
              "to guard"
            ],
            [
              "μανθάνω",
              "μανθάνειν",
              "to learn"
            ],
            [
              "θεραπεύω",
              "θεραπεύειν",
              "to tend"
            ],
            [
              "παιδεύω",
              "παιδεύειν",
              "to educate"
            ],
            [
              "ποιέω",
              "ποιεῖν",
              "to do; make"
            ]
          ]
        },
        "examples": [
          {
            "greek": "ὁ Ξενοφῶν βούλεται μανθάνειν.",
            "english": "Xenophon wants to learn."
          },
          {
            "greek": "οἱ γονεῖς τὸν παῖδα παιδεύειν βούλονται.",
            "english": "The parents want to educate the boy."
          },
          {
            "greek": "ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν.",
            "english": "The father orders the boy to carry water."
          },
          {
            "greek": "ἡ μήτηρ κελεύει τὰς δούλας τὸν ἄρτον παρασκευάζειν.",
            "english": "The mother orders the female servants to prepare bread."
          }
        ],
        "checks": [
          {
            "prompt": "In βούλεται μανθάνειν, what does μανθάνειν do?",
            "answer": "It is the infinitive that completes the idea: he wants to learn."
          }
        ],
        "practiceTopic": "simple-infinitive-expressions"
      },
      {
        "id": "present-middle-and-passive",
        "title": "4. Present Middle and Passive",
        "body": [
          "Introductory third-person middle/passive endings are -εται in the singular and -ονται in the plural.",
          "In the middle voice, the subject may act upon or for himself. Some verbs use middle forms but have active English meanings.",
          "In the passive voice, the subject receives the action."
        ],
        "tables": [
          {
            "title": "Middle/passive endings",
            "headers": [
              "Person",
              "Singular",
              "Plural"
            ],
            "greekColumns": [
              1,
              2
            ],
            "rows": [
              [
                "third person",
                "-εται",
                "-ονται"
              ]
            ]
          },
          {
            "title": "Forms to recognize",
            "headers": [
              "Greek",
              "Meaning"
            ],
            "greekColumns": [
              0
            ],
            "rows": [
              [
                "λούεται",
                "he or she washes himself or herself"
              ],
              [
                "ἐργάζεται",
                "he or she works"
              ],
              [
                "βούλεται",
                "he or she wishes"
              ],
              [
                "παιδεύεται",
                "he or she is educated"
              ],
              [
                "λούονται",
                "they wash themselves"
              ],
              [
                "ἐργάζονται",
                "they work"
              ],
              [
                "βούλονται",
                "they wish"
              ],
              [
                "παιδεύονται",
                "they are educated"
              ]
            ]
          }
        ],
        "examples": [
          {
            "greek": "ὁ Ξενοφῶν λούεται.",
            "english": "Xenophon washes himself."
          },
          {
            "greek": "ὁ πατὴρ ἐργάζεται.",
            "english": "The father works."
          },
          {
            "greek": "ὁ Ξενοφῶν βούλεται μανθάνειν.",
            "english": "Xenophon wants to learn."
          },
          {
            "greek": "ὁ διδάσκαλος παιδεύει τὸν Ξενοφῶντα.",
            "english": "The teacher educates Xenophon."
          },
          {
            "greek": "ὁ Ξενοφῶν παιδεύεται ὑπὸ τοῦ διδασκάλου.",
            "english": "Xenophon is educated by the teacher."
          }
        ],
        "checks": [
          {
            "prompt": "Which sentence is passive: παιδεύει τὸν παῖδα or ὁ παῖς παιδεύεται?",
            "answer": "ὁ παῖς παιδεύεται is passive: the boy receives the education."
          }
        ],
        "practiceTopic": "present-middle-and-passive"
      },
      {
        "id": "demonstratives",
        "title": "5. Demonstratives",
        "body": [
          "οὗτος, αὕτη, τοῦτο means “this” or “these.” ἐκεῖνος, ἐκείνη, ἐκεῖνο means “that” or “those.”",
          "Demonstratives agree with their nouns in gender, number, and case.",
          "The standard attributive pattern places the demonstrative outside the article-noun group: οὗτος ὁ παῖς."
        ],
        "tables": [
          {
            "title": "οὗτος, αὕτη, τοῦτο: singular",
            "headers": [
              "Gender",
              "Nominative Singular",
              "Accusative Singular"
            ],
            "greekColumns": [
              1,
              2
            ],
            "rows": [
              [
                "masculine",
                "οὗτος",
                "τοῦτον"
              ],
              [
                "feminine",
                "αὕτη",
                "ταύτην"
              ],
              [
                "neuter",
                "τοῦτο",
                "τοῦτο"
              ]
            ]
          },
          {
            "title": "οὗτος, αὕτη, τοῦτο: plural",
            "headers": [
              "Gender",
              "Nominative Plural",
              "Accusative Plural"
            ],
            "greekColumns": [
              1,
              2
            ],
            "rows": [
              [
                "masculine",
                "οὗτοι",
                "τούτους"
              ],
              [
                "feminine",
                "αὗται",
                "ταύτας"
              ],
              [
                "neuter",
                "ταῦτα",
                "ταῦτα"
              ]
            ]
          },
          {
            "title": "ἐκεῖνος, ἐκείνη, ἐκεῖνο: singular",
            "headers": [
              "Gender",
              "Nominative Singular",
              "Accusative Singular"
            ],
            "greekColumns": [
              1,
              2
            ],
            "rows": [
              [
                "masculine",
                "ἐκεῖνος",
                "ἐκεῖνον"
              ],
              [
                "feminine",
                "ἐκείνη",
                "ἐκείνην"
              ],
              [
                "neuter",
                "ἐκεῖνο",
                "ἐκεῖνο"
              ]
            ]
          },
          {
            "title": "ἐκεῖνος, ἐκείνη, ἐκεῖνο: plural",
            "headers": [
              "Gender",
              "Nominative Plural",
              "Accusative Plural"
            ],
            "greekColumns": [
              1,
              2
            ],
            "rows": [
              [
                "masculine",
                "ἐκεῖνοι",
                "ἐκείνους"
              ],
              [
                "feminine",
                "ἐκεῖναι",
                "ἐκείνας"
              ],
              [
                "neuter",
                "ἐκεῖνα",
                "ἐκεῖνα"
              ]
            ]
          }
        ],
        "examples": [
          {
            "greek": "οὗτος ὁ παῖς",
            "english": "this boy"
          },
          {
            "greek": "αὕτη ἡ οἰκία",
            "english": "this house"
          },
          {
            "greek": "ἐκεῖνος ὁ ἵππος",
            "english": "that horse"
          },
          {
            "greek": "ἐκείνη ἡ δούλη",
            "english": "that female servant"
          },
          {
            "greek": "οὗτος ὁ διδάσκαλος",
            "english": "this teacher"
          },
          {
            "greek": "ταύτην τὴν οἰκίαν",
            "english": "this house as direct object"
          },
          {
            "greek": "ἐκεῖνα τὰ ζῷα",
            "english": "those animals"
          },
          {
            "greek": "ἐκείνας τὰς δούλας",
            "english": "those female servants as direct object"
          }
        ],
        "checks": [
          {
            "prompt": "Why is αὕτη correct in αὕτη ἡ δούλη?",
            "answer": "δούλη is feminine nominative singular, so the demonstrative must also be feminine nominative singular."
          }
        ],
        "practiceTopic": "demonstratives"
      }
    ],
    "summary": {
      "title": "Lesson 3 Grammar Summary",
      "items": [
        "Third-person singular active forms often end in -ει.",
        "Third-person plural active forms often end in -ουσι(ν).",
        "The accusative marks the direct object.",
        "Infinitives in -ειν can complete βούλομαι or express the action commanded by κελεύω.",
        "Middle/passive forms use -εται and -ονται.",
        "Demonstratives agree with their nouns in gender, number, and case."
      ]
    }
  },
  "enrichment": [],
  "activities": {
    "vocab-practice": {
      "title": "Lesson 3 Vocabulary Practice",
      "questions": [
        {
          "id": "lesson-3-verbs-1",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφει mean?",
          "choices": [
            {
              "text": "he, she, or it writes",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-2",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφουσιν mean?",
          "choices": [
            {
              "text": "they write",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-3",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνει mean?",
          "choices": [
            {
              "text": "he, she, or it learns",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-4",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνουσιν mean?",
          "choices": [
            {
              "text": "they learn",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-5",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύει mean?",
          "choices": [
            {
              "text": "he, she, or it tends",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-6",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύουσιν mean?",
          "choices": [
            {
              "text": "they tend",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-7",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλεται mean?",
          "choices": [
            {
              "text": "he, she, or it wants",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-8",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλονται mean?",
          "choices": [
            {
              "text": "they want",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-9",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύεται mean?",
          "choices": [
            {
              "text": "he, she, or it is educated",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-10",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύονται mean?",
          "choices": [
            {
              "text": "they are educated",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-11",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ διδάσκαλος γράμματα ___.",
          "choices": [
            {
              "text": "γράφει",
              "correct": true,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφειν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφονται",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-12",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: οἱ παῖδες τὰ γράμματα ___.",
          "choices": [
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 3 Grammar Flashcards",
      "cards": [
        {
          "prompt": "What does -ει often mark?",
          "answer": "Third-person singular present active."
        },
        {
          "prompt": "What does -ουσι(ν) often mark?",
          "answer": "Third-person plural present active."
        },
        {
          "prompt": "What does the accusative direct object do?",
          "answer": "It receives the action of the verb."
        },
        {
          "prompt": "What does an infinitive express?",
          "answer": "To do something."
        },
        {
          "prompt": "What does -εται mark in Lesson 3?",
          "answer": "Third-person singular middle/passive."
        },
        {
          "prompt": "How do demonstratives agree?",
          "answer": "In gender, number, and case."
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 3 Repeatable Practice",
      "topicInstructions": {
        "third-person-present-verbs": "Recognize singular and plural third-person present verbs.",
        "accusative-direct-objects": "Identify direct objects and choose accusative forms.",
        "simple-infinitive-expressions": "Match and complete infinitive expressions.",
        "present-middle-and-passive": "Classify and translate introductory middle/passive forms.",
        "demonstratives": "Choose agreeing demonstratives and transform forms.",
        "reading-comprehension": "Answer supported comprehension questions from the reading.",
        "translation": "Translate short sentences using Lesson 3 vocabulary and grammar."
      },
      "questions": [
        {
          "id": "lesson-3-verbs-1",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφει mean?",
          "choices": [
            {
              "text": "he, she, or it writes",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-2",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφουσιν mean?",
          "choices": [
            {
              "text": "they write",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-3",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνει mean?",
          "choices": [
            {
              "text": "he, she, or it learns",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-4",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνουσιν mean?",
          "choices": [
            {
              "text": "they learn",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-5",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύει mean?",
          "choices": [
            {
              "text": "he, she, or it tends",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-6",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύουσιν mean?",
          "choices": [
            {
              "text": "they tend",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-7",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλεται mean?",
          "choices": [
            {
              "text": "he, she, or it wants",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-8",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλονται mean?",
          "choices": [
            {
              "text": "they want",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-9",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύεται mean?",
          "choices": [
            {
              "text": "he, she, or it is educated",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-10",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύονται mean?",
          "choices": [
            {
              "text": "they are educated",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-11",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ διδάσκαλος γράμματα ___.",
          "choices": [
            {
              "text": "γράφει",
              "correct": true,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφειν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφονται",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-12",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: οἱ παῖδες τὰ γράμματα ___.",
          "choices": [
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-13",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ἡ μήτηρ τὰ ἔργα ___.",
          "choices": [
            {
              "text": "σκοπεῖ",
              "correct": true,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοποῦσιν",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοπεῖν",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοποῦνται",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-14",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: αἱ δοῦλαι τοὺς πέπλους ___.",
          "choices": [
            {
              "text": "ὑφαίνουσιν",
              "correct": true,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνει",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνειν",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνεται",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-15",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ Ξενοφῶν ___ μανθάνειν.",
          "choices": [
            {
              "text": "βούλεται",
              "correct": true,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλονται",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλεσθαι",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλει",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-3-objects-1",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
          "choices": [
            {
              "text": "τὸν ἵππον",
              "correct": true,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "θεραπεύει",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            }
          ]
        },
        {
          "id": "lesson-3-objects-2",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ πατὴρ τὸν παῖδα κελεύει.",
          "choices": [
            {
              "text": "τὸν παῖδα",
              "correct": true,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "ὁ πατήρ",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "κελεύει",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            }
          ]
        },
        {
          "id": "lesson-3-objects-3",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ἡ μήτηρ τὰ ἔργα σκοπεῖ.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "ἡ μήτηρ",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "σκοπεῖ",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "τῇ μητρί",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            }
          ]
        },
        {
          "id": "lesson-3-objects-4",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ διδάσκαλος γράμματα γράφει.",
          "choices": [
            {
              "text": "γράμματα",
              "correct": true,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "ὁ διδάσκαλος",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "γράφει",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            }
          ]
        },
        {
          "id": "lesson-3-objects-5",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
          "choices": [
            {
              "text": "τοὺς πέπλους",
              "correct": true,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "αἱ δοῦλαι",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "ὑφαίνουσιν",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "τοῖς πέπλοις",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            }
          ]
        },
        {
          "id": "lesson-3-objects-6",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Choose the case of τὸν Ξενοφῶντα in ὁ παιδαγωγὸς τὸν Ξενοφῶντα ἄγει.",
          "choices": [
            {
              "text": "accusative",
              "correct": true,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "dative",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            }
          ]
        },
        {
          "id": "lesson-3-objects-7",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "In ὁ Ξενοφῶν ξύλα κομίζει, what is the direct object?",
          "choices": [
            {
              "text": "ξύλα",
              "correct": true,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "κομίζει",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            }
          ]
        },
        {
          "id": "lesson-3-objects-8",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: οἱ παῖδες τὴν μουσικὴν ἀκούουσιν.",
          "choices": [
            {
              "text": "τὴν μουσικήν",
              "correct": true,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "οἱ παῖδες",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "τῇ μουσικῇ",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-1",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does γράφειν mean?",
          "choices": [
            {
              "text": "to write",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-2",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does φέρειν mean?",
          "choices": [
            {
              "text": "to carry",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-3",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does μανθάνειν mean?",
          "choices": [
            {
              "text": "to learn",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-4",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύειν mean?",
          "choices": [
            {
              "text": "to tend",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-5",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does φυλάσσειν mean?",
          "choices": [
            {
              "text": "to guard",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-6",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does παιδεύειν mean?",
          "choices": [
            {
              "text": "to educate",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-7",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does ποιεῖν mean?",
          "choices": [
            {
              "text": "to do; make",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-8",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ Ξενοφῶν βούλεται ___.",
          "choices": [
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "βούλεται is followed here by an infinitive expressing what Xenophon wants to do: μανθάνειν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "βούλεται is followed here by an infinitive expressing what Xenophon wants to do: μανθάνειν."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "βούλεται is followed here by an infinitive expressing what Xenophon wants to do: μανθάνειν."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "βούλεται is followed here by an infinitive expressing what Xenophon wants to do: μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-9",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ ___.",
          "choices": [
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "The commanded action is expressed by the infinitive φέρειν."
            },
            {
              "text": "φέρει",
              "correct": false,
              "feedback": "The commanded action is expressed by the infinitive φέρειν."
            },
            {
              "text": "φέρουσιν",
              "correct": false,
              "feedback": "The commanded action is expressed by the infinitive φέρειν."
            },
            {
              "text": "φέρεται",
              "correct": false,
              "feedback": "The commanded action is expressed by the infinitive φέρειν."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-10",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: ἡ μήτηρ κελεύει τὰς δούλας τὸν ἄρτον ___.",
          "choices": [
            {
              "text": "παρασκευάζειν",
              "correct": true,
              "feedback": "The infinitive παρασκευάζειν expresses the commanded action."
            },
            {
              "text": "παρασκευάζει",
              "correct": false,
              "feedback": "The infinitive παρασκευάζειν expresses the commanded action."
            },
            {
              "text": "παρασκευάζουσιν",
              "correct": false,
              "feedback": "The infinitive παρασκευάζειν expresses the commanded action."
            },
            {
              "text": "παρασκευάζεται",
              "correct": false,
              "feedback": "The infinitive παρασκευάζειν expresses the commanded action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-11",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ διδάσκαλος κελεύει τὸν Ξενοφῶντα ___.",
          "choices": [
            {
              "text": "γράφειν",
              "correct": true,
              "feedback": "After κελεύει, γράφειν expresses what Xenophon is ordered to do."
            },
            {
              "text": "γράφει",
              "correct": false,
              "feedback": "After κελεύει, γράφειν expresses what Xenophon is ordered to do."
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "After κελεύει, γράφειν expresses what Xenophon is ordered to do."
            },
            {
              "text": "γράφεται",
              "correct": false,
              "feedback": "After κελεύει, γράφειν expresses what Xenophon is ordered to do."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-12",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: οἱ γονεῖς τὸν παῖδα ___ βούλονται.",
          "choices": [
            {
              "text": "παιδεύειν",
              "correct": true,
              "feedback": "βούλονται takes an infinitive: παιδεύειν."
            },
            {
              "text": "παιδεύει",
              "correct": false,
              "feedback": "βούλονται takes an infinitive: παιδεύειν."
            },
            {
              "text": "παιδεύουσιν",
              "correct": false,
              "feedback": "βούλονται takes an infinitive: παιδεύειν."
            },
            {
              "text": "παιδεύεται",
              "correct": false,
              "feedback": "βούλονται takes an infinitive: παιδεύειν."
            }
          ]
        },
        {
          "id": "lesson-3-middle-1",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Classify γράφει.",
          "choices": [
            {
              "text": "present active",
              "correct": true,
              "feedback": "γράφει is active: he, she, or it writes."
            },
            {
              "text": "present middle",
              "correct": false,
              "feedback": "γράφει is active: he, she, or it writes."
            },
            {
              "text": "present passive",
              "correct": false,
              "feedback": "γράφει is active: he, she, or it writes."
            },
            {
              "text": "infinitive",
              "correct": false,
              "feedback": "γράφει is active: he, she, or it writes."
            }
          ]
        },
        {
          "id": "lesson-3-middle-2",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Classify βούλεται.",
          "choices": [
            {
              "text": "present middle",
              "correct": true,
              "feedback": "βούλεται uses the middle ending -εται and means wants."
            },
            {
              "text": "present active",
              "correct": false,
              "feedback": "βούλεται uses the middle ending -εται and means wants."
            },
            {
              "text": "present passive only",
              "correct": false,
              "feedback": "βούλεται uses the middle ending -εται and means wants."
            },
            {
              "text": "infinitive",
              "correct": false,
              "feedback": "βούλεται uses the middle ending -εται and means wants."
            }
          ]
        },
        {
          "id": "lesson-3-middle-3",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "What does λούεται mean here?",
          "choices": [
            {
              "text": "he washes himself",
              "correct": true,
              "feedback": "λούεται is present middle: he washes himself."
            },
            {
              "text": "they wash themselves",
              "correct": false,
              "feedback": "λούεται is present middle: he washes himself."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "λούεται is present middle: he washes himself."
            },
            {
              "text": "to wash",
              "correct": false,
              "feedback": "λούεται is present middle: he washes himself."
            }
          ]
        },
        {
          "id": "lesson-3-middle-4",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ παῖς παιδεύεται ὑπὸ τοῦ διδασκάλου.",
          "choices": [
            {
              "text": "The boy is educated by the teacher.",
              "correct": true,
              "feedback": "παιδεύεται is passive; ὑπὸ τοῦ διδασκάλου identifies the agent."
            },
            {
              "text": "The boy educates the teacher.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπὸ τοῦ διδασκάλου identifies the agent."
            },
            {
              "text": "The teacher wants the boy.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπὸ τοῦ διδασκάλου identifies the agent."
            },
            {
              "text": "The boy writes to the teacher.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπὸ τοῦ διδασκάλου identifies the agent."
            }
          ]
        },
        {
          "id": "lesson-3-middle-5",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Which form is third-person plural middle/passive?",
          "choices": [
            {
              "text": "βούλονται",
              "correct": true,
              "feedback": "The plural middle/passive ending is -ονται."
            },
            {
              "text": "βούλεται",
              "correct": false,
              "feedback": "The plural middle/passive ending is -ονται."
            },
            {
              "text": "βούλει",
              "correct": false,
              "feedback": "The plural middle/passive ending is -ονται."
            },
            {
              "text": "βούλεσθαι",
              "correct": false,
              "feedback": "The plural middle/passive ending is -ονται."
            }
          ]
        },
        {
          "id": "lesson-3-middle-6",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ πατὴρ ἐργάζεται.",
          "choices": [
            {
              "text": "The father works.",
              "correct": true,
              "feedback": "Some middle forms, such as ἐργάζεται, have active English meanings."
            },
            {
              "text": "The father is worked.",
              "correct": false,
              "feedback": "Some middle forms, such as ἐργάζεται, have active English meanings."
            },
            {
              "text": "The fathers work.",
              "correct": false,
              "feedback": "Some middle forms, such as ἐργάζεται, have active English meanings."
            },
            {
              "text": "The father writes.",
              "correct": false,
              "feedback": "Some middle forms, such as ἐργάζεται, have active English meanings."
            }
          ]
        },
        {
          "id": "lesson-3-middle-7",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Translate: οἱ παῖδες παιδεύονται.",
          "choices": [
            {
              "text": "The boys are educated.",
              "correct": true,
              "feedback": "παιδεύονται is third-person plural passive."
            },
            {
              "text": "The boy is educated.",
              "correct": false,
              "feedback": "παιδεύονται is third-person plural passive."
            },
            {
              "text": "The boys educate.",
              "correct": false,
              "feedback": "παιδεύονται is third-person plural passive."
            },
            {
              "text": "The boys write.",
              "correct": false,
              "feedback": "παιδεύονται is third-person plural passive."
            }
          ]
        },
        {
          "id": "lesson-3-middle-8",
          "topic": "present-middle-and-passive",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Classify φέρουσιν.",
          "choices": [
            {
              "text": "present active",
              "correct": true,
              "feedback": "φέρουσιν is active: they carry."
            },
            {
              "text": "present middle",
              "correct": false,
              "feedback": "φέρουσιν is active: they carry."
            },
            {
              "text": "present passive",
              "correct": false,
              "feedback": "φέρουσιν is active: they carry."
            },
            {
              "text": "infinitive",
              "correct": false,
              "feedback": "φέρουσιν is active: they carry."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-1",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ ὁ ἵππος.",
          "choices": [
            {
              "text": "οὗτος",
              "correct": true,
              "feedback": "ἵππος is masculine nominative singular, so use οὗτος."
            },
            {
              "text": "αὕτη",
              "correct": false,
              "feedback": "ἵππος is masculine nominative singular, so use οὗτος."
            },
            {
              "text": "τοῦτο",
              "correct": false,
              "feedback": "ἵππος is masculine nominative singular, so use οὗτος."
            },
            {
              "text": "οὗτοι",
              "correct": false,
              "feedback": "ἵππος is masculine nominative singular, so use οὗτος."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-2",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ ἡ δούλη.",
          "choices": [
            {
              "text": "αὕτη",
              "correct": true,
              "feedback": "δούλη is feminine, so the demonstrative must also be feminine: αὕτη ἡ δούλη."
            },
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "δούλη is feminine, so the demonstrative must also be feminine: αὕτη ἡ δούλη."
            },
            {
              "text": "τοῦτο",
              "correct": false,
              "feedback": "δούλη is feminine, so the demonstrative must also be feminine: αὕτη ἡ δούλη."
            },
            {
              "text": "οὗτοι",
              "correct": false,
              "feedback": "δούλη is feminine, so the demonstrative must also be feminine: αὕτη ἡ δούλη."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-3",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the agreeing form: ___ τὸ ζῷον.",
          "choices": [
            {
              "text": "τοῦτο",
              "correct": true,
              "feedback": "ζῷον is neuter nominative or accusative singular, so use τοῦτο."
            },
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "ζῷον is neuter nominative or accusative singular, so use τοῦτο."
            },
            {
              "text": "αὕτη",
              "correct": false,
              "feedback": "ζῷον is neuter nominative or accusative singular, so use τοῦτο."
            },
            {
              "text": "οὗτοι",
              "correct": false,
              "feedback": "ζῷον is neuter nominative or accusative singular, so use τοῦτο."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-4",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the phrase meaning “that donkey.”",
          "choices": [
            {
              "text": "ἐκεῖνος ὁ ὄνος",
              "correct": true,
              "feedback": "ὄνος is masculine here, so use ἐκεῖνος."
            },
            {
              "text": "ἐκείνη ὁ ὄνος",
              "correct": false,
              "feedback": "ὄνος is masculine here, so use ἐκεῖνος."
            },
            {
              "text": "ἐκεῖνο ὁ ὄνος",
              "correct": false,
              "feedback": "ὄνος is masculine here, so use ἐκεῖνος."
            },
            {
              "text": "ἐκεῖνοι ὁ ὄνος",
              "correct": false,
              "feedback": "ὄνος is masculine here, so use ἐκεῖνος."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-5",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the phrase meaning “that house.”",
          "choices": [
            {
              "text": "ἐκείνη ἡ οἰκία",
              "correct": true,
              "feedback": "οἰκία is feminine, so use ἐκείνη."
            },
            {
              "text": "ἐκεῖνος ἡ οἰκία",
              "correct": false,
              "feedback": "οἰκία is feminine, so use ἐκείνη."
            },
            {
              "text": "ἐκεῖνο ἡ οἰκία",
              "correct": false,
              "feedback": "οἰκία is feminine, so use ἐκείνη."
            },
            {
              "text": "ἐκεῖνοι ἡ οἰκία",
              "correct": false,
              "feedback": "οἰκία is feminine, so use ἐκείνη."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-6",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Change to accusative: οὗτος ὁ ἵππος.",
          "choices": [
            {
              "text": "τοῦτον τὸν ἵππον",
              "correct": true,
              "feedback": "Masculine accusative singular is τοῦτον τὸν ἵππον."
            },
            {
              "text": "οὗτος ὁ ἵππος",
              "correct": false,
              "feedback": "Masculine accusative singular is τοῦτον τὸν ἵππον."
            },
            {
              "text": "ταύτην τὴν ἵππον",
              "correct": false,
              "feedback": "Masculine accusative singular is τοῦτον τὸν ἵππον."
            },
            {
              "text": "τοῦτο τὸν ἵππον",
              "correct": false,
              "feedback": "Masculine accusative singular is τοῦτον τὸν ἵππον."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-7",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Change to accusative: αὕτη ἡ δούλη.",
          "choices": [
            {
              "text": "ταύτην τὴν δούλην",
              "correct": true,
              "feedback": "Feminine accusative singular is ταύτην τὴν δούλην."
            },
            {
              "text": "αὕτη ἡ δούλη",
              "correct": false,
              "feedback": "Feminine accusative singular is ταύτην τὴν δούλην."
            },
            {
              "text": "τοῦτον τὸν δούλην",
              "correct": false,
              "feedback": "Feminine accusative singular is ταύτην τὴν δούλην."
            },
            {
              "text": "τοῦτο τὴν δούλην",
              "correct": false,
              "feedback": "Feminine accusative singular is ταύτην τὴν δούλην."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-8",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Change to accusative: τοῦτο τὸ ζῷον.",
          "choices": [
            {
              "text": "τοῦτο τὸ ζῷον",
              "correct": true,
              "feedback": "Neuter nominative and accusative forms are normally the same."
            },
            {
              "text": "τοῦτον τὸν ζῷον",
              "correct": false,
              "feedback": "Neuter nominative and accusative forms are normally the same."
            },
            {
              "text": "ταύτην τὴν ζῷον",
              "correct": false,
              "feedback": "Neuter nominative and accusative forms are normally the same."
            },
            {
              "text": "οὗτος ὁ ζῷον",
              "correct": false,
              "feedback": "Neuter nominative and accusative forms are normally the same."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-9",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Change to accusative: ἐκεῖνος ὁ διδάσκαλος.",
          "choices": [
            {
              "text": "ἐκεῖνον τὸν διδάσκαλον",
              "correct": true,
              "feedback": "Masculine accusative singular is ἐκεῖνον τὸν διδάσκαλον."
            },
            {
              "text": "ἐκεῖνος ὁ διδάσκαλος",
              "correct": false,
              "feedback": "Masculine accusative singular is ἐκεῖνον τὸν διδάσκαλον."
            },
            {
              "text": "ἐκείνην τὴν διδάσκαλον",
              "correct": false,
              "feedback": "Masculine accusative singular is ἐκεῖνον τὸν διδάσκαλον."
            },
            {
              "text": "ἐκεῖνο τὸ διδάσκαλον",
              "correct": false,
              "feedback": "Masculine accusative singular is ἐκεῖνον τὸν διδάσκαλον."
            }
          ]
        },
        {
          "id": "lesson-3-demonstratives-10",
          "topic": "demonstratives",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Change to accusative: ἐκείνη ἡ οἰκία.",
          "choices": [
            {
              "text": "ἐκείνην τὴν οἰκίαν",
              "correct": true,
              "feedback": "Feminine accusative singular is ἐκείνην τὴν οἰκίαν."
            },
            {
              "text": "ἐκεῖνον τὸν οἰκίαν",
              "correct": false,
              "feedback": "Feminine accusative singular is ἐκείνην τὴν οἰκίαν."
            },
            {
              "text": "ἐκείνη ἡ οἰκία",
              "correct": false,
              "feedback": "Feminine accusative singular is ἐκείνην τὴν οἰκίαν."
            },
            {
              "text": "ἐκεῖνο τὸ οἰκίαν",
              "correct": false,
              "feedback": "Feminine accusative singular is ἐκείνην τὴν οἰκίαν."
            }
          ]
        },
        {
          "id": "lesson-3-reading-1",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "ποῦ ὁ Ξενοφῶν οἰκεῖ; (Where does Xenophon live?)",
          "choices": [
            {
              "text": "ἐν τῇ οἰκίᾳ τοῦ πατρός",
              "correct": true,
              "feedback": "Correct. Xenophon lives in his father’s house."
            },
            {
              "text": "ἐν τῷ διδασκαλείῳ",
              "correct": false,
              "feedback": "Correct. Xenophon lives in his father’s house."
            },
            {
              "text": "ἐν τῷ γυμνασίῳ",
              "correct": false,
              "feedback": "Correct. Xenophon lives in his father’s house."
            },
            {
              "text": "ἐν τῇ ἀγορᾷ",
              "correct": false,
              "feedback": "Correct. Xenophon lives in his father’s house."
            }
          ]
        },
        {
          "id": "lesson-3-reading-2",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί βούλονται ὁ πατὴρ καὶ ἡ μήτηρ; (What do his parents want?)",
          "choices": [
            {
              "text": "τὸν παῖδα παιδεύειν",
              "correct": true,
              "feedback": "They want to educate the boy."
            },
            {
              "text": "τὸν ἵππον φέρειν",
              "correct": false,
              "feedback": "They want to educate the boy."
            },
            {
              "text": "τὸν ἄρτον ὑφαίνειν",
              "correct": false,
              "feedback": "They want to educate the boy."
            },
            {
              "text": "τὴν μουσικὴν παρασκευάζειν",
              "correct": false,
              "feedback": "They want to educate the boy."
            }
          ]
        },
        {
          "id": "lesson-3-reading-3",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "ποῦ ὁ πατὴρ τὸν Ξενοφῶντα ἄγει; (Where does his father lead Xenophon?)",
          "choices": [
            {
              "text": "εἰς τὸν ἀγρόν",
              "correct": true,
              "feedback": "His father leads him to the farm."
            },
            {
              "text": "εἰς τὸ διδασκαλεῖον",
              "correct": false,
              "feedback": "His father leads him to the farm."
            },
            {
              "text": "εἰς τὴν ἀγοράν",
              "correct": false,
              "feedback": "His father leads him to the farm."
            },
            {
              "text": "πρὸς τὸν Ὅμηρον",
              "correct": false,
              "feedback": "His father leads him to the farm."
            }
          ]
        },
        {
          "id": "lesson-3-reading-4",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τίνα ζῷα ὁ Ξενοφῶν θεραπεύει; (Which animals does Xenophon tend?)",
          "choices": [
            {
              "text": "τὸν ἵππον καὶ τὸν ὄνον",
              "correct": true,
              "feedback": "The reading mentions the horse and donkey."
            },
            {
              "text": "τὸν κύνα καὶ τὸν ἵππον",
              "correct": false,
              "feedback": "The reading mentions the horse and donkey."
            },
            {
              "text": "τὰ γράμματα",
              "correct": false,
              "feedback": "The reading mentions the horse and donkey."
            },
            {
              "text": "τοὺς πέπλους",
              "correct": false,
              "feedback": "The reading mentions the horse and donkey."
            }
          ]
        },
        {
          "id": "lesson-3-reading-5",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί ὁ πατὴρ κελεύει τὸν παῖδα φέρειν; (What does the father order the boy to carry?)",
          "choices": [
            {
              "text": "ὕδωρ",
              "correct": true,
              "feedback": "The father orders him to carry water."
            },
            {
              "text": "ἄρτον",
              "correct": false,
              "feedback": "The father orders him to carry water."
            },
            {
              "text": "μουσικήν",
              "correct": false,
              "feedback": "The father orders him to carry water."
            },
            {
              "text": "πέπλους",
              "correct": false,
              "feedback": "The father orders him to carry water."
            }
          ]
        },
        {
          "id": "lesson-3-reading-6",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί αἱ δοῦλαι παρασκευάζουσιν; (What do the servants prepare?)",
          "choices": [
            {
              "text": "τὸν ἄρτον",
              "correct": true,
              "feedback": "The servants prepare bread."
            },
            {
              "text": "τοὺς πέπλους",
              "correct": false,
              "feedback": "The servants prepare bread."
            },
            {
              "text": "τὰ ζῷα",
              "correct": false,
              "feedback": "The servants prepare bread."
            },
            {
              "text": "τὰ γράμματα",
              "correct": false,
              "feedback": "The servants prepare bread."
            }
          ]
        },
        {
          "id": "lesson-3-reading-7",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί αἱ δοῦλαι ὑφαίνουσιν; (What do the servants weave?)",
          "choices": [
            {
              "text": "τοὺς πέπλους",
              "correct": true,
              "feedback": "The servants weave garments."
            },
            {
              "text": "τὸν ἄρτον",
              "correct": false,
              "feedback": "The servants weave garments."
            },
            {
              "text": "τὸν ὄνον",
              "correct": false,
              "feedback": "The servants weave garments."
            },
            {
              "text": "τὰ γράμματα",
              "correct": false,
              "feedback": "The servants weave garments."
            }
          ]
        },
        {
          "id": "lesson-3-reading-8",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τίς τὸν Ξενοφῶντα εἰς τὸ διδασκαλεῖον ἄγει; (Who leads Xenophon to school?)",
          "choices": [
            {
              "text": "ὁ παιδαγωγός",
              "correct": true,
              "feedback": "The παιδαγωγός leads him to school."
            },
            {
              "text": "ὁ πατήρ",
              "correct": false,
              "feedback": "The παιδαγωγός leads him to school."
            },
            {
              "text": "ἡ μήτηρ",
              "correct": false,
              "feedback": "The παιδαγωγός leads him to school."
            },
            {
              "text": "ὁ Ὅμηρος",
              "correct": false,
              "feedback": "The παιδαγωγός leads him to school."
            }
          ]
        },
        {
          "id": "lesson-3-reading-9",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "ὑπὸ τίνος ὁ Ξενοφῶν παιδεύεται; (By whom is Xenophon educated?)",
          "choices": [
            {
              "text": "ὑπὸ τοῦ διδασκάλου",
              "correct": true,
              "feedback": "He is educated by the teacher."
            },
            {
              "text": "ὑπὸ τοῦ ἵππου",
              "correct": false,
              "feedback": "He is educated by the teacher."
            },
            {
              "text": "ὑπὸ τῆς οἰκίας",
              "correct": false,
              "feedback": "He is educated by the teacher."
            },
            {
              "text": "ὑπὸ τῶν ζῴων",
              "correct": false,
              "feedback": "He is educated by the teacher."
            }
          ]
        },
        {
          "id": "lesson-3-reading-10",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί βούλεται ὁ Ξενοφῶν μανθάνειν; (What does Xenophon want to learn?)",
          "choices": [
            {
              "text": "τὰ ἔπη",
              "correct": true,
              "feedback": "He wants to learn the verses."
            },
            {
              "text": "τὸν ὄνον",
              "correct": false,
              "feedback": "He wants to learn the verses."
            },
            {
              "text": "τὴν οἰκίαν",
              "correct": false,
              "feedback": "He wants to learn the verses."
            },
            {
              "text": "τὸν ἄρτον",
              "correct": false,
              "feedback": "He wants to learn the verses."
            }
          ]
        },
        {
          "id": "lesson-3-reading-11",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί διδάσκει οὗτος ὁ διδάσκαλος; (What does this teacher teach?)",
          "choices": [
            {
              "text": "γράμματα",
              "correct": true,
              "feedback": "This teacher teaches letters."
            },
            {
              "text": "μουσικήν",
              "correct": false,
              "feedback": "This teacher teaches letters."
            },
            {
              "text": "ἄρτον",
              "correct": false,
              "feedback": "This teacher teaches letters."
            },
            {
              "text": "ζῷα",
              "correct": false,
              "feedback": "This teacher teaches letters."
            }
          ]
        },
        {
          "id": "lesson-3-reading-12",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί διδάσκει ἐκεῖνος ὁ διδάσκαλος; (What does that teacher teach?)",
          "choices": [
            {
              "text": "μουσικήν",
              "correct": true,
              "feedback": "That teacher teaches music."
            },
            {
              "text": "γράμματα",
              "correct": false,
              "feedback": "That teacher teaches music."
            },
            {
              "text": "ὕδωρ",
              "correct": false,
              "feedback": "That teacher teaches music."
            },
            {
              "text": "πέπλους",
              "correct": false,
              "feedback": "That teacher teaches music."
            }
          ]
        },
        {
          "id": "lesson-3-reading-13",
          "topic": "reading-comprehension",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "τί βούλεται ὁ Ξενοφῶν γενέσθαι; (What does Xenophon want to become?)",
          "choices": [
            {
              "text": "σοφός",
              "correct": true,
              "feedback": "Xenophon wants to become wise."
            },
            {
              "text": "γεωργός",
              "correct": false,
              "feedback": "Xenophon wants to become wise."
            },
            {
              "text": "δοῦλος",
              "correct": false,
              "feedback": "Xenophon wants to become wise."
            },
            {
              "text": "ὄνος",
              "correct": false,
              "feedback": "Xenophon wants to become wise."
            }
          ]
        },
        {
          "id": "lesson-3-translation-1",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ πατὴρ τὸν παῖδα κελεύει.",
          "choices": [
            {
              "text": "The father orders the boy.",
              "correct": true,
              "feedback": "τὸν παῖδα is the direct object of κελεύει."
            },
            {
              "text": "The boy orders the father.",
              "correct": false,
              "feedback": "τὸν παῖδα is the direct object of κελεύει."
            },
            {
              "text": "The father carries the boy.",
              "correct": false,
              "feedback": "τὸν παῖδα is the direct object of κελεύει."
            },
            {
              "text": "The boy wants the father.",
              "correct": false,
              "feedback": "τὸν παῖδα is the direct object of κελεύει."
            }
          ]
        },
        {
          "id": "lesson-3-translation-2",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
          "choices": [
            {
              "text": "Xenophon tends the horse.",
              "correct": true,
              "feedback": "τὸν ἵππον receives the action."
            },
            {
              "text": "The horse tends Xenophon.",
              "correct": false,
              "feedback": "τὸν ἵππον receives the action."
            },
            {
              "text": "Xenophon carries the horse.",
              "correct": false,
              "feedback": "τὸν ἵππον receives the action."
            },
            {
              "text": "The horse is educated.",
              "correct": false,
              "feedback": "τὸν ἵππον receives the action."
            }
          ]
        },
        {
          "id": "lesson-3-translation-3",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
          "choices": [
            {
              "text": "The female servants weave the garments.",
              "correct": true,
              "feedback": "αἱ δοῦλαι is plural subject; τοὺς πέπλους is direct object."
            },
            {
              "text": "The garments weave the servants.",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural subject; τοὺς πέπλους is direct object."
            },
            {
              "text": "The servants prepare bread.",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural subject; τοὺς πέπλους is direct object."
            },
            {
              "text": "The boys learn garments.",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural subject; τοὺς πέπλους is direct object."
            }
          ]
        },
        {
          "id": "lesson-3-translation-4",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ἡ μήτηρ ταύτας τὰ ἔργα ποιεῖν κελεύει.",
          "choices": [
            {
              "text": "The mother orders these women to do the work.",
              "correct": true,
              "feedback": "ταύτας receives the command; ποιεῖν is the commanded action."
            },
            {
              "text": "These mothers do the work.",
              "correct": false,
              "feedback": "ταύτας receives the command; ποιεῖν is the commanded action."
            },
            {
              "text": "The work orders the mother.",
              "correct": false,
              "feedback": "ταύτας receives the command; ποιεῖν is the commanded action."
            },
            {
              "text": "The mother wants to become wise.",
              "correct": false,
              "feedback": "ταύτας receives the command; ποιεῖν is the commanded action."
            }
          ]
        },
        {
          "id": "lesson-3-translation-5",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ Ξενοφῶν βούλεται γράφειν.",
          "choices": [
            {
              "text": "Xenophon wants to write.",
              "correct": true,
              "feedback": "βούλεται is followed by the infinitive γράφειν."
            },
            {
              "text": "Xenophon writes.",
              "correct": false,
              "feedback": "βούλεται is followed by the infinitive γράφειν."
            },
            {
              "text": "Xenophon is written.",
              "correct": false,
              "feedback": "βούλεται is followed by the infinitive γράφειν."
            },
            {
              "text": "Xenophon orders writing.",
              "correct": false,
              "feedback": "βούλεται is followed by the infinitive γράφειν."
            }
          ]
        },
        {
          "id": "lesson-3-translation-6",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ παῖς ὑπὸ τοῦ διδασκάλου παιδεύεται.",
          "choices": [
            {
              "text": "The boy is educated by the teacher.",
              "correct": true,
              "feedback": "παιδεύεται is passive; ὑπό marks the agent."
            },
            {
              "text": "The boy educates the teacher.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπό marks the agent."
            },
            {
              "text": "The teacher wants the boy.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπό marks the agent."
            },
            {
              "text": "The boy teaches letters.",
              "correct": false,
              "feedback": "παιδεύεται is passive; ὑπό marks the agent."
            }
          ]
        },
        {
          "id": "lesson-3-translation-7",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: οὗτος ὁ διδάσκαλος γράμματα διδάσκει.",
          "choices": [
            {
              "text": "This teacher teaches letters.",
              "correct": true,
              "feedback": "οὗτος ὁ διδάσκαλος means this teacher."
            },
            {
              "text": "That teacher teaches music.",
              "correct": false,
              "feedback": "οὗτος ὁ διδάσκαλος means this teacher."
            },
            {
              "text": "This boy writes letters.",
              "correct": false,
              "feedback": "οὗτος ὁ διδάσκαλος means this teacher."
            },
            {
              "text": "These teachers teach.",
              "correct": false,
              "feedback": "οὗτος ὁ διδάσκαλος means this teacher."
            }
          ]
        },
        {
          "id": "lesson-3-translation-8",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Translate: ἐκείνη ἡ δούλη τὸν ἄρτον παρασκευάζει.",
          "choices": [
            {
              "text": "That female servant prepares the bread.",
              "correct": true,
              "feedback": "ἐκείνη ἡ δούλη means that female servant."
            },
            {
              "text": "This servant weaves the garment.",
              "correct": false,
              "feedback": "ἐκείνη ἡ δούλη means that female servant."
            },
            {
              "text": "That teacher prepares bread.",
              "correct": false,
              "feedback": "ἐκείνη ἡ δούλη means that female servant."
            },
            {
              "text": "The bread prepares the servant.",
              "correct": false,
              "feedback": "ἐκείνη ἡ δούλη means that female servant."
            }
          ]
        },
        {
          "id": "lesson-3-translation-9",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: The teacher educates the boy.",
          "choices": [
            {
              "text": "ὁ διδάσκαλος τὸν παῖδα παιδεύει.",
              "correct": true,
              "feedback": "The boy is the direct object: τὸν παῖδα."
            },
            {
              "text": "ὁ παῖς τὸν διδάσκαλον παιδεύει.",
              "correct": false,
              "feedback": "The boy is the direct object: τὸν παῖδα."
            },
            {
              "text": "ὁ διδάσκαλος τὸν παῖδα παιδεύεται.",
              "correct": false,
              "feedback": "The boy is the direct object: τὸν παῖδα."
            },
            {
              "text": "ὁ διδάσκαλος τὸν παῖδα μανθάνει.",
              "correct": false,
              "feedback": "The boy is the direct object: τὸν παῖδα."
            }
          ]
        },
        {
          "id": "lesson-3-translation-10",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: The boy wants to learn.",
          "choices": [
            {
              "text": "ὁ παῖς βούλεται μανθάνειν.",
              "correct": true,
              "feedback": "βούλεται takes the infinitive μανθάνειν."
            },
            {
              "text": "ὁ παῖς μανθάνει βούλεται.",
              "correct": false,
              "feedback": "βούλεται takes the infinitive μανθάνειν."
            },
            {
              "text": "ὁ παῖς βούλονται μανθάνειν.",
              "correct": false,
              "feedback": "βούλεται takes the infinitive μανθάνειν."
            },
            {
              "text": "ὁ παῖς μανθάνουσιν.",
              "correct": false,
              "feedback": "βούλεται takes the infinitive μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-3-translation-11",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: The father orders Xenophon to carry water.",
          "choices": [
            {
              "text": "ὁ πατὴρ κελεύει τὸν Ξενοφῶντα ὕδωρ φέρειν.",
              "correct": true,
              "feedback": "τὸν Ξενοφῶντα receives the command; φέρειν is the infinitive."
            },
            {
              "text": "ὁ Ξενοφῶν κελεύει τὸν πατέρα ὕδωρ φέρειν.",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα receives the command; φέρειν is the infinitive."
            },
            {
              "text": "ὁ πατὴρ φέρει τὸν Ξενοφῶντα.",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα receives the command; φέρειν is the infinitive."
            },
            {
              "text": "ὁ πατὴρ βούλεται ὕδωρ.",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα receives the command; φέρειν is the infinitive."
            }
          ]
        },
        {
          "id": "lesson-3-translation-12",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: These female servants weave the garments.",
          "choices": [
            {
              "text": "αὗται αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
              "correct": true,
              "feedback": "αὗται agrees with plural feminine αἱ δοῦλαι."
            },
            {
              "text": "οὗτοι αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
              "correct": false,
              "feedback": "αὗται agrees with plural feminine αἱ δοῦλαι."
            },
            {
              "text": "αὕτη ἡ δούλη τοὺς πέπλους ὑφαίνει.",
              "correct": false,
              "feedback": "αὗται agrees with plural feminine αἱ δοῦλαι."
            },
            {
              "text": "αὗται αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν.",
              "correct": false,
              "feedback": "αὗται agrees with plural feminine αἱ δοῦλαι."
            }
          ]
        },
        {
          "id": "lesson-3-translation-13",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: That teacher teaches music.",
          "choices": [
            {
              "text": "ἐκεῖνος ὁ διδάσκαλος μουσικὴν διδάσκει.",
              "correct": true,
              "feedback": "διδάσκαλος is masculine singular, so use ἐκεῖνος."
            },
            {
              "text": "ἐκείνη ὁ διδάσκαλος μουσικὴν διδάσκει.",
              "correct": false,
              "feedback": "διδάσκαλος is masculine singular, so use ἐκεῖνος."
            },
            {
              "text": "οὗτος ὁ διδάσκαλος γράμματα διδάσκει.",
              "correct": false,
              "feedback": "διδάσκαλος is masculine singular, so use ἐκεῖνος."
            },
            {
              "text": "ἐκεῖνος ὁ διδάσκαλος μουσικὴν μανθάνει.",
              "correct": false,
              "feedback": "διδάσκαλος is masculine singular, so use ἐκεῖνος."
            }
          ]
        },
        {
          "id": "lesson-3-translation-14",
          "topic": "translation",
          "category": "Translation",
          "type": "multiple_choice",
          "prompt": "Greek for: Xenophon is educated by the teacher.",
          "choices": [
            {
              "text": "ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται.",
              "correct": true,
              "feedback": "Use passive παιδεύεται with ὑπὸ τοῦ διδασκάλου."
            },
            {
              "text": "ὁ Ξενοφῶν τὸν διδάσκαλον παιδεύει.",
              "correct": false,
              "feedback": "Use passive παιδεύεται with ὑπὸ τοῦ διδασκάλου."
            },
            {
              "text": "ὁ διδάσκαλος ὑπὸ τοῦ Ξενοφῶντος παιδεύεται.",
              "correct": false,
              "feedback": "Use passive παιδεύεται with ὑπὸ τοῦ διδασκάλου."
            },
            {
              "text": "ὁ Ξενοφῶν βούλεται παιδεύειν.",
              "correct": false,
              "feedback": "Use passive παιδεύεται with ὑπὸ τοῦ διδασκάλου."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 3 Grammar Exercises",
      "threshold": 80,
      "questions": [
        {
          "id": "lesson-3-verbs-1",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφει mean?",
          "choices": [
            {
              "text": "he, she, or it writes",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-2",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does γράφουσιν mean?",
          "choices": [
            {
              "text": "they write",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-3",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνει mean?",
          "choices": [
            {
              "text": "he, she, or it learns",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-4",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does μανθάνουσιν mean?",
          "choices": [
            {
              "text": "they learn",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-5",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύει mean?",
          "choices": [
            {
              "text": "he, she, or it tends",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-6",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύουσιν mean?",
          "choices": [
            {
              "text": "they tend",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-7",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλεται mean?",
          "choices": [
            {
              "text": "he, she, or it wants",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-8",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does βούλονται mean?",
          "choices": [
            {
              "text": "they want",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-9",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύεται mean?",
          "choices": [
            {
              "text": "he, she, or it is educated",
              "correct": true,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person singular form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-10",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What does παιδεύονται mean?",
          "choices": [
            {
              "text": "they are educated",
              "correct": true,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "to write",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "I learn",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            },
            {
              "text": "you carry",
              "correct": false,
              "feedback": "Correct. This is a third-person plural form."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-11",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ διδάσκαλος γράμματα ___.",
          "choices": [
            {
              "text": "γράφει",
              "correct": true,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφειν",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            },
            {
              "text": "γράφονται",
              "correct": false,
              "feedback": "ὁ διδάσκαλος is singular. A third-person singular active verb commonly ends in -ει: γράφει."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-12",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: οἱ παῖδες τὰ γράμματα ___.",
          "choices": [
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "οἱ παῖδες is plural, so use μανθάνουσιν."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-13",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ἡ μήτηρ τὰ ἔργα ___.",
          "choices": [
            {
              "text": "σκοπεῖ",
              "correct": true,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοποῦσιν",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοπεῖν",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            },
            {
              "text": "σκοποῦνται",
              "correct": false,
              "feedback": "ἡ μήτηρ is singular, so use σκοπεῖ."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-14",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: αἱ δοῦλαι τοὺς πέπλους ___.",
          "choices": [
            {
              "text": "ὑφαίνουσιν",
              "correct": true,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνει",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνειν",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            },
            {
              "text": "ὑφαίνεται",
              "correct": false,
              "feedback": "αἱ δοῦλαι is plural, so use ὑφαίνουσιν."
            }
          ]
        },
        {
          "id": "lesson-3-verbs-15",
          "topic": "third-person-present-verbs",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ Ξενοφῶν ___ μανθάνειν.",
          "choices": [
            {
              "text": "βούλεται",
              "correct": true,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλονται",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλεσθαι",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            },
            {
              "text": "βούλει",
              "correct": false,
              "feedback": "ὁ Ξενοφῶν is singular; βούλεται is followed by the infinitive μανθάνειν."
            }
          ]
        },
        {
          "id": "lesson-3-objects-1",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
          "choices": [
            {
              "text": "τὸν ἵππον",
              "correct": true,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "θεραπεύει",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "The horse receives the action, so Greek uses the accusative: τὸν ἵππον."
            }
          ]
        },
        {
          "id": "lesson-3-objects-2",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ πατὴρ τὸν παῖδα κελεύει.",
          "choices": [
            {
              "text": "τὸν παῖδα",
              "correct": true,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "ὁ πατήρ",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "κελεύει",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "τὸν παῖδα receives the command and is accusative."
            }
          ]
        },
        {
          "id": "lesson-3-objects-3",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ἡ μήτηρ τὰ ἔργα σκοπεῖ.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "ἡ μήτηρ",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "σκοπεῖ",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            },
            {
              "text": "τῇ μητρί",
              "correct": false,
              "feedback": "τὰ ἔργα receives the action of σκοπεῖ."
            }
          ]
        },
        {
          "id": "lesson-3-objects-4",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ διδάσκαλος γράμματα γράφει.",
          "choices": [
            {
              "text": "γράμματα",
              "correct": true,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "ὁ διδάσκαλος",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "γράφει",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "γράμματα are what the teacher writes."
            }
          ]
        },
        {
          "id": "lesson-3-objects-5",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
          "choices": [
            {
              "text": "τοὺς πέπλους",
              "correct": true,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "αἱ δοῦλαι",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "ὑφαίνουσιν",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            },
            {
              "text": "τοῖς πέπλοις",
              "correct": false,
              "feedback": "τοὺς πέπλους are woven, so they are accusative direct object."
            }
          ]
        },
        {
          "id": "lesson-3-objects-6",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Choose the case of τὸν Ξενοφῶντα in ὁ παιδαγωγὸς τὸν Ξενοφῶντα ἄγει.",
          "choices": [
            {
              "text": "accusative",
              "correct": true,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "nominative",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "genitive",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            },
            {
              "text": "dative",
              "correct": false,
              "feedback": "τὸν Ξενοφῶντα is the person led."
            }
          ]
        },
        {
          "id": "lesson-3-objects-7",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "In ὁ Ξενοφῶν ξύλα κομίζει, what is the direct object?",
          "choices": [
            {
              "text": "ξύλα",
              "correct": true,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "κομίζει",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "ξύλα are what Xenophon brings."
            }
          ]
        },
        {
          "id": "lesson-3-objects-8",
          "topic": "accusative-direct-objects",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: οἱ παῖδες τὴν μουσικὴν ἀκούουσιν.",
          "choices": [
            {
              "text": "τὴν μουσικήν",
              "correct": true,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "οἱ παῖδες",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "ἀκούουσιν",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            },
            {
              "text": "τῇ μουσικῇ",
              "correct": false,
              "feedback": "τὴν μουσικήν is what the boys hear."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-1",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does γράφειν mean?",
          "choices": [
            {
              "text": "to write",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-2",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does φέρειν mean?",
          "choices": [
            {
              "text": "to carry",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-3",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does μανθάνειν mean?",
          "choices": [
            {
              "text": "to learn",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-4",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does θεραπεύειν mean?",
          "choices": [
            {
              "text": "to tend",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-5",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does φυλάσσειν mean?",
          "choices": [
            {
              "text": "to guard",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-6",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does παιδεύειν mean?",
          "choices": [
            {
              "text": "to educate",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        },
        {
          "id": "lesson-3-infinitives-7",
          "topic": "simple-infinitive-expressions",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "What does ποιεῖν mean?",
          "choices": [
            {
              "text": "to do; make",
              "correct": true,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he writes",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "they learn",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            },
            {
              "text": "he is educated",
              "correct": false,
              "feedback": "Correct. This infinitive expresses “to do” the action."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 3 Test — The Education of Xenophon",
      "threshold": 70,
      "masteryScore": 85,
      "pointsPossible": 100,
      "pointsPerQuestion": 5,
      "randomizeChoices": true,
      "categoryFeedback": {
        "Third-person verbs": "Review singular -ει versus plural -ουσι(ν).",
        "Accusative direct objects": "Review how the accusative marks the person or thing receiving the action.",
        "Infinitives": "Review infinitives in -ειν, especially after βούλομαι and κελεύω.",
        "Middle and passive forms": "Review -εται and -ονται, and contrast παιδεύει with παιδεύεται.",
        "Demonstratives and comprehension": "Review demonstrative agreement in gender, number, and case."
      },
      "questions": [
        {
          "id": "lesson-3-test-1",
          "topic": "lesson-test",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "What is the subject implied by γράφει?",
          "choices": [
            {
              "text": "I",
              "correct": false,
              "feedback": "γράφει is not first person."
            },
            {
              "text": "you",
              "correct": false,
              "feedback": "γράφει is not second person."
            },
            {
              "text": "he, she, or it",
              "correct": true,
              "feedback": "Correct. γράφει is third-person singular."
            },
            {
              "text": "they",
              "correct": false,
              "feedback": "They would use a plural form such as γράφουσιν."
            }
          ]
        },
        {
          "id": "lesson-3-test-2",
          "topic": "lesson-test",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Which verb means “they learn”?",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "μανθάνει is singular."
            },
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct. -ουσιν marks third-person plural active."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "μανθάνειν is an infinitive."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "This is middle/passive, not the active plural."
            }
          ]
        },
        {
          "id": "lesson-3-test-3",
          "topic": "lesson-test",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: οἱ παῖδες γράμματα ___.",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "οἱ παῖδες is plural."
            },
            {
              "text": "μανθάνουσιν",
              "correct": true,
              "feedback": "Correct. Use the plural verb with οἱ παῖδες."
            },
            {
              "text": "μανθάνειν",
              "correct": false,
              "feedback": "The sentence needs a finite verb."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "This is singular middle/passive."
            }
          ]
        },
        {
          "id": "lesson-3-test-4",
          "topic": "lesson-test",
          "category": "Third-person verbs",
          "type": "multiple_choice",
          "prompt": "Complete: ἡ μήτηρ τὰ ἔργα ___.",
          "choices": [
            {
              "text": "σκοπεῖ",
              "correct": true,
              "feedback": "Correct. ἡ μήτηρ is singular."
            },
            {
              "text": "σκοποῦσιν",
              "correct": false,
              "feedback": "That is plural."
            },
            {
              "text": "σκοπεῖν",
              "correct": false,
              "feedback": "That is an infinitive."
            },
            {
              "text": "σκοποῦνται",
              "correct": false,
              "feedback": "That is plural middle/passive."
            }
          ]
        },
        {
          "id": "lesson-3-test-5",
          "topic": "lesson-test",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: ὁ Ξενοφῶν τὸν ἵππον θεραπεύει.",
          "choices": [
            {
              "text": "ὁ Ξενοφῶν",
              "correct": false,
              "feedback": "This is the subject."
            },
            {
              "text": "τὸν ἵππον",
              "correct": true,
              "feedback": "Correct. The horse receives the action."
            },
            {
              "text": "θεραπεύει",
              "correct": false,
              "feedback": "This is the verb."
            },
            {
              "text": "no direct object",
              "correct": false,
              "feedback": "The sentence has a direct object."
            }
          ]
        },
        {
          "id": "lesson-3-test-6",
          "topic": "lesson-test",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ διδάσκαλος ___ παιδεύει.",
          "choices": [
            {
              "text": "ὁ παῖς",
              "correct": false,
              "feedback": "That is nominative."
            },
            {
              "text": "τοῦ παιδός",
              "correct": false,
              "feedback": "That is genitive."
            },
            {
              "text": "τὸν παῖδα",
              "correct": true,
              "feedback": "Correct. The boy is the direct object."
            },
            {
              "text": "τῷ παιδί",
              "correct": false,
              "feedback": "That is dative."
            }
          ]
        },
        {
          "id": "lesson-3-test-7",
          "topic": "lesson-test",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Identify the direct object: αἱ δοῦλαι τοὺς πέπλους ὑφαίνουσιν.",
          "choices": [
            {
              "text": "αἱ δοῦλαι",
              "correct": false,
              "feedback": "This is the subject."
            },
            {
              "text": "τοὺς πέπλους",
              "correct": true,
              "feedback": "Correct. The garments are woven."
            },
            {
              "text": "ὑφαίνουσιν",
              "correct": false,
              "feedback": "This is the verb."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "This is part of the subject phrase."
            }
          ]
        },
        {
          "id": "lesson-3-test-8",
          "topic": "lesson-test",
          "category": "Accusative direct objects",
          "type": "multiple_choice",
          "prompt": "Choose the accusative phrase.",
          "choices": [
            {
              "text": "ὁ καλὸς ἵππος",
              "correct": false,
              "feedback": "This is nominative."
            },
            {
              "text": "τοῦ καλοῦ ἵππου",
              "correct": false,
              "feedback": "This is genitive."
            },
            {
              "text": "τὸν καλὸν ἵππον",
              "correct": true,
              "feedback": "Correct. τὸν and -ον mark masculine accusative singular."
            },
            {
              "text": "τῷ καλῷ ἵππῳ",
              "correct": false,
              "feedback": "This is dative."
            }
          ]
        },
        {
          "id": "lesson-3-test-9",
          "topic": "lesson-test",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Which form means “to write”?",
          "choices": [
            {
              "text": "γράφει",
              "correct": false,
              "feedback": "This is he/she/it writes."
            },
            {
              "text": "γράφουσιν",
              "correct": false,
              "feedback": "This is they write."
            },
            {
              "text": "γράφειν",
              "correct": true,
              "feedback": "Correct. -ειν marks the infinitive here."
            },
            {
              "text": "γράφεται",
              "correct": false,
              "feedback": "This is middle/passive."
            }
          ]
        },
        {
          "id": "lesson-3-test-10",
          "topic": "lesson-test",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Complete: ὁ Ξενοφῶν βούλεται ___.",
          "choices": [
            {
              "text": "μανθάνει",
              "correct": false,
              "feedback": "Use an infinitive after βούλεται."
            },
            {
              "text": "μανθάνουσιν",
              "correct": false,
              "feedback": "This is plural finite."
            },
            {
              "text": "μανθάνειν",
              "correct": true,
              "feedback": "Correct. βούλεται takes the infinitive."
            },
            {
              "text": "μανθάνεται",
              "correct": false,
              "feedback": "This is middle/passive."
            }
          ]
        },
        {
          "id": "lesson-3-test-11",
          "topic": "lesson-test",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν.",
          "choices": [
            {
              "text": "The boy orders his father to carry water.",
              "correct": false,
              "feedback": "The subject is ὁ πατήρ."
            },
            {
              "text": "The father orders the boy to carry water.",
              "correct": true,
              "feedback": "Correct."
            },
            {
              "text": "The father carries water for the boy.",
              "correct": false,
              "feedback": "φέρειν is the commanded action."
            },
            {
              "text": "The boy wants to carry water.",
              "correct": false,
              "feedback": "The verb is κελεύει, not βούλεται."
            }
          ]
        },
        {
          "id": "lesson-3-test-12",
          "topic": "lesson-test",
          "category": "Infinitives",
          "type": "multiple_choice",
          "prompt": "In the preceding sentence, which word expresses the commanded action?",
          "choices": [
            {
              "text": "πατήρ",
              "correct": false,
              "feedback": "This names the father."
            },
            {
              "text": "κελεύει",
              "correct": false,
              "feedback": "This is the ordering verb."
            },
            {
              "text": "παῖδα",
              "correct": false,
              "feedback": "This is the person commanded."
            },
            {
              "text": "φέρειν",
              "correct": true,
              "feedback": "Correct. φέρειν is the infinitive action."
            }
          ]
        },
        {
          "id": "lesson-3-test-13",
          "topic": "lesson-test",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "What does λούεται mean here?",
          "choices": [
            {
              "text": "he washes himself",
              "correct": true,
              "feedback": "Correct. λούεται is middle here."
            },
            {
              "text": "he washes another person",
              "correct": false,
              "feedback": "That would be active in meaning."
            },
            {
              "text": "they wash themselves",
              "correct": false,
              "feedback": "That would be plural."
            },
            {
              "text": "to wash",
              "correct": false,
              "feedback": "This is not an infinitive."
            }
          ]
        },
        {
          "id": "lesson-3-test-14",
          "topic": "lesson-test",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Translate: ὁ Ξενοφῶν παιδεύεται.",
          "choices": [
            {
              "text": "Xenophon educates.",
              "correct": false,
              "feedback": "That would be active."
            },
            {
              "text": "Xenophon is educated.",
              "correct": true,
              "feedback": "Correct. παιδεύεται is passive here."
            },
            {
              "text": "Xenophon wants to educate.",
              "correct": false,
              "feedback": "That would use βούλεται."
            },
            {
              "text": "Xenophon educates them.",
              "correct": false,
              "feedback": "The verb is not active transitive here."
            }
          ]
        },
        {
          "id": "lesson-3-test-15",
          "topic": "lesson-test",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Which form is third-person plural middle/passive?",
          "choices": [
            {
              "text": "βούλεται",
              "correct": false,
              "feedback": "This is singular."
            },
            {
              "text": "βούλονται",
              "correct": true,
              "feedback": "Correct. -ονται marks third-person plural middle/passive."
            },
            {
              "text": "βούλει",
              "correct": false,
              "feedback": "This is not the requested form."
            },
            {
              "text": "βούλεσθαι",
              "correct": false,
              "feedback": "This is an infinitive."
            }
          ]
        },
        {
          "id": "lesson-3-test-16",
          "topic": "lesson-test",
          "category": "Middle and passive forms",
          "type": "multiple_choice",
          "prompt": "Which sentence is passive?",
          "choices": [
            {
              "text": "ὁ διδάσκαλος τὸν παῖδα παιδεύει.",
              "correct": false,
              "feedback": "This is active."
            },
            {
              "text": "ὁ παῖς τὸν ἵππον θεραπεύει.",
              "correct": false,
              "feedback": "This is active."
            },
            {
              "text": "ὁ παῖς ὑπὸ τοῦ διδασκάλου παιδεύεται.",
              "correct": true,
              "feedback": "Correct. παιδεύεται is passive and ὑπό marks the agent."
            },
            {
              "text": "ὁ παῖς γράμματα γράφει.",
              "correct": false,
              "feedback": "This is active."
            }
          ]
        },
        {
          "id": "lesson-3-test-17",
          "topic": "lesson-test",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the correct demonstrative: ___ ἡ δούλη.",
          "choices": [
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "This is masculine."
            },
            {
              "text": "αὕτη",
              "correct": true,
              "feedback": "Correct. δούλη is feminine."
            },
            {
              "text": "τοῦτο",
              "correct": false,
              "feedback": "This is neuter."
            },
            {
              "text": "οὗτοι",
              "correct": false,
              "feedback": "This is plural masculine."
            }
          ]
        },
        {
          "id": "lesson-3-test-18",
          "topic": "lesson-test",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "Choose the phrase meaning “that teacher.”",
          "choices": [
            {
              "text": "ἐκεῖνος ὁ διδάσκαλος",
              "correct": true,
              "feedback": "Correct. διδάσκαλος is masculine singular."
            },
            {
              "text": "ἐκείνη ὁ διδάσκαλος",
              "correct": false,
              "feedback": "The demonstrative is feminine."
            },
            {
              "text": "ἐκεῖνο ὁ διδάσκαλος",
              "correct": false,
              "feedback": "The demonstrative is neuter."
            },
            {
              "text": "ἐκεῖνον ὁ διδάσκαλος",
              "correct": false,
              "feedback": "This mixes accusative demonstrative with nominative article."
            }
          ]
        },
        {
          "id": "lesson-3-test-19",
          "topic": "lesson-test",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "According to the reading, who takes Xenophon to school?",
          "choices": [
            {
              "text": "his father",
              "correct": false,
              "feedback": "His father takes him to the farm."
            },
            {
              "text": "his mother",
              "correct": false,
              "feedback": "His mother oversees the household."
            },
            {
              "text": "the παιδαγωγός",
              "correct": true,
              "feedback": "Correct. The παιδαγωγός leads him to school."
            },
            {
              "text": "the music teacher",
              "correct": false,
              "feedback": "The music teacher teaches music."
            }
          ]
        },
        {
          "id": "lesson-3-test-20",
          "topic": "lesson-test",
          "category": "Demonstratives and comprehension",
          "type": "multiple_choice",
          "prompt": "What does Xenophon want to become?",
          "choices": [
            {
              "text": "a farmer",
              "correct": false,
              "feedback": "The final sentence says σοφὸς."
            },
            {
              "text": "a teacher",
              "correct": false,
              "feedback": "The final sentence says σοφὸς."
            },
            {
              "text": "rich",
              "correct": false,
              "feedback": "The reading does not say this."
            },
            {
              "text": "wise",
              "correct": true,
              "feedback": "Correct. σοφὸς γενέσθαι βούλεται."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-4",
    "title": "The Student and the Teacher",
    "fallbackUrl": "lesson.html?lesson=4&page=1"
  }
}$content$::jsonb AS content,
  $greek_text$Ὁ Ξενοφῶν ἐν τῇ οἰκίᾳ τοῦ πατρὸς οἰκεῖ. ὁ πατὴρ καὶ ἡ μήτηρ τὸν παῖδα φιλοῦσιν καὶ παιδεύειν βούλονται.

ὁ πατὴρ τὸν Ξενοφῶντα εἰς τὸν ἀγρὸν ἄγει. ἐκεῖ ὁ παῖς τὸν ἵππον θεραπεύει καὶ τὸν ὄνον ἄγει. ὁ πατὴρ κελεύει τὸν παῖδα ὕδωρ φέρειν καὶ τὸν κῆπον φυλάσσειν.

«οὗτος ὁ ἵππος καλός ἐστιν,» λέγει ὁ πατήρ· «ἐκεῖνος δὲ ὁ ὄνος μικρός ἐστιν. βούλομαι σε τὰ ζῷα θεραπεύειν.»

ὁ Ξενοφῶν τὸν πατέρα ἀκούει καὶ τὸ ἔργον ποιεῖ. τὸν ἵππον θεραπεύει, ὕδωρ φέρει, καὶ ξύλα εἰς τὴν οἰκίαν κομίζει.

ἐν δὲ τῇ οἰκίᾳ ἡ μήτηρ τὰ ἔργα τῶν δούλων σκοπεῖ. αἱ δοῦλαι τὸν ἄρτον παρασκευάζουσιν καὶ τοὺς πέπλους ὑφαίνουσιν. ἡ μήτηρ κελεύει ταύτας τὰ ἔργα καλῶς ποιεῖν.

«αὕτη ἡ δούλη τὸν ἄρτον παρασκευάζει,» λέγει ἡ μήτηρ· «ἐκείνη δὲ τὸν πέπλον ὑφαίνει.»

μετὰ τὰ ἔργα ὁ Ξενοφῶν λούεται καὶ ἐσθίει. ἔπειτα ὁ παιδαγωγὸς αὐτὸν εἰς τὸ διδασκαλεῖον ἄγει.

ἐν τῷ διδασκαλείῳ ὁ Ξενοφῶν ὑπὸ τοῦ διδασκάλου παιδεύεται. ὁ διδάσκαλος γράμματα γράφει καὶ τὸν παῖδα κελεύει γράφειν. ὁ Ξενοφῶν τὰ γράμματα βλέπει καὶ μανθάνει.

ὁ διδάσκαλος τὸν Ὅμηρον ἀναγιγνώσκει. ὁ Ξενοφῶν βούλεται τὰ ἔπη μανθάνειν καὶ καλῶς ἀναγιγνώσκειν. ὁ διδάσκαλος χαίρει, ὅτι ὁ παῖς φιλεῖ μανθάνειν.

οὗτος μὲν ὁ διδάσκαλος γράμματα διδάσκει· ἐκεῖνος δὲ ὁ διδάσκαλος μουσικὴν διδάσκει. οἱ παῖδες τὰ γράμματα μανθάνουσιν, τὴν μουσικὴν ἀκούουσιν, καὶ τοὺς τοῦ Ὁμήρου λόγους λέγουσιν.

ὁ Ξενοφῶν νέος ἐστίν, ἀλλὰ σοφὸς γενέσθαι βούλεται.$greek_text$::text AS greek_text,
  $translation$Xenophon lives in his father’s house. His father and mother love the boy and want to educate him.

His father leads Xenophon to the farm. There the boy tends the horse and leads the donkey. His father orders the boy to carry water and guard the garden.

“This horse is beautiful,” says his father, “but that donkey is small. I want you to tend the animals.”

Xenophon listens to his father and does the work. He tends the horse, carries water, and brings firewood into the house.

In the house, his mother oversees the work of the household servants. The female servants prepare the bread and weave the garments. His mother orders these women to do their work well.

“This servant prepares the bread,” says his mother, “but that one weaves the garment.”

After his chores, Xenophon washes himself and eats. Then the attendant leads him to school.

At school Xenophon is educated by the teacher. The teacher writes letters and orders the boy to write. Xenophon looks at the letters and learns.

The teacher reads Homer aloud. Xenophon wants to learn the verses and read well. The teacher is pleased because the boy loves to learn.

This teacher teaches letters, but that teacher teaches music. The boys learn their letters, listen to music, and recite the words of Homer.

Xenophon is young, but he wants to become wise.$translation$::text AS translation,
  $notes_markdown$The household and school scenes are plausible reconstructions for beginning Greek, not documented incidents from Xenophon’s childhood.$notes_markdown$::text AS notes_markdown,
  $source_citation$Plausible reconstruction for beginning Greek; biographical scenes are not documented incidents.$source_citation$::text AS source_citation;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
)
UPDATE public.lessons l
SET title = 'The Education of Xenophon',
    greek_title = 'Ἡ παιδεία τοῦ Ξενοφῶντος',
    grammar_focus = 'Third-person present verbs, accusative direct objects, infinitives, introductory middle/passive forms, demonstratives'
FROM lesson
WHERE l.id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
),
payload AS (
  SELECT content FROM lesson_3_education_payload
)
INSERT INTO public.lesson_content_overrides (lesson_id, content, version)
SELECT lesson.id, payload.content, 7
FROM lesson, payload
ON CONFLICT (lesson_id) DO UPDATE
SET content = EXCLUDED.content,
    version = GREATEST(public.lesson_content_overrides.version, 7),
    updated_at = now();

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
),
payload AS (
  SELECT * FROM lesson_3_education_payload
),
updated AS (
  UPDATE public.readings r
  SET title = 'Ἡ παιδεία τοῦ Ξενοφῶντος',
      greek_text = payload.greek_text,
      translation = payload.translation,
      notes_markdown = payload.notes_markdown,
      source_citation = payload.source_citation
  FROM lesson, payload
  WHERE r.lesson_id = lesson.id
  RETURNING r.id
)
INSERT INTO public.readings (lesson_id, title, greek_text, translation, notes_markdown, source_citation, sort_order)
SELECT lesson.id, 'Ἡ παιδεία τοῦ Ξενοφῶντος', payload.greek_text, payload.translation, payload.notes_markdown, payload.source_citation, 1
FROM lesson, payload
WHERE NOT EXISTS (SELECT 1 FROM updated);

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
),
payload AS (
  SELECT content FROM lesson_3_education_payload
)
UPDATE public.lesson_content_blocks b
SET title = CASE b.content->>'kind'
      WHEN 'reading' THEN 'Reading'
      WHEN 'wordStudy' THEN 'Learning Objectives'
      WHEN 'grammar' THEN 'Grammar'
      WHEN 'culture' THEN 'Culture'
      WHEN 'enrichment' THEN 'Enrichment'
      WHEN 'activities' THEN 'Activities'
      ELSE b.title
    END,
    content = jsonb_build_object('source', 'lesson_publish', 'kind', b.content->>'kind', 'value', p.content->(b.content->>'kind')),
    updated_at = now()
FROM lesson, payload p, public.lesson_segments s
WHERE b.segment_id = s.id
  AND s.lesson_id = lesson.id
  AND b.content->>'source' = 'lesson_publish'
  AND b.content->>'kind' IN ('reading', 'wordStudy', 'grammar', 'culture', 'enrichment', 'activities');

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
)
DELETE FROM public.reading_glosses rg
USING lesson
WHERE rg.lesson_id = lesson.id;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
),
reading AS (
  SELECT r.id
  FROM public.readings r, lesson
  WHERE r.lesson_id = lesson.id
  ORDER BY r.sort_order, r.id
  LIMIT 1
),
payload AS (
  SELECT content FROM lesson_3_education_payload
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
SELECT lesson_id, reading_id, greek, english, lemma, display_form, 'Guided note', jsonb_build_object('source', 'lesson_3_education_migration'), 'lesson_reading_gloss', sort_order
FROM glosses
WHERE greek IS NOT NULL AND english IS NOT NULL;

CREATE TEMP TABLE lesson_3_education_vocabulary (
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

INSERT INTO lesson_3_education_vocabulary (sort_order, category, lemma, display_form, gloss, dictionary_form, principal_parts, status, gender, article)
VALUES
    (1, $cat$Proper Names$cat$, $lemma$Ὅμηρος$lemma$, $display$Ὅμηρος, ὁ$display$, $gloss$Homer$gloss$, $dict$Ὅμηρος, Ὁμήρου, ὁ$dict$, NULL::text[], $status$proper name$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (2, $cat$New Required Vocabulary$cat$, $lemma$ἀκούω$lemma$, $display$ἀκούω$display$, $gloss$hear; listen to$gloss$, NULL, ARRAY[$part$ἀκούω$part$, $part$ἀκούσομαι$part$, $part$ἤκουσα$part$, $part$ἀκήκοα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (3, $cat$New Required Vocabulary$cat$, $lemma$ἀναγιγνώσκω$lemma$, $display$ἀναγιγνώσκω$display$, $gloss$read; read aloud$gloss$, NULL, ARRAY[$part$ἀναγιγνώσκω$part$, $part$ἀναγνώσομαι$part$, $part$ἀνέγνων$part$, $part$ἀνέγνωκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (4, $cat$New Required Vocabulary$cat$, $lemma$βλέπω$lemma$, $display$βλέπω$display$, $gloss$see; look at$gloss$, NULL, ARRAY[$part$βλέπω$part$, $part$βλέψω$part$, $part$ἔβλεψα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (5, $cat$New Required Vocabulary$cat$, $lemma$βούλομαι$lemma$, $display$βούλομαι$display$, $gloss$wish; want$gloss$, NULL, ARRAY[$part$βούλομαι$part$, $part$βουλήσομαι$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (6, $cat$New Required Vocabulary$cat$, $lemma$γίγνομαι$lemma$, $display$γενέσθαι$display$, $gloss$to become$gloss$, $dict$γίγνομαι$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (7, $cat$New Required Vocabulary$cat$, $lemma$γράμμα$lemma$, $display$γράμμα, τό$display$, $gloss$letter; written character$gloss$, $dict$γράμμα, γράμματος, τό$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (8, $cat$New Required Vocabulary$cat$, $lemma$γράφω$lemma$, $display$γράφω$display$, $gloss$write$gloss$, NULL, ARRAY[$part$γράφω$part$, $part$γράψω$part$, $part$ἔγραψα$part$, $part$γέγραφα$part$, $part$γέγραμμαι$part$, $part$ἐγράφην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (9, $cat$New Required Vocabulary$cat$, $lemma$διδάσκαλος$lemma$, $display$διδάσκαλος, ὁ$display$, $gloss$teacher$gloss$, $dict$διδάσκαλος, διδασκάλου, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (10, $cat$New Required Vocabulary$cat$, $lemma$διδασκαλεῖον$lemma$, $display$διδασκαλεῖον, τό$display$, $gloss$school$gloss$, $dict$διδασκαλεῖον, διδασκαλείου, τό$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (11, $cat$New Required Vocabulary$cat$, $lemma$διδάσκω$lemma$, $display$διδάσκω$display$, $gloss$teach$gloss$, NULL, ARRAY[$part$διδάσκω$part$, $part$διδάξω$part$, $part$ἐδίδαξα$part$, $part$δεδίδαχα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (12, $cat$New Required Vocabulary$cat$, $lemma$ἐκεῖ$lemma$, $display$ἐκεῖ$display$, $gloss$there$gloss$, NULL, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (13, $cat$New Required Vocabulary$cat$, $lemma$ἐκεῖνος$lemma$, $display$ἐκεῖνος, ἐκείνη, ἐκεῖνο$display$, $gloss$that$gloss$, $dict$ἐκεῖνος, ἐκείνη, ἐκεῖνο$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (14, $cat$New Required Vocabulary$cat$, $lemma$ἔπος$lemma$, $display$ἔπος, τό$display$, $gloss$word; verse; epic verse$gloss$, $dict$ἔπος, ἔπους, τό$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (15, $cat$New Required Vocabulary$cat$, $lemma$ἐσθίω$lemma$, $display$ἐσθίω$display$, $gloss$eat$gloss$, NULL, ARRAY[$part$ἐσθίω$part$, $part$ἔδομαι$part$, $part$ἔφαγον$part$, $part$ἐδήδοκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (16, $cat$New Required Vocabulary$cat$, $lemma$θεραπεύω$lemma$, $display$θεραπεύω$display$, $gloss$tend; care for$gloss$, NULL, ARRAY[$part$θεραπεύω$part$, $part$θεραπεύσω$part$, $part$ἐθεράπευσα$part$, $part$τεθεράπευκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (17, $cat$New Required Vocabulary$cat$, $lemma$κομίζω$lemma$, $display$κομίζω$display$, $gloss$carry; bring$gloss$, NULL, ARRAY[$part$κομίζω$part$, $part$κομιῶ$part$, $part$ἐκόμισα$part$, $part$κεκόμικα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (18, $cat$New Required Vocabulary$cat$, $lemma$λούομαι$lemma$, $display$λούομαι$display$, $gloss$wash oneself; bathe$gloss$, NULL, ARRAY[$part$λούομαι$part$, $part$λούσομαι$part$, $part$ἐλουσάμην$part$, $part$λέλουμαι$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (19, $cat$New Required Vocabulary$cat$, $lemma$μανθάνω$lemma$, $display$μανθάνω$display$, $gloss$learn$gloss$, NULL, ARRAY[$part$μανθάνω$part$, $part$μαθήσομαι$part$, $part$ἔμαθον$part$, $part$μεμάθηκα$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (20, $cat$New Required Vocabulary$cat$, $lemma$μουσική$lemma$, $display$μουσική, ἡ$display$, $gloss$music$gloss$, $dict$μουσική, μουσικῆς, ἡ$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$feminine$gender$, $article$ἡ$article$),
    (21, $cat$New Required Vocabulary$cat$, $lemma$νέος$lemma$, $display$νέος, νέα, νέον$display$, $gloss$young$gloss$, $dict$νέος, νέα, νέον$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (22, $cat$New Required Vocabulary$cat$, $lemma$οὗτος$lemma$, $display$οὗτος, αὕτη, τοῦτο$display$, $gloss$this$gloss$, $dict$οὗτος, αὕτη, τοῦτο$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (23, $cat$New Required Vocabulary$cat$, $lemma$παιδαγωγός$lemma$, $display$παιδαγωγός, ὁ$display$, $gloss$attendant who escorts and supervises a boy$gloss$, $dict$παιδαγωγός, παιδαγωγοῦ, ὁ$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (24, $cat$New Required Vocabulary$cat$, $lemma$παιδεύω$lemma$, $display$παιδεύω$display$, $gloss$educate; train$gloss$, NULL, ARRAY[$part$παιδεύω$part$, $part$παιδεύσω$part$, $part$ἐπαίδευσα$part$, $part$πεπαίδευκα$part$, $part$πεπαίδευμαι$part$, $part$ἐπαιδεύθην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (25, $cat$New Required Vocabulary$cat$, $lemma$ποιέω$lemma$, $display$ποιέω$display$, $gloss$do; make$gloss$, NULL, ARRAY[$part$ποιέω$part$, $part$ποιήσω$part$, $part$ἐποίησα$part$, $part$πεποίηκα$part$, $part$πεποίημαι$part$, $part$ἐποιήθην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (26, $cat$New Required Vocabulary$cat$, $lemma$σκοπέω$lemma$, $display$σκοπέω$display$, $gloss$examine; oversee$gloss$, NULL, ARRAY[$part$σκοπέω$part$, $part$σκέψομαι$part$, $part$ἐσκεψάμην$part$]::text[], $status$new required vocabulary$status$, NULL, NULL),
    (27, $cat$New Required Vocabulary$cat$, $lemma$σοφός$lemma$, $display$σοφός, σοφή, σοφόν$display$, $gloss$wise$gloss$, $dict$σοφός, σοφή, σοφόν$dict$, NULL::text[], $status$new required vocabulary$status$, NULL, NULL),
    (28, $cat$New Required Vocabulary$cat$, $lemma$ζῷον$lemma$, $display$ζῷον, τό$display$, $gloss$animal$gloss$, $dict$ζῷον, ζῴου, τό$dict$, NULL::text[], $status$new required vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (29, $cat$Review Vocabulary$cat$, $lemma$ἀγρός$lemma$, $display$ἀγρός, ὁ$display$, $gloss$field; farm$gloss$, $dict$ἀγρός, ἀγροῦ, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (30, $cat$Review Vocabulary$cat$, $lemma$ἄρτος$lemma$, $display$ἄρτος, ὁ$display$, $gloss$bread$gloss$, $dict$ἄρτος, ἄρτου, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (31, $cat$Review Vocabulary$cat$, $lemma$δοῦλος$lemma$, $display$δοῦλος, ὁ$display$, $gloss$male slave; male household servant$gloss$, $dict$δοῦλος, δούλου, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (32, $cat$Review Vocabulary$cat$, $lemma$δούλη$lemma$, $display$δούλη, ἡ$display$, $gloss$female slave; female household servant$gloss$, $dict$δούλη, δούλης, ἡ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$feminine$gender$, $article$ἡ$article$),
    (33, $cat$Review Vocabulary$cat$, $lemma$ἔργον$lemma$, $display$ἔργον, τό$display$, $gloss$work; task$gloss$, $dict$ἔργον, ἔργου, τό$dict$, NULL::text[], $status$review vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (34, $cat$Review Vocabulary$cat$, $lemma$ἵππος$lemma$, $display$ἵππος, ὁ$display$, $gloss$horse$gloss$, $dict$ἵππος, ἵππου, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (35, $cat$Review Vocabulary$cat$, $lemma$κελεύω$lemma$, $display$κελεύω$display$, $gloss$order; command; instruct$gloss$, NULL, ARRAY[$part$κελεύω$part$, $part$κελεύσω$part$, $part$ἐκέλευσα$part$, $part$κεκέλευκα$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (36, $cat$Review Vocabulary$cat$, $lemma$κῆπος$lemma$, $display$κῆπος, ὁ$display$, $gloss$garden$gloss$, $dict$κῆπος, κήπου, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (37, $cat$Review Vocabulary$cat$, $lemma$μήτηρ$lemma$, $display$μήτηρ, ἡ$display$, $gloss$mother$gloss$, $dict$μήτηρ, μητρός, ἡ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$feminine$gender$, $article$ἡ$article$),
    (38, $cat$Review Vocabulary$cat$, $lemma$οἰκία$lemma$, $display$οἰκία, ἡ$display$, $gloss$house$gloss$, $dict$οἰκία, οἰκίας, ἡ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$feminine$gender$, $article$ἡ$article$),
    (39, $cat$Review Vocabulary$cat$, $lemma$ὄνος$lemma$, $display$ὄνος, ὁ/ἡ$display$, $gloss$donkey$gloss$, $dict$ὄνος, ὄνου, ὁ/ἡ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine/feminine$gender$, $article$ὁ/ἡ$article$),
    (40, $cat$Review Vocabulary$cat$, $lemma$παῖς$lemma$, $display$παῖς, ὁ/ἡ$display$, $gloss$child; boy; girl$gloss$, $dict$παῖς, παιδός, ὁ/ἡ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine/feminine$gender$, $article$ὁ/ἡ$article$),
    (41, $cat$Review Vocabulary$cat$, $lemma$πατήρ$lemma$, $display$πατήρ, ὁ$display$, $gloss$father$gloss$, $dict$πατήρ, πατρός, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (42, $cat$Review Vocabulary$cat$, $lemma$πέπλος$lemma$, $display$πέπλος, ὁ$display$, $gloss$robe; garment$gloss$, $dict$πέπλος, πέπλου, ὁ$dict$, NULL::text[], $status$review vocabulary$status$, $gender$masculine$gender$, $article$ὁ$article$),
    (43, $cat$Review Vocabulary$cat$, $lemma$παρασκευάζω$lemma$, $display$παρασκευάζω$display$, $gloss$prepare$gloss$, NULL, ARRAY[$part$παρασκευάζω$part$, $part$παρασκευάσω$part$, $part$παρεσκεύασα$part$, $part$παρεσκεύακα$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (44, $cat$Review Vocabulary$cat$, $lemma$ὕδωρ$lemma$, $display$ὕδωρ, τό$display$, $gloss$water$gloss$, $dict$ὕδωρ, ὕδατος, τό$dict$, NULL::text[], $status$review vocabulary$status$, $gender$neuter$gender$, $article$τό$article$),
    (45, $cat$Review Vocabulary$cat$, $lemma$ὑφαίνω$lemma$, $display$ὑφαίνω$display$, $gloss$weave$gloss$, NULL, ARRAY[$part$ὑφαίνω$part$, $part$ὑφανῶ$part$, $part$ὕφηνα$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (46, $cat$Review Vocabulary$cat$, $lemma$φέρω$lemma$, $display$φέρω$display$, $gloss$carry; bring$gloss$, NULL, ARRAY[$part$φέρω$part$, $part$οἴσω$part$, $part$ἤνεγκα$part$, $part$ἐνήνοχα$part$, $part$ἐνήνεγμαι$part$, $part$ἠνέχθην$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (47, $cat$Review Vocabulary$cat$, $lemma$φιλέω$lemma$, $display$φιλέω$display$, $gloss$love; be fond of$gloss$, NULL, ARRAY[$part$φιλέω$part$, $part$φιλήσω$part$, $part$ἐφίλησα$part$, $part$πεφίληκα$part$, $part$πεφίλημαι$part$, $part$ἐφιλήθην$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (48, $cat$Review Vocabulary$cat$, $lemma$φυλάσσω$lemma$, $display$φυλάσσω$display$, $gloss$guard; watch over$gloss$, NULL, ARRAY[$part$φυλάσσω$part$, $part$φυλάξω$part$, $part$ἐφύλαξα$part$, $part$πεφύλαχα$part$, $part$πεφύλαγμαι$part$, $part$ἐφυλάχθην$part$]::text[], $status$review vocabulary$status$, NULL, NULL),
    (49, $cat$Review Vocabulary$cat$, $lemma$ξύλον$lemma$, $display$ξύλον, τό$display$, $gloss$wood; piece of firewood$gloss$, $dict$ξύλον, ξύλου, τό$dict$, NULL::text[], $status$review vocabulary$status$, $gender$neuter$gender$, $article$τό$article$);

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
      'source', 'lesson_3_education_migration',
      'lesson_slug', 'lesson-3',
      'category', category,
      'classification', status
    )
  FROM lesson_3_education_vocabulary
  ON CONFLICT (lemma, display_form, gloss) DO UPDATE
  SET part_of_speech = EXCLUDED.part_of_speech,
      dictionary_form = COALESCE(EXCLUDED.dictionary_form, public.vocabulary_items.dictionary_form),
      principal_parts = COALESCE(EXCLUDED.principal_parts, public.vocabulary_items.principal_parts),
      gender = COALESCE(EXCLUDED.gender, public.vocabulary_items.gender),
      article = COALESCE(EXCLUDED.article, public.vocabulary_items.article),
      morphology = COALESCE(public.vocabulary_items.morphology, '{}'::jsonb)
        || jsonb_build_object('lesson_3_education', EXCLUDED.morphology),
      updated_at = now()
  RETURNING id
)
SELECT count(*) FROM upserted;

WITH lesson AS (
  SELECT id FROM public.lessons WHERE slug = 'lesson-3'
),
new_items AS (
  SELECT DISTINCT ON (v.sort_order)
    v.sort_order,
    vi.id AS vocabulary_item_id
  FROM lesson_3_education_vocabulary v
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

DROP TABLE lesson_3_education_payload;

COMMIT;
