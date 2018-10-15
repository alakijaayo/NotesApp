(function(exports) {
  function testNoteModel() {
    var note = new Notes('java sucks')
    assert.isTrue(note.note === 'java sucks')
  };

  function testReturnText() {
    var note = new Notes('text')
    assert.isTrue(note.returnText() === 'text')
  }

  testReturnText();
  testNoteModel();
})(this)
