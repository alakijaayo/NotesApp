(function(exports) {
  function NotesList() {
    this.list = []
  }

  NotesList.prototype.storeNote = function (note) {
    this.list.push(note)
  }
  exports.NotesList = NotesList;
})(this);
