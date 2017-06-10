(function() {

angular.module('app')
  .controller('singleNoteCtrl', ['noteService', function(noteService) {
    this.deleteNote = () => {
      return noteService.deleteNote(this.note.id)
        .then(() => {
          noteService.getNotes();
        })
        .catch(err => console.error(err));
    };
  }])
  .directive('singleNote', function() {
    return {
      restrict: 'E',
      scope: {
        note: '<',
        setCurrentNote: '<'
      },
      bindToController: true,
      controller: 'singleNoteCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'angular/components/single-note/single-note.html'
    }
  });
  
})();
