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

  NoteController.prototype.makeURLChangeShowNoteForCurrentPage = function () {
    var boundShowNoteForCurrentPage = this.showNoteForCurrentPage.bind(this);
    window.addEventListener("hashchange", boundShowNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function () {
    var noteId = this.getNoteFromURL(window.location)
    var notes = this.notesList.returnNotes()
    var note = notes.find(function(element) {
      return element.id === parseInt(noteId);
    })
    this.showNote(note);
  };

  NoteController.prototype.getNoteFromURL = function (location) {
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function (note) {
    var notes =  new SingleNoteView(note)
    document
      .getElementById('app')
      .innerHTML = notes.returnNote();
  };

   exports.NoteController = NoteController;
})(this)

var ayo = new NoteController()

ayo.insertNoteIntoHTML()
ayo.makeURLChangeShowNoteForCurrentPage();
