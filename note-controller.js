// var element = document.getElementById("app")
// console.log(element);

// var noteList = new NotesList()


// element.innerHTML = notesListView.htmlReturn();
// console.log("goodbye");



(function (exports) {
  function NoteController(noteList = new NotesList()) {
    noteList.createAndStoreNote("Favourite drink: seltzer")
    this.notesListView = new NotesListView(noteList)
  }

  NoteController.prototype.insertNoteIntoHTML = function () {
    var element = document.getElementById('app')
    element.innerHTML = this.notesListView.htmlReturn();

  };
  exports.NoteController = NoteController;

})(this);
