(function(exports) {
  function testListModel() {
    var notesList = new NotesList();
    var notesListView = new NotesListView(notesList);
    assert.isTrue(notesListView.view instanceof NotesList)
    }

  function testHTMLReturn() {
    var notesList = new NotesList();
    notesList.createAndStoreNote('ayo')
    notesList.createAndStoreNote('aidan')
    var notesListView = new NotesListView(notesList);
    var text = "<ul><li>ayo</li><li>aidan</li></ul>"
    assert.isTrue(notesListView.htmlReturn() === text)
  }

  testListModel();
  testHTMLReturn();
})(this);
