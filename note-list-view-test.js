(function(exports) {
  function testListModel() {
    var notesListView = new NotesListView();
    assert.isTrue(notesListView.view instanceof NotesList)
    }

  function testHTMLReturn() {
    var notesListView = new NotesListView();
    notesListView.view.createAndStoreNote('ayo')
    notesListView.view.createAndStoreNote('aidan')
    var text = "<ul><li>ayo</li><li>aidan</li></ul>"
    assert.isTrue(notesListView.htmlReturn() === text)
  }

  testListModel();
  testHTMLReturn();
})(this);
