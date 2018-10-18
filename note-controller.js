// var element = document.getElementById("app")
// console.log(element);
//
//
// element.innerHTML = "Howdy";

(function(exports) {
  function NoteController(notesList = new NotesList()) {
    this.notesList = notesList
    this.notesList.createAndStoreNote("Favourite drink: Ribena")
    this.notesListView = new NotesListView(notesList)
  }

  NoteController.prototype.insertNoteIntoHTML = function () {
     var element = document.getElementById('app')
     return element.innerHTML = this.notesListView.htmlReturn();
   };

   exports.NoteController = NoteController;
})(this)

var ayo = new NoteController()

ayo.insertNoteIntoHTML()
