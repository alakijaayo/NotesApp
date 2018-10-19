(function(exports) {
  function NotesListView(noteList) {
    this.view = noteList
  }

  NotesListView.prototype.htmlReturn = function () {
    var text = "<ul>"
    for (var i = 0; i < this.view.returnNotes().length; i++) {
      text = text + "<li><a href='#" + this.view.returnNotes()[i].id +"'>" + this.view.returnNotes()[i].note.slice(0, 20) + "</a></li>"
    }
    text = text + "</ul>"
    return text
  };

  exports.NotesListView = NotesListView;
})(this);
