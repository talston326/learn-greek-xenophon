// Build the cumulative review and exam from the already published lesson banks.
import fs from 'node:fs';
import vm from 'node:vm';

const read = path => fs.readFileSync(path, 'utf8');
const write = (path, value) => fs.writeFileSync(path, value);
const dataPath = 'content/module-1-review.json';
const selectedExam = {
  1: [1, 4, 12, 15], 2: [1, 4, 9, 10], 3: [2, 5, 9, 19], 4: [1, 9, 17, 20],
  5: [9, 14, 28], 6: [3, 17, 30], 7: [2, 15, 28], 8: [1, 18, 27],
  9: [1, 13, 30], 10: [1, 19, 27], 11: [5, 14, 26], 12: [3, 20, 29]
};
const selectedPractice = {
  1: [5, 11], 2: [3, 5], 3: [10, 17], 4: [7, 11], 5: [13, 25], 6: [5, 13],
  7: [7, 19], 8: [4, 21], 9: [3, 21], 10: [5, 16], 11: [7, 21], 12: [2, 19]
};
const lessonOneWhy = {
  5: 'τὸν ἵππον is accusative because the horse receives the action.',
  11: 'The reading says Xenophon brings water and grain to the horse.'
};
const examWhy = {
  '1-1': 'θεραπεύει describes how Xenophon tends the horse in the reading.',
  '1-4': 'ὁ Ξενοφῶν is the subject of θεραπεύει, so it is nominative.',
  '1-12': 'In the reading, Xenophon’s mother calls the family to dinner.',
  '1-15': 'A later ancient writer names Gryllus as Xenophon’s father and Erchia as his deme; the household scene is reconstructed.',
  '2-1': 'The household reading names Γρύλλος as Xenophon’s father.',
  '2-4': 'In the reading, the female servants weave πέπλους, garments.',
  '2-9': 'The reply uses οὐκ to reject “small” and ἀλλά to say the house is beautiful.',
  '2-10': 'τοῦ Γρύλλου is genitive and tells whose house it is.',
  '3-2': 'The -ουσιν ending marks third-person plural active: “they learn.”',
  '3-5': 'τὸν ἵππον is accusative and receives the action of θεραπεύει.',
  '3-9': 'The ending -ειν marks the present active infinitive, “to write.”',
  '3-19': 'The παιδαγωγός is the attendant who takes Xenophon to school in the reading.',
  '4-1': 'Gryllus prepares his horse and equipment because he is departing for war.',
  '4-9': 'τῷ, καλῷ, and ἵππῳ all agree as masculine dative singular.',
  '4-17': 'A cavalryman needed resources to obtain, feed, and maintain a suitable horse.',
  '4-20': 'The course labels this childhood departure scene as plausible invention, not a documented event.',
  '5-9': 'λαμβάνουσιν has the third-person plural ending -ουσιν.',
  '5-14': 'φέρετε is the plural imperative, while φέρε addresses one person.',
  '5-28': 'Socrates shifts from where goods are found to where people become good and honorable.',
  '6-3': 'In Memorabilia 3.12, Socrates addresses Epigenes; Xenophon narrates the exchange.',
  '6-17': 'τοὺς φίλους has the article and noun in masculine accusative plural.',
  '6-30': 'The Hera races at Olympia show that opportunities for women varied by place and occasion.',
  '7-2': 'Myrrhine explains her journey in the course’s reconstructed procession scene.',
  '7-15': 'The -ομεν ending of βλέπομεν means “we see,” first-person plural.',
  '7-28': 'Women could take part in the Eleusinian Mysteries as initiates.',
  '8-1': 'Aristarchus has many relatives at home after conflict cuts off income from his land.',
  '8-18': 'τὰ, καλὰ, and ἱμάτια agree as neuter plural.',
  '8-27': 'Memorabilia 2.7 describes the women’s work, but does not record their individual words.',
  '9-1': 'The friendship lesson draws its central question from Socrates’ exchange with Critobulus in Memorabilia 2.6.',
  '9-13': 'τιμάω contracts to τιμῶ in the first-person singular.',
  '9-30': 'Memorabilia 2.6 is Xenophon’s discussion with Critobulus about friendship.',
  '10-1': 'Proxenus of Thebes sends the invitation and offers an introduction to Cyrus.',
  '10-19': 'ἐμή is feminine nominative singular and agrees with ἡ ὁδός.',
  '10-27': 'Athens surrendered in 404 BCE, ending the Peloponnesian War and losing most of its fleet.',
  '11-5': 'Xenophon’s question at Delphi concerns which gods to sacrifice and pray to for his journey.',
  '11-14': 'πορεύονται has the third-person plural middle ending -ονται, with the meaning “they travel.”',
  '11-26': 'The Pythia was Apollo’s priestess who delivered the oracle’s responses at Delphi.',
  '12-3': 'Socrates says Xenophon should have asked whether going or staying was better before asking how to go.',
  '12-20': 'σύν takes the dative, so σὺν τῷ Προξένῳ means “with Proxenus.”',
  '12-29': 'Anabasis 3.1.8 says Xenophon sacrificed as the god instructed before sailing.'
};
const reviewSections = [
  { title: 'Lessons 1–3 · Home, household, and education', lessons: [
    { number: 1, focus: 'Find the subject and object; match articles and adjectives; read present active verbs. Xenophon tends the horse at home in a reconstructed scene.', greek: 'ὁ Ξενοφῶν · τὸν ἵππον θεραπεύει' },
    { number: 2, focus: 'Read the household roles, εἰμί, possession with the genitive, and simple place phrases. Notice the women’s weaving work.', greek: 'ἡ οἰκία τοῦ Γρύλλου · ἐν τῷ ἀγρῷ' },
    { number: 3, focus: 'Read third-person singular and plural verbs, direct objects, infinitives, demonstratives, and introductory middle forms.', greek: 'οἱ παῖδες μανθάνουσιν · γράφειν' }
  ]},
  { title: 'Lessons 4–6 · Care, questions, and training', lessons: [
    { number: 4, focus: 'Review singular cases, adjective agreement, and accent clues. Gryllus’s departure scene is a labeled reconstruction.', greek: 'τῷ καλῷ ἵππῳ · τῆς λόγχης' },
    { number: 5, focus: 'Use third-person plurals, singular and plural commands, infinitives, and proclitics. The later narrow-lane tradition is expanded for the course.', greek: 'φέρουσιν · φέρετε · μένειν' },
    { number: 6, focus: 'Identify plural cases and shifting accents. In Memorabilia 3.12, Socrates addresses Epigenes about bodily training.', greek: 'οἱ φίλοι · τοὺς φίλους · τῶν φίλων' }
  ]},
  { title: 'Lessons 7–9 · Procession, work, and friendship', lessons: [
    { number: 7, focus: 'Review all present active persons and first-declension feminine forms. Myrrhine’s individual words are course reconstruction.', greek: 'βλέπω · βλέπομεν · αἱ πομπαί' },
    { number: 8, focus: 'Match noun and adjective forms and distinguish adjectives from adverbs. Xenophon reports women’s textile work, but not their individual dialogue.', greek: 'τὰ καλὰ ἱμάτια · καλῶς ὑφαίνει' },
    { number: 9, focus: 'Read alpha-contract verbs and elision. Compare useful help, loyalty, and character in the friendship discussion.', greek: 'τιμῶ · τιμᾷς · ἀλλ᾽' }
  ]},
  { title: 'Lessons 10–12 · Decision, Delphi, and departure', lessons: [
    { number: 10, focus: 'Review personal and possessive pronouns, adjective position, and Proxenus’s invitation to meet Cyrus.', greek: 'ἐγώ · με · ἡ ἐμὴ ὁδός' },
    { number: 11, focus: 'Read middle forms and common deponents. Xenophon asks Apollo which gods to honor for a journey he has already chosen.', greek: 'πορεύομαι · πορεύονται · βούλομαι' },
    { number: 12, focus: 'Distinguish whether to go from how to go; identify datives and prepositions. Xenophon reaches Proxenus and Cyrus at Sardis.', greek: 'πότερον … ἢ · σὺν τῷ Προξένῳ' }
  ]}
];

