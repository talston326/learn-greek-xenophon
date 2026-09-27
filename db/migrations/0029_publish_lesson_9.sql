-- Publish the complete Lesson 9 friendship reading and learning activities.
BEGIN;
DO $lesson9$
DECLARE
  patch jsonb := $json${
  "id": "lesson-9",
  "number": 9,
  "title": "What Makes a Good Friend?",
  "greekTitle": "Τίς ἐστι φίλος ἀγαθός;",
  "scope": "Present active alpha-contract verbs; finite-verb accent; article at clause opening; elision",
  "theme": "Friendship, character, and the Athenian symposium",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-9-symposium-banner.png",
    "alt": "Five companions recline on couches in a reconstructed Athenian symposium room; an older Socrates speaks at the center",
    "caption": "Socrates and four companions discuss friendship at an illustrated Athenian symposium."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-9-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-9-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-9-page-3",
      "title": "The Symposium and Athenian Conversation",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "People and ideas",
      "items": [
        {
          "greek": "ὁ φίλος",
          "english": "friend",
          "dictionaryForm": "φίλος, φίλου, ὁ",
          "status": "required vocabulary",
          "lemma": "φίλος",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ φιλία",
          "english": "friendship",
          "dictionaryForm": "φιλία, φιλίας, ἡ",
          "status": "required vocabulary",
          "lemma": "φιλία",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ πίστις",
          "english": "loyalty, trust",
          "dictionaryForm": "πίστις, πίστεως, ἡ",
          "status": "reading vocabulary",
          "lemma": "πίστις",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ ἀρετή",
          "english": "good character, excellence",
          "dictionaryForm": "ἀρετή, ἀρετῆς, ἡ",
          "status": "required vocabulary",
          "lemma": "ἀρετή",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ χρεία",
          "english": "need, use",
          "dictionaryForm": "χρεία, χρείας, ἡ",
          "status": "required vocabulary",
          "lemma": "χρεία",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ ἔργον",
          "english": "deed, work",
          "dictionaryForm": "ἔργον, ἔργου, τό",
          "status": "required vocabulary",
          "lemma": "ἔργον",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ οἰκία",
          "english": "house",
          "dictionaryForm": "οἰκία, οἰκίας, ἡ",
          "status": "required vocabulary",
          "lemma": "οἰκία",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ δεῖπνον",
          "english": "dinner",
          "dictionaryForm": "δεῖπνον, δείπνου, τό",
          "status": "required vocabulary",
          "lemma": "δεῖπνον",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ κλίνη",
          "english": "couch",
          "dictionaryForm": "κλίνη, κλίνης, ἡ",
          "status": "required vocabulary",
          "lemma": "κλίνη",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Actions",
      "items": [
        {
          "greek": "τιμάω",
          "english": "honor",
          "dictionaryForm": "τιμάω",
          "status": "required vocabulary",
          "lemma": "τιμάω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἐρωτάω",
          "english": "ask a question",
          "dictionaryForm": "ἐρωτάω",
          "status": "required vocabulary",
          "lemma": "ἐρωτάω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀγαπάω",
          "english": "care for, cherish",
          "dictionaryForm": "ἀγαπάω",
          "status": "required vocabulary",
          "lemma": "ἀγαπάω",
          "audioPlaceholder": true
        },
        {
          "greek": "γελάω",
          "english": "laugh",
          "dictionaryForm": "γελάω",
          "status": "required vocabulary",
          "lemma": "γελάω",
          "audioPlaceholder": true
        },
        {
          "greek": "ζητέω",
          "english": "seek",
          "dictionaryForm": "ζητέω",
          "status": "required vocabulary",
          "lemma": "ζητέω",
          "audioPlaceholder": true
        },
        {
          "greek": "λέγω",
          "english": "say",
          "dictionaryForm": "λέγω",
          "status": "required vocabulary",
          "lemma": "λέγω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀκούω",
          "english": "listen, hear",
          "dictionaryForm": "ἀκούω",
          "status": "required vocabulary",
          "lemma": "ἀκούω",
          "audioPlaceholder": true
        },
        {
          "greek": "ὠφελέω",
          "english": "help, benefit",
          "dictionaryForm": "ὠφελέω",
          "status": "reading vocabulary",
          "lemma": "ὠφελέω",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Connecting and describing",
      "items": [
        {
          "greek": "ἀγαθός, ἀγαθή, ἀγαθόν",
          "english": "good",
          "dictionaryForm": "ἀγαθός, ἀγαθή, ἀγαθόν",
          "status": "required vocabulary",
          "lemma": "ἀγαθός",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀλλά / ἀλλ᾽",
          "english": "but",
          "dictionaryForm": "ἀλλά",
          "status": "required vocabulary",
          "lemma": "ἀλλά / ἀλλ᾽",
          "audioPlaceholder": true
        },
        {
          "greek": "πρῶτον",
          "english": "first",
          "dictionaryForm": "πρῶτον",
          "status": "required vocabulary",
          "lemma": "πρῶτον",
          "audioPlaceholder": true
        },
        {
          "greek": "μόνον",
          "english": "only, alone",
          "dictionaryForm": "μόνον",
          "status": "required vocabulary",
          "lemma": "μόνον",
          "audioPlaceholder": true
        },
        {
          "greek": "χρήσιμος, χρησίμη, χρήσιμον",
          "english": "useful",
          "dictionaryForm": "χρήσιμος, χρησίμη, χρήσιμον",
          "status": "reading vocabulary",
          "lemma": "χρήσιμος",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Τίς ἐστι φίλος ἀγαθός;",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "After the household lesson, the course turns from helping one another to friendship itself. In a symposium room after dinner, Socrates asks his companions what makes a good friend. Critobulus prizes loyalty; Antisthenes points to useful help; Plato insists on character; Xenophon asks where those answers leave a person who helps without respect.",
      "Source note: Xenophon, Memorabilia 2.6 preserves a conversation in which Socrates asks Critobulus how to find a good friend and urges him to become good himself. Xenophon, Symposium 1.3–4 names Antisthenes and Critobulus among Socrates’ companions at a dinner invitation. No ancient source records this joint discussion with Plato and Xenophon. The gathering, the individual speeches, and the order of events below are a source-informed fictional reconstruction.",
      "The Greek uses present-tense dialogue. Blue glosses support names, a few philosophical terms, and forms outside the production targets. This lesson’s new forms are alpha-contract verbs such as τιμῶ and ἐρωτᾷ, plus elision in ἀλλ᾽ and ἀπ᾽."
    ],
    "paragraphs": [
      {
        "greek": "μετὰ τὸ δεῖπνον ὁ Σωκράτης καὶ οἱ φίλοι ἐν οἰκίᾳ φίλου εἰσίν. ὁ Πλάτων, ὁ Ἀντισθένης, καὶ ὁ Κριτόβουλος ἐπὶ κλινῶν κεῖνται. ὁ Ξενοφῶν παρὰ τῷ Σωκράτει κεῖται καὶ ἀκούει.",
        "gloss": [
          {
            "greek": "μετὰ τὸ δεῖπνον",
            "english": "after dinner"
          },
          {
            "greek": "ὁ Πλάτων",
            "english": "Plato; name supplied"
          },
          {
            "greek": "ὁ Ἀντισθένης",
            "english": "Antisthenes; name supplied"
          },
          {
            "greek": "ὁ Κριτόβουλος",
            "english": "Critobulus; name supplied"
          },
          {
            "greek": "ἐπὶ κλινῶν κεῖνται",
            "english": "they recline on couches; supplied forms"
          },
          {
            "greek": "παρὰ τῷ Σωκράτει",
            "english": "beside Socrates; supplied phrase"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης ἐρωτᾷ· «ὦ Κριτόβουλε, τίς ἐστι φίλος ἀγαθός;» ὁ Κριτόβουλος λέγει· «ὁ φίλος τὸν φίλον τιμᾷ καὶ ἐν κακοῖς οὐκ ἀπολείπει. ἐγὼ τοῦτον φίλον ἀγαθὸν νομίζω.»",
        "gloss": [
          {
            "greek": "ἐρωτᾷ",
            "english": "he asks; from ἐρωτάω"
          },
          {
            "greek": "ὦ Κριτόβουλε",
            "english": "Critobulus!; direct address"
          },
          {
            "greek": "τίς",
            "english": "who?; supplied question word"
          },
          {
            "greek": "ἐν κακοῖς",
            "english": "in troubles; adjective used as a noun"
          },
          {
            "greek": "οὐκ ἀπολείπει",
            "english": "does not abandon; supplied verb"
          },
          {
            "greek": "τοῦτον",
            "english": "this person; supplied pronoun"
          },
          {
            "greek": "νομίζω",
            "english": "I consider; supplied verb"
          }
        ]
      },
      {
        "greek": "ὁ Πλάτων λέγει· «σὺ τὴν πίστιν τιμᾷς, ὦ Κριτόβουλε. ἀλλ᾽ ὁ φίλος καὶ ἀγαθὸς ἔστω. ἄνθρωπος κακὸς τὸν φίλον βλάπτει.» ὁ Κριτόβουλος ἐρωτᾷ· «οὐκ ἔστιν ἡ πίστις ἀγαθή;»",
        "gloss": [
          {
            "greek": "τὴν πίστιν",
            "english": "loyalty; supplied third-declension noun"
          },
          {
            "greek": "τιμᾷς",
            "english": "you honor; from τιμάω"
          },
          {
            "greek": "ἀλλ᾽",
            "english": "but; ἀλλά loses its final vowel before a following vowel"
          },
          {
            "greek": "ἔστω",
            "english": "let him be; supplied command"
          },
          {
            "greek": "βλάπτει",
            "english": "harms; supplied verb"
          }
        ]
      },
      {
        "greek": "ὁ Ἀντισθένης λέγει· «καὶ ἡ χρεία μεγάλη ἐστίν. ὁ φίλος ὠφελεῖ τὸν φίλον· ἔργον ἀγαθὸν ποιεῖ.» ὁ Πλάτων λέγει· «ναί· ἀλλ᾽ ἄνευ ἀρετῆς τὸ ἔργον οὐκ ἀρκεῖ.»",
        "gloss": [
          {
            "greek": "ἡ χρεία",
            "english": "need, practical usefulness; supplied noun"
          },
          {
            "greek": "ὠφελεῖ",
            "english": "helps or benefits; supplied verb"
          },
          {
            "greek": "ἄνευ ἀρετῆς",
            "english": "without good character; supplied phrase"
          },
          {
            "greek": "οὐκ ἀρκεῖ",
            "english": "is not enough; supplied verb"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν ἐρωτᾷ· «ὦ Ἀντίσθενες, ὁ πλούσιος φίλος ὠφελεῖ, ἀλλ᾽ οὐ τιμᾷ. φίλος ἀγαθός ἐστιν;» ὁ Ἀντισθένης λέγει· «οὐ πάντως. τὸ χρήσιμον μόνον οὐκ ἀρκεῖ.»",
        "gloss": [
          {
            "greek": "ὦ Ἀντίσθενες",
            "english": "Antisthenes!; direct address"
          },
          {
            "greek": "ὁ πλούσιος φίλος",
            "english": "the wealthy friend"
          },
          {
            "greek": "οὐ πάντως",
            "english": "not necessarily"
          },
          {
            "greek": "τὸ χρήσιμον μόνον",
            "english": "usefulness alone; adjective used as a noun"
          }
        ]
      },
      {
        "greek": "ὁ Κριτόβουλος λέγει· «ἐγὼ τοὺς φίλους ἀγαπῶ. σὺ τοὺς φίλους ἀγαπᾷς, ὦ Πλάτων;» ὁ Πλάτων λέγει· «ναί· καὶ τὰ καλά ἔργα τιμῶ.» ὁ Ἀντισθένης γελᾷ· «πολλὰ ἐρωτᾶτε, ὦ φίλοι.»",
        "gloss": [
          {
            "greek": "ἀγαπῶ",
            "english": "I care for; from ἀγαπάω"
          },
          {
            "greek": "ἀγαπᾷς",
            "english": "you care for; from ἀγαπάω"
          },
          {
            "greek": "τιμῶ",
            "english": "I honor; from τιμάω"
          },
          {
            "greek": "γελᾷ",
            "english": "he laughs; from γελάω"
          },
          {
            "greek": "ἐρωτᾶτε",
            "english": "you all ask; from ἐρωτάω"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης λέγει· «οἱ φίλοι οὐ μόνον ὠφελοῦσιν, ἀλλὰ καὶ ἀλλήλους τιμῶσιν. ἡμεῖς φίλους ἀγαθοὺς ζητοῦμεν· πρῶτον δὲ αὐτοὶ ἀγαθοὶ φίλοι ἐσμέν;» οἱ ἄλλοι σιγῶσιν.",
        "gloss": [
          {
            "greek": "οὐ μόνον",
            "english": "not only"
          },
          {
            "greek": "ὠφελοῦσιν",
            "english": "they help; supplied contracted verb"
          },
          {
            "greek": "ἀλλὰ καὶ",
            "english": "but also"
          },
          {
            "greek": "ἀλλήλους",
            "english": "one another; supplied pronoun"
          },
          {
            "greek": "τιμῶσιν",
            "english": "they honor; from τιμάω"
          },
          {
            "greek": "πρῶτον",
            "english": "first"
          },
          {
            "greek": "αὐτοὶ",
            "english": "we ourselves; supplied form"
          },
          {
            "greek": "σιγῶσιν",
            "english": "they fall silent; supplied verb"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν τὸν Σωκράτην βλέπει καὶ λέγει· «σὺ ἡμᾶς ἐρωτᾷς, ἡμεῖς δὲ νῦν ἑαυτοὺς ἐρωτῶμεν.» ὁ Σωκράτης γελᾷ. ὁ Κριτόβουλος λέγει· «ἀπ᾽ ἀρχῆς ἄρχομαι· φίλος ἀγαθὸς εἶναι βούλομαι.»",
        "gloss": [
          {
            "greek": "ἡμᾶς",
            "english": "us; supplied pronoun"
          },
          {
            "greek": "ἑαυτοὺς",
            "english": "ourselves; supplied pronoun"
          },
          {
            "greek": "ἐρωτῶμεν",
            "english": "we ask; from ἐρωτάω"
          },
          {
            "greek": "ἀπ᾽ ἀρχῆς",
            "english": "from the beginning; ἀπό is elided"
          },
          {
            "greek": "ἄρχομαι",
            "english": "I begin; middle form supplied"
          },
          {
            "greek": "εἶναι βούλομαι",
            "english": "I want to be; supplied phrase"
          }
        ]
      }
    ],
    "translation": "After dinner Socrates and his friends are in a friend’s house. Plato, Antisthenes, and Critobulus recline on couches. Xenophon reclines beside Socrates and listens.\n\nSocrates asks, “Critobulus, who is a good friend?” Critobulus says, “A friend honors a friend and does not abandon him in trouble. I consider this person a good friend.”\n\nPlato says, “You honor loyalty, Critobulus. But let the friend also be good. A bad person harms his friend.” Critobulus asks, “Is loyalty not good?”\n\nAntisthenes says, “Practical need matters greatly too. A friend helps a friend; he does a good deed.” Plato says, “Yes, but without good character the deed is not enough.”\n\nXenophon asks, “Antisthenes, a wealthy friend helps but does not honor his friend. Is he a good friend?” Antisthenes says, “Not necessarily. Usefulness alone is not enough.”\n\nCritobulus says, “I care for my friends. Do you care for your friends, Plato?” Plato says, “Yes, and I honor good deeds.” Antisthenes laughs: “You ask many questions, friends.”\n\nSocrates says, “Friends do not only help; they also honor one another. We seek good friends; but are we ourselves good friends first?” The others fall silent.\n\nXenophon looks at Socrates and says, “You question us, and now we question ourselves.” Socrates laughs. Critobulus says, “I begin at the beginning: I want to be a good friend.”",
    "sourceCitation": "Xenophon, Memorabilia 2.6 and Symposium 1.3–4. The five-person discussion is a course reconstruction. https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Mem.+2.6&lang=original",
    "notesMarkdown": "The scene and individual words are composed for this lesson. Memorabilia 2.6 supplies the central Socrates–Critobulus question; Symposium 1.3–4 supplies the attested Socratic circle."
  },
  "wordStudy": {
    "label": "Word Study — Friend, Friendship, and Character",
    "blocks": [
      {
        "title": "A small vocabulary for a large question",
        "practiceTopic": "word-study",
        "body": [
          "ὁ φίλος is a friend; ἡ φιλία is friendship. The question τίς ἐστι φίλος ἀγαθός; asks what sort of person deserves that name. The words are short, but Socrates presses the group to examine what they mean.",
          "τιμάω means “honor” and ἀγαπάω means “care for.” These are the alpha-contract verbs you will form in Language Study. The noun ἀρετή means excellence or good character in this context; keep it as one supported reading word rather than a new philosophical system.",
          "In the reading, ἡ χρεία raises the question of practical need, and τὸ χρήσιμον means what is useful. The group weighs help against loyalty and character."
        ],
        "display": [
          {
            "greek": "ὁ φίλος",
            "english": "the friend"
          },
          {
            "greek": "ἡ φιλία",
            "english": "friendship"
          },
          {
            "greek": "τιμῶ",
            "english": "I honor; from τιμάω"
          },
          {
            "greek": "ἀλλ᾽",
            "english": "but; shortened from ἀλλά before a vowel"
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "Lesson 8 used a few contracted verbs as supplied reading forms. Lesson 9 now makes present active verbs in -άω a production target, then shows how accent and elision help you read compact dialogue.",
    "objectives": [
      "Form all six present active persons of an alpha-contract verb such as τιμάω.",
      "Recognize contracted ἐρωτάω, ἀγαπάω, and γελάω in brief exchanges.",
      "Explain why a contracted vowel can carry a circumflex.",
      "Expand elided ἀλλ᾽ and ἀπ᾽ to their full vocabulary forms.",
      "Use the article and case ending to read short clauses with φίλος."
    ],
    "sections": [
      {
        "id": "alpha-contract",
        "title": "1. Alpha-Contract Verbs in the Present",
        "practiceTopic": "alpha-contract",
        "body": [
          "The dictionary form τιμάω means “I honor.” In the present active indicative, its stem ends in α. When that α meets the vowel of a personal ending, the two vowels contract: τιμάω → τιμῶ; τιμάεις → τιμᾷς; τιμάει → τιμᾷ.",
          "The same pattern gives τιμῶμεν, τιμᾶτε, and τιμῶσι(ν). The circumflex in these forms marks a long contracted vowel. Learn the written form and the person together rather than trying to pronounce two uncontracted vowels.",
          "The reading also uses ἐρωτάω (ask), ἀγαπάω (care for), and γελάω (laugh). Their present forms follow the same alpha-contract pattern."
        ],
        "table": {
          "title": "Present active indicative of τιμάω",
          "headers": [
            "Person",
            "Form",
            "Meaning"
          ],
          "greekColumns": [
            1
          ],
          "rows": [
            [
              "1st singular",
              "τιμῶ",
              "I honor"
            ],
            [
              "2nd singular",
              "τιμᾷς",
              "you honor"
            ],
            [
              "3rd singular",
              "τιμᾷ",
              "he or she honors"
            ],
            [
              "1st plural",
              "τιμῶμεν",
              "we honor"
            ],
            [
              "2nd plural",
              "τιμᾶτε",
              "you all honor"
            ],
            [
              "3rd plural",
              "τιμῶσι(ν)",
              "they honor"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What person is τιμᾶτε?",
            "answer": "Second-person plural: you all honor."
          }
        ],
        "examples": [
          {
            "greek": "ἡμεῖς τοὺς φίλους τιμῶμεν.",
            "english": "We honor our friends."
          }
        ]
      },
      {
        "id": "contract-in-dialogue",
        "title": "2. Hear the Person in a Short Exchange",
        "practiceTopic": "contract-dialogue",
        "body": [
          "The ending still tells you who acts, just as with βλέπω. Compare ἐγὼ ἐρωτῶ, σὺ ἐρωτᾷς, and ὁ Σωκράτης ἐρωτᾷ. In the reading, ἐρωτᾶτε addresses several companions.",
          "Short exchanges naturally switch persons: “I care for my friends. Do you care for yours?” The Greek uses ἀγαπῶ and ἀγαπᾷς. Pronouns can be omitted unless the speaker wants emphasis or contrast.",
          "Keep the target to present active forms of alpha-contract verbs. Other verbs in the reading, such as ὠφελεῖ and σιγῶσιν, are glossed for comprehension rather than assigned as new production patterns."
        ],
        "table": {
          "title": "Contracted forms in the reading",
          "headers": [
            "Dictionary form",
            "Reading form",
            "Person"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "ἐρωτάω",
              "ἐρωτᾷ",
              "he asks"
            ],
            [
              "ἐρωτάω",
              "ἐρωτᾶτε",
              "you all ask"
            ],
            [
              "ἀγαπάω",
              "ἀγαπῶ",
              "I care for"
            ],
            [
              "ἀγαπάω",
              "ἀγαπᾷς",
              "you care for"
            ],
            [
              "γελάω",
              "γελᾷ",
              "he laughs"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Who is the subject of ἀγαπᾷς?",
            "answer": "One person addressed as “you.”"
          }
        ],
        "examples": [
          {
            "greek": "ἐγὼ ἐρωτῶ· σὺ ἐρωτᾷς;",
            "english": "I ask; do you ask?"
          }
        ]
      },
      {
        "id": "contract-accent",
        "title": "3. Verb Accent and the Contracted Vowel",
        "practiceTopic": "contract-accent",
        "body": [
          "In most finite Greek verbs, the accent retreats as far toward the beginning as the ending permits. The familiar λύομεν has its accent on the first syllable; λύουσι has it on the next-to-last syllable.",
          "Contracted verbs have an added rule: when an accented vowel contracts with the next vowel, the resulting long vowel often takes a circumflex. Thus τιμάω appears as τιμῶ and τιμᾷς in the actual written forms.",
          "For this lesson, recognize the contrast between an uncontracted dictionary form such as τιμάω and a contracted form such as τιμῶ. Do not move the accent mechanically after contraction."
        ],
        "table": {
          "title": "From citation form to written verb",
          "headers": [
            "Citation form",
            "Written present form",
            "Meaning"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "τιμάω",
              "τιμῶ",
              "I honor"
            ],
            [
              "τιμάω",
              "τιμᾷς",
              "you honor"
            ],
            [
              "ἐρωτάω",
              "ἐρωτᾷ",
              "he or she asks"
            ],
            [
              "ἀγαπάω",
              "ἀγαπῶμεν",
              "we care for"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why does τιμῶ carry a circumflex?",
            "answer": "The accented alpha and following vowel have contracted into a long vowel."
          }
        ],
        "examples": [
          {
            "greek": "ὁ φίλος τὸν φίλον τιμᾷ.",
            "english": "A friend honors a friend."
          }
        ]
      },
      {
        "id": "elision",
        "title": "4. Elision Keeps Speech Moving",
        "practiceTopic": "elision",
        "body": [
          "A short final vowel can disappear before a following word that begins with a vowel. An apostrophe marks the missing vowel: ἀλλά becomes ἀλλ᾽ before ὁ or ἐγώ; ἀπό becomes ἀπ᾽ before ἀρχῆς.",
          "The meaning and grammar do not change. In the reading, ἀλλ᾽ ὁ φίλος still means “but the friend.” Read the elided word and the next word together, then expand it to its full form when identifying the vocabulary entry.",
          "Elision is not the same as verb contraction. Elision works across a word boundary and uses an apostrophe; contraction combines vowels within a word and changes the written verb form."
        ],
        "table": {
          "title": "Full and elided forms",
          "headers": [
            "Full phrase",
            "Elided phrase",
            "Meaning"
          ],
          "greekColumns": [
            0,
            1
          ],
          "rows": [
            [
              "ἀλλὰ ὁ φίλος",
              "ἀλλ᾽ ὁ φίλος",
              "but the friend"
            ],
            [
              "ἀλλὰ ἐγώ",
              "ἀλλ᾽ ἐγώ",
              "but I"
            ],
            [
              "ἀπὸ ἀρχῆς",
              "ἀπ᾽ ἀρχῆς",
              "from the beginning"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What is the full form of ἀλλ᾽?",
            "answer": "ἀλλά."
          }
        ],
        "examples": [
          {
            "greek": "ἀλλ᾽ ὁ φίλος καὶ ἀγαθὸς ἔστω.",
            "english": "But let the friend also be good."
          }
        ]
      },
      {
        "id": "article-clause",
        "title": "5. The Article at the Start of a Clause",
        "practiceTopic": "article-clause",
        "body": [
          "At the start of a sentence or new clause, the article helps you identify the person being discussed: ὁ Σωκράτης ἐρωτᾷ, “Socrates asks.” The article is part of the noun phrase, not a separate word for “he.”",
          "After someone else speaks, ὁ δὲ Πλάτων can mean “Plato, in turn.” The small word δέ marks a new or contrasting step; it does not change the case of the article.",
          "In ὁ φίλος τὸν φίλον τιμᾷ, the first article is nominative, marking the subject, and the second is accusative, marking the person honored. That case contrast remains clear even in a short exchange."
        ],
        "table": {
          "title": "Read the article with its noun",
          "headers": [
            "Greek",
            "Article job",
            "Meaning"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ὁ Σωκράτης ἐρωτᾷ",
              "nominative subject",
              "Socrates asks"
            ],
            [
              "ὁ φίλος τιμᾷ",
              "nominative subject",
              "the friend honors"
            ],
            [
              "τὸν φίλον τιμᾷ",
              "accusative object",
              "honors the friend"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Which friend acts in ὁ φίλος τὸν φίλον τιμᾷ?",
            "answer": "ὁ φίλος is the subject; τὸν φίλον receives the action."
          }
        ],
        "examples": [
          {
            "greek": "ὁ Σωκράτης ἐρωτᾷ· ὁ δὲ Κριτόβουλος λέγει.",
            "english": "Socrates asks; Critobulus replies."
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "τιμάω → τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι(ν).",
        "The same present active pattern gives ἐρωτῶ, ἀγαπῶ, and γελῶ.",
        "Contraction can put a circumflex on the long vowel: τιμῶ, τιμᾷς.",
        "Elision crosses a word boundary: ἀλλ᾽ ὁ φίλος = ἀλλὰ ὁ φίλος.",
        "The article shows case: ὁ φίλος is the subject; τὸν φίλον is the object."
      ]
    }
  },
  "culture": {
    "title": "The Symposium: Conversation after Dinner",
    "banner": {
      "image": "assets/lesson-9-tomb-of-diver-symposium.jpg",
      "alt": "Ancient painted symposium scene on a side wall of the Tomb of the Diver: men recline on couches, converse, and raise cups",
      "caption": "Banquet scene on a side wall of the Tomb of the Diver, about 475 BCE, from Greek Paestum in southern Italy. The diver is painted on the tomb’s lid, not in this scene.",
      "credit": "Photograph by Carole Raddato, CC BY-SA 2.0. Unmodified image.",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fresco_painting_from_lateral_walls_of_the_Tomb_of_the_Diver_depicting_a_symposium_scene,_5th_century_BC,_Paestum_Archaeological_Museum.jpg",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/"
    },
    "body": [
      "A symposium was a gathering for drinking together after a meal. In wealthier Greek households, invited men reclined on cushioned couches in a room arranged for conversation. Wine was commonly mixed with water in a large krater and served in cups. Guests could talk, recite poetry, play games, or listen to music. The format helped people build relationships and display wit, learning, and social standing.",
      "The image above is a real ancient painting from the Tomb of the Diver at Paestum, a Greek city in southern Italy. Its side walls show banquet scenes; the famous solitary diver appears on the underside of the lid. The tomb dates to about 475 BCE, earlier than the imagined setting of this lesson. It is valuable visual evidence for reclining diners, couches, and cups, but it is a funerary painting from outside Athens rather than a picture of a specific Athenian home.",
      "Xenophon’s Symposium describes a dinner gathering and names Socrates, Critobulus, and Antisthenes among those invited. The work shows that conversation could share a table with entertainment. Socrates’ question about friendship in Memorabilia 2.6 belongs to a different text and is the main source for the reading’s question.",
      "Participation was unequal. The conventional Athenian symposium was chiefly an activity of free men with the resources and invitations to attend. Enslaved people served guests, and some women appeared as paid entertainers or companions; respectable citizen women were generally outside this gathering. Those limits matter when using symposium conversation as a window onto Athenian life."
    ],
    "questions": [
      {
        "prompt": "What happened at a symposium?",
        "answer": "Invited guests drank together after dinner and could converse, hear music or poetry, and play games."
      },
      {
        "prompt": "Where was the Tomb of the Diver found?",
        "answer": "At Paestum, a Greek city in southern Italy, not in Athens."
      },
      {
        "prompt": "Which part of that tomb bears the diver?",
        "answer": "The underside of its lid; banquet scenes decorate the side walls."
      },
      {
        "prompt": "Who is named among Socrates’ companions in Xenophon’s Symposium 1.3–4?",
        "answer": "Critobulus and Antisthenes are named with Socrates and others."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Explain the six present active forms of τιμάω.",
        "Tell contraction within a verb from elision between words.",
        "Identify the subject and object in ὁ φίλος τὸν φίλον τιμᾷ.",
        "Describe what the Paestum fresco can and cannot show about Athenian symposia."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Memorabilia 2.6 (friendship and Critobulus)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Xen.+Mem.+2.6&lang=original"
      },
      {
        "title": "Xenophon, Symposium 1.3–4 (Socrates’ companions)",
        "url": "https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AgreekLit%3Atlg0032.tlg004.perseus-eng2%3A1.3-1.4/"
      },
      {
        "title": "The Metropolitan Museum of Art, The Symposium in Ancient Greece",
        "url": "https://www.metmuseum.org/essays/the-symposium-in-ancient-greece"
      },
      {
        "title": "Paestum Archaeological Park, The Tomb of the Diver",
        "url": "https://museopaestum.cultura.gov.it/la-tomba-del-tuffatore/?lang=en"
      },
      {
        "title": "Wikimedia Commons, Tomb of the Diver symposium photograph and license",
        "url": "https://commons.wikimedia.org/wiki/File:Fresco_painting_from_lateral_walls_of_the_Tomb_of_the_Diver_depicting_a_symposium_scene,_5th_century_BC,_Paestum_Archaeological_Museum.jpg"
      }
    ]
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 9 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "ὁ φίλος",
          "answer": "friend"
        },
        {
          "prompt": "ἡ φιλία",
          "answer": "friendship"
        },
        {
          "prompt": "ἡ πίστις",
          "answer": "loyalty, trust"
        },
        {
          "prompt": "ἡ ἀρετή",
          "answer": "good character, excellence"
        },
        {
          "prompt": "ἡ χρεία",
          "answer": "need, use"
        },
        {
          "prompt": "τὸ ἔργον",
          "answer": "deed, work"
        },
        {
          "prompt": "ἡ οἰκία",
          "answer": "house"
        },
        {
          "prompt": "τὸ δεῖπνον",
          "answer": "dinner"
        },
        {
          "prompt": "ἡ κλίνη",
          "answer": "couch"
        },
        {
          "prompt": "τιμάω",
          "answer": "honor"
        },
        {
          "prompt": "ἐρωτάω",
          "answer": "ask a question"
        },
        {
          "prompt": "ἀγαπάω",
          "answer": "care for, cherish"
        },
        {
          "prompt": "γελάω",
          "answer": "laugh"
        },
        {
          "prompt": "ζητέω",
          "answer": "seek"
        },
        {
          "prompt": "λέγω",
          "answer": "say"
        },
        {
          "prompt": "ἀκούω",
          "answer": "listen, hear"
        },
        {
          "prompt": "ὠφελέω",
          "answer": "help, benefit"
        },
        {
          "prompt": "ἀγαθός, ἀγαθή, ἀγαθόν",
          "answer": "good"
        },
        {
          "prompt": "ἀλλά / ἀλλ᾽",
          "answer": "but"
        },
        {
          "prompt": "πρῶτον",
          "answer": "first"
        },
        {
          "prompt": "μόνον",
          "answer": "only, alone"
        },
        {
          "prompt": "χρήσιμος, χρησίμη, χρήσιμον",
          "answer": "useful"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 9 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice required Lesson 9 words in short rounds. Reading-only words remain glossed.",
      "questions": [
        {
          "id": "lesson-9-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ φίλος mean?",
          "choices": [
            {
              "text": "care for, cherish",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "friend",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "good character, excellence",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "dinner",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “friend”?",
          "choices": [
            {
              "text": "γελάω",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "ἡ χρεία",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "ἡ κλίνη",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ φιλία mean?",
          "choices": [
            {
              "text": "couch",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "laugh",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "friendship",
              "correct": true,
              "feedback": "Correct: ἡ φιλία means friendship."
            },
            {
              "text": "need, use",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “friendship”?",
          "choices": [
            {
              "text": "τιμάω",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "ζητέω",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "ἡ φιλία",
              "correct": true,
              "feedback": "Correct: ἡ φιλία means friendship."
            },
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ἀρετή mean?",
          "choices": [
            {
              "text": "deed, work",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "honor",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "seek",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "good character, excellence",
              "correct": true,
              "feedback": "Correct: ἡ ἀρετή means good character, excellence."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “good character, excellence”?",
          "choices": [
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: ἡ ἀρετή means good character, excellence."
            },
            {
              "text": "ἡ ἀρετή",
              "correct": true,
              "feedback": "Correct: ἡ ἀρετή means good character, excellence."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ χρεία mean?",
          "choices": [
            {
              "text": "need, use",
              "correct": true,
              "feedback": "Correct: ἡ χρεία means need, use."
            },
            {
              "text": "house",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "ask a question",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "say",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “need, use”?",
          "choices": [
            {
              "text": "ἡ χρεία",
              "correct": true,
              "feedback": "Correct: ἡ χρεία means need, use."
            },
            {
              "text": "τὸ δεῖπνον",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "ἀγαπάω",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ ἔργον mean?",
          "choices": [
            {
              "text": "listen, hear",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            },
            {
              "text": "deed, work",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means deed, work."
            },
            {
              "text": "dinner",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            },
            {
              "text": "care for, cherish",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “deed, work”?",
          "choices": [
            {
              "text": "ἀγαθός, ἀγαθή, ἀγαθόν",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            },
            {
              "text": "τὸ ἔργον",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον means deed, work."
            },
            {
              "text": "ἡ κλίνη",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            },
            {
              "text": "γελάω",
              "correct": false,
              "feedback": "Review: τὸ ἔργον means deed, work."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ οἰκία mean?",
          "choices": [
            {
              "text": "laugh",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            },
            {
              "text": "house",
              "correct": true,
              "feedback": "Correct: ἡ οἰκία means house."
            },
            {
              "text": "couch",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “house”?",
          "choices": [
            {
              "text": "ζητέω",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            },
            {
              "text": "ἀλλά / ἀλλ᾽",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            },
            {
              "text": "ἡ οἰκία",
              "correct": true,
              "feedback": "Correct: ἡ οἰκία means house."
            },
            {
              "text": "τιμάω",
              "correct": false,
              "feedback": "Review: ἡ οἰκία means house."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ δεῖπνον mean?",
          "choices": [
            {
              "text": "honor",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "seek",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "but",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "dinner",
              "correct": true,
              "feedback": "Correct: τὸ δεῖπνον means dinner."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “dinner”?",
          "choices": [
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "πρῶτον",
              "correct": false,
              "feedback": "Review: τὸ δεῖπνον means dinner."
            },
            {
              "text": "τὸ δεῖπνον",
              "correct": true,
              "feedback": "Correct: τὸ δεῖπνον means dinner."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ κλίνη mean?",
          "choices": [
            {
              "text": "couch",
              "correct": true,
              "feedback": "Correct: ἡ κλίνη means couch."
            },
            {
              "text": "ask a question",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            },
            {
              "text": "say",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            },
            {
              "text": "first",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “couch”?",
          "choices": [
            {
              "text": "ἡ κλίνη",
              "correct": true,
              "feedback": "Correct: ἡ κλίνη means couch."
            },
            {
              "text": "ἀγαπάω",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            },
            {
              "text": "μόνον",
              "correct": false,
              "feedback": "Review: ἡ κλίνη means couch."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τιμάω mean?",
          "choices": [
            {
              "text": "only, alone",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            },
            {
              "text": "honor",
              "correct": true,
              "feedback": "Correct: τιμάω means honor."
            },
            {
              "text": "care for, cherish",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            },
            {
              "text": "listen, hear",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “honor”?",
          "choices": [
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            },
            {
              "text": "τιμάω",
              "correct": true,
              "feedback": "Correct: τιμάω means honor."
            },
            {
              "text": "γελάω",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            },
            {
              "text": "ἀγαθός, ἀγαθή, ἀγαθόν",
              "correct": false,
              "feedback": "Review: τιμάω means honor."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "ask a question",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask a question."
            },
            {
              "text": "laugh",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “ask a question”?",
          "choices": [
            {
              "text": "ἀλλά / ἀλλ᾽",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "ἡ φιλία",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask a question."
            },
            {
              "text": "ζητέω",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀγαπάω mean?",
          "choices": [
            {
              "text": "seek",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "but",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "friendship",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "care for, cherish",
              "correct": true,
              "feedback": "Correct: ἀγαπάω means care for, cherish."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “care for, cherish”?",
          "choices": [
            {
              "text": "λέγω",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "πρῶτον",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "ἡ ἀρετή",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "ἀγαπάω",
              "correct": true,
              "feedback": "Correct: ἀγαπάω means care for, cherish."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does γελάω mean?",
          "choices": [
            {
              "text": "laugh",
              "correct": true,
              "feedback": "Correct: γελάω means laugh."
            },
            {
              "text": "say",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            },
            {
              "text": "first",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            },
            {
              "text": "good character, excellence",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “laugh”?",
          "choices": [
            {
              "text": "γελάω",
              "correct": true,
              "feedback": "Correct: γελάω means laugh."
            },
            {
              "text": "ἀκούω",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            },
            {
              "text": "μόνον",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            },
            {
              "text": "ἡ χρεία",
              "correct": false,
              "feedback": "Review: γελάω means laugh."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ζητέω mean?",
          "choices": [
            {
              "text": "need, use",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            },
            {
              "text": "seek",
              "correct": true,
              "feedback": "Correct: ζητέω means seek."
            },
            {
              "text": "listen, hear",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            },
            {
              "text": "only, alone",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “seek”?",
          "choices": [
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            },
            {
              "text": "ζητέω",
              "correct": true,
              "feedback": "Correct: ζητέω means seek."
            },
            {
              "text": "ἀγαθός, ἀγαθή, ἀγαθόν",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ζητέω means seek."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does λέγω mean?",
          "choices": [
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: λέγω means say."
            },
            {
              "text": "deed, work",
              "correct": false,
              "feedback": "Review: λέγω means say."
            },
            {
              "text": "say",
              "correct": true,
              "feedback": "Correct: λέγω means say."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: λέγω means say."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “say”?",
          "choices": [
            {
              "text": "ἡ φιλία",
              "correct": false,
              "feedback": "Review: λέγω means say."
            },
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: λέγω means say."
            },
            {
              "text": "λέγω",
              "correct": true,
              "feedback": "Correct: λέγω means say."
            },
            {
              "text": "ἀλλά / ἀλλ᾽",
              "correct": false,
              "feedback": "Review: λέγω means say."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀκούω mean?",
          "choices": [
            {
              "text": "but",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "friendship",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "house",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "listen, hear",
              "correct": true,
              "feedback": "Correct: ἀκούω means listen, hear."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “listen, hear”?",
          "choices": [
            {
              "text": "πρῶτον",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "ἡ ἀρετή",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "τὸ δεῖπνον",
              "correct": false,
              "feedback": "Review: ἀκούω means listen, hear."
            },
            {
              "text": "ἀκούω",
              "correct": true,
              "feedback": "Correct: ἀκούω means listen, hear."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀγαθός, ἀγαθή, ἀγαθόν mean?",
          "choices": [
            {
              "text": "good",
              "correct": true,
              "feedback": "Correct: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "first",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "good character, excellence",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "dinner",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “good”?",
          "choices": [
            {
              "text": "ἀγαθός, ἀγαθή, ἀγαθόν",
              "correct": true,
              "feedback": "Correct: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "μόνον",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "ἡ χρεία",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            },
            {
              "text": "ἡ κλίνη",
              "correct": false,
              "feedback": "Review: ἀγαθός, ἀγαθή, ἀγαθόν means good."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-17-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀλλά / ἀλλ᾽ mean?",
          "choices": [
            {
              "text": "couch",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "but",
              "correct": true,
              "feedback": "Correct: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "only, alone",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "need, use",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-17-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “but”?",
          "choices": [
            {
              "text": "τιμάω",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "ἀλλά / ἀλλ᾽",
              "correct": true,
              "feedback": "Correct: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            },
            {
              "text": "τὸ ἔργον",
              "correct": false,
              "feedback": "Review: ἀλλά / ἀλλ᾽ means but."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-18-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πρῶτον mean?",
          "choices": [
            {
              "text": "deed, work",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "honor",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "first",
              "correct": true,
              "feedback": "Correct: πρῶτον means first."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-18-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “first”?",
          "choices": [
            {
              "text": "ἡ οἰκία",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "πρῶτον",
              "correct": true,
              "feedback": "Correct: πρῶτον means first."
            },
            {
              "text": "ἡ φιλία",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-19-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does μόνον mean?",
          "choices": [
            {
              "text": "friendship",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "house",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "ask a question",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "only, alone",
              "correct": true,
              "feedback": "Correct: μόνον means only, alone."
            }
          ]
        },
        {
          "id": "lesson-9-vocab-19-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “only, alone”?",
          "choices": [
            {
              "text": "ἡ ἀρετή",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "τὸ δεῖπνον",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "ἀγαπάω",
              "correct": false,
              "feedback": "Review: μόνον means only, alone."
            },
            {
              "text": "μόνον",
              "correct": true,
              "feedback": "Correct: μόνον means only, alone."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 9 Grammar Flashcards",
      "cards": [
        {
          "prompt": "τιμάω → I honor",
          "answer": "τιμῶ"
        },
        {
          "prompt": "τιμάω → you honor",
          "answer": "τιμᾷς"
        },
        {
          "prompt": "τιμάω → we honor",
          "answer": "τιμῶμεν"
        },
        {
          "prompt": "ἐρωτάω → he asks",
          "answer": "ἐρωτᾷ"
        },
        {
          "prompt": "ἀγαπάω → I care for",
          "answer": "ἀγαπῶ"
        },
        {
          "prompt": "ἀλλ᾽ → full form",
          "answer": "ἀλλά"
        },
        {
          "prompt": "ἀπ᾽ → full form",
          "answer": "ἀπό"
        },
        {
          "prompt": "ὁ φίλος / τὸν φίλον",
          "answer": "subject / object"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 9 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic. Practice gives immediate feedback and does not gate the page.",
      "questions": [
        {
          "id": "lesson-9-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ὁ φίλος mean?",
          "choices": [
            {
              "text": "the deed",
              "correct": false,
              "feedback": "Review: φίλος names a friend."
            },
            {
              "text": "the friend",
              "correct": true,
              "feedback": "Correct: φίλος names a friend."
            },
            {
              "text": "the dinner",
              "correct": false,
              "feedback": "Review: φίλος names a friend."
            },
            {
              "text": "the couch",
              "correct": false,
              "feedback": "Review: φίλος names a friend."
            }
          ]
        },
        {
          "id": "lesson-9-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἡ φιλία mean?",
          "choices": [
            {
              "text": "need",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            },
            {
              "text": "excellence",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            },
            {
              "text": "friendship",
              "correct": true,
              "feedback": "Correct: φιλία names friendship."
            },
            {
              "text": "loyalty",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            }
          ]
        },
        {
          "id": "lesson-9-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which word means “good character” in this reading?",
          "choices": [
            {
              "text": "χρεία",
              "correct": false,
              "feedback": "Review: ἀρετή is excellence or good character."
            },
            {
              "text": "κλίνη",
              "correct": false,
              "feedback": "Review: ἀρετή is excellence or good character."
            },
            {
              "text": "δεῖπνον",
              "correct": false,
              "feedback": "Review: ἀρετή is excellence or good character."
            },
            {
              "text": "ἀρετή",
              "correct": true,
              "feedback": "Correct: ἀρετή is excellence or good character."
            }
          ]
        },
        {
          "id": "lesson-9-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἡ χρεία mean?",
          "choices": [
            {
              "text": "need or use",
              "correct": true,
              "feedback": "Correct: χρεία names need or use."
            },
            {
              "text": "a couch",
              "correct": false,
              "feedback": "Review: χρεία names need or use."
            },
            {
              "text": "loyalty",
              "correct": false,
              "feedback": "Review: χρεία names need or use."
            },
            {
              "text": "a cup",
              "correct": false,
              "feedback": "Review: χρεία names need or use."
            }
          ]
        },
        {
          "id": "lesson-9-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does τιμάω mean?",
          "choices": [
            {
              "text": "I seek",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            },
            {
              "text": "I honor",
              "correct": true,
              "feedback": "Correct: τιμάω means I honor."
            },
            {
              "text": "I laugh",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            }
          ]
        },
        {
          "id": "lesson-9-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "I laugh",
              "correct": false,
              "feedback": "Review: ἐρωτάω means I ask."
            },
            {
              "text": "I listen",
              "correct": false,
              "feedback": "Review: ἐρωτάω means I ask."
            },
            {
              "text": "I ask",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means I ask."
            },
            {
              "text": "I honor",
              "correct": false,
              "feedback": "Review: ἐρωτάω means I ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἀγαπάω mean here?",
          "choices": [
            {
              "text": "I recline",
              "correct": false,
              "feedback": "Review: ἀγαπάω means I care for."
            },
            {
              "text": "I write",
              "correct": false,
              "feedback": "Review: ἀγαπάω means I care for."
            },
            {
              "text": "I depart",
              "correct": false,
              "feedback": "Review: ἀγαπάω means I care for."
            },
            {
              "text": "I care for",
              "correct": true,
              "feedback": "Correct: ἀγαπάω means I care for."
            }
          ]
        },
        {
          "id": "lesson-9-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which is the full form of ἀλλ᾽?",
          "choices": [
            {
              "text": "ἀλλά",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "ἀπό",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "ἄνευ",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "αὐτός",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-practice-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does τὸ δεῖπνον mean?",
          "choices": [
            {
              "text": "the couch",
              "correct": false,
              "feedback": "Review: δεῖπνον is dinner."
            },
            {
              "text": "the dinner",
              "correct": true,
              "feedback": "Correct: δεῖπνον is dinner."
            },
            {
              "text": "the house",
              "correct": false,
              "feedback": "Review: δεῖπνον is dinner."
            },
            {
              "text": "the deed",
              "correct": false,
              "feedback": "Review: δεῖπνον is dinner."
            }
          ]
        },
        {
          "id": "lesson-9-practice-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἡ κλίνη mean?",
          "choices": [
            {
              "text": "character",
              "correct": false,
              "feedback": "Review: κλίνη is a couch."
            },
            {
              "text": "question",
              "correct": false,
              "feedback": "Review: κλίνη is a couch."
            },
            {
              "text": "the couch",
              "correct": true,
              "feedback": "Correct: κλίνη is a couch."
            },
            {
              "text": "friendship",
              "correct": false,
              "feedback": "Review: κλίνη is a couch."
            }
          ]
        },
        {
          "id": "lesson-9-practice-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is τὸ χρήσιμον in the conversation?",
          "choices": [
            {
              "text": "what is beautiful",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            },
            {
              "text": "what is costly",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            },
            {
              "text": "what is first",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            },
            {
              "text": "what is useful",
              "correct": true,
              "feedback": "Correct: The neuter adjective names usefulness."
            }
          ]
        },
        {
          "id": "lesson-9-practice-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does πρῶτον mean?",
          "choices": [
            {
              "text": "first",
              "correct": true,
              "feedback": "Correct: πρῶτον means first."
            },
            {
              "text": "quickly",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "never",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "together",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            }
          ]
        },
        {
          "id": "lesson-9-practice-013",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is first-person singular?",
          "choices": [
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            },
            {
              "text": "τιμῶ",
              "correct": true,
              "feedback": "Correct: τιμῶ is first-person singular."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-014",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is second-person singular?",
          "choices": [
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμῶ",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-015",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is third-person singular?",
          "choices": [
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμᾷ is third-person singular."
            },
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμᾷ is third-person singular."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾷ is third-person singular."
            },
            {
              "text": "τιμᾷ",
              "correct": true,
              "feedback": "Correct: τιμᾷ is third-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-016",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is first-person plural?",
          "choices": [
            {
              "text": "τιμῶμεν",
              "correct": true,
              "feedback": "Correct: τιμῶμεν is first-person plural."
            },
            {
              "text": "τιμῶ",
              "correct": false,
              "feedback": "Review: τιμῶμεν is first-person plural."
            },
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμῶμεν is first-person plural."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμῶμεν is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-017",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is second-person plural?",
          "choices": [
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾶτε",
              "correct": true,
              "feedback": "Correct: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-018",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is third-person plural?",
          "choices": [
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμῶσιν",
              "correct": true,
              "feedback": "Correct: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-019",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "What does τιμῶ mean?",
          "choices": [
            {
              "text": "you honor",
              "correct": false,
              "feedback": "Review: The -ῶ ending is first-person singular."
            },
            {
              "text": "he honors",
              "correct": false,
              "feedback": "Review: The -ῶ ending is first-person singular."
            },
            {
              "text": "we honor",
              "correct": false,
              "feedback": "Review: The -ῶ ending is first-person singular."
            },
            {
              "text": "I honor",
              "correct": true,
              "feedback": "Correct: The -ῶ ending is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-020",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "What does τιμᾷς mean?",
          "choices": [
            {
              "text": "you honor",
              "correct": true,
              "feedback": "Correct: The -ᾷς ending is second-person singular."
            },
            {
              "text": "I honor",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            },
            {
              "text": "he honors",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            },
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-021",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "What does τιμῶμεν mean?",
          "choices": [
            {
              "text": "I honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "we honor",
              "correct": true,
              "feedback": "Correct: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "you all honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-022",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "What does τιμᾶτε mean?",
          "choices": [
            {
              "text": "he honors",
              "correct": false,
              "feedback": "Review: The -ᾶτε ending is second-person plural."
            },
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: The -ᾶτε ending is second-person plural."
            },
            {
              "text": "you all honor",
              "correct": true,
              "feedback": "Correct: The -ᾶτε ending is second-person plural."
            },
            {
              "text": "we honor",
              "correct": false,
              "feedback": "Review: The -ᾶτε ending is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-023",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which is the dictionary form of τιμᾷ?",
          "choices": [
            {
              "text": "τιμέω",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμόω",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμῶ",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμάω",
              "correct": true,
              "feedback": "Correct: The alpha-contract dictionary form is τιμάω."
            }
          ]
        },
        {
          "id": "lesson-9-practice-024",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which pair has the same person and number?",
          "choices": [
            {
              "text": "τιμᾷς / βλέπεις",
              "correct": true,
              "feedback": "Correct: Both τιμᾷς and βλέπεις mean “you” singular."
            },
            {
              "text": "τιμῶ / βλέπει",
              "correct": false,
              "feedback": "Review: Both τιμᾷς and βλέπεις mean “you” singular."
            },
            {
              "text": "τιμᾶτε / βλέπομεν",
              "correct": false,
              "feedback": "Review: Both τιμᾷς and βλέπεις mean “you” singular."
            },
            {
              "text": "τιμῶσιν / βλέπω",
              "correct": false,
              "feedback": "Review: Both τιμᾷς and βλέπεις mean “you” singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-025",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἐγὼ ἐρωτῶ mean?",
          "choices": [
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: ἐγὼ ἐρωτῶ means I ask."
            },
            {
              "text": "I ask",
              "correct": true,
              "feedback": "Correct: ἐγὼ ἐρωτῶ means I ask."
            },
            {
              "text": "you ask",
              "correct": false,
              "feedback": "Review: ἐγὼ ἐρωτῶ means I ask."
            },
            {
              "text": "he asks",
              "correct": false,
              "feedback": "Review: ἐγὼ ἐρωτῶ means I ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-026",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does σὺ ἐρωτᾷς mean?",
          "choices": [
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "you ask",
              "correct": true,
              "feedback": "Correct: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-027",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ὁ Σωκράτης ἐρωτᾷ mean?",
          "choices": [
            {
              "text": "Socrates laughs",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης ἐρωτᾷ means Socrates asks."
            },
            {
              "text": "Socrates honors",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης ἐρωτᾷ means Socrates asks."
            },
            {
              "text": "Socrates listens",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης ἐρωτᾷ means Socrates asks."
            },
            {
              "text": "Socrates asks",
              "correct": true,
              "feedback": "Correct: ὁ Σωκράτης ἐρωτᾷ means Socrates asks."
            }
          ]
        },
        {
          "id": "lesson-9-practice-028",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἡμεῖς ἐρωτῶμεν mean?",
          "choices": [
            {
              "text": "we ask",
              "correct": true,
              "feedback": "Correct: ἡμεῖς ἐρωτῶμεν means we ask."
            },
            {
              "text": "you all ask",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἐρωτῶμεν means we ask."
            },
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἐρωτῶμεν means we ask."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἐρωτῶμεν means we ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-029",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ὑμεῖς ἐρωτᾶτε mean?",
          "choices": [
            {
              "text": "you ask (one person)",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "you all ask",
              "correct": true,
              "feedback": "Correct: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-030",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does οἱ φίλοι ἐρωτῶσιν mean?",
          "choices": [
            {
              "text": "the friend asks",
              "correct": false,
              "feedback": "Review: οἱ φίλοι ἐρωτῶσιν means the friends ask."
            },
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: οἱ φίλοι ἐρωτῶσιν means the friends ask."
            },
            {
              "text": "the friends ask",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι ἐρωτῶσιν means the friends ask."
            },
            {
              "text": "the friends honor",
              "correct": false,
              "feedback": "Review: οἱ φίλοι ἐρωτῶσιν means the friends ask."
            }
          ]
        },
        {
          "id": "lesson-9-practice-031",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἐγὼ ἀγαπῶ mean?",
          "choices": [
            {
              "text": "you care for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "he cares for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "we care for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "I care for",
              "correct": true,
              "feedback": "Correct: ἐγὼ ἀγαπῶ means I care for."
            }
          ]
        },
        {
          "id": "lesson-9-practice-032",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does σὺ ἀγαπᾷς mean?",
          "choices": [
            {
              "text": "you care for",
              "correct": true,
              "feedback": "Correct: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "I care for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "she cares for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "they care for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            }
          ]
        },
        {
          "id": "lesson-9-practice-033",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ὁ Ἀντισθένης γελᾷ mean?",
          "choices": [
            {
              "text": "Antisthenes seeks",
              "correct": false,
              "feedback": "Review: ὁ Ἀντισθένης γελᾷ means Antisthenes laughs."
            },
            {
              "text": "Antisthenes laughs",
              "correct": true,
              "feedback": "Correct: ὁ Ἀντισθένης γελᾷ means Antisthenes laughs."
            },
            {
              "text": "Antisthenes asks",
              "correct": false,
              "feedback": "Review: ὁ Ἀντισθένης γελᾷ means Antisthenes laughs."
            },
            {
              "text": "Antisthenes honors",
              "correct": false,
              "feedback": "Review: ὁ Ἀντισθένης γελᾷ means Antisthenes laughs."
            }
          ]
        },
        {
          "id": "lesson-9-practice-034",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἐγὼ γελῶ mean?",
          "choices": [
            {
              "text": "he laughs",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "they laugh",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "I laugh",
              "correct": true,
              "feedback": "Correct: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "you laugh",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            }
          ]
        },
        {
          "id": "lesson-9-practice-035",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἡμεῖς ἀγαπῶμεν mean?",
          "choices": [
            {
              "text": "I care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "you all care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "they care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "we care for",
              "correct": true,
              "feedback": "Correct: ἡμεῖς ἀγαπῶμεν means we care for."
            }
          ]
        },
        {
          "id": "lesson-9-practice-036",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ὑμεῖς τιμᾶτε mean?",
          "choices": [
            {
              "text": "you all honor",
              "correct": true,
              "feedback": "Correct: ὑμεῖς τιμᾶτε means you all honor."
            },
            {
              "text": "we honor",
              "correct": false,
              "feedback": "Review: ὑμεῖς τιμᾶτε means you all honor."
            },
            {
              "text": "you honor (one person)",
              "correct": false,
              "feedback": "Review: ὑμεῖς τιμᾶτε means you all honor."
            },
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: ὑμεῖς τιμᾶτε means you all honor."
            }
          ]
        },
        {
          "id": "lesson-9-practice-037",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is the contracted first-person singular of τιμάω?",
          "choices": [
            {
              "text": "τιμού",
              "correct": false,
              "feedback": "Review: τιμῶ has the long contracted vowel."
            },
            {
              "text": "τιμῶ",
              "correct": true,
              "feedback": "Correct: τιμῶ has the long contracted vowel."
            },
            {
              "text": "τιμάω",
              "correct": false,
              "feedback": "Review: τιμῶ has the long contracted vowel."
            },
            {
              "text": "τιμεῖ",
              "correct": false,
              "feedback": "Review: τιμῶ has the long contracted vowel."
            }
          ]
        },
        {
          "id": "lesson-9-practice-038",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is the contracted second-person singular of τιμάω?",
          "choices": [
            {
              "text": "τιμεῖς",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμάεις",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            }
          ]
        },
        {
          "id": "lesson-9-practice-039",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is the contracted third-person singular of ἐρωτάω?",
          "choices": [
            {
              "text": "ἐρωτάει",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is the third-person singular."
            },
            {
              "text": "ἐρωτεῖ",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is the third-person singular."
            },
            {
              "text": "ἐρωτῶ",
              "correct": false,
              "feedback": "Review: ἐρωτᾷ is the third-person singular."
            },
            {
              "text": "ἐρωτᾷ",
              "correct": true,
              "feedback": "Correct: ἐρωτᾷ is the third-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-040",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is the contracted first-person plural of ἀγαπάω?",
          "choices": [
            {
              "text": "ἀγαπῶμεν",
              "correct": true,
              "feedback": "Correct: ἀγαπῶμεν means we care for."
            },
            {
              "text": "ἀγαπάομεν",
              "correct": false,
              "feedback": "Review: ἀγαπῶμεν means we care for."
            },
            {
              "text": "ἀγαπᾶτε",
              "correct": false,
              "feedback": "Review: ἀγαπῶμεν means we care for."
            },
            {
              "text": "ἀγαπῶσιν",
              "correct": false,
              "feedback": "Review: ἀγαπῶμεν means we care for."
            }
          ]
        },
        {
          "id": "lesson-9-practice-041",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "What changes when τιμάω becomes τιμῶ?",
          "choices": [
            {
              "text": "the noun changes case",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "adjacent vowels within the verb combine",
              "correct": true,
              "feedback": "Correct: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "a final vowel is dropped before another word",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "the subject becomes plural",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            }
          ]
        },
        {
          "id": "lesson-9-practice-042",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Why does τιμῶ have a circumflex?",
          "choices": [
            {
              "text": "the subject is plural",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            },
            {
              "text": "it follows a question mark",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            },
            {
              "text": "its accented vowels contracted into one long vowel",
              "correct": true,
              "feedback": "Correct: Contraction creates an accented long vowel."
            },
            {
              "text": "the verb is past tense",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            }
          ]
        },
        {
          "id": "lesson-9-practice-043",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which form has a circumflex on the contracted vowel?",
          "choices": [
            {
              "text": "βλέπεις",
              "correct": false,
              "feedback": "Review: τιμᾷς has a circumflex on ᾷ."
            },
            {
              "text": "λέγεις",
              "correct": false,
              "feedback": "Review: τιμᾷς has a circumflex on ᾷ."
            },
            {
              "text": "φέρεις",
              "correct": false,
              "feedback": "Review: τιμᾷς has a circumflex on ᾷ."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς has a circumflex on ᾷ."
            }
          ]
        },
        {
          "id": "lesson-9-practice-044",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is a citation form rather than a written contracted present form?",
          "choices": [
            {
              "text": "γελάω",
              "correct": true,
              "feedback": "Correct: γελάω is the dictionary citation form."
            },
            {
              "text": "γελῶ",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            },
            {
              "text": "γελᾷ",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            },
            {
              "text": "γελῶμεν",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            }
          ]
        },
        {
          "id": "lesson-9-practice-045",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which written form means “I ask”?",
          "choices": [
            {
              "text": "ἐρωτᾶτε",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person singular."
            },
            {
              "text": "ἐρωτῶ",
              "correct": true,
              "feedback": "Correct: ἐρωτῶ is first-person singular."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person singular."
            },
            {
              "text": "ἐρωτᾷ",
              "correct": false,
              "feedback": "Review: ἐρωτῶ is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-046",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which written form means “they honor”?",
          "choices": [
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμῶσιν",
              "correct": true,
              "feedback": "Correct: τιμῶσιν is third-person plural."
            },
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμῶσιν is third-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-practice-047",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Where does contraction operate in τιμάω → τιμῶ?",
          "choices": [
            {
              "text": "between two different words",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "only in the article",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "only in a noun ending",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "within one verb",
              "correct": true,
              "feedback": "Correct: The stem vowel and ending vowel combine inside the verb."
            }
          ]
        },
        {
          "id": "lesson-9-practice-048",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which pair correctly matches dictionary and reading form?",
          "choices": [
            {
              "text": "ἀγαπάω → ἀγαπῶ",
              "correct": true,
              "feedback": "Correct: ἀγαπῶ is a present form of ἀγαπάω."
            },
            {
              "text": "ἀγαπάω → ἀγαπεῖ",
              "correct": false,
              "feedback": "Review: ἀγαπῶ is a present form of ἀγαπάω."
            },
            {
              "text": "ἐρωτάω → ἐρωτεῖ",
              "correct": false,
              "feedback": "Review: ἀγαπῶ is a present form of ἀγαπάω."
            },
            {
              "text": "τιμάω → τιμοῦ",
              "correct": false,
              "feedback": "Review: ἀγαπῶ is a present form of ἀγαπάω."
            }
          ]
        },
        {
          "id": "lesson-9-practice-049",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What is the full form of ἀλλ᾽?",
          "choices": [
            {
              "text": "ἄρα",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀλλά",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀπό",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἄνευ",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-practice-050",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What is the full form of ἀπ᾽?",
          "choices": [
            {
              "text": "ἐπί",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "παρά",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "ἀπό",
              "correct": true,
              "feedback": "Correct: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "ἀλλά",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            }
          ]
        },
        {
          "id": "lesson-9-practice-051",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Which phrase correctly elides ἀλλά before ὁ φίλος?",
          "choices": [
            {
              "text": "ἀλλά᾽ ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ ὁ φίλος drops the final alpha."
            },
            {
              "text": "ἀλ᾽ ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ ὁ φίλος drops the final alpha."
            },
            {
              "text": "ἀλλ᾽ τὸν φίλον",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ ὁ φίλος drops the final alpha."
            },
            {
              "text": "ἀλλ᾽ ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ ὁ φίλος drops the final alpha."
            }
          ]
        },
        {
          "id": "lesson-9-practice-052",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Which phrase correctly elides ἀπό before ἀρχῆς?",
          "choices": [
            {
              "text": "ἀπ᾽ ἀρχῆς",
              "correct": true,
              "feedback": "Correct: ἀπ᾽ ἀρχῆς means from the beginning."
            },
            {
              "text": "ἀπο᾽ ἀρχῆς",
              "correct": false,
              "feedback": "Review: ἀπ᾽ ἀρχῆς means from the beginning."
            },
            {
              "text": "ἀπὸ᾽ ἀρχῆς",
              "correct": false,
              "feedback": "Review: ἀπ᾽ ἀρχῆς means from the beginning."
            },
            {
              "text": "ἀπ᾽ τῆς φίλης",
              "correct": false,
              "feedback": "Review: ἀπ᾽ ἀρχῆς means from the beginning."
            }
          ]
        },
        {
          "id": "lesson-9-practice-053",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What does ἀλλ᾽ ἐγώ mean?",
          "choices": [
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "but I",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "from me",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "and I",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-practice-054",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What does ἀπ᾽ ἀρχῆς mean?",
          "choices": [
            {
              "text": "but first",
              "correct": false,
              "feedback": "Review: ἀπ᾽ is shortened ἀπό."
            },
            {
              "text": "before a friend",
              "correct": false,
              "feedback": "Review: ἀπ᾽ is shortened ἀπό."
            },
            {
              "text": "from the beginning",
              "correct": true,
              "feedback": "Correct: ἀπ᾽ is shortened ἀπό."
            },
            {
              "text": "after dinner",
              "correct": false,
              "feedback": "Review: ἀπ᾽ is shortened ἀπό."
            }
          ]
        },
        {
          "id": "lesson-9-practice-055",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What does the apostrophe mark in ἀλλ᾽?",
          "choices": [
            {
              "text": "a plural verb",
              "correct": false,
              "feedback": "Review: The final alpha is omitted before a vowel."
            },
            {
              "text": "a question",
              "correct": false,
              "feedback": "Review: The final alpha is omitted before a vowel."
            },
            {
              "text": "a dative case",
              "correct": false,
              "feedback": "Review: The final alpha is omitted before a vowel."
            },
            {
              "text": "an omitted final vowel",
              "correct": true,
              "feedback": "Correct: The final alpha is omitted before a vowel."
            }
          ]
        },
        {
          "id": "lesson-9-practice-056",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "When is ἀλλ᾽ used here?",
          "choices": [
            {
              "text": "before a following vowel",
              "correct": true,
              "feedback": "Correct: The following word begins with a vowel."
            },
            {
              "text": "only at the end of a sentence",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            },
            {
              "text": "only before a consonant",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            },
            {
              "text": "only with plural subjects",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            }
          ]
        },
        {
          "id": "lesson-9-practice-057",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Which is an example of elision across words?",
          "choices": [
            {
              "text": "καλός → καλή",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "ἀλλ᾽ ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "τιμάω → τιμῶ",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "ὁ φίλος → τοῦ φίλου",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            }
          ]
        },
        {
          "id": "lesson-9-practice-058",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Which is an example of contraction within a verb?",
          "choices": [
            {
              "text": "ἀπό → ἀπ᾽",
              "correct": false,
              "feedback": "Review: ἐρωτῶ combines vowels inside one verb."
            },
            {
              "text": "ὁ → τόν",
              "correct": false,
              "feedback": "Review: ἐρωτῶ combines vowels inside one verb."
            },
            {
              "text": "ἐρωτάω → ἐρωτῶ",
              "correct": true,
              "feedback": "Correct: ἐρωτῶ combines vowels inside one verb."
            },
            {
              "text": "ἀλλά → ἀλλ᾽",
              "correct": false,
              "feedback": "Review: ἐρωτῶ combines vowels inside one verb."
            }
          ]
        },
        {
          "id": "lesson-9-practice-059",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Does elision change the meaning of ἀλλά?",
          "choices": [
            {
              "text": "Yes; it means from.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            },
            {
              "text": "Yes; it means first.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            },
            {
              "text": "Yes; it becomes a verb.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            },
            {
              "text": "No; it still means but.",
              "correct": true,
              "feedback": "Correct: The meaning stays the same."
            }
          ]
        },
        {
          "id": "lesson-9-practice-060",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Why is ἀλλ᾽ ὁ φίλος written with an apostrophe?",
          "choices": [
            {
              "text": "The final alpha of ἀλλά falls before ὁ.",
              "correct": true,
              "feedback": "Correct: Elision marks a missing final vowel."
            },
            {
              "text": "The noun φίλος is plural.",
              "correct": false,
              "feedback": "Review: Elision marks a missing final vowel."
            },
            {
              "text": "The verb is contracted.",
              "correct": false,
              "feedback": "Review: Elision marks a missing final vowel."
            },
            {
              "text": "The article is omitted.",
              "correct": false,
              "feedback": "Review: Elision marks a missing final vowel."
            }
          ]
        },
        {
          "id": "lesson-9-practice-061",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which phrase is the subject in ὁ φίλος τὸν φίλον τιμᾷ?",
          "choices": [
            {
              "text": "both φίλος phrases",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ marks nominative subject."
            },
            {
              "text": "τὸν φίλον",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            }
          ]
        },
        {
          "id": "lesson-9-practice-062",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which phrase is the object in ὁ φίλος τὸν φίλον τιμᾷ?",
          "choices": [
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "both φίλος phrases",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "τὸν φίλον",
              "correct": true,
              "feedback": "Correct: τὸν marks accusative object."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            }
          ]
        },
        {
          "id": "lesson-9-practice-063",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "What does ὁ Σωκράτης ἐρωτᾷ mean?",
          "choices": [
            {
              "text": "Socrates answers.",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης is the subject."
            },
            {
              "text": "They ask Socrates.",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης is the subject."
            },
            {
              "text": "Socrates laughs.",
              "correct": false,
              "feedback": "Review: ὁ Σωκράτης is the subject."
            },
            {
              "text": "Socrates asks.",
              "correct": true,
              "feedback": "Correct: ὁ Σωκράτης is the subject."
            }
          ]
        },
        {
          "id": "lesson-9-practice-064",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "What does ὁ δὲ Πλάτων λέγει mean?",
          "choices": [
            {
              "text": "Plato, in turn, speaks.",
              "correct": true,
              "feedback": "Correct: δέ marks a new step in the exchange."
            },
            {
              "text": "Plato is the object.",
              "correct": false,
              "feedback": "Review: δέ marks a new step in the exchange."
            },
            {
              "text": "Plato and Socrates speak.",
              "correct": false,
              "feedback": "Review: δέ marks a new step in the exchange."
            },
            {
              "text": "The friends laugh.",
              "correct": false,
              "feedback": "Review: δέ marks a new step in the exchange."
            }
          ]
        },
        {
          "id": "lesson-9-practice-065",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which article is nominative masculine singular?",
          "choices": [
            {
              "text": "τῷ",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            },
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ marks a masculine singular subject."
            },
            {
              "text": "τόν",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            },
            {
              "text": "τοῦ",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            }
          ]
        },
        {
          "id": "lesson-9-practice-066",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which article is accusative masculine singular?",
          "choices": [
            {
              "text": "τοῦ",
              "correct": false,
              "feedback": "Review: τόν marks a masculine singular object."
            },
            {
              "text": "τῷ",
              "correct": false,
              "feedback": "Review: τόν marks a masculine singular object."
            },
            {
              "text": "τόν",
              "correct": true,
              "feedback": "Correct: τόν marks a masculine singular object."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: τόν marks a masculine singular object."
            }
          ]
        },
        {
          "id": "lesson-9-practice-067",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "What case is τὸν φίλον?",
          "choices": [
            {
              "text": "nominative singular",
              "correct": false,
              "feedback": "Review: τόν and -ον mark accusative singular."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Review: τόν and -ον mark accusative singular."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Review: τόν and -ον mark accusative singular."
            },
            {
              "text": "accusative singular",
              "correct": true,
              "feedback": "Correct: τόν and -ον mark accusative singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-068",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "What case is ὁ φίλος?",
          "choices": [
            {
              "text": "nominative singular",
              "correct": true,
              "feedback": "Correct: ὁ and -ος mark nominative singular."
            },
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            }
          ]
        },
        {
          "id": "lesson-9-practice-069",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "In ὁ φίλος τιμᾷ, what does ὁ belong to?",
          "choices": [
            {
              "text": "the word ἀλλά",
              "correct": false,
              "feedback": "Review: The article belongs with the noun."
            },
            {
              "text": "the noun phrase ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The article belongs with the noun."
            },
            {
              "text": "the verb τιμᾷ",
              "correct": false,
              "feedback": "Review: The article belongs with the noun."
            },
            {
              "text": "the preceding sentence",
              "correct": false,
              "feedback": "Review: The article belongs with the noun."
            }
          ]
        },
        {
          "id": "lesson-9-practice-070",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Does δέ change the case of ὁ in ὁ δὲ Πλάτων?",
          "choices": [
            {
              "text": "Yes; it becomes genitive.",
              "correct": false,
              "feedback": "Review: δέ signals a new step without changing case."
            },
            {
              "text": "Yes; it becomes dative.",
              "correct": false,
              "feedback": "Review: δέ signals a new step without changing case."
            },
            {
              "text": "No; ὁ is still nominative.",
              "correct": true,
              "feedback": "Correct: δέ signals a new step without changing case."
            },
            {
              "text": "Yes; it becomes accusative.",
              "correct": false,
              "feedback": "Review: δέ signals a new step without changing case."
            }
          ]
        },
        {
          "id": "lesson-9-practice-071",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which phrase could begin a clause with “the friend” as subject?",
          "choices": [
            {
              "text": "τὸν φίλον",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            },
            {
              "text": "τοῦ φίλου",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            },
            {
              "text": "τῷ φίλῳ",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ φίλος is nominative."
            }
          ]
        },
        {
          "id": "lesson-9-practice-072",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which Greek means “the friend honors the friend”?",
          "choices": [
            {
              "text": "ὁ φίλος τὸν φίλον τιμᾷ",
              "correct": true,
              "feedback": "Correct: The nominative subject takes third-person singular τιμᾷ."
            },
            {
              "text": "τὸν φίλον ὁ φίλος τιμῶ",
              "correct": false,
              "feedback": "Review: The nominative subject takes third-person singular τιμᾷ."
            },
            {
              "text": "ὁ φίλος τὸν φίλον τιμᾶτε",
              "correct": false,
              "feedback": "Review: The nominative subject takes third-person singular τιμᾷ."
            },
            {
              "text": "ὁ φίλος τὸν φίλον τιμῶμεν",
              "correct": false,
              "feedback": "Review: The nominative subject takes third-person singular τιμᾷ."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 9 Grammar Exercises",
      "description": "Alpha-contract verbs, accent, elision, and clause reading",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-9-grammar-exercises-v1",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-9-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἡ φιλία mean?",
          "choices": [
            {
              "text": "excellence",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            },
            {
              "text": "friendship",
              "correct": true,
              "feedback": "Correct: φιλία names friendship."
            },
            {
              "text": "loyalty",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            },
            {
              "text": "need",
              "correct": false,
              "feedback": "Review: φιλία names friendship."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does τιμάω mean?",
          "choices": [
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            },
            {
              "text": "I seek",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            },
            {
              "text": "I honor",
              "correct": true,
              "feedback": "Correct: τιμάω means I honor."
            },
            {
              "text": "I laugh",
              "correct": false,
              "feedback": "Review: τιμάω means I honor."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Which is the full form of ἀλλ᾽?",
          "choices": [
            {
              "text": "ἀπό",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "ἄνευ",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "αὐτός",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is elided ἀλλά."
            },
            {
              "text": "ἀλλά",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ is elided ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is τὸ χρήσιμον in the conversation?",
          "choices": [
            {
              "text": "what is useful",
              "correct": true,
              "feedback": "Correct: The neuter adjective names usefulness."
            },
            {
              "text": "what is beautiful",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            },
            {
              "text": "what is costly",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            },
            {
              "text": "what is first",
              "correct": false,
              "feedback": "Review: The neuter adjective names usefulness."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is second-person singular?",
          "choices": [
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμῶ",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμᾷς is second-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is second-person plural?",
          "choices": [
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾶτε",
              "correct": true,
              "feedback": "Correct: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "What does τιμᾷς mean?",
          "choices": [
            {
              "text": "I honor",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            },
            {
              "text": "he honors",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            },
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: The -ᾷς ending is second-person singular."
            },
            {
              "text": "you honor",
              "correct": true,
              "feedback": "Correct: The -ᾷς ending is second-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "alpha-contract",
          "category": "Grammar",
          "prompt": "Which is the dictionary form of τιμᾷ?",
          "choices": [
            {
              "text": "τιμάω",
              "correct": true,
              "feedback": "Correct: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμέω",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμόω",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            },
            {
              "text": "τιμῶ",
              "correct": false,
              "feedback": "Review: The alpha-contract dictionary form is τιμάω."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does σὺ ἐρωτᾷς mean?",
          "choices": [
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "you ask",
              "correct": true,
              "feedback": "Correct: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ὑμεῖς ἐρωτᾶτε mean?",
          "choices": [
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "you ask (one person)",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "you all ask",
              "correct": true,
              "feedback": "Correct: ὑμεῖς ἐρωτᾶτε means you all ask."
            },
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: ὑμεῖς ἐρωτᾶτε means you all ask."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does σὺ ἀγαπᾷς mean?",
          "choices": [
            {
              "text": "I care for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "she cares for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "they care for",
              "correct": false,
              "feedback": "Review: σὺ ἀγαπᾷς means you care for."
            },
            {
              "text": "you care for",
              "correct": true,
              "feedback": "Correct: σὺ ἀγαπᾷς means you care for."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "contract-dialogue",
          "category": "Grammar",
          "prompt": "What does ἡμεῖς ἀγαπῶμεν mean?",
          "choices": [
            {
              "text": "we care for",
              "correct": true,
              "feedback": "Correct: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "I care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "you all care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            },
            {
              "text": "they care for",
              "correct": false,
              "feedback": "Review: ἡμεῖς ἀγαπῶμεν means we care for."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is the contracted second-person singular of τιμάω?",
          "choices": [
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμάεις",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμεῖς",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "What changes when τιμάω becomes τιμῶ?",
          "choices": [
            {
              "text": "the subject becomes plural",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "the noun changes case",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "adjacent vowels within the verb combine",
              "correct": true,
              "feedback": "Correct: Contract verbs combine adjacent vowels inside a word."
            },
            {
              "text": "a final vowel is dropped before another word",
              "correct": false,
              "feedback": "Review: Contract verbs combine adjacent vowels inside a word."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Which is a citation form rather than a written contracted present form?",
          "choices": [
            {
              "text": "γελῶ",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            },
            {
              "text": "γελᾷ",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            },
            {
              "text": "γελῶμεν",
              "correct": false,
              "feedback": "Review: γελάω is the dictionary citation form."
            },
            {
              "text": "γελάω",
              "correct": true,
              "feedback": "Correct: γελάω is the dictionary citation form."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "contract-accent",
          "category": "Grammar",
          "prompt": "Where does contraction operate in τιμάω → τιμῶ?",
          "choices": [
            {
              "text": "within one verb",
              "correct": true,
              "feedback": "Correct: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "between two different words",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "only in the article",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            },
            {
              "text": "only in a noun ending",
              "correct": false,
              "feedback": "Review: The stem vowel and ending vowel combine inside the verb."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What is the full form of ἀπ᾽?",
          "choices": [
            {
              "text": "παρά",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "ἀπό",
              "correct": true,
              "feedback": "Correct: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "ἀλλά",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            },
            {
              "text": "ἐπί",
              "correct": false,
              "feedback": "Review: ἀπ᾽ loses the final omicron of ἀπό."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "What does ἀλλ᾽ ἐγώ mean?",
          "choices": [
            {
              "text": "and I",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "but I",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ is shortened ἀλλά."
            },
            {
              "text": "from me",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ is shortened ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "When is ἀλλ᾽ used here?",
          "choices": [
            {
              "text": "only at the end of a sentence",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            },
            {
              "text": "only before a consonant",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            },
            {
              "text": "only with plural subjects",
              "correct": false,
              "feedback": "Review: The following word begins with a vowel."
            },
            {
              "text": "before a following vowel",
              "correct": true,
              "feedback": "Correct: The following word begins with a vowel."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "elision",
          "category": "Grammar",
          "prompt": "Does elision change the meaning of ἀλλά?",
          "choices": [
            {
              "text": "No; it still means but.",
              "correct": true,
              "feedback": "Correct: The meaning stays the same."
            },
            {
              "text": "Yes; it means from.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            },
            {
              "text": "Yes; it means first.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            },
            {
              "text": "Yes; it becomes a verb.",
              "correct": false,
              "feedback": "Review: The meaning stays the same."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which phrase is the object in ὁ φίλος τὸν φίλον τιμᾷ?",
          "choices": [
            {
              "text": "both φίλος phrases",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "τὸν φίλον",
              "correct": true,
              "feedback": "Correct: τὸν marks accusative object."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which article is nominative masculine singular?",
          "choices": [
            {
              "text": "τοῦ",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            },
            {
              "text": "τῷ",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            },
            {
              "text": "ὁ",
              "correct": true,
              "feedback": "Correct: ὁ marks a masculine singular subject."
            },
            {
              "text": "τόν",
              "correct": false,
              "feedback": "Review: ὁ marks a masculine singular subject."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "What case is ὁ φίλος?",
          "choices": [
            {
              "text": "accusative singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            },
            {
              "text": "genitive singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            },
            {
              "text": "dative singular",
              "correct": false,
              "feedback": "Review: ὁ and -ος mark nominative singular."
            },
            {
              "text": "nominative singular",
              "correct": true,
              "feedback": "Correct: ὁ and -ος mark nominative singular."
            }
          ]
        },
        {
          "id": "lesson-9-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "article-clause",
          "category": "Grammar",
          "prompt": "Which phrase could begin a clause with “the friend” as subject?",
          "choices": [
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ φίλος is nominative."
            },
            {
              "text": "τὸν φίλον",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            },
            {
              "text": "τοῦ φίλου",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            },
            {
              "text": "τῷ φίλῳ",
              "correct": false,
              "feedback": "Review: ὁ φίλος is nominative."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 9 Final Quiz — What Makes a Good Friend?",
      "description": "Reading, vocabulary, grammar, and the Greek symposium",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-9-final-quiz-v1",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 9 and continue to Lesson 10.",
      "questions": [
        {
          "id": "lesson-9-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What question does Socrates ask Critobulus?",
          "choices": [
            {
              "text": "When will a ship sail?",
              "correct": false,
              "feedback": "Review: Socrates asks about a good friend."
            },
            {
              "text": "What makes a good friend?",
              "correct": true,
              "feedback": "Correct: Socrates asks about a good friend."
            },
            {
              "text": "Where is Eleusis?",
              "correct": false,
              "feedback": "Review: Socrates asks about a good friend."
            },
            {
              "text": "Who bought the wool?",
              "correct": false,
              "feedback": "Review: Socrates asks about a good friend."
            }
          ]
        },
        {
          "id": "lesson-9-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Which quality does Critobulus first stress?",
          "choices": [
            {
              "text": "speed at running",
              "correct": false,
              "feedback": "Review: Critobulus values someone who does not abandon a friend."
            },
            {
              "text": "skill at weaving",
              "correct": false,
              "feedback": "Review: Critobulus values someone who does not abandon a friend."
            },
            {
              "text": "loyalty in trouble",
              "correct": true,
              "feedback": "Correct: Critobulus values someone who does not abandon a friend."
            },
            {
              "text": "wealth alone",
              "correct": false,
              "feedback": "Review: Critobulus values someone who does not abandon a friend."
            }
          ]
        },
        {
          "id": "lesson-9-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Antisthenes first emphasize?",
          "choices": [
            {
              "text": "the size of the house",
              "correct": false,
              "feedback": "Review: Antisthenes points to useful help."
            },
            {
              "text": "festival offerings",
              "correct": false,
              "feedback": "Review: Antisthenes points to useful help."
            },
            {
              "text": "military rank",
              "correct": false,
              "feedback": "Review: Antisthenes points to useful help."
            },
            {
              "text": "help that meets a need",
              "correct": true,
              "feedback": "Correct: Antisthenes points to useful help."
            }
          ]
        },
        {
          "id": "lesson-9-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Plato insist must accompany friendship?",
          "choices": [
            {
              "text": "good character",
              "correct": true,
              "feedback": "Correct: Plato says character matters."
            },
            {
              "text": "a costly cup",
              "correct": false,
              "feedback": "Review: Plato says character matters."
            },
            {
              "text": "a large couch",
              "correct": false,
              "feedback": "Review: Plato says character matters."
            },
            {
              "text": "a public office",
              "correct": false,
              "feedback": "Review: Plato says character matters."
            }
          ]
        },
        {
          "id": "lesson-9-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What problem does Xenophon put to Antisthenes?",
          "choices": [
            {
              "text": "A man loses his land.",
              "correct": false,
              "feedback": "Review: Xenophon asks whether help without respect suffices."
            },
            {
              "text": "A person helps but does not honor a friend.",
              "correct": true,
              "feedback": "Correct: Xenophon asks whether help without respect suffices."
            },
            {
              "text": "A friend cannot find a road.",
              "correct": false,
              "feedback": "Review: Xenophon asks whether help without respect suffices."
            },
            {
              "text": "A guest forgets dinner.",
              "correct": false,
              "feedback": "Review: Xenophon asks whether help without respect suffices."
            }
          ]
        },
        {
          "id": "lesson-9-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Socrates ask the group to examine at the end?",
          "choices": [
            {
              "text": "whether Plato owns a couch",
              "correct": false,
              "feedback": "Review: Socrates turns the question toward the seekers themselves."
            },
            {
              "text": "whether Critobulus can weave",
              "correct": false,
              "feedback": "Review: Socrates turns the question toward the seekers themselves."
            },
            {
              "text": "whether they themselves are good friends",
              "correct": true,
              "feedback": "Correct: Socrates turns the question toward the seekers themselves."
            },
            {
              "text": "whether the krater is full",
              "correct": false,
              "feedback": "Review: Socrates turns the question toward the seekers themselves."
            }
          ]
        },
        {
          "id": "lesson-9-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ὁ φίλος mean?",
          "choices": [
            {
              "text": "good character, excellence",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "house",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "honor",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "friend",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-9-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ φιλία mean?",
          "choices": [
            {
              "text": "friendship",
              "correct": true,
              "feedback": "Correct: ἡ φιλία means friendship."
            },
            {
              "text": "need, use",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "dinner",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            },
            {
              "text": "ask a question",
              "correct": false,
              "feedback": "Review: ἡ φιλία means friendship."
            }
          ]
        },
        {
          "id": "lesson-9-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ χρεία mean?",
          "choices": [
            {
              "text": "laugh",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "need, use",
              "correct": true,
              "feedback": "Correct: ἡ χρεία means need, use."
            },
            {
              "text": "house",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            },
            {
              "text": "honor",
              "correct": false,
              "feedback": "Review: ἡ χρεία means need, use."
            }
          ]
        },
        {
          "id": "lesson-9-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "listen, hear",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "first",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            },
            {
              "text": "ask a question",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask a question."
            },
            {
              "text": "laugh",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask a question."
            }
          ]
        },
        {
          "id": "lesson-9-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἀγαπάω mean?",
          "choices": [
            {
              "text": "seek",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "good",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "only, alone",
              "correct": false,
              "feedback": "Review: ἀγαπάω means care for, cherish."
            },
            {
              "text": "care for, cherish",
              "correct": true,
              "feedback": "Correct: ἀγαπάω means care for, cherish."
            }
          ]
        },
        {
          "id": "lesson-9-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πρῶτον mean?",
          "choices": [
            {
              "text": "first",
              "correct": true,
              "feedback": "Correct: πρῶτον means first."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "need, use",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            },
            {
              "text": "dinner",
              "correct": false,
              "feedback": "Review: πρῶτον means first."
            }
          ]
        },
        {
          "id": "lesson-9-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is first-person singular?",
          "choices": [
            {
              "text": "τιμᾶτε",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            },
            {
              "text": "τιμῶ",
              "correct": true,
              "feedback": "Correct: τιμῶ is first-person singular."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τιμῶ is first-person singular."
            }
          ]
        },
        {
          "id": "lesson-9-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which form of τιμάω is second-person plural?",
          "choices": [
            {
              "text": "τιμῶμεν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾶτε",
              "correct": true,
              "feedback": "Correct: τιμᾶτε is second-person plural."
            },
            {
              "text": "τιμᾷς",
              "correct": false,
              "feedback": "Review: τιμᾶτε is second-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does τιμῶμεν mean?",
          "choices": [
            {
              "text": "they honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "you all honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "I honor",
              "correct": false,
              "feedback": "Review: The -ῶμεν ending is first-person plural."
            },
            {
              "text": "we honor",
              "correct": true,
              "feedback": "Correct: The -ῶμεν ending is first-person plural."
            }
          ]
        },
        {
          "id": "lesson-9-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does σὺ ἐρωτᾷς mean?",
          "choices": [
            {
              "text": "you ask",
              "correct": true,
              "feedback": "Correct: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "they ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            },
            {
              "text": "we ask",
              "correct": false,
              "feedback": "Review: σὺ ἐρωτᾷς means you ask."
            }
          ]
        },
        {
          "id": "lesson-9-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does ἐγὼ ἀγαπῶ mean?",
          "choices": [
            {
              "text": "we care for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "I care for",
              "correct": true,
              "feedback": "Correct: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "you care for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            },
            {
              "text": "he cares for",
              "correct": false,
              "feedback": "Review: ἐγὼ ἀγαπῶ means I care for."
            }
          ]
        },
        {
          "id": "lesson-9-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does ἐγὼ γελῶ mean?",
          "choices": [
            {
              "text": "he laughs",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "they laugh",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "I laugh",
              "correct": true,
              "feedback": "Correct: ἐγὼ γελῶ means I laugh."
            },
            {
              "text": "you laugh",
              "correct": false,
              "feedback": "Review: ἐγὼ γελῶ means I laugh."
            }
          ]
        },
        {
          "id": "lesson-9-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is the contracted second-person singular of τιμάω?",
          "choices": [
            {
              "text": "τιμάεις",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμεῖς",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμῶσιν",
              "correct": false,
              "feedback": "Review: τιμᾷς is the written contracted form."
            },
            {
              "text": "τιμᾷς",
              "correct": true,
              "feedback": "Correct: τιμᾷς is the written contracted form."
            }
          ]
        },
        {
          "id": "lesson-9-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Why does τιμῶ have a circumflex?",
          "choices": [
            {
              "text": "its accented vowels contracted into one long vowel",
              "correct": true,
              "feedback": "Correct: Contraction creates an accented long vowel."
            },
            {
              "text": "the verb is past tense",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            },
            {
              "text": "the subject is plural",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            },
            {
              "text": "it follows a question mark",
              "correct": false,
              "feedback": "Review: Contraction creates an accented long vowel."
            }
          ]
        },
        {
          "id": "lesson-9-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is the full form of ἀλλ᾽?",
          "choices": [
            {
              "text": "ἄρα",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀλλά",
              "correct": true,
              "feedback": "Correct: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἀπό",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            },
            {
              "text": "ἄνευ",
              "correct": false,
              "feedback": "Review: ἀλλ᾽ loses the final alpha of ἀλλά."
            }
          ]
        },
        {
          "id": "lesson-9-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is an example of elision across words?",
          "choices": [
            {
              "text": "ὁ φίλος → τοῦ φίλου",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "καλός → καλή",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "ἀλλ᾽ ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The final vowel of ἀλλά disappears before ὁ."
            },
            {
              "text": "τιμάω → τιμῶ",
              "correct": false,
              "feedback": "Review: The final vowel of ἀλλά disappears before ὁ."
            }
          ]
        },
        {
          "id": "lesson-9-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase is the subject in ὁ φίλος τὸν φίλον τιμᾷ?",
          "choices": [
            {
              "text": "τὸν φίλον",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            },
            {
              "text": "both φίλος phrases",
              "correct": false,
              "feedback": "Review: ὁ marks nominative subject."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ marks nominative subject."
            }
          ]
        },
        {
          "id": "lesson-9-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase is the object in ὁ φίλος τὸν φίλον τιμᾷ?",
          "choices": [
            {
              "text": "τὸν φίλον",
              "correct": true,
              "feedback": "Correct: τὸν marks accusative object."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "τιμᾷ",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            },
            {
              "text": "both φίλος phrases",
              "correct": false,
              "feedback": "Review: τὸν marks accusative object."
            }
          ]
        },
        {
          "id": "lesson-9-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What was a symposium?",
          "choices": [
            {
              "text": "a public jury",
              "correct": false,
              "feedback": "Review: A symposium combined drinking after dinner with conversation and other entertainment."
            },
            {
              "text": "a gathering to drink and converse after dinner",
              "correct": true,
              "feedback": "Correct: A symposium combined drinking after dinner with conversation and other entertainment."
            },
            {
              "text": "a military training ground",
              "correct": false,
              "feedback": "Review: A symposium combined drinking after dinner with conversation and other entertainment."
            },
            {
              "text": "a weaving workshop",
              "correct": false,
              "feedback": "Review: A symposium combined drinking after dinner with conversation and other entertainment."
            }
          ]
        },
        {
          "id": "lesson-9-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Where was the Tomb of the Diver found?",
          "choices": [
            {
              "text": "Eleusis near Athens",
              "correct": false,
              "feedback": "Review: The tomb is from the Greek city of Paestum."
            },
            {
              "text": "Delphi in central Greece",
              "correct": false,
              "feedback": "Review: The tomb is from the Greek city of Paestum."
            },
            {
              "text": "Paestum in southern Italy",
              "correct": true,
              "feedback": "Correct: The tomb is from the Greek city of Paestum."
            },
            {
              "text": "Athens in Attica",
              "correct": false,
              "feedback": "Review: The tomb is from the Greek city of Paestum."
            }
          ]
        },
        {
          "id": "lesson-9-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Where is the diver painted in that tomb?",
          "choices": [
            {
              "text": "on the symposium couch",
              "correct": false,
              "feedback": "Review: The diver is on the lid; the side walls show banquet scenes."
            },
            {
              "text": "on a drinking cup",
              "correct": false,
              "feedback": "Review: The diver is on the lid; the side walls show banquet scenes."
            },
            {
              "text": "on the room door",
              "correct": false,
              "feedback": "Review: The diver is on the lid; the side walls show banquet scenes."
            },
            {
              "text": "on the underside of its lid",
              "correct": true,
              "feedback": "Correct: The diver is on the lid; the side walls show banquet scenes."
            }
          ]
        },
        {
          "id": "lesson-9-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What do the side-wall frescoes depict?",
          "choices": [
            {
              "text": "banquet or symposium scenes",
              "correct": true,
              "feedback": "Correct: The walls show symposium scenes."
            },
            {
              "text": "Athenian assembly voting",
              "correct": false,
              "feedback": "Review: The walls show symposium scenes."
            },
            {
              "text": "a cavalry charge",
              "correct": false,
              "feedback": "Review: The walls show symposium scenes."
            },
            {
              "text": "women at a loom",
              "correct": false,
              "feedback": "Review: The walls show symposium scenes."
            }
          ]
        },
        {
          "id": "lesson-9-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What vessel mixed wine with water?",
          "choices": [
            {
              "text": "a writing tablet",
              "correct": false,
              "feedback": "Review: A krater held the mixed wine."
            },
            {
              "text": "a krater",
              "correct": true,
              "feedback": "Correct: A krater held the mixed wine."
            },
            {
              "text": "a loom weight",
              "correct": false,
              "feedback": "Review: A krater held the mixed wine."
            },
            {
              "text": "a spindle",
              "correct": false,
              "feedback": "Review: A krater held the mixed wine."
            }
          ]
        },
        {
          "id": "lesson-9-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which ancient text asks Critobulus about friendship?",
          "choices": [
            {
              "text": "Thucydides 2.47",
              "correct": false,
              "feedback": "Review: Memorabilia 2.6 supplies the central question."
            },
            {
              "text": "Xenophon’s Anabasis 3.1",
              "correct": false,
              "feedback": "Review: Memorabilia 2.6 supplies the central question."
            },
            {
              "text": "Xenophon’s Memorabilia 2.6",
              "correct": true,
              "feedback": "Correct: Memorabilia 2.6 supplies the central question."
            },
            {
              "text": "Homer’s Iliad 1",
              "correct": false,
              "feedback": "Review: Memorabilia 2.6 supplies the central question."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-10",
    "title": "The Letter from Proxenus",
    "fallbackUrl": "lesson.html?lesson=10&page=1"
  },
  "contentRevision": "lesson-9-friendship-complete-v1",
  "previousLesson": {
    "id": "lesson-8",
    "title": "A Household Finds a Way",
    "fallbackUrl": "lesson.html?lesson=8&page=1"
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
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-9' FOR UPDATE;
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
  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-9-page-1';
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
      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_9_friendship'))
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
$lesson9$;
UPDATE public.lesson_content_overrides o
SET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('What Makes a Good Friend?'::text),true),version=o.version+1,updated_at=now()
WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-8')
  AND o.content #>> '{nextLesson,id}'='lesson-9'
  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'What Makes a Good Friend?';
COMMIT;
