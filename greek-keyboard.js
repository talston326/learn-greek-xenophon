(function () {
  "use strict";

  /*
    Reusable Ancient Greek QWERTY-style keyboard.
    To enable it on future pages, load this file and add class="greek-input" to
    any input or textarea that should receive Greek text. Optional Show Keyboard
    buttons can use data-greek-keyboard-trigger in the same container as the field,
    or data-greek-keyboard-target="field-id" to point at a specific field.
  */

  const KEY_ROWS = [
    ["ς", "ε", "ρ", "τ", "υ", "θ", "ι", "ο", "π"],
    ["α", "σ", "δ", "φ", "γ", "η", "ξ", "κ", "λ"],
    ["ζ", "χ", "ψ", "ω", "β", "ν", "μ"]
  ];
  const PUNCTUATION = ["·", ";", ",", "."];
  const VOWELS = new Set(["α", "ε", "η", "ι", "ο", "υ", "ω", "Α", "Ε", "Η", "Ι", "Ο", "Υ", "Ω"]);
  const GREEK_NAMES = {
    α: "alpha",
    β: "beta",
    γ: "gamma",
    δ: "delta",
    ε: "epsilon",
    ζ: "zeta",
    η: "eta",
    θ: "theta",
    ι: "iota",
    κ: "kappa",
    λ: "lambda",
    μ: "mu",
    ν: "nu",
    ξ: "xi",
    ο: "omicron",
    π: "pi",
    ρ: "rho",
    σ: "sigma",
    ς: "final sigma",
    τ: "tau",
    υ: "upsilon",
    φ: "phi",
    χ: "chi",
    ψ: "psi",
    ω: "omega"
  };

  const DIACRITICS = [
    { id: "smooth", label: "smooth breathing", shortLabel: "Smooth", display: "᾿", combining: "\u0313" },
    { id: "rough", label: "rough breathing", shortLabel: "Rough", display: "῾", combining: "\u0314" },
    { id: "acute", label: "acute", shortLabel: "Acute", display: "´", combining: "\u0301" },
    { id: "grave", label: "grave", shortLabel: "Grave", display: "`", combining: "\u0300" },
    { id: "circumflex", label: "circumflex", shortLabel: "Circ.", display: "῀", combining: "\u0342" },
    { id: "diaeresis", label: "diaeresis", shortLabel: "Diaer.", display: "¨", combining: "\u0308" },
    { id: "iota", label: "iota subscript", shortLabel: "Iota sub.", display: "◌ͅ", combining: "\u0345" },
    { id: "macron", label: "macron", shortLabel: "Macron", display: "¯", combining: "\u0304" },
    { id: "breve", label: "breve", shortLabel: "Breve", display: "˘", combining: "\u0306" }
  ];
  const DIACRITIC_BY_ID = new Map(DIACRITICS.map((mark) => [mark.id, mark]));
  const COMBINING_ORDER = [
    "smooth",
    "rough",
    "diaeresis",
    "acute",
    "grave",
    "circumflex",
    "macron",
    "breve",
    "iota"
  ];

  const COMPOSITION_BASES = ["α", "ε", "η", "ι", "ο", "υ", "ω", "Α", "Ε", "Η", "Ι", "Ο", "Υ", "Ω"];
  const COMMON_MARK_GROUPS = [
    [],
    ["smooth"],
    ["rough"],
    ["acute"],
    ["grave"],
    ["circumflex"],
    ["diaeresis"],
    ["macron"],
    ["breve"],
    ["smooth", "acute"],
    ["rough", "acute"],
    ["smooth", "grave"],
    ["rough", "grave"],
    ["smooth", "circumflex"],
    ["rough", "circumflex"],
    ["iota"],
    ["acute", "iota"],
    ["grave", "iota"],
    ["circumflex", "iota"],
    ["smooth", "iota"],
    ["rough", "iota"],
    ["smooth", "acute", "iota"],
    ["rough", "acute", "iota"],
    ["smooth", "grave", "iota"],
    ["rough", "grave", "iota"],
    ["smooth", "circumflex", "iota"],
    ["rough", "circumflex", "iota"],
    ["diaeresis", "acute"],
    ["diaeresis", "grave"],
    ["diaeresis", "circumflex"]
  ];

  let activeField = null;
  let keyboard = null;
  let pendingDisplay = null;
  let pendingDiacritics = new Set();
  let shiftActive = false;

  function isGreekField(element) {
    return Boolean(element?.matches?.("input.greek-input, textarea.greek-input"));
  }

  function normalizeMarkIds(markIds) {
    const markSet = new Set(markIds);
    if (markSet.has("smooth") && markSet.has("rough")) {
      markSet.delete("smooth");
    }
    if (markSet.has("acute") && markSet.has("grave")) {
      markSet.delete("grave");
    }
    if (markSet.has("acute") && markSet.has("circumflex")) {
      markSet.delete("circumflex");
    }
    if (markSet.has("grave") && markSet.has("circumflex")) {
      markSet.delete("circumflex");
    }
    return COMBINING_ORDER.filter((id) => markSet.has(id));
  }

  function compositionKey(baseLetter, markIds) {
    return `${baseLetter}|${normalizeMarkIds(markIds).join("+")}`;
  }

  function composeWithCombining(baseLetter, markIds) {
    const marks = normalizeMarkIds(markIds)
      .map((id) => DIACRITIC_BY_ID.get(id)?.combining || "")
      .join("");
    return `${baseLetter}${marks}`.normalize("NFC");
  }

  // This table is generated once from the common Ancient Greek combinations.
  // composeGreekLetter checks it first, then falls back to NFC composition.
  const PRECOMPOSED_MAP = (() => {
    const table = new Map();
    COMPOSITION_BASES.forEach((base) => {
      COMMON_MARK_GROUPS.forEach((marks) => {
        const composed = composeWithCombining(base, marks);
        if ([...composed].length === 1) {
          table.set(compositionKey(base, marks), composed);
        }
      });
    });
    return table;
  })();

  function composeGreekLetter(baseLetter, markIds) {
    if (!markIds.length) {
      return baseLetter;
    }

    const key = compositionKey(baseLetter, markIds);
    return PRECOMPOSED_MAP.get(key) || composeWithCombining(baseLetter, markIds);
  }

  function createButton(className, label, text) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.setAttribute("aria-label", label);
    button.textContent = text;
    return button;
  }

  function createLetterButton(letter) {
    const button = createButton("greek-keyboard-key greek-keyboard-letter greek-text", letter, letter);
    button.dataset.greekKeyboardLetter = letter;
    return button;
  }

  function createDiacriticButton(mark) {
    const button = createButton("greek-keyboard-key greek-keyboard-mark", mark.label, "");
    button.dataset.greekKeyboardDiacritic = mark.id;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `
      <span class="greek-keyboard-mark-symbol greek-text" aria-hidden="true">${mark.display}</span>
      <span class="greek-keyboard-mark-label">${mark.shortLabel}</span>
    `;
    return button;
  }

  function createToolButton(label, action, className = "") {
    const button = createButton(`greek-keyboard-tool ${className}`.trim(), label, label);
    button.dataset.greekKeyboardAction = action;
    return button;
  }

  function appendLetterRow(parent, rowLetters) {
    const row = document.createElement("div");
    row.className = "greek-keyboard-row greek-keyboard-letter-row";
    rowLetters.forEach((letter) => row.appendChild(createLetterButton(letter)));
    parent.appendChild(row);
  }

  function buildKeyboard() {
    keyboard = document.createElement("aside");
    keyboard.className = "greek-keyboard-popup greek-keyboard-qwerty";
    keyboard.hidden = true;
    keyboard.setAttribute("aria-label", "Ancient Greek polytonic keyboard");
    keyboard.setAttribute("data-greek-keyboard", "");

    const header = document.createElement("div");
    header.className = "greek-keyboard-header";
    const title = document.createElement("h2");
    title.textContent = "Ancient Greek Keyboard";
    header.appendChild(title);
    header.appendChild(createToolButton("Hide Keyboard", "close"));
    keyboard.appendChild(header);

    const markRow = document.createElement("div");
    markRow.className = "greek-keyboard-row greek-keyboard-mark-row";
    DIACRITICS.forEach((mark) => markRow.appendChild(createDiacriticButton(mark)));
    keyboard.appendChild(markRow);

    pendingDisplay = document.createElement("p");
    pendingDisplay.className = "greek-keyboard-pending";
    pendingDisplay.setAttribute("aria-live", "polite");
    keyboard.appendChild(pendingDisplay);

    const letters = document.createElement("div");
    letters.className = "greek-keyboard-letter-panel";
    KEY_ROWS.forEach((row) => appendLetterRow(letters, row));
    keyboard.appendChild(letters);

    const punctuation = document.createElement("div");
    punctuation.className = "greek-keyboard-row greek-keyboard-punctuation-row";
    PUNCTUATION.forEach((mark) => {
      const button = createButton("greek-keyboard-key greek-keyboard-punctuation greek-text", `Insert ${mark}`, mark);
      button.dataset.greekKeyboardValue = mark;
      punctuation.appendChild(button);
    });
    keyboard.appendChild(punctuation);

    const tools = document.createElement("div");
    tools.className = "greek-keyboard-tools";
    tools.appendChild(createToolButton("Shift", "shift", "greek-keyboard-shift"));
    tools.appendChild(createToolButton("Backspace", "backspace"));
    tools.appendChild(createToolButton("Space", "space", "greek-keyboard-spacebar"));
    tools.appendChild(createToolButton("Clear", "clear"));
    tools.appendChild(createToolButton("Close", "close"));
    keyboard.appendChild(tools);

    keyboard.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });
    keyboard.addEventListener("click", handleKeyboardClick);
    document.body.appendChild(keyboard);
    updateKeyboardState();
  }

  function ensureKeyboard() {
    if (!keyboard) {
      buildKeyboard();
    }
  }

  function updateKeyboardState() {
    if (!keyboard) {
      return;
    }

    keyboard.querySelectorAll("[data-greek-keyboard-letter]").forEach((button) => {
      const baseLetter = button.dataset.greekKeyboardLetter || "";
      const displayLetter = shiftActive ? baseLetter.toLocaleUpperCase("el-GR") : baseLetter;
      const letterName = GREEK_NAMES[baseLetter] || displayLetter;
      button.textContent = displayLetter;
      button.setAttribute("aria-label", shiftActive ? `uppercase ${letterName}` : letterName);
    });

    keyboard.querySelectorAll("[data-greek-keyboard-diacritic]").forEach((button) => {
      const markId = button.dataset.greekKeyboardDiacritic;
      const isPending = pendingDiacritics.has(markId);
      button.classList.toggle("is-active", isPending);
      button.setAttribute("aria-pressed", String(isPending));
    });

    keyboard.querySelector("[data-greek-keyboard-action='shift']")?.classList.toggle("is-active", shiftActive);
    keyboard.querySelector("[data-greek-keyboard-action='shift']")?.setAttribute("aria-pressed", String(shiftActive));

    if (pendingDisplay) {
      const labels = normalizeMarkIds(pendingDiacritics).map((id) => DIACRITIC_BY_ID.get(id)?.label).filter(Boolean);
      pendingDisplay.textContent = labels.length ? `Pending: ${labels.join(" + ")}` : "Pending: none";
    }
  }

  function clearPendingDiacritics() {
    pendingDiacritics.clear();
    updateKeyboardState();
  }

  function setFixedBottomMode(isFixed) {
    keyboard.classList.toggle("is-fixed-bottom", isFixed);
    document.body.classList.toggle("greek-keyboard-open", !keyboard.hidden && isFixed);

    if (isFixed && !keyboard.hidden) {
      document.documentElement.style.setProperty("--greek-keyboard-offset", `${keyboard.offsetHeight}px`);
    } else {
      document.documentElement.style.removeProperty("--greek-keyboard-offset");
    }
  }

  function positionKeyboard() {
    if (!activeField || keyboard.hidden) {
      return;
    }

    const rect = activeField.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const useFixedBottom = viewportWidth <= 1024 || rect.top < 12 || viewportHeight - rect.bottom < 280;

    setFixedBottomMode(useFixedBottom);

    if (useFixedBottom) {
      keyboard.style.left = "";
      keyboard.style.top = "";
      keyboard.style.width = "";
      const keyboardTop = viewportHeight - keyboard.offsetHeight - 10;
      const freshRect = activeField.getBoundingClientRect();
      const overlap = freshRect.bottom - keyboardTop + 18;

      if (overlap > 0) {
        window.scrollBy({ top: overlap, behavior: "auto" });
      } else if (freshRect.top < 12) {
        window.scrollBy({ top: freshRect.top - 12, behavior: "auto" });
      }
      return;
    }

    const width = Math.min(1000, viewportWidth - 24);
    const left = Math.min(Math.max(12, rect.left + window.scrollX), viewportWidth - width - 12 + window.scrollX);
    keyboard.style.width = `${width}px`;
    keyboard.style.left = `${left}px`;
    keyboard.style.top = `${rect.bottom + window.scrollY + 8}px`;
  }

  function showKeyboard(field) {
    if (!isGreekField(field)) {
      return;
    }

    ensureKeyboard();
    activeField = field;
    keyboard.hidden = false;
    keyboard.setAttribute("aria-hidden", "false");
    updateKeyboardState();
    positionKeyboard();
  }

  function closeKeyboard() {
    if (!keyboard) {
      return;
    }

    keyboard.hidden = true;
    keyboard.setAttribute("aria-hidden", "true");
    setFixedBottomMode(false);
  }

  function insertText(value) {
    if (!activeField) {
      return;
    }

    const start = activeField.selectionStart ?? activeField.value.length;
    const end = activeField.selectionEnd ?? activeField.value.length;
    activeField.value = `${activeField.value.slice(0, start)}${value}${activeField.value.slice(end)}`.normalize("NFC");
    activeField.focus({ preventScroll: true });
    const nextPosition = start + value.length;
    activeField.setSelectionRange(nextPosition, nextPosition);
    activeField.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function insertLetter(letter) {
    const displayLetter = shiftActive ? letter.toLocaleUpperCase("el-GR") : letter;
    const pendingMarks = normalizeMarkIds(pendingDiacritics);
    const output = VOWELS.has(displayLetter)
      ? composeGreekLetter(displayLetter, pendingMarks)
      : composeGreekLetter(displayLetter, pendingMarks);

    insertText(output);
    pendingDiacritics.clear();

    // Shift is intentionally one-shot, matching touch keyboards and preventing
    // accidental uppercase runs during short answer entry.
    if (shiftActive) {
      shiftActive = false;
    }

    updateKeyboardState();
  }

  function backspace() {
    if (!activeField) {
      return;
    }

    const start = activeField.selectionStart ?? activeField.value.length;
    const end = activeField.selectionEnd ?? activeField.value.length;

    if (start !== end) {
      activeField.value = `${activeField.value.slice(0, start)}${activeField.value.slice(end)}`;
      activeField.setSelectionRange(start, start);
    } else if (start > 0) {
      activeField.value = `${activeField.value.slice(0, start - 1)}${activeField.value.slice(end)}`;
      activeField.setSelectionRange(start - 1, start - 1);
    }

    activeField.focus({ preventScroll: true });
    activeField.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function clearField() {
    if (!activeField) {
      return;
    }

    activeField.value = "";
    activeField.focus({ preventScroll: true });
    activeField.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function toggleDiacritic(markId) {
    if (pendingDiacritics.has(markId)) {
      pendingDiacritics.delete(markId);
    } else {
      pendingDiacritics.add(markId);
    }
    updateKeyboardState();
  }

  function handleKeyboardClick(event) {
    const letterButton = event.target.closest("[data-greek-keyboard-letter]");
    if (letterButton) {
      insertLetter(letterButton.dataset.greekKeyboardLetter || "");
      return;
    }

    const markButton = event.target.closest("[data-greek-keyboard-diacritic]");
    if (markButton) {
      toggleDiacritic(markButton.dataset.greekKeyboardDiacritic);
      return;
    }

    const valueButton = event.target.closest("[data-greek-keyboard-value]");
    if (valueButton) {
      insertText(valueButton.dataset.greekKeyboardValue || "");
      return;
    }

    const actionButton = event.target.closest("[data-greek-keyboard-action]");
    if (!actionButton) {
      return;
    }

    const action = actionButton.dataset.greekKeyboardAction;
    if (action === "shift") {
      shiftActive = !shiftActive;
      updateKeyboardState();
    } else if (action === "space") {
      insertText(" ");
      clearPendingDiacritics();
    } else if (action === "backspace") {
      backspace();
    } else if (action === "clear") {
      clearField();
      clearPendingDiacritics();
    } else if (action === "close") {
      closeKeyboard();
      activeField?.focus({ preventScroll: true });
    }
  }

  function findTriggerField(trigger) {
    const targetId = trigger.dataset.greekKeyboardTarget;
    if (targetId) {
      const explicitField = document.getElementById(targetId);
      if (isGreekField(explicitField)) {
        return explicitField;
      }
    }

    return trigger.closest("article, fieldset, form, section, div")?.querySelector(".greek-input") || activeField;
  }

  document.addEventListener("focusin", (event) => {
    if (isGreekField(event.target)) {
      showKeyboard(event.target);
    } else if (!keyboard?.contains(event.target)) {
      closeKeyboard();
    }
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-greek-keyboard-trigger]");
    if (trigger) {
      const field = findTriggerField(trigger);
      if (field) {
        field.focus({ preventScroll: true });
        showKeyboard(field);
      }
      return;
    }

    if (
      keyboard &&
      !keyboard.hidden &&
      !keyboard.contains(event.target) &&
      !isGreekField(event.target)
    ) {
      closeKeyboard();
    }
  });

  window.addEventListener("resize", positionKeyboard);
  window.addEventListener("scroll", positionKeyboard, true);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && keyboard && !keyboard.hidden) {
      closeKeyboard();
    }
  });

  window.xenophonGreekKeyboard = {
    show: showKeyboard,
    close: closeKeyboard,
    composeGreekLetter
  };
}());
