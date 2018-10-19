(function(exports) {
  function testListModel() {
    var notesList = new NotesList();
    var notesListView = new NotesListView(notesList);
    assert.isTrue(notesListView.view instanceof NotesList)
    }

  function testHTMLReturn() {
    var notesList = new NotesList();
    notesList.createAndStoreNote('Good Afternoon Marianne')
    notesList.createAndStoreNote('I Think your Alien T-shirt is...... pretty cool')
    var notesListView = new NotesListView(notesList);
    var text = "<ul><li><a href='#0'>Good Afternoon Maria</a></li><li><a href='#1'>I Think your Alien T</a></li></ul>"
    assert.isTrue(notesListView.htmlReturn() === text)
  }

  testListModel();
  testHTMLReturn();
})(this);
