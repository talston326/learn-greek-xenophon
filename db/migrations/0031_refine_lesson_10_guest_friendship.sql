-- Refine Lesson 10 with the fuller reading, Theban guest friendship, and mercenary history.
BEGIN;
DO $lesson10$
DECLARE
  patch jsonb := $json${
  "id": "lesson-10",
  "number": 10,
  "title": "The Letter from Proxenus",
  "greekTitle": "Τὸ παρὰ Προξένου γράμμα",
  "scope": "Personal pronouns, possession, possessive adjectives, demonstratives, and adjective placement",
  "theme": "A friend’s invitation, Athens, and a consequential choice",
  "module": "σοφία — Wisdom and Socrates",
  "banner": {
    "image": "assets/lesson-10-letter-banner.png",
    "alt": "A bearded Xenophon studies a papyrus letter while Socrates speaks with him in a reconstructed Athenian courtyard",
    "caption": "Xenophon weighs Proxenus’s invitation while consulting Socrates. The scene and letter’s visible form are reconstruction."
  },
  "pages": [
    {
      "page": 1,
      "slug": "lesson-10-page-1",
      "title": "Reading",
      "template": "reading",
      "showTranslation": false
    },
    {
      "page": 2,
      "slug": "lesson-10-page-2",
      "title": "Language Study",
      "template": "grammar"
    },
    {
      "page": 3,
      "slug": "lesson-10-page-3",
      "title": "Guest Friendship and Mercenaries",
      "template": "culture"
    }
  ],
  "vocabulary": [
    {
      "category": "People and choices",
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
          "greek": "ὁ ξένος",
          "english": "guest friend",
          "dictionaryForm": "ξένος, ξένου, ὁ",
          "status": "required vocabulary",
          "lemma": "ξένος",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ πόλις",
          "english": "city, city-state",
          "dictionaryForm": "πόλις, πόλεως, ἡ",
          "status": "required vocabulary",
          "lemma": "πόλις",
          "audioPlaceholder": true
        },
        {
          "greek": "ἡ πατρίς",
          "english": "homeland",
          "dictionaryForm": "πατρίς, πατρίδος, ἡ",
          "status": "required vocabulary",
          "lemma": "πατρίς",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ Κῦρος",
          "english": "Cyrus the Younger",
          "dictionaryForm": "Κῦρος, Κύρου, ὁ",
          "status": "reading vocabulary",
          "lemma": "Κῦρος",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ Προξένος",
          "english": "Proxenus",
          "dictionaryForm": "Προξένος, Προξένου, ὁ",
          "status": "reading vocabulary",
          "lemma": "Προξένος",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ Θηβαῖος",
          "english": "Theban",
          "dictionaryForm": "Θηβαῖος, Θηβαίου, ὁ",
          "status": "reading vocabulary",
          "lemma": "Θηβαῖος",
          "audioPlaceholder": true
        },
        {
          "greek": "τὸ βούλευμα",
          "english": "decision",
          "dictionaryForm": "βούλευμα, βουλεύματος, τό",
          "status": "reading vocabulary",
          "lemma": "βούλευμα",
          "audioPlaceholder": true
        },
        {
          "greek": "ὁ πόλεμος",
          "english": "war",
          "dictionaryForm": "πόλεμος, πολέμου, ὁ",
          "status": "required vocabulary",
          "lemma": "πόλεμος",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Letters and travel",
      "items": [
        {
          "greek": "τὸ γράμμα",
          "english": "letter",
          "dictionaryForm": "γράμμα, γράμματος, τό",
          "status": "required vocabulary",
          "lemma": "γράμμα",
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
          "greek": "γράφω",
          "english": "write",
          "dictionaryForm": "γράφω",
          "status": "required vocabulary",
          "lemma": "γράφω",
          "audioPlaceholder": true
        },
        {
          "greek": "καλέω",
          "english": "call, invite",
          "dictionaryForm": "καλέω",
          "status": "required vocabulary",
          "lemma": "καλέω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἐρωτάω",
          "english": "ask, consult",
          "dictionaryForm": "ἐρωτάω",
          "status": "required vocabulary",
          "lemma": "ἐρωτάω",
          "audioPlaceholder": true
        },
        {
          "greek": "πορεύομαι",
          "english": "go, travel",
          "dictionaryForm": "πορεύομαι",
          "status": "reading vocabulary",
          "lemma": "πορεύομαι",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀναγιγνώσκω",
          "english": "read",
          "dictionaryForm": "ἀναγιγνώσκω",
          "status": "reading vocabulary",
          "lemma": "ἀναγιγνώσκω",
          "audioPlaceholder": true
        },
        {
          "greek": "ἀποκρίνομαι",
          "english": "reply",
          "dictionaryForm": "ἀποκρίνομαι",
          "status": "reading vocabulary",
          "lemma": "ἀποκρίνομαι",
          "audioPlaceholder": true
        }
      ]
    },
    {
      "category": "Pronouns and describing",
      "items": [
        {
          "greek": "ἐγώ / με / μου",
          "english": "I / me / my",
          "dictionaryForm": "ἐγώ",
          "status": "required vocabulary",
          "lemma": "ἐγώ / με / μου",
          "audioPlaceholder": true
        },
        {
          "greek": "σύ / σε / σου",
          "english": "you / you / your",
          "dictionaryForm": "σύ",
          "status": "required vocabulary",
          "lemma": "σύ / σε / σου",
          "audioPlaceholder": true
        },
        {
          "greek": "ἐμός, ἐμή, ἐμόν",
          "english": "my",
          "dictionaryForm": "ἐμός, ἐμή, ἐμόν",
          "status": "required vocabulary",
          "lemma": "ἐμός",
          "audioPlaceholder": true
        },
        {
          "greek": "σός, σή, σόν",
          "english": "your",
          "dictionaryForm": "σός, σή, σόν",
          "status": "required vocabulary",
          "lemma": "σός",
          "audioPlaceholder": true
        },
        {
          "greek": "οὗτος, αὕτη, τοῦτο",
          "english": "this",
          "dictionaryForm": "οὗτος, αὕτη, τοῦτο",
          "status": "required vocabulary",
          "lemma": "οὗτος",
          "audioPlaceholder": true
        },
        {
          "greek": "παλαιός, παλαιά, παλαιόν",
          "english": "old, longstanding",
          "dictionaryForm": "παλαιός, παλαιά, παλαιόν",
          "status": "required vocabulary",
          "lemma": "παλαιός",
          "audioPlaceholder": true
        },
        {
          "greek": "πιστός, πιστή, πιστόν",
          "english": "loyal",
          "dictionaryForm": "πιστός, πιστή, πιστόν",
          "status": "reading vocabulary",
          "lemma": "πιστός",
          "audioPlaceholder": true
        }
      ]
    }
  ],
  "reading": {
    "title": "Τὸ παρὰ Προξένου γράμμα",
    "audioPlaceholder": "Reading audio has not yet been recorded.",
    "introduction": [
      "After the conversation about friendship, an invitation from Proxenus of Thebes makes friendship a personal dilemma. Proxenus is Xenophon’s longstanding guest friend. He offers to introduce Xenophon to Cyrus the Younger, although an Athenian association with Cyrus could invite suspicion after the war with Sparta.",
      "Source note: Xenophon, Anabasis 3.1.4–5 reports Proxenus’s invitation, his promise to make Xenophon a friend of Cyrus, his preference for Cyrus over his homeland, Socrates’s concern about Athens, and his advice to consult Apollo at Delphi. Anabasis 2.1.10 identifies Proxenus as Theban. Xenophon does not preserve the letter’s exact wording or the detailed conversation. The words, physical handoff, and private reactions in this reading are adaptations.",
      "The Greek keeps the present-tense narrative used in earlier lessons. Blue glosses support names, guest friendship, middle forms, past and future verbs, and clauses beyond the production target. Focus on pronouns, possession, demonstratives, and adjective placement as Xenophon weighs friend and city."
    ],
    "paragraphs": [
      {
        "greek": "Ὅτε ὁ Ξενοφῶν ἐν Ἀθήναις μένει, γράμμα παρὰ Προξένου τοῦ Θηβαίου, παλαιοῦ ξένου, αὐτῷ ἥκει. ἐπεὶ δὲ τὸ γράμμα ἀναγιγνώσκει, μανθάνει ὅτι ὁ ξένος αὐτὸν πρὸς Κῦρον καλεῖ.",
        "gloss": [
          {
            "greek": "Ὅτε",
            "english": "while; time clause"
          },
          {
            "greek": "ἐν Ἀθήναις",
            "english": "in Athens"
          },
          {
            "greek": "μένει",
            "english": "is staying"
          },
          {
            "greek": "παρὰ Προξένου τοῦ Θηβαίου",
            "english": "from Proxenus the Theban"
          },
          {
            "greek": "παλαιοῦ ξένου",
            "english": "of a longstanding guest friend"
          },
          {
            "greek": "αὐτῷ ἥκει",
            "english": "comes to him"
          },
          {
            "greek": "ἐπεὶ",
            "english": "as, when"
          },
          {
            "greek": "ἀναγιγνώσκει",
            "english": "reads"
          },
          {
            "greek": "μανθάνει ὅτι",
            "english": "learns that"
          },
          {
            "greek": "αὐτὸν",
            "english": "him; object pronoun"
          },
          {
            "greek": "πρὸς Κῦρον",
            "english": "to Cyrus the Younger"
          },
          {
            "greek": "καλεῖ",
            "english": "invites"
          }
        ]
      },
      {
        "greek": "ὁ Προξένος γράφει· «ὦ Ξενοφῶν, ἐλθὲ πρὸς ἐμέ· σὺ μὲν ἐμοὶ ξένος εἶ, ἐγὼ δὲ σὲ τῷ Κύρῳ, ᾧ φίλος εἰμί, φίλον ποιήσω. ἐμοὶ γὰρ οὗτος τῆς πατρίδος τιμιώτερός ἐστιν.»",
        "gloss": [
          {
            "greek": "ἐλθὲ",
            "english": "come!; command"
          },
          {
            "greek": "πρὸς ἐμέ",
            "english": "to me"
          },
          {
            "greek": "ἐμοὶ",
            "english": "to me"
          },
          {
            "greek": "ξένος",
            "english": "guest friend"
          },
          {
            "greek": "σὲ",
            "english": "you; object pronoun"
          },
          {
            "greek": "τῷ Κύρῳ",
            "english": "to Cyrus"
          },
          {
            "greek": "ᾧ φίλος εἰμί",
            "english": "whose friend I am; relative clause"
          },
          {
            "greek": "ποιήσω",
            "english": "I will make"
          },
          {
            "greek": "οὗτος",
            "english": "this man, Cyrus"
          },
          {
            "greek": "τῆς πατρίδος",
            "english": "than my homeland; comparative genitive"
          },
          {
            "greek": "τιμιώτερός ἐστιν",
            "english": "is more valuable"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν χαίρει μὲν ὅτι ὁ παλαιὸς φίλος αὐτὸν καλεῖ, θαυμάζει δὲ ὅτι ὁ Προξένος τὸν Κῦρον τῆς πατρίδος προτιμᾷ. «ὁ ἐμὸς φίλος με καλεῖ», φησίν, «ἀλλ᾽ ἡ ἐμὴ πόλις Ἀθῆναί ἐστιν· πῶς ἅμα τῷ φίλῳ καὶ τῇ πόλει πιστὸς ἔσομαι;»",
        "gloss": [
          {
            "greek": "χαίρει μὲν ὅτι",
            "english": "is pleased that; first half of a contrast"
          },
          {
            "greek": "θαυμάζει δὲ ὅτι",
            "english": "but is astonished that"
          },
          {
            "greek": "προτιμᾷ",
            "english": "puts before, prefers"
          },
          {
            "greek": "τῆς πατρίδος",
            "english": "to his homeland; comparative genitive"
          },
          {
            "greek": "ὁ ἐμὸς φίλος",
            "english": "my friend; possessive adjective"
          },
          {
            "greek": "με",
            "english": "me; object pronoun"
          },
          {
            "greek": "φησίν",
            "english": "he says"
          },
          {
            "greek": "ἀλλ᾽",
            "english": "but; elision of ἀλλά"
          },
          {
            "greek": "ἡ ἐμὴ πόλις",
            "english": "my city"
          },
          {
            "greek": "πῶς ἅμα",
            "english": "how at the same time"
          },
          {
            "greek": "τῷ φίλῳ καὶ τῇ πόλει",
            "english": "to my friend and city"
          },
          {
            "greek": "πιστὸς ἔσομαι",
            "english": "will I be loyal?; future form"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν οὔπω τῷ Προξένῳ ἀποκρίνεται, ἀλλὰ τὸ γράμμα πρὸς τὸν Σωκράτην φέρει. «ὁ παλαιὸς φίλος μου», λέγει, «με πρὸς Κῦρον καλεῖ· σὺ δὲ τί περὶ ταύτης τῆς ὁδοῦ νομίζεις;»",
        "gloss": [
          {
            "greek": "οὔπω",
            "english": "not yet"
          },
          {
            "greek": "τῷ Προξένῳ",
            "english": "to Proxenus"
          },
          {
            "greek": "ἀποκρίνεται",
            "english": "replies; middle form"
          },
          {
            "greek": "πρὸς τὸν Σωκράτην",
            "english": "to Socrates"
          },
          {
            "greek": "φέρει",
            "english": "takes, carries"
          },
          {
            "greek": "ὁ παλαιὸς φίλος μου",
            "english": "my old friend; postposed μου"
          },
          {
            "greek": "περὶ ταύτης τῆς ὁδοῦ",
            "english": "about this journey; feminine genitive"
          },
          {
            "greek": "νομίζεις",
            "english": "do you think?"
          }
        ]
      },
      {
        "greek": "ὁ Σωκράτης, ἐπεὶ τὸ γράμμα ἀναγιγνώσκει, οὐ περὶ τοῦ Προξένου πρῶτον ἐρωτᾷ, ἀλλὰ περὶ τοῦ Κύρου· «οὐ νομίζουσιν οἱ Ἀθηναῖοι ὅτι ὁ Κῦρος τοῖς Λακεδαιμονίοις ἐν τῷ πολέμῳ ἐβοήθησεν;» «ναί», ἀποκρίνεται ὁ Ξενοφῶν, «καὶ τούτου οὐκ ἐπιλανθάνονται.»",
        "gloss": [
          {
            "greek": "ἐπεὶ",
            "english": "after, when"
          },
          {
            "greek": "οὐ περὶ τοῦ Προξένου πρῶτον",
            "english": "not first about Proxenus"
          },
          {
            "greek": "ἐρωτᾷ",
            "english": "asks"
          },
          {
            "greek": "οὐ νομίζουσιν οἱ Ἀθηναῖοι ὅτι",
            "english": "do the Athenians not believe that?"
          },
          {
            "greek": "τοῖς Λακεδαιμονίοις",
            "english": "the Spartans"
          },
          {
            "greek": "ἐν τῷ πολέμῳ",
            "english": "during the war"
          },
          {
            "greek": "ἐβοήθησεν",
            "english": "helped; past tense"
          },
          {
            "greek": "ἀποκρίνεται",
            "english": "replies"
          },
          {
            "greek": "τούτου οὐκ ἐπιλανθάνονται",
            "english": "they do not forget this; genitive with middle verb"
          }
        ]
      },
      {
        "greek": "«φοβοῦμαι οὖν», φησὶν ὁ Σωκράτης, «μὴ οἱ συμπολῖταί σου σε αἰτιάσωνται, ἐὰν Κύρῳ φίλος γένῃ. ὁ μὲν Προξένος φίλος σός ἐστιν· τῆς δὲ σῆς πατρίδος μὴ ἐπιλανθάνου.»",
        "gloss": [
          {
            "greek": "φοβοῦμαι",
            "english": "I fear; middle form"
          },
          {
            "greek": "οὖν",
            "english": "then, therefore"
          },
          {
            "greek": "φησὶν",
            "english": "he says"
          },
          {
            "greek": "μὴ οἱ συμπολῖταί σου σε αἰτιάσωνται",
            "english": "that your fellow citizens may accuse you; fear clause"
          },
          {
            "greek": "ἐὰν Κύρῳ φίλος γένῃ",
            "english": "if you become Cyrus’s friend; conditional clause"
          },
          {
            "greek": "φίλος σός ἐστιν",
            "english": "is your friend; predicate possessive adjective"
          },
          {
            "greek": "τῆς δὲ σῆς πατρίδος",
            "english": "but your homeland; genitive possessive adjective"
          },
          {
            "greek": "μὴ ἐπιλανθάνου",
            "english": "do not forget; middle command"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν ἐρωτᾷ· «τί οὖν ποιῶ;» ὁ δὲ Σωκράτης ἀποκρίνεται· «οὐ μικρὸν τὸ βούλευμά σου ἐστίν. πρὶν οὖν τῷ Προξένῳ ἀποκρίνεσθαι, πρὸς Δελφοὺς πορεύου καὶ τὸν Ἀπόλλωνα περὶ ταύτης τῆς ὁδοῦ ἐρώτα.»",
        "gloss": [
          {
            "greek": "τί οὖν ποιῶ",
            "english": "what, then, should I do?"
          },
          {
            "greek": "ἀποκρίνεται",
            "english": "replies"
          },
          {
            "greek": "οὐ μικρὸν τὸ βούλευμά σου",
            "english": "your decision is no small matter"
          },
          {
            "greek": "πρὶν οὖν τῷ Προξένῳ ἀποκρίνεσθαι",
            "english": "before answering Proxenus; infinitive construction"
          },
          {
            "greek": "πρὸς Δελφοὺς",
            "english": "to Delphi"
          },
          {
            "greek": "πορεύου",
            "english": "go; middle command"
          },
          {
            "greek": "τὸν Ἀπόλλωνα",
            "english": "Apollo"
          },
          {
            "greek": "περὶ ταύτης τῆς ὁδοῦ",
            "english": "about this journey"
          },
          {
            "greek": "ἐρώτα",
            "english": "ask, consult; command"
          }
        ]
      },
      {
        "greek": "ὁ Ξενοφῶν τὸ γράμμα αὖθις ἀναγιγνώσκει καὶ τὰ τοῦ Σωκράτους ἐν νῷ ἔχει. «τὸ μὲν γράμμα παρὰ τοῦ φίλου μου ἐστίν», φησίν, «τὸ δὲ βούλευμα ἐμόν· πρῶτον τὸν θεὸν ἐρωτήσω.»",
        "gloss": [
          {
            "greek": "αὖθις",
            "english": "again"
          },
          {
            "greek": "ἀναγιγνώσκει",
            "english": "reads"
          },
          {
            "greek": "τὰ τοῦ Σωκράτους ἐν νῷ ἔχει",
            "english": "keeps Socrates’s words in mind"
          },
          {
            "greek": "παρὰ τοῦ φίλου μου",
            "english": "from my friend"
          },
          {
            "greek": "τὸ δὲ βούλευμα ἐμόν",
            "english": "but the decision is mine; predicate possessive"
          },
          {
            "greek": "πρῶτον",
            "english": "first"
          },
          {
            "greek": "τὸν θεὸν",
            "english": "the god, Apollo"
          },
          {
            "greek": "ἐρωτήσω",
            "english": "I shall ask; future form"
          }
        ]
      }
    ],
    "translation": "While Xenophon is staying in Athens, a letter comes to him from Proxenus of Thebes, a longstanding guest friend. As he reads it, he learns that his guest friend is inviting him to join Cyrus.\n\nProxenus writes: “Xenophon, come to me. You are my guest friend, and I will make you a friend of Cyrus, whose friend I am. To me, Cyrus is more valuable than my homeland.”\n\nXenophon is pleased that his old friend is inviting him, but astonished that Proxenus puts Cyrus before his homeland. “My friend is calling me,” he says, “but my city is Athens. How can I be loyal to both my friend and my city?”\n\nXenophon does not yet reply to Proxenus. Instead, he takes the letter to Socrates. “My old friend is inviting me to Cyrus,” he says. “What do you think of this journey?”\n\nAfter reading the letter, Socrates asks first about Cyrus, rather than Proxenus: “Don’t the Athenians believe that Cyrus helped the Spartans during the war?” “Yes,” Xenophon replies, “and they have not forgotten it.”\n\n“I fear, then,” Socrates says, “that your fellow citizens may accuse you if you become Cyrus’s friend. Proxenus is your friend, but do not forget your homeland.”\n\n“What, then, should I do?” Xenophon asks. Socrates replies, “Your decision is no small matter. Before answering Proxenus, go to Delphi and consult Apollo about this journey.”\n\nXenophon reads the letter again and keeps Socrates’s words in mind. “The letter is from my friend,” he says, “but the decision is mine. First I shall consult the god.”",
    "sourceCitation": "Xenophon, Anabasis 3.1.4–5 (invitation and counsel); 2.1.10 (Proxenus of Thebes). Letter wording and extended dialogue are adapted. https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3",
    "notesMarkdown": "Proxenus is identified as a Theban at Anabasis 2.1.10 and as Xenophon’s longstanding guest friend at 3.1.4. His invitation, promised introduction to Cyrus, Socrates’ Athenian concern, and the Delphic advice are reported at 3.1.4–5. The letter’s wording, physical handoff, and personal thoughts are course reconstruction."
  },
  "wordStudy": {
    "label": "Word Study — Friend, Guest Friend, City",
    "blocks": [
      {
        "title": "Who belongs to whom?",
        "practiceTopic": "word-study",
        "body": [
          "ὁ φίλος is a friend; ὁ ξένος is a guest friend, a relationship that can reach across city borders. Proxenus is from Thebes and Xenophon is from Athens. They call one another ξένος in the reconstructed letter. The historical source calls Proxenus Xenophon’s longstanding guest friend.",
          "ὁ φίλος μου means “my friend,” with a short possessor after the noun. Compare ὁ ἐμὸς φίλος, with an adjective before the noun, and φίλος σός ἐστιν, with a possessive adjective making a statement.",
          "τὸ γράμμα is a letter; ἡ ὁδός can be a road or journey; τὸ βούλευμα is a decision. Cyrus here is Cyrus the Younger. The source does not say that Xenophon joined the army as a paid soldier at this point."
        ],
        "display": [
          {
            "greek": "ὁ ξένος",
            "english": "guest friend"
          },
          {
            "greek": "ὁ φίλος μου",
            "english": "my friend"
          },
          {
            "greek": "ὁ ἐμὸς φίλος",
            "english": "my friend"
          },
          {
            "greek": "τὸ βούλευμα ἐμόν",
            "english": "the decision is mine"
          }
        ]
      }
    ]
  },
  "grammar": {
    "intro": "The fuller reading asks who calls whom, whose city matters, and how an adjective’s position changes the claim. Read the longer clauses for meaning with the blue glosses; practice the target forms below.",
    "objectives": [
      "Distinguish subject, object, and possessive forms of ἐγώ and σύ.",
      "Read μου and σου after a noun as possession.",
      "Match ἐμός and σός to the gender of the thing owned.",
      "Read οὗτος, αὕτη, and τοῦτο beside nouns and alone.",
      "Distinguish an attributive adjective from a predicate statement."
    ],
    "sections": [
      {
        "id": "personal-pronouns",
        "title": "1. Pronouns: Who Speaks, Who Is Addressed?",
        "practiceTopic": "personal-pronouns",
        "body": [
          "ἐγώ means “I,” and σύ means “you” when one person is addressed. The verb ending can already show the person, so Greek often uses these pronouns for emphasis or contrast: ἐγώ σε φίλον ποιήσω, “I will make you a friend.”",
          "The object forms are με (“me”) and σε (“you”). The short possessive forms μου (“my, of me”) and σου (“your, of you”) appear with nouns. These are forms of personal pronouns, not adjectives.",
          "In the reading, Proxenus says ἐγὼ δὲ σὲ ... φίλον ποιήσω, while Xenophon says ὁ ἐμὸς φίλος με καλεῖ. Follow the speaker and the case of each pronoun."
        ],
        "table": {
          "title": "Core first- and second-person forms",
          "headers": [
            "Job",
            "First person",
            "Second person"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "subject",
              "ἐγώ — I",
              "σύ — you"
            ],
            [
              "direct object",
              "με — me",
              "σε — you"
            ],
            [
              "possessor",
              "μου — my",
              "σου — your"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "In ὁ φίλος μου με καλεῖ, who receives the action?",
            "answer": "με means “me”; μου means “my” and belongs with φίλος."
          }
        ],
        "examples": [
          {
            "greek": "ἐγώ σε καλέω· σὺ με ἀκούεις.",
            "english": "I call you; you hear me."
          }
        ]
      },
      {
        "id": "genitive-possession",
        "title": "2. Possession with μου and σου",
        "practiceTopic": "genitive-possession",
        "body": [
          "The small genitive pronoun usually follows the noun it owns: ὁ φίλος μου, “my friend”; ἡ πόλις σου, “your city”; τὸ γράμμα σου, “your letter.” The noun keeps its own case according to its job in the sentence.",
          "The owner does not change the gender of the noun. Compare ὁ φίλος μου, ἡ ὁδός μου, and τὸ γράμμα μου: masculine, feminine, and neuter things can all belong to “me.”",
          "When reading, keep the possessor attached to the noun. In ὁ παλαιὸς φίλος μου, μου belongs to φίλος; in τὸ βούλευμά σου, σου belongs to βούλευμα."
        ],
        "table": {
          "title": "A noun plus its possessor",
          "headers": [
            "Greek",
            "Meaning",
            "Thing owned"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ὁ φίλος μου",
              "my friend",
              "masculine"
            ],
            [
              "ἡ ὁδός σου",
              "your road",
              "feminine"
            ],
            [
              "τὸ γράμμα μου",
              "my letter",
              "neuter"
            ],
            [
              "ἡ πόλις αὐτοῦ",
              "his city",
              "feminine"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Where does σου belong in ὁ φίλος σου?",
            "answer": "It follows φίλος and means “your”; together they form “your friend.”"
          }
        ],
        "examples": [
          {
            "greek": "ὁ φίλος μου τὸ γράμμα σου βλέπει.",
            "english": "My friend sees your letter."
          }
        ]
      },
      {
        "id": "possessive-adjectives",
        "title": "3. Possessive Adjectives Agree with the Noun",
        "practiceTopic": "possessive-adjectives",
        "body": [
          "Greek can also say “my” with ἐμός, ἐμή, ἐμόν and “your” with σός, σή, σόν. Unlike μου and σου, these are adjectives: their endings agree with the thing owned in gender, number, and case.",
          "The reading has ἡ ἐμὴ πόλις, “my city,” and τῆς σῆς πατρίδος, “your homeland.” The feminine adjectives agree with πόλις and πατρίς. The genitive σῆς agrees with the genitive πατρίδος. The owner may be a man, but the ending follows the noun.",
          "The article normally stands before an attributive possessive adjective: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα. Compare ὁ φίλος μου. In φίλος σός ἐστιν and τὸ βούλευμα ἐμόν, the possessive adjective is a predicate: “is your friend,” “is mine.”"
        ],
        "table": {
          "title": "Singular nominative possessive adjectives",
          "headers": [
            "Thing owned",
            "My",
            "Your"
          ],
          "greekColumns": [
            1,
            2
          ],
          "rows": [
            [
              "masculine friend",
              "ὁ ἐμὸς φίλος",
              "ὁ σὸς φίλος"
            ],
            [
              "feminine road",
              "ἡ ἐμὴ ὁδός",
              "ἡ σὴ ὁδός"
            ],
            [
              "neuter letter",
              "τὸ ἐμὸν γράμμα",
              "τὸ σὸν γράμμα"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "Why is ἐμή feminine in ἡ ἐμὴ πόλις?",
            "answer": "It agrees with the feminine noun πόλις, not with the sex of the owner."
          }
        ],
        "examples": [
          {
            "greek": "ἡ ἐμὴ πόλις Ἀθῆναί ἐστιν.",
            "english": "My city is Athens."
          }
        ]
      },
      {
        "id": "demonstratives",
        "title": "4. This Friend, This Road, This Letter",
        "practiceTopic": "demonstratives",
        "body": [
          "οὗτος, αὕτη, τοῦτο mean “this” for masculine, feminine, and neuter nouns. In the reading, οὗτος points to Cyrus; ταύτης τῆς ὁδοῦ means “of this journey.” The second is the feminine genitive form of αὕτη ἡ ὁδός.",
          "A demonstrative stands outside the article-plus-noun group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα. The sequence ὁ οὗτος φίλος is not the ordinary way to say “this friend.”",
          "The same forms can stand alone as pronouns. The reading has οὗτος, “this man,” pointing to Cyrus, and τούτου, “of this fact,” with ἐπιλανθάνονται. The latter refers to Cyrus’s aid to Sparta. Nominative examples in the table help you recognize the pattern; the reading itself uses genitive ταύτης."
        ],
        "table": {
          "title": "Point to the person, road, or letter",
          "headers": [
            "Gender",
            "Greek",
            "Meaning"
          ],
          "greekColumns": [
            1
          ],
          "rows": [
            [
              "masculine",
              "οὗτος ὁ φίλος",
              "this friend"
            ],
            [
              "feminine",
              "αὕτη ἡ ὁδός",
              "this journey"
            ],
            [
              "neuter",
              "τοῦτο τὸ γράμμα",
              "this letter"
            ],
            [
              "alone",
              "τοῦτο",
              "this fact"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What does τοῦτο point to in τοῦτο τὸ γράμμα?",
            "answer": "The neuter noun γράμμα, “letter.”"
          }
        ],
        "examples": [
          {
            "greek": "αὕτη ἡ ὁδὸς μακρά ἐστιν.",
            "english": "This journey is long."
          }
        ]
      },
      {
        "id": "adjective-placement",
        "title": "5. A Good Friend or a Friend Is Good?",
        "practiceTopic": "adjective-placement",
        "body": [
          "An adjective inside the article-and-noun group describes which person or thing: ὁ παλαιὸς φίλος, “the old friend”; ὁ ἀγαθὸς φίλος, “the good friend.” A second attributive pattern is ὁ φίλος ὁ παλαιός.",
          "An adjective outside that group can make a statement about the noun: ὁ φίλος ἀγαθός ἐστιν, “the friend is good.” The difference in position helps you distinguish description from a claim.",
          "In the reading, ὁ παλαιὸς φίλος μου identifies Proxenus, while φίλος σός ἐστιν says that Proxenus is “your friend.” Possessive adjectives can also be predicates: τὸ βούλευμα ἐμόν means “the decision is mine.”"
        ],
        "table": {
          "title": "Where the adjective stands",
          "headers": [
            "Greek",
            "Pattern",
            "Meaning"
          ],
          "greekColumns": [
            0
          ],
          "rows": [
            [
              "ὁ ἀγαθὸς φίλος",
              "attributive",
              "the good friend"
            ],
            [
              "ὁ φίλος ὁ ἀγαθός",
              "attributive",
              "the good friend"
            ],
            [
              "ὁ φίλος ἀγαθός ἐστιν",
              "predicate",
              "the friend is good"
            ],
            [
              "ἡ ἐμὴ πόλις",
              "attributive possession",
              "my city"
            ]
          ]
        },
        "checks": [
          {
            "prompt": "What changes between ὁ ἀγαθὸς φίλος and ὁ φίλος ἀγαθός ἐστιν?",
            "answer": "The first identifies a good friend; the second states that the friend is good."
          }
        ],
        "examples": [
          {
            "greek": "ὁ παλαιὸς φίλος μου με καλεῖ.",
            "english": "My old friend calls me."
          }
        ]
      }
    ],
    "summary": {
      "title": "Grammar Summary",
      "items": [
        "ἐγώ / με / μου = I / me / my; σύ / σε / σου = you / you / your.",
        "A possessor can follow the noun: ὁ φίλος μου, ἡ πόλις σου, τὸ γράμμα μου.",
        "A possessive adjective agrees with the thing owned: ὁ ἐμὸς φίλος, ἡ σὴ ὁδός, τὸ ἐμὸν γράμμα.",
        "Demonstratives stand outside the article group: οὗτος ὁ φίλος, αὕτη ἡ ὁδός, τοῦτο τὸ γράμμα.",
        "ὁ ἀγαθὸς φίλος identifies a good friend; ὁ φίλος ἀγαθός ἐστιν says that the friend is good."
      ]
    }
  },
  "culture": {
    "title": "Guest Friendship and Mercenaries",
    "banner": {
      "image": "assets/lesson-10-persian-guard.jpg",
      "alt": "Achaemenid limestone relief of the head of a Persian guard from Persepolis, with headdress, curled beard, bow, and quiver",
      "caption": "Head of a Persian guard, ca. 486–465 BCE, from Persepolis in Iran. This is an earlier Achaemenid relief, not a portrait of Cyrus the Younger.",
      "credit": "The Metropolitan Museum of Art, object 55.121.3. Public Domain; image unmodified.",
      "sourceUrl": "https://www.metmuseum.org/art/collection/search/324433",
      "licenseUrl": "https://www.metmuseum.org/about-the-met/policies-and-documents/open-access"
    },
    "body": [],
    "sections": [
      {
        "title": "Guest Friendship Across City Borders",
        "body": [
          "Proxenus was a Theban, while Xenophon was an Athenian. Xenophon calls him a longstanding ξένος (xenos), or guest friend. Guest friendship (xenia) joined people and households across cities through hospitality, trust, gifts, and help that could be returned over time. It offered a personal route to introductions far from home; Proxenus’s offer to bring Xenophon to Cyrus makes that relationship consequential.",
          "The name Proxenus resembles proxenos, a civic title for a person who helped visitors from another city. A name alone does not establish that this Proxenus held that office. Here the relevant bond is Xenophon’s stated guest friendship with him. The letter’s exact words and the exchange in the reading are adapted; the invitation and relationship are attested in Anabasis 3.1.4–5."
        ]
      },
      {
        "title": "Mercenaries after the Peloponnesian War",
        "body": [
          "The Peloponnesian War ended with Athens’s surrender in 404 BCE. Athens gave up most of its fleet; years of war had damaged farms and livelihoods and left many Greeks experienced in military service. Paid service abroad was older than this defeat, but opportunities for professional soldiers became more prominent in the fourth century. Persian rulers and their rivals could recruit Greek troops, especially heavy infantry, with pay and personal connections.",
          "Cyrus the Younger used both resources as he assembled the expedition later known through Xenophon’s account of the Ten Thousand. Proxenus, a commander in Cyrus’s force and Xenophon’s guest friend, invited Xenophon to meet the prince. Xenophon explicitly says that when he first went, he was neither a general, a captain, nor an ordinary soldier. His situation should not be made identical to that of every paid fighter. The invitation still placed him in a world where military service abroad could pull against loyalties to a Greek city.",
          "That tension explains Socrates’s warning: Cyrus had aided Sparta against Athens, and Athenians might view Xenophon’s friendship with him with suspicion. The Persian guard relief above is from Persepolis and predates these events. It shows neither Cyrus nor the Greek soldiers; it evokes the larger imperial setting into which the invitation led."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What was a guest friendship?",
        "answer": "A lasting personal bond across communities, sustained by reciprocal hospitality and help. Xenophon calls the Theban Proxenus his longstanding guest friend."
      },
      {
        "prompt": "Why did paid Greek military service abroad become more prominent after the war?",
        "answer": "Long war had damaged livelihoods and created experienced fighters, while rulers such as Cyrus could pay for Greek troops. Paid service already existed before 404 BCE."
      },
      {
        "prompt": "Was Xenophon already serving as an ordinary paid soldier when he accepted the invitation?",
        "answer": "No. In Anabasis 3.1.4 he says that he first went neither as general, captain, nor ordinary soldier."
      },
      {
        "prompt": "Why did Socrates worry about Xenophon joining Cyrus?",
        "answer": "Cyrus had aided Sparta against Athens; Athenians might accuse Xenophon for becoming his friend."
      },
      {
        "prompt": "What does the image show?",
        "answer": "An earlier Achaemenid Persian guard relief from Persepolis, not a portrait of Cyrus or an image of the Ten Thousand."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Distinguish ὁ φίλος (friend) from ὁ ξένος (guest friend).",
        "Read ὁ ἐμὸς φίλος, ὁ φίλος μου, and φίλος σός ἐστιν.",
        "Read ταύτης τῆς ὁδοῦ and τῆς σῆς πατρίδος as feminine genitives.",
        "Explain how Proxenus’s invitation connected guest friendship, military opportunity, and Athenian political risk."
      ]
    },
    "sources": [
      {
        "title": "Xenophon, Anabasis 2.1.10 (Proxenus the Theban)",
        "url": "https://www.greek-language.gr/digitalResources/ancient_greek/library/browse.html?page=2&text_id=112"
      },
      {
        "title": "Xenophon, Anabasis 3.1.4–5 (guest friendship, invitation, Socrates)",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Aabo%3Atlg%2C0032%2C006%3A3"
      },
      {
        "title": "Xenophon, Hellenica 2.2.20 (Athenian surrender)",
        "url": "https://www.livius.org/sources/content/xenophon-hellenica/xenophon-on-the-surrender-of-athens/"
      },
      {
        "title": "Oxford Handbook of Ancient Greek History, guest friendship",
        "url": "https://academic.oup.com/edited-volume/61673/chapter-abstract/548932058"
      },
      {
        "title": "Oxford Handbook of Ancient Greek History, mercenaries",
        "url": "https://academic.oup.com/edited-volume/61673/chapter-abstract/549654703"
      },
      {
        "title": "Cambridge University Press, Contextualizing Paid Military Service",
        "url": "https://www.cambridge.org/core/books/soldiers-wages-and-the-hellenistic-economies/contextualizing-paid-military-service/AA1069CC9A40B382ABA6078274303C3E"
      },
      {
        "title": "The Metropolitan Museum of Art, Head of a Persian guard",
        "url": "https://www.metmuseum.org/art/collection/search/324433"
      }
    ]
  },
  "enrichment": [],
  "activities": {
    "vocab-flashcards": {
      "title": "Lesson 10 Vocabulary Flashcards",
      "cards": [
        {
          "prompt": "ὁ φίλος",
          "answer": "friend"
        },
        {
          "prompt": "ὁ ξένος",
          "answer": "guest friend"
        },
        {
          "prompt": "ἡ πόλις",
          "answer": "city, city-state"
        },
        {
          "prompt": "ἡ πατρίς",
          "answer": "homeland"
        },
        {
          "prompt": "ὁ Κῦρος",
          "answer": "Cyrus the Younger"
        },
        {
          "prompt": "ὁ Προξένος",
          "answer": "Proxenus"
        },
        {
          "prompt": "ὁ Θηβαῖος",
          "answer": "Theban"
        },
        {
          "prompt": "τὸ βούλευμα",
          "answer": "decision"
        },
        {
          "prompt": "ὁ πόλεμος",
          "answer": "war"
        },
        {
          "prompt": "τὸ γράμμα",
          "answer": "letter"
        },
        {
          "prompt": "ἡ ὁδός",
          "answer": "road, journey"
        },
        {
          "prompt": "γράφω",
          "answer": "write"
        },
        {
          "prompt": "καλέω",
          "answer": "call, invite"
        },
        {
          "prompt": "ἐρωτάω",
          "answer": "ask, consult"
        },
        {
          "prompt": "πορεύομαι",
          "answer": "go, travel"
        },
        {
          "prompt": "ἀναγιγνώσκω",
          "answer": "read"
        },
        {
          "prompt": "ἀποκρίνομαι",
          "answer": "reply"
        },
        {
          "prompt": "ἐγώ / με / μου",
          "answer": "I / me / my"
        },
        {
          "prompt": "σύ / σε / σου",
          "answer": "you / you / your"
        },
        {
          "prompt": "ἐμός, ἐμή, ἐμόν",
          "answer": "my"
        },
        {
          "prompt": "σός, σή, σόν",
          "answer": "your"
        },
        {
          "prompt": "οὗτος, αὕτη, τοῦτο",
          "answer": "this"
        },
        {
          "prompt": "παλαιός, παλαιά, παλαιόν",
          "answer": "old, longstanding"
        },
        {
          "prompt": "πιστός, πιστή, πιστόν",
          "answer": "loyal"
        }
      ]
    },
    "vocab-practice": {
      "title": "Lesson 10 Vocabulary Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "threshold": 80,
      "instructions": "Practice required Lesson 10 words in short rounds. Reading-only words remain glossed.",
      "questions": [
        {
          "id": "lesson-10-vocab-1-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ φίλος mean?",
          "choices": [
            {
              "text": "I / me / my",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "friend",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "city, city-state",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-1-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “friend”?",
          "choices": [
            {
              "text": "σύ / σε / σου",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "ὁ φίλος",
              "correct": true,
              "feedback": "Correct: ὁ φίλος means friend."
            },
            {
              "text": "ἡ πατρίς",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            },
            {
              "text": "γράφω",
              "correct": false,
              "feedback": "Review: ὁ φίλος means friend."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-2-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ ξένος mean?",
          "choices": [
            {
              "text": "write",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "you / you / your",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "guest friend",
              "correct": true,
              "feedback": "Correct: ὁ ξένος means guest friend."
            },
            {
              "text": "homeland",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-2-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “guest friend”?",
          "choices": [
            {
              "text": "καλέω",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "ἐμός, ἐμή, ἐμόν",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "ὁ ξένος",
              "correct": true,
              "feedback": "Correct: ὁ ξένος means guest friend."
            },
            {
              "text": "ὁ πόλεμος",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-3-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ πόλις mean?",
          "choices": [
            {
              "text": "war",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "call, invite",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "my",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "city, city-state",
              "correct": true,
              "feedback": "Correct: ἡ πόλις means city, city-state."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-3-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “city, city-state”?",
          "choices": [
            {
              "text": "τὸ γράμμα",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "σός, σή, σόν",
              "correct": false,
              "feedback": "Review: ἡ πόλις means city, city-state."
            },
            {
              "text": "ἡ πόλις",
              "correct": true,
              "feedback": "Correct: ἡ πόλις means city, city-state."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-4-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ πατρίς mean?",
          "choices": [
            {
              "text": "homeland",
              "correct": true,
              "feedback": "Correct: ἡ πατρίς means homeland."
            },
            {
              "text": "letter",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "ask, consult",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "your",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-4-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “homeland”?",
          "choices": [
            {
              "text": "ἡ πατρίς",
              "correct": true,
              "feedback": "Correct: ἡ πατρίς means homeland."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "ἐγώ / με / μου",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "οὗτος, αὕτη, τοῦτο",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-5-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ὁ πόλεμος mean?",
          "choices": [
            {
              "text": "this",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            },
            {
              "text": "war",
              "correct": true,
              "feedback": "Correct: ὁ πόλεμος means war."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            },
            {
              "text": "I / me / my",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-5-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “war”?",
          "choices": [
            {
              "text": "παλαιός, παλαιά, παλαιόν",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            },
            {
              "text": "ὁ πόλεμος",
              "correct": true,
              "feedback": "Correct: ὁ πόλεμος means war."
            },
            {
              "text": "γράφω",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            },
            {
              "text": "σύ / σε / σου",
              "correct": false,
              "feedback": "Review: ὁ πόλεμος means war."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-6-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does τὸ γράμμα mean?",
          "choices": [
            {
              "text": "you / you / your",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "old, longstanding",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "letter",
              "correct": true,
              "feedback": "Correct: τὸ γράμμα means letter."
            },
            {
              "text": "write",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-6-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “letter”?",
          "choices": [
            {
              "text": "ἐμός, ἐμή, ἐμόν",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "τὸ γράμμα",
              "correct": true,
              "feedback": "Correct: τὸ γράμμα means letter."
            },
            {
              "text": "καλέω",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-7-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἡ ὁδός mean?",
          "choices": [
            {
              "text": "call, invite",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "my",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "road, journey",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-7-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “road, journey”?",
          "choices": [
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "σός, σή, σόν",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "ὁ ξένος",
              "correct": false,
              "feedback": "Review: ἡ ὁδός means road, journey."
            },
            {
              "text": "ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: ἡ ὁδός means road, journey."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-8-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does γράφω mean?",
          "choices": [
            {
              "text": "write",
              "correct": true,
              "feedback": "Correct: γράφω means write."
            },
            {
              "text": "ask, consult",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "your",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "guest friend",
              "correct": false,
              "feedback": "Review: γράφω means write."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-8-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “write”?",
          "choices": [
            {
              "text": "γράφω",
              "correct": true,
              "feedback": "Correct: γράφω means write."
            },
            {
              "text": "ἐγώ / με / μου",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "οὗτος, αὕτη, τοῦτο",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "ἡ πόλις",
              "correct": false,
              "feedback": "Review: γράφω means write."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-9-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does καλέω mean?",
          "choices": [
            {
              "text": "city, city-state",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "call, invite",
              "correct": true,
              "feedback": "Correct: καλέω means call, invite."
            },
            {
              "text": "I / me / my",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "this",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-9-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “call, invite”?",
          "choices": [
            {
              "text": "ἡ πατρίς",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "καλέω",
              "correct": true,
              "feedback": "Correct: καλέω means call, invite."
            },
            {
              "text": "σύ / σε / σου",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "παλαιός, παλαιά, παλαιόν",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-10-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "old, longstanding",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            },
            {
              "text": "homeland",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            },
            {
              "text": "ask, consult",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask, consult."
            },
            {
              "text": "you / you / your",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-10-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “ask, consult”?",
          "choices": [
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            },
            {
              "text": "ὁ πόλεμος",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            },
            {
              "text": "ἐρωτάω",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask, consult."
            },
            {
              "text": "ἐμός, ἐμή, ἐμόν",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask, consult."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-11-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐγώ / με / μου mean?",
          "choices": [
            {
              "text": "my",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "war",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "I / me / my",
              "correct": true,
              "feedback": "Correct: ἐγώ / με / μου means I / me / my."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-11-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “I / me / my”?",
          "choices": [
            {
              "text": "σός, σή, σόν",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "ὁ ξένος",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "τὸ γράμμα",
              "correct": false,
              "feedback": "Review: ἐγώ / με / μου means I / me / my."
            },
            {
              "text": "ἐγώ / με / μου",
              "correct": true,
              "feedback": "Correct: ἐγώ / με / μου means I / me / my."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-12-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σύ / σε / σου mean?",
          "choices": [
            {
              "text": "you / you / your",
              "correct": true,
              "feedback": "Correct: σύ / σε / σου means you / you / your."
            },
            {
              "text": "your",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            },
            {
              "text": "guest friend",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            },
            {
              "text": "letter",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-12-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “you / you / your”?",
          "choices": [
            {
              "text": "σύ / σε / σου",
              "correct": true,
              "feedback": "Correct: σύ / σε / σου means you / you / your."
            },
            {
              "text": "οὗτος, αὕτη, τοῦτο",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            },
            {
              "text": "ἡ πόλις",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: σύ / σε / σου means you / you / your."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-13-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does ἐμός, ἐμή, ἐμόν mean?",
          "choices": [
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "my",
              "correct": true,
              "feedback": "Correct: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "this",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "city, city-state",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-13-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “my”?",
          "choices": [
            {
              "text": "γράφω",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "ἐμός, ἐμή, ἐμόν",
              "correct": true,
              "feedback": "Correct: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "παλαιός, παλαιά, παλαιόν",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "ἡ πατρίς",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-14-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does σός, σή, σόν mean?",
          "choices": [
            {
              "text": "homeland",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            },
            {
              "text": "write",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            },
            {
              "text": "your",
              "correct": true,
              "feedback": "Correct: σός, σή, σόν means your."
            },
            {
              "text": "old, longstanding",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-14-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “your”?",
          "choices": [
            {
              "text": "ὁ πόλεμος",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            },
            {
              "text": "καλέω",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            },
            {
              "text": "σός, σή, σόν",
              "correct": true,
              "feedback": "Correct: σός, σή, σόν means your."
            },
            {
              "text": "ὁ φίλος",
              "correct": false,
              "feedback": "Review: σός, σή, σόν means your."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-15-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does οὗτος, αὕτη, τοῦτο mean?",
          "choices": [
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "war",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "call, invite",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "this",
              "correct": true,
              "feedback": "Correct: οὗτος, αὕτη, τοῦτο means this."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-15-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “this”?",
          "choices": [
            {
              "text": "ὁ ξένος",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "τὸ γράμμα",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "ἐρωτάω",
              "correct": false,
              "feedback": "Review: οὗτος, αὕτη, τοῦτο means this."
            },
            {
              "text": "οὗτος, αὕτη, τοῦτο",
              "correct": true,
              "feedback": "Correct: οὗτος, αὕτη, τοῦτο means this."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-16-meaning",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "What does παλαιός, παλαιά, παλαιόν mean?",
          "choices": [
            {
              "text": "old, longstanding",
              "correct": true,
              "feedback": "Correct: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "guest friend",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "letter",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "ask, consult",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            }
          ]
        },
        {
          "id": "lesson-10-vocab-16-form",
          "type": "multiple-choice",
          "topic": "vocabulary",
          "category": "Vocabulary",
          "prompt": "Which Greek entry means “old, longstanding”?",
          "choices": [
            {
              "text": "παλαιός, παλαιά, παλαιόν",
              "correct": true,
              "feedback": "Correct: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "ἡ πόλις",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "ἡ ὁδός",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "ἐγώ / με / μου",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            }
          ]
        }
      ]
    },
    "grammar-flashcards": {
      "title": "Lesson 10 Grammar Flashcards",
      "cards": [
        {
          "prompt": "ἐγώ / με / μου",
          "answer": "I / me / my"
        },
        {
          "prompt": "σύ / σε / σου",
          "answer": "you / you / your"
        },
        {
          "prompt": "ὁ φίλος μου",
          "answer": "my friend"
        },
        {
          "prompt": "ἡ σὴ ὁδός",
          "answer": "your journey"
        },
        {
          "prompt": "τοῦτο τὸ γράμμα",
          "answer": "this letter"
        },
        {
          "prompt": "ὁ ἀγαθὸς φίλος",
          "answer": "the good friend"
        },
        {
          "prompt": "ὁ φίλος ἀγαθός ἐστιν",
          "answer": "the friend is good"
        }
      ]
    },
    "topic-practice": {
      "title": "Lesson 10 Grammar Topic Practice",
      "practiceMode": "rounds",
      "roundSize": 10,
      "instructions": "Choose a topic. Practice gives immediate feedback and does not gate the page.",
      "questions": [
        {
          "id": "lesson-10-practice-001",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is τὸ γράμμα?",
          "choices": [
            {
              "text": "a war",
              "correct": false,
              "feedback": "Review: γράμμα is a letter."
            },
            {
              "text": "a letter",
              "correct": true,
              "feedback": "Correct: γράμμα is a letter."
            },
            {
              "text": "a city",
              "correct": false,
              "feedback": "Review: γράμμα is a letter."
            },
            {
              "text": "a road",
              "correct": false,
              "feedback": "Review: γράμμα is a letter."
            }
          ]
        },
        {
          "id": "lesson-10-practice-002",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What can ἡ ὁδός mean here?",
          "choices": [
            {
              "text": "a homeland",
              "correct": false,
              "feedback": "Review: ὁδός can name the journey."
            },
            {
              "text": "a guard",
              "correct": false,
              "feedback": "Review: ὁδός can name the journey."
            },
            {
              "text": "a road or journey",
              "correct": true,
              "feedback": "Correct: ὁδός can name the journey."
            },
            {
              "text": "a letter",
              "correct": false,
              "feedback": "Review: ὁδός can name the journey."
            }
          ]
        },
        {
          "id": "lesson-10-practice-003",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is ἡ πατρίς?",
          "choices": [
            {
              "text": "a friend",
              "correct": false,
              "feedback": "Review: πατρίς is a homeland."
            },
            {
              "text": "a risk",
              "correct": false,
              "feedback": "Review: πατρίς is a homeland."
            },
            {
              "text": "an invitation",
              "correct": false,
              "feedback": "Review: πατρίς is a homeland."
            },
            {
              "text": "a homeland",
              "correct": true,
              "feedback": "Correct: πατρίς is a homeland."
            }
          ]
        },
        {
          "id": "lesson-10-practice-004",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ὁ ξένος mean in this reading?",
          "choices": [
            {
              "text": "guest friend",
              "correct": true,
              "feedback": "Correct: ξένος names an established guest friendship."
            },
            {
              "text": "enemy",
              "correct": false,
              "feedback": "Review: ξένος names an established guest friendship."
            },
            {
              "text": "hired soldier",
              "correct": false,
              "feedback": "Review: ξένος names an established guest friendship."
            },
            {
              "text": "stranger only",
              "correct": false,
              "feedback": "Review: ξένος names an established guest friendship."
            }
          ]
        },
        {
          "id": "lesson-10-practice-005",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does καλέω mean?",
          "choices": [
            {
              "text": "I decide",
              "correct": false,
              "feedback": "Review: καλέω means call or invite."
            },
            {
              "text": "I call or invite",
              "correct": true,
              "feedback": "Correct: καλέω means call or invite."
            },
            {
              "text": "I read",
              "correct": false,
              "feedback": "Review: καλέω means call or invite."
            },
            {
              "text": "I write",
              "correct": false,
              "feedback": "Review: καλέω means call or invite."
            }
          ]
        },
        {
          "id": "lesson-10-practice-006",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does γράφω mean?",
          "choices": [
            {
              "text": "I ask",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "I hear",
              "correct": false,
              "feedback": "Review: γράφω means write."
            },
            {
              "text": "I write",
              "correct": true,
              "feedback": "Correct: γράφω means write."
            },
            {
              "text": "I go",
              "correct": false,
              "feedback": "Review: γράφω means write."
            }
          ]
        },
        {
          "id": "lesson-10-practice-007",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἐρωτάω mean?",
          "choices": [
            {
              "text": "I arrive",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask."
            },
            {
              "text": "I accuse",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask."
            },
            {
              "text": "I forget",
              "correct": false,
              "feedback": "Review: ἐρωτάω means ask."
            },
            {
              "text": "I ask or consult",
              "correct": true,
              "feedback": "Correct: ἐρωτάω means ask."
            }
          ]
        },
        {
          "id": "lesson-10-practice-008",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does ἀναγιγνώσκω mean?",
          "choices": [
            {
              "text": "I read",
              "correct": true,
              "feedback": "Correct: ἀναγιγνώσκω means read."
            },
            {
              "text": "I send",
              "correct": false,
              "feedback": "Review: ἀναγιγνώσκω means read."
            },
            {
              "text": "I remember",
              "correct": false,
              "feedback": "Review: ἀναγιγνώσκω means read."
            },
            {
              "text": "I walk",
              "correct": false,
              "feedback": "Review: ἀναγιγνώσκω means read."
            }
          ]
        },
        {
          "id": "lesson-10-practice-009",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Who is Proxenus in this reading?",
          "choices": [
            {
              "text": "Apollo’s priest",
              "correct": false,
              "feedback": "Review: Proxenus was Theban and Xenophon’s guest friend."
            },
            {
              "text": "Xenophon’s Theban guest friend",
              "correct": true,
              "feedback": "Correct: Proxenus was Theban and Xenophon’s guest friend."
            },
            {
              "text": "the Persian king",
              "correct": false,
              "feedback": "Review: Proxenus was Theban and Xenophon’s guest friend."
            },
            {
              "text": "an Athenian accuser",
              "correct": false,
              "feedback": "Review: Proxenus was Theban and Xenophon’s guest friend."
            }
          ]
        },
        {
          "id": "lesson-10-practice-010",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "Who is Cyrus in this reading?",
          "choices": [
            {
              "text": "an Athenian general",
              "correct": false,
              "feedback": "Review: The invitation concerns Cyrus the Younger."
            },
            {
              "text": "a Delphic priest",
              "correct": false,
              "feedback": "Review: The invitation concerns Cyrus the Younger."
            },
            {
              "text": "Cyrus the Younger",
              "correct": true,
              "feedback": "Correct: The invitation concerns Cyrus the Younger."
            },
            {
              "text": "Cyrus the Great",
              "correct": false,
              "feedback": "Review: The invitation concerns Cyrus the Younger."
            }
          ]
        },
        {
          "id": "lesson-10-practice-011",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What is ὁ πόλεμος?",
          "choices": [
            {
              "text": "the letter",
              "correct": false,
              "feedback": "Review: πόλεμος means war."
            },
            {
              "text": "the friend",
              "correct": false,
              "feedback": "Review: πόλεμος means war."
            },
            {
              "text": "the city",
              "correct": false,
              "feedback": "Review: πόλεμος means war."
            },
            {
              "text": "the war",
              "correct": true,
              "feedback": "Correct: πόλεμος means war."
            }
          ]
        },
        {
          "id": "lesson-10-practice-012",
          "type": "multiple-choice",
          "topic": "word-study",
          "category": "Grammar",
          "prompt": "What does παλαιός mean of a friend here?",
          "choices": [
            {
              "text": "old or longstanding",
              "correct": true,
              "feedback": "Correct: παλαιός describes an old friend."
            },
            {
              "text": "wealthy",
              "correct": false,
              "feedback": "Review: παλαιός describes an old friend."
            },
            {
              "text": "angry",
              "correct": false,
              "feedback": "Review: παλαιός describes an old friend."
            },
            {
              "text": "foreign",
              "correct": false,
              "feedback": "Review: παλαιός describes an old friend."
            }
          ]
        },
        {
          "id": "lesson-10-practice-013",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which pronoun means “I” as subject?",
          "choices": [
            {
              "text": "σε",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            },
            {
              "text": "ἐγώ",
              "correct": true,
              "feedback": "Correct: ἐγώ is the subject form."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            }
          ]
        },
        {
          "id": "lesson-10-practice-014",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which short form means “me” as object?",
          "choices": [
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: με is the object form."
            },
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: με is the object form."
            },
            {
              "text": "με",
              "correct": true,
              "feedback": "Correct: με is the object form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: με is the object form."
            }
          ]
        },
        {
          "id": "lesson-10-practice-015",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which pronoun means “you” as subject?",
          "choices": [
            {
              "text": "σε",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "σύ",
              "correct": true,
              "feedback": "Correct: σύ is the subject form."
            }
          ]
        },
        {
          "id": "lesson-10-practice-016",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which short form means “you” as object?",
          "choices": [
            {
              "text": "σε",
              "correct": true,
              "feedback": "Correct: σε is the object form."
            },
            {
              "text": "σύ",
              "correct": false,
              "feedback": "Review: σε is the object form."
            },
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: σε is the object form."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: σε is the object form."
            }
          ]
        },
        {
          "id": "lesson-10-practice-017",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of σε in ἐγώ σε καλέω?",
          "choices": [
            {
              "text": "adjective",
              "correct": false,
              "feedback": "Review: σε is the person called."
            },
            {
              "text": "direct object",
              "correct": true,
              "feedback": "Correct: σε is the person called."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: σε is the person called."
            },
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: σε is the person called."
            }
          ]
        },
        {
          "id": "lesson-10-practice-018",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of με in ὁ φίλος με καλεῖ?",
          "choices": [
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: με is the person called."
            },
            {
              "text": "place name",
              "correct": false,
              "feedback": "Review: με is the person called."
            },
            {
              "text": "direct object",
              "correct": true,
              "feedback": "Correct: με is the person called."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: με is the person called."
            }
          ]
        },
        {
          "id": "lesson-10-practice-019",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of ἐγώ in ἐγώ σε καλέω?",
          "choices": [
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: ἐγώ names the speaker who acts."
            },
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: ἐγώ names the speaker who acts."
            },
            {
              "text": "article",
              "correct": false,
              "feedback": "Review: ἐγώ names the speaker who acts."
            },
            {
              "text": "subject",
              "correct": true,
              "feedback": "Correct: ἐγώ names the speaker who acts."
            }
          ]
        },
        {
          "id": "lesson-10-practice-020",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of σύ in σὺ με ἀκούεις?",
          "choices": [
            {
              "text": "subject",
              "correct": true,
              "feedback": "Correct: σύ names the person addressed as subject."
            },
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            },
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            },
            {
              "text": "adverb",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            }
          ]
        },
        {
          "id": "lesson-10-practice-021",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which pair gives first-person subject and object?",
          "choices": [
            {
              "text": "μου / με",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            },
            {
              "text": "ἐγώ / με",
              "correct": true,
              "feedback": "Correct: ἐγώ is I; με is me."
            },
            {
              "text": "σύ / σε",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            },
            {
              "text": "ἐγώ / σου",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            }
          ]
        },
        {
          "id": "lesson-10-practice-022",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which pair gives second-person subject and object?",
          "choices": [
            {
              "text": "σύ / μου",
              "correct": false,
              "feedback": "Review: σύ is you as subject; σε is you as object."
            },
            {
              "text": "σε / σου",
              "correct": false,
              "feedback": "Review: σύ is you as subject; σε is you as object."
            },
            {
              "text": "σύ / σε",
              "correct": true,
              "feedback": "Correct: σύ is you as subject; σε is you as object."
            },
            {
              "text": "ἐγώ / με",
              "correct": false,
              "feedback": "Review: σύ is you as subject; σε is you as object."
            }
          ]
        },
        {
          "id": "lesson-10-practice-023",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "In ἐγώ σε φίλον ποιήσω, who is made a friend?",
          "choices": [
            {
              "text": "the speaker",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            },
            {
              "text": "Athens",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            },
            {
              "text": "the person addressed",
              "correct": true,
              "feedback": "Correct: σε is the person addressed."
            }
          ]
        },
        {
          "id": "lesson-10-practice-024",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which form in the reading means emphatic “me” after πρός?",
          "choices": [
            {
              "text": "ἐμέ",
              "correct": true,
              "feedback": "Correct: πρὸς ἐμέ means to me."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: πρὸς ἐμέ means to me."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: πρὸς ἐμέ means to me."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: πρὸς ἐμέ means to me."
            }
          ]
        },
        {
          "id": "lesson-10-practice-025",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ὁ φίλος μου?",
          "choices": [
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "my friend",
              "correct": true,
              "feedback": "Correct: μου means my."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "his friend",
              "correct": false,
              "feedback": "Review: μου means my."
            }
          ]
        },
        {
          "id": "lesson-10-practice-026",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ὁ φίλος σου?",
          "choices": [
            {
              "text": "his friend",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "a good friend",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "your friend",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my friend",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-practice-027",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is τὸ γράμμα μου?",
          "choices": [
            {
              "text": "your letter",
              "correct": false,
              "feedback": "Review: μου gives the possessor."
            },
            {
              "text": "this letter",
              "correct": false,
              "feedback": "Review: μου gives the possessor."
            },
            {
              "text": "his letter",
              "correct": false,
              "feedback": "Review: μου gives the possessor."
            },
            {
              "text": "my letter",
              "correct": true,
              "feedback": "Correct: μου gives the possessor."
            }
          ]
        },
        {
          "id": "lesson-10-practice-028",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is τὸ γράμμα σου?",
          "choices": [
            {
              "text": "your letter",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my letter",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "his letter",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "that letter",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-practice-029",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ἡ πόλις μου?",
          "choices": [
            {
              "text": "this city",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "my city",
              "correct": true,
              "feedback": "Correct: μου means my."
            },
            {
              "text": "your city",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "his city",
              "correct": false,
              "feedback": "Review: μου means my."
            }
          ]
        },
        {
          "id": "lesson-10-practice-030",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ἡ πόλις σου?",
          "choices": [
            {
              "text": "his city",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "their city",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "your city",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my city",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-practice-031",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "Where does μου usually stand in ὁ φίλος μου?",
          "choices": [
            {
              "text": "before the article",
              "correct": false,
              "feedback": "Review: The short possessor follows φίλος."
            },
            {
              "text": "inside the verb",
              "correct": false,
              "feedback": "Review: The short possessor follows φίλος."
            },
            {
              "text": "after the sentence",
              "correct": false,
              "feedback": "Review: The short possessor follows φίλος."
            },
            {
              "text": "after the noun",
              "correct": true,
              "feedback": "Correct: The short possessor follows φίλος."
            }
          ]
        },
        {
          "id": "lesson-10-practice-032",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "Which word is the possessor in ὁ φίλος σου?",
          "choices": [
            {
              "text": "σου",
              "correct": true,
              "feedback": "Correct: σου identifies whose friend."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            },
            {
              "text": "φίλος",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            },
            {
              "text": "none",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            }
          ]
        },
        {
          "id": "lesson-10-practice-033",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What gender is ὁ φίλος μου?",
          "choices": [
            {
              "text": "plural only",
              "correct": false,
              "feedback": "Review: The noun φίλος is masculine; the owner form does not change it."
            },
            {
              "text": "masculine",
              "correct": true,
              "feedback": "Correct: The noun φίλος is masculine; the owner form does not change it."
            },
            {
              "text": "feminine",
              "correct": false,
              "feedback": "Review: The noun φίλος is masculine; the owner form does not change it."
            },
            {
              "text": "neuter",
              "correct": false,
              "feedback": "Review: The noun φίλος is masculine; the owner form does not change it."
            }
          ]
        },
        {
          "id": "lesson-10-practice-034",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What gender is ἡ ὁδός μου?",
          "choices": [
            {
              "text": "neuter",
              "correct": false,
              "feedback": "Review: ὁδός is feminine."
            },
            {
              "text": "plural only",
              "correct": false,
              "feedback": "Review: ὁδός is feminine."
            },
            {
              "text": "feminine",
              "correct": true,
              "feedback": "Correct: ὁδός is feminine."
            },
            {
              "text": "masculine",
              "correct": false,
              "feedback": "Review: ὁδός is feminine."
            }
          ]
        },
        {
          "id": "lesson-10-practice-035",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "Which phrase means “his city”?",
          "choices": [
            {
              "text": "ἡ πόλις μου",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            },
            {
              "text": "ἡ πόλις σου",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            },
            {
              "text": "αὕτη ἡ πόλις",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            },
            {
              "text": "ἡ πόλις αὐτοῦ",
              "correct": true,
              "feedback": "Correct: αὐτοῦ is his."
            }
          ]
        },
        {
          "id": "lesson-10-practice-036",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "In ὁ φίλος μου με καλεῖ, which form means “my”?",
          "choices": [
            {
              "text": "μου",
              "correct": true,
              "feedback": "Correct: μου marks possession; με is the object."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            },
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            },
            {
              "text": "καλεῖ",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            }
          ]
        },
        {
          "id": "lesson-10-practice-037",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “my friend” with an adjective?",
          "choices": [
            {
              "text": "ὁ σὸς φίλος",
              "correct": false,
              "feedback": "Review: ἐμός agrees with masculine φίλος."
            },
            {
              "text": "ὁ ἐμὸς φίλος",
              "correct": true,
              "feedback": "Correct: ἐμός agrees with masculine φίλος."
            },
            {
              "text": "ἡ ἐμὴ φίλος",
              "correct": false,
              "feedback": "Review: ἐμός agrees with masculine φίλος."
            },
            {
              "text": "τὸ ἐμὸν φίλος",
              "correct": false,
              "feedback": "Review: ἐμός agrees with masculine φίλος."
            }
          ]
        },
        {
          "id": "lesson-10-practice-038",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “my road”?",
          "choices": [
            {
              "text": "τὸ ἐμὸν ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ σὴ ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": true,
              "feedback": "Correct: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ὁ ἐμὸς ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-practice-039",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “my letter”?",
          "choices": [
            {
              "text": "ὁ ἐμὸς γράμμα",
              "correct": false,
              "feedback": "Review: ἐμόν agrees with neuter γράμμα."
            },
            {
              "text": "ἡ ἐμὴ γράμμα",
              "correct": false,
              "feedback": "Review: ἐμόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ σὸν γράμμα",
              "correct": false,
              "feedback": "Review: ἐμόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ ἐμὸν γράμμα",
              "correct": true,
              "feedback": "Correct: ἐμόν agrees with neuter γράμμα."
            }
          ]
        },
        {
          "id": "lesson-10-practice-040",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “your friend” with an adjective?",
          "choices": [
            {
              "text": "ὁ σὸς φίλος",
              "correct": true,
              "feedback": "Correct: σός agrees with masculine φίλος."
            },
            {
              "text": "ἡ σὴ φίλος",
              "correct": false,
              "feedback": "Review: σός agrees with masculine φίλος."
            },
            {
              "text": "τὸ σὸν φίλος",
              "correct": false,
              "feedback": "Review: σός agrees with masculine φίλος."
            },
            {
              "text": "ὁ ἐμὸς φίλος",
              "correct": false,
              "feedback": "Review: σός agrees with masculine φίλος."
            }
          ]
        },
        {
          "id": "lesson-10-practice-041",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “your road”?",
          "choices": [
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ σὴ ὁδός",
              "correct": true,
              "feedback": "Correct: σή agrees with feminine ὁδός."
            },
            {
              "text": "ὁ σὸς ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "τὸ σὸν ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-practice-042",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “your letter”?",
          "choices": [
            {
              "text": "ἡ σὴ γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ ἐμὸν γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ σὸν γράμμα",
              "correct": true,
              "feedback": "Correct: σόν agrees with neuter γράμμα."
            },
            {
              "text": "ὁ σὸς γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            }
          ]
        },
        {
          "id": "lesson-10-practice-043",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Why is ἐμή feminine in ἡ ἐμὴ πόλις?",
          "choices": [
            {
              "text": "The owner is a woman.",
              "correct": false,
              "feedback": "Review: Possessive adjectives agree with the thing owned."
            },
            {
              "text": "It is a plural form.",
              "correct": false,
              "feedback": "Review: Possessive adjectives agree with the thing owned."
            },
            {
              "text": "It is an object pronoun.",
              "correct": false,
              "feedback": "Review: Possessive adjectives agree with the thing owned."
            },
            {
              "text": "It agrees with πόλις.",
              "correct": true,
              "feedback": "Correct: Possessive adjectives agree with the thing owned."
            }
          ]
        },
        {
          "id": "lesson-10-practice-044",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "What does τῆς σῆς πατρίδος mean?",
          "choices": [
            {
              "text": "of your homeland",
              "correct": true,
              "feedback": "Correct: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "of my homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "his homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "this homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            }
          ]
        },
        {
          "id": "lesson-10-practice-045",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which adjective form agrees with feminine πόλις?",
          "choices": [
            {
              "text": "ἐμοῦ",
              "correct": false,
              "feedback": "Review: ἐμή is feminine nominative singular."
            },
            {
              "text": "ἐμή",
              "correct": true,
              "feedback": "Correct: ἐμή is feminine nominative singular."
            },
            {
              "text": "ἐμός",
              "correct": false,
              "feedback": "Review: ἐμή is feminine nominative singular."
            },
            {
              "text": "ἐμόν",
              "correct": false,
              "feedback": "Review: ἐμή is feminine nominative singular."
            }
          ]
        },
        {
          "id": "lesson-10-practice-046",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which adjective form agrees with neuter γράμμα?",
          "choices": [
            {
              "text": "σή",
              "correct": false,
              "feedback": "Review: σόν is neuter nominative singular."
            },
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: σόν is neuter nominative singular."
            },
            {
              "text": "σόν",
              "correct": true,
              "feedback": "Correct: σόν is neuter nominative singular."
            },
            {
              "text": "σός",
              "correct": false,
              "feedback": "Review: σόν is neuter nominative singular."
            }
          ]
        },
        {
          "id": "lesson-10-practice-047",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which pair both means “my friend”?",
          "choices": [
            {
              "text": "ὁ φίλος σου / ὁ σὸς φίλος",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            },
            {
              "text": "ὁ φίλος μου / ὁ σὸς φίλος",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            },
            {
              "text": "ὁ ἐμὸς φίλος / ὁ φίλος σου",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            },
            {
              "text": "ὁ φίλος μου / ὁ ἐμὸς φίλος",
              "correct": true,
              "feedback": "Correct: Both expressions identify my friend."
            }
          ]
        },
        {
          "id": "lesson-10-practice-048",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "What controls the ending of σός, σή, σόν?",
          "choices": [
            {
              "text": "the noun describing the thing owned",
              "correct": true,
              "feedback": "Correct: The ending agrees with the noun."
            },
            {
              "text": "the owner’s sex",
              "correct": false,
              "feedback": "Review: The ending agrees with the noun."
            },
            {
              "text": "the verb tense",
              "correct": false,
              "feedback": "Review: The ending agrees with the noun."
            },
            {
              "text": "the next preposition",
              "correct": false,
              "feedback": "Review: The ending agrees with the noun."
            }
          ]
        },
        {
          "id": "lesson-10-practice-049",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which phrase means “this friend”?",
          "choices": [
            {
              "text": "ὁ οὗτος φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "οὗτος ὁ φίλος",
              "correct": true,
              "feedback": "Correct: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "αὕτη ἡ φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "τοῦτο τὸ φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-050",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which phrase means “this journey”?",
          "choices": [
            {
              "text": "τοῦτο τὸ ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "ἡ αὕτη ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "αὕτη ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "οὗτος ὁ ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-practice-051",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which phrase means “this letter”?",
          "choices": [
            {
              "text": "οὗτος ὁ γράμμα",
              "correct": false,
              "feedback": "Review: τοῦτο agrees with neuter γράμμα."
            },
            {
              "text": "αὕτη ἡ γράμμα",
              "correct": false,
              "feedback": "Review: τοῦτο agrees with neuter γράμμα."
            },
            {
              "text": "τὸ τοῦτο γράμμα",
              "correct": false,
              "feedback": "Review: τοῦτο agrees with neuter γράμμα."
            },
            {
              "text": "τοῦτο τὸ γράμμα",
              "correct": true,
              "feedback": "Correct: τοῦτο agrees with neuter γράμμα."
            }
          ]
        },
        {
          "id": "lesson-10-practice-052",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What gender is οὗτος?",
          "choices": [
            {
              "text": "masculine",
              "correct": true,
              "feedback": "Correct: οὗτος is masculine singular."
            },
            {
              "text": "feminine",
              "correct": false,
              "feedback": "Review: οὗτος is masculine singular."
            },
            {
              "text": "neuter",
              "correct": false,
              "feedback": "Review: οὗτος is masculine singular."
            },
            {
              "text": "plural",
              "correct": false,
              "feedback": "Review: οὗτος is masculine singular."
            }
          ]
        },
        {
          "id": "lesson-10-practice-053",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What gender is αὕτη?",
          "choices": [
            {
              "text": "plural",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            },
            {
              "text": "feminine",
              "correct": true,
              "feedback": "Correct: αὕτη is feminine singular."
            },
            {
              "text": "masculine",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            },
            {
              "text": "neuter",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            }
          ]
        },
        {
          "id": "lesson-10-practice-054",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What gender is τοῦτο?",
          "choices": [
            {
              "text": "masculine",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            },
            {
              "text": "plural",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            },
            {
              "text": "neuter",
              "correct": true,
              "feedback": "Correct: τοῦτο is neuter singular."
            },
            {
              "text": "feminine",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            }
          ]
        },
        {
          "id": "lesson-10-practice-055",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Where does the demonstrative stand in τοῦτο τὸ γράμμα?",
          "choices": [
            {
              "text": "between article and noun",
              "correct": false,
              "feedback": "Review: τοῦτο stands before τὸ γράμμα."
            },
            {
              "text": "inside the verb",
              "correct": false,
              "feedback": "Review: τοῦτο stands before τὸ γράμμα."
            },
            {
              "text": "after a possessor",
              "correct": false,
              "feedback": "Review: τοῦτο stands before τὸ γράμμα."
            },
            {
              "text": "outside the article-noun group",
              "correct": true,
              "feedback": "Correct: τοῦτο stands before τὸ γράμμα."
            }
          ]
        },
        {
          "id": "lesson-10-practice-056",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What can τοῦτο mean when it stands alone?",
          "choices": [
            {
              "text": "this fact",
              "correct": true,
              "feedback": "Correct: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "my letter",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "they",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            }
          ]
        },
        {
          "id": "lesson-10-practice-057",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which form points to feminine ἡ πόλις?",
          "choices": [
            {
              "text": "ἐμός",
              "correct": false,
              "feedback": "Review: αὕτη points to a feminine noun."
            },
            {
              "text": "αὕτη",
              "correct": true,
              "feedback": "Correct: αὕτη points to a feminine noun."
            },
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "Review: αὕτη points to a feminine noun."
            },
            {
              "text": "τοῦτο",
              "correct": false,
              "feedback": "Review: αὕτη points to a feminine noun."
            }
          ]
        },
        {
          "id": "lesson-10-practice-058",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which form points to neuter τὸ γράμμα?",
          "choices": [
            {
              "text": "αὕτη",
              "correct": false,
              "feedback": "Review: τοῦτο points to a neuter noun."
            },
            {
              "text": "σός",
              "correct": false,
              "feedback": "Review: τοῦτο points to a neuter noun."
            },
            {
              "text": "τοῦτο",
              "correct": true,
              "feedback": "Correct: τοῦτο points to a neuter noun."
            },
            {
              "text": "οὗτος",
              "correct": false,
              "feedback": "Review: τοῦτο points to a neuter noun."
            }
          ]
        },
        {
          "id": "lesson-10-practice-059",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which order is normal for “this friend”?",
          "choices": [
            {
              "text": "ὁ οὗτος φίλος",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "ὁ φίλος μου",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "ὁ καλὸς φίλος",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "οὗτος ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The demonstrative stands outside ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-10-practice-060",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What does αὕτη ἡ ὁδὸς μακρά ἐστιν mean?",
          "choices": [
            {
              "text": "This journey is long.",
              "correct": true,
              "feedback": "Correct: αὕτη ἡ ὁδός is this journey."
            },
            {
              "text": "My letter is old.",
              "correct": false,
              "feedback": "Review: αὕτη ἡ ὁδός is this journey."
            },
            {
              "text": "Your friend is good.",
              "correct": false,
              "feedback": "Review: αὕτη ἡ ὁδός is this journey."
            },
            {
              "text": "The road is his.",
              "correct": false,
              "feedback": "Review: αὕτη ἡ ὁδός is this journey."
            }
          ]
        },
        {
          "id": "lesson-10-practice-061",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "What does ὁ ἀγαθὸς φίλος mean?",
          "choices": [
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "the good friend",
              "correct": true,
              "feedback": "Correct: The adjective is inside the article-noun group."
            },
            {
              "text": "the friend is good",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "my friend",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-062",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "What does ὁ φίλος ἀγαθός ἐστιν mean?",
          "choices": [
            {
              "text": "my good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            },
            {
              "text": "this good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            },
            {
              "text": "the friend is good",
              "correct": true,
              "feedback": "Correct: The adjective makes a statement after the noun."
            },
            {
              "text": "the good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            }
          ]
        },
        {
          "id": "lesson-10-practice-063",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which phrase is attributive?",
          "choices": [
            {
              "text": "ὁ φίλος παλαιός ἐστιν",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "ὁ φίλος ἐστίν",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "φίλος ἐστίν",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "ὁ παλαιὸς φίλος",
              "correct": true,
              "feedback": "Correct: The adjective is inside the article-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-064",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which sentence is predicate?",
          "choices": [
            {
              "text": "ὁ φίλος ἀγαθός ἐστιν",
              "correct": true,
              "feedback": "Correct: The sentence states that the friend is good."
            },
            {
              "text": "ὁ ἀγαθὸς φίλος",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            },
            {
              "text": "ὁ φίλος ὁ ἀγαθός",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            },
            {
              "text": "ὁ ἐμὸς φίλος",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            }
          ]
        },
        {
          "id": "lesson-10-practice-065",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which is another attributive order for “the good friend”?",
          "choices": [
            {
              "text": "οὗτος ὁ φίλος",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            },
            {
              "text": "ὁ φίλος ὁ ἀγαθός",
              "correct": true,
              "feedback": "Correct: Repeated article marks the second attributive position."
            },
            {
              "text": "ὁ φίλος ἀγαθός ἐστιν",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            },
            {
              "text": "ὁ φίλος μου",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            }
          ]
        },
        {
          "id": "lesson-10-practice-066",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "In ὁ παλαιὸς φίλος μου, what does παλαιός describe?",
          "choices": [
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: παλαιός describes the friend."
            },
            {
              "text": "the verb",
              "correct": false,
              "feedback": "Review: παλαιός describes the friend."
            },
            {
              "text": "φίλος",
              "correct": true,
              "feedback": "Correct: παλαιός describes the friend."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: παλαιός describes the friend."
            }
          ]
        },
        {
          "id": "lesson-10-practice-067",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "In φίλος σός ἐστιν, what is said of Proxenus?",
          "choices": [
            {
              "text": "he is old",
              "correct": false,
              "feedback": "Review: σός is a predicate possessive adjective."
            },
            {
              "text": "he is good",
              "correct": false,
              "feedback": "Review: σός is a predicate possessive adjective."
            },
            {
              "text": "he travels",
              "correct": false,
              "feedback": "Review: σός is a predicate possessive adjective."
            },
            {
              "text": "he is your friend",
              "correct": true,
              "feedback": "Correct: σός is a predicate possessive adjective."
            }
          ]
        },
        {
          "id": "lesson-10-practice-068",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which phrase means “the long journey”?",
          "choices": [
            {
              "text": "ἡ μακρὰ ὁδός",
              "correct": true,
              "feedback": "Correct: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "ἡ ὁδὸς μακρά ἐστιν",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "τὸ μακρὸν γράμμα",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "ὁ μακρὸς φίλος",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-069",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which sentence means “the journey is long”?",
          "choices": [
            {
              "text": "αὕτη ἡ ὁδός",
              "correct": false,
              "feedback": "Review: μακρά is predicative with ἐστιν."
            },
            {
              "text": "ἡ ὁδὸς μακρά ἐστιν",
              "correct": true,
              "feedback": "Correct: μακρά is predicative with ἐστιν."
            },
            {
              "text": "ἡ μακρὰ ὁδός",
              "correct": false,
              "feedback": "Review: μακρά is predicative with ἐστιν."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": false,
              "feedback": "Review: μακρά is predicative with ἐστιν."
            }
          ]
        },
        {
          "id": "lesson-10-practice-070",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which phrase contains attributive possession?",
          "choices": [
            {
              "text": "ἡ πόλις μου",
              "correct": false,
              "feedback": "Review: ἐμή stands in the article-adjective-noun group."
            },
            {
              "text": "αὕτη ἡ πόλις",
              "correct": false,
              "feedback": "Review: ἐμή stands in the article-adjective-noun group."
            },
            {
              "text": "ἡ ἐμὴ πόλις",
              "correct": true,
              "feedback": "Correct: ἐμή stands in the article-adjective-noun group."
            },
            {
              "text": "ἡ πόλις ἐμή ἐστιν",
              "correct": false,
              "feedback": "Review: ἐμή stands in the article-adjective-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-071",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "What signals the predicate in ὁ φίλος ἀγαθός ἐστιν?",
          "choices": [
            {
              "text": "the article is absent from φίλος",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            },
            {
              "text": "φίλος is an object",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            },
            {
              "text": "the noun is plural",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            },
            {
              "text": "ἀγαθός stands outside ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The adjective is outside the article-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-practice-072",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which translation fits ὁ φίλος ὁ ἀγαθός?",
          "choices": [
            {
              "text": "the good friend",
              "correct": true,
              "feedback": "Correct: The repeated article gives an attributive expression."
            },
            {
              "text": "the friend is good",
              "correct": false,
              "feedback": "Review: The repeated article gives an attributive expression."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: The repeated article gives an attributive expression."
            },
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Review: The repeated article gives an attributive expression."
            }
          ]
        }
      ]
    },
    "grammar-exercises": {
      "title": "Lesson 10 Grammar Exercises",
      "description": "Pronouns, possession, demonstratives, and adjective placement",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-10-grammar-exercises-v2",
      "instructions": "Answer every question and score at least 80% to continue to the culture page.",
      "questions": [
        {
          "id": "lesson-10-grammar-exercise-01",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which short form means “me” as object?",
          "choices": [
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: με is the object form."
            },
            {
              "text": "με",
              "correct": true,
              "feedback": "Correct: με is the object form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: με is the object form."
            },
            {
              "text": "ἐγώ",
              "correct": false,
              "feedback": "Review: με is the object form."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-02",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of σε in ἐγώ σε καλέω?",
          "choices": [
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: σε is the person called."
            },
            {
              "text": "adjective",
              "correct": false,
              "feedback": "Review: σε is the person called."
            },
            {
              "text": "direct object",
              "correct": true,
              "feedback": "Correct: σε is the person called."
            },
            {
              "text": "subject",
              "correct": false,
              "feedback": "Review: σε is the person called."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-03",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "What is the job of σύ in σὺ με ἀκούεις?",
          "choices": [
            {
              "text": "direct object",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            },
            {
              "text": "possessor",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            },
            {
              "text": "adverb",
              "correct": false,
              "feedback": "Review: σύ names the person addressed as subject."
            },
            {
              "text": "subject",
              "correct": true,
              "feedback": "Correct: σύ names the person addressed as subject."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-04",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "In ἐγώ σε φίλον ποιήσω, who is made a friend?",
          "choices": [
            {
              "text": "the person addressed",
              "correct": true,
              "feedback": "Correct: σε is the person addressed."
            },
            {
              "text": "the speaker",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            },
            {
              "text": "Athens",
              "correct": false,
              "feedback": "Review: σε is the person addressed."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-05",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ὁ φίλος σου?",
          "choices": [
            {
              "text": "a good friend",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "your friend",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my friend",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "his friend",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-06",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is ἡ πόλις μου?",
          "choices": [
            {
              "text": "his city",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "this city",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "my city",
              "correct": true,
              "feedback": "Correct: μου means my."
            },
            {
              "text": "your city",
              "correct": false,
              "feedback": "Review: μου means my."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-07",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "Which word is the possessor in ὁ φίλος σου?",
          "choices": [
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            },
            {
              "text": "φίλος",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            },
            {
              "text": "none",
              "correct": false,
              "feedback": "Review: σου identifies whose friend."
            },
            {
              "text": "σου",
              "correct": true,
              "feedback": "Correct: σου identifies whose friend."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-08",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "Which phrase means “his city”?",
          "choices": [
            {
              "text": "ἡ πόλις αὐτοῦ",
              "correct": true,
              "feedback": "Correct: αὐτοῦ is his."
            },
            {
              "text": "ἡ πόλις μου",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            },
            {
              "text": "ἡ πόλις σου",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            },
            {
              "text": "αὕτη ἡ πόλις",
              "correct": false,
              "feedback": "Review: αὐτοῦ is his."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-09",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “my road”?",
          "choices": [
            {
              "text": "ἡ σὴ ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": true,
              "feedback": "Correct: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ὁ ἐμὸς ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "τὸ ἐμὸν ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-10",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “your road”?",
          "choices": [
            {
              "text": "τὸ σὸν ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ σὴ ὁδός",
              "correct": true,
              "feedback": "Correct: σή agrees with feminine ὁδός."
            },
            {
              "text": "ὁ σὸς ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-11",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "What does τῆς σῆς πατρίδος mean?",
          "choices": [
            {
              "text": "of my homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "his homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "this homeland",
              "correct": false,
              "feedback": "Review: σῆς agrees with feminine genitive πατρίδος."
            },
            {
              "text": "of your homeland",
              "correct": true,
              "feedback": "Correct: σῆς agrees with feminine genitive πατρίδος."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-12",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which pair both means “my friend”?",
          "choices": [
            {
              "text": "ὁ φίλος μου / ὁ ἐμὸς φίλος",
              "correct": true,
              "feedback": "Correct: Both expressions identify my friend."
            },
            {
              "text": "ὁ φίλος σου / ὁ σὸς φίλος",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            },
            {
              "text": "ὁ φίλος μου / ὁ σὸς φίλος",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            },
            {
              "text": "ὁ ἐμὸς φίλος / ὁ φίλος σου",
              "correct": false,
              "feedback": "Review: Both expressions identify my friend."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-13",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which phrase means “this journey”?",
          "choices": [
            {
              "text": "ἡ αὕτη ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "αὕτη ἡ ὁδός",
              "correct": true,
              "feedback": "Correct: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "οὗτος ὁ ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            },
            {
              "text": "τοῦτο τὸ ὁδός",
              "correct": false,
              "feedback": "Review: αὕτη agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-14",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What gender is αὕτη?",
          "choices": [
            {
              "text": "neuter",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            },
            {
              "text": "plural",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            },
            {
              "text": "feminine",
              "correct": true,
              "feedback": "Correct: αὕτη is feminine singular."
            },
            {
              "text": "masculine",
              "correct": false,
              "feedback": "Review: αὕτη is feminine singular."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-15",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What can τοῦτο mean when it stands alone?",
          "choices": [
            {
              "text": "my letter",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "they",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "this fact",
              "correct": true,
              "feedback": "Correct: A demonstrative can stand alone as a pronoun."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-16",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "Which order is normal for “this friend”?",
          "choices": [
            {
              "text": "οὗτος ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "ὁ οὗτος φίλος",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "ὁ φίλος μου",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            },
            {
              "text": "ὁ καλὸς φίλος",
              "correct": false,
              "feedback": "Review: The demonstrative stands outside ὁ φίλος."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-17",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "What does ὁ φίλος ἀγαθός ἐστιν mean?",
          "choices": [
            {
              "text": "this good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            },
            {
              "text": "the friend is good",
              "correct": true,
              "feedback": "Correct: The adjective makes a statement after the noun."
            },
            {
              "text": "the good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            },
            {
              "text": "my good friend",
              "correct": false,
              "feedback": "Review: The adjective makes a statement after the noun."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-18",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which is another attributive order for “the good friend”?",
          "choices": [
            {
              "text": "ὁ φίλος μου",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            },
            {
              "text": "οὗτος ὁ φίλος",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            },
            {
              "text": "ὁ φίλος ὁ ἀγαθός",
              "correct": true,
              "feedback": "Correct: Repeated article marks the second attributive position."
            },
            {
              "text": "ὁ φίλος ἀγαθός ἐστιν",
              "correct": false,
              "feedback": "Review: Repeated article marks the second attributive position."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-19",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "Which phrase means “the long journey”?",
          "choices": [
            {
              "text": "ἡ ὁδὸς μακρά ἐστιν",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "τὸ μακρὸν γράμμα",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "ὁ μακρὸς φίλος",
              "correct": false,
              "feedback": "Review: μακρά agrees with feminine ὁδός inside the group."
            },
            {
              "text": "ἡ μακρὰ ὁδός",
              "correct": true,
              "feedback": "Correct: μακρά agrees with feminine ὁδός inside the group."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-20",
          "type": "multiple-choice",
          "topic": "adjective-placement",
          "category": "Grammar",
          "prompt": "What signals the predicate in ὁ φίλος ἀγαθός ἐστιν?",
          "choices": [
            {
              "text": "ἀγαθός stands outside ὁ φίλος",
              "correct": true,
              "feedback": "Correct: The adjective is outside the article-noun group."
            },
            {
              "text": "the article is absent from φίλος",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            },
            {
              "text": "φίλος is an object",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            },
            {
              "text": "the noun is plural",
              "correct": false,
              "feedback": "Review: The adjective is outside the article-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-21",
          "type": "multiple-choice",
          "topic": "personal-pronouns",
          "category": "Grammar",
          "prompt": "Which pronoun means “you” as subject?",
          "choices": [
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "σύ",
              "correct": true,
              "feedback": "Correct: σύ is the subject form."
            },
            {
              "text": "σε",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-22",
          "type": "multiple-choice",
          "topic": "genitive-possession",
          "category": "Grammar",
          "prompt": "What is τὸ γράμμα σου?",
          "choices": [
            {
              "text": "his letter",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "that letter",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "your letter",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my letter",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-23",
          "type": "multiple-choice",
          "topic": "possessive-adjectives",
          "category": "Grammar",
          "prompt": "Which phrase means “your letter”?",
          "choices": [
            {
              "text": "ὁ σὸς γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            },
            {
              "text": "ἡ σὴ γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ ἐμὸν γράμμα",
              "correct": false,
              "feedback": "Review: σόν agrees with neuter γράμμα."
            },
            {
              "text": "τὸ σὸν γράμμα",
              "correct": true,
              "feedback": "Correct: σόν agrees with neuter γράμμα."
            }
          ]
        },
        {
          "id": "lesson-10-grammar-exercise-24",
          "type": "multiple-choice",
          "topic": "demonstratives",
          "category": "Grammar",
          "prompt": "What gender is τοῦτο?",
          "choices": [
            {
              "text": "neuter",
              "correct": true,
              "feedback": "Correct: τοῦτο is neuter singular."
            },
            {
              "text": "feminine",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            },
            {
              "text": "masculine",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            },
            {
              "text": "plural",
              "correct": false,
              "feedback": "Review: τοῦτο is neuter singular."
            }
          ]
        }
      ]
    },
    "lesson-quiz": {
      "title": "Lesson 10 Final Quiz — The Letter from Proxenus",
      "description": "Reading, vocabulary, grammar, guest friendship, and mercenaries",
      "threshold": 80,
      "required": true,
      "requireAllAnswers": true,
      "revision": "lesson-10-final-quiz-v2",
      "pointsPossible": 30,
      "instructions": "Answer all 30 questions. Score at least 80% to complete Lesson 10 and continue to Lesson 11.",
      "questions": [
        {
          "id": "lesson-10-final-01",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Who sends Xenophon the invitation?",
          "choices": [
            {
              "text": "Critobulus",
              "correct": false,
              "feedback": "Review: Proxenus is Xenophon’s Theban guest friend and the sender."
            },
            {
              "text": "Proxenus of Thebes",
              "correct": true,
              "feedback": "Correct: Proxenus is Xenophon’s Theban guest friend and the sender."
            },
            {
              "text": "Socrates",
              "correct": false,
              "feedback": "Review: Proxenus is Xenophon’s Theban guest friend and the sender."
            },
            {
              "text": "Cyrus the Great",
              "correct": false,
              "feedback": "Review: Proxenus is Xenophon’s Theban guest friend and the sender."
            }
          ]
        },
        {
          "id": "lesson-10-final-02",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Proxenus promise?",
          "choices": [
            {
              "text": "to buy him a house",
              "correct": false,
              "feedback": "Review: The invitation offers a personal connection to Cyrus."
            },
            {
              "text": "to send him to Sparta",
              "correct": false,
              "feedback": "Review: The invitation offers a personal connection to Cyrus."
            },
            {
              "text": "to make Xenophon a friend of Cyrus",
              "correct": true,
              "feedback": "Correct: The invitation offers a personal connection to Cyrus."
            },
            {
              "text": "to make Xenophon an Athenian general",
              "correct": false,
              "feedback": "Review: The invitation offers a personal connection to Cyrus."
            }
          ]
        },
        {
          "id": "lesson-10-final-03",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Why might the invitation endanger Xenophon in Athens?",
          "choices": [
            {
              "text": "Proxenus had stolen a letter",
              "correct": false,
              "feedback": "Review: Socrates worries about an accusation over Cyrus’s support for Sparta."
            },
            {
              "text": "Delphi was closed",
              "correct": false,
              "feedback": "Review: Socrates worries about an accusation over Cyrus’s support for Sparta."
            },
            {
              "text": "Xenophon had lost his horse",
              "correct": false,
              "feedback": "Review: Socrates worries about an accusation over Cyrus’s support for Sparta."
            },
            {
              "text": "Cyrus had aided Sparta against Athens",
              "correct": true,
              "feedback": "Correct: Socrates worries about an accusation over Cyrus’s support for Sparta."
            }
          ]
        },
        {
          "id": "lesson-10-final-04",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "Whom does Xenophon consult after reading the letter?",
          "choices": [
            {
              "text": "Socrates",
              "correct": true,
              "feedback": "Correct: Xenophon discusses the journey with Socrates."
            },
            {
              "text": "Plato",
              "correct": false,
              "feedback": "Review: Xenophon discusses the journey with Socrates."
            },
            {
              "text": "Critobulus",
              "correct": false,
              "feedback": "Review: Xenophon discusses the journey with Socrates."
            },
            {
              "text": "Aristarchus",
              "correct": false,
              "feedback": "Review: Xenophon discusses the journey with Socrates."
            }
          ]
        },
        {
          "id": "lesson-10-final-05",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What does Socrates advise?",
          "choices": [
            {
              "text": "ask the Athenian assembly to write back",
              "correct": false,
              "feedback": "Review: Socrates recommends Delphi."
            },
            {
              "text": "consult Apollo at Delphi",
              "correct": true,
              "feedback": "Correct: Socrates recommends Delphi."
            },
            {
              "text": "leave immediately for Sardis",
              "correct": false,
              "feedback": "Review: Socrates recommends Delphi."
            },
            {
              "text": "ignore the letter",
              "correct": false,
              "feedback": "Review: Socrates recommends Delphi."
            }
          ]
        },
        {
          "id": "lesson-10-final-06",
          "type": "multiple-choice",
          "category": "Reading",
          "prompt": "What contrast does Xenophon express at the end?",
          "choices": [
            {
              "text": "the letter is from Sparta and the decision is Cyrus’s",
              "correct": false,
              "feedback": "Review: Xenophon says the decision is his."
            },
            {
              "text": "he has already asked Apollo",
              "correct": false,
              "feedback": "Review: Xenophon says the decision is his."
            },
            {
              "text": "the letter is his friend’s, but the decision is his",
              "correct": true,
              "feedback": "Correct: Xenophon says the decision is his."
            },
            {
              "text": "the letter is Socrates’s, but the journey is Proxenus’s",
              "correct": false,
              "feedback": "Review: Xenophon says the decision is his."
            }
          ]
        },
        {
          "id": "lesson-10-final-07",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ὁ ξένος mean?",
          "choices": [
            {
              "text": "homeland",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "road, journey",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "ask, consult",
              "correct": false,
              "feedback": "Review: ὁ ξένος means guest friend."
            },
            {
              "text": "guest friend",
              "correct": true,
              "feedback": "Correct: ὁ ξένος means guest friend."
            }
          ]
        },
        {
          "id": "lesson-10-final-08",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἡ πατρίς mean?",
          "choices": [
            {
              "text": "homeland",
              "correct": true,
              "feedback": "Correct: ἡ πατρίς means homeland."
            },
            {
              "text": "letter",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "call, invite",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            },
            {
              "text": "you / you / your",
              "correct": false,
              "feedback": "Review: ἡ πατρίς means homeland."
            }
          ]
        },
        {
          "id": "lesson-10-final-09",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does τὸ γράμμα mean?",
          "choices": [
            {
              "text": "your",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "letter",
              "correct": true,
              "feedback": "Correct: τὸ γράμμα means letter."
            },
            {
              "text": "write",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            },
            {
              "text": "I / me / my",
              "correct": false,
              "feedback": "Review: τὸ γράμμα means letter."
            }
          ]
        },
        {
          "id": "lesson-10-final-10",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does καλέω mean?",
          "choices": [
            {
              "text": "your",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "friend",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            },
            {
              "text": "call, invite",
              "correct": true,
              "feedback": "Correct: καλέω means call, invite."
            },
            {
              "text": "I / me / my",
              "correct": false,
              "feedback": "Review: καλέω means call, invite."
            }
          ]
        },
        {
          "id": "lesson-10-final-11",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does ἐμός, ἐμή, ἐμόν mean?",
          "choices": [
            {
              "text": "this",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "guest friend",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "war",
              "correct": false,
              "feedback": "Review: ἐμός, ἐμή, ἐμόν means my."
            },
            {
              "text": "my",
              "correct": true,
              "feedback": "Correct: ἐμός, ἐμή, ἐμόν means my."
            }
          ]
        },
        {
          "id": "lesson-10-final-12",
          "type": "multiple-choice",
          "category": "Vocabulary",
          "prompt": "What does παλαιός, παλαιά, παλαιόν mean?",
          "choices": [
            {
              "text": "old, longstanding",
              "correct": true,
              "feedback": "Correct: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "guest friend",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "war",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            },
            {
              "text": "write",
              "correct": false,
              "feedback": "Review: παλαιός, παλαιά, παλαιόν means old, longstanding."
            }
          ]
        },
        {
          "id": "lesson-10-final-13",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which pronoun means “I” as subject?",
          "choices": [
            {
              "text": "σε",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            },
            {
              "text": "ἐγώ",
              "correct": true,
              "feedback": "Correct: ἐγώ is the subject form."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: ἐγώ is the subject form."
            }
          ]
        },
        {
          "id": "lesson-10-final-14",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which pronoun means “you” as subject?",
          "choices": [
            {
              "text": "σου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "μου",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            },
            {
              "text": "σύ",
              "correct": true,
              "feedback": "Correct: σύ is the subject form."
            },
            {
              "text": "σε",
              "correct": false,
              "feedback": "Review: σύ is the subject form."
            }
          ]
        },
        {
          "id": "lesson-10-final-15",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which pair gives first-person subject and object?",
          "choices": [
            {
              "text": "σύ / σε",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            },
            {
              "text": "ἐγώ / σου",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            },
            {
              "text": "μου / με",
              "correct": false,
              "feedback": "Review: ἐγώ is I; με is me."
            },
            {
              "text": "ἐγώ / με",
              "correct": true,
              "feedback": "Correct: ἐγώ is I; με is me."
            }
          ]
        },
        {
          "id": "lesson-10-final-16",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is ὁ φίλος μου?",
          "choices": [
            {
              "text": "my friend",
              "correct": true,
              "feedback": "Correct: μου means my."
            },
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "his friend",
              "correct": false,
              "feedback": "Review: μου means my."
            },
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Review: μου means my."
            }
          ]
        },
        {
          "id": "lesson-10-final-17",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What is ἡ πόλις σου?",
          "choices": [
            {
              "text": "their city",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "your city",
              "correct": true,
              "feedback": "Correct: σου means your."
            },
            {
              "text": "my city",
              "correct": false,
              "feedback": "Review: σου means your."
            },
            {
              "text": "his city",
              "correct": false,
              "feedback": "Review: σου means your."
            }
          ]
        },
        {
          "id": "lesson-10-final-18",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "In ὁ φίλος μου με καλεῖ, which form means “my”?",
          "choices": [
            {
              "text": "ὁ",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            },
            {
              "text": "καλεῖ",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            },
            {
              "text": "μου",
              "correct": true,
              "feedback": "Correct: μου marks possession; με is the object."
            },
            {
              "text": "με",
              "correct": false,
              "feedback": "Review: μου marks possession; με is the object."
            }
          ]
        },
        {
          "id": "lesson-10-final-19",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “my road”?",
          "choices": [
            {
              "text": "ὁ ἐμὸς ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "τὸ ἐμὸν ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ σὴ ὁδός",
              "correct": false,
              "feedback": "Review: ἐμή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": true,
              "feedback": "Correct: ἐμή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-final-20",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “your road”?",
          "choices": [
            {
              "text": "ἡ σὴ ὁδός",
              "correct": true,
              "feedback": "Correct: σή agrees with feminine ὁδός."
            },
            {
              "text": "ὁ σὸς ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "τὸ σὸν ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            },
            {
              "text": "ἡ ἐμὴ ὁδός",
              "correct": false,
              "feedback": "Review: σή agrees with feminine ὁδός."
            }
          ]
        },
        {
          "id": "lesson-10-final-21",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which phrase means “this friend”?",
          "choices": [
            {
              "text": "ὁ οὗτος φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "οὗτος ὁ φίλος",
              "correct": true,
              "feedback": "Correct: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "αὕτη ἡ φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            },
            {
              "text": "τοῦτο τὸ φίλος",
              "correct": false,
              "feedback": "Review: οὗτος agrees with masculine φίλος and stands outside the article group."
            }
          ]
        },
        {
          "id": "lesson-10-final-22",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What can τοῦτο mean when it stands alone?",
          "choices": [
            {
              "text": "your friend",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "they",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "this fact",
              "correct": true,
              "feedback": "Correct: A demonstrative can stand alone as a pronoun."
            },
            {
              "text": "my letter",
              "correct": false,
              "feedback": "Review: A demonstrative can stand alone as a pronoun."
            }
          ]
        },
        {
          "id": "lesson-10-final-23",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "What does ὁ ἀγαθὸς φίλος mean?",
          "choices": [
            {
              "text": "the friend is good",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "my friend",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "this friend",
              "correct": false,
              "feedback": "Review: The adjective is inside the article-noun group."
            },
            {
              "text": "the good friend",
              "correct": true,
              "feedback": "Correct: The adjective is inside the article-noun group."
            }
          ]
        },
        {
          "id": "lesson-10-final-24",
          "type": "multiple-choice",
          "category": "Grammar",
          "prompt": "Which sentence is predicate?",
          "choices": [
            {
              "text": "ὁ φίλος ἀγαθός ἐστιν",
              "correct": true,
              "feedback": "Correct: The sentence states that the friend is good."
            },
            {
              "text": "ὁ ἀγαθὸς φίλος",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            },
            {
              "text": "ὁ φίλος ὁ ἀγαθός",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            },
            {
              "text": "ὁ ἐμὸς φίλος",
              "correct": false,
              "feedback": "Review: The sentence states that the friend is good."
            }
          ]
        },
        {
          "id": "lesson-10-final-25",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which Cyrus is Proxenus’s associate?",
          "choices": [
            {
              "text": "a Delphic priest",
              "correct": false,
              "feedback": "Review: The lesson concerns Cyrus the Younger."
            },
            {
              "text": "Cyrus the Younger",
              "correct": true,
              "feedback": "Correct: The lesson concerns Cyrus the Younger."
            },
            {
              "text": "Cyrus the Great",
              "correct": false,
              "feedback": "Review: The lesson concerns Cyrus the Younger."
            },
            {
              "text": "the Athenian Cyrus",
              "correct": false,
              "feedback": "Review: The lesson concerns Cyrus the Younger."
            }
          ]
        },
        {
          "id": "lesson-10-final-26",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What relationship linked the Athenian Xenophon and Theban Proxenus?",
          "choices": [
            {
              "text": "a Delphic priesthood",
              "correct": false,
              "feedback": "Review: Xenophon calls Proxenus his longstanding guest friend."
            },
            {
              "text": "father and son",
              "correct": false,
              "feedback": "Review: Xenophon calls Proxenus his longstanding guest friend."
            },
            {
              "text": "longstanding guest friendship",
              "correct": true,
              "feedback": "Correct: Xenophon calls Proxenus his longstanding guest friend."
            },
            {
              "text": "shared Athenian citizenship",
              "correct": false,
              "feedback": "Review: Xenophon calls Proxenus his longstanding guest friend."
            }
          ]
        },
        {
          "id": "lesson-10-final-27",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What happened to Athens in 404 BCE?",
          "choices": [
            {
              "text": "it conquered Persia",
              "correct": false,
              "feedback": "Review: Athens surrendered and lost most of its fleet."
            },
            {
              "text": "it founded Delphi",
              "correct": false,
              "feedback": "Review: Athens surrendered and lost most of its fleet."
            },
            {
              "text": "it hired Cyrus as king",
              "correct": false,
              "feedback": "Review: Athens surrendered and lost most of its fleet."
            },
            {
              "text": "it surrendered at the end of the Peloponnesian War",
              "correct": true,
              "feedback": "Correct: Athens surrendered and lost most of its fleet."
            }
          ]
        },
        {
          "id": "lesson-10-final-28",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "Which statement about Greek paid military service is accurate?",
          "choices": [
            {
              "text": "It existed before 404 BCE and grew more prominent afterward.",
              "correct": true,
              "feedback": "Correct: Paid service predates 404 and became more prominent in the fourth century."
            },
            {
              "text": "It began only after 404 BCE.",
              "correct": false,
              "feedback": "Review: Paid service predates 404 and became more prominent in the fourth century."
            },
            {
              "text": "All Greek men became paid soldiers.",
              "correct": false,
              "feedback": "Review: Paid service predates 404 and became more prominent in the fourth century."
            },
            {
              "text": "The Ten Thousand were all landless Athenians.",
              "correct": false,
              "feedback": "Review: Paid service predates 404 and became more prominent in the fourth century."
            }
          ]
        },
        {
          "id": "lesson-10-final-29",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "How does Xenophon describe his initial role in Cyrus’s expedition?",
          "choices": [
            {
              "text": "Athenian ambassador",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.4 distinguishes his initial status from a regular soldier’s."
            },
            {
              "text": "neither general, captain, nor ordinary soldier",
              "correct": true,
              "feedback": "Correct: Anabasis 3.1.4 distinguishes his initial status from a regular soldier’s."
            },
            {
              "text": "captain of the entire force",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.4 distinguishes his initial status from a regular soldier’s."
            },
            {
              "text": "Cyrus’s Persian satrap",
              "correct": false,
              "feedback": "Review: Anabasis 3.1.4 distinguishes his initial status from a regular soldier’s."
            }
          ]
        },
        {
          "id": "lesson-10-final-30",
          "type": "multiple-choice",
          "category": "Greek World",
          "prompt": "What does the culture-page relief show?",
          "choices": [
            {
              "text": "Xenophon with Socrates",
              "correct": false,
              "feedback": "Review: The relief shows an Achaemenid guard, not the expedition."
            },
            {
              "text": "a Greek mercenary at Delphi",
              "correct": false,
              "feedback": "Review: The relief shows an Achaemenid guard, not the expedition."
            },
            {
              "text": "an earlier Persian guard from Persepolis",
              "correct": true,
              "feedback": "Correct: The relief shows an Achaemenid guard, not the expedition."
            },
            {
              "text": "Cyrus the Younger",
              "correct": false,
              "feedback": "Review: The relief shows an Achaemenid guard, not the expedition."
            }
          ]
        }
      ]
    }
  },
  "nextLesson": {
    "id": "lesson-11",
    "title": "The Question at Delphi",
    "fallbackUrl": "lesson.html?lesson=11&page=1"
  },
  "contentRevision": "lesson-10-guest-friendship-v2",
  "previousLesson": {
    "id": "lesson-9",
    "title": "What Makes a Good Friend?",
    "fallbackUrl": "lesson.html?lesson=9&page=1"
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
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug='lesson-10' FOR UPDATE;
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
  SELECT id INTO STRICT segment_id_value FROM public.lesson_segments WHERE lesson_id=lesson_id_value AND slug='lesson-10-page-1';
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
      VALUES (vocab_item->>'lemma',vocab_item->>'greek',vocab_item->>'english',group_item->>'category',vocab_item->>'dictionaryForm',jsonb_build_object('source','lesson_10_proxenus'))
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
$lesson10$;
UPDATE public.lesson_content_overrides o
SET content=jsonb_set(o.content,'{nextLesson,title}',to_jsonb('The Letter from Proxenus'::text),true),version=o.version+1,updated_at=now()
WHERE o.lesson_id=(SELECT id FROM public.lessons WHERE slug='lesson-9')
  AND o.content #>> '{nextLesson,id}'='lesson-10'
  AND o.content #>> '{nextLesson,title}' IS DISTINCT FROM 'The Letter from Proxenus';
COMMIT;
