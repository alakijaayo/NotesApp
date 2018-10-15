(function(exports) {
  function NotesList() {
    this.list = []
  }

  NotesList.prototype.storeNote = function (note) {
    this.list.push(note)
  }

  NotesList.prototype.returnNotes = function () {
    return this.list
  };

  NotesList.prototype.createAndStoreNote = function (text) {
    this.list.push(new Notes(text))
  };

  exports.NotesList = NotesList;
})(this);
