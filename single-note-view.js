(function(exports) {
  function SingleNoteView(notes) {
    this.notes = notes;
  };

  SingleNoteView.prototype.returnNote = function () {
    var text = this.notes.returnText();
    return "<div>" + text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

var notes = new Notes("Favourite Marvel Film: Black Panther")

var singleNote = new SingleNoteView(notes)

console.log(singleNote.returnNote());
