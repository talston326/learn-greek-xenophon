(function () {
  "use strict";

  /*
    Reusable Ancient Greek keyboard.
    To enable it on future pages, load this file and add class="greek-input" to
    any input or textarea that should receive Greek text. Optional Show Keyboard
    buttons can use data-greek-keyboard-trigger in the same container as the field,
    or data-greek-keyboard-target="field-id" to point at a specific field.
  */

  const LOWERCASE = "α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ ς τ υ φ χ ψ ω".split(" ");
  const UPPERCASE = "Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω".split(" ");
  const PUNCTUATION = ["·", ";", ",", ".", "“", "”", "‘", "’"];

  const DIACRITICS = [
    { label: "Smooth breathing", value: "\u0313" },
    { label: "Rough breathing", value: "\u0314" },
    { label: "Acute", value: "\u0301" },
    { label: "Grave", value: "\u0300" },
    { label: "Circumflex", value: "\u0342" },
    { label: "Diaeresis", value: "\u0308" },
    { label: "Iota subscript", value: "\u0345" },
    { label: "Macron", value: "\u0304" },
    { label: "Breve", value: "\u0306" }
  ];

  const COMMON_VOWELS = [
    { label: "Alpha", values: ["ἀ", "ἁ", "ἄ", "ἅ", "ἂ", "ἃ", "ἆ", "ἇ"] },
    { label: "Epsilon", values: ["ἐ", "ἑ", "ἔ", "ἕ", "ἒ", "ἓ"] },
    { label: "Eta", values: ["ἠ", "ἡ", "ἤ", "ἥ", "ἢ", "ἣ", "ἦ", "ἧ", "ῃ", "ᾐ", "ᾑ", "ᾔ", "ᾕ", "ᾖ", "ᾗ"] },
    { label: "Iota", values: ["ἰ", "ἱ", "ἴ", "ἵ", "ἲ", "ἳ", "ἶ", "ἷ", "ϊ", "ΐ", "ῒ", "ῗ"] },
    { label: "Omicron", values: ["ὀ", "ὁ", "ὄ", "ὅ", "ὂ", "ὃ"] },
    { label: "Upsilon", values: ["ὐ", "ὑ", "ὔ", "ὕ", "ὒ", "ὓ", "ὖ", "ὗ", "ϋ", "ΰ", "ῢ", "ῧ"] },
    { label: "Omega", values: ["ὠ", "ὡ", "ὤ", "ὥ", "ὢ", "ὣ", "ὦ", "ὧ", "ῳ", "ᾠ", "ᾡ", "ᾤ", "ᾥ", "ᾦ", "ᾧ"] }
  ];

  const IOTA_SUBSCRIPT_FORMS = [
    { label: "Alpha + iota", values: ["ᾳ", "ᾴ", "ᾲ", "ᾷ"] },
    { label: "Eta + iota", values: ["ῃ", "ῄ", "ῂ", "ῇ"] },
    { label: "Omega + iota", values: ["ῳ", "ῴ", "ῲ", "ῷ"] }
  ];

  let activeField = null;
  let keyboard = null;
  let body = null;

  function isGreekField(element) {
    return Boolean(element?.matches?.("input.greek-input, textarea.greek-input"));
  }

  function createCharacterButton(value, options = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = options.className || "greek-keyboard-key greek-text";
    button.dataset.greekKeyboardValue = value;
    button.setAttribute("aria-label", options.label || `Insert ${value}`);
    button.textContent = value;
    return button;
  }

  function createToolButton(label, action) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "greek-keyboard-tool";
    button.dataset.greekKeyboardAction = action;
    button.textContent = label;
    return button;
  }

  function appendKeyRow(parent, values) {
    const row = document.createElement("div");
    row.className = "greek-keyboard-row";
    values.forEach((value) => row.appendChild(createCharacterButton(value)));
    parent.appendChild(row);
  }

  function appendSection(parent, title, builder) {
    const section = document.createElement("section");
    section.className = "greek-keyboard-section";

    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);

    builder(section);
    parent.appendChild(section);
  }

  function buildKeyboard() {
    keyboard = document.createElement("aside");
    keyboard.className = "greek-keyboard-popup";
    keyboard.hidden = true;
    keyboard.setAttribute("aria-label", "Ancient Greek polytonic keyboard");
    keyboard.setAttribute("data-greek-keyboard", "");

    const header = document.createElement("div");
    header.className = "greek-keyboard-header";

    const title = document.createElement("h2");
    title.textContent = "Ancient Greek Keyboard";
    header.appendChild(title);
    header.appendChild(createToolButton("Close", "close"));
    keyboard.appendChild(header);

    body = document.createElement("div");
    body.className = "greek-keyboard-body";

    appendSection(body, "Letters", (section) => {
      appendKeyRow(section, LOWERCASE);
      appendKeyRow(section, UPPERCASE);
    });

    appendSection(body, "Breathings and Accents", (section) => {
      const row = document.createElement("div");
      row.className = "greek-keyboard-row greek-keyboard-row--marks";
      DIACRITICS.forEach((mark) => {
        const button = createCharacterButton(mark.value, {
          className: "greek-keyboard-key greek-keyboard-mark",
          label: `Insert ${mark.label}`
        });
        button.innerHTML = `<span class="greek-keyboard-mark-sample greek-text">◌${mark.value}</span><span>${mark.label}</span>`;
        row.appendChild(button);
      });
      section.appendChild(row);
    });

    appendSection(body, "Common Vowel Forms", (section) => {
      COMMON_VOWELS.forEach((group) => {
        const groupEl = document.createElement("div");
        groupEl.className = "greek-keyboard-group";
        const label = document.createElement("p");
        label.textContent = group.label;
        groupEl.appendChild(label);
        appendKeyRow(groupEl, group.values);
        section.appendChild(groupEl);
      });
    });

    appendSection(body, "Iota Subscript Forms", (section) => {
      IOTA_SUBSCRIPT_FORMS.forEach((group) => {
        const groupEl = document.createElement("div");
        groupEl.className = "greek-keyboard-group";
        const label = document.createElement("p");
        label.textContent = group.label;
        groupEl.appendChild(label);
        appendKeyRow(groupEl, group.values);
        section.appendChild(groupEl);
      });
    });

    appendSection(body, "Punctuation", (section) => appendKeyRow(section, PUNCTUATION));
    keyboard.appendChild(body);

    const tools = document.createElement("div");
    tools.className = "greek-keyboard-tools";
    tools.appendChild(createToolButton("Space", "space"));
    tools.appendChild(createToolButton("Backspace", "backspace"));
    tools.appendChild(createToolButton("Clear", "clear"));
    tools.appendChild(createToolButton("Close keyboard", "close"));
    keyboard.appendChild(tools);

    keyboard.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });

    keyboard.addEventListener("click", handleKeyboardClick);
    document.body.appendChild(keyboard);
  }

  function ensureKeyboard() {
    if (!keyboard) {
      buildKeyboard();
    }
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

    const width = Math.min(960, viewportWidth - 24);
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
    activeField.value = `${activeField.value.slice(0, start)}${value}${activeField.value.slice(end)}`;
    activeField.focus({ preventScroll: true });
    const nextPosition = start + value.length;
    activeField.setSelectionRange(nextPosition, nextPosition);
    activeField.dispatchEvent(new Event("input", { bubbles: true }));
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

  function handleKeyboardClick(event) {
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
    if (action === "space") {
      insertText(" ");
    } else if (action === "backspace") {
      backspace();
    } else if (action === "clear") {
      clearField();
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
    close: closeKeyboard
  };
}());
