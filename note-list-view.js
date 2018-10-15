(function(exports) {
  function NotesListView() {
    this.view = new NotesList();
  }

  NotesListView.prototype.htmlReturn = function () {
    var text = "<ul>"
    for (var i = 0; i < this.view.returnNotes.length; i++) {
      text = text + "<li>" + this.view.returnNotes[i].text + "</li>"
    }
    text = text + "</ul>"
    return text
  };
  exports.NotesListView = NotesListView;
})(this);
