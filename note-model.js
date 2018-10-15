var MODULE = (function () {
  function Notes(text) {
    this.note = text
  }

  Notes.prototype.addNote = function () {

  };

  Notes.prototype.returnText = function () {
    return this.note
  };

  export.Notes = Notes;
})();
