(function() {

angular.module('app')
  .controller('noteEditorCtrl', ['noteService', function(noteService) {
    this.isEditing = () => {
      return this.id && this.id >= 0;
    };
    this.submitForm = function() {
      if (this.isEditing()) {
        return noteService.editNote(this.id, {
          title: this.title,
          text: this.text
        })
          .then(() => {
            noteService.getNotes();
          })
          .catch(err => console.error(err));
      }

      return noteService.addNote({
        title: this.title,
        text: this.text,
      })
        .then(() => {
          noteService.getNotes();
        })
        .catch(err => console.error(err));
    };
  }])
  .directive('noteEditor', function() {
    return {
      restrict: 'E',
      scope: {
        id: '<',
        title: '<',
        text: '<'
      },
      bindToController: true,
      controller: 'noteEditorCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'angular/components/note-editor/note-editor.html'
    }
  });
  
})();
