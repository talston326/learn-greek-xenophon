# Lesson 4, page 3

Implemented September 14, 2026. Page 3 presents “The Horsemen of Athens: Wealth, Training, and Duty,” followed by an authentic Greek excerpt with an original English translation, four comprehension/reflection items, a lesson review, and the final quiz.

The inline illustration is the first generated image requested by the instructor, saved without modification as `assets/lesson-4-cavalry-inspection-original.png`. Its caption identifies it as an artistic reconstruction. The text distinguishes the Athenian wealth class from active cavalry service, explains horse costs and rider/horse fitness, and distinguishes Xenophon's later generalship from Lycius's command of the small cavalry force. The childhood narrative is identified as reconstructed.

## Excerpt

Xenophon, *On Horsemanship* 6.13: never handle a horse in anger. Greek checked against https://eulogikon.org/works/xenophon-athens-horsemanship-ezq-ac and https://ellinikoarxeio.blogspot.com/2010/01/xenophon-peri-ippikis.html; the English translation was prepared for this lesson. The passage is supported enrichment: advanced forms are not required grammar. Both languages display to students and staff.

## Assessment

Twenty multiple-choice questions, five points each, 100 points total. All answers are required. Passing requires 80 percent; mastery is 90 percent. Questions cover reading/vocabulary, word study, accent foundations, singular case forms, agreement, case functions, persistent accents, recessive accents, and culture. Each choice has explanatory feedback. The existing student activity/grade/completion endpoints handle results. Staff can preview without the student completion gate.

## Content and verification

The JSON payload and embedded fallback agree. Migration 0019 merges culture and final quiz into existing Lesson 4 content, retaining earlier pages and activities. It was tested on an isolated Neon branch and applied to production. No student records are changed by the migration.

Content checks for Lessons 2–4, language study and culture passed, along with JavaScript syntax and whitespace checks. Browser checks cover the original image, Greek/English excerpt, responsive layout, sources, all-answer validation, 75-percent failure, 80-percent success, grade/completion requests, navigation, reload, and preservation through administrator editing. Browser test submissions were intercepted, so no real student records were written.

Production deployment `6aa81d39f6e9e27d47fb55e8` passed the same browser checks at https://learn-greek-xenophon.netlify.app. The temporary database test branch `br-lively-bread-amn8s24p` was removed after verification.