function originalLessons() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(read('lesson-data.js'), context);
  return context.window.xenophonLessonData;
}

function publishedLessonOneQuiz() {
  const migration = read('db/migrations/0038_lesson_1_household_final_quiz.sql');
  const json = migration.match(/new_quiz jsonb := \$quiz\$([\s\S]*?)\$quiz\$/u)?.[1];
  if (!json) throw new Error('Lesson 1 household quiz is missing from migration 0038.');
  return JSON.parse(json);
}

function explanation(source, lessonNumber, questionNumber, kind) {
  const correct = source.choices.find(choice => choice.correct);
  const raw = (kind === 'exam' ? examWhy[`${lessonNumber}-${questionNumber}`] : undefined)
    || (lessonNumber === 1 ? lessonOneWhy[questionNumber] : undefined)
    || correct.feedback?.replace(/^Correct[.:]\s*/u, '')
    || source.explanation
    || `${correct.text} fits the form and context taught in Lesson ${lessonNumber}.`;
  return raw.replace(/^Correct[.:]\s*/u, '');
}

function copiedQuestion(source, lessonNumber, questionNumber, kind) {
  const answer = source.choices.find(choice => choice.correct)?.text;
  const why = explanation(source, lessonNumber, questionNumber, kind);
  return {
    id: `module-1-${kind}-l${lessonNumber}-${questionNumber}`,
    type: 'multiple-choice',
    category: `Lesson ${lessonNumber}`,
    sourceLesson: lessonNumber,
    prompt: source.prompt,
    explanation: why,
    choices: source.choices.map(choice => ({
      text: choice.text,
      correct: Boolean(choice.correct),
      feedback: `Correct answer: ${answer}${/[.!?]$/.test(answer) ? '' : '.'} ${why}`
    }))
  };
}

