(function(exports) {
  function NotesList() {
    this.list = []
    this.idCounter = 0
  }

  NotesList.prototype.storeNote = function (note) {
    this.list.push(note)
  }

  NotesList.prototype.returnNotes = function () {
    return this.list
  };

  NotesList.prototype.createAndStoreNote = function (text) {
    this.list.push(new Notes(text, this.idCounter))
    this.idCounter++;


  };

  exports.NotesList = NotesList;
})(this);
