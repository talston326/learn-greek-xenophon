-- Publish complete Lesson 11: Delphi, present middle forms, and Panhellenic history.
BEGIN;
DO $lesson11$
DECLARE
  patch jsonb := $json${
  "id": "lesson-11",
  "number": 11,
  "title": "The Question at Delphi",
  "greekTitle": "Τὸ ἐν Δελφοῖς ἐρώτημα",
  "scope": "Present middle forms and common deponents: traveling, arriving, wanting, consulting, and praying",
  "theme": "Xenophon asks Apollo how to make a journey already in his mind",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-11-delphi-banner-v2.png",
    "alt": "Reconstructed scene of a bearded Xenophon approaching the terraced sanctuary of Apollo at Delphi, with the triangular pediment of the temple visible",
    "caption": "Xenophon approaches Delphi. The journey view is an educational reconstruction; the temple’s pitched roof and pediment follow the attested earlier temple."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-11-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-11-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-11-page-3",
      "title": "Delphi and the Greek World",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Travel and place",
      "items": [
        {
          "greek": "πορεύομαι",
          "english": "travel, go",
          "dictionaryForm": "πορεύομαι",
          "status": "required vocabulary",
          "lemma": "πορεύομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀφικνέομαι",
          "english": "arrive",
          "dictionaryForm": "ἀφικνέομαι",
          "status": "required vocabulary",
          "lemma": "ἀφικνέομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἔρχομαι",
          "english": "come, go",
          "dictionaryForm": "ἔρχομαι",
          "status": "required vocabulary",
          "lemma": "ἔρχομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀπέρχομαι",
          "english": "go away, depart",
          "dictionaryForm": "ἀπέρχομαι",
          "status": "required vocabulary",
          "lemma": "ἀπέρχομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ ὁδός",
          "english": "road, journey",
          "dictionaryForm": "ὁδός, ὁδοῦ, ἡ",
          "status": "required vocabulary",
          "lemma": "ὁδός",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ ἱερόν",
          "english": "sanctuary",
          "dictionaryForm": "ἱερόν, ἱεροῦ, τό",
          "status": "required vocabulary",
          "lemma": "ἱερόν",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ ναός",
          "english": "temple",
          "dictionaryForm": "ναός, ναοῦ, ὁ",
          "status": "required vocabulary",
          "lemma": "ναός",
          "audioPlaceholder": true
        },
        {
          "greek": "αἱ Δελφοί",
          "english": "Delphi",
          "dictionaryForm": "Δελφοί, Δελφῶν, αἱ",
          "status": "reading vocabulary",
          "lemma": "αἱ Δελφοί",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ Παρνασσός",
          "english": "Mount Parnassus",
          "dictionaryForm": "Παρνασσός, Παρνασσοῦ, ὁ",
          "status": "reading vocabulary",
          "lemma": "Παρνασσός",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Choice and inquiry",
      "items": [
        {
          "greek": "βούλομαι",
          "english": "want, wish",
          "dictionaryForm": "βούλομαι",
          "status": "required vocabulary",
          "lemma": "βούλομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "σκέπτομαι",
          "english": "consider, reflect",
          "dictionaryForm": "σκέπτομαι",
          "status": "required vocabulary",
          "lemma": "σκέπτομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "μαντεύομαι",
          "english": "consult an oracle",
          "dictionaryForm": "μαντεύομαι",
          "status": "required vocabulary",
          "lemma": "μαντεύομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἐρωτάω",
          "english": "ask, question",
          "dictionaryForm": "ἐρωτάω",
          "status": "required vocabulary",
          "lemma": "ἐρωτάω",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ μαντεῖον",
          "english": "oracle",
          "dictionaryForm": "μαντεῖον, μαντείου, τό",
          "status": "required vocabulary",
          "lemma": "μαντεῖον",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ ἀπόκρισις",
          "english": "response, answer",
          "dictionaryForm": "ἀπόκρισις, ἀποκρίσεως, ἡ",
          "status": "required vocabulary",
          "lemma": "ἀπόκρισις",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ Ἀπόλλων",
          "english": "Apollo",
          "dictionaryForm": "Ἀπόλλων, Ἀπόλλωνος, ὁ",
          "status": "reading vocabulary",
          "lemma": "Ἀπόλλων",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Prayer and return",
      "items": [
        {
          "greek": "θύω",
          "english": "sacrifice",
          "dictionaryForm": "θύω",
          "status": "required vocabulary",
          "lemma": "θύω",
          "audioPlaceholder": true
        },
        {
          "greek": "εὔχομαι",
          "english": "pray",
          "dictionaryForm": "εὔχομαι",
          "status": "required vocabulary",
          "lemma": "εὔχομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "δέχομαι",
          "english": "receive",
          "dictionaryForm": "δέχομαι",
          "status": "required vocabulary",
          "lemma": "δέχομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ θεός",
          "english": "god",
          "dictionaryForm": "θεός, θεοῦ, ὁ",
          "status": "required vocabulary",
          "lemma": "θεός",
          "audioPlaceholder": true
        },
        {
          "greek": "οἴκαδε",
          "english": "homeward, home",
          "dictionaryForm": "οἴκαδε",
          "status": "reading vocabulary",
          "lemma": "οἴκαδε",
          "audioPlaceholder": true
        },
        {
          "greek": "σῷος",
          "english": "safe",
          "dictionaryForm": "σῷος, σῴα, σῷον",
          "status": "reading vocabulary",
          "lemma": "σῷος",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Τὸ ἐν Δελφοῖς ἐρώτημα",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "After Proxenus’s invitation, Xenophon follows Socrates’s advice and travels to Delphi. The question he brings concerns how to make his journey successfully and return safely; he is already inclined to go.",
      "Source note: Xenophon, Anabasis 3.1.5–6 reports Socrates’s advice, Xenophon’s visit, the substance of the question, and Apollo’s reply naming gods for sacrifice. The source does not preserve the wording of the question or reply, and it does not name those gods. The quoted question, interior reflection, road details, and visible actions in this reading are course adaptations.",
      "The reading retells the episode in the present tense. Blue glosses support place names, infinitives, datives, and constructions beyond today’s target. Focus on the middle forms and common deponents as Xenophon goes, arrives, wants, consults, prays, and receives an answer."
    ],
    "paragraphs": [
      {
        "greek": "Ὁ Ξενοφῶν ἐξ Ἀθηνῶν πρὸς Δελφοὺς πορεύεται. τὸ γράμμα τοῦ Προξένου φέρει, καὶ τὴν τοῦ Σωκράτους συμβουλὴν ἐν νῷ ἔχει. ἤδη δὲ βούλεται πρὸς Κῦρον πορεύεσθαι.",
        "gloss": [
          {
            "greek": "ἐξ Ἀθηνῶν",
            "english": "from Athens"
          },
          {
            "greek": "πρὸς Δελφοὺς",
            "english": "toward Delphi"
          },
          {
            "greek": "πορεύεται",
            "english": "travels; present middle form"
          },
          {
            "greek": "τὸ γράμμα τοῦ Προξένου",
            "english": "Proxenus’s letter"
          },
          {
            "greek": "τὴν τοῦ Σωκράτους συμβουλὴν",
            "english": "Socrates’s advice"
          },
          {
            "greek": "ἐν νῷ ἔχει",
            "english": "keeps in mind"
          },
          {
            "greek": "ἤδη",
            "english": "already"
          },
          {
            "greek": "βούλεται",
            "english": "wants; deponent verb"
          },
          {
            "greek": "πορεύεσθαι",
            "english": "to travel; middle infinitive"
          }
        ]
      },
      {
        "greek": "Ἡ ὁδὸς μακρά ἐστιν. ὁ Ξενοφῶν παρὰ ὄρη καὶ ἐλαίας βαδίζει· ὁ δὲ Παρνασσὸς ὑπὲρ τῆς ὁδοῦ φαίνεται. ἄλλοι ὁδοιπόροι πρὸς τὸ ἱερὸν πορεύονται.",
        "gloss": [
          {
            "greek": "παρὰ ὄρη καὶ ἐλαίας",
            "english": "past mountains and olive trees"
          },
          {
            "greek": "Παρνασσὸς",
            "english": "Mount Parnassus"
          },
          {
            "greek": "ὑπὲρ τῆς ὁδοῦ",
            "english": "above the road"
          },
          {
            "greek": "φαίνεται",
            "english": "appears; middle/passive form"
          },
          {
            "greek": "ἄλλοι ὁδοιπόροι",
            "english": "other travelers"
          },
          {
            "greek": "τὸ ἱερὸν",
            "english": "the sanctuary"
          }
        ]
      },
      {
        "greek": "Ὅτε εἰς Δελφοὺς ἀφικνεῖται, τὰ ἱερὰ οἰκήματα ἐν ταῖς κλιτύσιν ὁρᾷ. ἡ ἱερὰ ὁδὸς ἀναβαίνει πρὸς τὸν τοῦ Ἀπόλλωνος ναόν. ἐκεῖ ὁ Ξενοφῶν ἵσταται καὶ τὸν ναὸν βλέπει.",
        "gloss": [
          {
            "greek": "Ὅτε",
            "english": "when"
          },
          {
            "greek": "εἰς Δελφοὺς ἀφικνεῖται",
            "english": "arrives at Delphi; contracted deponent"
          },
          {
            "greek": "τὰ ἱερὰ οἰκήματα",
            "english": "the sacred buildings"
          },
          {
            "greek": "ἐν ταῖς κλιτύσιν",
            "english": "on the slopes"
          },
          {
            "greek": "ἡ ἱερὰ ὁδὸς",
            "english": "the Sacred Way"
          },
          {
            "greek": "ἀναβαίνει",
            "english": "climbs"
          },
          {
            "greek": "τὸν τοῦ Ἀπόλλωνος ναόν",
            "english": "Apollo’s temple"
          },
          {
            "greek": "ἵσταται",
            "english": "stands; middle form"
          }
        ]
      },
      {
        "greek": "Πολλοὶ ἄνθρωποι πρὸς τὸν θεὸν ἔρχονται. οἱ μὲν δῶρα φέρουσιν, οἱ δὲ περὶ τῶν πραγμάτων μαντεύονται. ὁ Ξενοφῶν τὸν θόρυβον ἀκούει, ἀλλὰ ἡ γνώμη αὐτοῦ πρὸς τὴν ὁδὸν τοῦ Κύρου τρέπεται.",
        "gloss": [
          {
            "greek": "οἱ μὲν",
            "english": "some; first half of a contrast"
          },
          {
            "greek": "οἱ δὲ",
            "english": "others; second half of a contrast"
          },
          {
            "greek": "δῶρα",
            "english": "gifts"
          },
          {
            "greek": "περὶ τῶν πραγμάτων",
            "english": "about their affairs"
          },
          {
            "greek": "μαντεύονται",
            "english": "consult an oracle; deponent"
          },
          {
            "greek": "τὸν θόρυβον",
            "english": "the bustle"
          },
          {
            "greek": "ἡ γνώμη αὐτοῦ",
            "english": "his thought"
          },
          {
            "greek": "πρὸς τὴν ὁδὸν τοῦ Κύρου τρέπεται",
            "english": "turns to the journey to Cyrus"
          }
        ]
      },
      {
        "greek": "Ὁ Ξενοφῶν σκέπτεται· «ὁ Σωκράτης με πρὸς τὸν θεὸν πέμπει. ἐγὼ δὲ ἤδη βούλομαι πρὸς τὸν φίλον μου ἰέναι. τί οὖν τὸν Ἀπόλλωνα ἐρωτῶ;»",
        "gloss": [
          {
            "greek": "σκέπτεται",
            "english": "considers; deponent"
          },
          {
            "greek": "με",
            "english": "me"
          },
          {
            "greek": "πέμπει",
            "english": "sends"
          },
          {
            "greek": "ἐγὼ δὲ",
            "english": "but I"
          },
          {
            "greek": "βούλομαι",
            "english": "want; deponent"
          },
          {
            "greek": "ἰέναι",
            "english": "to go; infinitive"
          },
          {
            "greek": "τί οὖν",
            "english": "what, then"
          },
          {
            "greek": "ἐρωτῶ",
            "english": "do I ask?; contracted active verb"
          }
        ]
      },
      {
        "greek": "Πρὸς τὸ μαντεῖον ἔρχεται καὶ τὸν Ἀπόλλωνα ἐρωτᾷ· «τίσι θεοῖς δεῖ με θύειν καὶ εὔχεσθαι; βούλομαι καλῶς πορεύεσθαι καὶ σῷος οἴκαδε ἀφικνεῖσθαι.»",
        "gloss": [
          {
            "greek": "τὸ μαντεῖον",
            "english": "the oracle"
          },
          {
            "greek": "τίσι θεοῖς",
            "english": "to which gods; dative plural"
          },
          {
            "greek": "δεῖ με",
            "english": "must I; impersonal verb plus accusative"
          },
          {
            "greek": "θύειν",
            "english": "to sacrifice; active infinitive"
          },
          {
            "greek": "εὔχεσθαι",
            "english": "to pray; middle infinitive"
          },
          {
            "greek": "καλῶς πορεύεσθαι",
            "english": "to travel successfully"
          },
          {
            "greek": "σῷος",
            "english": "safe"
          },
          {
            "greek": "οἴκαδε",
            "english": "homeward, home"
          },
          {
            "greek": "ἀφικνεῖσθαι",
            "english": "to arrive; contracted middle infinitive"
          }
        ]
      },
      {
        "greek": "Ἡ ἀπόκρισις ἔρχεται· ὁ Ἀπόλλων δηλοῖ τίσι θεοῖς δεῖ θύειν. ὁ Ξενοφῶν ἀκούει καὶ τὴν ἀπόκρισιν δέχεται. τὰ ὀνόματα τῶν θεῶν ἐν τῇ διηγήσει αὐτοῦ οὐ σώζεται.",
        "gloss": [
          {
            "greek": "Ἡ ἀπόκρισις",
            "english": "the response"
          },
          {
            "greek": "δηλοῖ",
            "english": "indicates"
          },
          {
            "greek": "τίσι θεοῖς δεῖ θύειν",
            "english": "to which gods one must sacrifice; dative plus infinitive"
          },
          {
            "greek": "δέχεται",
            "english": "receives; deponent"
          },
          {
            "greek": "τὰ ὀνόματα τῶν θεῶν",
            "english": "the gods’ names"
          },
          {
            "greek": "ἐν τῇ διηγήσει αὐτοῦ",
            "english": "in his account"
          },
          {
            "greek": "οὐ σώζεται",
            "english": "are not preserved; singular verb with neuter plural subject"
          }
        ]
      },
      {
        "greek": "Ὁ Ξενοφῶν ἀπὸ τοῦ ἱεροῦ ἀπέρχεται. τὸ ὄρος ἔτι ὑπὲρ αὐτοῦ φαίνεται, ἡ δὲ ὁδὸς πρὸς Ἀθήνας ἔμπροσθεν κεῖται. τὴν τοῦ θεοῦ ἀπόκρισιν ἐν νῷ ἔχει.",
        "gloss": [
          {
            "greek": "ἀπὸ τοῦ ἱεροῦ",
            "english": "from the sanctuary"
          },
          {
            "greek": "ἀπέρχεται",
            "english": "departs; deponent"
          },
          {
            "greek": "ἔτι",
            "english": "still"
          },
          {
            "greek": "ὑπὲρ αὐτοῦ",
            "english": "above him"
          },
          {
            "greek": "ἔμπροσθεν",
            "english": "ahead"
          },
          {
            "greek": "κεῖται",
            "english": "lies; middle form"
          },
          {
            "greek": "ἐν νῷ ἔχει",
            "english": "keeps in mind"
          }
        ]
      }
    ],
    "translation": "Xenophon travels from Athens toward Delphi. He carries Proxenus’s letter and keeps Socrates’s advice in mind. Yet he already wants to travel to Cyrus.\n\nThe road is long. Xenophon walks past mountains and olive trees, while Parnassus appears above the road. Other travelers are also heading to the sanctuary.\n\nWhen he arrives at Delphi, he sees sacred buildings on the slopes. The Sacred Way climbs toward Apollo’s temple. There Xenophon stops and looks at the temple.\n\nMany people come to the god. Some bring gifts; others seek an oracle about their concerns. Xenophon hears the bustle, but his thoughts turn to the journey to Cyrus.\n\nXenophon reflects: “Socrates sends me to the god. But I already want to go to my friend. What, then, do I ask Apollo?”\n\nHe comes to the oracle and asks Apollo: “To which gods should I sacrifice and pray? I want to make the journey successfully and return home safely.”\n\nThe response comes: Apollo indicates to which gods he must sacrifice. Xenophon listens and receives the answer. The gods’ names are not preserved in his account.\n\nXenophon leaves the sanctuary. The mountain still rises above him, and the road toward Athens lies ahead. He keeps the god’s response in mind.",
    "sourceCitation": "Xenophon, Anabasis 3.1.5–6 (Delphi journey, question, response). The question’s quoted wording and scene details are adapted; the gods’ names and oracle’s wording are not preserved. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3",
    "notesMarkdown": "Anabasis 3.1.6 reports that Xenophon asked Apollo which gods to sacrifice and pray to for a successful journey and safe return. It says Apollo named the gods but gives neither names nor exact wording. The reading’s route, atmosphere, dialogue, and thoughts are source-informed reconstruction; its final observation about the missing names describes the surviving text."
  },
  "wordStudy": {
    "label": "Word Study — Going, Asking, and Receiving",
    "blocks": [
      {
        "title": "A journey already in mind",
        "practiceTopic": "word-study",
        "body": [
          "πορεύομαι means “travel,” ἀφικνέομαι means “arrive,” and ἀπέρχομαι means “depart.” All three use middle present forms with active English meanings. Trace Xenophon from Athens to Delphi and then away from the sanctuary.",
          "βούλομαι means “want.” His desire to visit Cyrus matters: the source’s question asks for a successful journey and safe return, not whether to undertake the journey. Lesson 12 will take up Socrates’s response to that choice.",
          "μαντεύομαι means “consult an oracle”; τὸ μαντεῖον is the oracle. ἐρωτάω means “ask” and is active, while εὔχομαι means “pray” and has middle form. The question is about τίσι θεοῖς, “to which gods.”"
        ],
        "display": [
          {
            "greek": "πορεύεται",
            "english": "he travels"
          },
          {
            "greek": "ἀφικνεῖται",
            "english": "he arrives"
          },
          {
            "greek": "βούλεται",
            "english": "he wants"
          },
          {
            "greek": "μαντεύονται",
            "english": "they consult an oracle"
          },
          {
            "greek": "τίσι θεοῖς",
            "english": "to which gods?"
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "The story turns on movement and intention. Read the present middle endings, then learn which common verbs use them for ordinary actions such as traveling, wanting, arriving, consulting, and praying.",
    "objectives": [
      "Recognize the six present middle endings and the middle infinitive.",
      "Translate common deponents by their lexical meanings rather than as automatic passives.",
      "Distinguish traveling, arriving, approaching, and departing in the reading.",
      "Combine βούλομαι with an infinitive to express what someone wants to do.",
      "Distinguish active ἐρωτάω from middle εὔχομαι and identify τίσι θεοῖς as the gods addressed."
    ],
    "sections": [
      {
        "id": "middle-endings",
        "title": "1. Recognizing the Present Middle",
        "practiceTopic": "middle-endings",
        "body": [
          "The present middle uses a different set of endings from the present active. Compare active λύω, λύεις, λύει with middle λύομαι, λύῃ (also written λύει), λύεται. The ending tells you who acts; it does not by itself supply an English translation.",
          "In the reading, πορεύεται is third-person singular, “he travels,” while πορεύομαι is first-person singular, “I travel.” The middle present infinitive ends in -εσθαι: πορεύεσθαι, “to travel.”",
          "A middle form can express an action involving the subject, but many common verbs simply use middle endings with an active English meaning. Always learn the verb’s meaning as well as its ending."
        ],
        "table": {
          "title": "Present middle of πορεύομαι",
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
              "first",
              "πορεύομαι — I travel",
              "πορευόμεθα — we travel"
            ],
            [
              "second",
              "πορεύῃ — you travel",
              "πορεύεσθε — you travel"
            ],
            [
              "third",
              "πορεύεται — he/she travels",
              "πορεύονται — they travel"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Who travels in πορεύονται?",
            "answer": "They travel; -ονται is third-person plural."
          }
        ],
        "examples": [
          {
            "greek": "ὁ Ξενοφῶν πορεύεται· οἱ ὁδοιπόροι πορεύονται.",
            "english": "Xenophon travels; the travelers travel."
          }
        ]
      },
      {
        "id": "deponents",
        "title": "2. Middle Form, Active Meaning",
        "practiceTopic": "deponents",
        "body": [
          "Some frequently used Greek verbs have middle endings in the present although their ordinary English meanings are active. These are often called deponent verbs. πορεύομαι means “I travel,” not “I am traveled.”",
          "The reading also uses βούλομαι (“I want”), σκέπτομαι (“I consider”), μαντεύομαι (“I consult an oracle”), εὔχομαι (“I pray”), and δέχομαι (“I receive”). Their third-person forms end in -εται.",
          "Do not translate a middle ending mechanically as an English passive. Ask what the dictionary form means, and use the ending to identify person and number."
        ],
        "table": {
          "title": "Common deponents in the story",
          "headers": [
            "Dictionary form",
            "Reading form",
            "Meaning"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "βούλομαι",
              "βούλεται",
              "wants"
            ],
            [
              "σκέπτομαι",
              "σκέπτεται",
              "considers"
            ],
            [
              "μαντεύομαι",
              "μαντεύονται",
              "consult an oracle"
            ],
            [
              "εὔχομαι",
              "εὔχομαι",
              "I pray"
            ],
            [
              "δέχομαι",
              "δέχεται",
              "receives"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Does βούλεται mean “he is wanted”?",
            "answer": "No. βούλεται means “he wants”; βούλομαι is a deponent."
          }
        ],
        "examples": [
          {
            "greek": "ὁ Ξενοφῶν βούλεται πορεύεσθαι.",
            "english": "Xenophon wants to travel."
          }
        ]
      },
      {
        "id": "going-arriving",
        "title": "3. Going, Coming, and Arriving",
        "practiceTopic": "going-arriving",
        "body": [
          "πορεύομαι describes traveling along a route. ἔρχομαι means “I come” or “I go,” and ἀπέρχομαι means “I go away.” These verbs have middle present forms and active meanings.",
          "ἀφικνέομαι (“I arrive”) contracts in Attic Greek: the reading has ἀφικνεῖται, “he arrives,” and ἀφικνεῖσθαι, “to arrive.” Recognize the contracted forms without treating their spelling as a new ending pattern to memorize in full.",
          "The destination often follows εἰς or πρός with the accusative: εἰς Δελφοὺς ἀφικνεῖται, “he arrives at Delphi”; πρὸς τὸ μαντεῖον ἔρχεται, “he comes to the oracle.”"
        ],
        "table": {
          "title": "Follow the route",
          "headers": [
            "Greek",
            "Meaning",
            "Cue"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "πρὸς Δελφοὺς πορεύεται",
              "travels toward Delphi",
              "journey"
            ],
            [
              "εἰς Δελφοὺς ἀφικνεῖται",
              "arrives at Delphi",
              "arrival"
            ],
            [
              "πρὸς τὸ μαντεῖον ἔρχεται",
              "comes to the oracle",
              "approach"
            ],
            [
              "ἀπὸ τοῦ ἱεροῦ ἀπέρχεται",
              "departs from the sanctuary",
              "departure"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Which form in the reading marks arrival?",
            "answer": "ἀφικνεῖται means “he arrives.”"
          }
        ],
        "examples": [
          {
            "greek": "ὁ Ξενοφῶν εἰς Δελφοὺς ἀφικνεῖται.",
            "english": "Xenophon arrives at Delphi."
          }
        ]
      },
      {
        "id": "wanting-infinitives",
        "title": "4. Wanting to Do Something",
        "practiceTopic": "wanting-infinitives",
        "body": [
          "βούλομαι can take an infinitive for the action wanted. βούλομαι πορεύεσθαι means “I want to travel”; βούλεται ἰέναι means “he wants to go.” The infinitive does not change for the subject’s person.",
          "The middle infinitive normally ends in -εσθαι, as in πορεύεσθαι and εὔχεσθαι. ἀφικνεῖσθαι is the contracted infinitive of ἀφικνέομαι. ἰέναι is an irregular infinitive of εἶμι, “I go”; it is glossed in the reading.",
          "In Xenophon’s question, his wish to travel successfully and arrive home safely is already present. The grammar of wanting helps reveal the historical point: he asks how to make the journey, having already leaned toward making it."
        ],
        "table": {
          "title": "Verb of wanting plus infinitive",
          "headers": [
            "Greek",
            "Meaning",
            "Action wanted"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "βούλομαι πορεύεσθαι",
              "I want to travel",
              "πορεύεσθαι"
            ],
            [
              "βούλεται ἰέναι",
              "he wants to go",
              "ἰέναι"
            ],
            [
              "βούλομαι ἀφικνεῖσθαι",
              "I want to arrive",
              "ἀφικνεῖσθαι"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What is wanted in βούλεται πορεύεσθαι?",
            "answer": "To travel; πορεύεσθαι is the infinitive."
          }
        ],
        "examples": [
          {
            "greek": "βούλομαι καλῶς πορεύεσθαι.",
            "english": "I want to travel successfully."
          }
        ]
      },
      {
        "id": "asking-praying",
        "title": "5. Asking Apollo and Praying to the Gods",
        "practiceTopic": "asking-praying",
        "body": [
          "ἐρωτάω (“I ask”) is an active alpha-contract verb from Lesson 9; ἐρωτῶ and ἐρωτᾷ are its contracted forms. Asking a question is not itself a middle verb. By contrast, εὔχομαι (“I pray”) uses middle endings.",
          "τίσι θεοῖς means “to which gods?” The question concerns recipients of sacrifice and prayer. θύω means “I sacrifice”; θύειν and εὔχεσθαι mean “to sacrifice” and “to pray.” The phrase δεῖ με + infinitives means “I must ...”; it is glossed rather than a production target.",
          "Anabasis 3.1.6 reports the subject of Xenophon’s question and says the god named the gods for sacrifice. It does not supply the response’s words or the gods’ names. The quoted question in our reading is an adaptation, not preserved ancient speech."
        ],
        "table": {
          "title": "Keep the verb and its meaning together",
          "headers": [
            "Greek",
            "Form",
            "Meaning"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ἐρωτῶ",
              "active, first singular",
              "I ask"
            ],
            [
              "ἐρωτᾷ",
              "active, third singular",
              "he asks"
            ],
            [
              "εὔχομαι",
              "middle, first singular",
              "I pray"
            ],
            [
              "θύειν",
              "active infinitive",
              "to sacrifice"
            ],
            [
              "τίσι θεοῖς",
              "dative plural",
              "to which gods"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Is ἐρωτᾷ a middle form?",
            "answer": "No. It is a contracted active form of ἐρωτάω."
          }
        ],
        "examples": [
          {
            "greek": "τίσι θεοῖς δεῖ με θύειν καὶ εὔχεσθαι;",
            "english": "To which gods must I sacrifice and pray?"
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "Present middle endings: -ομαι, -ῃ/-ει, -εται; -όμεθα, -εσθε, -ονται. The middle infinitive ends in -εσθαι.",
        "πορεύομαι, βούλομαι, σκέπτομαι, μαντεύομαι, εὔχομαι, and δέχομαι use middle forms with active English meanings.",
        "ἀφικνεῖται means “he arrives”; ἀφικνεῖσθαι means “to arrive.” Both are contracted forms of ἀφικνέομαι.",
        "βούλομαι πορεύεσθαι means “I want to travel.” The infinitive names the desired action.",
        "ἐρωτᾷ is active “he asks”; εὔχομαι is middle “I pray”; τίσι θεοῖς means “to which gods?”"
      ]
    }
  },
  "culture": {
    "title": "Delphi and the Greek World",
    "banner": {
      "image": "assets/lesson-11-tournaire-delphi.jpg",
      "display": "full",
      "alt": "Albert Tournaire’s 1894 painted reconstruction of the terraced sanctuary of Apollo at Delphi",
      "caption": "Albert Tournaire, reconstruction of the Sanctuary of Apollo at Delphi, 1894. This is a modern imagined reconstruction, not a contemporary picture of Xenophon’s visit.",
      "credit": "Albert Tournaire, 1894; Wikimedia Commons, public domain. Image unmodified.",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Delphi_by_Albert_Tournaire.jpg",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/"
    },
    "body": [],
    "sections": [
      {
        "title": "A sanctuary shared across Greek cities",
        "body": [
          "Delphi stood on the slopes of Mount Parnassus in central Greece. Its Sanctuary of Apollo was Panhellenic: people from many Greek cities visited a site that was not the possession of any one polis. Greeks associated it with the omphalos, the “navel” or symbolic center of the world. The Pythia, Apollo’s priestess, delivered responses to those consulting the oracle.",
          "Visitors climbed the Sacred Way past dedications and treasuries erected by different communities. The sanctuary also hosted the Pythian Games. Delphi mattered to civic and personal decisions, but the evidence for particular oracles varies: later stories may shape how consultations are remembered. Tournaire’s painting above is a nineteenth-century reconstruction of the sanctuary, useful for imagining its terraces and monuments, not a direct record of how every building looked in Xenophon’s day."
        ]
      },
      {
        "title": "Croesus of Lydia: a visitor from beyond Greece",
        "body": [
          "Delphi’s prestige reached rulers beyond the Greek city-states. Herodotus tells how Croesus, king of Lydia in Anatolia, tested several oracles, sent rich offerings to Delphi, and consulted Apollo before making war against Persia. Lydia was a non-Greek kingdom. Greek authors could call such peoples “barbarians,” a word referring to outsiders from the Greek-speaking world rather than a neutral judgment about their culture.",
          "In Herodotus’s account, the oracle said that crossing the Halys would destroy a great empire. Croesus expected Persia’s empire to fall, but his own kingdom fell. Herodotus then has Delphi explain that Croesus should have asked which empire was meant. The episode is a literary account from Herodotus, written after Croesus’s reign; it shows both Delphi’s reach and the importance of the question a consulter chose to ask. Xenophon’s question about the gods for his journey raises a different question about what he had already decided."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why was Delphi called Panhellenic?",
        "answer": "People from many Greek cities visited and dedicated offerings there; it was a shared sanctuary rather than one city’s shrine."
      },
      {
        "prompt": "Who delivered oracular responses at Delphi?",
        "answer": "The Pythia, Apollo’s priestess, delivered responses to those consulting the oracle."
      },
      {
        "prompt": "What was the Sacred Way?",
        "answer": "The route through Apollo’s sanctuary past dedications and treasuries toward the temple."
      },
      {
        "prompt": "Why does Croesus belong in a lesson about Delphi’s wider importance?",
        "answer": "Herodotus reports that the non-Greek Lydian king sent offerings and consulted the oracle, showing Delphi’s reputation beyond Greek city-states."
      },
      {
        "prompt": "What does the Croesus story suggest about asking an oracle?",
        "answer": "Herodotus presents Croesus as interpreting an ambiguous answer in line with his own hopes instead of asking which empire would fall."
      },
      {
        "prompt": "What does the culture-page image show?",
        "answer": "Albert Tournaire’s 1894 painted reconstruction of Apollo’s sanctuary, not an ancient eyewitness view."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Follow Xenophon’s route with πορεύεται, ἀφικνεῖται, ἔρχεται, and ἀπέρχεται.",
        "Recognize middle endings in βούλεται, μαντεύονται, εὔχομαι, and δέχεται.",
        "Explain the actual subject of Xenophon’s question and why the oracle’s wording and gods’ names must remain unspecified.",
        "Explain why Delphi was Panhellenic and how Herodotus’s Croesus shows its reach beyond the Greek-speaking world."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Anabasis 3.1.5–6 (Delphi consultation)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3"
      },
      {
        "title": "UNESCO World Heritage Centre, Archaeological Site of Delphi",
        "url": "https://whc.unesco.org/en/list/393/"
      },
      {
        "title": "Archaeological Site of Delphi, Temple of Apollo",
        "url": "https://delphi.culture.gr/the-temple-of-apollo/"
      },
      {
        "title": "Herodotus, Histories 1.46–56, 1.90–91 (Croesus and Delphi)",
        "url": "https://www-current.chs.harvard.edu/primary-source/herodotus-selections-part-i/"
      },
      {
        "title": "Wikimedia Commons, Albert Tournaire, Delphi",
        "url": "https://commons.wikimedia.org/wiki/File:Delphi_by_Albert_Tournaire.jpg"
      }
    ]
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 11 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "πορεύομαι",
          "answer": "travel, go"
        },
        {
          "prompt": "ἀφικνέομαι",
          "answer": "arrive"
        },
        {
          "prompt": "ἔρχομαι",
          "answer": "come, go"
        },
        {
          "prompt": "ἀπέρχομαι",
          "answer": "go away, depart"
        },
        {
          "prompt": "ἡ ὁδός",
          "answer": "road, journey"
        },
        {
          "prompt": "τὸ ἱερόν",
          "answer": "sanctuary"
        },
        {
          "prompt": "ὁ ναός",
          "answer": "temple"
        },
        {
          "prompt": "αἱ Δελφοί",
          "answer": "Delphi"
        },
        {
          "prompt": "ὁ Παρνασσός",
          "answer": "Mount Parnassus"
        },
        {
          "prompt": "βούλομαι",
          "answer": "want, wish"
        },
        {
          "prompt": "σκέπτομαι",
          "answer": "consider, reflect"
        },
        {
          "prompt": "μαντεύομαι",
          "answer": "consult an oracle"
        },
        {
          "prompt": "ἐρωτάω",
          "answer": "ask, question"
        },
        {
          "prompt": "τὸ μαντεῖον",
          "answer": "oracle"
        },
        {
          "prompt": "ἡ ἀπόκρισις",
          "answer": "response, answer"
        },
        {
          "prompt": "ὁ Ἀπόλλων",
          "answer": "Apollo"
        },
        {
          "prompt": "θύω",
          "answer": "sacrifice"
        },
        {
          "prompt": "εὔχομαι",
          "answer": "pray"
        },
        {
          "prompt": "δέχομαι",
          "answer": "receive"
        },
        {
          "prompt": "ὁ θεός",
          "answer": "god"
        },
        {
          "prompt": "οἴκαδε",
          "answer": "homeward, home"
        },
        {
          "prompt": "σῷος",
          "answer": "safe"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 11 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice required Lesson 11 words in short rounds. Reading-only words remain glossed.",
      "questions": [
        {
          "id": "lesson-11-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "ask, question",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "travel, go",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            },
            {
              "text": "come, go",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "temple",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “travel, go”?",
          "choices": [
            {
              "text": "τὸ μαντεῖον",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            },
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀφικνέομαι mean?",
          "choices": [
            {
              "text": "want, wish",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "oracle",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "arrive",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “arrive”?",
          "choices": [
            {
              "text": "σκέπτομαι",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἡ ἀπόκρισις",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἔρχομαι mean?",
          "choices": [
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "consider, reflect",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "response, answer",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "come, go",
              "correct": true,
              "feedback": "Correct: ἔρχομαι means come, go."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “come, go”?",
          "choices": [
            {
              "text": "τὸ ἱερόν",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: ἔρχομαι means come, go."
            },
            {
              "text": "ἔρχομαι",
              "correct": true,
              "feedback": "Correct: ἔρχομαι means come, go."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀπέρχομαι mean?",
          "choices": [
            {
              "text": "go away, depart",
              "correct": true,
              "feedback": "Correct: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "sanctuary",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "consult an oracle",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “go away, depart”?",
          "choices": [
            {
              "text": "ἀπέρχομαι",
              "correct": true,
              "feedback": "Correct: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "ὁ ναός",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means go away, depart."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ὁδός mean?",
          "choices": [
            {
              "text": "pray",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "road, journey",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            },
            {
              "text": "temple",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "ask, question",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “road, journey”?",
          "choices": [
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "τὸ μαντεῖον",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἱερόν mean?",
          "choices": [
            {
              "text": "oracle",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "receive",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "sanctuary",
              "correct": true,
              "feedback": "Correct: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "want, wish",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “sanctuary”?",
          "choices": [
            {
              "text": "ἡ ἀπόκρισις",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "ὁ θεός",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "τὸ ἱερόν",
              "correct": true,
              "feedback": "Correct: τὸ ἱερόν means sanctuary."
            },
            {
              "text": "σκέπτομαι",
              "correct": false,
              "feedback": "Review: τὸ ἱερόν means sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ναός mean?",
          "choices": [
            {
              "text": "consider, reflect",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "response, answer",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "god",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "temple",
              "correct": true,
              "feedback": "Correct: ὁ ναός means temple."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “temple”?",
          "choices": [
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ὁ ναός means temple."
            },
            {
              "text": "ὁ ναός",
              "correct": true,
              "feedback": "Correct: ὁ ναός means temple."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does βούλομαι mean?",
          "choices": [
            {
              "text": "want, wish",
              "correct": true,
              "feedback": "Correct: βούλομαι means want, wish."
            },
            {
              "text": "consult an oracle",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “want, wish”?",
          "choices": [
            {
              "text": "βούλομαι",
              "correct": true,
              "feedback": "Correct: βούλομαι means want, wish."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σκέπτομαι mean?",
          "choices": [
            {
              "text": "arrive",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            },
            {
              "text": "consider, reflect",
              "correct": true,
              "feedback": "Correct: σκέπτομαι means consider, reflect."
            },
            {
              "text": "ask, question",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            },
            {
              "text": "pray",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “consider, reflect”?",
          "choices": [
            {
              "text": "ἔρχομαι",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            },
            {
              "text": "σκέπτομαι",
              "correct": true,
              "feedback": "Correct: σκέπτομαι means consider, reflect."
            },
            {
              "text": "τὸ μαντεῖον",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            },
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider, reflect."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μαντεύομαι mean?",
          "choices": [
            {
              "text": "receive",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "come, go",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "oracle",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “consult an oracle”?",
          "choices": [
            {
              "text": "ὁ θεός",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "μαντεύομαι",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "ἡ ἀπόκρισις",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "response, answer",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "god",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "ask, question",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask, question."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “ask, question”?",
          "choices": [
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, question."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask, question."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ μαντεῖον mean?",
          "choices": [
            {
              "text": "oracle",
              "correct": true,
              "feedback": "Correct: τὸ μαντεῖον means oracle."
            },
            {
              "text": "sacrifice",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “oracle”?",
          "choices": [
            {
              "text": "τὸ μαντεῖον",
              "correct": true,
              "feedback": "Correct: τὸ μαντεῖον means oracle."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            },
            {
              "text": "τὸ ἱερόν",
              "correct": false,
              "feedback": "Review: τὸ μαντεῖον means oracle."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀπόκρισις mean?",
          "choices": [
            {
              "text": "sanctuary",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "response, answer",
              "correct": true,
              "feedback": "Correct: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "pray",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "arrive",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “response, answer”?",
          "choices": [
            {
              "text": "ὁ ναός",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "ἡ ἀπόκρισις",
              "correct": true,
              "feedback": "Correct: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "ἔρχομαι",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does θύω mean?",
          "choices": [
            {
              "text": "come, go",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "temple",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "sacrifice",
              "correct": true,
              "feedback": "Correct: θύω means sacrifice."
            },
            {
              "text": "receive",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “sacrifice”?",
          "choices": [
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "θύω",
              "correct": true,
              "feedback": "Correct: θύω means sacrifice."
            },
            {
              "text": "ὁ θεός",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does εὔχομαι mean?",
          "choices": [
            {
              "text": "god",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "want, wish",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "pray",
              "correct": true,
              "feedback": "Correct: εὔχομαι means pray."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “pray”?",
          "choices": [
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "σκέπτομαι",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "εὔχομαι",
              "correct": true,
              "feedback": "Correct: εὔχομαι means pray."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does δέχομαι mean?",
          "choices": [
            {
              "text": "receive",
              "correct": true,
              "feedback": "Correct: δέχομαι means receive."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "consider, reflect",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “receive”?",
          "choices": [
            {
              "text": "δέχομαι",
              "correct": true,
              "feedback": "Correct: δέχομαι means receive."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "τὸ ἱερόν",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-17-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ θεός mean?",
          "choices": [
            {
              "text": "consult an oracle",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            },
            {
              "text": "god",
              "correct": true,
              "feedback": "Correct: ὁ θεός means god."
            },
            {
              "text": "arrive",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            },
            {
              "text": "sanctuary",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            }
          ]
        },
        {
          "id": "lesson-11-vocab-17-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “god”?",
          "choices": [
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            },
            {
              "text": "ὁ θεός",
              "correct": true,
              "feedback": "Correct: ὁ θεός means god."
            },
            {
              "text": "ἔρχομαι",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            },
            {
              "text": "ὁ ναός",
              "correct": false,
              "feedback": "Review: ὁ θεός means god."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 11 Grammar Flashcards",
      "cards": [
        {
          "prompt": "πορεύομαι / πορεύεται / πορεύονται",
          "answer": "I travel / he travels / they travel"
        },
        {
          "prompt": "βούλομαι / βούλεται",
          "answer": "I want / he wants"
        },
        {
          "prompt": "ἀφικνεῖται / ἀφικνεῖσθαι",
          "answer": "he arrives / to arrive"
        },
        {
          "prompt": "μαντεύομαι",
          "answer": "I consult an oracle"
        },
        {
          "prompt": "εὔχομαι",
          "answer": "I pray"
        },
        {
          "prompt": "ἐρωτῶ / ἐρωτᾷ",
          "answer": "I ask / he asks; active forms"
        },
        {
          "prompt": "τίσι θεοῖς",
          "answer": "to which gods?"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 11 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic. Practice gives immediate feedback and does not gate the page.",
      "questions": [
        {
          "id": "lesson-11-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "I hear",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            },
            {
              "text": "I travel",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            },
            {
              "text": "I sacrifice",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            }
          ]
        },
        {
          "id": "lesson-11-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἀφικνέομαι mean?",
          "choices": [
            {
              "text": "I pray",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "I receive",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "I arrive",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "I depart",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does βούλομαι mean?",
          "choices": [
            {
              "text": "I see",
              "correct": false,
              "feedback": "Review: βούλομαι means want."
            },
            {
              "text": "I speak",
              "correct": false,
              "feedback": "Review: βούλομαι means want."
            },
            {
              "text": "I send",
              "correct": false,
              "feedback": "Review: βούλομαι means want."
            },
            {
              "text": "I want",
              "correct": true,
              "feedback": "Correct: βούλομαι means want."
            }
          ]
        },
        {
          "id": "lesson-11-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does μαντεύομαι mean?",
          "choices": [
            {
              "text": "I consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "I build a temple",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "I walk downhill",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "I carry a letter",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is τὸ μαντεῖον?",
          "choices": [
            {
              "text": "the mountain",
              "correct": false,
              "feedback": "Review: μαντεῖον is an oracle."
            },
            {
              "text": "the oracle",
              "correct": true,
              "feedback": "Correct: μαντεῖον is an oracle."
            },
            {
              "text": "the letter",
              "correct": false,
              "feedback": "Review: μαντεῖον is an oracle."
            },
            {
              "text": "the road",
              "correct": false,
              "feedback": "Review: μαντεῖον is an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is τὸ ἱερόν?",
          "choices": [
            {
              "text": "the question",
              "correct": false,
              "feedback": "Review: ἱερόν is a sanctuary."
            },
            {
              "text": "the response",
              "correct": false,
              "feedback": "Review: ἱερόν is a sanctuary."
            },
            {
              "text": "the sanctuary",
              "correct": true,
              "feedback": "Correct: ἱερόν is a sanctuary."
            },
            {
              "text": "the journey",
              "correct": false,
              "feedback": "Review: ἱερόν is a sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is ὁ ναός?",
          "choices": [
            {
              "text": "the priestess",
              "correct": false,
              "feedback": "Review: ναός is a temple."
            },
            {
              "text": "the road",
              "correct": false,
              "feedback": "Review: ναός is a temple."
            },
            {
              "text": "the mountain",
              "correct": false,
              "feedback": "Review: ναός is a temple."
            },
            {
              "text": "the temple",
              "correct": true,
              "feedback": "Correct: ναός is a temple."
            }
          ]
        },
        {
          "id": "lesson-11-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does εὔχομαι mean?",
          "choices": [
            {
              "text": "I pray",
              "correct": true,
              "feedback": "Correct: εὔχομαι means pray."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "I arrive",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            },
            {
              "text": "I return",
              "correct": false,
              "feedback": "Review: εὔχομαι means pray."
            }
          ]
        },
        {
          "id": "lesson-11-practice-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does θύω mean?",
          "choices": [
            {
              "text": "I receive",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "I sacrifice",
              "correct": true,
              "feedback": "Correct: θύω means sacrifice."
            },
            {
              "text": "I want",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            },
            {
              "text": "I hear",
              "correct": false,
              "feedback": "Review: θύω means sacrifice."
            }
          ]
        },
        {
          "id": "lesson-11-practice-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is ἡ ἀπόκρισις?",
          "choices": [
            {
              "text": "the gift",
              "correct": false,
              "feedback": "Review: ἀπόκρισις means response."
            },
            {
              "text": "the road",
              "correct": false,
              "feedback": "Review: ἀπόκρισις means response."
            },
            {
              "text": "the response",
              "correct": true,
              "feedback": "Correct: ἀπόκρισις means response."
            },
            {
              "text": "the temple",
              "correct": false,
              "feedback": "Review: ἀπόκρισις means response."
            }
          ]
        },
        {
          "id": "lesson-11-practice-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does οἴκαδε mean?",
          "choices": [
            {
              "text": "uphill",
              "correct": false,
              "feedback": "Review: οἴκαδε means homeward."
            },
            {
              "text": "to the oracle",
              "correct": false,
              "feedback": "Review: οἴκαδε means homeward."
            },
            {
              "text": "to the sea",
              "correct": false,
              "feedback": "Review: οἴκαδε means homeward."
            },
            {
              "text": "homeward",
              "correct": true,
              "feedback": "Correct: οἴκαδε means homeward."
            }
          ]
        },
        {
          "id": "lesson-11-practice-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does σῷος mean?",
          "choices": [
            {
              "text": "safe",
              "correct": true,
              "feedback": "Correct: σῷος means safe."
            },
            {
              "text": "sacred",
              "correct": false,
              "feedback": "Review: σῷος means safe."
            },
            {
              "text": "distant",
              "correct": false,
              "feedback": "Review: σῷος means safe."
            },
            {
              "text": "wealthy",
              "correct": false,
              "feedback": "Review: σῷος means safe."
            }
          ]
        },
        {
          "id": "lesson-11-practice-013",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “I travel”?",
          "choices": [
            {
              "text": "πορεύεσθε",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: -ομαι is first-person singular."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            },
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-practice-014",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “he travels”?",
          "choices": [
            {
              "text": "πορευόμεθα",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            },
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            },
            {
              "text": "πορεύεται",
              "correct": true,
              "feedback": "Correct: -εται is third-person singular."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-practice-015",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “they travel”?",
          "choices": [
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            },
            {
              "text": "πορεύῃ",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            },
            {
              "text": "πορεύονται",
              "correct": true,
              "feedback": "Correct: -ονται is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-016",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “we travel”?",
          "choices": [
            {
              "text": "πορευόμεθα",
              "correct": true,
              "feedback": "Correct: -όμεθα is first-person plural."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "πορεύεσθε",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-017",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “you all travel”?",
          "choices": [
            {
              "text": "πορευόμεθα",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "πορεύεσθε",
              "correct": true,
              "feedback": "Correct: -εσθε is second-person plural."
            },
            {
              "text": "πορεύῃ",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-018",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “you travel” to one person?",
          "choices": [
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -ῃ is second-person singular."
            },
            {
              "text": "πορευόμεθα",
              "correct": false,
              "feedback": "Review: -ῃ is second-person singular."
            },
            {
              "text": "πορεύῃ",
              "correct": true,
              "feedback": "Correct: -ῃ is second-person singular."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -ῃ is second-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-practice-019",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What person is βούλεται?",
          "choices": [
            {
              "text": "first-person singular",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "second-person plural",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "third-person plural",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "third-person singular",
              "correct": true,
              "feedback": "Correct: -εται marks third-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-practice-020",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What person is εὔχομαι?",
          "choices": [
            {
              "text": "first-person singular",
              "correct": true,
              "feedback": "Correct: -ομαι marks first-person singular."
            },
            {
              "text": "third-person singular",
              "correct": false,
              "feedback": "Review: -ομαι marks first-person singular."
            },
            {
              "text": "first-person plural",
              "correct": false,
              "feedback": "Review: -ομαι marks first-person singular."
            },
            {
              "text": "third-person plural",
              "correct": false,
              "feedback": "Review: -ομαι marks first-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-practice-021",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What person is μαντεύονται?",
          "choices": [
            {
              "text": "second-person singular",
              "correct": false,
              "feedback": "Review: -ονται marks third-person plural."
            },
            {
              "text": "third-person plural",
              "correct": true,
              "feedback": "Correct: -ονται marks third-person plural."
            },
            {
              "text": "third-person singular",
              "correct": false,
              "feedback": "Review: -ονται marks third-person plural."
            },
            {
              "text": "first-person singular",
              "correct": false,
              "feedback": "Review: -ονται marks third-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-022",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which ending is first-person plural middle?",
          "choices": [
            {
              "text": "-εσθε",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "-ονται",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "-όμεθα",
              "correct": true,
              "feedback": "Correct: -όμεθα is first-person plural."
            },
            {
              "text": "-ομαι",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-023",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which ending is second-person plural middle?",
          "choices": [
            {
              "text": "-εται",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-όμεθα",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-ῃ",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-εσθε",
              "correct": true,
              "feedback": "Correct: -εσθε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-024",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What does πορεύεσθαι mean?",
          "choices": [
            {
              "text": "to travel",
              "correct": true,
              "feedback": "Correct: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "we travel",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-025",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should βούλεται be translated?",
          "choices": [
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he wants",
              "correct": true,
              "feedback": "Correct: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he is wanted",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he is sent",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            }
          ]
        },
        {
          "id": "lesson-11-practice-026",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should δέχεται be translated?",
          "choices": [
            {
              "text": "he sacrifices",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "he consults",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "he receives",
              "correct": true,
              "feedback": "Correct: δέχομαι means receive."
            },
            {
              "text": "he is received",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-027",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should σκέπτεται be translated?",
          "choices": [
            {
              "text": "he is considered",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider."
            },
            {
              "text": "he walks",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider."
            },
            {
              "text": "he prays",
              "correct": false,
              "feedback": "Review: σκέπτομαι means consider."
            },
            {
              "text": "he considers",
              "correct": true,
              "feedback": "Correct: σκέπτομαι means consider."
            }
          ]
        },
        {
          "id": "lesson-11-practice-028",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should μαντεύονται be translated?",
          "choices": [
            {
              "text": "they consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they are prophesied",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they build a shrine",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they leave home",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-practice-029",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should εὔχομαι be translated?",
          "choices": [
            {
              "text": "we pray",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "I pray",
              "correct": true,
              "feedback": "Correct: εὔχομαι means I pray."
            },
            {
              "text": "I am prayed",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "he prays",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            }
          ]
        },
        {
          "id": "lesson-11-practice-030",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "Which is a deponent meaning “travel”?",
          "choices": [
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: πορεύομαι has middle forms and means travel."
            },
            {
              "text": "βλέπω",
              "correct": false,
              "feedback": "Review: πορεύομαι has middle forms and means travel."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: πορεύομαι has middle forms and means travel."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: πορεύομαι has middle forms and means travel."
            }
          ]
        },
        {
          "id": "lesson-11-practice-031",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "Which is a deponent meaning “want”?",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "βούλομαι",
              "correct": true,
              "feedback": "Correct: βούλομαι has middle forms and means want."
            }
          ]
        },
        {
          "id": "lesson-11-practice-032",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "Which is a deponent meaning “receive”?",
          "choices": [
            {
              "text": "δέχομαι",
              "correct": true,
              "feedback": "Correct: δέχομαι has middle forms and means receive."
            },
            {
              "text": "ὁρῶ",
              "correct": false,
              "feedback": "Review: δέχομαι has middle forms and means receive."
            },
            {
              "text": "γράφω",
              "correct": false,
              "feedback": "Review: δέχομαι has middle forms and means receive."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: δέχομαι has middle forms and means receive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-033",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "Which is an active verb rather than a deponent?",
          "choices": [
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω is active."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            }
          ]
        },
        {
          "id": "lesson-11-practice-034",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "What does the middle ending alone tell you?",
          "choices": [
            {
              "text": "that the verb is future",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            },
            {
              "text": "that the subject is plural",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            },
            {
              "text": "person and number, not a fixed English passive",
              "correct": true,
              "feedback": "Correct: Meaning must be learned with the verb."
            },
            {
              "text": "that the verb must be passive",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            }
          ]
        },
        {
          "id": "lesson-11-practice-035",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "What does ἔρχομαι mean?",
          "choices": [
            {
              "text": "I am carried",
              "correct": false,
              "feedback": "Review: ἔρχομαι has active English meaning."
            },
            {
              "text": "I pray",
              "correct": false,
              "feedback": "Review: ἔρχομαι has active English meaning."
            },
            {
              "text": "I sacrifice",
              "correct": false,
              "feedback": "Review: ἔρχομαι has active English meaning."
            },
            {
              "text": "I come or go",
              "correct": true,
              "feedback": "Correct: ἔρχομαι has active English meaning."
            }
          ]
        },
        {
          "id": "lesson-11-practice-036",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "What does ἀπέρχομαι mean?",
          "choices": [
            {
              "text": "I depart",
              "correct": true,
              "feedback": "Correct: ἀπέρχομαι means depart."
            },
            {
              "text": "I arrive",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means depart."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means depart."
            },
            {
              "text": "I want",
              "correct": false,
              "feedback": "Review: ἀπέρχομαι means depart."
            }
          ]
        },
        {
          "id": "lesson-11-practice-037",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which reading form means “he arrives”?",
          "choices": [
            {
              "text": "εὔχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "ἀφικνεῖται",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "ἀπέρχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            }
          ]
        },
        {
          "id": "lesson-11-practice-038",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which form means “to arrive”?",
          "choices": [
            {
              "text": "ἀπέρχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "ἀφικνεῖσθαι",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "ἀφικνεῖται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-039",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which form means “he departs”?",
          "choices": [
            {
              "text": "ἀφικνεῖται",
              "correct": false,
              "feedback": "Review: ἀπέρχεται means departs."
            },
            {
              "text": "βούλεται",
              "correct": false,
              "feedback": "Review: ἀπέρχεται means departs."
            },
            {
              "text": "μαντεύεται",
              "correct": false,
              "feedback": "Review: ἀπέρχεται means departs."
            },
            {
              "text": "ἀπέρχεται",
              "correct": true,
              "feedback": "Correct: ἀπέρχεται means departs."
            }
          ]
        },
        {
          "id": "lesson-11-practice-040",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which form means “he comes”?",
          "choices": [
            {
              "text": "ἔρχεται",
              "correct": true,
              "feedback": "Correct: ἔρχεται means comes or goes."
            },
            {
              "text": "δέχεται",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            },
            {
              "text": "σκέπτεται",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            },
            {
              "text": "θύει",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            }
          ]
        },
        {
          "id": "lesson-11-practice-041",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What does εἰς Δελφοὺς ἀφικνεῖται mean?",
          "choices": [
            {
              "text": "he sends a letter to Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            },
            {
              "text": "he arrives at Delphi",
              "correct": true,
              "feedback": "Correct: εἰς plus accusative marks the destination."
            },
            {
              "text": "he leaves Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            },
            {
              "text": "he prays to Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            }
          ]
        },
        {
          "id": "lesson-11-practice-042",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What does πρὸς Δελφοὺς πορεύεται mean?",
          "choices": [
            {
              "text": "he consults Delphi",
              "correct": false,
              "feedback": "Review: πρός marks the direction of travel."
            },
            {
              "text": "he returns from Delphi",
              "correct": false,
              "feedback": "Review: πρός marks the direction of travel."
            },
            {
              "text": "he travels toward Delphi",
              "correct": true,
              "feedback": "Correct: πρός marks the direction of travel."
            },
            {
              "text": "he departs from Delphi",
              "correct": false,
              "feedback": "Review: πρός marks the direction of travel."
            }
          ]
        },
        {
          "id": "lesson-11-practice-043",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What does ἀπὸ τοῦ ἱεροῦ ἀπέρχεται mean?",
          "choices": [
            {
              "text": "he arrives at the sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he builds a sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he prays in a sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he leaves the sanctuary",
              "correct": true,
              "feedback": "Correct: ἀπό marks departure from the sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-practice-044",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What is the dictionary form behind ἀφικνεῖται?",
          "choices": [
            {
              "text": "ἀφικνέομαι",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            }
          ]
        },
        {
          "id": "lesson-11-practice-045",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which verb describes motion along a route?",
          "choices": [
            {
              "text": "σκέπτομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel."
            },
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel."
            }
          ]
        },
        {
          "id": "lesson-11-practice-046",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which verb emphasizes reaching the destination?",
          "choices": [
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-047",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What destination follows εἰς in the reading?",
          "choices": [
            {
              "text": "Ἀθηνῶν",
              "correct": false,
              "feedback": "Review: εἰς Δελφούς means to Delphi."
            },
            {
              "text": "Παρνασσός",
              "correct": false,
              "feedback": "Review: εἰς Δελφούς means to Delphi."
            },
            {
              "text": "Σωκράτης",
              "correct": false,
              "feedback": "Review: εἰς Δελφούς means to Delphi."
            },
            {
              "text": "Δελφούς",
              "correct": true,
              "feedback": "Correct: εἰς Δελφούς means to Delphi."
            }
          ]
        },
        {
          "id": "lesson-11-practice-048",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which phrase marks movement away?",
          "choices": [
            {
              "text": "ἀπὸ τοῦ ἱεροῦ",
              "correct": true,
              "feedback": "Correct: ἀπό marks movement from a place."
            },
            {
              "text": "εἰς Δελφούς",
              "correct": false,
              "feedback": "Review: ἀπό marks movement from a place."
            },
            {
              "text": "πρὸς τὸ μαντεῖον",
              "correct": false,
              "feedback": "Review: ἀπό marks movement from a place."
            },
            {
              "text": "πρὸς Κῦρον",
              "correct": false,
              "feedback": "Review: ἀπό marks movement from a place."
            }
          ]
        },
        {
          "id": "lesson-11-practice-049",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What does βούλομαι πορεύεσθαι mean?",
          "choices": [
            {
              "text": "I am traveling",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            },
            {
              "text": "I want to travel",
              "correct": true,
              "feedback": "Correct: The infinitive names the action wanted."
            },
            {
              "text": "I travel unwillingly",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            },
            {
              "text": "he wants to arrive",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            }
          ]
        },
        {
          "id": "lesson-11-practice-050",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What does βούλεται ἰέναι mean?",
          "choices": [
            {
              "text": "he is sent",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "they want to go",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "he wants to go",
              "correct": true,
              "feedback": "Correct: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "he arrives",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            }
          ]
        },
        {
          "id": "lesson-11-practice-051",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Which word is the infinitive in βούλομαι πορεύεσθαι?",
          "choices": [
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is to travel."
            },
            {
              "text": "both words",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is to travel."
            },
            {
              "text": "neither word",
              "correct": false,
              "feedback": "Review: πορεύεσθαι is to travel."
            },
            {
              "text": "πορεύεσθαι",
              "correct": true,
              "feedback": "Correct: πορεύεσθαι is to travel."
            }
          ]
        },
        {
          "id": "lesson-11-practice-052",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Which word means “I want” in βούλομαι πορεύεσθαι?",
          "choices": [
            {
              "text": "βούλομαι",
              "correct": true,
              "feedback": "Correct: βούλομαι means I want."
            },
            {
              "text": "πορεύεσθαι",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            },
            {
              "text": "both words",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            },
            {
              "text": "neither word",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            }
          ]
        },
        {
          "id": "lesson-11-practice-053",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What does ἀφικνεῖσθαι mean?",
          "choices": [
            {
              "text": "they arrive",
              "correct": false,
              "feedback": "Review: -εσθαι is infinitive after contraction."
            },
            {
              "text": "to arrive",
              "correct": true,
              "feedback": "Correct: -εσθαι is infinitive after contraction."
            },
            {
              "text": "he arrives",
              "correct": false,
              "feedback": "Review: -εσθαι is infinitive after contraction."
            },
            {
              "text": "I arrive",
              "correct": false,
              "feedback": "Review: -εσθαι is infinitive after contraction."
            }
          ]
        },
        {
          "id": "lesson-11-practice-054",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Which phrase means “I want to arrive”?",
          "choices": [
            {
              "text": "πορεύομαι ἰέναι",
              "correct": false,
              "feedback": "Review: βούλομαι plus infinitive expresses desire."
            },
            {
              "text": "δέχομαι ἐρωτᾷ",
              "correct": false,
              "feedback": "Review: βούλομαι plus infinitive expresses desire."
            },
            {
              "text": "βούλομαι ἀφικνεῖσθαι",
              "correct": true,
              "feedback": "Correct: βούλομαι plus infinitive expresses desire."
            },
            {
              "text": "βούλεται ἀφικνεῖται",
              "correct": false,
              "feedback": "Review: βούλομαι plus infinitive expresses desire."
            }
          ]
        },
        {
          "id": "lesson-11-practice-055",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What person is a present infinitive?",
          "choices": [
            {
              "text": "first-person singular",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "third-person singular",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "second-person plural",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "it has no person ending",
              "correct": true,
              "feedback": "Correct: An infinitive names an action without a person ending."
            }
          ]
        },
        {
          "id": "lesson-11-practice-056",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Which ending usually marks a middle infinitive?",
          "choices": [
            {
              "text": "-εσθαι",
              "correct": true,
              "feedback": "Correct: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-εται",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-ομαι",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-ονται",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            }
          ]
        },
        {
          "id": "lesson-11-practice-057",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What is the action wanted in βούλομαι καλῶς πορεύεσθαι?",
          "choices": [
            {
              "text": "to leave Athens immediately",
              "correct": false,
              "feedback": "Review: πορεύεσθαι names the desired action."
            },
            {
              "text": "to travel successfully",
              "correct": true,
              "feedback": "Correct: πορεύεσθαι names the desired action."
            },
            {
              "text": "to pray to Apollo",
              "correct": false,
              "feedback": "Review: πορεύεσθαι names the desired action."
            },
            {
              "text": "to receive a gift",
              "correct": false,
              "feedback": "Review: πορεύεσθαι names the desired action."
            }
          ]
        },
        {
          "id": "lesson-11-practice-058",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What is ἰέναι?",
          "choices": [
            {
              "text": "a plural imperative",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            },
            {
              "text": "an article",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            },
            {
              "text": "an irregular infinitive meaning to go",
              "correct": true,
              "feedback": "Correct: ἰέναι means to go."
            },
            {
              "text": "a dative noun",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            }
          ]
        },
        {
          "id": "lesson-11-practice-059",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Does πορεύεσθαι change when the subject changes?",
          "choices": [
            {
              "text": "yes, it takes -εται",
              "correct": false,
              "feedback": "Review: Infinitives do not mark person."
            },
            {
              "text": "yes, it takes -ονται",
              "correct": false,
              "feedback": "Review: Infinitives do not mark person."
            },
            {
              "text": "yes, it becomes a noun",
              "correct": false,
              "feedback": "Review: Infinitives do not mark person."
            },
            {
              "text": "no, the infinitive stays the same",
              "correct": true,
              "feedback": "Correct: Infinitives do not mark person."
            }
          ]
        },
        {
          "id": "lesson-11-practice-060",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What does βούλεται πορεύεσθαι mean?",
          "choices": [
            {
              "text": "he wants to travel",
              "correct": true,
              "feedback": "Correct: βούλεται is he wants."
            },
            {
              "text": "I want to travel",
              "correct": false,
              "feedback": "Review: βούλεται is he wants."
            },
            {
              "text": "they want to travel",
              "correct": false,
              "feedback": "Review: βούλεται is he wants."
            },
            {
              "text": "he is traveled",
              "correct": false,
              "feedback": "Review: βούλεται is he wants."
            }
          ]
        },
        {
          "id": "lesson-11-practice-061",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does ἐρωτᾷ mean?",
          "choices": [
            {
              "text": "he receives",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is contracted active from ἐρωτάω."
            },
            {
              "text": "he asks",
              "correct": true,
              "feedback": "Correct: ἐρωτᾷ is contracted active from ἐρωτάω."
            },
            {
              "text": "he prays",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is contracted active from ἐρωτάω."
            },
            {
              "text": "he arrives",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is contracted active from ἐρωτάω."
            }
          ]
        },
        {
          "id": "lesson-11-practice-062",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does ἐρωτῶ mean?",
          "choices": [
            {
              "text": "they pray",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "I receive",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "I ask",
              "correct": true,
              "feedback": "Correct: ἐρωτῶ is first-person active."
            },
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            }
          ]
        },
        {
          "id": "lesson-11-practice-063",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does εὔχομαι mean?",
          "choices": [
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "I sacrifice",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "I arrive",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "I pray",
              "correct": true,
              "feedback": "Correct: εὔχομαι means I pray."
            }
          ]
        },
        {
          "id": "lesson-11-practice-064",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does τίσι θεοῖς mean?",
          "choices": [
            {
              "text": "to which gods",
              "correct": true,
              "feedback": "Correct: τίσι θεοῖς is dative plural."
            },
            {
              "text": "from which gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "the god asks",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "these gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-11-practice-065",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does θύειν mean?",
          "choices": [
            {
              "text": "to pray",
              "correct": false,
              "feedback": "Review: θύειν is active infinitive."
            },
            {
              "text": "to sacrifice",
              "correct": true,
              "feedback": "Correct: θύειν is active infinitive."
            },
            {
              "text": "he sacrifices",
              "correct": false,
              "feedback": "Review: θύειν is active infinitive."
            },
            {
              "text": "I sacrifice",
              "correct": false,
              "feedback": "Review: θύειν is active infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-066",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does εὔχεσθαι mean?",
          "choices": [
            {
              "text": "I pray",
              "correct": false,
              "feedback": "Review: εὔχεσθαι is middle infinitive."
            },
            {
              "text": "to consult",
              "correct": false,
              "feedback": "Review: εὔχεσθαι is middle infinitive."
            },
            {
              "text": "to pray",
              "correct": true,
              "feedback": "Correct: εὔχεσθαι is middle infinitive."
            },
            {
              "text": "he prays",
              "correct": false,
              "feedback": "Review: εὔχεσθαι is middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-practice-067",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Which verb is active?",
          "choices": [
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω is active."
            }
          ]
        },
        {
          "id": "lesson-11-practice-068",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Which verb means to pray with middle endings?",
          "choices": [
            {
              "text": "εὔχομαι",
              "correct": true,
              "feedback": "Correct: εὔχομαι is middle in form."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: εὔχομαι is middle in form."
            },
            {
              "text": "θύω",
              "correct": false,
              "feedback": "Review: εὔχομαι is middle in form."
            },
            {
              "text": "δηλόω",
              "correct": false,
              "feedback": "Review: εὔχομαι is middle in form."
            }
          ]
        },
        {
          "id": "lesson-11-practice-069",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "To whom does Xenophon direct the question?",
          "choices": [
            {
              "text": "the Pythian Games",
              "correct": false,
              "feedback": "Review: Anabasis says Xenophon asked Apollo."
            },
            {
              "text": "Apollo",
              "correct": true,
              "feedback": "Correct: Anabasis says Xenophon asked Apollo."
            },
            {
              "text": "Croesus",
              "correct": false,
              "feedback": "Review: Anabasis says Xenophon asked Apollo."
            },
            {
              "text": "Proxenus",
              "correct": false,
              "feedback": "Review: Anabasis says Xenophon asked Apollo."
            }
          ]
        },
        {
          "id": "lesson-11-practice-070",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does the question ask?",
          "choices": [
            {
              "text": "which temple to build",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            },
            {
              "text": "who won the Pythian Games",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            },
            {
              "text": "which gods to sacrifice and pray to",
              "correct": true,
              "feedback": "Correct: The question asks for gods for the journey."
            },
            {
              "text": "whether Proxenus wrote the letter",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            }
          ]
        },
        {
          "id": "lesson-11-practice-071",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Does Anabasis 3.1.6 name the gods?",
          "choices": [
            {
              "text": "yes, all twelve Olympians",
              "correct": false,
              "feedback": "Review: The passage does not supply their names."
            },
            {
              "text": "yes, Zeus alone",
              "correct": false,
              "feedback": "Review: The passage does not supply their names."
            },
            {
              "text": "yes, Apollo alone",
              "correct": false,
              "feedback": "Review: The passage does not supply their names."
            },
            {
              "text": "no",
              "correct": true,
              "feedback": "Correct: The passage does not supply their names."
            }
          ]
        },
        {
          "id": "lesson-11-practice-072",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Is the reading’s quoted question a preserved ancient quotation?",
          "choices": [
            {
              "text": "no, it is an adaptation",
              "correct": true,
              "feedback": "Correct: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, Xenophon records these exact words",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, Herodotus quotes it",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, it is written on the temple",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 11 Grammar Exercises",
      "description": "Present middle endings, deponents, motion, infinitives, and inquiry",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-11-grammar-exercises-v1",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-11-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “he travels”?",
          "choices": [
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            },
            {
              "text": "πορεύεται",
              "correct": true,
              "feedback": "Correct: -εται is third-person singular."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            },
            {
              "text": "πορευόμεθα",
              "correct": false,
              "feedback": "Review: -εται is third-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which form means “we travel”?",
          "choices": [
            {
              "text": "πορεύεσθε",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "πορευόμεθα",
              "correct": true,
              "feedback": "Correct: -όμεθα is first-person plural."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What person is βούλεται?",
          "choices": [
            {
              "text": "first-person singular",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "second-person plural",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "third-person plural",
              "correct": false,
              "feedback": "Review: -εται marks third-person singular."
            },
            {
              "text": "third-person singular",
              "correct": true,
              "feedback": "Correct: -εται marks third-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "Which ending is first-person plural middle?",
          "choices": [
            {
              "text": "-όμεθα",
              "correct": true,
              "feedback": "Correct: -όμεθα is first-person plural."
            },
            {
              "text": "-ομαι",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "-εσθε",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            },
            {
              "text": "-ονται",
              "correct": false,
              "feedback": "Review: -όμεθα is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should δέχεται be translated?",
          "choices": [
            {
              "text": "he consults",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "he receives",
              "correct": true,
              "feedback": "Correct: δέχομαι means receive."
            },
            {
              "text": "he is received",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "he sacrifices",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should μαντεύονται be translated?",
          "choices": [
            {
              "text": "they build a shrine",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they leave home",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they are prophesied",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "Which is a deponent meaning “want”?",
          "choices": [
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "φέρω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: βούλομαι has middle forms and means want."
            },
            {
              "text": "βούλομαι",
              "correct": true,
              "feedback": "Correct: βούλομαι has middle forms and means want."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "What does the middle ending alone tell you?",
          "choices": [
            {
              "text": "person and number, not a fixed English passive",
              "correct": true,
              "feedback": "Correct: Meaning must be learned with the verb."
            },
            {
              "text": "that the verb must be passive",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            },
            {
              "text": "that the verb is future",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            },
            {
              "text": "that the subject is plural",
              "correct": false,
              "feedback": "Review: Meaning must be learned with the verb."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which form means “to arrive”?",
          "choices": [
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "ἀφικνεῖσθαι",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "ἀφικνεῖται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            },
            {
              "text": "ἀπέρχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖσθαι is the contracted middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which form means “he comes”?",
          "choices": [
            {
              "text": "σκέπτεται",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            },
            {
              "text": "θύει",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            },
            {
              "text": "ἔρχεται",
              "correct": true,
              "feedback": "Correct: ἔρχεται means comes or goes."
            },
            {
              "text": "δέχεται",
              "correct": false,
              "feedback": "Review: ἔρχεται means comes or goes."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What does ἀπὸ τοῦ ἱεροῦ ἀπέρχεται mean?",
          "choices": [
            {
              "text": "he arrives at the sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he builds a sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he prays in a sanctuary",
              "correct": false,
              "feedback": "Review: ἀπό marks departure from the sanctuary."
            },
            {
              "text": "he leaves the sanctuary",
              "correct": true,
              "feedback": "Correct: ἀπό marks departure from the sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "Which verb emphasizes reaching the destination?",
          "choices": [
            {
              "text": "ἀφικνέομαι",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What does βούλεται ἰέναι mean?",
          "choices": [
            {
              "text": "they want to go",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "he wants to go",
              "correct": true,
              "feedback": "Correct: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "he arrives",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            },
            {
              "text": "he is sent",
              "correct": false,
              "feedback": "Review: βούλεται is he wants; ἰέναι is to go."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "Which word means “I want” in βούλομαι πορεύεσθαι?",
          "choices": [
            {
              "text": "both words",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            },
            {
              "text": "neither word",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            },
            {
              "text": "βούλομαι",
              "correct": true,
              "feedback": "Correct: βούλομαι means I want."
            },
            {
              "text": "πορεύεσθαι",
              "correct": false,
              "feedback": "Review: βούλομαι means I want."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What person is a present infinitive?",
          "choices": [
            {
              "text": "first-person singular",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "third-person singular",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "second-person plural",
              "correct": false,
              "feedback": "Review: An infinitive names an action without a person ending."
            },
            {
              "text": "it has no person ending",
              "correct": true,
              "feedback": "Correct: An infinitive names an action without a person ending."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "wanting-infinitives",
          "category": "Grammar",
          "prompt": "What is ἰέναι?",
          "choices": [
            {
              "text": "an irregular infinitive meaning to go",
              "correct": true,
              "feedback": "Correct: ἰέναι means to go."
            },
            {
              "text": "a dative noun",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            },
            {
              "text": "a plural imperative",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            },
            {
              "text": "an article",
              "correct": false,
              "feedback": "Review: ἰέναι means to go."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does ἐρωτῶ mean?",
          "choices": [
            {
              "text": "I receive",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "I ask",
              "correct": true,
              "feedback": "Correct: ἐρωτῶ is first-person active."
            },
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "they pray",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does τίσι θεοῖς mean?",
          "choices": [
            {
              "text": "the god asks",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "these gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "to which gods",
              "correct": true,
              "feedback": "Correct: τίσι θεοῖς is dative plural."
            },
            {
              "text": "from which gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Which verb is active?",
          "choices": [
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω is active."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "What does the question ask?",
          "choices": [
            {
              "text": "which gods to sacrifice and pray to",
              "correct": true,
              "feedback": "Correct: The question asks for gods for the journey."
            },
            {
              "text": "whether Proxenus wrote the letter",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            },
            {
              "text": "which temple to build",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            },
            {
              "text": "who won the Pythian Games",
              "correct": false,
              "feedback": "Review: The question asks for gods for the journey."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "middle-endings",
          "category": "Grammar",
          "prompt": "What does πορεύεσθαι mean?",
          "choices": [
            {
              "text": "we travel",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "to travel",
              "correct": true,
              "feedback": "Correct: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            },
            {
              "text": "they travel",
              "correct": false,
              "feedback": "Review: -εσθαι marks a present middle infinitive."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "deponents",
          "category": "Grammar",
          "prompt": "How should εὔχομαι be translated?",
          "choices": [
            {
              "text": "he prays",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "we pray",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            },
            {
              "text": "I pray",
              "correct": true,
              "feedback": "Correct: εὔχομαι means I pray."
            },
            {
              "text": "I am prayed",
              "correct": false,
              "feedback": "Review: εὔχομαι means I pray."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "going-arriving",
          "category": "Grammar",
          "prompt": "What is the dictionary form behind ἀφικνεῖται?",
          "choices": [
            {
              "text": "ἀπέρχομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "μαντεύομαι",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is contracted from ἀφικνέομαι."
            },
            {
              "text": "ἀφικνέομαι",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖται is contracted from ἀφικνέομαι."
            }
          ]
        },
        {
          "id": "lesson-11-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "asking-praying",
          "category": "Grammar",
          "prompt": "Is the reading’s quoted question a preserved ancient quotation?",
          "choices": [
            {
              "text": "no, it is an adaptation",
              "correct": true,
              "feedback": "Correct: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, Xenophon records these exact words",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, Herodotus quotes it",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            },
            {
              "text": "yes, it is written on the temple",
              "correct": false,
              "feedback": "Review: The source reports its substance, not its exact wording."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 11 Final Quiz — The Question at Delphi",
      "description": "Reading, vocabulary, grammar, Delphi, and Croesus",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-11-final-quiz-v1",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 11 and continue to Lesson 12.",
      "questions": [
        {
          "id": "lesson-11-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Why does Xenophon travel to Delphi?",
          "choices": [
            {
              "text": "to meet Proxenus there",
              "correct": false,
              "feedback": "Review: Socrates advised him to consult Apollo."
            },
            {
              "text": "to consult Apollo about his journey",
              "correct": true,
              "feedback": "Correct: Socrates advised him to consult Apollo."
            },
            {
              "text": "to visit Croesus",
              "correct": false,
              "feedback": "Review: Socrates advised him to consult Apollo."
            },
            {
              "text": "to join the Pythian Games",
              "correct": false,
              "feedback": "Review: Socrates advised him to consult Apollo."
            }
          ]
        },
        {
          "id": "lesson-11-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Toward whom is Xenophon already inclined to travel?",
          "choices": [
            {
              "text": "Plato",
              "correct": false,
              "feedback": "Review: The invitation draws him toward Cyrus."
            },
            {
              "text": "the Spartan king",
              "correct": false,
              "feedback": "Review: The invitation draws him toward Cyrus."
            },
            {
              "text": "Cyrus the Younger",
              "correct": true,
              "feedback": "Correct: The invitation draws him toward Cyrus."
            },
            {
              "text": "Croesus",
              "correct": false,
              "feedback": "Review: The invitation draws him toward Cyrus."
            }
          ]
        },
        {
          "id": "lesson-11-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Xenophon carry from Athens?",
          "choices": [
            {
              "text": "a Delphic inscription",
              "correct": false,
              "feedback": "Review: The reading has him carrying Proxenus’s letter."
            },
            {
              "text": "Croesus’s gift",
              "correct": false,
              "feedback": "Review: The reading has him carrying Proxenus’s letter."
            },
            {
              "text": "a Persian shield",
              "correct": false,
              "feedback": "Review: The reading has him carrying Proxenus’s letter."
            },
            {
              "text": "Proxenus’s letter",
              "correct": true,
              "feedback": "Correct: The reading has him carrying Proxenus’s letter."
            }
          ]
        },
        {
          "id": "lesson-11-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Xenophon see on reaching Delphi?",
          "choices": [
            {
              "text": "sacred buildings on the slopes",
              "correct": true,
              "feedback": "Correct: The adapted setting places sanctuary buildings on the slopes."
            },
            {
              "text": "the Athenian Acropolis",
              "correct": false,
              "feedback": "Review: The adapted setting places sanctuary buildings on the slopes."
            },
            {
              "text": "the Persian court",
              "correct": false,
              "feedback": "Review: The adapted setting places sanctuary buildings on the slopes."
            },
            {
              "text": "the walls of Sardis",
              "correct": false,
              "feedback": "Review: The adapted setting places sanctuary buildings on the slopes."
            }
          ]
        },
        {
          "id": "lesson-11-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Which gods does Xenophon ask about?",
          "choices": [
            {
              "text": "the gods in Proxenus’s home",
              "correct": false,
              "feedback": "Review: His question concerns sacrifice and prayer for the journey."
            },
            {
              "text": "the gods to sacrifice and pray to for his journey",
              "correct": true,
              "feedback": "Correct: His question concerns sacrifice and prayer for the journey."
            },
            {
              "text": "the gods who founded Athens",
              "correct": false,
              "feedback": "Review: His question concerns sacrifice and prayer for the journey."
            },
            {
              "text": "the gods worshiped by Croesus alone",
              "correct": false,
              "feedback": "Review: His question concerns sacrifice and prayer for the journey."
            }
          ]
        },
        {
          "id": "lesson-11-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does the passage preserve of Apollo’s answer?",
          "choices": [
            {
              "text": "a list of twelve gods",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.6 does not give the gods’ names or exact wording."
            },
            {
              "text": "a refusal to answer",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.6 does not give the gods’ names or exact wording."
            },
            {
              "text": "that it named gods for sacrifice, but not their names or exact words",
              "correct": true,
              "feedback": "Correct: Anabasis 3.1.6 does not give the gods’ names or exact wording."
            },
            {
              "text": "the complete words of the Pythia",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.6 does not give the gods’ names or exact wording."
            }
          ]
        },
        {
          "id": "lesson-11-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πορεύομαι mean?",
          "choices": [
            {
              "text": "come, go",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "sanctuary",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "consider, reflect",
              "correct": false,
              "feedback": "Review: πορεύομαι means travel, go."
            },
            {
              "text": "travel, go",
              "correct": true,
              "feedback": "Correct: πορεύομαι means travel, go."
            }
          ]
        },
        {
          "id": "lesson-11-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἀφικνέομαι mean?",
          "choices": [
            {
              "text": "arrive",
              "correct": true,
              "feedback": "Correct: ἀφικνέομαι means arrive."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "temple",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            },
            {
              "text": "consult an oracle",
              "correct": false,
              "feedback": "Review: ἀφικνέομαι means arrive."
            }
          ]
        },
        {
          "id": "lesson-11-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does βούλομαι mean?",
          "choices": [
            {
              "text": "receive",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "want, wish",
              "correct": true,
              "feedback": "Correct: βούλομαι means want, wish."
            },
            {
              "text": "consult an oracle",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            },
            {
              "text": "response, answer",
              "correct": false,
              "feedback": "Review: βούλομαι means want, wish."
            }
          ]
        },
        {
          "id": "lesson-11-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does μαντεύομαι mean?",
          "choices": [
            {
              "text": "pray",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "oracle",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀπόκρισις mean?",
          "choices": [
            {
              "text": "pray",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: ἡ ἀπόκρισις means response, answer."
            },
            {
              "text": "response, answer",
              "correct": true,
              "feedback": "Correct: ἡ ἀπόκρισις means response, answer."
            }
          ]
        },
        {
          "id": "lesson-11-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does δέχομαι mean?",
          "choices": [
            {
              "text": "receive",
              "correct": true,
              "feedback": "Correct: δέχομαι means receive."
            },
            {
              "text": "travel, go",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "go away, depart",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            },
            {
              "text": "temple",
              "correct": false,
              "feedback": "Review: δέχομαι means receive."
            }
          ]
        },
        {
          "id": "lesson-11-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form means “I travel”?",
          "choices": [
            {
              "text": "πορεύεσθε",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            },
            {
              "text": "πορεύομαι",
              "correct": true,
              "feedback": "Correct: -ομαι is first-person singular."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            },
            {
              "text": "πορεύονται",
              "correct": false,
              "feedback": "Review: -ομαι is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-11-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form means “they travel”?",
          "choices": [
            {
              "text": "πορεύῃ",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            },
            {
              "text": "πορεύομαι",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            },
            {
              "text": "πορεύονται",
              "correct": true,
              "feedback": "Correct: -ονται is third-person plural."
            },
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: -ονται is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which ending is second-person plural middle?",
          "choices": [
            {
              "text": "-εται",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-όμεθα",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-ῃ",
              "correct": false,
              "feedback": "Review: -εσθε is second-person plural."
            },
            {
              "text": "-εσθε",
              "correct": true,
              "feedback": "Correct: -εσθε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-11-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "How should βούλεται be translated?",
          "choices": [
            {
              "text": "he wants",
              "correct": true,
              "feedback": "Correct: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he is wanted",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he is sent",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            },
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: βούλομαι has middle form and active meaning."
            }
          ]
        },
        {
          "id": "lesson-11-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "How should μαντεύονται be translated?",
          "choices": [
            {
              "text": "they leave home",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they consult an oracle",
              "correct": true,
              "feedback": "Correct: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they are prophesied",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            },
            {
              "text": "they build a shrine",
              "correct": false,
              "feedback": "Review: μαντεύομαι means consult an oracle."
            }
          ]
        },
        {
          "id": "lesson-11-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is an active verb rather than a deponent?",
          "choices": [
            {
              "text": "βούλομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "δέχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω is active."
            },
            {
              "text": "εὔχομαι",
              "correct": false,
              "feedback": "Review: ἐρωτάω is active."
            }
          ]
        },
        {
          "id": "lesson-11-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which reading form means “he arrives”?",
          "choices": [
            {
              "text": "πορεύεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "ἀπέρχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "εὔχεται",
              "correct": false,
              "feedback": "Review: ἀφικνεῖται is the contracted arrival form."
            },
            {
              "text": "ἀφικνεῖται",
              "correct": true,
              "feedback": "Correct: ἀφικνεῖται is the contracted arrival form."
            }
          ]
        },
        {
          "id": "lesson-11-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does εἰς Δελφοὺς ἀφικνεῖται mean?",
          "choices": [
            {
              "text": "he arrives at Delphi",
              "correct": true,
              "feedback": "Correct: εἰς plus accusative marks the destination."
            },
            {
              "text": "he leaves Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            },
            {
              "text": "he prays to Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            },
            {
              "text": "he sends a letter to Delphi",
              "correct": false,
              "feedback": "Review: εἰς plus accusative marks the destination."
            }
          ]
        },
        {
          "id": "lesson-11-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does βούλομαι πορεύεσθαι mean?",
          "choices": [
            {
              "text": "I am traveling",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            },
            {
              "text": "I want to travel",
              "correct": true,
              "feedback": "Correct: The infinitive names the action wanted."
            },
            {
              "text": "I travel unwillingly",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            },
            {
              "text": "he wants to arrive",
              "correct": false,
              "feedback": "Review: The infinitive names the action wanted."
            }
          ]
        },
        {
          "id": "lesson-11-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which ending usually marks a middle infinitive?",
          "choices": [
            {
              "text": "-ομαι",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-ονται",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-εσθαι",
              "correct": true,
              "feedback": "Correct: -εσθαι is the middle infinitive ending."
            },
            {
              "text": "-εται",
              "correct": false,
              "feedback": "Review: -εσθαι is the middle infinitive ending."
            }
          ]
        },
        {
          "id": "lesson-11-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does ἐρωτῶ mean?",
          "choices": [
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "they pray",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "I receive",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person active."
            },
            {
              "text": "I ask",
              "correct": true,
              "feedback": "Correct: ἐρωτῶ is first-person active."
            }
          ]
        },
        {
          "id": "lesson-11-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does τίσι θεοῖς mean?",
          "choices": [
            {
              "text": "to which gods",
              "correct": true,
              "feedback": "Correct: τίσι θεοῖς is dative plural."
            },
            {
              "text": "from which gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "the god asks",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            },
            {
              "text": "these gods",
              "correct": false,
              "feedback": "Review: τίσι θεοῖς is dative plural."
            }
          ]
        },
        {
          "id": "lesson-11-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Why is Delphi called a Panhellenic sanctuary?",
          "choices": [
            {
              "text": "it was inside Sparta",
              "correct": false,
              "feedback": "Review: People from many Greek communities visited Delphi."
            },
            {
              "text": "people from many Greek cities visited it",
              "correct": true,
              "feedback": "Correct: People from many Greek communities visited Delphi."
            },
            {
              "text": "only Athenians could enter",
              "correct": false,
              "feedback": "Review: People from many Greek communities visited Delphi."
            },
            {
              "text": "it belonged to Lydia",
              "correct": false,
              "feedback": "Review: People from many Greek communities visited Delphi."
            }
          ]
        },
        {
          "id": "lesson-11-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Who delivered responses at Apollo’s oracle?",
          "choices": [
            {
              "text": "Xenophon",
              "correct": false,
              "feedback": "Review: The Pythia delivered oracular responses."
            },
            {
              "text": "Proxenus",
              "correct": false,
              "feedback": "Review: The Pythia delivered oracular responses."
            },
            {
              "text": "the Pythia, Apollo’s priestess",
              "correct": true,
              "feedback": "Correct: The Pythia delivered oracular responses."
            },
            {
              "text": "Croesus",
              "correct": false,
              "feedback": "Review: The Pythia delivered oracular responses."
            }
          ]
        },
        {
          "id": "lesson-11-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which non-Greek ruler consulted Delphi in Herodotus’s account?",
          "choices": [
            {
              "text": "Cyrus the Younger",
              "correct": false,
              "feedback": "Review: Herodotus tells of Croesus of Lydia consulting Delphi."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: Herodotus tells of Croesus of Lydia consulting Delphi."
            },
            {
              "text": "Pericles",
              "correct": false,
              "feedback": "Review: Herodotus tells of Croesus of Lydia consulting Delphi."
            },
            {
              "text": "Croesus of Lydia",
              "correct": true,
              "feedback": "Correct: Herodotus tells of Croesus of Lydia consulting Delphi."
            }
          ]
        },
        {
          "id": "lesson-11-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What did Herodotus say Croesus misread?",
          "choices": [
            {
              "text": "which empire would fall if he attacked Persia",
              "correct": true,
              "feedback": "Correct: Croesus assumed the empire was Persia’s."
            },
            {
              "text": "the route to the Pythian Games",
              "correct": false,
              "feedback": "Review: Croesus assumed the empire was Persia’s."
            },
            {
              "text": "the gods named for Xenophon",
              "correct": false,
              "feedback": "Review: Croesus assumed the empire was Persia’s."
            },
            {
              "text": "Socrates’s advice",
              "correct": false,
              "feedback": "Review: Croesus assumed the empire was Persia’s."
            }
          ]
        },
        {
          "id": "lesson-11-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What did the Sacred Way lead through?",
          "choices": [
            {
              "text": "Croesus’s palace",
              "correct": false,
              "feedback": "Review: The Sacred Way passed monuments in the sanctuary."
            },
            {
              "text": "Apollo’s sanctuary past dedications and treasuries",
              "correct": true,
              "feedback": "Correct: The Sacred Way passed monuments in the sanctuary."
            },
            {
              "text": "the Persian capital",
              "correct": false,
              "feedback": "Review: The Sacred Way passed monuments in the sanctuary."
            },
            {
              "text": "the Athenian harbor",
              "correct": false,
              "feedback": "Review: The Sacred Way passed monuments in the sanctuary."
            }
          ]
        },
        {
          "id": "lesson-11-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What is the culture-page picture?",
          "choices": [
            {
              "text": "a map drawn by Croesus",
              "correct": false,
              "feedback": "Review: Tournaire painted a modern reconstruction."
            },
            {
              "text": "a portrait of the Pythia",
              "correct": false,
              "feedback": "Review: Tournaire painted a modern reconstruction."
            },
            {
              "text": "an 1894 painted reconstruction by Albert Tournaire",
              "correct": true,
              "feedback": "Correct: Tournaire painted a modern reconstruction."
            },
            {
              "text": "a photograph from Xenophon’s lifetime",
              "correct": false,
              "feedback": "Review: Tournaire painted a modern reconstruction."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-12",
    "title": "The Question He Did Not Ask",
    "fallbackUrl": "lesson.html?lesson=12&page=1"
  },
  "contentRevision": "lesson-11-delphi-complete-v1",
  "previousLesson": {
    "id": "lesson-10",
    "title": "The Letter from Proxenus",
    "fallbackUrl": "lesson.html?lesson=10&page=1"
  }
}$json$::jsonb;
  lesson_id_value uuid;
  segment_id_value uuid;
  reading_id_value uuid;
  old_content jsonb;
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
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-11' FOR UPDATE;
  SELECT content INTO old_content FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;
  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN RETURN; END IF;
  IF old_content IS NULL THEN
    INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1);
  ELSE
    UPDATE public.lesson_content_overrides SET content=patch,version=version+1,updated_at=now() WHERE lesson_id=lesson_id_value;
  END IF;
  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;
  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)
  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p
  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;
  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-11-page-1';
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
      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_11_delphi'))
      ON CONFLICT (lemma,display_form,gloss) DO NOTHING;
      SELECT id INTO STRICT vocab_id FROM public.vocabulary_items WHERE lemma=vocab_item->>'lemma' AND display_form=vocab_item->>'greek' AND gloss=vocab_item->>'english';
      INSERT INTO public.lesson_vocabulary (lesson_id,vocabulary_item_id,sort_order) VALUES (lesson_id_value,vocab_id,vocab_order);
      vocab_order:=vocab_order+1;
    END LOOP;
  END LOOP;
  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order) VALUES (lesson_id_value,'published-structured-content','Published Structured Content',99)
  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title RETURNING id INTO segment_id_value;
  FOREACH block_kind IN ARRAY ARRAY['reading','wordStudy','grammar','culture','enrichment','activities'] LOOP
    UPDATE public.lesson_content_blocks b SET content=jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),updated_at=now()
    FROM public.lesson_segments s WHERE b.segment_id=s.id AND s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind;
    IF NOT EXISTS (SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind) THEN
      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)
      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),
        CASE block_kind WHEN 'reading' THEN 1 WHEN 'wordStudy' THEN 2 WHEN 'grammar' THEN 3 WHEN 'culture' THEN 4 WHEN 'enrichment' THEN 5 ELSE 6 END);
    END IF;
  END LOOP;
END
$lesson11$;
UPDATE public.lesson_content_overrides o
SET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('The Question at Delphi'::text),true),version=o.version+1,updated_at=now()
WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-10')
  AND o.content #>> '{nextLesson,id}'='lesson-11'
  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'The Question at Delphi';
COMMIT;