let data;
if (fs.existsSync(dataPath) && !process.argv.includes('--refresh')) {
  data = JSON.parse(read(dataPath));
} else {
  const bank = originalLessons();
  const select = (map, kind) => Object.entries(map).flatMap(([lessonNumber, positions]) => {
    const questions = Number(lessonNumber) === 1
      ? publishedLessonOneQuiz().questions
      : bank.getLesson(lessonNumber).activities['lesson-quiz'].questions;
    return positions.map(position => copiedQuestion(questions[position - 1], Number(lessonNumber), position, kind));
  });
  data = {
    title: 'Module 1 Review · Wisdom and Socrates',
    introduction: 'Revisit Lessons 1–12 before the exam. Use the refresher exercises as often as you like; they do not affect your grade. The exam requires 28 correct answers out of 40 (70%) to enter Module 2.',
    sections: reviewSections,
    practice: {
      title: 'Module 1 Refresher Exercises',
      description: 'Ungraded practice across every lesson',
      requireAllAnswers: true,
      instructions: 'Answer all 24 questions, then read the explanations. Repeat whenever you want.',
      questions: select(selectedPractice, 'practice')
    },
    exam: {
      title: 'Module 1 Exam · Wisdom and Socrates',
      description: 'Cumulative assessment of Lessons 1–12',
      threshold: 70,
      required: true,
      requireAllAnswers: true,
      isModuleExam: true,
      revision: 'module-1-exam-v1',
      pointsPossible: 40,
      instructions: 'Answer all 40 questions. At least 28 correct (70%) are required for Module 2. You may retake the exam. After each attempt, every correct answer and its explanation will appear.',
      questions: select(selectedExam, 'exam')
    }
  };
  write(dataPath, JSON.stringify(data, null, 2) + '\n');
}

const lesson = JSON.parse(read('content/lessons/lesson-12.json'));
lesson.activities['lesson-quiz'].instructions = 'Answer all 30 Lesson 12 questions. Score at least 80% to continue to the Module 1 Review and Exam.';
lesson.culture.review.title = 'Lesson 12 review';
lesson.activities['module-review-practice'] = data.practice;
lesson.activities['module-exam'] = data.exam;
lesson.nextLesson = { id: 'module-1-review', title: 'Module 1 Review and Exam', fallbackUrl: 'module-1-review.html' };
lesson.contentRevision = 'lesson-12-module-1-review-exam-v1';
write('content/lessons/lesson-12.json', JSON.stringify(lesson, null, 2) + '\n');

let fallback = read('lesson-data.js');
const generated = `  // BEGIN GENERATED LESSON 12\n  LESSONS["lesson-12"] = ${JSON.stringify(lesson, null, 2)};\n  // END GENERATED LESSON 12\n\n`;
fallback = fallback.replace(/  \/\/ BEGIN GENERATED LESSON 12[\s\S]*?  \/\/ END GENERATED LESSON 12\n\n/u, generated);
write('lesson-data.js', fallback);

const patch = {
  activities: lesson.activities,
  culture: lesson.culture,
  nextLesson: lesson.nextLesson,
  contentRevision: lesson.contentRevision
};
const migration = `-- Publish the Module 1 review, refresher, and cumulative exam.\nBEGIN;\nALTER TABLE public.student_lesson_test_grades DROP CONSTRAINT IF EXISTS student_lesson_test_grades_type_check;\nALTER TABLE public.student_lesson_test_grades ADD CONSTRAINT student_lesson_test_grades_type_check CHECK (test_type IN ('lesson-test', 'module-exam'));\nUPDATE public.lesson_content_overrides\nSET content = content || $json$${JSON.stringify(patch, null, 2)}$json$::jsonb,\n    version = version + 1,\n    updated_at = now()\nWHERE lesson_id = (SELECT id FROM public.lessons WHERE slug = 'lesson-12')\n  AND content->>'contentRevision' IS DISTINCT FROM '${lesson.contentRevision}';\nDO $check$ BEGIN\n  IF NOT EXISTS (SELECT 1 FROM public.lesson_content_overrides o JOIN public.lessons l ON l.id = o.lesson_id WHERE l.slug = 'lesson-12' AND o.content->>'contentRevision' = '${lesson.contentRevision}') THEN\n    RAISE EXCEPTION 'Lesson 12 content override is missing';\n  END IF;\nEND $check$;\nCOMMIT;\n`;
write('db/migrations/0034_module_1_review_exam.sql', migration);

