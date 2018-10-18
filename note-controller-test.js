(function(exports) {
  function testNoteController() {
    var note = new NoteController()
    assert.isTrue(note.notesList instanceof NotesList)
  };

  function MockListView() {

  }

  MockListView.prototype.htmlReturn = function () {
    return "<ul><li>Favourite drink: Ribena</li></ul>"
  };

  function MockNotesList() {

  }

  MockNotesList.prototype.createAndStoreNote = function () {
    return true
  };

  function testNoteController2() {
    var mockNotesList = new MockNotesList()
    var noteController = new NoteController(mockNotesList)
    noteController.insertNoteIntoHTML
    var element = document.getElementById('app')
    assert.isTrue(element.innerHTML === "<ul><li>Favourite drink: Rib</li></ul>")
  };



  testNoteController();
  testNoteController2();
})(this);
