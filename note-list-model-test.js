(function(exports) {
  function testList() {
    var noteList = new NotesList();
    assert.isTrue(noteList.list[0] === undefined && Array.isArray(noteList.list))

  }

  function testStoreNote() {
    var noteList = new NotesList();
    var note = new Notes("Aidan loves table tennis");
    noteList.storeNote(note)
    assert.isTrue(noteList.list.includes(note))
  }

  testList();
  testStoreNote();
})(this);
