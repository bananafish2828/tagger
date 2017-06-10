(function() {

angular.module('app')
  .controller('taggerCtrl', function() {
    this.currentNote = {
      title: '',
      text: '',
      id: -1
    };

    this.setCurrentNote = note => {
      this.currentNote = note;
    };
  })
  .directive('tagger', function() {
    return {
      restrict: 'E',
      bindToController: true,
      controller: 'taggerCtrl',
      controllerAs: 'ctrl',
      templateUrl: 'angular/components/tagger/tagger.html'
    }
  });

})();
