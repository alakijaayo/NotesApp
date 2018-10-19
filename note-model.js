(function (exports) {
  function Notes(text, id) {
    this.note = text
    this.id = id
  }

  Notes.prototype.addNote = function () {

  };

  Notes.prototype.returnText = function () {
    return this.note
  };

  exports.Notes = Notes;
})(this);
