-- Add Lesson 4 Culture and History and its final quiz; preserve earlier lesson content and student records.
DO $lesson4$
DECLARE
  lesson_id_value uuid;
  segment_id_value uuid;
  patch jsonb := $json${
  "culture": {
    "title": "The Horsemen of Athens: Wealth, Training, and Duty",
    "image": "assets/lesson-4-cavalry-inspection-original.png",
    "imagePlacement": "inline-right",
    "imageAlt": "An official examines a bay horse’s foreleg while a cavalryman holds the reins and young Xenophon watches; other horsemen wait nearby.",
    "imageCaption": "An imagined Athenian cavalry inspection. This artistic reconstruction is not a documentary view of ancient Athens.",
    "body": [
      "In our reading, Gryllus prepares to ride to war while Xenophon helps with the horse and equipment. A Greek cavalryman was an ἱππεύς; the plural is ἱππεῖς. Older translations sometimes call these men “knights,” but “cavalrymen” is clearer: they were not medieval knights receiving a title of nobility.",
      "A suitable horse required substantial resources. Its owner needed to obtain it, feed it, provide shelter, and arrange daily care and training. Horse ownership therefore suggested prosperity. Xenophon is generally understood to have come from a wealthy family in Erchia, in rural Attica. Our household setting is consistent with that background, but the particular scene of his father departing for war is an imagined episode. The Athenian wealth class called hippeis and actual service in the cavalry should not be treated as exactly the same thing.",
      "Money alone did not make a useful cavalryman. A rider needed skill, and his horse needed to be healthy, responsive, and fit for service. Public support also helped maintain the force. Aristotle’s later fourth-century account describes the Council inspecting cavalry horses and considering whether enrolled men were physically able to serve. It also mentions a feeding allowance that could be withheld when a horse was neglected. These arrangements show that cavalry service involved public oversight as well as private resources; we should not assume every detail was identical in Xenophon’s childhood.",
      "The small tasks in the reading matter. Brushing the horse, tending its needs, and checking equipment connect everyday work with readiness for service. Xenophon later wrote On Horsemanship and On the Cavalry Commander. His advice emphasizes understanding and training horses, as well as the responsibilities of leadership. Caring for an animal is part of preparing to rely on it.",
      "Xenophon probably served in the Athenian cavalry as a young man, although the details are uncertain. His role with the Ten Thousand was broader. In his Anabasis, he says that he originally accompanied Cyrus’s expedition without serving as a general, captain, or ordinary soldier. After the loss of the army’s senior commanders, he became one of its elected generals. During the retreat, a small cavalry troop of fifty men was formed under Lycius, not Xenophon. It is therefore misleading to describe Xenophon’s main role with the Ten Thousand simply as “a cavalryman.”",
      "The lesson brings together wealth, responsibility, and useful work. The family’s resources make horse ownership plausible; Xenophon’s willingness to help gives those resources a practical purpose. Read the childhood story as a historical reconstruction, and distinguish it from the events Xenophon describes in his own writings."
    ],
    "questions": [
      {
        "prompt": "Why did keeping a cavalry horse suggest prosperity?",
        "answer": "A horse required money, feed, shelter, daily care, and training. Those demands favored households with substantial resources."
      },
      {
        "prompt": "Why was wealth alone insufficient for cavalry service?",
        "answer": "The rider needed skill and physical ability, and the horse had to be healthy, responsive, and fit for service."
      },
      {
        "prompt": "Was Xenophon simply the cavalry commander of the Ten Thousand?",
        "answer": "No. He became one of the army’s generals. The fifty-man cavalry troop formed during the retreat was commanded by Lycius."
      },
      {
        "prompt": "Which part of our story is a reconstruction?",
        "answer": "The specific childhood episode in which Xenophon helps Gryllus prepare to depart. A prosperous family background is plausible, but this event is not documented."
      }
    ],
    "review": {
      "title": "Before the Final Quiz",
      "items": [
        "Reread Gryllus’s preparations and identify what Xenophon does to help.",
        "Review the meanings of the required vocabulary and how to read a noun’s dictionary entry.",
        "Use the singular case and agreement tables: subject, direct object, owner, recipient, and direct address.",
        "Review accent marks, persistent noun accents, and recessive accents in the supplied regular verb forms.",
        "Distinguish cavalry service, Xenophon’s generalship, and the invented details of our childhood narrative."
      ]
    },
    "sources": [
      {
        "title": "Aristotle, Athenian Constitution 49: cavalry inspection and support",
        "url": "https://www.teseopress.com/athenianconstitution/chapter/part-49/"
      },
      {
        "title": "Xenophon, Anabasis 3.1 and 3.3: his role and the cavalry troop",
        "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:abo:tlg,0032,006:3"
      },
      {
        "title": "Xenophon, On Horsemanship: horse care and training",
        "url": "https://www.gutenberg.org/files/1176/1176-h/1176-h.htm"
      },
      {
        "title": "John W. I. Lee: Xenophon’s background and military autobiography",
        "url": "https://www.history.ucsb.edu/wp-content/uploads/histpublications/files/00067-lee_2005.pdf"
      }
    ],
    "excerpt": {
      "title": "Xenophon’s Own Words: Handle Horses Calmly",
      "citation": "On Horsemanship 6.13",
      "url": "https://eulogikon.org/works/xenophon-athens-horsemanship-ezq-ac",
      "greek": "τὸ δὲ μήποτε σὺν ὀργῇ ἵππῳ προσφέρεσθαι, ἓν τοῦτο καὶ δίδαγμα καὶ ἔθισμα πρὸς ἵππον ἄριστον. ἀπρονόητον γὰρ ἡ ὀργή, ὥστε πολλάκις ἐξεργάζεται ὧν μεταμέλειν ἀνάγκη.",
      "translation": "Never deal with a horse in anger: this is the single best lesson and habit in handling a horse. Anger is thoughtless, and often makes a person do things they must regret.",
      "note": "English translation prepared for this lesson. This is an authentic passage from Xenophon, with grammar beyond our current level. Use the translation to understand his advice; you are not expected to analyze every form. Notice ἵππῳ (horse, dative singular) and ἡ ὀργή (anger)."
    }
  },
  "activities": {
    "lesson-quiz": {
      "title": "Lesson 4 Final Quiz — Gryllus Rides to War",
      "required": true,
      "requireAllAnswers": true,
      "threshold": 80,
      "masteryScore": 90,
      "pointsPossible": 100,
      "pointsPerQuestion": 5,
      "randomizeChoices": true,
      "instructions": "Answer all 20 questions. Each is worth 5 points. Score at least 80% (16 correct) to pass and complete Lesson 4. Review feedback and retry if needed.",
      "categoryFeedback": {
        "Reading and vocabulary": "Review reading and vocabulary in Lesson 4 before trying again.",
        "Word study": "Review word study in Lesson 4 before trying again.",
        "Accent foundations": "Review accent foundations in Lesson 4 before trying again.",
        "Singular cases": "Review singular cases in Lesson 4 before trying again.",
        "Agreement": "Review agreement in Lesson 4 before trying again.",
        "Case functions": "Review case functions in Lesson 4 before trying again.",
        "Persistent accents": "Review persistent accents in Lesson 4 before trying again.",
        "Recessive accents": "Review recessive accents in Lesson 4 before trying again.",
        "Culture and history": "Review culture and history in Lesson 4 before trying again."
      },
      "questions": [
        {
          "id": "lesson-4-final-01",
          "type": "multiple-choice",
          "category": "Reading and vocabulary",
          "prompt": "What is Gryllus preparing to do in the reading?",
          "choices": [
            {
              "text": "Ride to war.",
              "correct": true,
              "feedback": "Correct. Gryllus prepares his horse and equipment for departure to war."
            },
            {
              "text": "Go to school.",
              "correct": false,
              "feedback": "Review: Gryllus prepares his horse and equipment for departure to war."
            },
            {
              "text": "Sell the family house.",
              "correct": false,
              "feedback": "Review: Gryllus prepares his horse and equipment for departure to war."
            },
            {
              "text": "Become a music teacher.",
              "correct": false,
              "feedback": "Review: Gryllus prepares his horse and equipment for departure to war."
            }
          ]
        },
        {
          "id": "lesson-4-final-02",
          "type": "multiple-choice",
          "category": "Reading and vocabulary",
          "prompt": "Which task does Xenophon perform for the horse?",
          "choices": [
            {
              "text": "He sells it.",
              "correct": false,
              "feedback": "Review: ψήχει describes Xenophon brushing the horse."
            },
            {
              "text": "He teaches it to weave.",
              "correct": false,
              "feedback": "Review: ψήχει describes Xenophon brushing the horse."
            },
            {
              "text": "He takes it to school.",
              "correct": false,
              "feedback": "Review: ψήχει describes Xenophon brushing the horse."
            },
            {
              "text": "He brushes it.",
              "correct": true,
              "feedback": "Correct. ψήχει describes Xenophon brushing the horse."
            }
          ]
        },
        {
          "id": "lesson-4-final-03",
          "type": "multiple-choice",
          "category": "Reading and vocabulary",
          "prompt": "What does ἐπιμελής mean in Gryllus’s advice?",
          "choices": [
            {
              "text": "Silent.",
              "correct": false,
              "feedback": "Review: Gryllus urges the boy to be diligent."
            },
            {
              "text": "Young.",
              "correct": false,
              "feedback": "Review: Gryllus urges the boy to be diligent."
            },
            {
              "text": "Diligent; careful.",
              "correct": true,
              "feedback": "Correct. Gryllus urges the boy to be diligent."
            },
            {
              "text": "Wealthy.",
              "correct": false,
              "feedback": "Review: Gryllus urges the boy to be diligent."
            }
          ]
        },
        {
          "id": "lesson-4-final-04",
          "type": "multiple-choice",
          "category": "Word study",
          "prompt": "In χαλκός, χαλκοῦ, ὁ, what information do the second form and the article supply?",
          "choices": [
            {
              "text": "A verb ending and its tense.",
              "correct": false,
              "feedback": "Review: The dictionary entry gives nominative, genitive, and article."
            },
            {
              "text": "Genitive singular and masculine gender.",
              "correct": true,
              "feedback": "Correct. The dictionary entry gives nominative, genitive, and article."
            },
            {
              "text": "Accusative singular and feminine gender.",
              "correct": false,
              "feedback": "Review: The dictionary entry gives nominative, genitive, and article."
            },
            {
              "text": "Plural form and neuter gender.",
              "correct": false,
              "feedback": "Review: The dictionary entry gives nominative, genitive, and article."
            }
          ]
        },
        {
          "id": "lesson-4-final-05",
          "type": "multiple-choice",
          "category": "Accent foundations",
          "prompt": "In the supplied phrase ὁ χαλκὸς τοῦ κράνους, which accent is on χαλκὸς?",
          "choices": [
            {
              "text": "Grave.",
              "correct": true,
              "feedback": "Correct. The final acute of χαλκός becomes grave before the following ordinary word."
            },
            {
              "text": "Acute.",
              "correct": false,
              "feedback": "Review: The final acute of χαλκός becomes grave before the following ordinary word."
            },
            {
              "text": "Circumflex.",
              "correct": false,
              "feedback": "Review: The final acute of χαλκός becomes grave before the following ordinary word."
            },
            {
              "text": "There is no accent.",
              "correct": false,
              "feedback": "Review: The final acute of χαλκός becomes grave before the following ordinary word."
            }
          ]
        },
        {
          "id": "lesson-4-final-06",
          "type": "multiple-choice",
          "category": "Accent foundations",
          "prompt": "An acute may normally appear on which syllables?",
          "choices": [
            {
              "text": "Only the final syllable.",
              "correct": false,
              "feedback": "Review: The acute is limited to the ultima, penult, or antepenult."
            },
            {
              "text": "Any syllable, however far from the end.",
              "correct": false,
              "feedback": "Review: The acute is limited to the ultima, penult, or antepenult."
            },
            {
              "text": "Only a syllable with a long vowel.",
              "correct": false,
              "feedback": "Review: The acute is limited to the ultima, penult, or antepenult."
            },
            {
              "text": "One of the last three syllables.",
              "correct": true,
              "feedback": "Correct. The acute is limited to the ultima, penult, or antepenult."
            }
          ]
        },
        {
          "id": "lesson-4-final-07",
          "type": "multiple-choice",
          "category": "Singular cases",
          "prompt": "Which phrase means “of the spear”?",
          "choices": [
            {
              "text": "τῇ λόγχῃ",
              "correct": false,
              "feedback": "Review: The genitive singular is τῆς λόγχης."
            },
            {
              "text": "ἡ λόγχη",
              "correct": false,
              "feedback": "Review: The genitive singular is τῆς λόγχης."
            },
            {
              "text": "τῆς λόγχης",
              "correct": true,
              "feedback": "Correct. The genitive singular is τῆς λόγχης."
            },
            {
              "text": "τὴν λόγχην",
              "correct": false,
              "feedback": "Review: The genitive singular is τῆς λόγχης."
            }
          ]
        },
        {
          "id": "lesson-4-final-08",
          "type": "multiple-choice",
          "category": "Singular cases",
          "prompt": "Select the form that addresses the horse directly.",
          "choices": [
            {
              "text": "τὸν ἵππον",
              "correct": false,
              "feedback": "Review: Direct address uses the vocative, without the article."
            },
            {
              "text": "ὦ ἵππε",
              "correct": true,
              "feedback": "Correct. Direct address uses the vocative, without the article."
            },
            {
              "text": "ὁ ἵππος",
              "correct": false,
              "feedback": "Review: Direct address uses the vocative, without the article."
            },
            {
              "text": "τοῦ ἵππου",
              "correct": false,
              "feedback": "Review: Direct address uses the vocative, without the article."
            }
          ]
        },
        {
          "id": "lesson-4-final-09",
          "type": "multiple-choice",
          "category": "Agreement",
          "prompt": "Choose the correctly agreeing phrase for “to/for the beautiful horse.”",
          "choices": [
            {
              "text": "τῷ καλῷ ἵππῳ",
              "correct": true,
              "feedback": "Correct. All three words must be masculine dative singular."
            },
            {
              "text": "τῷ καλῇ ἵππῳ",
              "correct": false,
              "feedback": "Review: All three words must be masculine dative singular."
            },
            {
              "text": "τοῦ καλοῦ ἵππου",
              "correct": false,
              "feedback": "Review: All three words must be masculine dative singular."
            },
            {
              "text": "τὸν καλὸν ἵππον",
              "correct": false,
              "feedback": "Review: All three words must be masculine dative singular."
            }
          ]
        },
        {
          "id": "lesson-4-final-10",
          "type": "multiple-choice",
          "category": "Agreement",
          "prompt": "Which phrase correctly makes “the beautiful spear” the subject?",
          "choices": [
            {
              "text": "ὁ καλὸς λόγχη",
              "correct": false,
              "feedback": "Review: The subject phrase is feminine nominative singular."
            },
            {
              "text": "ἡ καλὸν λόγχη",
              "correct": false,
              "feedback": "Review: The subject phrase is feminine nominative singular."
            },
            {
              "text": "τὴν καλὴν λόγχην",
              "correct": false,
              "feedback": "Review: The subject phrase is feminine nominative singular."
            },
            {
              "text": "ἡ καλὴ λόγχη",
              "correct": true,
              "feedback": "Correct. The subject phrase is feminine nominative singular."
            }
          ]
        },
        {
          "id": "lesson-4-final-11",
          "type": "multiple-choice",
          "category": "Case functions",
          "prompt": "In ὁ Γρύλλος τὸν ἵππον ἄγει, what does τὸν ἵππον do?",
          "choices": [
            {
              "text": "Names the owner of Gryllus.",
              "correct": false,
              "feedback": "Review: The accusative marks the horse as the direct object."
            },
            {
              "text": "Addresses the horse directly.",
              "correct": false,
              "feedback": "Review: The accusative marks the horse as the direct object."
            },
            {
              "text": "Names the direct object being led.",
              "correct": true,
              "feedback": "Correct. The accusative marks the horse as the direct object."
            },
            {
              "text": "Names the person doing the leading.",
              "correct": false,
              "feedback": "Review: The accusative marks the horse as the direct object."
            }
          ]
        },
        {
          "id": "lesson-4-final-12",
          "type": "multiple-choice",
          "category": "Case functions",
          "prompt": "In τὴν λόγχην τοῦ πατρός, what does τοῦ πατρός identify?",
          "choices": [
            {
              "text": "The person being addressed.",
              "correct": false,
              "feedback": "Review: The genitive expresses possession: the father’s spear."
            },
            {
              "text": "The owner of the spear.",
              "correct": true,
              "feedback": "Correct. The genitive expresses possession: the father’s spear."
            },
            {
              "text": "The destination of the spear.",
              "correct": false,
              "feedback": "Review: The genitive expresses possession: the father’s spear."
            },
            {
              "text": "The spear as subject.",
              "correct": false,
              "feedback": "Review: The genitive expresses possession: the father’s spear."
            }
          ]
        },
        {
          "id": "lesson-4-final-13",
          "type": "multiple-choice",
          "category": "Persistent accents",
          "prompt": "Which pair correctly shows the nominative and genitive of “dinner”?",
          "choices": [
            {
              "text": "δεῖπνον — δείπνου",
              "correct": true,
              "feedback": "Correct. The long genitive ultima -ου prevents a penult circumflex."
            },
            {
              "text": "δεῖπνον — δεῖπνου",
              "correct": false,
              "feedback": "Review: The long genitive ultima -ου prevents a penult circumflex."
            },
            {
              "text": "δεῖπνον — δειπνοῦ",
              "correct": false,
              "feedback": "Review: The long genitive ultima -ου prevents a penult circumflex."
            },
            {
              "text": "δείπνον — δεῖπνου",
              "correct": false,
              "feedback": "Review: The long genitive ultima -ου prevents a penult circumflex."
            }
          ]
        },
        {
          "id": "lesson-4-final-14",
          "type": "multiple-choice",
          "category": "Persistent accents",
          "prompt": "What explains πόλεμος changing to πολέμου?",
          "choices": [
            {
              "text": "Every genitive has a final circumflex.",
              "correct": false,
              "feedback": "Review: Persistent accent adjusts when the long ending restricts its position."
            },
            {
              "text": "A masculine noun must lose its accent.",
              "correct": false,
              "feedback": "Review: Persistent accent adjusts when the long ending restricts its position."
            },
            {
              "text": "The noun changes to the plural.",
              "correct": false,
              "feedback": "Review: Persistent accent adjusts when the long ending restricts its position."
            },
            {
              "text": "Long -ου prevents the acute from remaining on the antepenult.",
              "correct": true,
              "feedback": "Correct. Persistent accent adjusts when the long ending restricts its position."
            }
          ]
        },
        {
          "id": "lesson-4-final-15",
          "type": "multiple-choice",
          "category": "Recessive accents",
          "prompt": "Compare the supplied forms μάνθανε and μανθάνει. Which explanation is correct?",
          "choices": [
            {
              "text": "Both final vowel sounds are short.",
              "correct": false,
              "feedback": "Review: The length of the ultima controls how far a recessive accent can go."
            },
            {
              "text": "Both words must have a circumflex.",
              "correct": false,
              "feedback": "Review: The length of the ultima controls how far a recessive accent can go."
            },
            {
              "text": "Short final ε allows the accent farther back than long ει.",
              "correct": true,
              "feedback": "Correct. The length of the ultima controls how far a recessive accent can go."
            },
            {
              "text": "The accent marks different noun cases.",
              "correct": false,
              "feedback": "Review: The length of the ultima controls how far a recessive accent can go."
            }
          ]
        },
        {
          "id": "lesson-4-final-16",
          "type": "multiple-choice",
          "category": "Recessive accents",
          "prompt": "Which pair correctly illustrates a long accented penult before a short versus long ultima?",
          "choices": [
            {
              "text": "ψῆχε — ψηχεῖ",
              "correct": false,
              "feedback": "Review: The supplied ψῆχε has a short ultima; ψήχει has a long one."
            },
            {
              "text": "ψῆχε — ψήχει",
              "correct": true,
              "feedback": "Correct. The supplied ψῆχε has a short ultima; ψήχει has a long one."
            },
            {
              "text": "ψήχε — ψῆχει",
              "correct": false,
              "feedback": "Review: The supplied ψῆχε has a short ultima; ψήχει has a long one."
            },
            {
              "text": "ψηχέ — ψῆχει",
              "correct": false,
              "feedback": "Review: The supplied ψῆχε has a short ultima; ψήχει has a long one."
            }
          ]
        },
        {
          "id": "lesson-4-final-17",
          "type": "multiple-choice",
          "category": "Culture and history",
          "prompt": "Which expense helps explain the connection between cavalry and wealth?",
          "choices": [
            {
              "text": "Obtaining and maintaining a suitable horse.",
              "correct": true,
              "feedback": "Correct. Horses needed substantial resources for care and training."
            },
            {
              "text": "Purchasing a medieval title.",
              "correct": false,
              "feedback": "Review: Horses needed substantial resources for care and training."
            },
            {
              "text": "Paying to join the Ten Thousand as a child.",
              "correct": false,
              "feedback": "Review: Horses needed substantial resources for care and training."
            },
            {
              "text": "Building a private temple before every ride.",
              "correct": false,
              "feedback": "Review: Horses needed substantial resources for care and training."
            }
          ]
        },
        {
          "id": "lesson-4-final-18",
          "type": "multiple-choice",
          "category": "Culture and history",
          "prompt": "What did the public inspections described by Aristotle help establish?",
          "choices": [
            {
              "text": "Whether every rider was a hereditary noble.",
              "correct": false,
              "feedback": "Review: The Council examined the fitness of mounts and the ability of enrolled men."
            },
            {
              "text": "Whether every Athenian owned a horse.",
              "correct": false,
              "feedback": "Review: The Council examined the fitness of mounts and the ability of enrolled men."
            },
            {
              "text": "Whether a boy had memorized Homer.",
              "correct": false,
              "feedback": "Review: The Council examined the fitness of mounts and the ability of enrolled men."
            },
            {
              "text": "Whether horses were suitable and men were able to serve.",
              "correct": true,
              "feedback": "Correct. The Council examined the fitness of mounts and the ability of enrolled men."
            }
          ]
        },
        {
          "id": "lesson-4-final-19",
          "type": "multiple-choice",
          "category": "Culture and history",
          "prompt": "Which statement correctly distinguishes Xenophon and Lycius?",
          "choices": [
            {
              "text": "Both were medieval knights.",
              "correct": false,
              "feedback": "Review: Anabasis distinguishes Xenophon’s generalship from Lycius’s cavalry command."
            },
            {
              "text": "Neither accompanied the Greek army.",
              "correct": false,
              "feedback": "Review: Anabasis distinguishes Xenophon’s generalship from Lycius’s cavalry command."
            },
            {
              "text": "Xenophon became a general; Lycius led the small cavalry troop formed during the retreat.",
              "correct": true,
              "feedback": "Correct. Anabasis distinguishes Xenophon’s generalship from Lycius’s cavalry command."
            },
            {
              "text": "Xenophon led that troop and Lycius wrote Anabasis.",
              "correct": false,
              "feedback": "Review: Anabasis distinguishes Xenophon’s generalship from Lycius’s cavalry command."
            }
          ]
        },
        {
          "id": "lesson-4-final-20",
          "type": "multiple-choice",
          "category": "Culture and history",
          "prompt": "How should we describe young Xenophon helping Gryllus depart?",
          "choices": [
            {
              "text": "A scene from a medieval chronicle.",
              "correct": false,
              "feedback": "Review: The lesson uses historical reconstruction and distinguishes it from documented events."
            },
            {
              "text": "A plausible invented scene, not a documented childhood event.",
              "correct": true,
              "feedback": "Correct. The lesson uses historical reconstruction and distinguishes it from documented events."
            },
            {
              "text": "An eyewitness account written by the boy.",
              "correct": false,
              "feedback": "Review: The lesson uses historical reconstruction and distinguishes it from documented events."
            },
            {
              "text": "Proof of every detail of Gryllus’s military service.",
              "correct": false,
              "feedback": "Review: The lesson uses historical reconstruction and distinguishes it from documented events."
            }
          ]
        }
      ]
    }
  }
}$json$::jsonb;
  existing_content jsonb;
  next_content jsonb;
  page_list jsonb;
  block_kind text;
