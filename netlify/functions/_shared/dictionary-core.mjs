const LEADING_ARTICLES = new Map([
  ["ὁ", "ὁ"],
  ["τοῦ", "ὁ"],
  ["τῷ", "ὁ"],
  ["τόν", "ὁ"],
  ["τὸν", "ὁ"],
  ["ἡ", "ἡ"],
  ["τῆς", "ἡ"],
  ["τῇ", "ἡ"],
  ["τήν", "ἡ"],
  ["τὴν", "ἡ"],
  ["τό", "τό"],
  ["τὸ", "τό"],
  ["αἱ", "αἱ"],
  ["οἱ", "οἱ"],
  ["τά", "τά"],
  ["τὰ", "τά"],
]);

const GENDER_ARTICLES = new Map([
  ["masculine", "ὁ"],
  ["m", "ὁ"],
  ["feminine", "ἡ"],
  ["f", "ἡ"],
  ["neuter", "τό"],
  ["n", "τό"],
]);

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function textOrNull(value) {
  const next = text(value);
  return next || null;
}

function asTextArray(value) {
  if (Array.isArray(value)) {
    return value.map(text).filter(Boolean);
  }

  return text(value)
    .split(/\s*,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function itemMorphology(item) {
  return isRecord(item.morphology) ? item.morphology : {};
}

export function normalizeGreek(value) {
  return text(value).normalize("NFC").replace(/\s+/g, " ").trim();
}

function splitCitation(value) {
  return normalizeGreek(value)
    .split(/\s*,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function primaryGreekForm(value) {
  return splitCitation(value)[0]?.split(/\s*\/\s*/)[0]?.trim() || normalizeGreek(value);
}

function stripLeadingArticle(value) {
  const normalized = normalizeGreek(value);
  const [first, ...rest] = normalized.split(/\s+/);
  const article = LEADING_ARTICLES.get(first);

  if (article && rest.length) {
    return {
      lemma: rest.join(" "),
      article,
    };
  }

  const parts = splitCitation(normalized);
  if (parts.length > 1) {
    const finalPart = parts[parts.length - 1];
    const citationArticle = LEADING_ARTICLES.get(finalPart);

    if (citationArticle) {
      return {
        lemma: parts[0],
        article: citationArticle,
      };
    }
  }

  return {
    lemma: normalized,
    article: null,
  };
}

function normalizedPartOfSpeech(value) {
  const next = String(value || "").trim().toLowerCase();

  if (!next) {
    return null;
  }

  if (next.includes("noun")) {
    return next.includes("proper") ? "proper noun" : "noun";
  }

  if (next.includes("verb")) {
    return "verb";
  }

  if (next.includes("εἰμί")) {
    return "verb";
  }

  if (next.includes("adjective")) {
    return "adjective";
  }

  if (next.includes("phrase")) {
    return "phrase";
  }

  return next;
}

function itemPartOfSpeech(item) {
  const morphology = itemMorphology(item);
  return normalizedPartOfSpeech(
    textOrNull(item.part_of_speech) ||
      textOrNull(item.partOfSpeech) ||
      textOrNull(morphology.part_of_speech) ||
      textOrNull(morphology.category)
  );
}

function itemGenderArticle(item) {
  const morphology = itemMorphology(item);
  const explicitArticle =
    textOrNull(item.article) ||
    textOrNull(morphology.article) ||
    textOrNull(morphology.dictionary_article);

  if (explicitArticle) {
    return explicitArticle;
  }

  const gender = (
    textOrNull(item.gender) ||
    textOrNull(morphology.gender) ||
    textOrNull(morphology.grammatical_gender) ||
    ""
  ).toLowerCase();

  return GENDER_ARTICLES.get(gender) || null;
}

function itemDictionaryForm(item) {
  const morphology = itemMorphology(item);
  return (
    text(item.dictionary_form) ||
    text(item.dictionaryForm) ||
    text(morphology.dictionary_form) ||
    text(morphology.citation_form)
  );
}

function itemPrincipalParts(item) {
  const morphology = itemMorphology(item);
  return asTextArray(item.principal_parts).length
    ? asTextArray(item.principal_parts)
    : asTextArray(item.principalParts).length
      ? asTextArray(item.principalParts)
      : asTextArray(morphology.principal_parts);
}

function itemDefinition(item) {
  const morphology = itemMorphology(item);
  return (
    text(item.definition) ||
    text(morphology.definition) ||
    text(item.gloss) ||
    text(item.english)
  );
}

function itemLemma(item) {
  const raw =
    text(item.lemma) ||
    text(item.display_form) ||
    text(item.displayForm) ||
    text(item.greek);
  return stripLeadingArticle(primaryGreekForm(raw)).lemma || normalizeGreek(raw);
}

function itemForms(item) {
  const morphology = itemMorphology(item);
  const values = [
    item.lemma,
    item.display_form,
    item.displayForm,
    item.greek,
    item.dictionary_form,
    item.dictionaryForm,
    morphology.dictionary_form,
    morphology.citation_form,
    morphology.variant,
    morphology.variants,
    ...itemPrincipalParts(item),
  ];
  const forms = [];

  values.flat().forEach((value) => {
    const normalized = normalizeGreek(value);
    if (!normalized) {
      return;
    }

    forms.push(normalized);
    normalized.split(/\s*\/\s*/).forEach((part) => forms.push(normalizeGreek(part)));
  });

  return uniqueBy(forms.filter(Boolean), (value) => value.toLocaleLowerCase("el-GR"));
}

function normalizedLemmaKey(item) {
  return normalizeGreek(itemLemma(item)).toLocaleLowerCase("el-GR");
}

function splitMeanings(definition) {
  return definition
    .split(/\s*(?:;|,)\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  const unique = [];

  items.forEach((item) => {
    const key = keyFn(item);

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  });

  return unique;
}

export function buildCitation(item) {
  const morphology = itemMorphology(item);
  const dictionaryForm = itemDictionaryForm(item);
  const rawLemma =
    text(item.lemma) ||
    text(item.display_form) ||
    text(item.displayForm) ||
    text(item.greek);
  const parsed = stripLeadingArticle(primaryGreekForm(rawLemma));
  const displayParsed = stripLeadingArticle(primaryGreekForm(text(item.display_form) || text(item.displayForm) || rawLemma));
  const lemma = parsed.lemma || displayParsed.lemma || rawLemma;
  const article = itemGenderArticle(item) || parsed.article || displayParsed.article;
  const partOfSpeech = itemPartOfSpeech(item);

  if (partOfSpeech === "verb") {
    return dictionaryForm || lemma;
  }

  if (dictionaryForm) {
    return dictionaryForm;
  }

  if (partOfSpeech === "adjective") {
    const feminine =
      text(item.feminine_form) ||
      text(item.feminineForm) ||
      text(morphology.feminine_form) ||
      text(morphology.feminine);
    const neuter =
      text(item.neuter_form) ||
      text(item.neuterForm) ||
      text(morphology.neuter_form) ||
      text(morphology.neuter);
    return [lemma, feminine, neuter].filter(Boolean).join(", ");
  }

  if (partOfSpeech === "noun" || partOfSpeech === "proper noun" || article) {
    const genitive =
      text(item.genitive_form) ||
      text(item.genitiveForm) ||
      text(morphology.genitive_form) ||
      text(morphology.genitive);
    return [lemma, genitive, article].filter(Boolean).join(", ");
  }

  return rawLemma.includes("/") ? primaryGreekForm(rawLemma) : splitCitation(rawLemma).join(", ") || lemma;
}

function completenessScore(row) {
  const item = row.item;
  const morphology = itemMorphology(item);
  const has = (value) => Boolean(text(value)) || (Array.isArray(value) && value.length > 0);
  let score = row.source === "vocabulary" ? 100 : 0;

  [
    item.dictionary_form,
    item.dictionaryForm,
    item.definition,
    item.part_of_speech,
    item.partOfSpeech,
    item.article,
    item.gender,
    item.genitive_form,
    item.genitiveForm,
    item.feminine_form,
    item.feminineForm,
    item.neuter_form,
    item.neuterForm,
    item.principal_parts,
    item.principalParts,
    morphology.dictionary_form,
    morphology.citation_form,
    morphology.principal_parts,
    morphology.genitive,
    morphology.gender,
  ].forEach((value) => {
    if (has(value)) {
      score += 5;
    }
  });

  return score;
}

function normalizeLessonRefs(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isRecord).map((row) => ({
    slug: text(row.slug),
    numberLabel: text(row.numberLabel) || text(row.number_label),
    title: text(row.title),
    moduleSortOrder: Number(row.moduleSortOrder ?? row.module_sort_order ?? 0),
    lessonSortOrder: Number(row.lessonSortOrder ?? row.lesson_sort_order ?? 0),
  }));
}

function lessonRefKey(lesson) {
  return lesson.slug || `${lesson.numberLabel}:${lesson.title}`;
}

function sortLessons(lessons) {
  return [...lessons].sort((a, b) => (
    a.moduleSortOrder - b.moduleSortOrder ||
    a.lessonSortOrder - b.lessonSortOrder ||
    a.numberLabel.localeCompare(b.numberLabel, "en")
  ));
}

function isInflectedEnglishMeaning(meaning) {
  return /^(he\/she\/it|he|she|it|you|they)\s+/i.test(meaning);
}

function finalizeMeanings(meanings) {
  const unique = uniqueBy(meanings, (meaning) => meaning.toLocaleLowerCase("en-US"));
  const nonInflected = unique.filter((meaning) => !isInflectedEnglishMeaning(meaning));
  return nonInflected.length ? nonInflected : unique;
}

function isPlaceholderVocabulary(item) {
  const values = [
    item.lemma,
    item.display_form,
    item.displayForm,
    item.greek,
    item.gloss,
    item.definition,
    item.english,
  ].map((value) => text(value).toLocaleLowerCase("en-US"));

  return values.some((value) => (
    value === "vocabulary will be added later." ||
    value === "course vocabulary placeholder"
  ));
}

export function consolidateRows(rows) {
  const entries = new Map();

  rows.forEach((row) => {
    if (row.source !== "vocabulary") {
      return;
    }

    if (isPlaceholderVocabulary(row.item)) {
      return;
    }

    const key = normalizedLemmaKey(row.item);

    if (!key) {
      return;
    }

    const definition = itemDefinition(row.item);

    if (!definition) {
      return;
    }

    const rawLemma = itemLemma(row.item) || key;
    const meanings = splitMeanings(definition);
    const score = completenessScore(row);
    const existing = entries.get(key);
    const lessonRefs = normalizeLessonRefs(row.lessonRefs);
    const forms = itemForms(row.item);

    if (!existing) {
      const finalizedMeanings = finalizeMeanings(meanings);
      entries.set(key, {
        key,
        lemma: rawLemma,
        citation: buildCitation(row.item),
        meanings: finalizedMeanings,
        definition: finalizedMeanings.join(", "),
        partOfSpeech: itemPartOfSpeech(row.item),
        source: row.source,
        lessons: sortLessons(uniqueBy(lessonRefs, lessonRefKey)),
        audioUrl: textOrNull(row.item.audio_url),
        forms,
        completeness: score,
      });
      return;
    }

    meanings.forEach((meaning) => {
      if (!existing.meanings.some((item) => item.toLocaleLowerCase("en-US") === meaning.toLocaleLowerCase("en-US"))) {
        existing.meanings.push(meaning);
      }
    });

    existing.meanings = finalizeMeanings(existing.meanings);
    existing.definition = existing.meanings.join(", ");
    existing.lessons = sortLessons(uniqueBy([...existing.lessons, ...lessonRefs], lessonRefKey));
    existing.forms = uniqueBy([...existing.forms, ...forms], (value) => value.toLocaleLowerCase("el-GR"));
    existing.source = existing.source === row.source ? existing.source : "mixed";

    if (!existing.audioUrl) {
      existing.audioUrl = textOrNull(row.item.audio_url);
    }

    if (score > existing.completeness) {
      existing.lemma = rawLemma;
      existing.citation = buildCitation(row.item);
      existing.partOfSpeech = itemPartOfSpeech(row.item) || existing.partOfSpeech;
      existing.completeness = score;
    }
  });

  return Array.from(entries.values())
    .map(({ completeness, ...entry }) => entry)
    .sort((a, b) => a.lemma.localeCompare(b.lemma, "el-GR"));
}
