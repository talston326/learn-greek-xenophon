-- Publish the complete Lesson 8 household reading and learning activities.
BEGIN;
DO $lesson8$
DECLARE
+  patch jsonb := $json${
  "id": "lesson-8",
  "number": 8,
  "title": "A Household Finds a Way",
  "greekTitle": "Ἔριον καὶ ἔργον",
  "scope": "First-declension masculine and second-declension feminine nouns; adjective agreement; μέγας and πολύς; adverbs",
  "theme": "Women’s textile work and household survival in Xenophon, Memorabilia 2.7",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-8-household-banner-v3.png",
    "alt": "Four Athenian women work together with wool, a hand spindle, an upright weighted loom, and finished cloth; open courtyard space at left leaves the basket carrier visible beside the title",
    "caption": "The women’s individual identities and this working scene are a reconstruction based on Xenophon’s account."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-8-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-8-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-8-page-3",
      "title": "Work and Survival in Athens",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Nouns",
      "items": [
        {
          "greek": "ἡ οἰκία",
          "english": "house, household",
          "dictionaryForm": "οἰκία, οἰκίας, ἡ",
          "status": "required vocabulary",
          "lemma": "οἰκία",
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
          "greek": "τὸ ἔριον",
          "english": "wool",
          "dictionaryForm": "ἔριον, ἐρίου, τό",
          "status": "required vocabulary",
          "lemma": "ἔριον",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ ἔργον",
          "english": "work, task",
          "dictionaryForm": "ἔργον, ἔργου, τό",
          "status": "required vocabulary",
          "lemma": "ἔργον",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ ἱμάτιον",
          "english": "garment, clothing",
          "dictionaryForm": "ἱμάτιον, ἱματίου, τό",
          "status": "required vocabulary",
          "lemma": "ἱμάτιον",
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
          "greek": "ἡ ὁδός",
          "english": "road, way",
          "dictionaryForm": "ὁδός, ὁδοῦ, ἡ",
          "status": "required vocabulary",
          "lemma": "ὁδός",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ νεανίας",
          "english": "young man; grammar model",
          "dictionaryForm": "νεανίας, νεανίου, ὁ",
          "status": "reading vocabulary",
          "lemma": "νεανίας",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ πολίτης",
          "english": "citizen; grammar model",
          "dictionaryForm": "πολίτης, πολίτου, ὁ",
          "status": "reading vocabulary",
          "lemma": "πολίτης",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Verbs",
      "items": [
        {
          "greek": "ποιέω",
          "english": "make",
          "dictionaryForm": "ποιέω",
          "status": "required vocabulary",
          "lemma": "ποιέω",
          "audioPlaceholder": true
        },
        {
          "greek": "νήθω",
          "english": "spin wool",
          "dictionaryForm": "νήθω",
          "status": "required vocabulary",
          "lemma": "νήθω",
          "audioPlaceholder": true
        },
        {
          "greek": "ὑφαίνω",
          "english": "weave",
          "dictionaryForm": "ὑφαίνω",
          "status": "required vocabulary",
          "lemma": "ὑφαίνω",
          "audioPlaceholder": true
        },
        {
          "greek": "φέρω",
          "english": "carry, bring",
          "dictionaryForm": "φέρω",
          "status": "required vocabulary",
          "lemma": "φέρω",
          "audioPlaceholder": true
        },
        {
          "greek": "βλέπω",
          "english": "see, inspect",
          "dictionaryForm": "βλέπω",
          "status": "required vocabulary",
          "lemma": "βλέπω",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Describing and connecting",
      "items": [
        {
          "greek": "καλός, καλή, καλόν",
          "english": "good, fine",
          "dictionaryForm": "καλός, καλή, καλόν",
          "status": "required vocabulary",
          "lemma": "καλός",
          "audioPlaceholder": true
        },
        {
          "greek": "μέγας, μεγάλη, μέγα",
          "english": "large, great",
          "dictionaryForm": "μέγας, μεγάλη, μέγα",
          "status": "required vocabulary",
          "lemma": "μέγας",
          "audioPlaceholder": true
        },
        {
          "greek": "πολύς, πολλή, πολύ",
          "english": "much, many",
          "dictionaryForm": "πολύς, πολλή, πολύ",
          "status": "required vocabulary",
          "lemma": "πολύς",
          "audioPlaceholder": true
        },
        {
          "greek": "ὀλίγος, ὀλίγη, ὀλίγον",
          "english": "little, few",
          "dictionaryForm": "ὀλίγος, ὀλίγη, ὀλίγον",
          "status": "required vocabulary",
          "lemma": "ὀλίγος",
          "audioPlaceholder": true
        },
        {
          "greek": "καλῶς",
          "english": "well",
          "dictionaryForm": "καλῶς",
          "status": "required vocabulary",
          "lemma": "καλῶς",
          "audioPlaceholder": true
        },
        {
          "greek": "ταχέως",
          "english": "quickly",
          "dictionaryForm": "ταχέως",
          "status": "required vocabulary",
          "lemma": "ταχέως",
          "audioPlaceholder": true
        },
        {
          "greek": "ὕστερον",
          "english": "later",
          "dictionaryForm": "ὕστερον",
          "status": "required vocabulary",
          "lemma": "ὕστερον",
          "audioPlaceholder": true
        },
        {
          "greek": "νῦν",
          "english": "now",
          "dictionaryForm": "νῦν",
          "status": "required vocabulary",
          "lemma": "νῦν",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Ἔριον καὶ ἔργον",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "Time has passed since the reconstructed trip to Eleusis. In Athens, civil strife has left Aristarchus with sisters, nieces, and cousins in a crowded household and without the income he counted on. Socrates asks what skills the women already have.",
      "The household crisis, Socrates’ advice to Aristarchus, the purchase of wool, the women’s work, and their later teasing complaint about his idleness come from Xenophon, Memorabilia 2.7. The passage does not give the women names or record their individual conversations. Melitta, Thaleia, their planning dialogue, and Xenophon’s placement of the scene within this course sequence are reconstructions.",
      "The Greek keeps the present-tense narrative used in earlier lessons. Blue glosses support proper names, kinship terms, contractions, middle-form verbs, and other forms beyond this lesson’s production targets."
    ],
    "paragraphs": [
      {
        "greek": "ὕστερον ἐν ταῖς Ἀθήναις στάσις ἐστίν. οἱ πολέμιοι τὴν γῆν τοῦ Ἀριστάρχου ἔχουσιν. ἐν τῇ οἰκίᾳ αἱ ἀδελφαὶ καὶ αἱ ἄλλαι συγγενεῖς οἰκοῦσιν. πολλοὶ ἄνθρωποι, ὀλίγος δὲ σῖτος.",
        "gloss": [
          {
            "greek": "ὕστερον",
            "english": "later; this marks a time jump after the Eleusis reading"
          },
          {
            "greek": "στάσις",
            "english": "civil strife; supplied third-declension noun"
          },
          {
            "greek": "τοῦ Ἀριστάρχου",
            "english": "of Aristarchus"
          },
          {
            "greek": "αἱ ἄλλαι συγγενεῖς",
            "english": "the other female relatives; supplied form"
          },
          {
            "greek": "οἰκοῦσιν",
            "english": "they live; contracted verb, supplied"
          },
          {
            "greek": "ὀλίγος δὲ σῖτος",
            "english": "but little grain; δέ marks contrast"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης τὸν Ἀρίσταρχον βλέπει. «διὰ τί σκυθρωπὸς εἶ, ὦ Ἀρίσταρχε;» ὁ δὲ λέγει· «πολλαὶ γυναῖκες ἐν τῇ οἰκίᾳ εἰσίν. οἱ πολέμιοι τὴν γῆν ἔχουσιν. πῶς ἄρτον παρέχω;»",
        "gloss": [
          {
            "greek": "σκυθρωπὸς εἶ",
            "english": "you are gloomy"
          },
          {
            "greek": "ὦ Ἀρίσταρχε",
            "english": "Aristarchus!; direct address"
          },
          {
            "greek": "γυναῖκες",
            "english": "women; supplied third-declension form"
          },
          {
            "greek": "οἱ πολέμιοι",
            "english": "the enemies"
          },
          {
            "greek": "πῶς ἄρτον παρέχω;",
            "english": "How do I provide bread?; παρέχω is supplied"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης λέγει· «αἱ γυναῖκες ἱμάτια καλὰ ποιοῦσιν;» ὁ Ἀρίσταρχος λέγει· «ναί· καλῶς ποιοῦσιν.» ὁ Σωκράτης λέγει· «ἔριον φέρε. τὸ ἔργον αὐταῖς χρήσιμόν ἐστιν.»",
        "gloss": [
          {
            "greek": "ἱμάτια",
            "english": "clothes; neuter plural"
          },
          {
            "greek": "καλῶς",
            "english": "well; adverb describing how they work"
          },
          {
            "greek": "ἔριον",
            "english": "wool"
          },
          {
            "greek": "αὐταῖς",
            "english": "to them; supplied pronoun"
          },
          {
            "greek": "χρήσιμόν ἐστιν",
            "english": "it is useful"
          }
        ]
      },
      {
        "greek": "ὁ Ἀρίσταρχος ἔριον φέρει. ἐν τῇ οἰκίᾳ ἡ Μέλιττα, ἀδελφὴ τοῦ Ἀριστάρχου, τὸ ἔριον βλέπει. «τὸ ἔριον ἀγαθόν ἐστιν. τί λέγεις, ὦ Θάλεια;» ἡ Θάλεια, ἀδελφιδῆ τοῦ Ἀριστάρχου, λέγει· «ἐγὼ νήθω ταχέως.»",
        "gloss": [
          {
            "greek": "ἡ Μέλιττα",
            "english": "Melitta; an invented name for an unnamed sister"
          },
          {
            "greek": "τί λέγεις, ὦ Θάλεια;",
            "english": "What do you say, Thaleia?"
          },
          {
            "greek": "ἡ Θάλεια",
            "english": "Thaleia; an invented name for an unnamed niece"
          },
          {
            "greek": "ἀδελφιδῆ τοῦ Ἀριστάρχου",
            "english": "Aristarchus’s niece; ἀδελφιδῆ is a supplied kinship word"
          },
          {
            "greek": "νήθω",
            "english": "I spin wool"
          },
          {
            "greek": "ταχέως",
            "english": "quickly; adverb, supplied as a whole word"
          }
        ]
      },
      {
        "greek": "ἡ Μέλιττα λέγει· «σὺ μὲν ἔριον νήθεις, ἐγὼ δὲ ἱμάτιον ὑφαίνω. αἱ ἄλλαι τὰ ἱμάτια βλέπουσιν· τὰ καλὰ μένει, τὰ κακὰ πάλιν ὑφαίνομεν.» αἱ γυναῖκες τὴν γνώμην ἀκούουσιν καὶ τὸ ἔργον αὐταὶ διαιροῦσιν.",
        "gloss": [
          {
            "greek": "σὺ μὲν … ἐγὼ δὲ",
            "english": "you on one hand … I on the other; paired contrast"
          },
          {
            "greek": "ὑφαίνω",
            "english": "I weave"
          },
          {
            "greek": "τὰ καλὰ … τὰ κακὰ",
            "english": "the good pieces … the bad pieces; adjective used as a noun"
          },
          {
            "greek": "πάλιν",
            "english": "again"
          },
          {
            "greek": "τὴν γνώμην",
            "english": "the proposal or judgment"
          },
          {
            "greek": "αὐταὶ διαιροῦσιν",
            "english": "they themselves divide; both forms supplied"
          }
        ]
      },
      {
        "greek": "ἡ Θάλεια ταχέως νήθει· ἡ Μέλιττα καλῶς ὑφαίνει. αἱ ἄλλαι γυναῖκες τὰ μικρὰ καὶ τὰ μεγάλα ἱμάτια βλέπουσιν. «τὸ μικρὸν ἱμάτιον καλόν,» λέγει μία, «τὸ δὲ μέγα ἱμάτιον οὔπω καλόν.»",
        "gloss": [
          {
            "greek": "νήθει",
            "english": "she spins"
          },
          {
            "greek": "ὑφαίνει",
            "english": "she weaves"
          },
          {
            "greek": "τὰ μικρὰ καὶ τὰ μεγάλα ἱμάτια",
            "english": "the small and large garments; note irregular μεγάλα"
          },
          {
            "greek": "μία",
            "english": "one woman; supplied form"
          },
          {
            "greek": "οὔπω",
            "english": "not yet"
          }
        ]
      },
      {
        "greek": "ὕστερον πολλὰ ἱμάτια ἐν τῇ οἰκίᾳ ἐστίν. ὁ οἶκος νῦν ἄρτον ἔχει. ἡ Μέλιττα λέγει· «τὸ ἔριον οὐκ ἄρτος ἐστίν, ἀλλὰ τὸ καλὸν ἔργον ἄρτον φέρει.» ἡ Θάλεια τὴν ἀδελφὴν τοῦ Ἀριστάρχου ἀκούει καὶ γελᾷ.",
        "gloss": [
          {
            "greek": "ὕστερον",
            "english": "later"
          },
          {
            "greek": "πολλὰ ἱμάτια",
            "english": "many garments; irregular πολύς in the neuter plural"
          },
          {
            "greek": "ὁ οἶκος",
            "english": "the household"
          },
          {
            "greek": "νῦν",
            "english": "now"
          },
          {
            "greek": "γελᾷ",
            "english": "she laughs; contracted verb, supplied"
          }
        ]
      },
      {
        "greek": "ὁ Ἀρίσταρχος τὰς γυναῖκας βλέπει. «ὑμεῖς καλῶς ἐργάζεσθε,» λέγει. ἡ δὲ Θάλεια λέγει· «ἡμεῖς ἐργαζόμεθα· σὺ δὲ τί ποιεῖς;» αἱ γυναῖκες γελῶσιν. ὁ Ἀρίσταρχος πρὸς τὸν Σωκράτην βαδίζει καὶ περὶ τοῦ οἴκου λέγει.",
        "gloss": [
          {
            "greek": "ἐργάζεσθε",
            "english": "you all work; middle-form verb supplied"
          },
          {
            "greek": "ἐργαζόμεθα",
            "english": "we work; middle-form verb supplied"
          },
          {
            "greek": "γελῶσιν",
            "english": "they laugh; contracted verb, supplied"
          },
          {
            "greek": "περὶ τοῦ οἴκου",
            "english": "about the household; περί with the genitive here"
          }
        ]
      }
    ],
    "translation": "Later, there is civil strife in Athens. Enemies hold Aristarchus’s land. His sisters and other female relatives live in the house. There are many people, but little grain.\n\nSocrates sees Aristarchus. “Why are you gloomy, Aristarchus?” He replies, “Many women are in the house. Our enemies hold the land. How can I provide bread?”\n\nSocrates asks, “Do the women make good clothes?” Aristarchus says, “Yes, they make them well.” Socrates says, “Bring wool. The work is useful to them.”\n\nAristarchus brings wool. At home Melitta, his sister, looks at it. “The wool is good. What do you say, Thaleia?” Thaleia, his niece, says, “I spin quickly.”\n\nMelitta says, “You spin wool; I weave a garment. The others inspect the clothes: the good pieces stay; we weave the bad pieces again.” The women hear her proposal and divide the work themselves.\n\nThaleia spins quickly; Melitta weaves well. The other women inspect the small and large garments. “The small garment is good,” one says, “but the large garment is not yet good.”\n\nLater there are many garments in the house, and the household now has bread. Melitta says, “Wool is not bread, but good work brings bread.” Thaleia hears Aristarchus’s sister and laughs.\n\nAristarchus sees the women. “You work well,” he says. Thaleia replies, “We work; what do you do?” The women laugh. Aristarchus goes to Socrates and tells him about the household.",
    "sourceCitation": "Xenophon, Memorabilia 2.7. The women’s names and direct speech are course reconstruction. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0208%3Abook%3D2",
    "notesMarkdown": "Source-based retelling with reconstructed women’s voices. The Greek present tense is pedagogical; Xenophon does not date this conversation precisely or place Xenophon at it."
  },
  "wordStudy": {
    "label": "Word Study — Wool, Work, and a Way Forward",
    "blocks": [
      {
        "title": "A noun’s article matters",
        "practiceTopic": "word-study",
        "body": [
          "The road from Lesson 7 was ἡ ὁδός. Its article says feminine even though its -ος ending resembles many masculine nouns. Compare ὁ οἶκος, the household, and ἡ ὁδός, the road. Read the article and noun together.",
          "The core pair ἔριον (wool) and ἔργον (work) names material and skilled activity. Xenophon says Aristarchus bought wool after Socrates urged him to use the women’s existing abilities. The women’s specific plan and words in our reading are imagined.",
          "The English title “finds a way” makes a thematic link to ὁδός. It is not a quotation or a claim about Xenophon’s wording in Memorabilia 2.7."
        ],
        "display": [
          {
            "greek": "ἡ ὁδός",
            "english": "the road; feminine second declension"
          },
          {
            "greek": "τὸ ἔριον",
            "english": "the wool; material"
          },
          {
            "greek": "τὸ ἔργον",
            "english": "the work; skilled activity"
          },
          {
            "greek": "καλῶς ὑφαίνει",
            "english": "she weaves well; adverb with a verb"
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Lesson 7 completed first-declension feminine patterns and introduced ἡ ὁδός as a reading word. Lesson 8 adds masculine first-declension and feminine second-declension nouns, then uses adjectives and adverbs to describe textile work and its results.",
    "objectives": [
      "Recognize and form the case forms of first-declension masculine nouns in -ας and -ης.",
      "Decline ἡ ὁδός with feminine articles and second-declension noun endings.",
      "Match a regular first/second-declension adjective to its noun in gender, number, and case.",
      "Use the high-frequency forms of μέγας and πολύς that appear in the reading.",
      "Distinguish an adjective describing a thing from an adverb describing an action."
    ],
    "sections": [
      {
        "id": "masculine-first",
        "title": "1. First-Declension Masculine Nouns",
        "practiceTopic": "masculine-first",
        "body": [
          "Some masculine nouns end in -ας or -ης in the nominative but belong to the first declension. Their articles reveal masculine gender. Compare ὁ νεανίας, τοῦ νεανίου and ὁ πολίτης, τοῦ πολίτου; unlike the feminine nouns of Lesson 7, their genitive singular ends in -ου.",
          "The dative singular is νεανίᾳ or πολίτῃ, and the accusative singular is νεανίαν or πολίτην. In the plural, the article follows the familiar masculine pattern: οἱ, τοὺς, τῶν, τοῖς. The noun endings are -αι, -ας, -ῶν, -αις.",
          "This table is a form comparison. The main reading stays with Aristarchus’s female relatives; ὁ νεανίας and ὁ πολίτης are grammar models, not additional people in the episode."
        ],
        "table": {
          "title": "ὁ νεανίας and ὁ πολίτης",
          "headers": [
            "Case",
            "-ας singular",
            "-ης singular",
            "Plural example"
          ],
          "greekColumns": [
            1,
            2,
            3
          ],
          "rows": [
            [
              "Nominative",
              "ὁ νεανίας",
              "ὁ πολίτης",
              "οἱ νεανίαι"
            ],
            [
              "Accusative",
              "τὸν νεανίαν",
              "τὸν πολίτην",
              "τοὺς νεανίας"
            ],
            [
              "Genitive",
              "τοῦ νεανίου",
              "τοῦ πολίτου",
              "τῶν νεανιῶν"
            ],
            [
              "Dative",
              "τῷ νεανίᾳ",
              "τῷ πολίτῃ",
              "τοῖς νεανίαις"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why is ὁ νεανίας masculine?",
            "answer": "Its article is ὁ, and its genitive singular is τοῦ νεανίου."
          }
        ],
        "examples": [
          {
            "greek": "ὁ νεανίας τὸ ἔριον φέρει.",
            "english": "The young man brings the wool."
          }
        ]
      },
      {
        "id": "feminine-second",
        "title": "2. Feminine Nouns of the Second Declension",
        "practiceTopic": "feminine-second",
        "body": [
          "Lesson 7 met ἡ ὁδός, the road to Eleusis. Its -ος ending looks like many masculine second-declension nouns, yet its article is feminine. Decline the noun like a second-declension -ος noun while keeping feminine articles and adjectives.",
          "The genitive and dative singular are τῆς ὁδοῦ and τῇ ὁδῷ. The plural is αἱ ὁδοί, τὰς ὁδούς, τῶν ὁδῶν, ταῖς ὁδοῖς. The article is your reliable case and gender clue.",
          "The story moves from the literal road of Lesson 7 to a household seeking a way forward. This is an English thematic connection; the reading does not claim that Xenophon used ὁδός as a metaphor in this episode."
        ],
        "table": {
          "title": "ἡ ὁδός, ὁδοῦ",
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
              "ἡ ὁδός",
              "αἱ ὁδοί"
            ],
            [
              "Accusative",
              "τὴν ὁδόν",
              "τὰς ὁδούς"
            ],
            [
              "Genitive",
              "τῆς ὁδοῦ",
              "τῶν ὁδῶν"
            ],
            [
              "Dative",
              "τῇ ὁδῷ",
              "ταῖς ὁδοῖς"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why is τὴν ὁδόν feminine?",
            "answer": "The feminine article τὴν marks its gender even though the noun has a second-declension ending."
          }
        ],
        "examples": [
          {
            "greek": "ἡ ὁδὸς μακρά ἐστιν.",
            "english": "The road is long."
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "3. Describing People, Wool, and Clothes",
        "practiceTopic": "adjective-agreement",
        "body": [
          "A regular first/second-declension adjective such as καλός, καλή, καλόν changes to agree with its noun in gender, number, and case. In the reading, ἱμάτια καλά means good clothes: both words are neuter plural nominative or accusative by form.",
          "Compare τὸ καλὸν ἱμάτιον, τὴν καλὴν οἰκίαν, and τὸν καλὸν νεανίαν. The endings need not be identical across different declensions; the case, gender, and number must match.",
          "An adjective can also stand without a repeated noun when the context supplies it: τὰ καλά means the good pieces in the women’s inspection of garments."
        ],
        "table": {
          "title": "καλός, καλή, καλόν in useful phrases",
          "headers": [
            "Phrase",
            "Agreement",
            "Meaning"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "τὸ καλὸν ἱμάτιον",
              "neuter singular accusative",
              "the good garment"
            ],
            [
              "τὴν καλὴν οἰκίαν",
              "feminine singular accusative",
              "the good house"
            ],
            [
              "τὸν καλὸν νεανίαν",
              "masculine singular accusative",
              "the good young man"
            ],
            [
              "τὰ καλὰ ἱμάτια",
              "neuter plural accusative",
              "the good garments"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What does καλά agree with in τὰ καλὰ ἱμάτια?",
            "answer": "It agrees with ἱμάτια: neuter plural in the same case."
          }
        ],
        "examples": [
          {
            "greek": "αἱ γυναῖκες τὰ καλὰ ἱμάτια βλέπουσιν.",
            "english": "The women inspect the good garments."
          }
        ]
      },
      {
        "id": "irregular-adjectives",
        "title": "4. Two High-Frequency Adjectives: μέγας and πολύς",
        "practiceTopic": "irregular-adjectives",
        "body": [
          "μέγας, μεγάλη, μέγα means large or great. πολύς, πολλή, πολύ means much or many. Their nominative singular forms do not follow καλός, καλή, καλόν exactly, so learn their three gender forms together.",
          "The reading uses τὰ μεγάλα ἱμάτια and πολλὰ ἱμάτια. These are neuter plural forms. Also notice πολλαὶ γυναῖκες and πολλοὶ ἄνθρωποι: adjective and noun match gender and number.",
          "Only the forms used here are production targets. Other case forms of these irregular adjectives will be supplied when they appear in later readings."
        ],
        "table": {
          "title": "Basic forms for size and quantity",
          "headers": [
            "Meaning",
            "Masculine singular",
            "Feminine singular",
            "Neuter singular",
            "Neuter plural"
          ],
          "greekColumns": [
            1,
            2,
            3,
            4
          ],
          "rows": [
            [
              "large",
              "μέγας",
              "μεγάλη",
              "μέγα",
              "μεγάλα"
            ],
            [
              "much / many",
              "πολύς",
              "πολλή",
              "πολύ",
              "πολλά"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why does πολλὰ describe ἱμάτια?",
            "answer": "Both are neuter plural."
          }
        ],
        "examples": [
          {
            "greek": "πολλὰ ἱμάτια ἐν τῇ οἰκίᾳ ἐστίν.",
            "english": "Many garments are in the house."
          }
        ]
      },
      {
        "id": "adverbs",
        "title": "5. How the Work Is Done: Adverbs",
        "practiceTopic": "adverbs",
        "body": [
          "An adjective describes a noun: καλὸν ἱμάτιον, a good garment. An adverb describes an action: καλῶς ὑφαίνει, she weaves well. Many adverbs formed from first/second-declension adjectives end in -ως.",
          "The reading contrasts καλῶς (well) with ταχέως (quickly). Learn ταχέως as a word; it does not come from the καλός pattern. An adverb does not change to match the worker’s gender, number, or case.",
          "Ask “what is being described?” If it is the garment, choose an adjective. If it is the weaving, choose an adverb."
        ],
        "table": {
          "title": "Adjective or adverb?",
          "headers": [
            "Greek",
            "What it describes",
            "Meaning"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "καλὸν ἱμάτιον",
              "a noun: ἱμάτιον",
              "a good garment"
            ],
            [
              "καλῶς ὑφαίνει",
              "a verb: ὑφαίνει",
              "she weaves well"
            ],
            [
              "ταχέως νήθει",
              "a verb: νήθει",
              "she spins quickly"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What does καλῶς describe in καλῶς ὑφαίνει?",
            "answer": "It describes how she weaves, so it is an adverb."
          }
        ],
        "examples": [
          {
            "greek": "ἡ Μέλιττα καλῶς ὑφαίνει.",
            "english": "Melitta weaves well."
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "First-declension masculine: ὁ νεανίας, τοῦ νεανίου and ὁ πολίτης, τοῦ πολίτου.",
        "Feminine second-declension: ἡ ὁδός, τῆς ὁδοῦ, τῇ ὁδῷ, τὴν ὁδόν.",
        "An adjective agrees with its noun in gender, number, and case: τὰ καλὰ ἱμάτια.",
        "Learn μέγας, μεγάλη, μέγα and πολύς, πολλή, πολύ together; the reading uses μεγάλα and πολλά.",
        "An adverb describes a verb: καλῶς ὑφαίνει, she weaves well."
      ]
    }
  },
  "culture": {
    "title": "Textile Work and Household Survival",
    "banner": {
      "image": "assets/lesson-8-textile-banner.png",
      "alt": "Reconstructed Athenian courtyard with women spinning wool, weaving at an upright weighted loom, and examining fabric",
      "caption": "A visual reconstruction of spinning and weaving; the people and household details are imagined, and the small hanging clay weights represent archaeological loom weights.",
      "credit": "Original illustration generated for Learn Greek with Xenophon (2026); historical reconstruction, not an ancient artifact."
    },
    "body": [
      "In Memorabilia 2.7, Xenophon describes Aristarchus distressed during political upheaval. His sisters, nieces, and cousins have come into his household; he says there are fourteen people apart from enslaved members. Enemies control his land, and income from his property in town has also disappeared. Socrates proposes that the household use work the women already know how to do.",
      "Aristarchus borrows money to begin, buys wool, and reports that the women work productively and that the household’s mood improves. Xenophon does not name the women, quote their planning, describe their exact division of tasks, or tell us who sold each finished garment. The reading gives them imagined choices and speech so learners can see skilled workers rather than only hear men discuss them.",
      "Textile making involved preparing wool, spinning thread, and weaving cloth. A sixth-century Attic lekythos in the Metropolitan Museum shows women with hand spindles and a loom; it is earlier than this episode but helps identify the equipment. Surviving clay loom weights provide further physical evidence for upright weighted looms. The illustrations here are reconstructions, not photographs of Aristarchus’s home.",
      "This story is also evidence of limits. Socrates addresses Aristarchus, and Aristarchus controls the borrowing and purchase in Xenophon’s version. The women’s competence is essential to the outcome, yet their own words are absent. Giving them dialogue in a lesson can reveal that absence, provided the reconstruction stays clearly labeled.",
      "The passage ends with a joke at Aristarchus’s expense: he reports that the women consider him the only idle person in the household. Socrates answers with a fable about a watchdog’s protective role. Students can ask whose work Xenophon makes visible, whose judgment he reports indirectly, and how a household responds when war disrupts ordinary income."
    ],
    "questions": [
      {
        "prompt": "What crisis does Aristarchus report?",
        "answer": "Female relatives have joined a crowded household while conflict has cut off income from land and city property."
      },
      {
        "prompt": "What material does Aristarchus obtain after Socrates’ advice?",
        "answer": "He obtains money and buys wool for the women’s textile work."
      },
      {
        "prompt": "Which parts of the reading are reconstructed?",
        "answer": "The women’s names, individual speech, and exact planning and division of tasks."
      },
      {
        "prompt": "What evidence helps us picture textile work?",
        "answer": "Xenophon’s account, ancient images of spinning and weaving, and surviving loom weights."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Explain the time jump after Eleusis and identify the documented core of Memorabilia 2.7.",
        "Decline ὁ νεανίας and ἡ ὁδός with their articles.",
        "Explain why καλά agrees with ἱμάτια and why καλῶς describes ὑφαίνει.",
        "Tell which women’s actions are supported by Xenophon and which details this lesson reconstructs."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Memorabilia 2.7 (Perseus Digital Library)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0208%3Abook%3D2"
      },
      {
        "title": "The Metropolitan Museum of Art, Women in Classical Greece",
        "url": "https://www.metmuseum.org/de/essays/women-in-classical-greece"
      },
      {
        "title": "The Metropolitan Museum of Art, Attic lekythos showing women spinning and weaving",
        "url": "https://www.metmuseum.org/art/collection/search/253348"
      },
      {
        "title": "The Metropolitan Museum of Art, Greek terracotta loom weight",
        "url": "https://www.metmuseum.org/art/collection/search/252524"
      }
    ]
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 8 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "ἡ οἰκία",
          "answer": "house, household"
        },
        {
          "prompt": "ἡ ἀδελφή",
          "answer": "sister"
        },
        {
          "prompt": "τὸ ἔριον",
          "answer": "wool"
        },
        {
          "prompt": "τὸ ἔργον",
          "answer": "work, task"
        },
        {
          "prompt": "τὸ ἱμάτιον",
          "answer": "garment, clothing"
        },
        {
          "prompt": "ὁ σῖτος",
          "answer": "grain"
        },
        {
          "prompt": "ἡ ὁδός",
          "answer": "road, way"
        },
        {
          "prompt": "ὁ νεανίας",
          "answer": "young man; grammar model"
        },
        {
          "prompt": "ὁ πολίτης",
          "answer": "citizen; grammar model"
        },
        {
          "prompt": "ποιέω",
          "answer": "make"
        },
        {
          "prompt": "νήθω",
          "answer": "spin wool"
        },
        {
          "prompt": "ὑφαίνω",
          "answer": "weave"
        },
        {
          "prompt": "φέρω",
          "answer": "carry, bring"
        },
        {
          "prompt": "βλέπω",
          "answer": "see, inspect"
        },
        {
          "prompt": "καλός, καλή, καλόν",
          "answer": "good, fine"
        },
        {
          "prompt": "μέγας, μεγάλη, μέγα",
          "answer": "large, great"
        },
        {
          "prompt": "πολύς, πολλή, πολύ",
          "answer": "much, many"
        },
        {
          "prompt": "ὀλίγος, ὀλίγη, ὀλίγον",
          "answer": "little, few"
        },
        {
          "prompt": "καλῶς",
          "answer": "well"
        },
        {
          "prompt": "ταχέως",
          "answer": "quickly"
        },
        {
          "prompt": "ὕστερον",
          "answer": "later"
        },
        {
          "prompt": "νῦν",
          "answer": "now"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 8 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice required Lesson 8 words in short rounds. Reading-only grammar models remain glossed.",
      "questions": [
        {
          "id": "lesson-8-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ οἰκία mean?",
          "choices": [
            {
              "text": "carry, bring",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "house, household",
              "correct": true,
              "feedback": "Correct: ἡ οἰκία means house, household."
            },
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "road, way",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “house, household”?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "ἡ οἰκία",
              "correct": true,
              "feedback": "Correct: ἡ οἰκία means house, household."
            },
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀδελφή mean?",
          "choices": [
            {
              "text": "make",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "see, inspect",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "sister",
              "correct": true,
              "feedback": "Correct: ἡ ἀδελφή means sister."
            },
            {
              "text": "work, task",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “sister”?",
          "choices": [
            {
              "text": "νήθω",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "καλός, καλή, καλόν",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": true,
              "feedback": "Correct: ἡ ἀδελφή means sister."
            },
            {
              "text": "τὸ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἡ ἀδελφή means sister."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἔριον mean?",
          "choices": [
            {
              "text": "garment, clothing",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "spin wool",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "good, fine",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "wool",
              "correct": true,
              "feedback": "Correct: τὸ ἔριον means wool."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “wool”?",
          "choices": [
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "ὑφαίνω",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "μέγας, μεγάλη, μέγα",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "τὸ ἔριον",
              "correct": true,
              "feedback": "Correct: τὸ ἔριον means wool."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἔργον mean?",
          "choices": [
            {
              "text": "work, task",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means work, task."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "weave",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "large, great",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “work, task”?",
          "choices": [
            {
              "text": "τὸ ἔργον",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means work, task."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "πολύς, πολλή, πολύ",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἱμάτιον mean?",
          "choices": [
            {
              "text": "much, many",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "garment, clothing",
              "correct": true,
              "feedback": "Correct: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "road, way",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "carry, bring",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “garment, clothing”?",
          "choices": [
            {
              "text": "ὀλίγος, ὀλίγη, ὀλίγον",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "τὸ ἱμάτιον",
              "correct": true,
              "feedback": "Correct: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ σῖτος mean?",
          "choices": [
            {
              "text": "see, inspect",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "little, few",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "grain",
              "correct": true,
              "feedback": "Correct: ὁ σῖτος means grain."
            },
            {
              "text": "make",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “grain”?",
          "choices": [
            {
              "text": "καλός, καλή, καλόν",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "καλῶς",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            },
            {
              "text": "ὁ σῖτος",
              "correct": true,
              "feedback": "Correct: ὁ σῖτος means grain."
            },
            {
              "text": "νήθω",
              "correct": false,
              "feedback": "Review: ὁ σῖτος means grain."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ὁδός mean?",
          "choices": [
            {
              "text": "spin wool",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "good, fine",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "well",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "road, way",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, way."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “road, way”?",
          "choices": [
            {
              "text": "ὑφαίνω",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "μέγας, μεγάλη, μέγα",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "ταχέως",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, way."
            },
            {
              "text": "ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, way."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ποιέω mean?",
          "choices": [
            {
              "text": "make",
              "correct": true,
              "feedback": "Correct: ποιέω means make."
            },
            {
              "text": "weave",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            },
            {
              "text": "large, great",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            },
            {
              "text": "quickly",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “make”?",
          "choices": [
            {
              "text": "ποιέω",
              "correct": true,
              "feedback": "Correct: ποιέω means make."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            },
            {
              "text": "πολύς, πολλή, πολύ",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            },
            {
              "text": "ὕστερον",
              "correct": false,
              "feedback": "Review: ποιέω means make."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does νήθω mean?",
          "choices": [
            {
              "text": "later",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            },
            {
              "text": "spin wool",
              "correct": true,
              "feedback": "Correct: νήθω means spin wool."
            },
            {
              "text": "carry, bring",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            },
            {
              "text": "much, many",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “spin wool”?",
          "choices": [
            {
              "text": "νῦν",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            },
            {
              "text": "νήθω",
              "correct": true,
              "feedback": "Correct: νήθω means spin wool."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            },
            {
              "text": "ὀλίγος, ὀλίγη, ὀλίγον",
              "correct": false,
              "feedback": "Review: νήθω means spin wool."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὑφαίνω mean?",
          "choices": [
            {
              "text": "little, few",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            },
            {
              "text": "now",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            },
            {
              "text": "weave",
              "correct": true,
              "feedback": "Correct: ὑφαίνω means weave."
            },
            {
              "text": "see, inspect",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “weave”?",
          "choices": [
            {
              "text": "καλῶς",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            },
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            },
            {
              "text": "ὑφαίνω",
              "correct": true,
              "feedback": "Correct: ὑφαίνω means weave."
            },
            {
              "text": "καλός, καλή, καλόν",
              "correct": false,
              "feedback": "Review: ὑφαίνω means weave."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does φέρω mean?",
          "choices": [
            {
              "text": "good, fine",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "well",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "house, household",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "carry, bring",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bring."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “carry, bring”?",
          "choices": [
            {
              "text": "μέγας, μεγάλη, μέγα",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "ταχέως",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "φέρω",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bring."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does βλέπω mean?",
          "choices": [
            {
              "text": "see, inspect",
              "correct": true,
              "feedback": "Correct: βλέπω means see, inspect."
            },
            {
              "text": "large, great",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            },
            {
              "text": "quickly",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “see, inspect”?",
          "choices": [
            {
              "text": "βλέπω",
              "correct": true,
              "feedback": "Correct: βλέπω means see, inspect."
            },
            {
              "text": "πολύς, πολλή, πολύ",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            },
            {
              "text": "ὕστερον",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            },
            {
              "text": "τὸ ἔριον",
              "correct": false,
              "feedback": "Review: βλέπω means see, inspect."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does καλός, καλή, καλόν mean?",
          "choices": [
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "good, fine",
              "correct": true,
              "feedback": "Correct: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "much, many",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "later",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “good, fine”?",
          "choices": [
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "καλός, καλή, καλόν",
              "correct": true,
              "feedback": "Correct: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "ὀλίγος, ὀλίγη, ὀλίγον",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            },
            {
              "text": "νῦν",
              "correct": false,
              "feedback": "Review: καλός, καλή, καλόν means good, fine."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μέγας, μεγάλη, μέγα mean?",
          "choices": [
            {
              "text": "now",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "work, task",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "large, great",
              "correct": true,
              "feedback": "Correct: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "little, few",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “large, great”?",
          "choices": [
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "τὸ ἱμάτιον",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "μέγας, μεγάλη, μέγα",
              "correct": true,
              "feedback": "Correct: μέγας, μεγάλη, μέγα means large, great."
            },
            {
              "text": "καλῶς",
              "correct": false,
              "feedback": "Review: μέγας, μεγάλη, μέγα means large, great."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πολύς, πολλή, πολύ mean?",
          "choices": [
            {
              "text": "well",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "house, household",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "garment, clothing",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "much, many",
              "correct": true,
              "feedback": "Correct: πολύς, πολλή, πολύ means much, many."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “much, many”?",
          "choices": [
            {
              "text": "ταχέως",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: πολύς, πολλή, πολύ means much, many."
            },
            {
              "text": "πολύς, πολλή, πολύ",
              "correct": true,
              "feedback": "Correct: πολύς, πολλή, πολύ means much, many."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὀλίγος, ὀλίγη, ὀλίγον mean?",
          "choices": [
            {
              "text": "little, few",
              "correct": true,
              "feedback": "Correct: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "quickly",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “little, few”?",
          "choices": [
            {
              "text": "ὀλίγος, ὀλίγη, ὀλίγον",
              "correct": true,
              "feedback": "Correct: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "ὕστερον",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "τὸ ἔριον",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: ὀλίγος, ὀλίγη, ὀλίγον means little, few."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-17-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does καλῶς mean?",
          "choices": [
            {
              "text": "road, way",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            },
            {
              "text": "well",
              "correct": true,
              "feedback": "Correct: καλῶς means well."
            },
            {
              "text": "later",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            },
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-17-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “well”?",
          "choices": [
            {
              "text": "ποιέω",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            },
            {
              "text": "καλῶς",
              "correct": true,
              "feedback": "Correct: καλῶς means well."
            },
            {
              "text": "νῦν",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            },
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: καλῶς means well."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-18-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ταχέως mean?",
          "choices": [
            {
              "text": "work, task",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "make",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "quickly",
              "correct": true,
              "feedback": "Correct: ταχέως means quickly."
            },
            {
              "text": "now",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-18-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “quickly”?",
          "choices": [
            {
              "text": "τὸ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "νήθω",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "ταχέως",
              "correct": true,
              "feedback": "Correct: ταχέως means quickly."
            },
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-19-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὕστερον mean?",
          "choices": [
            {
              "text": "house, household",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "garment, clothing",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "spin wool",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "later",
              "correct": true,
              "feedback": "Correct: ὕστερον means later."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-19-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “later”?",
          "choices": [
            {
              "text": "ἡ ἀδελφή",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "ὁ σῖτος",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "ὑφαίνω",
              "correct": false,
              "feedback": "Review: ὕστερον means later."
            },
            {
              "text": "ὕστερον",
              "correct": true,
              "feedback": "Correct: ὕστερον means later."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-20-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does νῦν mean?",
          "choices": [
            {
              "text": "now",
              "correct": true,
              "feedback": "Correct: νῦν means now."
            },
            {
              "text": "sister",
              "correct": false,
              "feedback": "Review: νῦν means now."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: νῦν means now."
            },
            {
              "text": "weave",
              "correct": false,
              "feedback": "Review: νῦν means now."
            }
          ]
        },
        {
          "id": "lesson-8-vocab-20-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “now”?",
          "choices": [
            {
              "text": "νῦν",
              "correct": true,
              "feedback": "Correct: νῦν means now."
            },
            {
              "text": "τὸ ἔριον",
              "correct": false,
              "feedback": "Review: νῦν means now."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: νῦν means now."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: νῦν means now."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 8 Grammar Flashcards",
      "cards": [
        {
          "prompt": "ὁ νεανίας → genitive singular",
          "answer": "τοῦ νεανίου"
        },
        {
          "prompt": "ὁ πολίτης → genitive singular",
          "answer": "τοῦ πολίτου"
        },
        {
          "prompt": "ἡ ὁδός → dative singular",
          "answer": "τῇ ὁδῷ"
        },
        {
          "prompt": "ἡ ὁδός → accusative plural",
          "answer": "τὰς ὁδούς"
        },
        {
          "prompt": "μέγας / μεγάλη / μέγα",
          "answer": "large or great: masculine / feminine / neuter"
        },
        {
          "prompt": "πολύς / πολλή / πολύ",
          "answer": "much or many: masculine / feminine / neuter"
        },
        {
          "prompt": "καλὸν ἱμάτιον",
          "answer": "a good garment; adjective describes noun"
        },
        {
          "prompt": "καλῶς ὑφαίνει",
          "answer": "she weaves well; adverb describes verb"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 8 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic. Practice gives immediate feedback and does not gate the page.",
      "questions": [
        {
          "id": "lesson-8-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἔριον mean?",
          "choices": [
            {
              "text": "road",
              "correct": false,
              "feedback": "Review: ἔριον is wool, the material bought for the household."
            },
            {
              "text": "wool",
              "correct": true,
              "feedback": "Correct: ἔριον is wool, the material bought for the household."
            },
            {
              "text": "work",
              "correct": false,
              "feedback": "Review: ἔριον is wool, the material bought for the household."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ἔριον is wool, the material bought for the household."
            }
          ]
        },
        {
          "id": "lesson-8-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἔργον mean?",
          "choices": [
            {
              "text": "road",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            },
            {
              "text": "garment",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            },
            {
              "text": "work or task",
              "correct": true,
              "feedback": "Correct: ἔργον means work or task."
            },
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            }
          ]
        },
        {
          "id": "lesson-8-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which article goes with ὁδός?",
          "choices": [
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: ὁδός is feminine: ἡ ὁδός."
            },
            {
              "text": "τό",
              "correct": false,
              "feedback": "Review: ὁδός is feminine: ἡ ὁδός."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ὁδός is feminine: ἡ ὁδός."
            },
            {
              "text": "ἡ",
              "correct": true,
              "feedback": "Correct: ὁδός is feminine: ἡ ὁδός."
            }
          ]
        },
        {
          "id": "lesson-8-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which article goes with οἶκος?",
          "choices": [
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "τό",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            }
          ]
        },
        {
          "id": "lesson-8-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which phrase means “the wool”?",
          "choices": [
            {
              "text": "ὁ οἶκος",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means the wool."
            },
            {
              "text": "τὸ ἔριον",
              "correct": true,
              "feedback": "Correct: τὸ ἔριον means the wool."
            },
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means the wool."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means the wool."
            }
          ]
        },
        {
          "id": "lesson-8-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which phrase means “the work”?",
          "choices": [
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means the work."
            },
            {
              "text": "τὸ ἱμάτιον",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means the work."
            },
            {
              "text": "τὸ ἔργον",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means the work."
            },
            {
              "text": "τὸ ἔριον",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means the work."
            }
          ]
        },
        {
          "id": "lesson-8-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ὕστερον signal at the beginning of the reading?",
          "choices": [
            {
              "text": "a command",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a question",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a place name",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a later time",
              "correct": true,
              "feedback": "Correct: ὕστερον means later and marks the time jump."
            }
          ]
        },
        {
          "id": "lesson-8-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which is the dictionary citation for the feminine road?",
          "choices": [
            {
              "text": "ὁδός, ὁδοῦ, ἡ",
              "correct": true,
              "feedback": "Correct: The final ἡ shows that ὁδός is feminine."
            },
            {
              "text": "ὁδός, ὁδοῦ, ὁ",
              "correct": false,
              "feedback": "Review: The final ἡ shows that ὁδός is feminine."
            },
            {
              "text": "οἶκος, οἴκου, ὁ",
              "correct": false,
              "feedback": "Review: The final ἡ shows that ὁδός is feminine."
            },
            {
              "text": "οἰκία, οἰκίας, ἡ",
              "correct": false,
              "feedback": "Review: The final ἡ shows that ὁδός is feminine."
            }
          ]
        },
        {
          "id": "lesson-8-practice-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which word names a garment?",
          "choices": [
            {
              "text": "σῖτος",
              "correct": false,
              "feedback": "Review: ἱμάτιον means garment."
            },
            {
              "text": "ἱμάτιον",
              "correct": true,
              "feedback": "Correct: ἱμάτιον means garment."
            },
            {
              "text": "ἔριον",
              "correct": false,
              "feedback": "Review: ἱμάτιον means garment."
            },
            {
              "text": "ἔργον",
              "correct": false,
              "feedback": "Review: ἱμάτιον means garment."
            }
          ]
        },
        {
          "id": "lesson-8-practice-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which detail is supplied by Xenophon’s account?",
          "choices": [
            {
              "text": "Thaleia tests a garment.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            },
            {
              "text": "Xenophon travels with the women.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            },
            {
              "text": "Aristarchus buys wool.",
              "correct": true,
              "feedback": "Correct: Xenophon says wool was purchased."
            },
            {
              "text": "Melitta names each task.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            }
          ]
        },
        {
          "id": "lesson-8-practice-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which detail is a labeled reconstruction?",
          "choices": [
            {
              "text": "the purchase of wool",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "Socrates’ advice to Aristarchus",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "the household’s crowded state",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "the women’s individual planning dialogue",
              "correct": true,
              "feedback": "Correct: Xenophon does not preserve the women’s individual planning dialogue."
            }
          ]
        },
        {
          "id": "lesson-8-practice-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Why is “finds a way” in the English title a theme rather than a quotation?",
          "choices": [
            {
              "text": "Xenophon does not use that wording in this account.",
              "correct": true,
              "feedback": "Correct: The title is a thematic English connection, not Xenophon’s wording."
            },
            {
              "text": "The road to Eleusis is the setting of this story.",
              "correct": false,
              "feedback": "Review: The title is a thematic English connection, not Xenophon’s wording."
            },
            {
              "text": "The women do not work with wool.",
              "correct": false,
              "feedback": "Review: The title is a thematic English connection, not Xenophon’s wording."
            },
            {
              "text": "The source is a modern novel.",
              "correct": false,
              "feedback": "Review: The title is a thematic English connection, not Xenophon’s wording."
            }
          ]
        },
        {
          "id": "lesson-8-practice-013",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is nominative singular of νεανίας?",
          "choices": [
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: ὁ νεανίας is nominative singular of νεανίας."
            },
            {
              "text": "ὁ νεανίας",
              "correct": true,
              "feedback": "Correct: ὁ νεανίας is nominative singular of νεανίας."
            },
            {
              "text": "τὸν νεανίαν",
              "correct": false,
              "feedback": "Review: ὁ νεανίας is nominative singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: ὁ νεανίας is nominative singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-014",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is accusative singular of νεανίας?",
          "choices": [
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "οἱ νεανίαι",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "τὸν νεανίαν",
              "correct": true,
              "feedback": "Correct: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "ὁ νεανίας",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-015",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is genitive singular of νεανίας?",
          "choices": [
            {
              "text": "τὸν νεανίαν",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": true,
              "feedback": "Correct: τοῦ νεανίου is genitive singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-016",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is dative singular of νεανίας?",
          "choices": [
            {
              "text": "τῷ νεανίᾳ",
              "correct": true,
              "feedback": "Correct: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τὸν νεανίαν",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τοῖς νεανίαις",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-017",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is nominative plural of νεανίας?",
          "choices": [
            {
              "text": "τοῖς νεανίαις",
              "correct": false,
              "feedback": "Review: οἱ νεανίαι is nominative plural of νεανίας."
            },
            {
              "text": "οἱ νεανίαι",
              "correct": true,
              "feedback": "Correct: οἱ νεανίαι is nominative plural of νεανίας."
            },
            {
              "text": "τοὺς νεανίας",
              "correct": false,
              "feedback": "Review: οἱ νεανίαι is nominative plural of νεανίας."
            },
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: οἱ νεανίαι is nominative plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-018",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is accusative plural of νεανίας?",
          "choices": [
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "τοὺς νεανίας",
              "correct": true,
              "feedback": "Correct: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "οἱ νεανίαι",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-019",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is genitive plural of νεανίας?",
          "choices": [
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τοῖς νεανίαις",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τοὺς νεανίας",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τῶν νεανιῶν",
              "correct": true,
              "feedback": "Correct: τῶν νεανιῶν is genitive plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-020",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which phrase is dative plural of νεανίας?",
          "choices": [
            {
              "text": "τοῖς νεανίαις",
              "correct": true,
              "feedback": "Correct: τοῖς νεανίαις is dative plural of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: τοῖς νεανίαις is dative plural of νεανίας."
            },
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: τοῖς νεανίαις is dative plural of νεανίας."
            },
            {
              "text": "οἱ νεανίαι",
              "correct": false,
              "feedback": "Review: τοῖς νεανίαις is dative plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-practice-021",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which genitive singular belongs to ὁ πολίτης?",
          "choices": [
            {
              "text": "τῷ πολίτῃ",
              "correct": false,
              "feedback": "Review: First-declension masculine ὁ πολίτης has genitive τοῦ πολίτου."
            },
            {
              "text": "τοῦ πολίτου",
              "correct": true,
              "feedback": "Correct: First-declension masculine ὁ πολίτης has genitive τοῦ πολίτου."
            },
            {
              "text": "τῆς πολίτης",
              "correct": false,
              "feedback": "Review: First-declension masculine ὁ πολίτης has genitive τοῦ πολίτου."
            },
            {
              "text": "τὸν πολίτην",
              "correct": false,
              "feedback": "Review: First-declension masculine ὁ πολίτης has genitive τοῦ πολίτου."
            }
          ]
        },
        {
          "id": "lesson-8-practice-022",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Which dative singular belongs to ὁ πολίτης?",
          "choices": [
            {
              "text": "τὸν πολίτην",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "οἱ πολῖται",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "τῷ πολίτῃ",
              "correct": true,
              "feedback": "Correct: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "τοῦ πολίτου",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            }
          ]
        },
        {
          "id": "lesson-8-practice-023",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "What marks νεανίας as masculine?",
          "choices": [
            {
              "text": "its ending -ας alone",
              "correct": false,
              "feedback": "Review: The article ὁ identifies masculine gender."
            },
            {
              "text": "the English word young",
              "correct": false,
              "feedback": "Review: The article ὁ identifies masculine gender."
            },
            {
              "text": "its plural -αι",
              "correct": false,
              "feedback": "Review: The article ὁ identifies masculine gender."
            },
            {
              "text": "its article ὁ",
              "correct": true,
              "feedback": "Correct: The article ὁ identifies masculine gender."
            }
          ]
        },
        {
          "id": "lesson-8-practice-024",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "What is distinctive about the genitive singular of first-declension masculine nouns here?",
          "choices": [
            {
              "text": "it ends in -ου",
              "correct": true,
              "feedback": "Correct: νεανίου and πολίτου have -ου in the genitive singular."
            },
            {
              "text": "it ends in -ης",
              "correct": false,
              "feedback": "Review: νεανίου and πολίτου have -ου in the genitive singular."
            },
            {
              "text": "it ends in -αις",
              "correct": false,
              "feedback": "Review: νεανίου and πολίτου have -ου in the genitive singular."
            },
            {
              "text": "it has no article",
              "correct": false,
              "feedback": "Review: νεανίου and πολίτου have -ου in the genitive singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-025",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is nominative singular?",
          "choices": [
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: ἡ ὁδός is nominative singular."
            },
            {
              "text": "ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός is nominative singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: ἡ ὁδός is nominative singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: ἡ ὁδός is nominative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-026",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is accusative singular?",
          "choices": [
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": true,
              "feedback": "Correct: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-027",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is genitive singular?",
          "choices": [
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": true,
              "feedback": "Correct: τῆς ὁδοῦ is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-028",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is dative singular?",
          "choices": [
            {
              "text": "τῇ ὁδῷ",
              "correct": true,
              "feedback": "Correct: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "ταῖς ὁδοῖς",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-029",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is nominative plural?",
          "choices": [
            {
              "text": "ταῖς ὁδοῖς",
              "correct": false,
              "feedback": "Review: αἱ ὁδοί is nominative plural."
            },
            {
              "text": "αἱ ὁδοί",
              "correct": true,
              "feedback": "Correct: αἱ ὁδοί is nominative plural."
            },
            {
              "text": "τὰς ὁδούς",
              "correct": false,
              "feedback": "Review: αἱ ὁδοί is nominative plural."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": false,
              "feedback": "Review: αἱ ὁδοί is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-030",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is accusative plural?",
          "choices": [
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τὰς ὁδούς is accusative plural."
            },
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: τὰς ὁδούς is accusative plural."
            },
            {
              "text": "τὰς ὁδούς",
              "correct": true,
              "feedback": "Correct: τὰς ὁδούς is accusative plural."
            },
            {
              "text": "αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: τὰς ὁδούς is accusative plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-031",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is genitive plural?",
          "choices": [
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "ταῖς ὁδοῖς",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "τὰς ὁδούς",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": true,
              "feedback": "Correct: τῶν ὁδῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-032",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is dative plural?",
          "choices": [
            {
              "text": "ταῖς ὁδοῖς",
              "correct": true,
              "feedback": "Correct: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-033",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Why is ὁδός feminine despite its -ος ending?",
          "choices": [
            {
              "text": "it is plural",
              "correct": false,
              "feedback": "Review: The article ἡ identifies its feminine gender."
            },
            {
              "text": "its article is ἡ",
              "correct": true,
              "feedback": "Correct: The article ἡ identifies its feminine gender."
            },
            {
              "text": "all -ος nouns are feminine",
              "correct": false,
              "feedback": "Review: The article ἡ identifies its feminine gender."
            },
            {
              "text": "its article is ὁ",
              "correct": false,
              "feedback": "Review: The article ἡ identifies its feminine gender."
            }
          ]
        },
        {
          "id": "lesson-8-practice-034",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Which phrase means “on the road” after ἐπί with a dative?",
          "choices": [
            {
              "text": "ἐπὶ τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ τῇ ὁδῷ",
              "correct": true,
              "feedback": "Correct: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-035",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "What ending does ὁδός use in the genitive singular?",
          "choices": [
            {
              "text": "-ης",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ has the second-declension genitive -ου."
            },
            {
              "text": "-ας",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ has the second-declension genitive -ου."
            },
            {
              "text": "-αι",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ has the second-declension genitive -ου."
            },
            {
              "text": "-ου",
              "correct": true,
              "feedback": "Correct: τῆς ὁδοῦ has the second-declension genitive -ου."
            }
          ]
        },
        {
          "id": "lesson-8-practice-036",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "What should you check first when an -ος noun may be feminine?",
          "choices": [
            {
              "text": "its article or dictionary citation",
              "correct": true,
              "feedback": "Correct: The article or dictionary citation identifies its gender."
            },
            {
              "text": "its English translation only",
              "correct": false,
              "feedback": "Review: The article or dictionary citation identifies its gender."
            },
            {
              "text": "the preceding verb ending",
              "correct": false,
              "feedback": "Review: The article or dictionary citation identifies its gender."
            },
            {
              "text": "the sentence length",
              "correct": false,
              "feedback": "Review: The article or dictionary citation identifies its gender."
            }
          ]
        },
        {
          "id": "lesson-8-practice-037",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "What does καλά describe in τὰ καλὰ ἱμάτια?",
          "choices": [
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: καλά agrees with neuter plural ἱμάτια."
            },
            {
              "text": "the garments",
              "correct": true,
              "feedback": "Correct: καλά agrees with neuter plural ἱμάτια."
            },
            {
              "text": "the weaving action",
              "correct": false,
              "feedback": "Review: καλά agrees with neuter plural ἱμάτια."
            },
            {
              "text": "the household",
              "correct": false,
              "feedback": "Review: καλά agrees with neuter plural ἱμάτια."
            }
          ]
        },
        {
          "id": "lesson-8-practice-038",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which phrase means “the good garment”?",
          "choices": [
            {
              "text": "ὁ καλὸς ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "τὰ καλὰ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": true,
              "feedback": "Correct: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "ἡ καλὴ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            }
          ]
        },
        {
          "id": "lesson-8-practice-039",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which phrase means “the good house” as direct object?",
          "choices": [
            {
              "text": "τὸ καλὸν οἰκίαν",
              "correct": false,
              "feedback": "Review: οἰκίαν is feminine accusative singular."
            },
            {
              "text": "τὴν καλὸν οἰκίαν",
              "correct": false,
              "feedback": "Review: οἰκίαν is feminine accusative singular."
            },
            {
              "text": "ἡ καλὴ οἰκίαν",
              "correct": false,
              "feedback": "Review: οἰκίαν is feminine accusative singular."
            },
            {
              "text": "τὴν καλὴν οἰκίαν",
              "correct": true,
              "feedback": "Correct: οἰκίαν is feminine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-040",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which phrase means “the good young man” as direct object?",
          "choices": [
            {
              "text": "τὸν καλὸν νεανίαν",
              "correct": true,
              "feedback": "Correct: νεανίαν is masculine accusative singular."
            },
            {
              "text": "τὴν καλὴν νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            },
            {
              "text": "τὸ καλὸν νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            },
            {
              "text": "ὁ καλὸς νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-041",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which adjective agrees with ἱμάτια?",
          "choices": [
            {
              "text": "καλόν",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural, matching καλά."
            },
            {
              "text": "καλά",
              "correct": true,
              "feedback": "Correct: ἱμάτια is neuter plural, matching καλά."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural, matching καλά."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural, matching καλά."
            }
          ]
        },
        {
          "id": "lesson-8-practice-042",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which adjective agrees with γυναῖκες?",
          "choices": [
            {
              "text": "καλά",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural, matching καλαί."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural, matching καλαί."
            },
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: γυναῖκες is feminine plural, matching καλαί."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural, matching καλαί."
            }
          ]
        },
        {
          "id": "lesson-8-practice-043",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "In τὰ καλὰ ἱμάτια, what are the gender and number?",
          "choices": [
            {
              "text": "masculine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "feminine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "masculine plural",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "neuter plural",
              "correct": true,
              "feedback": "Correct: Both καλὰ and ἱμάτια are neuter plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-044",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "What does τὰ καλά mean when the garments are already understood?",
          "choices": [
            {
              "text": "the good pieces",
              "correct": true,
              "feedback": "Correct: An adjective can stand for the understood good garments."
            },
            {
              "text": "she works well",
              "correct": false,
              "feedback": "Review: An adjective can stand for the understood good garments."
            },
            {
              "text": "the large house",
              "correct": false,
              "feedback": "Review: An adjective can stand for the understood good garments."
            },
            {
              "text": "the good woman",
              "correct": false,
              "feedback": "Review: An adjective can stand for the understood good garments."
            }
          ]
        },
        {
          "id": "lesson-8-practice-045",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Do matching adjective and noun always have identical letter endings?",
          "choices": [
            {
              "text": "Yes; only the article changes.",
              "correct": false,
              "feedback": "Review: Agreement is in gender, number, and case, not necessarily identical letters."
            },
            {
              "text": "No; they must match gender, number, and case.",
              "correct": true,
              "feedback": "Correct: Agreement is in gender, number, and case, not necessarily identical letters."
            },
            {
              "text": "Yes; every ending must be spelled alike.",
              "correct": false,
              "feedback": "Review: Agreement is in gender, number, and case, not necessarily identical letters."
            },
            {
              "text": "No; adjectives never inflect.",
              "correct": false,
              "feedback": "Review: Agreement is in gender, number, and case, not necessarily identical letters."
            }
          ]
        },
        {
          "id": "lesson-8-practice-046",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which phrase is feminine nominative singular?",
          "choices": [
            {
              "text": "ὁ καλὸς νεανίας",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "τὰ καλὰ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "ἡ καλὴ οἰκία",
              "correct": true,
              "feedback": "Correct: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            }
          ]
        },
        {
          "id": "lesson-8-practice-047",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which phrase is neuter accusative plural?",
          "choices": [
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": false,
              "feedback": "Review: τὰ καλὰ ἱμάτια is neuter accusative plural."
            },
            {
              "text": "τὴν καλὴν οἰκίαν",
              "correct": false,
              "feedback": "Review: τὰ καλὰ ἱμάτια is neuter accusative plural."
            },
            {
              "text": "τὸν καλὸν νεανίαν",
              "correct": false,
              "feedback": "Review: τὰ καλὰ ἱμάτια is neuter accusative plural."
            },
            {
              "text": "τὰ καλὰ ἱμάτια",
              "correct": true,
              "feedback": "Correct: τὰ καλὰ ἱμάτια is neuter accusative plural."
            }
          ]
        },
        {
          "id": "lesson-8-practice-048",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Which word describes a noun in καλὸν ἱμάτιον?",
          "choices": [
            {
              "text": "καλόν",
              "correct": true,
              "feedback": "Correct: καλόν is an adjective describing ἱμάτιον."
            },
            {
              "text": "καλῶς",
              "correct": false,
              "feedback": "Review: καλόν is an adjective describing ἱμάτιον."
            },
            {
              "text": "νήθει",
              "correct": false,
              "feedback": "Review: καλόν is an adjective describing ἱμάτιον."
            },
            {
              "text": "ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλόν is an adjective describing ἱμάτιον."
            }
          ]
        },
        {
          "id": "lesson-8-practice-049",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the feminine singular of μέγας?",
          "choices": [
            {
              "text": "πολλή",
              "correct": false,
              "feedback": "Review: The feminine singular is μεγάλη."
            },
            {
              "text": "μεγάλη",
              "correct": true,
              "feedback": "Correct: The feminine singular is μεγάλη."
            },
            {
              "text": "μέγα",
              "correct": false,
              "feedback": "Review: The feminine singular is μεγάλη."
            },
            {
              "text": "μεγάλα",
              "correct": false,
              "feedback": "Review: The feminine singular is μεγάλη."
            }
          ]
        },
        {
          "id": "lesson-8-practice-050",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the neuter singular of μέγας?",
          "choices": [
            {
              "text": "μεγάλα",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            },
            {
              "text": "μέγας",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            },
            {
              "text": "μέγα",
              "correct": true,
              "feedback": "Correct: The neuter singular is μέγα."
            },
            {
              "text": "μεγάλη",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            }
          ]
        },
        {
          "id": "lesson-8-practice-051",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the neuter plural of μέγας?",
          "choices": [
            {
              "text": "μέγα",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μεγάλη",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μέγας",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μεγάλα",
              "correct": true,
              "feedback": "Correct: The neuter plural is μεγάλα."
            }
          ]
        },
        {
          "id": "lesson-8-practice-052",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the feminine singular of πολύς?",
          "choices": [
            {
              "text": "πολλή",
              "correct": true,
              "feedback": "Correct: The feminine singular is πολλή."
            },
            {
              "text": "πολύ",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            },
            {
              "text": "πολλά",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            },
            {
              "text": "πολύς",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            }
          ]
        },
        {
          "id": "lesson-8-practice-053",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the neuter singular of πολύς?",
          "choices": [
            {
              "text": "πολύς",
              "correct": false,
              "feedback": "Review: The neuter singular is πολύ."
            },
            {
              "text": "πολύ",
              "correct": true,
              "feedback": "Correct: The neuter singular is πολύ."
            },
            {
              "text": "πολλή",
              "correct": false,
              "feedback": "Review: The neuter singular is πολύ."
            },
            {
              "text": "πολλά",
              "correct": false,
              "feedback": "Review: The neuter singular is πολύ."
            }
          ]
        },
        {
          "id": "lesson-8-practice-054",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which is the neuter plural of πολύς?",
          "choices": [
            {
              "text": "πολλή",
              "correct": false,
              "feedback": "Review: The neuter plural is πολλά."
            },
            {
              "text": "πολύς",
              "correct": false,
              "feedback": "Review: The neuter plural is πολλά."
            },
            {
              "text": "πολλά",
              "correct": true,
              "feedback": "Correct: The neuter plural is πολλά."
            },
            {
              "text": "πολύ",
              "correct": false,
              "feedback": "Review: The neuter plural is πολλά."
            }
          ]
        },
        {
          "id": "lesson-8-practice-055",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which means “many garments”?",
          "choices": [
            {
              "text": "πολλὴ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολὺ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλοὶ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλὰ ἱμάτια",
              "correct": true,
              "feedback": "Correct: ἱμάτια is neuter plural and takes πολλά."
            }
          ]
        },
        {
          "id": "lesson-8-practice-056",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which means “large garments”?",
          "choices": [
            {
              "text": "μεγάλα ἱμάτια",
              "correct": true,
              "feedback": "Correct: ἱμάτια is neuter plural and takes μεγάλα."
            },
            {
              "text": "μεγάλη ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes μεγάλα."
            },
            {
              "text": "μέγα ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes μεγάλα."
            },
            {
              "text": "μέγας ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes μεγάλα."
            }
          ]
        },
        {
          "id": "lesson-8-practice-057",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which means “many women”?",
          "choices": [
            {
              "text": "πολλὴ γυναῖκες",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural and takes πολλαί."
            },
            {
              "text": "πολλαὶ γυναῖκες",
              "correct": true,
              "feedback": "Correct: γυναῖκες is feminine plural and takes πολλαί."
            },
            {
              "text": "πολλοὶ γυναῖκες",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural and takes πολλαί."
            },
            {
              "text": "πολλὰ γυναῖκες",
              "correct": false,
              "feedback": "Review: γυναῖκες is feminine plural and takes πολλαί."
            }
          ]
        },
        {
          "id": "lesson-8-practice-058",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Which means “many people” with ἄνθρωποι?",
          "choices": [
            {
              "text": "πολλὰ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολὺ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολλοὶ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολλαὶ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            }
          ]
        },
        {
          "id": "lesson-8-practice-059",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "What does μεγάλα describe in τὰ μεγάλα ἱμάτια?",
          "choices": [
            {
              "text": "the speed of spinning",
              "correct": false,
              "feedback": "Review: μεγάλα describes large garments."
            },
            {
              "text": "the quantity of wool",
              "correct": false,
              "feedback": "Review: μεγάλα describes large garments."
            },
            {
              "text": "the age of the women",
              "correct": false,
              "feedback": "Review: μεγάλα describes large garments."
            },
            {
              "text": "the size of the garments",
              "correct": true,
              "feedback": "Correct: μεγάλα describes large garments."
            }
          ]
        },
        {
          "id": "lesson-8-practice-060",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "What does πολλά describe in πολλὰ ἱμάτια?",
          "choices": [
            {
              "text": "the number of garments",
              "correct": true,
              "feedback": "Correct: πολλά describes many garments."
            },
            {
              "text": "the quality of weaving",
              "correct": false,
              "feedback": "Review: πολλά describes many garments."
            },
            {
              "text": "the size of each garment",
              "correct": false,
              "feedback": "Review: πολλά describes many garments."
            },
            {
              "text": "the speed of spinning",
              "correct": false,
              "feedback": "Review: πολλά describes many garments."
            }
          ]
        },
        {
          "id": "lesson-8-practice-061",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which means “she weaves well”?",
          "choices": [
            {
              "text": "καλοί ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            },
            {
              "text": "καλῶς ὑφαίνει",
              "correct": true,
              "feedback": "Correct: καλῶς describes how she weaves."
            },
            {
              "text": "καλὸν ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            },
            {
              "text": "καλὴ ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            }
          ]
        },
        {
          "id": "lesson-8-practice-062",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which means “she spins quickly”?",
          "choices": [
            {
              "text": "ταχεῖα νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            },
            {
              "text": "μέγα νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            },
            {
              "text": "ταχέως νήθει",
              "correct": true,
              "feedback": "Correct: ταχέως is the adverb quickly."
            },
            {
              "text": "καλὸν νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            }
          ]
        },
        {
          "id": "lesson-8-practice-063",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "What does καλῶς modify in καλῶς ὑφαίνει?",
          "choices": [
            {
              "text": "the noun ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς describes the weaving action."
            },
            {
              "text": "the noun οἰκία",
              "correct": false,
              "feedback": "Review: καλῶς describes the weaving action."
            },
            {
              "text": "the article ἡ",
              "correct": false,
              "feedback": "Review: καλῶς describes the weaving action."
            },
            {
              "text": "the verb ὑφαίνει",
              "correct": true,
              "feedback": "Correct: καλῶς describes the weaving action."
            }
          ]
        },
        {
          "id": "lesson-8-practice-064",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "What does καλόν modify in καλὸν ἱμάτιον?",
          "choices": [
            {
              "text": "the noun ἱμάτιον",
              "correct": true,
              "feedback": "Correct: καλόν describes the garment."
            },
            {
              "text": "the verb ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the adverb ταχέως",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the verb νήθει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            }
          ]
        },
        {
          "id": "lesson-8-practice-065",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which word is an adverb?",
          "choices": [
            {
              "text": "καλόν",
              "correct": false,
              "feedback": "Review: καλῶς means well and describes an action."
            },
            {
              "text": "καλῶς",
              "correct": true,
              "feedback": "Correct: καλῶς means well and describes an action."
            },
            {
              "text": "καλός",
              "correct": false,
              "feedback": "Review: καλῶς means well and describes an action."
            },
            {
              "text": "καλή",
              "correct": false,
              "feedback": "Review: καλῶς means well and describes an action."
            }
          ]
        },
        {
          "id": "lesson-8-practice-066",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which word is an adjective?",
          "choices": [
            {
              "text": "ταχέως",
              "correct": false,
              "feedback": "Review: καλόν is an adjective form of καλός."
            },
            {
              "text": "ὕστερον",
              "correct": false,
              "feedback": "Review: καλόν is an adjective form of καλός."
            },
            {
              "text": "καλόν",
              "correct": true,
              "feedback": "Correct: καλόν is an adjective form of καλός."
            },
            {
              "text": "καλῶς",
              "correct": false,
              "feedback": "Review: καλόν is an adjective form of καλός."
            }
          ]
        },
        {
          "id": "lesson-8-practice-067",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Does καλῶς change to agree with Melitta?",
          "choices": [
            {
              "text": "Yes; it becomes καλή.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "Yes; it becomes καλά.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "Yes; it becomes καλόν.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "No; an adverb does not agree with a noun.",
              "correct": true,
              "feedback": "Correct: Adverbs do not agree in gender, number, or case."
            }
          ]
        },
        {
          "id": "lesson-8-practice-068",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which asks how the woman works?",
          "choices": [
            {
              "text": "καλῶς",
              "correct": true,
              "feedback": "Correct: καλῶς tells how an action is done."
            },
            {
              "text": "ἔριον",
              "correct": false,
              "feedback": "Review: καλῶς tells how an action is done."
            },
            {
              "text": "οἰκία",
              "correct": false,
              "feedback": "Review: καλῶς tells how an action is done."
            },
            {
              "text": "ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς tells how an action is done."
            }
          ]
        },
        {
          "id": "lesson-8-practice-069",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which phrase describes the quality of a garment?",
          "choices": [
            {
              "text": "ὕστερον ἔρχεται",
              "correct": false,
              "feedback": "Review: καλὸν is an adjective describing ἱμάτιον."
            },
            {
              "text": "καλὸν ἱμάτιον",
              "correct": true,
              "feedback": "Correct: καλὸν is an adjective describing ἱμάτιον."
            },
            {
              "text": "καλῶς ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλὸν is an adjective describing ἱμάτιον."
            },
            {
              "text": "ταχέως νήθει",
              "correct": false,
              "feedback": "Review: καλὸν is an adjective describing ἱμάτιον."
            }
          ]
        },
        {
          "id": "lesson-8-practice-070",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which phrase describes the manner of weaving?",
          "choices": [
            {
              "text": "καλὴ οἰκία",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "μέγα ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "καλῶς ὑφαίνει",
              "correct": true,
              "feedback": "Correct: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "καλὸν ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            }
          ]
        },
        {
          "id": "lesson-8-practice-071",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "How should ταχέως be learned in this lesson?",
          "choices": [
            {
              "text": "as a case form of ὁδός",
              "correct": false,
              "feedback": "Review: ταχέως is a supplied adverb learned as a word."
            },
            {
              "text": "as the feminine of καλός",
              "correct": false,
              "feedback": "Review: ταχέως is a supplied adverb learned as a word."
            },
            {
              "text": "as a plural noun",
              "correct": false,
              "feedback": "Review: ταχέως is a supplied adverb learned as a word."
            },
            {
              "text": "as the whole word “quickly”",
              "correct": true,
              "feedback": "Correct: ταχέως is a supplied adverb learned as a word."
            }
          ]
        },
        {
          "id": "lesson-8-practice-072",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Which pairing is correct?",
          "choices": [
            {
              "text": "καλόν describes a noun; καλῶς describes a verb.",
              "correct": true,
              "feedback": "Correct: Adjectives describe nouns; adverbs describe actions."
            },
            {
              "text": "καλῶς describes a noun; καλόν describes a verb.",
              "correct": false,
              "feedback": "Review: Adjectives describe nouns; adverbs describe actions."
            },
            {
              "text": "Both are nouns.",
              "correct": false,
              "feedback": "Review: Adjectives describe nouns; adverbs describe actions."
            },
            {
              "text": "Both are verb endings.",
              "correct": false,
              "feedback": "Review: Adjectives describe nouns; adverbs describe actions."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 8 Grammar Exercises",
      "description": "Declension variants, adjective agreement, and adverbs",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-8-grammar-exercises-v1",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-8-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Grammar exercise 1: What does ἔργον mean?",
          "choices": [
            {
              "text": "garment",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            },
            {
              "text": "work or task",
              "correct": true,
              "feedback": "Correct: ἔργον means work or task."
            },
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            },
            {
              "text": "road",
              "correct": false,
              "feedback": "Review: ἔργον means work or task."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Grammar exercise 2: Which article goes with οἶκος?",
          "choices": [
            {
              "text": "τό",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: οἶκος is masculine: ὁ οἶκος."
            },
            {
              "text": "ἡ",
              "correct": false,
              "feedback": "Review: οἶκος is masculine: ὁ οἶκος."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Grammar exercise 3: What does ὕστερον signal at the beginning of the reading?",
          "choices": [
            {
              "text": "a command",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a question",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a place name",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a later time",
              "correct": true,
              "feedback": "Correct: ὕστερον means later and marks the time jump."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Grammar exercise 4: Which detail is supplied by Xenophon’s account?",
          "choices": [
            {
              "text": "Aristarchus buys wool.",
              "correct": true,
              "feedback": "Correct: Xenophon says wool was purchased."
            },
            {
              "text": "Melitta names each task.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            },
            {
              "text": "Thaleia tests a garment.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            },
            {
              "text": "Xenophon travels with the women.",
              "correct": false,
              "feedback": "Review: Xenophon says wool was purchased."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Grammar exercise 5: Which phrase is accusative singular of νεανίας?",
          "choices": [
            {
              "text": "οἱ νεανίαι",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "τὸν νεανίαν",
              "correct": true,
              "feedback": "Correct: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "ὁ νεανίας",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τὸν νεανίαν is accusative singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Grammar exercise 6: Which phrase is dative singular of νεανίας?",
          "choices": [
            {
              "text": "τὸν νεανίαν",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τοῖς νεανίαις",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": true,
              "feedback": "Correct: τῷ νεανίᾳ is dative singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τῷ νεανίᾳ is dative singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Grammar exercise 7: Which phrase is genitive plural of νεανίας?",
          "choices": [
            {
              "text": "τοῦ νεανίου",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τοῖς νεανίαις",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τοὺς νεανίας",
              "correct": false,
              "feedback": "Review: τῶν νεανιῶν is genitive plural of νεανίας."
            },
            {
              "text": "τῶν νεανιῶν",
              "correct": true,
              "feedback": "Correct: τῶν νεανιῶν is genitive plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "masculine-first",
          "category": "Grammar",
          "prompt": "Grammar exercise 8: Which dative singular belongs to ὁ πολίτης?",
          "choices": [
            {
              "text": "τῷ πολίτῃ",
              "correct": true,
              "feedback": "Correct: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "τοῦ πολίτου",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "τὸν πολίτην",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            },
            {
              "text": "οἱ πολῖται",
              "correct": false,
              "feedback": "Review: The dative singular is τῷ πολίτῃ."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Grammar exercise 9: Which form of ὁδός is accusative singular?",
          "choices": [
            {
              "text": "αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": true,
              "feedback": "Correct: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τὴν ὁδόν is accusative singular."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Grammar exercise 10: Which form of ὁδός is dative singular?",
          "choices": [
            {
              "text": "τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "ταῖς ὁδοῖς",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "τῇ ὁδῷ",
              "correct": true,
              "feedback": "Correct: τῇ ὁδῷ is dative singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τῇ ὁδῷ is dative singular."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Grammar exercise 11: Which form of ὁδός is genitive plural?",
          "choices": [
            {
              "text": "τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "ταῖς ὁδοῖς",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "τὰς ὁδούς",
              "correct": false,
              "feedback": "Review: τῶν ὁδῶν is genitive plural."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": true,
              "feedback": "Correct: τῶν ὁδῶν is genitive plural."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "feminine-second",
          "category": "Grammar",
          "prompt": "Grammar exercise 12: Which phrase means “on the road” after ἐπί with a dative?",
          "choices": [
            {
              "text": "ἐπὶ τῇ ὁδῷ",
              "correct": true,
              "feedback": "Correct: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ τῆς ὁδοῦ",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            },
            {
              "text": "ἐπὶ αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: ἐπὶ τῇ ὁδῷ uses the dative singular."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Grammar exercise 13: Which phrase means “the good garment”?",
          "choices": [
            {
              "text": "τὰ καλὰ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": true,
              "feedback": "Correct: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "ἡ καλὴ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "ὁ καλὸς ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Grammar exercise 14: Which phrase means “the good young man” as direct object?",
          "choices": [
            {
              "text": "τὸ καλὸν νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            },
            {
              "text": "ὁ καλὸς νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            },
            {
              "text": "τὸν καλὸν νεανίαν",
              "correct": true,
              "feedback": "Correct: νεανίαν is masculine accusative singular."
            },
            {
              "text": "τὴν καλὴν νεανίαν",
              "correct": false,
              "feedback": "Review: νεανίαν is masculine accusative singular."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Grammar exercise 15: In τὰ καλὰ ἱμάτια, what are the gender and number?",
          "choices": [
            {
              "text": "masculine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "feminine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "masculine plural",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "neuter plural",
              "correct": true,
              "feedback": "Correct: Both καλὰ and ἱμάτια are neuter plural."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Grammar",
          "prompt": "Grammar exercise 16: Which phrase is feminine nominative singular?",
          "choices": [
            {
              "text": "ἡ καλὴ οἰκία",
              "correct": true,
              "feedback": "Correct: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "ὁ καλὸς νεανίας",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            },
            {
              "text": "τὰ καλὰ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἡ καλὴ οἰκία is feminine nominative singular."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Grammar exercise 17: Which is the neuter singular of μέγας?",
          "choices": [
            {
              "text": "μέγας",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            },
            {
              "text": "μέγα",
              "correct": true,
              "feedback": "Correct: The neuter singular is μέγα."
            },
            {
              "text": "μεγάλη",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            },
            {
              "text": "μεγάλα",
              "correct": false,
              "feedback": "Review: The neuter singular is μέγα."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Grammar exercise 18: Which is the feminine singular of πολύς?",
          "choices": [
            {
              "text": "πολλά",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            },
            {
              "text": "πολύς",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            },
            {
              "text": "πολλή",
              "correct": true,
              "feedback": "Correct: The feminine singular is πολλή."
            },
            {
              "text": "πολύ",
              "correct": false,
              "feedback": "Review: The feminine singular is πολλή."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Grammar exercise 19: Which means “many garments”?",
          "choices": [
            {
              "text": "πολλὴ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολὺ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλοὶ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλὰ ἱμάτια",
              "correct": true,
              "feedback": "Correct: ἱμάτια is neuter plural and takes πολλά."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "irregular-adjectives",
          "category": "Grammar",
          "prompt": "Grammar exercise 20: Which means “many people” with ἄνθρωποι?",
          "choices": [
            {
              "text": "πολλοὶ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολλαὶ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολλὰ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            },
            {
              "text": "πολὺ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: ἄνθρωποι is masculine plural and takes πολλοί."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Grammar exercise 21: Which means “she spins quickly”?",
          "choices": [
            {
              "text": "μέγα νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            },
            {
              "text": "ταχέως νήθει",
              "correct": true,
              "feedback": "Correct: ταχέως is the adverb quickly."
            },
            {
              "text": "καλὸν νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            },
            {
              "text": "ταχεῖα νήθει",
              "correct": false,
              "feedback": "Review: ταχέως is the adverb quickly."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Grammar exercise 22: What does καλόν modify in καλὸν ἱμάτιον?",
          "choices": [
            {
              "text": "the adverb ταχέως",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the verb νήθει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the noun ἱμάτιον",
              "correct": true,
              "feedback": "Correct: καλόν describes the garment."
            },
            {
              "text": "the verb ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Grammar exercise 23: Does καλῶς change to agree with Melitta?",
          "choices": [
            {
              "text": "Yes; it becomes καλή.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "Yes; it becomes καλά.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "Yes; it becomes καλόν.",
              "correct": false,
              "feedback": "Review: Adverbs do not agree in gender, number, or case."
            },
            {
              "text": "No; an adverb does not agree with a noun.",
              "correct": true,
              "feedback": "Correct: Adverbs do not agree in gender, number, or case."
            }
          ]
        },
        {
          "id": "lesson-8-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "adverbs",
          "category": "Grammar",
          "prompt": "Grammar exercise 24: Which phrase describes the manner of weaving?",
          "choices": [
            {
              "text": "καλῶς ὑφαίνει",
              "correct": true,
              "feedback": "Correct: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "καλὸν ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "καλὴ οἰκία",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            },
            {
              "text": "μέγα ἱμάτιον",
              "correct": false,
              "feedback": "Review: καλῶς modifies ὑφαίνει."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 8 Final Quiz — A Household Finds a Way",
      "description": "Reading, vocabulary, grammar, and household work in Xenophon",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-8-final-quiz-v1",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 8 and continue to Lesson 9.",
      "questions": [
        {
          "id": "lesson-8-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What problem faces Aristarchus’s household?",
          "choices": [
            {
              "text": "a dispute about a festival",
              "correct": false,
              "feedback": "Review: Conflict has crowded the household and cut off income."
            },
            {
              "text": "many relatives and little income",
              "correct": true,
              "feedback": "Correct: Conflict has crowded the household and cut off income."
            },
            {
              "text": "a failed sea voyage",
              "correct": false,
              "feedback": "Review: Conflict has crowded the household and cut off income."
            },
            {
              "text": "a lost horse",
              "correct": false,
              "feedback": "Review: Conflict has crowded the household and cut off income."
            }
          ]
        },
        {
          "id": "lesson-8-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who gives Aristarchus practical advice?",
          "choices": [
            {
              "text": "Proxenus",
              "correct": false,
              "feedback": "Review: Socrates suggests using the women’s existing skills."
            },
            {
              "text": "Myrrhine",
              "correct": false,
              "feedback": "Review: Socrates suggests using the women’s existing skills."
            },
            {
              "text": "Socrates",
              "correct": true,
              "feedback": "Correct: Socrates suggests using the women’s existing skills."
            },
            {
              "text": "Clinias",
              "correct": false,
              "feedback": "Review: Socrates suggests using the women’s existing skills."
            }
          ]
        },
        {
          "id": "lesson-8-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Aristarchus bring to the household?",
          "choices": [
            {
              "text": "bronze armor",
              "correct": false,
              "feedback": "Review: He brings wool for textile work."
            },
            {
              "text": "a horse",
              "correct": false,
              "feedback": "Review: He brings wool for textile work."
            },
            {
              "text": "a grain ship",
              "correct": false,
              "feedback": "Review: He brings wool for textile work."
            },
            {
              "text": "wool",
              "correct": true,
              "feedback": "Correct: He brings wool for textile work."
            }
          ]
        },
        {
          "id": "lesson-8-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Melitta propose in the reconstructed conversation?",
          "choices": [
            {
              "text": "divide the textile tasks and inspect the garments",
              "correct": true,
              "feedback": "Correct: Melitta proposes tasks and quality checks."
            },
            {
              "text": "leave Athens for Delphi",
              "correct": false,
              "feedback": "Review: Melitta proposes tasks and quality checks."
            },
            {
              "text": "sell the loom",
              "correct": false,
              "feedback": "Review: Melitta proposes tasks and quality checks."
            },
            {
              "text": "stop making clothing",
              "correct": false,
              "feedback": "Review: Melitta proposes tasks and quality checks."
            }
          ]
        },
        {
          "id": "lesson-8-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Thaleia say she can do?",
          "choices": [
            {
              "text": "build a ship",
              "correct": false,
              "feedback": "Review: Thaleia says she can spin quickly."
            },
            {
              "text": "spin wool quickly",
              "correct": true,
              "feedback": "Correct: Thaleia says she can spin quickly."
            },
            {
              "text": "command cavalry",
              "correct": false,
              "feedback": "Review: Thaleia says she can spin quickly."
            },
            {
              "text": "write an oracle",
              "correct": false,
              "feedback": "Review: Thaleia says she can spin quickly."
            }
          ]
        },
        {
          "id": "lesson-8-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Which part of the women’s scene is invented?",
          "choices": [
            {
              "text": "Aristarchus’s distress",
              "correct": false,
              "feedback": "Review: Xenophon does not record their names or individual words."
            },
            {
              "text": "Socrates’ advice",
              "correct": false,
              "feedback": "Review: Xenophon does not record their names or individual words."
            },
            {
              "text": "their names and individual dialogue",
              "correct": true,
              "feedback": "Correct: Xenophon does not record their names or individual words."
            },
            {
              "text": "the purchase of wool",
              "correct": false,
              "feedback": "Review: Xenophon does not record their names or individual words."
            }
          ]
        },
        {
          "id": "lesson-8-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ οἰκία mean?",
          "choices": [
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "spin wool",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house, household."
            },
            {
              "text": "house, household",
              "correct": true,
              "feedback": "Correct: ἡ οἰκία means house, household."
            }
          ]
        },
        {
          "id": "lesson-8-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἔριον mean?",
          "choices": [
            {
              "text": "wool",
              "correct": true,
              "feedback": "Correct: τὸ ἔριον means wool."
            },
            {
              "text": "garment, clothing",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "make",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            },
            {
              "text": "carry, bring",
              "correct": false,
              "feedback": "Review: τὸ ἔριον means wool."
            }
          ]
        },
        {
          "id": "lesson-8-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἔργον mean?",
          "choices": [
            {
              "text": "see, inspect",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "work, task",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means work, task."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            },
            {
              "text": "spin wool",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means work, task."
            }
          ]
        },
        {
          "id": "lesson-8-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἱμάτιον mean?",
          "choices": [
            {
              "text": "weave",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "good, fine",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "garment, clothing",
              "correct": true,
              "feedback": "Correct: τὸ ἱμάτιον means garment, clothing."
            },
            {
              "text": "road, way",
              "correct": false,
              "feedback": "Review: τὸ ἱμάτιον means garment, clothing."
            }
          ]
        },
        {
          "id": "lesson-8-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does φέρω mean?",
          "choices": [
            {
              "text": "good, fine",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "little, few",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "later",
              "correct": false,
              "feedback": "Review: φέρω means carry, bring."
            },
            {
              "text": "carry, bring",
              "correct": true,
              "feedback": "Correct: φέρω means carry, bring."
            }
          ]
        },
        {
          "id": "lesson-8-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ταχέως mean?",
          "choices": [
            {
              "text": "quickly",
              "correct": true,
              "feedback": "Correct: ταχέως means quickly."
            },
            {
              "text": "now",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "wool",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            },
            {
              "text": "grain",
              "correct": false,
              "feedback": "Review: ταχέως means quickly."
            }
          ]
        },
        {
          "id": "lesson-8-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase is genitive singular of νεανίας?",
          "choices": [
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τοῦ νεανίου",
              "correct": true,
              "feedback": "Correct: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τὸν νεανίαν",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: τοῦ νεανίου is genitive singular of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase is accusative plural of νεανίας?",
          "choices": [
            {
              "text": "τῶν νεανιῶν",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "τῷ νεανίᾳ",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "τοὺς νεανίας",
              "correct": true,
              "feedback": "Correct: τοὺς νεανίας is accusative plural of νεανίας."
            },
            {
              "text": "οἱ νεανίαι",
              "correct": false,
              "feedback": "Review: τοὺς νεανίας is accusative plural of νεανίας."
            }
          ]
        },
        {
          "id": "lesson-8-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is genitive singular?",
          "choices": [
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τὴν ὁδόν",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": false,
              "feedback": "Review: τῆς ὁδοῦ is genitive singular."
            },
            {
              "text": "τῆς ὁδοῦ",
              "correct": true,
              "feedback": "Correct: τῆς ὁδοῦ is genitive singular."
            }
          ]
        },
        {
          "id": "lesson-8-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of ὁδός is dative plural?",
          "choices": [
            {
              "text": "ταῖς ὁδοῖς",
              "correct": true,
              "feedback": "Correct: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "τῇ ὁδῷ",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "τῶν ὁδῶν",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            },
            {
              "text": "αἱ ὁδοί",
              "correct": false,
              "feedback": "Review: ταῖς ὁδοῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-8-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “the good garment”?",
          "choices": [
            {
              "text": "τὰ καλὰ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "τὸ καλὸν ἱμάτιον",
              "correct": true,
              "feedback": "Correct: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "ἡ καλὴ ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            },
            {
              "text": "ὁ καλὸς ἱμάτιον",
              "correct": false,
              "feedback": "Review: ἱμάτιον is neuter singular, so use τὸ καλὸν."
            }
          ]
        },
        {
          "id": "lesson-8-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "In τὰ καλὰ ἱμάτια, what are the gender and number?",
          "choices": [
            {
              "text": "feminine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "masculine plural",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "neuter plural",
              "correct": true,
              "feedback": "Correct: Both καλὰ and ἱμάτια are neuter plural."
            },
            {
              "text": "masculine singular",
              "correct": false,
              "feedback": "Review: Both καλὰ and ἱμάτια are neuter plural."
            }
          ]
        },
        {
          "id": "lesson-8-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is the neuter plural of μέγας?",
          "choices": [
            {
              "text": "μέγα",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μεγάλη",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μέγας",
              "correct": false,
              "feedback": "Review: The neuter plural is μεγάλα."
            },
            {
              "text": "μεγάλα",
              "correct": true,
              "feedback": "Correct: The neuter plural is μεγάλα."
            }
          ]
        },
        {
          "id": "lesson-8-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which means “many garments”?",
          "choices": [
            {
              "text": "πολλὰ ἱμάτια",
              "correct": true,
              "feedback": "Correct: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλὴ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολὺ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            },
            {
              "text": "πολλοὶ ἱμάτια",
              "correct": false,
              "feedback": "Review: ἱμάτια is neuter plural and takes πολλά."
            }
          ]
        },
        {
          "id": "lesson-8-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which means “she weaves well”?",
          "choices": [
            {
              "text": "καλοί ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            },
            {
              "text": "καλῶς ὑφαίνει",
              "correct": true,
              "feedback": "Correct: καλῶς describes how she weaves."
            },
            {
              "text": "καλὸν ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            },
            {
              "text": "καλὴ ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλῶς describes how she weaves."
            }
          ]
        },
        {
          "id": "lesson-8-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does καλόν modify in καλὸν ἱμάτιον?",
          "choices": [
            {
              "text": "the adverb ταχέως",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the verb νήθει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            },
            {
              "text": "the noun ἱμάτιον",
              "correct": true,
              "feedback": "Correct: καλόν describes the garment."
            },
            {
              "text": "the verb ὑφαίνει",
              "correct": false,
              "feedback": "Review: καλόν describes the garment."
            }
          ]
        },
        {
          "id": "lesson-8-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does ὕστερον signal at the beginning of the reading?",
          "choices": [
            {
              "text": "a command",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a question",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a place name",
              "correct": false,
              "feedback": "Review: ὕστερον means later and marks the time jump."
            },
            {
              "text": "a later time",
              "correct": true,
              "feedback": "Correct: ὕστερον means later and marks the time jump."
            }
          ]
        },
        {
          "id": "lesson-8-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which detail is a labeled reconstruction?",
          "choices": [
            {
              "text": "the women’s individual planning dialogue",
              "correct": true,
              "feedback": "Correct: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "the purchase of wool",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "Socrates’ advice to Aristarchus",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            },
            {
              "text": "the household’s crowded state",
              "correct": false,
              "feedback": "Review: Xenophon does not preserve the women’s individual planning dialogue."
            }
          ]
        },
        {
          "id": "lesson-8-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which text supplies the core Aristarchus episode?",
          "choices": [
            {
              "text": "Herodotus’ Histories 1",
              "correct": false,
              "feedback": "Review: Memorabilia 2.7 preserves the Socrates–Aristarchus episode."
            },
            {
              "text": "Xenophon’s Memorabilia 2.7",
              "correct": true,
              "feedback": "Correct: Memorabilia 2.7 preserves the Socrates–Aristarchus episode."
            },
            {
              "text": "Homer’s Iliad 1",
              "correct": false,
              "feedback": "Review: Memorabilia 2.7 preserves the Socrates–Aristarchus episode."
            },
            {
              "text": "Plato’s Republic 10",
              "correct": false,
              "feedback": "Review: Memorabilia 2.7 preserves the Socrates–Aristarchus episode."
            }
          ]
        },
        {
          "id": "lesson-8-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What does the source say Aristarchus bought?",
          "choices": [
            {
              "text": "horses",
              "correct": false,
              "feedback": "Review: Aristarchus bought wool."
            },
            {
              "text": "papyrus rolls",
              "correct": false,
              "feedback": "Review: Aristarchus bought wool."
            },
            {
              "text": "wool",
              "correct": true,
              "feedback": "Correct: Aristarchus bought wool."
            },
            {
              "text": "silver cups",
              "correct": false,
              "feedback": "Review: Aristarchus bought wool."
            }
          ]
        },
        {
          "id": "lesson-8-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What is known about the women’s own words?",
          "choices": [
            {
              "text": "Xenophon records every word.",
              "correct": false,
              "feedback": "Review: Their individual words are absent from the source."
            },
            {
              "text": "Their letters survive.",
              "correct": false,
              "feedback": "Review: Their individual words are absent from the source."
            },
            {
              "text": "They speak in the Anabasis.",
              "correct": false,
              "feedback": "Review: Their individual words are absent from the source."
            },
            {
              "text": "Xenophon does not preserve their individual dialogue.",
              "correct": true,
              "feedback": "Correct: Their individual words are absent from the source."
            }
          ]
        },
        {
          "id": "lesson-8-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which artifact helps explain the illustrated loom?",
          "choices": [
            {
              "text": "surviving clay loom weights",
              "correct": true,
              "feedback": "Correct: Clay loom weights are physical evidence for weighted looms."
            },
            {
              "text": "a Roman printing press",
              "correct": false,
              "feedback": "Review: Clay loom weights are physical evidence for weighted looms."
            },
            {
              "text": "a medieval spinning wheel",
              "correct": false,
              "feedback": "Review: Clay loom weights are physical evidence for weighted looms."
            },
            {
              "text": "a bronze cannon",
              "correct": false,
              "feedback": "Review: Clay loom weights are physical evidence for weighted looms."
            }
          ]
        },
        {
          "id": "lesson-8-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What work does the Metropolitan Museum’s Attic lekythos show?",
          "choices": [
            {
              "text": "an Eleusinian initiation",
              "correct": false,
              "feedback": "Review: The lekythos shows women spinning and weaving."
            },
            {
              "text": "women spinning and weaving",
              "correct": true,
              "feedback": "Correct: The lekythos shows women spinning and weaving."
            },
            {
              "text": "men training horses",
              "correct": false,
              "feedback": "Review: The lekythos shows women spinning and weaving."
            },
            {
              "text": "a sea battle",
              "correct": false,
              "feedback": "Review: The lekythos shows women spinning and weaving."
            }
          ]
        },
        {
          "id": "lesson-8-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "How does Xenophon report the women teased Aristarchus?",
          "choices": [
            {
              "text": "They asked him to go to Delphi.",
              "correct": false,
              "feedback": "Review: Aristarchus reports their complaint about his idleness."
            },
            {
              "text": "They refused to speak to him.",
              "correct": false,
              "feedback": "Review: Aristarchus reports their complaint about his idleness."
            },
            {
              "text": "They called him the only idle member of the household.",
              "correct": true,
              "feedback": "Correct: Aristarchus reports their complaint about his idleness."
            },
            {
              "text": "They said he wove too quickly.",
              "correct": false,
              "feedback": "Review: Aristarchus reports their complaint about his idleness."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-9",
    "title": "What Makes a Good Friend?",
    "fallbackUrl": "lesson.html?lesson=9&page=1"
  },
  "contentRevision": "lesson-8-household-complete-v1",
  "previousLesson": {
    "id": "lesson-7",
    "title": "The Road to Eleusis",
    "fallbackUrl": "lesson.html?lesson=7&page=1"
  }
}$json$::jsonb;
+  lesson_id_value uuid;
+  segment_id_value uuid;
+  reading_id_value uuid;
+  old_content jsonb;
+  block_kind text;
+  group_item jsonb;
+  vocab_item jsonb;
+  vocab_id uuid;
+  vocab_order integer := 0;
+  paragraph_item jsonb;
+  gloss_item jsonb;
+  paragraph_order integer := 0;
+  gloss_order integer;
+BEGIN
+  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-8' FOR UPDATE;
+  SELECT content INTO old_content FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;
+  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN RETURN; END IF;
+  IF old_content IS NOT NULL THEN
+    RAISE EXCEPTION 'Lesson 8 content already exists; review administrator edits before publishing';
+  END IF;
+  INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1);
+  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;
+  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)
+  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p
+  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;
+  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-8-page-1';
+  SELECT id INTO reading_id_value FROM public.readings WHERE lesson_id=lesson_id_value ORDER BY sort_order,id LIMIT 1;
+  IF reading_id_value IS NULL THEN
+    INSERT INTO public.readings (lesson_id,segment_id,title,sort_order) VALUES (lesson_id_value,segment_id_value,patch #>> '{reading,title}',1) RETURNING id INTO reading_id_value;
+  END IF;
+  UPDATE public.readings SET segment_id=segment_id_value,title=patch #>> '{reading,title}',
+    greek_text=(SELECT string_agg(p->>'greek',E'\n\n' ORDER BY n) FROM jsonb_array_elements(patch #> '{reading,paragraphs}') WITH ORDINALITY t(p,n)),
+    translation=patch #>> '{reading,translation}',notes_markdown=patch #>> '{reading,notesMarkdown}',source_citation=patch #>> '{reading,sourceCitation}'
+  WHERE id=reading_id_value;
+  DELETE FROM public.reading_glosses WHERE lesson_id=lesson_id_value AND reading_id=reading_id_value;
+  FOR paragraph_item IN SELECT value FROM jsonb_array_elements(patch #> '{reading,paragraphs}') LOOP
+    gloss_order:=0;
+    FOR gloss_item IN SELECT value FROM jsonb_array_elements(paragraph_item->'gloss') LOOP
+      INSERT INTO public.reading_glosses (lesson_id,reading_id,greek,english,lemma,display_form,part_of_speech,morphology,source,sort_order)
+      VALUES (lesson_id_value,reading_id_value,gloss_item->>'greek',gloss_item->>'english',gloss_item->>'greek',gloss_item->>'greek','Reading gloss','{}'::jsonb,'lesson_reading_gloss',paragraph_order*1000+gloss_order);
+      gloss_order:=gloss_order+1;
+    END LOOP;
+    paragraph_order:=paragraph_order+1;
+  END LOOP;
+  DELETE FROM public.lesson_vocabulary WHERE lesson_id=lesson_id_value;
+  FOR group_item IN SELECT value FROM jsonb_array_elements(patch->'vocabulary') LOOP
+    FOR vocab_item IN SELECT value FROM jsonb_array_elements(group_item->'items') LOOP
+      INSERT INTO public.vocabulary_items (lemma,display_form,gloss,part_of_speech,dictionary_form,morphology)
+      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_8_household'))
+      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;
+      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';
+      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);
+      vocab_order:=vocab_order+1;
+    END LOOP;
+  END LOOP;
+  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)
+  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;
+  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','activities'] LOOP
+    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()
+    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;
+    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
+      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN
+      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)
+      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),
+        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 ELSE 6 END);
+    END IF;
+  END LOOP;
+END
+$lesson8$;
+UPDATE public.lesson_content_overrides o
+SET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('A Household Finds a Way'::text),true),version=o.version+1,updated_at=now()
+WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-7')
+  AND o.content #>> '{nextLesson,id}'='lesson-8'
+  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'A Household Finds a Way';
+COMMIT;