BEGIN
  SELECT id INTO STRICT lesson_id_value FROM public.lessons WHERE slug = 'lesson-4';
  SELECT content INTO existing_content FROM public.lesson_content_overrides WHERE lesson_id = lesson_id_value FOR UPDATE;
  IF existing_content IS NULL THEN
    RAISE EXCEPTION 'Lesson 4 published content must exist before page 3 is added';
  END IF;
  SELECT jsonb_agg(value ORDER BY (value->>'page')::integer) INTO page_list
  FROM (
    SELECT value FROM jsonb_array_elements(existing_content->'pages')
    WHERE value->>'page' <> '3'
    UNION ALL
    SELECT '{"page":3,"slug":"lesson-4-page-3","title":"Culture and History / Final Quiz","template":"culture"}'::jsonb
  ) pages;
  patch := jsonb_set(patch, '{activities}', COALESCE(existing_content->'activities','{}'::jsonb) || patch->'activities');
  next_content := existing_content || patch || jsonb_build_object('pages', page_list);
  UPDATE public.lesson_content_overrides
  SET content = next_content, version = version + 1, updated_at = now()
  WHERE lesson_id = lesson_id_value AND content IS DISTINCT FROM next_content;

  INSERT INTO public.lesson_segments (lesson_id, slug, title, sort_order)
  VALUES (lesson_id_value, 'lesson-4-page-3', 'Culture and History / Final Quiz', 3)
  ON CONFLICT (lesson_id, slug) DO UPDATE SET title = EXCLUDED.title, sort_order = EXCLUDED.sort_order;

  INSERT INTO public.lesson_segments (lesson_id, slug, title, sort_order)
  VALUES (lesson_id_value, 'published-structured-content', 'Published Structured Content', 99)
  ON CONFLICT (lesson_id, slug) DO UPDATE SET title = EXCLUDED.title
  RETURNING id INTO segment_id_value;

  FOREACH block_kind IN ARRAY ARRAY['culture','activities'] LOOP
    UPDATE public.lesson_content_blocks b
    SET content = jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind), updated_at = now()
    FROM public.lesson_segments s
    WHERE b.segment_id = s.id AND s.lesson_id = lesson_id_value
      AND b.content->>'source' = 'lesson_publish' AND b.content->>'kind' = block_kind
      AND b.content->'value' IS DISTINCT FROM patch->block_kind;
    IF NOT EXISTS (
      SELECT 1 FROM public.lesson_content_blocks b JOIN public.lesson_segments s ON s.id=b.segment_id
      WHERE s.lesson_id=lesson_id_value AND b.content->>'source'='lesson_publish' AND b.content->>'kind'=block_kind
    ) THEN
      INSERT INTO public.lesson_content_blocks (segment_id,block_type,title,content,sort_order)
      VALUES (segment_id_value,'custom',block_kind,jsonb_build_object('source','lesson_publish','kind',block_kind,'value',patch->block_kind),
        CASE block_kind WHEN 'culture' THEN 4 ELSE 6 END);
    END IF;
  END LOOP;
END
$lesson4$;
