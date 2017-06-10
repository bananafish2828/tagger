(function() {

angular.module('app')
  .controller('notesListCtrl', ['noteService', function(noteService) {
    this.notes = noteService.get('notes');
    // subscribe to updates of notes in our notesService
    noteService.subscribe('notes', (newNotes) => {
      this.notes = newNotes;
    });
    
    noteService.getNotes()
      .then(notes => {
        this.notes = notes;
      })
      .catch(err => console.error(err));
  }])
  .directive('notesList', function() {
    return {
      restrict: 'E',
      scope: {
        setCurrentNote: '<'
      },
      bindToController: true,
      controller: 'notesListCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'angular/components/notes-list/notes-list.html'
    }
  });
  
})();
