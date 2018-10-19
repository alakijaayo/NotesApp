(function(exports) {
  function testList() {
    var noteList = new NotesList();
    assert.isTrue(noteList.list[0] === undefined && Array.isArray(noteList.list))

  }

  function testStoreNote() {
    var noteList = new NotesList();
    var note = new Notes("Aidan loves table tennis", 0);
    noteList.storeNote(note)
    assert.isTrue(noteList.list.includes(note))
  }

  function testReturnNotes() {
    var noteList = new NotesList();
    var note = new Notes('asdfasdf', 0);
    noteList.storeNote(note)
    assert.isTrue(noteList.returnNotes().includes(note))
  }

  function testReturn2Notes() {
    var noteList = new NotesList();
    var note = new Notes('asdfasdf', 0);
    var note2 = new Notes('asdfasdf', 1);
    noteList.storeNote(note)
    noteList.storeNote(note2)
    assert.isTrue(noteList.returnNotes().includes(note))
    assert.isTrue(noteList.returnNotes().includes(note2))
  }

  function testCreateAndStoreNote() {
    var noteList = new NotesList();
    noteList.createAndStoreNote('ayo');
    assert.isTrue(noteList.list[0].note === 'ayo')
    assert.isTrue(noteList.idCounter === 1)
  }

  testCreateAndStoreNote();
  testReturnNotes();
  testReturn2Notes();
  testList();
  testStoreNote();
})(this);
