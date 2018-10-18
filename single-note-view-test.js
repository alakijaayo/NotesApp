(function(exports) {
  function testNoteView() {
    function MockNote() {}

    MockNote.prototype.returnText = function () {
      return "Favourite Marvel Film: Black Panther"
    };

    var mockNote = new MockNote
    var noteView = new SingleNoteView(mockNote)

    assert.isTrue(noteView.returnNote() === "<div>Favourite Marvel Film: Black Panther</div>")

  };

  testNoteView();

})(this);
