(function () {
  "use strict";

  const root = document.querySelector("[data-notebook-root]");

  if (!root) {
    return;
  }

  const noteList = root.querySelector("[data-note-list]");
  const noteCount = root.querySelector("[data-note-count]");
  const listStatus = root.querySelector("[data-note-list-status]");
  const noteForm = root.querySelector("[data-note-form]");
  const welcome = root.querySelector("[data-note-welcome]");
  const titleInput = root.querySelector("[data-note-title]");
  const bodyInput = root.querySelector("[data-note-body]");
  const noteMode = root.querySelector("[data-note-mode]");
  const editorHeading = root.querySelector("[data-note-editor-heading]");
  const savedTime = root.querySelector("[data-note-saved-time]");
  const characterCount = root.querySelector("[data-note-character-count]");
  const noteStatus = root.querySelector("[data-note-status]");
  const saveButton = root.querySelector("[data-note-save]");
  const deleteButton = root.querySelector("[data-note-delete]");
  const newNoteButtons = root.querySelectorAll("[data-note-new], [data-note-welcome-new]");
  const cancelButton = root.querySelector("[data-note-cancel]");
  const session = window.xenophonAuth?.readSession?.();

  let notes = [];
  let activeNoteId = "";
  let savedSnapshot = { title: "", body: "" };
  let noteRequestId = 0;

  function formatDate(value, prefix = "Updated") {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "";
    }

    return `${prefix} ${new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() === new Date().getFullYear() ? undefined : "numeric",
      hour: "numeric",
      minute: "2-digit"
    }).format(date)}`;
  }

  function setListStatus(message, kind = "") {
    listStatus.textContent = message;
    listStatus.classList.toggle("is-error", kind === "error");
  }

  function setEditorStatus(message, kind = "") {
    noteStatus.textContent = message;
    noteStatus.classList.toggle("is-error", kind === "error");
    noteStatus.classList.toggle("is-success", kind === "success");
  }

  function updateCharacterCount() {
    const length = bodyInput.value.length;
    characterCount.textContent = `${length.toLocaleString("en-US")} ${length === 1 ? "character" : "characters"}`;
  }

  function notePreview(body) {
    return String(body || "").replace(/\s+/g, " ").trim().slice(0, 150);
  }

  function isDirty() {
    return !noteForm.hidden && (
      titleInput.value !== savedSnapshot.title || bodyInput.value !== savedSnapshot.body
    );
  }

  function confirmDiscard() {
    return !isDirty() || window.confirm("Discard your unsaved changes?");
  }

  function setBusy(isBusy) {
    saveButton.disabled = isBusy;
    deleteButton.disabled = isBusy;
    titleInput.disabled = isBusy;
    bodyInput.disabled = isBusy;
    saveButton.textContent = isBusy ? "Saving..." : "Save Note";
  }

  async function apiRequest(url, options) {
    const response = await fetch(url, options);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || "The notebook request could not be completed.");
    }

    return data;
  }

  function renderNotes() {
    noteList.textContent = "";
    noteCount.textContent = `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;

    if (!notes.length) {
      const empty = document.createElement("p");
      empty.className = "notebook-empty";
      empty.textContent = "No saved notes yet. Use the + button to create your first one.";
      noteList.appendChild(empty);
      setListStatus("");
      return;
    }

    notes.forEach((note) => {
      const listItem = document.createElement("div");
      listItem.setAttribute("role", "listitem");
      const item = document.createElement("button");
      item.type = "button";
      item.className = "notebook-note-button";
      item.dataset.noteId = note.id;
      item.classList.toggle("is-active", note.id === activeNoteId);
      if (note.id === activeNoteId) {
        item.setAttribute("aria-current", "true");
      }

      const title = document.createElement("strong");
      title.textContent = note.title;
      item.appendChild(title);

      const preview = document.createElement("span");
      preview.className = "notebook-note-preview";
      preview.textContent = note.preview || "Empty note";
      item.appendChild(preview);

      const timestamp = document.createElement("span");
      timestamp.className = "notebook-note-time";
      timestamp.textContent = formatDate(note.updatedAt);
      item.appendChild(timestamp);

      listItem.appendChild(item);
      noteList.appendChild(listItem);
    });
  }

  function showWelcome() {
    activeNoteId = "";
    savedSnapshot = { title: "", body: "" };
    noteForm.hidden = true;
    welcome.hidden = false;
    window.xenophonGreekKeyboard?.close?.();
    renderNotes();
  }

  function showEditor(note = null) {
    activeNoteId = note?.id || "";
    titleInput.value = note?.title || "";
    bodyInput.value = note?.body || "";
    savedSnapshot = { title: titleInput.value, body: bodyInput.value };
    noteMode.textContent = note ? "Saved Note" : "New Note";
    editorHeading.textContent = note?.title || "New Note";
    savedTime.textContent = note ? formatDate(note.updatedAt) : "Not saved yet";
    deleteButton.hidden = !note;
    welcome.hidden = true;
    noteForm.hidden = false;
    setEditorStatus("");
    updateCharacterCount();
    renderNotes();
  }

  function startNewNote() {
    if (!confirmDiscard()) {
      return;
    }

    window.xenophonGreekKeyboard?.close?.();
    showEditor();
    titleInput.focus();
  }

  function upsertNoteSummary(note) {
    const summary = {
      id: note.id,
      title: note.title,
      preview: notePreview(note.body),
      bodyLength: note.body.length,
      createdAt: note.createdAt,
      updatedAt: note.updatedAt
    };

    notes = [summary, ...notes.filter((candidate) => candidate.id !== note.id)]
      .sort((left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime());
  }

  async function loadNote(noteId) {
    if (!noteId || noteId === activeNoteId && !noteForm.hidden) {
      return;
    }

    if (!confirmDiscard()) {
      return;
    }

    const requestId = noteRequestId + 1;
    noteRequestId = requestId;
    activeNoteId = noteId;
    showEditor({ id: noteId, title: "Loading note...", body: "", updatedAt: "" });
    setBusy(true);
    setEditorStatus("Loading note...");

    try {
      const data = await apiRequest(
        `/api/notebook-notes?email=${encodeURIComponent(session.email)}&id=${encodeURIComponent(noteId)}`
      );

      if (requestId !== noteRequestId) {
        return;
      }

      showEditor(data.note);
    } catch (error) {
      if (requestId === noteRequestId) {
        setEditorStatus(error.message || "The note could not be loaded.", "error");
      }
    } finally {
      if (requestId === noteRequestId) {
        setBusy(false);
      }
    }
  }

  async function loadNotes() {
    setListStatus("Loading your notes...");

    try {
      const data = await apiRequest(
        `/api/notebook-notes?email=${encodeURIComponent(session.email)}`
      );
      notes = Array.isArray(data.notes) ? data.notes : [];
      renderNotes();
      if (notes.length) {
        setListStatus("Select a note to read or edit it.");
      }
    } catch (error) {
      notes = [];
      renderNotes();
      setListStatus(error.message || "Your notes could not be loaded.", "error");
    }
  }

  noteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();
    const body = bodyInput.value;

    if (!title) {
      titleInput.setAttribute("aria-invalid", "true");
      titleInput.focus();
      setEditorStatus("Give this note a title before saving it.", "error");
      return;
    }

    titleInput.removeAttribute("aria-invalid");
    setBusy(true);
    setEditorStatus(activeNoteId ? "Saving your changes..." : "Saving your new note...");

    try {
      const data = await apiRequest("/api/notebook-notes", {
        method: activeNoteId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.email,
          noteId: activeNoteId || undefined,
          title,
          body
        })
      });
      upsertNoteSummary(data.note);
      showEditor(data.note);
      setEditorStatus("Note saved to your library.", "success");
      setListStatus("Your most recently updated notes appear first.");
    } catch (error) {
      setEditorStatus(error.message || "The note could not be saved.", "error");
    } finally {
      setBusy(false);
    }
  });

  deleteButton.addEventListener("click", async () => {
    if (!activeNoteId || !window.confirm(`Delete “${titleInput.value || "this note"}”? This cannot be undone.`)) {
      return;
    }

    const noteId = activeNoteId;
    setBusy(true);
    setEditorStatus("Deleting note...");

    try {
      await apiRequest(
        `/api/notebook-notes?email=${encodeURIComponent(session.email)}&id=${encodeURIComponent(noteId)}`,
        { method: "DELETE" }
      );
      notes = notes.filter((note) => note.id !== noteId);
      showWelcome();
      setListStatus("Note deleted.");
    } catch (error) {
      setEditorStatus(error.message || "The note could not be deleted.", "error");
    } finally {
      setBusy(false);
    }
  });

  noteList.addEventListener("click", (event) => {
    const noteButton = event.target.closest("[data-note-id]");
    if (noteButton) {
      loadNote(noteButton.dataset.noteId);
    }
  });

  newNoteButtons.forEach((button) => button.addEventListener("click", startNewNote));
  cancelButton.addEventListener("click", () => {
    if (confirmDiscard()) {
      showWelcome();
    }
  });
  bodyInput.addEventListener("input", updateCharacterCount);
  titleInput.addEventListener("input", () => {
    titleInput.removeAttribute("aria-invalid");
    if (!activeNoteId) {
      editorHeading.textContent = titleInput.value.trim() || "New Note";
    }
  });

  window.addEventListener("beforeunload", (event) => {
    if (isDirty()) {
      event.preventDefault();
      event.returnValue = "";
    }
  });

  if (!session?.email) {
    setListStatus("Sign in to open your notebook.", "error");
    newNoteButtons.forEach((button) => {
      button.disabled = true;
    });
  } else if (session.professorPreview) {
    setListStatus("Personal notebooks are hidden while previewing a student dashboard.", "error");
    newNoteButtons.forEach((button) => {
      button.disabled = true;
    });
  } else {
    loadNotes();
  }
}());