const html = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const reviewHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Module 1 Review and Exam</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="dashboard-active module-page">
  <div class="app">
    <aside class="sidebar">
      <div class="brand">
        <div class="usc-badge" role="img" aria-label="University of South Carolina logo"></div>
        <h1>UNIVERSITY OF<br>South Carolina</h1>
        <div class="dept">Department of Classics</div>
        <div class="course-code">GREK 120 J10</div>
        <div class="course-title">Learn Ancient Greek with Xenophon</div>
        <div class="term">Fall 2027</div>
      </div>
      <button class="sidebar-toggle" type="button" data-sidebar-toggle aria-expanded="true" aria-label="Collapse navigation"><span class="sidebar-toggle-icon" aria-hidden="true">‹</span><span class="sidebar-toggle-label">Collapse</span></button>
      <nav class="nav"></nav>
      <div class="sidebar-card profile"><div class="avatar" data-profile-avatar></div><div class="profile-copy"><h3 data-profile-name>Student Profile</h3><div class="muted" data-profile-summary>Your learner details will appear here after login.</div><div class="profile-link"><a class="small-link" href="profile.html" data-profile-link>Complete Profile -&gt;</a></div><div class="profile-link"><button class="small-link link-button" type="button" data-logout>Log out</button></div></div></div>
    </aside>
    <main class="main">
      <article class="module-shell">
        <header class="module-hero module-hero--sophia"><div class="module-hero__overlay" aria-hidden="true"></div><div class="module-hero__content"><p class="module-hero__kicker">After Lesson 12</p><h1 class="module-hero__english-title">Module 1 Review and Exam</h1><p class="module-hero__subtitle">Wisdom and Socrates · Lessons 1–12</p></div></header>
        <section class="lesson-section module-review" aria-labelledby="module-review-heading">
          <h2 id="module-review-heading">${html(data.title)}</h2>
          <p>${html(data.introduction)}</p>
          ${data.sections.map(section => `<div class="module-review__group"><h3>${html(section.title)}</h3><ul>${section.lessons.map(item => `<li><strong><a href="lesson.html?lesson=${item.number}&page=1">Lesson ${item.number}</a></strong>: ${html(item.focus)}<br><span lang="grc">${html(item.greek)}</span></li>`).join('')}</ul></div>`).join('')}
        </section>
        <section class="lesson-section gate-panel" aria-labelledby="refresher-heading"><h2 id="refresher-heading">Refresher Exercises</h2><p>Practice 24 questions from every lesson. These exercises are ungraded and repeatable.</p><a class="primary-button" href="activity.html?lesson=12&type=module-review-practice&returnTo=module-1-review.html">Try Refresher Exercises</a></section>
        <section class="lesson-section gate-panel" aria-labelledby="module-exam-heading"><h2 id="module-exam-heading">Module 1 Exam</h2><p>Answer all 40 questions. At least 28 correct (70%) unlocks Module 2. Every attempt shows the correct answers and explanations. Retakes are allowed.</p><a class="primary-button" href="activity.html?lesson=12&type=module-exam&returnTo=module-1-review.html">Take Module 1 Exam</a><p class="gate-message" data-module-exam-status></p><a class="secondary-button" href="module-2-andreia.html" data-module-2-link hidden>Continue to Module 2</a></section>
      </article>
    </main>
  </div>
  <script src="auth.js"></script><script src="profile-data.js"></script><script src="forms-data.js"></script><script src="script.js?v=module1-review-v1"></script>
  <script>const session = window.xenophonAuth?.readSession?.(); const staff = ['administrator', 'professor'].includes(session?.activeRole) && (session?.roles || []).includes(session.activeRole); const passed = window.xenophonModuleOneExamPassed?.(); document.querySelector('[data-module-exam-status]').textContent = staff ? 'Staff preview: Module 2 is accessible.' : passed ? 'Exam passed. Module 2 is unlocked.' : 'Module 2 unlocks after a score of at least 70%.'; document.querySelector('[data-module-2-link]').hidden = !passed;</script>
</body>
</html>
`;
write('module-1-review.html', reviewHtml);
