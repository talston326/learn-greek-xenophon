# Learning Ancient Greek Through Xenophon
## Project Specification Document

**Version:** 0.1  
**Last Updated:** 2026-04-18  
**Author:** Tom Alston  

---

# 1. Project Overview

## Purpose
This project aims to develop a modern, accessible web-based platform for learning Ancient Greek through selected passages of Xenophon (and selectively Plato), integrating language instruction with Greek cultural, philosophical, and societal context.

## Goals
- Teach Ancient Greek through structured, cumulative lessons  
- Integrate language with Greek thought, society, and values  
- Provide audio-supported learning (pronunciation + listening)  
- Ensure accessibility for all users, including visually impaired learners  
- Build a reusable and extensible learning platform  

## Inspiration
- Daedalus UMKC Greek tutorial  
- *First Greek Book* (John Williams White, public domain)  
- Modern digital learning platforms  

---

# 2. Organizing Principle

## Core Concept
Language acquisition through thematic exploration of Greek society and virtue.

## Thematic Modules
- Self-Control (σωφροσύνη)  
- Justice (δικαιοσύνη)  
- Courage (ἀνδρεία)  
- Leadership  
- Household & Economy  
- Friendship & Loyalty  
- Education & Character  
- Freedom (ancient vs modern conceptions)  

## Source Texts
- Xenophon:
  - Anabasis
  - Memorabilia
  - Oeconomicus
  - Cyropaedia
- Select Plato passages (optional, for comparison)

---

# 3. Curriculum Structure

## Module → Lesson Hierarchy
Each module contains 1–3 lessons.

Each lesson includes:
- Greek passage  
- Vocabulary  
- Grammar focus  
- Cultural/philosophical theme  

---

# 4. Lesson Template

## 4.1 Theme Introduction
Short explanation of the cultural or philosophical theme.

## 4.2 Greek Passage
- Adapted early → authentic later  
- Annotated text  

## 4.3 Guided Reading
- Glosses  
- Grammar notes  
- Syntax explanations  

## 4.4 Audio Layer
- Full passage audio  
- Word-level pronunciation  
- Optional slow playback  

## 4.5 Vocabulary
- New vocabulary  
- Review vocabulary  
- Audio + phonetic support  

## 4.6 Exercises
- Vocabulary recall  
- Parsing exercises  
- Morphology drills  
- Reading comprehension  

## 4.7 Assessment
- Quiz  
- Mastery tracking  

---

# 5. Website Architecture

## Frontend
- Lesson interface  
- Reading interface with annotations  
- Audio player  
- Vocabulary trainer  
- Progress dashboard  

## Backend
- Lesson management  
- Vocabulary database  
- User progress tracking  
- Authentication system  

---

# 6. Role Management

## Student
- Access lessons  
- Complete exercises  
- Track progress  
- Review vocabulary  

## Instructor (Future Phase)
- Monitor student progress  
- View analytics  
- Assign lessons  

## Administrator
- Create/edit lessons  
- Add vocabulary  
- Upload/manage audio  
- Create exercises  
- Manage users  

---

# 7. Progress Tracking

## Metrics
- Lessons completed  
- Vocabulary mastery  
- Quiz scores  
- Listening completion  

## Display
- Progress bars  
- Completion percentages  
- Vocabulary mastery count  

## Skill Categories
- Reading  
- Vocabulary  
- Morphology  
- Listening  

---

# 8. Vocabulary System

## Structure
- Core vocabulary (high frequency)  
- Thematic vocabulary  
- Review vocabulary (cumulative)

## Features
- Audio pronunciation  
- Optional phonetic representation  
- Spaced repetition (future enhancement)  

---

# 9. Audio System

## Features
- Passage playback  
- Word-level pronunciation  
- Adjustable speed  
- Transcript display  

## Implementation Options
- AI-generated audio (e.g., ElevenLabs)  
- Pre-recorded audio  

---

# 10. Accessibility

## Standards Target
WCAG 2.1 compliance

## Features
- Keyboard navigation  
- Screen reader compatibility  
- High contrast design  
- Scalable fonts  
- Audio transcripts  
- Semantic HTML structure  

---

# 11. Administrator Interface

## Capabilities
- Add/edit lessons  
- Manage modules  
- Add vocabulary  
- Upload audio  
- Create quizzes  
- Reorder lessons  

## Design Goal
- Non-technical usability  
- Form-based interface  

---

# 12. Principal Parts Resource

Principal Parts are integrated as a course resource rather than a standalone mini-site.

## Files
- `principal-parts-data.js` contains the reusable verb data, categories, forms, translations, notes, and lesson references.
- `resources.html` is the left-navigation Resources doorway.
- `principal-parts.html`, `principal-parts-verb.html`, and `principal-parts-practice.html` render the introduction/table, individual verb study view, and randomized practice from the shared data file.
- `principal-parts-progress.js` records local resource activity for the current user profile.

## Adding Verbs
Add one verb object to `principal-parts-data.js` with `verbId`, `lemma`, `displayLemma`, `meaning`, `dictionaryMeaning`, `principalParts`, optional `notes`, optional `lessonReferences`, and `irregular` when it should count toward irregular-verb achievements. The table, study route, and practice pool update from that source.

## XP and Progress
Viewing the Principal Parts resource earns 5 XP once. Studying a verb earns 2 XP once per verb. Completing a five-question practice session earns 8 XP plus 3 XP per correct answer, with a 10 XP perfect-session bonus. Dashboard hydration folds this local resource activity into XP, practice count, recent activity, and achievement calculation.

## Achievements and Assets
Principal Parts achievements are defined in `achievement-catalog.js`: Principal Parts Beginner, Verb Scholar, Principal Parts Master, and Irregular Verb Hunter. They currently reuse existing course badge images as placeholders; custom badge art can replace those `imageFilename` values later.

# 13. Technology Stack (Proposed)

## Frontend
- HTML / CSS / JavaScript  
- React (optional)

## Backend
- Node.js or Python (Flask/Django)

## Database
- SQLite (initial)

## Hosting
- Netlify / Vercel / Replit  

---

# 14. MVP (Minimum Viable Product)

## Deliverables
- 4–6 complete lessons  
- Multiple Xenophon works represented  
- Vocabulary system  
- Audio integration  
- Progress tracking  
- Basic admin interface  
- Accessibility-aware design  

---

# 15. Development Plan

## Phase 1
- Define structure  
- Build lesson template  
- Basic UI  

## Phase 2
- Vocabulary system  
- Audio integration  

## Phase 3
- Progress tracking  
- Admin interface  

## Phase 4
- Accessibility refinement  
- Testing  

---

# 16. Future Enhancements

- Expanded curriculum  
- Additional authors  
- Advanced grammar tools  
- AI-assisted parsing  
- Mobile version  

---

# 17. Educational Philosophy

This project emphasizes:
- Learning through context  
- Integration of language and meaning  
- Exposure to Greek thought and society  
- Incremental mastery through repetition  

---

# 18. Open Questions

- Which pronunciation system will be used?  
- How much Plato content should be included?  
- What level of Greek should the initial lessons target?  
- How sophisticated should spaced repetition be in MVP?  
- What is the balance between adaptation vs authentic text?  

---

# 19. Notes / Iteration Log

(Use this section to track ideas, changes, and decisions as the project evolves.)
