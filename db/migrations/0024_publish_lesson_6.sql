-- Publish the complete Lesson 6 gymnasium lesson and archive its previous version.
BEGIN;
DO $lesson6$
DECLARE
  patch jsonb := $json${
  "id": "lesson-6",
  "number": 6,
  "title": "Strength of Body and Mind",
  "greekTitle": "Ὁ Σωκράτης καὶ ὁ Ἐπιγένης ἐν τῷ γυμνασίῳ",
  "scope": "Plural article, adjective, and first- and second-declension noun cases; shifting accents",
  "theme": "Wisdom and Socrates; source: Xenophon, Memorabilia 3.12.1–8",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-6-banner-v3.png",
    "alt": "Seated Socrates speaks with the slight-framed Epigenes while Xenophon and Clinias stand nearby; unclothed wrestling and pankration pairs train behind a low wall",
    "caption": "Ὁ Σωκράτης καὶ ὁ Ἐπιγένης ἐν τῷ γυμνασίῳ"
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-6-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-6-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-6-page-3",
      "title": "The Greek Gymnasium",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "Nouns",
      "items": [
        {
          "greek": "τὸ γυμνάσιον",
          "english": "gymnasium, place for exercise",
          "dictionaryForm": "γυμνάσιον, γυμνασίου, τό",
          "status": "required vocabulary",
          "lemma": "γυμνάσιον",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ πάλη",
          "english": "wrestling",
          "dictionaryForm": "πάλη, πάλης, ἡ",
          "status": "required vocabulary",
          "lemma": "πάλη",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ παγκράτιον",
          "english": "pankration, a wrestling and striking contest",
          "dictionaryForm": "παγκράτιον, παγκρατίου, τό",
          "status": "required vocabulary",
          "lemma": "παγκράτιον",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ ἄνθρωπος",
          "english": "person, human being",
          "dictionaryForm": "ἄνθρωπος, ἀνθρώπου, ὁ",
          "status": "required vocabulary",
          "lemma": "ἄνθρωπος",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ σῶμα",
          "english": "body; its case forms are supplied in glosses",
          "dictionaryForm": "σῶμα, σώματος, τό",
          "status": "reading vocabulary",
          "lemma": "σῶμα",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ ἀθλητής",
          "english": "athlete, competitor",
          "dictionaryForm": "ἀθλητής, ἀθλητοῦ, ὁ",
          "status": "reading vocabulary",
          "lemma": "ἀθλητής",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ ἰδιώτης",
          "english": "ordinary private person, non-specialist",
          "dictionaryForm": "ἰδιώτης, ἰδιώτου, ὁ",
          "status": "reading vocabulary",
          "lemma": "ἰδιώτης",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Verbs",
      "items": [
        {
          "greek": "γυμνάζω",
          "english": "train, exercise",
          "status": "required vocabulary",
          "lemma": "γυμνάζω",
          "audioPlaceholder": true
        },
        {
          "greek": "παλαίω",
          "english": "wrestle",
          "status": "required vocabulary",
          "lemma": "παλαίω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀσκέω",
          "english": "practice; contracted forms are supplied in glosses",
          "status": "reading vocabulary",
          "lemma": "ἀσκέω",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Describing words and expressions",
      "items": [
        {
          "greek": "ἄλλος, ἄλλη, ἄλλο",
          "english": "other, another",
          "status": "required vocabulary",
          "lemma": "ἄλλος",
          "audioPlaceholder": true
        },
        {
          "greek": "χρήσιμος, χρησίμη, χρήσιμον",
          "english": "useful",
          "status": "required vocabulary",
          "lemma": "χρήσιμος",
          "audioPlaceholder": true
        },
        {
          "greek": "πολλάκις",
          "english": "often",
          "status": "required vocabulary",
          "lemma": "πολλάκις",
          "audioPlaceholder": true
        },
        {
          "greek": "ἄριστος, ἀρίστη, ἄριστον",
          "english": "best, very good; here, closest (of friends)",
          "status": "reading vocabulary",
          "lemma": "ἄριστος",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Ὁ Σωκράτης καὶ ὁ Ἐπιγένης ἐν τῷ γυμνασίῳ",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "Xenophon and his friend Clinias train at the gymnasium. As they rest, they hear Socrates speak to Epigenes. Read for the different jobs done by οἱ φίλοι, τοὺς φίλους, τῶν φίλων, and τοῖς φίλοις.",
      "This is a beginner-Greek adaptation of Xenophon, Memorabilia 3.12. Socrates' concern for Epigenes, Epigenes' reply that he is an ordinary person rather than an athlete, and the arguments about danger, friends, the city, and the mind come from that passage. The gymnasium setting, Xenophon and Clinias as listeners, the wrestling and pankration, and the wording of the conversation are course reconstructions.",
      "Learn the vocabulary below. Blue glosses explain other words and forms. The plural forms of articles, adjectives, and first- and second-declension nouns are the new grammar focus. Third-declension nouns, contract and middle verbs, and unusual name forms are supplied for reading, not new paradigms to memorize."
    ],
    "paragraphs": [
      {
        "greek": "ὁ Ξενοφῶν καὶ ὁ Κλεινίας ἄριστοι φίλοι εἰσίν. πολλάκις εἰς τὸ γυμνάσιον βαδίζουσιν. ἐκεῖ οἱ νέοι τὰ σώματα γυμνάζουσιν.",
        "gloss": [
          {
            "greek": "ὁ Κλεινίας",
            "english": "Clinias, Xenophon's friend in this reconstructed scene"
          },
          {
            "greek": "ἄριστοι",
            "english": "closest, very good; nominative plural of ἄριστος"
          },
          {
            "greek": "ἐκεῖ",
            "english": "there"
          },
          {
            "greek": "τὰ σώματα",
            "english": "their bodies; supplied third-declension plural"
          }
        ]
      },
      {
        "greek": "σήμερον οἱ δύο φίλοι παλαίουσιν· ἔπειτα τὸ παγκράτιον ἀσκοῦσιν. οἱ ἄλλοι νέοι τοὺς φίλους βλέπουσιν. ὁ Σωκράτης τὴν πάλην τῶν φίλων βλέπει. οἱ νέοι τοῖς φίλοις λέγουσιν· «καλῶς παλαίετε!»",
        "gloss": [
          {
            "greek": "οἱ δύο φίλοι",
            "english": "the two friends; nominative plural"
          },
          {
            "greek": "ἀσκοῦσιν",
            "english": "they practice; contract verb form, supplied"
          },
          {
            "greek": "τοὺς φίλους",
            "english": "the friends; accusative plural"
          },
          {
            "greek": "τῶν φίλων",
            "english": "of the friends; genitive plural"
          },
          {
            "greek": "τοῖς φίλοις",
            "english": "to the friends; dative plural"
          },
          {
            "greek": "καλῶς παλαίετε",
            "english": "you are wrestling well; plural you"
          }
        ]
      },
      {
        "greek": "ἐν τῇ στοᾷ ὁ Σωκράτης καὶ ὁ Ἐπιγένης κάθηνται. ὁ Ἐπιγένης νέος ἐστίν, ἀλλὰ τὸ σῶμα αὐτοῦ οὐκ ἰσχυρόν ἐστιν. ὁ Ξενοφῶν καὶ ὁ Κλεινίας παρὰ τῷ Σωκράτει ἵστανται καὶ ἀκούουσιν.",
        "gloss": [
          {
            "greek": "ἐν τῇ στοᾷ",
            "english": "in the covered colonnade"
          },
          {
            "greek": "ὁ Ἐπιγένης",
            "english": "Epigenes"
          },
          {
            "greek": "κάθηνται",
            "english": "they sit; middle form, supplied"
          },
          {
            "greek": "τὸ σῶμα αὐτοῦ",
            "english": "his body"
          },
          {
            "greek": "παρὰ τῷ Σωκράτει",
            "english": "beside Socrates"
          },
          {
            "greek": "ἵστανται",
            "english": "they stand; supplied verb form"
          }
        ]
      },
      {
        "greek": "«ὦ Ἐπίγενες,» λέγει ὁ Σωκράτης, «σὺ νέος μὲν εἶ, τὸ δὲ σῶμά σου οὐκ ἰσχυρόν ἐστιν. διὰ τί οὐ γυμνάζεις τὸ σῶμα;» ὁ δὲ Ἐπιγένης ἀποκρίνεται· «οὐκ εἰμὶ ἀθλητής, ὦ Σώκρατες· ἰδιώτης εἰμί.»",
        "gloss": [
          {
            "greek": "ὦ Ἐπίγενες",
            "english": "Epigenes!; form used when addressing him"
          },
          {
            "greek": "νέος μὲν … τὸ δὲ σῶμα",
            "english": "you are young, but your body …"
          },
          {
            "greek": "τὸ σῶμά σου",
            "english": "your body"
          },
          {
            "greek": "ἀποκρίνεται",
            "english": "he answers; middle form, supplied"
          },
          {
            "greek": "ὦ Σώκρατες",
            "english": "Socrates!; form used when addressing him"
          },
          {
            "greek": "ἰδιώτης",
            "english": "ordinary private person, not a professional competitor"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης λέγει· «οἱ ἐν Ὀλυμπίᾳ ἀθληταὶ ἀγωνίζονται· καὶ οἱ Ἀθηναῖοι ἐν τοῖς πολέμοις ἀγωνίζονται. οἱ ἰσχυροὶ ἄνθρωποι τοῖς φίλοις βοηθοῦσιν καὶ τὴν πόλιν ὠφελοῦσιν.»",
        "gloss": [
          {
            "greek": "οἱ ἐν Ὀλυμπίᾳ ἀθληταί",
            "english": "the athletes at Olympia; first-declension masculine plural supplied"
          },
          {
            "greek": "ἀγωνίζονται",
            "english": "they compete or struggle; middle form, supplied"
          },
          {
            "greek": "οἱ Ἀθηναῖοι",
            "english": "the Athenians"
          },
          {
            "greek": "ἐν τοῖς πολέμοις",
            "english": "in wars; dative plural"
          },
          {
            "greek": "βοηθοῦσιν",
            "english": "they help; contract verb form, supplied"
          },
          {
            "greek": "τὴν πόλιν",
            "english": "the city; supplied third-declension accusative"
          },
          {
            "greek": "ὠφελοῦσιν",
            "english": "they benefit; contract verb form, supplied"
          }
        ]
      },
      {
        "greek": "ὁ Ἐπιγένης ἐρωτᾷ· «καὶ ἐν εἰρήνῃ χρήσιμόν ἐστι τὸ σῶμα;» ὁ Σωκράτης λέγει· «ναί· τὸ σῶμα πρὸς πάντα τὰ ἔργα τῶν ἀνθρώπων χρήσιμόν ἐστιν. καὶ ὁ νοῦς ἐν ἀγαθῷ σώματι καλῶς μανθάνει.»",
        "gloss": [
          {
            "greek": "ἐρωτᾷ",
            "english": "he asks; contract verb form, supplied"
          },
          {
            "greek": "ἐν εἰρήνῃ",
            "english": "in peacetime"
          },
          {
            "greek": "χρήσιμόν ἐστι",
            "english": "is useful; χρήσιμον gains an extra accent before ἐστι"
          },
          {
            "greek": "πρὸς πάντα τὰ ἔργα",
            "english": "for all the tasks; πάντα is supplied"
          },
          {
            "greek": "τῶν ἀνθρώπων",
            "english": "of people; genitive plural, with shifting accent"
          },
          {
            "greek": "ὁ νοῦς",
            "english": "the mind; supplied noun"
          },
          {
            "greek": "ἐν ἀγαθῷ σώματι",
            "english": "in a healthy body; σώματι is a supplied third-declension form"
          }
        ]
      },
      {
        "greek": "«μὴ ἀμέλει τοῦ σώματος, ὦ Ἐπίγενες. οὐ γιγνώσκεις ἔτι τὴν δύναμιν τοῦ σώματός σου.» ὁ Ἐπιγένης τοὺς νέους βλέπει. ὁ Ξενοφῶν καὶ ὁ Κλεινίας τὸν Σωκράτη ἀκούουσιν.",
        "gloss": [
          {
            "greek": "μὴ ἀμέλει",
            "english": "do not neglect; singular command, contract verb supplied"
          },
          {
            "greek": "τοῦ σώματος",
            "english": "your body; literally 'of the body,' supplied third-declension genitive"
          },
          {
            "greek": "ἔτι",
            "english": "yet"
          },
          {
            "greek": "τὴν δύναμιν",
            "english": "the strength or potential; supplied third-declension accusative"
          },
          {
            "greek": "τοῦ σώματός σου",
            "english": "of your body"
          },
          {
            "greek": "τοὺς νέους",
            "english": "the young men; accusative plural"
          }
        ]
      }
    ],
    "translation": "Xenophon and Clinias are very close friends. They often walk to the gymnasium. There the young men train their bodies.\n\nToday the two friends wrestle; then they practice pankration. The other young men watch the friends. Socrates watches the friends' wrestling. The young men say to the friends, ‘You are wrestling well!’\n\nSocrates and Epigenes sit in the covered colonnade. Epigenes is young, but his body is not strong. Xenophon and Clinias stand beside Socrates and listen.\n\n‘Epigenes,’ says Socrates, ‘you are young, but your body is not strong. Why do you not train your body?’ Epigenes answers, ‘I am not an athlete, Socrates; I am an ordinary person.’\n\nSocrates says, ‘The athletes at Olympia compete; the Athenians also struggle in wars. Strong people help their friends and benefit the city.’\n\nEpigenes asks, ‘Is the body useful even in peacetime?’ Socrates says, ‘Yes; the body is useful for all the tasks people do. The mind also learns well in a healthy body.’\n\n‘Do not neglect your body, Epigenes. You do not yet know the potential of your body.’ Epigenes looks at the young men. Xenophon and Clinias listen to Socrates.",
    "sourceCitation": "Xenophon, Memorabilia 3.12.1–8. https://www.greek-language.gr/greekLang/ancient_greek/tools/corpora/anthology/content.html?t=381",
    "notesMarkdown": "Socrates' advice to Epigenes is adapted from Memorabilia 3.12. The gymnasium, Xenophon and Clinias as witnesses, and the wording of the dialogue are fictional course framing."
  },
  "wordStudy": {
    "label": "Word Study — One Friend, Many Friends",
    "blocks": [
      {
        "title": "The dictionary form and the plural stem",
        "practiceTopic": "word-study",
        "body": [
          "A dictionary entry gives ὁ φίλος, φίλου: “friend,” followed by the genitive singular. The ending changes when the friend becomes several friends, but the stem φιλ- remains. Read οἱ φίλοι, τοὺς φίλους, τῶν φίλων, and τοῖς φίλοις as four jobs for the same noun.",
          "The reading also uses ὁ ἄνθρωπος, ἀνθρώπου. Its genitive plural, τῶν ἀνθρώπων, shifts the accent. Learn the noun and notice the change; the grammar below explains why the accent cannot stay on its original syllable.",
          "τὸ σῶμα has the genitive σώματος. It belongs to the third declension, whose full patterns come later. The blue glosses supply its forms in this reading; do not use it as a model for second-declension endings."
        ],
        "display": [
          {
            "greek": "ὁ φίλος → οἱ φίλοι",
            "english": "one friend → friends"
          },
          {
            "greek": "τοὺς φίλους",
            "english": "the friends as direct objects"
          },
          {
            "greek": "τῶν φίλων",
            "english": "of the friends"
          },
          {
            "greek": "τοῖς φίλοις",
            "english": "to or for the friends"
          }
        ]
      }
    ]
  },
  "culture": {
    "title": "The Greek Gymnasium: Training, Conversation, and the City",
    "banner": {
      "image": "assets/lesson-6-olympia-palaestra.jpg",
      "alt": "Standing columns and foundations beside the open court of the ancient palaestra at Olympia.",
      "caption": "The palaestra at Olympia, photographed today. This is a real Greek training site, not the particular gymnasium imagined in the reading.",
      "credit": "Photograph by Annatsach (2019), Wikimedia Commons, CC BY-SA 4.0. Unmodified.",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Palaestra_at_Olympia_-_4.jpg",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    "body": [
      "Xenophon and Clinias enter a gymnasium in our reconstructed story. A Greek gymnasium was more than a modern exercise room. Its open spaces and covered walks gave young men places to train, meet others, and hear conversation. The palaestra was especially associated with wrestling and other combat practice. Buildings varied from city to city and changed over time, so the Olympia ruins in the photograph should not be mistaken for the exact Athenian site or period of our story.",
      "Training could include running, throwing the discus or javelin, wrestling, boxing, and pankration. Pankration combined wrestling and striking. Athletes commonly trained without clothing and used olive oil; this was an accepted athletic custom, not the tone of an ordinary street scene. The Greek word γυμνός means “naked,” and gives English its word “gym.” The reading’s wrestlers and pankration fighters belong to that athletic setting.",
      "At Olympia the palaestra and the larger gymnasium were neighboring facilities where competitors prepared for the games. The surviving buildings date from periods after Socrates. A covered track, the xystos, let athletes continue training in poor weather. Athenian sites had their own histories; our illustration shows a related Greek institution rather than a photograph of Xenophon’s Athens.",
      "Athletic preparation mattered beyond winning prizes. At Athens, games and torch races were tied to civic festivals, and wealthier citizens could be charged with supporting the training and food of a torch-race team. In Memorabilia 3.12, Xenophon presents Socrates telling Epigenes that a sound body helps a person face danger, help friends, benefit the city, and even think and learn well. That argument is why the gymnasium suits this lesson’s conversation.",
      "The public athletic world pictured here centered on men, and participation depended on status and local custom. It would be misleading to describe every Greek person as having the same access. Greek women were not simply absent from all athletics: at Olympia, separate races for young unmarried women honored Hera. Their opportunities were different from those of the men whose training dominates our Athenian reading.",
      "Finally, the scene should be read with its source boundary in mind. Xenophon records Socrates’ advice to Epigenes, but he does not say this exchange happened in a gymnasium or that Xenophon and Clinias watched it. Those details let a beginner reader see the plural groups and case forms in action while the historical argument remains anchored in Xenophon’s text."
    ],
    "questions": [
      {
        "prompt": "What was a palaestra especially used for?",
        "answer": "Wrestling and related combat training. It was one part of the broader Greek athletic world."
      },
      {
        "prompt": "Why does the page show a photograph from Olympia?",
        "answer": "It is a surviving Greek palaestra that helps us picture a training place. It is not the imagined Athenian location of Socrates’ conversation."
      },
      {
        "prompt": "What does Socrates say bodily training can help a person do?",
        "answer": "In Xenophon’s account, it can help someone face danger, aid friends, serve the city, and protect the work of the mind."
      },
      {
        "prompt": "Did all Greeks have the same athletic opportunities?",
        "answer": "No. Public training in the scene centered on men, while opportunities varied by place, status, and gender. Separate races for young women were held at Olympia in honor of Hera."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Read the four plural forms of φίλος and explain the job of each case.",
        "Match a plural adjective to a masculine, feminine, or neuter noun.",
        "Explain why ἄνθρωπος becomes ἀνθρώπων in the genitive plural.",
        "Distinguish Socrates’ recorded advice to Epigenes from the invented gymnasium frame."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Memorabilia 3.12.1–8 (Greek text, Centre for the Greek Language)",
        "url": "https://www.greek-language.gr/greekLang/ancient_greek/tools/corpora/anthology/content.html?t=381"
      },
      {
        "title": "The Metropolitan Museum of Art, Athletics in Ancient Greece",
        "url": "https://www.metmuseum.org/essays/athletics-in-ancient-greece"
      },
      {
        "title": "Hellenic Ministry of Culture, Ancient Gymnasium of Olympia",
        "url": "https://odysseus.culture.gr/h/2/eh251.jsp?obj_id=592"
      },
      {
        "title": "Acropolis Museum, Gymnasiarch",
        "url": "https://www.theacropolismuseum.gr/en/node/1376"
      },
      {
        "title": "Annatsach, Palaestra at Olympia photograph (Wikimedia Commons)",
        "url": "https://commons.wikimedia.org/wiki/File:Palaestra_at_Olympia_-_4.jpg"
      }
    ]
  },
  "grammar": {
    "intro": "In Lesson 4 you learned what the four cases do in singular phrases. Now read and form those same jobs for groups of people and things. Keep the article, adjective, and noun together as a team.",
    "objectives": [
      "Identify nominative, accusative, genitive, and dative plural phrases in the reading.",
      "Form plural articles and first- and second-declension nouns in all four cases.",
      "Match a plural adjective to its noun in gender, number, and case.",
      "Place the accent correctly when plural endings change the length of the last syllable.",
      "Distinguish the regular plural patterns from glossed third-declension and verb forms."
    ],
    "sections": [
      {
        "id": "plural-articles",
        "title": "1. Articles Tell You the Case",
        "practiceTopic": "plural-articles",
        "body": [
          "The plural article announces the gender and case of a group. In οἱ φίλοι, οἱ marks a masculine plural subject. In τοὺς φίλους, τοὺς marks masculine plural direct objects. The same words can be “of” the friends with τῶν or “to/for” the friends with τοῖς.",
          "For the feminine, compare αἱ ἀγοραί, τὰς ἀγοράς, τῶν ἀγορῶν, and ταῖς ἀγοραῖς. For the neuter, nominative and accusative plural have the same form: τὰ ἔργα. Acute accents written on a word alone become grave before another accented word in a sentence: τούς → τοὺς φίλους."
        ],
        "table": {
          "title": "Plural article in a complete phrase",
          "headers": [
            "Case and job",
            "Masculine",
            "Feminine",
            "Neuter"
          ],
          "greekColumns": [
            1,
            2,
            3
          ],
          "rows": [
            [
              "Nominative · subject",
              "οἱ φίλοι",
              "αἱ ἀγοραί",
              "τὰ ἔργα"
            ],
            [
              "Accusative · direct object",
              "τοὺς φίλους",
              "τὰς ἀγοράς",
              "τὰ ἔργα"
            ],
            [
              "Genitive · of",
              "τῶν φίλων",
              "τῶν ἀγορῶν",
              "τῶν ἔργων"
            ],
            [
              "Dative · to, for, or in",
              "τοῖς φίλοις",
              "ταῖς ἀγοραῖς",
              "τοῖς ἔργοις"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why are τὰ ἔργα both nominative and accusative plural?",
            "answer": "Neuter nominative and accusative plural are identical. The sentence tells you whether the things act or receive an action."
          }
        ],
        "examples": [
          {
            "greek": "οἱ νέοι τοὺς φίλους βλέπουσιν.",
            "english": "The young men see the friends: subject, then direct object."
          }
        ]
      },
      {
        "id": "second-declension",
        "title": "2. Second-Declension Plurals",
        "practiceTopic": "second-declension",
        "body": [
          "Masculine second-declension nouns use -οι, -ους, -ων, -οις in nominative, accusative, genitive, and dative plural. Keep the article with the noun: οἱ φίλοι, τοὺς φίλους, τῶν φίλων, τοῖς φίλοις. The same endings work with ὁ ἄνθρωπος: οἱ ἄνθρωποι, τοὺς ἀνθρώπους, τῶν ἀνθρώπων, τοῖς ἀνθρώποις.",
          "Neuter second-declension nouns use -α for both nominative and accusative plural, -ων for genitive, and -οις for dative: τὰ ἔργα, τῶν ἔργων, τοῖς ἔργοις. The reading’s τὸ γυμνάσιον follows the same neuter pattern."
        ],
        "table": {
          "title": "Two second-declension models",
          "headers": [
            "Case",
            "ὁ φίλος",
            "τὸ ἔργον"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "Nominative plural",
              "οἱ φίλοι",
              "τὰ ἔργα"
            ],
            [
              "Accusative plural",
              "τοὺς φίλους",
              "τὰ ἔργα"
            ],
            [
              "Genitive plural",
              "τῶν φίλων",
              "τῶν ἔργων"
            ],
            [
              "Dative plural",
              "τοῖς φίλοις",
              "τοῖς ἔργοις"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What does -οις tell you in τοῖς φίλοις?",
            "answer": "It is the dative plural ending of this second-declension masculine noun. In the reading, someone speaks to the friends."
          }
        ],
        "examples": [
          {
            "greek": "ὁ Σωκράτης τὴν πάλην τῶν φίλων βλέπει.",
            "english": "Socrates watches the friends’ wrestling; τῶν φίλων is genitive plural."
          }
        ]
      },
      {
        "id": "first-and-neuter",
        "title": "3. Feminine First Declension and Neuter Plurals",
        "practiceTopic": "first-and-neuter",
        "body": [
          "A feminine first-declension noun such as ἡ ἀγορά has plural endings -αι, -ας, -ῶν, -αις. The genitive plural has a circumflex on the last syllable: τῶν ἀγορῶν. Compare the familiar ἡ οἰκία: αἱ οἰκίαι, τὰς οἰκίας, τῶν οἰκιῶν, ταῖς οἰκίαις.",
          "Do not let the shared article τῶν conceal the different noun stems. The neuter τὰ ἔργα belongs to the second declension; the feminine αἱ ἀγοραί belongs to the first. The forms τὰ σώματα and τὴν πόλιν in the reading are supplied third-declension forms."
        ],
        "table": {
          "title": "Feminine and neuter plural contrast",
          "headers": [
            "Case",
            "ἡ ἀγορά",
            "τὸ γυμνάσιον"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "Nominative",
              "αἱ ἀγοραί",
              "τὰ γυμνάσια"
            ],
            [
              "Accusative",
              "τὰς ἀγοράς",
              "τὰ γυμνάσια"
            ],
            [
              "Genitive",
              "τῶν ἀγορῶν",
              "τῶν γυμνασίων"
            ],
            [
              "Dative",
              "ταῖς ἀγοραῖς",
              "τοῖς γυμνασίοις"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Which ending marks the genitive plural of ἀγορά?",
            "answer": "The ending is -ῶν: ἀγορῶν, with a circumflex on the final syllable."
          }
        ],
        "examples": [
          {
            "greek": "ἐν ταῖς ἀγοραῖς οἱ ἄνθρωποι λέγουσιν.",
            "english": "People speak in the marketplaces; ταῖς ἀγοραῖς is dative plural after ἐν."
          }
        ]
      },
      {
        "id": "adjective-agreement",
        "title": "4. Adjectives Agree with the Group",
        "practiceTopic": "adjective-agreement",
        "body": [
          "An adjective agrees with its noun in gender, number, and case. In οἱ ἰσχυροὶ ἄνθρωποι, all three words are masculine nominative plural. When the group becomes the direct object, write τοὺς ἰσχυροὺς ἀνθρώπους. The adjective changes with the noun, even if a different word stands between them.",
          "Use καλός as a model. Masculine καλός gives καλοί, καλούς, καλῶν, καλοῖς; feminine καλή gives καλαί, καλάς, καλῶν, καλαῖς; neuter καλόν gives καλά, καλά, καλῶν, καλοῖς. Notice that the genitive plural is καλῶν for all three genders."
        ],
        "table": {
          "title": "Plural forms of καλός, καλή, καλόν",
          "headers": [
            "Case",
            "Masculine",
            "Feminine",
            "Neuter"
          ],
          "greekColumns": [
            1,
            2,
            3
          ],
          "rows": [
            [
              "Nominative",
              "καλοί",
              "καλαί",
              "καλά"
            ],
            [
              "Accusative",
              "καλούς",
              "καλάς",
              "καλά"
            ],
            [
              "Genitive",
              "καλῶν",
              "καλῶν",
              "καλῶν"
            ],
            [
              "Dative",
              "καλοῖς",
              "καλαῖς",
              "καλοῖς"
            ]
          ],
          "note": "These are dictionary/table forms. In a running sentence, an acute may become a grave: καλοί → καλοὶ φίλοι."
        },
        "checks": [
          {
            "prompt": "Which adjective agrees with ταῖς ἀγοραῖς: καλοῖς or καλαῖς?",
            "answer": "καλαῖς. Both adjective and noun must be feminine dative plural."
          }
        ],
        "examples": [
          {
            "greek": "οἱ ἰσχυροὶ ἄνθρωποι τοῖς φίλοις βοηθοῦσιν.",
            "english": "The strong people help their friends."
          }
        ]
      },
      {
        "id": "shifting-accents",
        "title": "5. Why the Accent Shifts",
        "practiceTopic": "shifting-accents",
        "body": [
          "A Greek acute can stand on the antepenult only when the last syllable is short. In ἄνθρωπος and ἄνθρωποι it stays far back; the final -ων of the genitive plural is long, so it moves to ἀνθρώπων. The dative plural -οις is also long: ἀνθρώποις.",
          "First-declension genitive plural regularly pulls the accent to its ending: ἀγορά → ἀγορῶν and οἰκία → οἰκιῶν. Compare φίλος → φίλοι but φίλων and φίλοις. Read the accent with the ending; do not try to copy the singular accent blindly.",
          "Words such as χρήσιμόν ἐστι in the reading show a different rule: an extra accent can appear before the enclitic ἐστι. Recognize that spelling here; the plural paradigms are this lesson’s production target."
        ],
        "table": {
          "title": "Accent movement in familiar words",
          "headers": [
            "Singular",
            "Nominative plural",
            "Genitive plural",
            "Dative plural"
          ],
          "greekColumns": [
            0,
            1,
            2,
            3
          ],
          "rows": [
            [
              "ἄνθρωπος",
              "ἄνθρωποι",
              "ἀνθρώπων",
              "ἀνθρώποις"
            ],
            [
              "φίλος",
              "φίλοι",
              "φίλων",
              "φίλοις"
            ],
            [
              "ἀγορά",
              "ἀγοραί",
              "ἀγορῶν",
              "ἀγοραῖς"
            ],
            [
              "οἰκία",
              "οἰκίαι",
              "οἰκιῶν",
              "οἰκίαις"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why is the genitive plural ἀνθρώπων rather than ἄνθρωπων?",
            "answer": "The -ων ending is long. An accent cannot remain on the antepenult before a long final syllable, so it moves to the penult."
          }
        ],
        "examples": [
          {
            "greek": "τὸ σῶμα πρὸς πάντα τὰ ἔργα τῶν ἀνθρώπων χρήσιμόν ἐστιν.",
            "english": "The body is useful for all the tasks people do; τῶν ἀνθρώπων shows the shifted accent."
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "Articles: οἱ / τοὺς / τῶν / τοῖς with masculine plural; αἱ / τὰς / τῶν / ταῖς with feminine plural; τὰ / τὰ / τῶν / τοῖς with neuter plural.",
        "Second-declension masculine: -οι, -ους, -ων, -οις. Second-declension neuter: -α, -α, -ων, -οις.",
        "First-declension feminine: -αι, -ας, -ῶν, -αις.",
        "Adjectives match their nouns in gender, number, and case.",
        "Long plural endings can move the accent: ἄνθρωπος → ἀνθρώπων; first-declension genitive plural ends in -ῶν."
      ]
    }
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 6 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "τὸ γυμνάσιον",
          "answer": "gymnasium, place for exercise"
        },
        {
          "prompt": "ἡ πάλη",
          "answer": "wrestling"
        },
        {
          "prompt": "τὸ παγκράτιον",
          "answer": "pankration, a wrestling and striking contest"
        },
        {
          "prompt": "ὁ ἄνθρωπος",
          "answer": "person, human being"
        },
        {
          "prompt": "τὸ σῶμα",
          "answer": "body; its case forms are supplied in glosses"
        },
        {
          "prompt": "ὁ ἀθλητής",
          "answer": "athlete, competitor"
        },
        {
          "prompt": "ὁ ἰδιώτης",
          "answer": "ordinary private person, non-specialist"
        },
        {
          "prompt": "γυμνάζω",
          "answer": "train, exercise"
        },
        {
          "prompt": "παλαίω",
          "answer": "wrestle"
        },
        {
          "prompt": "ἀσκέω",
          "answer": "practice; contracted forms are supplied in glosses"
        },
        {
          "prompt": "ἄλλος, ἄλλη, ἄλλο",
          "answer": "other, another"
        },
        {
          "prompt": "χρήσιμος, χρησίμη, χρήσιμον",
          "answer": "useful"
        },
        {
          "prompt": "πολλάκις",
          "answer": "often"
        },
        {
          "prompt": "ἄριστος, ἀρίστη, ἄριστον",
          "answer": "best, very good; here, closest (of friends)"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 6 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice the 14 lesson vocabulary items in short rounds.",
      "questions": [
        {
          "id": "lesson-6-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ γυμνάσιον mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": true,
              "feedback": "Correct: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "person, human being",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “gymnasium, place for exercise”?",
          "choices": [
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "τὸ γυμνάσιον",
              "correct": true,
              "feedback": "Correct: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            },
            {
              "text": "ὁ ἄνθρωπος",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον means gymnasium, place for exercise."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ πάλη mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            },
            {
              "text": "wrestling",
              "correct": true,
              "feedback": "Correct: ἡ πάλη means wrestling."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            },
            {
              "text": "person, human being",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “wrestling”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            },
            {
              "text": "ἡ πάλη",
              "correct": true,
              "feedback": "Correct: ἡ πάλη means wrestling."
            },
            {
              "text": "ὁ ἄνθρωπος",
              "correct": false,
              "feedback": "Review: ἡ πάλη means wrestling."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ παγκράτιον mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": true,
              "feedback": "Correct: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "person, human being",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “pankration, a wrestling and striking contest”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "ὁ ἄνθρωπος",
              "correct": false,
              "feedback": "Review: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": true,
              "feedback": "Correct: τὸ παγκράτιον means pankration, a wrestling and striking contest."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἄνθρωπος mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "person, human being",
              "correct": true,
              "feedback": "Correct: ὁ ἄνθρωπος means person, human being."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “person, human being”?",
          "choices": [
            {
              "text": "ὁ ἄνθρωπος",
              "correct": true,
              "feedback": "Correct: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος means person, human being."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ σῶμα mean?",
          "choices": [
            {
              "text": "body; its case forms are supplied in glosses",
              "correct": true,
              "feedback": "Correct: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “body; its case forms are supplied in glosses”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "τὸ σῶμα",
              "correct": true,
              "feedback": "Correct: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: τὸ σῶμα means body; its case forms are supplied in glosses."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἀθλητής mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "athlete, competitor",
              "correct": true,
              "feedback": "Correct: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “athlete, competitor”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "ὁ ἀθλητής",
              "correct": true,
              "feedback": "Correct: ὁ ἀθλητής means athlete, competitor."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ὁ ἀθλητής means athlete, competitor."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἰδιώτης mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "ordinary private person, non-specialist",
              "correct": true,
              "feedback": "Correct: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “ordinary private person, non-specialist”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ὁ ἰδιώτης means ordinary private person, non-specialist."
            },
            {
              "text": "ὁ ἰδιώτης",
              "correct": true,
              "feedback": "Correct: ὁ ἰδιώτης means ordinary private person, non-specialist."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does γυμνάζω mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            },
            {
              "text": "train, exercise",
              "correct": true,
              "feedback": "Correct: γυμνάζω means train, exercise."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “train, exercise”?",
          "choices": [
            {
              "text": "γυμνάζω",
              "correct": true,
              "feedback": "Correct: γυμνάζω means train, exercise."
            },
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: γυμνάζω means train, exercise."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does παλαίω mean?",
          "choices": [
            {
              "text": "wrestle",
              "correct": true,
              "feedback": "Correct: παλαίω means wrestle."
            },
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “wrestle”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            },
            {
              "text": "παλαίω",
              "correct": true,
              "feedback": "Correct: παλαίω means wrestle."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: παλαίω means wrestle."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἀσκέω mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "practice; contracted forms are supplied in glosses",
              "correct": true,
              "feedback": "Correct: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “practice; contracted forms are supplied in glosses”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "ἀσκέω",
              "correct": true,
              "feedback": "Correct: ἀσκέω means practice; contracted forms are supplied in glosses."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ἀσκέω means practice; contracted forms are supplied in glosses."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἄλλος, ἄλλη, ἄλλο mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "other, another",
              "correct": true,
              "feedback": "Correct: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “other, another”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ἄλλος, ἄλλη, ἄλλο means other, another."
            },
            {
              "text": "ἄλλος, ἄλλη, ἄλλο",
              "correct": true,
              "feedback": "Correct: ἄλλος, ἄλλη, ἄλλο means other, another."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does χρήσιμος, χρησίμη, χρήσιμον mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "useful",
              "correct": true,
              "feedback": "Correct: χρήσιμος, χρησίμη, χρήσιμον means useful."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “useful”?",
          "choices": [
            {
              "text": "χρήσιμος, χρησίμη, χρήσιμον",
              "correct": true,
              "feedback": "Correct: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: χρήσιμος, χρησίμη, χρήσιμον means useful."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does πολλάκις mean?",
          "choices": [
            {
              "text": "often",
              "correct": true,
              "feedback": "Correct: πολλάκις means often."
            },
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “often”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "πολλάκις",
              "correct": true,
              "feedback": "Correct: πολλάκις means often."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἄριστος, ἀρίστη, ἄριστον mean?",
          "choices": [
            {
              "text": "gymnasium, place for exercise",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "best, very good; here, closest (of friends)",
              "correct": true,
              "feedback": "Correct: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "wrestling",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "pankration, a wrestling and striking contest",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            }
          ]
        },
        {
          "id": "lesson-6-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek vocabulary entry means “best, very good; here, closest (of friends)”?",
          "choices": [
            {
              "text": "τὸ γυμνάσιον",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "ἡ πάλη",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "ἄριστος, ἀρίστη, ἄριστον",
              "correct": true,
              "feedback": "Correct: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            },
            {
              "text": "τὸ παγκράτιον",
              "correct": false,
              "feedback": "Review: ἄριστος, ἀρίστη, ἄριστον means best, very good; here, closest (of friends)."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 6 Grammar Flashcards",
      "cards": [
        {
          "prompt": "οἱ φίλοι",
          "answer": "the friends: nominative plural"
        },
        {
          "prompt": "τοὺς φίλους",
          "answer": "the friends: accusative plural"
        },
        {
          "prompt": "τῶν φίλων",
          "answer": "of the friends: genitive plural"
        },
        {
          "prompt": "τοῖς φίλοις",
          "answer": "to the friends: dative plural"
        },
        {
          "prompt": "αἱ ἀγοραί",
          "answer": "the marketplaces: nominative plural"
        },
        {
          "prompt": "τὰς ἀγοράς",
          "answer": "the marketplaces: accusative plural"
        },
        {
          "prompt": "τῶν ἀγορῶν",
          "answer": "of the marketplaces: genitive plural"
        },
        {
          "prompt": "ταῖς ἀγοραῖς",
          "answer": "in the marketplaces: dative plural"
        },
        {
          "prompt": "τὰ ἔργα",
          "answer": "the tasks: nominative or accusative plural"
        },
        {
          "prompt": "τῶν ἔργων",
          "answer": "of the tasks: genitive plural"
        },
        {
          "prompt": "καλοὶ φίλοι",
          "answer": "good friends: masculine nominative plural"
        },
        {
          "prompt": "καλαὶ ἀγοραί",
          "answer": "fine marketplaces: feminine nominative plural"
        },
        {
          "prompt": "καλὰ ἔργα",
          "answer": "good tasks: neuter nominative or accusative plural"
        },
        {
          "prompt": "ἀνθρώπων",
          "answer": "of people: accent shifts before long -ων"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 6 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic and work through two short rounds. These questions give feedback without gating the page.",
      "questions": [
        {
          "id": "lesson-6-practice-word-study-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which genitive singular belongs to ὁ φίλος?",
          "choices": [
            {
              "text": "φίλου",
              "correct": true,
              "feedback": "Correct: ὁ φίλος has the dictionary genitive φίλου."
            },
            {
              "text": "ἀνθρώπου",
              "correct": false,
              "feedback": "Review: ὁ φίλος has the dictionary genitive φίλου."
            },
            {
              "text": "ἔργου",
              "correct": false,
              "feedback": "Review: ὁ φίλος has the dictionary genitive φίλου."
            },
            {
              "text": "γυμνασίου",
              "correct": false,
              "feedback": "Review: ὁ φίλος has the dictionary genitive φίλου."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which nominative plural belongs to ὁ φίλος?",
          "choices": [
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is nominative plural."
            },
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι is nominative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is nominative plural."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What case is τῶν φίλων?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: τῶν φίλων means “of the group.”"
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: τῶν φίλων means “of the group.”"
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: τῶν φίλων means “of the group.”"
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: τῶν φίλων means “of the group.”"
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which stem remains when the endings of ὁ φίλος change?",
          "choices": [
            {
              "text": "ἀνθρωπ-",
              "correct": false,
              "feedback": "Review: φιλ- remains across the forms of ὁ φίλος."
            },
            {
              "text": "ἐργ-",
              "correct": false,
              "feedback": "Review: φιλ- remains across the forms of ὁ φίλος."
            },
            {
              "text": "γυμνασι-",
              "correct": false,
              "feedback": "Review: φιλ- remains across the forms of ὁ φίλος."
            },
            {
              "text": "φιλ-",
              "correct": true,
              "feedback": "Correct: φιλ- remains across the forms of ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which genitive singular belongs to ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "ἀνθρώπου",
              "correct": true,
              "feedback": "Correct: ὁ ἄνθρωπος has the dictionary genitive ἀνθρώπου."
            },
            {
              "text": "φίλου",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος has the dictionary genitive ἀνθρώπου."
            },
            {
              "text": "ἔργου",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος has the dictionary genitive ἀνθρώπου."
            },
            {
              "text": "γυμνασίου",
              "correct": false,
              "feedback": "Review: ὁ ἄνθρωπος has the dictionary genitive ἀνθρώπου."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which nominative plural belongs to ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is nominative plural."
            },
            {
              "text": "οἱ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: οἱ ἄνθρωποι is nominative plural."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is nominative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What case is τῶν ἀνθρώπων?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων means “of the group.”"
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων means “of the group.”"
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: τῶν ἀνθρώπων means “of the group.”"
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων means “of the group.”"
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which stem remains when the endings of ὁ ἄνθρωπος change?",
          "choices": [
            {
              "text": "φιλ-",
              "correct": false,
              "feedback": "Review: ἀνθρωπ- remains across the forms of ὁ ἄνθρωπος."
            },
            {
              "text": "ἐργ-",
              "correct": false,
              "feedback": "Review: ἀνθρωπ- remains across the forms of ὁ ἄνθρωπος."
            },
            {
              "text": "γυμνασι-",
              "correct": false,
              "feedback": "Review: ἀνθρωπ- remains across the forms of ὁ ἄνθρωπος."
            },
            {
              "text": "ἀνθρωπ-",
              "correct": true,
              "feedback": "Correct: ἀνθρωπ- remains across the forms of ὁ ἄνθρωπος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which genitive singular belongs to τὸ ἔργον?",
          "choices": [
            {
              "text": "ἔργου",
              "correct": true,
              "feedback": "Correct: τὸ ἔργον has the dictionary genitive ἔργου."
            },
            {
              "text": "φίλου",
              "correct": false,
              "feedback": "Review: τὸ ἔργον has the dictionary genitive ἔργου."
            },
            {
              "text": "ἀνθρώπου",
              "correct": false,
              "feedback": "Review: τὸ ἔργον has the dictionary genitive ἔργου."
            },
            {
              "text": "γυμνασίου",
              "correct": false,
              "feedback": "Review: τὸ ἔργον has the dictionary genitive ἔργου."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which nominative plural belongs to τὸ ἔργον?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is nominative plural."
            },
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα is nominative plural."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is nominative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What case is τῶν ἔργων?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἔργων means “of the group.”"
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἔργων means “of the group.”"
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων means “of the group.”"
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἔργων means “of the group.”"
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which stem remains when the endings of τὸ ἔργον change?",
          "choices": [
            {
              "text": "φιλ-",
              "correct": false,
              "feedback": "Review: ἐργ- remains across the forms of τὸ ἔργον."
            },
            {
              "text": "ἀνθρωπ-",
              "correct": false,
              "feedback": "Review: ἐργ- remains across the forms of τὸ ἔργον."
            },
            {
              "text": "γυμνασι-",
              "correct": false,
              "feedback": "Review: ἐργ- remains across the forms of τὸ ἔργον."
            },
            {
              "text": "ἐργ-",
              "correct": true,
              "feedback": "Correct: ἐργ- remains across the forms of τὸ ἔργον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-013",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which genitive singular belongs to τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "γυμνασίου",
              "correct": true,
              "feedback": "Correct: τὸ γυμνάσιον has the dictionary genitive γυμνασίου."
            },
            {
              "text": "φίλου",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον has the dictionary genitive γυμνασίου."
            },
            {
              "text": "ἀνθρώπου",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον has the dictionary genitive γυμνασίου."
            },
            {
              "text": "ἔργου",
              "correct": false,
              "feedback": "Review: τὸ γυμνάσιον has the dictionary genitive γυμνασίου."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-014",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which nominative plural belongs to τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is nominative plural."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια is nominative plural."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is nominative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-015",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What case is τῶν γυμνασίων?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων means “of the group.”"
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων means “of the group.”"
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: τῶν γυμνασίων means “of the group.”"
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων means “of the group.”"
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-016",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which stem remains when the endings of τὸ γυμνάσιον change?",
          "choices": [
            {
              "text": "φιλ-",
              "correct": false,
              "feedback": "Review: γυμνασι- remains across the forms of τὸ γυμνάσιον."
            },
            {
              "text": "ἀνθρωπ-",
              "correct": false,
              "feedback": "Review: γυμνασι- remains across the forms of τὸ γυμνάσιον."
            },
            {
              "text": "ἐργ-",
              "correct": false,
              "feedback": "Review: γυμνασι- remains across the forms of τὸ γυμνάσιον."
            },
            {
              "text": "γυμνασι-",
              "correct": true,
              "feedback": "Correct: γυμνασι- remains across the forms of τὸ γυμνάσιον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-017",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which genitive singular belongs to ἡ ἀγορά?",
          "choices": [
            {
              "text": "ἀγορᾶς",
              "correct": true,
              "feedback": "Correct: ἡ ἀγορά has the dictionary genitive ἀγορᾶς."
            },
            {
              "text": "φίλου",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά has the dictionary genitive ἀγορᾶς."
            },
            {
              "text": "ἀνθρώπου",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά has the dictionary genitive ἀγορᾶς."
            },
            {
              "text": "ἔργου",
              "correct": false,
              "feedback": "Review: ἡ ἀγορά has the dictionary genitive ἀγορᾶς."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-018",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which nominative plural belongs to ἡ ἀγορά?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί is nominative plural."
            },
            {
              "text": "αἱ ἀγοραί",
              "correct": true,
              "feedback": "Correct: αἱ ἀγοραί is nominative plural."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί is nominative plural."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί is nominative plural."
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-019",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "What case is τῶν ἀγορῶν?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν means “of the group.”"
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν means “of the group.”"
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: τῶν ἀγορῶν means “of the group.”"
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν means “of the group.”"
            }
          ]
        },
        {
          "id": "lesson-6-practice-word-study-020",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Which stem remains when the endings of ἡ ἀγορά change?",
          "choices": [
            {
              "text": "φιλ-",
              "correct": false,
              "feedback": "Review: ἀγορ- remains across the forms of ἡ ἀγορά."
            },
            {
              "text": "ἀνθρωπ-",
              "correct": false,
              "feedback": "Review: ἀγορ- remains across the forms of ἡ ἀγορά."
            },
            {
              "text": "ἐργ-",
              "correct": false,
              "feedback": "Review: ἀγορ- remains across the forms of ἡ ἀγορά."
            },
            {
              "text": "ἀγορ-",
              "correct": true,
              "feedback": "Correct: ἀγορ- remains across the forms of ἡ ἀγορά."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-021",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the masculine nominative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ marks masculine nominative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ marks masculine nominative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: οἱ marks masculine nominative plural here."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: οἱ marks masculine nominative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-022",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the masculine accusative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοὺς marks masculine accusative plural here."
            },
            {
              "text": "τοὺς",
              "correct": true,
              "feedback": "Correct: τοὺς marks masculine accusative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοὺς marks masculine accusative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοὺς marks masculine accusative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-023",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the masculine genitive plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν marks masculine genitive plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν marks masculine genitive plural here."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν marks masculine genitive plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν marks masculine genitive plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-024",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the masculine dative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοῖς marks masculine dative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοῖς marks masculine dative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοῖς marks masculine dative plural here."
            },
            {
              "text": "τοῖς",
              "correct": true,
              "feedback": "Correct: τοῖς marks masculine dative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-025",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the feminine nominative plural article before a noun.",
          "choices": [
            {
              "text": "αἱ",
              "correct": true,
              "feedback": "Correct: αἱ marks feminine nominative plural here."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural here."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: αἱ marks feminine nominative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-026",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the feminine accusative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰς marks feminine accusative plural here."
            },
            {
              "text": "τὰς",
              "correct": true,
              "feedback": "Correct: τὰς marks feminine accusative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰς marks feminine accusative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τὰς marks feminine accusative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-027",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the feminine genitive plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν marks feminine genitive plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν marks feminine genitive plural here."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν marks feminine genitive plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν marks feminine genitive plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-028",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the feminine dative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ταῖς marks feminine dative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ταῖς marks feminine dative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: ταῖς marks feminine dative plural here."
            },
            {
              "text": "ταῖς",
              "correct": true,
              "feedback": "Correct: ταῖς marks feminine dative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-029",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the neuter nominative plural article before a noun.",
          "choices": [
            {
              "text": "τὰ",
              "correct": true,
              "feedback": "Correct: τὰ marks neuter nominative plural here."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰ marks neuter nominative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰ marks neuter nominative plural here."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: τὰ marks neuter nominative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-030",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the neuter accusative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰ marks neuter accusative plural here."
            },
            {
              "text": "τὰ",
              "correct": true,
              "feedback": "Correct: τὰ marks neuter accusative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰ marks neuter accusative plural here."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: τὰ marks neuter accusative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-031",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the neuter genitive plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν marks neuter genitive plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν marks neuter genitive plural here."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν marks neuter genitive plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν marks neuter genitive plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-032",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Choose the neuter dative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοῖς marks neuter dative plural here."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοῖς marks neuter dative plural here."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοῖς marks neuter dative plural here."
            },
            {
              "text": "τοῖς",
              "correct": true,
              "feedback": "Correct: τοῖς marks neuter dative plural here."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-033",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ φίλοι.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: οἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: οἱ matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-034",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ φίλους.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοὺς matches the noun’s gender, number, and case."
            },
            {
              "text": "τοὺς",
              "correct": true,
              "feedback": "Correct: τοὺς matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοὺς matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοὺς matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-035",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ φίλων.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν matches the noun’s gender, number, and case."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-036",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ φίλοις.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "τοῖς",
              "correct": true,
              "feedback": "Correct: τοῖς matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-037",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ ἀγοραί.",
          "choices": [
            {
              "text": "αἱ",
              "correct": true,
              "feedback": "Correct: αἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: αἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: αἱ matches the noun’s gender, number, and case."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: αἱ matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-038",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ ἀγοράς.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰς matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰς",
              "correct": true,
              "feedback": "Correct: τὰς matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰς matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τὰς matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-039",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ ἀγοραῖς.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ταῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ταῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "ταῖς",
              "correct": true,
              "feedback": "Correct: ταῖς matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: ταῖς matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-plural-articles-040",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Complete the phrase ___ ἔργα.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰ matches the noun’s gender, number, and case."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰ matches the noun’s gender, number, and case."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: τὰ matches the noun’s gender, number, and case."
            },
            {
              "text": "τὰ",
              "correct": true,
              "feedback": "Correct: τὰ matches the noun’s gender, number, and case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-041",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the nominative plural (subject) of ὁ φίλος.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι is the nominative plural of ὁ φίλος."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the nominative plural of ὁ φίλος."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the nominative plural of ὁ φίλος."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the nominative plural of ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-042",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the accusative plural (direct object) of ὁ φίλος.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the accusative plural of ὁ φίλος."
            },
            {
              "text": "τοὺς φίλους",
              "correct": true,
              "feedback": "Correct: τοὺς φίλους is the accusative plural of ὁ φίλος."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the accusative plural of ὁ φίλος."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the accusative plural of ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-043",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the genitive plural (of) of ὁ φίλος.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν φίλων is the genitive plural of ὁ φίλος."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τῶν φίλων is the genitive plural of ὁ φίλος."
            },
            {
              "text": "τῶν φίλων",
              "correct": true,
              "feedback": "Correct: τῶν φίλων is the genitive plural of ὁ φίλος."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τῶν φίλων is the genitive plural of ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-044",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the dative plural (to or for) of ὁ φίλος.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις is the dative plural of ὁ φίλος."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις is the dative plural of ὁ φίλος."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις is the dative plural of ὁ φίλος."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": true,
              "feedback": "Correct: τοῖς φίλοις is the dative plural of ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-045",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the nominative plural (subject) of ὁ ἄνθρωπος.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: οἱ ἄνθρωποι is the nominative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the nominative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the nominative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the nominative plural of ὁ ἄνθρωπος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-046",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the accusative plural (direct object) of ὁ ἄνθρωπος.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the accusative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": true,
              "feedback": "Correct: τοὺς ἀνθρώπους is the accusative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the accusative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the accusative plural of ὁ ἄνθρωπος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-047",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the genitive plural (of) of ὁ ἄνθρωπος.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the genitive plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the genitive plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": true,
              "feedback": "Correct: τῶν ἀνθρώπων is the genitive plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the genitive plural of ὁ ἄνθρωπος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-048",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the dative plural (to or for) of ὁ ἄνθρωπος.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις is the dative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις is the dative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις is the dative plural of ὁ ἄνθρωπος."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": true,
              "feedback": "Correct: τοῖς ἀνθρώποις is the dative plural of ὁ ἄνθρωπος."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-049",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the nominative plural (subject) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα is the nominative plural of τὸ ἔργον."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the nominative plural of τὸ ἔργον."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the nominative plural of τὸ ἔργον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the nominative plural of τὸ ἔργον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-050",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the accusative plural (direct object) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the accusative plural of τὸ ἔργον."
            },
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα is the accusative plural of τὸ ἔργον."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the accusative plural of τὸ ἔργον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the accusative plural of τὸ ἔργον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-051",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the genitive plural (of) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the genitive plural of τὸ ἔργον."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the genitive plural of τὸ ἔργον."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων is the genitive plural of τὸ ἔργον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the genitive plural of τὸ ἔργον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-052",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the dative plural (to or for) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the dative plural of τὸ ἔργον."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the dative plural of τὸ ἔργον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the dative plural of τὸ ἔργον."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": true,
              "feedback": "Correct: τοῖς ἔργοις is the dative plural of τὸ ἔργον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-053",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the nominative plural (subject) of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια is the nominative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the nominative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the nominative plural of τὸ γυμνάσιον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the nominative plural of τὸ γυμνάσιον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-054",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the accusative plural (direct object) of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the accusative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια is the accusative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the accusative plural of τὸ γυμνάσιον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the accusative plural of τὸ γυμνάσιον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-055",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the genitive plural (of) of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων is the genitive plural of τὸ γυμνάσιον."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων is the genitive plural of τὸ γυμνάσιον."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": true,
              "feedback": "Correct: τῶν γυμνασίων is the genitive plural of τὸ γυμνάσιον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων is the genitive plural of τὸ γυμνάσιον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-056",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Choose the dative plural (to or for) of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the dative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the dative plural of τὸ γυμνάσιον."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the dative plural of τὸ γυμνάσιον."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": true,
              "feedback": "Correct: τοῖς γυμνασίοις is the dative plural of τὸ γυμνάσιον."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-057",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Which phrase fits “The friends help,” with friends as subject.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι gives the needed plural case."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι gives the needed plural case."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι gives the needed plural case."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι gives the needed plural case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-058",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Which phrase fits “Socrates sees the friends,” with friends as object.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοὺς φίλους gives the needed plural case."
            },
            {
              "text": "τοὺς φίλους",
              "correct": true,
              "feedback": "Correct: τοὺς φίλους gives the needed plural case."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοὺς φίλους gives the needed plural case."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τοὺς φίλους gives the needed plural case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-059",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Which phrase fits “The tasks of the people,” with people after “of.”",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων gives the needed plural case."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων gives the needed plural case."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": true,
              "feedback": "Correct: τῶν ἀνθρώπων gives the needed plural case."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων gives the needed plural case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-second-declension-060",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Which phrase fits “To the people,” with people as recipient.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις gives the needed plural case."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις gives the needed plural case."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις gives the needed plural case."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": true,
              "feedback": "Correct: τοῖς ἀνθρώποις gives the needed plural case."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-061",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the nominative plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-062",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the accusative plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-063",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the genitive plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων follows the neuter second pattern."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων follows the neuter second pattern."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-064",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the dative plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις follows the neuter second pattern."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις follows the neuter second pattern."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": true,
              "feedback": "Correct: τοῖς ἔργοις follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-065",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the nominative plural of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-066",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the accusative plural of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-067",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the genitive plural of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων follows the neuter second pattern."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων follows the neuter second pattern."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": true,
              "feedback": "Correct: τῶν γυμνασίων follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-068",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the dative plural of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις follows the neuter second pattern."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις follows the neuter second pattern."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις follows the neuter second pattern."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": true,
              "feedback": "Correct: τοῖς γυμνασίοις follows the neuter second pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-069",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the nominative plural of ἡ ἀγορά.",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": true,
              "feedback": "Correct: αἱ ἀγοραί follows the feminine first pattern."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί follows the feminine first pattern."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί follows the feminine first pattern."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-070",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the accusative plural of ἡ ἀγορά.",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς follows the feminine first pattern."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": true,
              "feedback": "Correct: τὰς ἀγοράς follows the feminine first pattern."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς follows the feminine first pattern."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-071",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the genitive plural of ἡ ἀγορά.",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν follows the feminine first pattern."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν follows the feminine first pattern."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": true,
              "feedback": "Correct: τῶν ἀγορῶν follows the feminine first pattern."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-072",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the dative plural of ἡ ἀγορά.",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς follows the feminine first pattern."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς follows the feminine first pattern."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς follows the feminine first pattern."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": true,
              "feedback": "Correct: ταῖς ἀγοραῖς follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-073",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the nominative plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": true,
              "feedback": "Correct: αἱ οἰκίαι follows the feminine first pattern."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": false,
              "feedback": "Review: αἱ οἰκίαι follows the feminine first pattern."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": false,
              "feedback": "Review: αἱ οἰκίαι follows the feminine first pattern."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": false,
              "feedback": "Review: αἱ οἰκίαι follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-074",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the accusative plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": false,
              "feedback": "Review: τὰς οἰκίας follows the feminine first pattern."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": true,
              "feedback": "Correct: τὰς οἰκίας follows the feminine first pattern."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": false,
              "feedback": "Review: τὰς οἰκίας follows the feminine first pattern."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": false,
              "feedback": "Review: τὰς οἰκίας follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-075",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the genitive plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν follows the feminine first pattern."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν follows the feminine first pattern."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": true,
              "feedback": "Correct: τῶν οἰκιῶν follows the feminine first pattern."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-076",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Write the dative plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις follows the feminine first pattern."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις follows the feminine first pattern."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις follows the feminine first pattern."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": true,
              "feedback": "Correct: ταῖς οἰκίαις follows the feminine first pattern."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-077",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Which plural can be both subject and direct object: τὰ ἔργα or τῶν ἔργων?",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα gives the requested plural form."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα gives the requested plural form."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τὰ ἔργα gives the requested plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα gives the requested plural form."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-078",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Which phrase means “in the marketplaces” after ἐν?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς gives the requested plural form."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": true,
              "feedback": "Correct: ταῖς ἀγοραῖς gives the requested plural form."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς gives the requested plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς gives the requested plural form."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-079",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Which phrase means “of the houses”?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν gives the requested plural form."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν gives the requested plural form."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": true,
              "feedback": "Correct: τῶν οἰκιῶν gives the requested plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν gives the requested plural form."
            }
          ]
        },
        {
          "id": "lesson-6-practice-first-and-neuter-080",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Which phrase means “of the gymnasia”?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων gives the requested plural form."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων gives the requested plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων gives the requested plural form."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": true,
              "feedback": "Correct: τῶν γυμνασίων gives the requested plural form."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-081",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For φίλος, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": true,
              "feedback": "Correct: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-082",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For φίλος, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλούς",
              "correct": true,
              "feedback": "Correct: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-083",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For φίλος, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-084",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For φίλος, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": true,
              "feedback": "Correct: καλοῖς agrees with a masculine dative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-085",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἄνθρωπος, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": true,
              "feedback": "Correct: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλοί agrees with a masculine nominative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-086",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἄνθρωπος, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλούς",
              "correct": true,
              "feedback": "Correct: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλούς agrees with a masculine accusative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-087",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἄνθρωπος, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν agrees with a masculine genitive plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a masculine genitive plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-088",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἄνθρωπος, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a masculine dative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": true,
              "feedback": "Correct: καλοῖς agrees with a masculine dative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-089",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἀγορά, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-090",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἀγορά, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλάς",
              "correct": true,
              "feedback": "Correct: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-091",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἀγορά, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-092",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἀγορά, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλαῖς",
              "correct": true,
              "feedback": "Correct: καλαῖς agrees with a feminine dative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-093",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For οἰκία, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαί agrees with a feminine nominative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-094",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For οἰκία, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλάς",
              "correct": true,
              "feedback": "Correct: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλάς agrees with a feminine accusative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-095",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For οἰκία, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν agrees with a feminine genitive plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a feminine genitive plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-096",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For οἰκία, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαῖς agrees with a feminine dative plural noun."
            },
            {
              "text": "καλαῖς",
              "correct": true,
              "feedback": "Correct: καλαῖς agrees with a feminine dative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-097",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἔργον, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλά",
              "correct": true,
              "feedback": "Correct: καλά agrees with a neuter nominative plural noun."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter nominative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter nominative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter nominative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-098",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἔργον, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter accusative plural noun."
            },
            {
              "text": "καλά",
              "correct": true,
              "feedback": "Correct: καλά agrees with a neuter accusative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter accusative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλά agrees with a neuter accusative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-099",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἔργον, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a neuter genitive plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a neuter genitive plural noun."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν agrees with a neuter genitive plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν agrees with a neuter genitive plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-adjective-agreement-100",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "For ἔργον, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a neuter dative plural noun."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a neuter dative plural noun."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοῖς agrees with a neuter dative plural noun."
            },
            {
              "text": "καλοῖς",
              "correct": true,
              "feedback": "Correct: καλοῖς agrees with a neuter dative plural noun."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-101",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented nominative plural of ὁ φίλος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι has the proper ending and accent."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι has the proper ending and accent."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι has the proper ending and accent."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-102",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented accusative plural of ὁ φίλος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοὺς φίλους has the proper ending and accent."
            },
            {
              "text": "τοὺς φίλους",
              "correct": true,
              "feedback": "Correct: τοὺς φίλους has the proper ending and accent."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοὺς φίλους has the proper ending and accent."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τοὺς φίλους has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-103",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented genitive plural of ὁ φίλος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν φίλων has the proper ending and accent."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τῶν φίλων has the proper ending and accent."
            },
            {
              "text": "τῶν φίλων",
              "correct": true,
              "feedback": "Correct: τῶν φίλων has the proper ending and accent."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τῶν φίλων has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-104",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented dative plural of ὁ φίλος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις has the proper ending and accent."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις has the proper ending and accent."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοῖς φίλοις has the proper ending and accent."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": true,
              "feedback": "Correct: τοῖς φίλοις has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-105",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented nominative plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: οἱ ἄνθρωποι has the proper ending and accent."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι has the proper ending and accent."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι has the proper ending and accent."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-106",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented accusative plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους has the proper ending and accent."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": true,
              "feedback": "Correct: τοὺς ἀνθρώπους has the proper ending and accent."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους has the proper ending and accent."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-107",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented genitive plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων has the proper ending and accent."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων has the proper ending and accent."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": true,
              "feedback": "Correct: τῶν ἀνθρώπων has the proper ending and accent."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-108",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented dative plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις has the proper ending and accent."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις has the proper ending and accent."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοῖς ἀνθρώποις has the proper ending and accent."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": true,
              "feedback": "Correct: τοῖς ἀνθρώποις has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-109",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented nominative plural of τὸ ἔργον?",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-110",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented accusative plural of τὸ ἔργον?",
          "choices": [
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-111",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented genitive plural of τὸ ἔργον?",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων has the proper ending and accent."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων has the proper ending and accent."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-112",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented dative plural of τὸ ἔργον?",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις has the proper ending and accent."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις has the proper ending and accent."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": true,
              "feedback": "Correct: τοῖς ἔργοις has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-113",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented nominative plural of τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-114",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented accusative plural of τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-115",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented genitive plural of τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων has the proper ending and accent."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων has the proper ending and accent."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": true,
              "feedback": "Correct: τῶν γυμνασίων has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν γυμνασίων has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-116",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented dative plural of τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις has the proper ending and accent."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις has the proper ending and accent."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις has the proper ending and accent."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": true,
              "feedback": "Correct: τοῖς γυμνασίοις has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-117",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented nominative plural of ἡ ἀγορά?",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": true,
              "feedback": "Correct: αἱ ἀγοραί has the proper ending and accent."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί has the proper ending and accent."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί has the proper ending and accent."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: αἱ ἀγοραί has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-118",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented accusative plural of ἡ ἀγορά?",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς has the proper ending and accent."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": true,
              "feedback": "Correct: τὰς ἀγοράς has the proper ending and accent."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς has the proper ending and accent."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τὰς ἀγοράς has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-119",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented genitive plural of ἡ ἀγορά?",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν has the proper ending and accent."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν has the proper ending and accent."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": true,
              "feedback": "Correct: τῶν ἀγορῶν has the proper ending and accent."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν has the proper ending and accent."
            }
          ]
        },
        {
          "id": "lesson-6-practice-shifting-accents-120",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Which is the correctly accented dative plural of ἡ ἀγορά?",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς has the proper ending and accent."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς has the proper ending and accent."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": false,
              "feedback": "Review: ταῖς ἀγοραῖς has the proper ending and accent."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": true,
              "feedback": "Correct: ταῖς ἀγοραῖς has the proper ending and accent."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 6 Grammar Exercises",
      "description": "Plural cases, agreement, and accents",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-6-grammar-exercises-v1",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-6-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 1: Which genitive singular belongs to ὁ φίλος?",
          "choices": [
            {
              "text": "φίλου",
              "correct": true,
              "feedback": "Correct: φίλου is the answer."
            },
            {
              "text": "ἀνθρώπου",
              "correct": false,
              "feedback": "Review: φίλου is the answer."
            },
            {
              "text": "ἔργου",
              "correct": false,
              "feedback": "Review: φίλου is the answer."
            },
            {
              "text": "γυμνασίου",
              "correct": false,
              "feedback": "Review: φίλου is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 2: Which nominative plural belongs to ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the answer."
            },
            {
              "text": "οἱ ἄνθρωποι",
              "correct": true,
              "feedback": "Correct: οἱ ἄνθρωποι is the answer."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the answer."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ ἄνθρωποι is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 3: What case is τῶν ἔργων?",
          "choices": [
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the answer."
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the answer."
            },
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: Genitive plural. is the answer."
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Word Study",
          "prompt": "Grammar exercise 4: Which stem remains when the endings of τὸ γυμνάσιον change?",
          "choices": [
            {
              "text": "φιλ-",
              "correct": false,
              "feedback": "Review: γυμνασι- is the answer."
            },
            {
              "text": "ἀνθρωπ-",
              "correct": false,
              "feedback": "Review: γυμνασι- is the answer."
            },
            {
              "text": "ἐργ-",
              "correct": false,
              "feedback": "Review: γυμνασι- is the answer."
            },
            {
              "text": "γυμνασι-",
              "correct": true,
              "feedback": "Correct: γυμνασι- is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Grammar exercise 5: Choose the masculine nominative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": true,
              "feedback": "Correct: οἱ is the answer."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: οἱ is the answer."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: οἱ is the answer."
            },
            {
              "text": "τοὺς",
              "correct": false,
              "feedback": "Review: οἱ is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Grammar exercise 6: Choose the feminine accusative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τὰς is the answer."
            },
            {
              "text": "τὰς",
              "correct": true,
              "feedback": "Correct: τὰς is the answer."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τὰς is the answer."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τὰς is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Grammar exercise 7: Choose the neuter genitive plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν is the answer."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν is the answer."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν is the answer."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "plural-articles",
          "category": "Plural Articles",
          "prompt": "Grammar exercise 8: Complete the phrase ___ φίλοις.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τοῖς is the answer."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τοῖς is the answer."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τοῖς is the answer."
            },
            {
              "text": "τοῖς",
              "correct": true,
              "feedback": "Correct: τοῖς is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Grammar exercise 9: Choose the nominative plural (subject) of ὁ φίλος.",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι is the answer."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Grammar exercise 10: Choose the accusative plural (direct object) of ὁ ἄνθρωπος.",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": true,
              "feedback": "Correct: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Grammar exercise 11: Choose the genitive plural (of) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "second-declension",
          "category": "Second Declension",
          "prompt": "Grammar exercise 12: Choose the dative plural (to or for) of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": true,
              "feedback": "Correct: τοῖς γυμνασίοις is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Grammar exercise 13: Write the nominative plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": true,
              "feedback": "Correct: τὰ ἔργα is the answer."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the answer."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ ἔργα is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Grammar exercise 14: Write the accusative plural of τὸ γυμνάσιον.",
          "choices": [
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the answer."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια is the answer."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Grammar exercise 15: Write the genitive plural of ἡ ἀγορά.",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the answer."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the answer."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": true,
              "feedback": "Correct: τῶν ἀγορῶν is the answer."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "first-and-neuter",
          "category": "First Declension and Neuter",
          "prompt": "Grammar exercise 16: Write the dative plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις is the answer."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις is the answer."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": false,
              "feedback": "Review: ταῖς οἰκίαις is the answer."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": true,
              "feedback": "Correct: ταῖς οἰκίαις is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "Grammar exercise 17: For φίλος, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": true,
              "feedback": "Correct: καλοί is the answer."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλοί is the answer."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλοί is the answer."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλοί is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "Grammar exercise 18: For ἄνθρωπος, choose the accusative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλούς is the answer."
            },
            {
              "text": "καλούς",
              "correct": true,
              "feedback": "Correct: καλούς is the answer."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλούς is the answer."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλούς is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "Grammar exercise 19: For ἀγορά, choose the genitive plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλῶν is the answer."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλῶν is the answer."
            },
            {
              "text": "καλῶν",
              "correct": true,
              "feedback": "Correct: καλῶν is the answer."
            },
            {
              "text": "καλοῖς",
              "correct": false,
              "feedback": "Review: καλῶν is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "adjective-agreement",
          "category": "Adjective Agreement",
          "prompt": "Grammar exercise 20: For οἰκία, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαῖς is the answer."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαῖς is the answer."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαῖς is the answer."
            },
            {
              "text": "καλαῖς",
              "correct": true,
              "feedback": "Correct: καλαῖς is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Grammar exercise 21: Which is the correctly accented nominative plural of ὁ φίλος?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": true,
              "feedback": "Correct: οἱ φίλοι is the answer."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: οἱ φίλοι is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Grammar exercise 22: Which is the correctly accented accusative plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": true,
              "feedback": "Correct: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τοὺς ἀνθρώπους is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Grammar exercise 23: Which is the correctly accented genitive plural of τὸ ἔργον?",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the answer."
            }
          ]
        },
        {
          "id": "lesson-6-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "shifting-accents",
          "category": "Shifting Accents",
          "prompt": "Grammar exercise 24: Which is the correctly accented dative plural of τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "τὰ γυμνάσια",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "τῶν γυμνασίων",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς γυμνασίοις is the answer."
            },
            {
              "text": "τοῖς γυμνασίοις",
              "correct": true,
              "feedback": "Correct: τοῖς γυμνασίοις is the answer."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 6 Final Quiz — Strength of Body and Mind",
      "description": "Reading, vocabulary, grammar, and the Greek gymnasium",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-6-final-quiz-v1",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 6 and continue to Lesson 7.",
      "questions": [
        {
          "id": "lesson-6-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who trains with Xenophon in the reading?",
          "choices": [
            {
              "text": "Clinias.",
              "correct": true,
              "feedback": "Correct: Clinias is Xenophon’s training companion in the reconstructed frame."
            },
            {
              "text": "Gryllus.",
              "correct": false,
              "feedback": "Review: Clinias is Xenophon’s training companion in the reconstructed frame."
            },
            {
              "text": "Proxenus.",
              "correct": false,
              "feedback": "Review: Clinias is Xenophon’s training companion in the reconstructed frame."
            },
            {
              "text": "Critobulus.",
              "correct": false,
              "feedback": "Review: Clinias is Xenophon’s training companion in the reconstructed frame."
            }
          ]
        },
        {
          "id": "lesson-6-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What do Xenophon and Clinias practice after wrestling?",
          "choices": [
            {
              "text": "A torch race.",
              "correct": false,
              "feedback": "Review: The reading says they practice pankration after wrestling."
            },
            {
              "text": "Pankration.",
              "correct": true,
              "feedback": "Correct: The reading says they practice pankration after wrestling."
            },
            {
              "text": "Discus throwing.",
              "correct": false,
              "feedback": "Review: The reading says they practice pankration after wrestling."
            },
            {
              "text": "Music.",
              "correct": false,
              "feedback": "Review: The reading says they practice pankration after wrestling."
            }
          ]
        },
        {
          "id": "lesson-6-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who speaks directly to Epigenes?",
          "choices": [
            {
              "text": "Clinias.",
              "correct": false,
              "feedback": "Review: Socrates addresses Epigenes in Xenophon’s source."
            },
            {
              "text": "Gryllus.",
              "correct": false,
              "feedback": "Review: Socrates addresses Epigenes in Xenophon’s source."
            },
            {
              "text": "Socrates.",
              "correct": true,
              "feedback": "Correct: Socrates addresses Epigenes in Xenophon’s source."
            },
            {
              "text": "Aristarchus.",
              "correct": false,
              "feedback": "Review: Socrates addresses Epigenes in Xenophon’s source."
            }
          ]
        },
        {
          "id": "lesson-6-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Why does Epigenes say he does not train?",
          "choices": [
            {
              "text": "He is leaving Athens.",
              "correct": false,
              "feedback": "Review: Epigenes calls himself an ἰδιώτης."
            },
            {
              "text": "He has already won at Olympia.",
              "correct": false,
              "feedback": "Review: Epigenes calls himself an ἰδιώτης."
            },
            {
              "text": "He dislikes his friends.",
              "correct": false,
              "feedback": "Review: Epigenes calls himself an ἰδιώτης."
            },
            {
              "text": "He considers himself an ordinary person, not an athlete.",
              "correct": true,
              "feedback": "Correct: Epigenes calls himself an ἰδιώτης."
            }
          ]
        },
        {
          "id": "lesson-6-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What benefit of bodily strength does Socrates name?",
          "choices": [
            {
              "text": "Helping friends and the city.",
              "correct": true,
              "feedback": "Correct: Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Avoiding every question.",
              "correct": false,
              "feedback": "Review: Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Winning money in the agora.",
              "correct": false,
              "feedback": "Review: Socrates links sound condition to helping friends and benefiting the city."
            },
            {
              "text": "Never needing to learn.",
              "correct": false,
              "feedback": "Review: Socrates links sound condition to helping friends and benefiting the city."
            }
          ]
        },
        {
          "id": "lesson-6-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Epigenes look at near the end of the reading?",
          "choices": [
            {
              "text": "The horse.",
              "correct": false,
              "feedback": "Review: The closing sentence has Epigenes look at the young men."
            },
            {
              "text": "The young men.",
              "correct": true,
              "feedback": "Correct: The closing sentence has Epigenes look at the young men."
            },
            {
              "text": "The agora.",
              "correct": false,
              "feedback": "Review: The closing sentence has Epigenes look at the young men."
            },
            {
              "text": "The sea.",
              "correct": false,
              "feedback": "Review: The closing sentence has Epigenes look at the young men."
            }
          ]
        },
        {
          "id": "lesson-6-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ γυμνάσιον name?",
          "choices": [
            {
              "text": "A marketplace.",
              "correct": false,
              "feedback": "Review: γυμνάσιον is a gymnasium."
            },
            {
              "text": "A warship.",
              "correct": false,
              "feedback": "Review: γυμνάσιον is a gymnasium."
            },
            {
              "text": "A place for exercise.",
              "correct": true,
              "feedback": "Correct: γυμνάσιον is a gymnasium."
            },
            {
              "text": "A helmet.",
              "correct": false,
              "feedback": "Review: γυμνάσιον is a gymnasium."
            }
          ]
        },
        {
          "id": "lesson-6-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ πάλη mean?",
          "choices": [
            {
              "text": "Wisdom.",
              "correct": false,
              "feedback": "Review: πάλη means wrestling."
            },
            {
              "text": "Walking.",
              "correct": false,
              "feedback": "Review: πάλη means wrestling."
            },
            {
              "text": "Bread.",
              "correct": false,
              "feedback": "Review: πάλη means wrestling."
            },
            {
              "text": "Wrestling.",
              "correct": true,
              "feedback": "Correct: πάλη means wrestling."
            }
          ]
        },
        {
          "id": "lesson-6-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does πολλάκις mean?",
          "choices": [
            {
              "text": "Often.",
              "correct": true,
              "feedback": "Correct: πολλάκις means often."
            },
            {
              "text": "Never.",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "Tomorrow.",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            },
            {
              "text": "Together.",
              "correct": false,
              "feedback": "Review: πολλάκις means often."
            }
          ]
        },
        {
          "id": "lesson-6-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ὁ ἰδιώτης mean in Epigenes’ reply?",
          "choices": [
            {
              "text": "A professional athlete.",
              "correct": false,
              "feedback": "Review: Epigenes uses ἰδιώτης of himself."
            },
            {
              "text": "An ordinary private person.",
              "correct": true,
              "feedback": "Correct: Epigenes uses ἰδιώτης of himself."
            },
            {
              "text": "A city magistrate.",
              "correct": false,
              "feedback": "Review: Epigenes uses ἰδιώτης of himself."
            },
            {
              "text": "A wrestling coach.",
              "correct": false,
              "feedback": "Review: Epigenes uses ἰδιώτης of himself."
            }
          ]
        },
        {
          "id": "lesson-6-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does χρήσιμος mean?",
          "choices": [
            {
              "text": "Narrow.",
              "correct": false,
              "feedback": "Review: χρήσιμος means useful."
            },
            {
              "text": "Distant.",
              "correct": false,
              "feedback": "Review: χρήσιμος means useful."
            },
            {
              "text": "Useful.",
              "correct": true,
              "feedback": "Correct: χρήσιμος means useful."
            },
            {
              "text": "Angry.",
              "correct": false,
              "feedback": "Review: χρήσιμος means useful."
            }
          ]
        },
        {
          "id": "lesson-6-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does γυμνάζω mean?",
          "choices": [
            {
              "text": "I buy.",
              "correct": false,
              "feedback": "Review: γυμνάζω means train or exercise."
            },
            {
              "text": "I forget.",
              "correct": false,
              "feedback": "Review: γυμνάζω means train or exercise."
            },
            {
              "text": "I write.",
              "correct": false,
              "feedback": "Review: γυμνάζω means train or exercise."
            },
            {
              "text": "I train or exercise.",
              "correct": true,
              "feedback": "Correct: γυμνάζω means train or exercise."
            }
          ]
        },
        {
          "id": "lesson-6-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What case is τῶν φίλων?",
          "choices": [
            {
              "text": "Genitive plural.",
              "correct": true,
              "feedback": "Correct: Genitive plural. is the correct plural form."
            },
            {
              "text": "Nominative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the correct plural form."
            },
            {
              "text": "Accusative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the correct plural form."
            },
            {
              "text": "Dative plural.",
              "correct": false,
              "feedback": "Review: Genitive plural. is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which nominative plural belongs to τὸ γυμνάσιον?",
          "choices": [
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the correct plural form."
            },
            {
              "text": "τὰ γυμνάσια",
              "correct": true,
              "feedback": "Correct: τὰ γυμνάσια is the correct plural form."
            },
            {
              "text": "τοὺς φίλους",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the correct plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τὰ γυμνάσια is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Choose the masculine genitive plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: τῶν is the correct plural form."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: τῶν is the correct plural form."
            },
            {
              "text": "τῶν",
              "correct": true,
              "feedback": "Correct: τῶν is the correct plural form."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: τῶν is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Choose the feminine dative plural article before a noun.",
          "choices": [
            {
              "text": "οἱ",
              "correct": false,
              "feedback": "Review: ταῖς is the correct plural form."
            },
            {
              "text": "αἱ",
              "correct": false,
              "feedback": "Review: ταῖς is the correct plural form."
            },
            {
              "text": "τὰ",
              "correct": false,
              "feedback": "Review: ταῖς is the correct plural form."
            },
            {
              "text": "ταῖς",
              "correct": true,
              "feedback": "Correct: ταῖς is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Choose the accusative plural (direct object) of ὁ φίλος.",
          "choices": [
            {
              "text": "τοὺς φίλους",
              "correct": true,
              "feedback": "Correct: τοὺς φίλους is the correct plural form."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the correct plural form."
            },
            {
              "text": "τῶν φίλων",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the correct plural form."
            },
            {
              "text": "τοῖς φίλοις",
              "correct": false,
              "feedback": "Review: τοὺς φίλους is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Choose the dative plural (to or for) of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the correct plural form."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": true,
              "feedback": "Correct: τοῖς ἔργοις is the correct plural form."
            },
            {
              "text": "τῶν ἔργων",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the correct plural form."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τοῖς ἔργοις is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Write the genitive plural of τὸ ἔργον.",
          "choices": [
            {
              "text": "τὰ ἔργα",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the correct plural form."
            },
            {
              "text": "τοῖς ἔργοις",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the correct plural form."
            },
            {
              "text": "τῶν ἔργων",
              "correct": true,
              "feedback": "Correct: τῶν ἔργων is the correct plural form."
            },
            {
              "text": "οἱ φίλοι",
              "correct": false,
              "feedback": "Review: τῶν ἔργων is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Write the genitive plural of ἡ οἰκία.",
          "choices": [
            {
              "text": "αἱ οἰκίαι",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν is the correct plural form."
            },
            {
              "text": "τὰς οἰκίας",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν is the correct plural form."
            },
            {
              "text": "ταῖς οἰκίαις",
              "correct": false,
              "feedback": "Review: τῶν οἰκιῶν is the correct plural form."
            },
            {
              "text": "τῶν οἰκιῶν",
              "correct": true,
              "feedback": "Correct: τῶν οἰκιῶν is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "For ἀγορά, choose the nominative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλαί",
              "correct": true,
              "feedback": "Correct: καλαί is the correct plural form."
            },
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαί is the correct plural form."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαί is the correct plural form."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαί is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "For οἰκία, choose the dative plural of καλός/καλή/καλόν.",
          "choices": [
            {
              "text": "καλοί",
              "correct": false,
              "feedback": "Review: καλαῖς is the correct plural form."
            },
            {
              "text": "καλαῖς",
              "correct": true,
              "feedback": "Correct: καλαῖς is the correct plural form."
            },
            {
              "text": "καλούς",
              "correct": false,
              "feedback": "Review: καλαῖς is the correct plural form."
            },
            {
              "text": "καλῶν",
              "correct": false,
              "feedback": "Review: καλαῖς is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is the correctly accented genitive plural of ὁ ἄνθρωπος?",
          "choices": [
            {
              "text": "οἱ ἄνθρωποι",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the correct plural form."
            },
            {
              "text": "τοὺς ἀνθρώπους",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the correct plural form."
            },
            {
              "text": "τῶν ἀνθρώπων",
              "correct": true,
              "feedback": "Correct: τῶν ἀνθρώπων is the correct plural form."
            },
            {
              "text": "τοῖς ἀνθρώποις",
              "correct": false,
              "feedback": "Review: τῶν ἀνθρώπων is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which is the correctly accented genitive plural of ἡ ἀγορά?",
          "choices": [
            {
              "text": "αἱ ἀγοραί",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the correct plural form."
            },
            {
              "text": "τὰς ἀγοράς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the correct plural form."
            },
            {
              "text": "ταῖς ἀγοραῖς",
              "correct": false,
              "feedback": "Review: τῶν ἀγορῶν is the correct plural form."
            },
            {
              "text": "τῶν ἀγορῶν",
              "correct": true,
              "feedback": "Correct: τῶν ἀγορῶν is the correct plural form."
            }
          ]
        },
        {
          "id": "lesson-6-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What was a palaestra particularly associated with?",
          "choices": [
            {
              "text": "Wrestling and combat training.",
              "correct": true,
              "feedback": "Correct: A palaestra was especially used for wrestling and related training."
            },
            {
              "text": "Shipbuilding.",
              "correct": false,
              "feedback": "Review: A palaestra was especially used for wrestling and related training."
            },
            {
              "text": "Law courts.",
              "correct": false,
              "feedback": "Review: A palaestra was especially used for wrestling and related training."
            },
            {
              "text": "Horse breeding.",
              "correct": false,
              "feedback": "Review: A palaestra was especially used for wrestling and related training."
            }
          ]
        },
        {
          "id": "lesson-6-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Where is the archaeological site in the Page 3 photograph?",
          "choices": [
            {
              "text": "Athens.",
              "correct": false,
              "feedback": "Review: The photograph shows the palaestra at Olympia."
            },
            {
              "text": "Olympia.",
              "correct": true,
              "feedback": "Correct: The photograph shows the palaestra at Olympia."
            },
            {
              "text": "Delphi.",
              "correct": false,
              "feedback": "Review: The photograph shows the palaestra at Olympia."
            },
            {
              "text": "Sparta.",
              "correct": false,
              "feedback": "Review: The photograph shows the palaestra at Olympia."
            }
          ]
        },
        {
          "id": "lesson-6-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which description of the photograph is accurate?",
          "choices": [
            {
              "text": "It shows Socrates speaking to Epigenes.",
              "correct": false,
              "feedback": "Review: The photograph is a modern view of Olympia’s remains."
            },
            {
              "text": "It records a fifth-century Athenian class.",
              "correct": false,
              "feedback": "Review: The photograph is a modern view of Olympia’s remains."
            },
            {
              "text": "It shows surviving ruins, not the exact scene in the reading.",
              "correct": true,
              "feedback": "Correct: The photograph is a modern view of Olympia’s remains."
            },
            {
              "text": "It shows the Acropolis gymnasium.",
              "correct": false,
              "feedback": "Review: The photograph is a modern view of Olympia’s remains."
            }
          ]
        },
        {
          "id": "lesson-6-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which practice was common among Greek athletes?",
          "choices": [
            {
              "text": "Wearing armor for every event.",
              "correct": false,
              "feedback": "Review: Athletic nudity and olive oil were familiar training customs."
            },
            {
              "text": "Playing modern team football.",
              "correct": false,
              "feedback": "Review: Athletic nudity and olive oil were familiar training customs."
            },
            {
              "text": "Avoiding all contact sports.",
              "correct": false,
              "feedback": "Review: Athletic nudity and olive oil were familiar training customs."
            },
            {
              "text": "Training without clothing and using olive oil.",
              "correct": true,
              "feedback": "Correct: Athletic nudity and olive oil were familiar training customs."
            }
          ]
        },
        {
          "id": "lesson-6-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What is pankration?",
          "choices": [
            {
              "text": "A combat sport combining wrestling and striking.",
              "correct": true,
              "feedback": "Correct: Pankration combined wrestling and striking."
            },
            {
              "text": "A kind of chariot.",
              "correct": false,
              "feedback": "Review: Pankration combined wrestling and striking."
            },
            {
              "text": "A covered running track.",
              "correct": false,
              "feedback": "Review: Pankration combined wrestling and striking."
            },
            {
              "text": "A building for debate.",
              "correct": false,
              "feedback": "Review: Pankration combined wrestling and striking."
            }
          ]
        },
        {
          "id": "lesson-6-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which statement about women and Greek athletics is supported?",
          "choices": [
            {
              "text": "All women trained with men in Athenian gymnasia.",
              "correct": false,
              "feedback": "Review: The article distinguishes Athenian training from the Hera races at Olympia."
            },
            {
              "text": "Opportunities varied; young women had separate Hera races at Olympia.",
              "correct": true,
              "feedback": "Correct: The article distinguishes Athenian training from the Hera races at Olympia."
            },
            {
              "text": "Women never competed anywhere in Greece.",
              "correct": false,
              "feedback": "Review: The article distinguishes Athenian training from the Hera races at Olympia."
            },
            {
              "text": "All Greek cities followed exactly the same rules.",
              "correct": false,
              "feedback": "Review: The article distinguishes Athenian training from the Hera races at Olympia."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-7",
    "title": "Examining Oneself",
    "fallbackUrl": "lesson.html?lesson=7&page=1"
  },
  "contentRevision": "lesson-6-gymnasium-complete-v1",
  "previousLesson": {
    "id": "lesson-5",
    "title": "An Unexpected Question",
    "fallbackUrl": "lesson.html?lesson=5&page=1"
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
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-6' FOR UPDATE;
  SELECT content,version INTO old_content,old_version FROM public.lesson_content_overrides WHERE lesson_id=lesson_id_value FOR UPDATE;
  IF old_content->>'contentRevision' = patch->>'contentRevision' THEN
    -- Preserve subsequent administrator edits to the published revision.
    RETURN;
  END IF;
  IF old_content IS NOT NULL AND (old_version IS DISTINCT FROM 1
    OR md5(old_content::text) IS DISTINCT FROM '94bd495e712cdd40cc0d60e9412e6044') THEN
    RAISE EXCEPTION 'Lesson 6 published content changed after inspection; review before publishing';
  END IF;
  IF old_content IS NOT NULL THEN
    INSERT INTO public.lesson_content_versions (lesson_id,content,version,note)
    VALUES (lesson_id_value,old_content,old_version,'Before complete Lesson 6 gymnasium lesson');
  END IF;
  INSERT INTO public.lesson_content_overrides (lesson_id,content,version) VALUES (lesson_id_value,patch,1)
  ON CONFLICT (lesson_id) DO UPDATE SET content=EXCLUDED.content,version=public.lesson_content_overrides.version+1,updated_at=now();
  UPDATE public.lessons SET title=patch->>'title',greek_title=patch->>'greekTitle',grammar_focus=patch->>'scope' WHERE id=lesson_id_value;
  INSERT INTO public.lesson_segments (lesson_id,slug,title,sort_order)
  SELECT lesson_id_value,p->>'slug',p->>'title',(p->>'page')::integer FROM jsonb_array_elements(patch->'pages') p
  ON CONFLICT (lesson_id,slug) DO UPDATE SET title=EXCLUDED.title,sort_order=EXCLUDED.sort_order;
  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-6-page-1';
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
      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_6_gymnasium'))
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
$lesson6$;
COMMIT;
