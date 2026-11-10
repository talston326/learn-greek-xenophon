# Module III and IV reading audit implementation

Implements the November 7 approved curriculum audit, reconstructed from the original audit because its uncommitted draft was unavailable. The adaptations remain course compositions rather than quotations. Added examples are explicitly instructional, not new historical testimony.

- Lessons 28, 31–32, 35–36, 38–43: support early forms with individual or phrase-level glosses.
- 29: finite, infinitive and participial athematic aorists in the snow-rescue exercise.
- 32: imperfect ability and knowing how, with infinitives in the ship example.
- 34: imperfect giving/placing versus completed aorist actions.
- 36: contrast releasing an object with ceasing an action, retaining existing vocabulary.
- 37: passive subjunctive in a guided purpose clause about the tunic exchange.
- 38: middle τίθημι and active ἀφίημι subjunctives; preserve the distinction between owners and the enslaved housekeeper.
- 40: compare the earlier reconciliation oath's future infinitive with reported aorist action.
- 41: retain and explicitly gloss ζητητέον ἐστίν as a preview of Lesson 44.
- 42: present/subjunctive versus past/purpose-optative pair; note that retaining the subjunctive is also possible.
- 43: present/aorist optative comparison.
- 45: replace opening γεγράφασιν with ἔγραψαν, with matching translation and gloss.

Publication migration 0049 changes only readings, reading glosses, and the reading fields in structured content/overrides. It guards against overwriting changed readings and is idempotent. Prior publication migrations remain unchanged. Existing vocabulary, assessments, and artwork are preserved.

Validation: module III and IV structural checks, gloss styling, vocabulary reconciliation (689 cards), production asset build, and site-policy checks. Use `npm run verify:audited-readings:live` after publication; optionally supply `AUDIT_BASELINE` with the pre-publication API snapshot to verify all non-reading content is unchanged, and `AUDIT_REPORT` to save results.
