(function() {

  angular.module('app')
    .service('noteService', ['$http', function($http) {

      var _events = {};

      var _state = {
        notes: [],
      };

      this.addNote = function(body) {
        return $http.post('/notes', body)
          .then(resp => {
            console.log('resp.data = ', resp.data);
            return true;
          });
      };

      this.editNote = function(id, body) {
        return $http.put(`/notes/${id}`, body)
          .then(resp => {
            console.log('resp.data = ', resp.data);
            return true;
          });
      };

      this.deleteNote = function(id) {
        return $http.delete(`/notes/${id}`)
          .then(resp => {
            console.log('resp.data = ', resp.data);
            return true;
          })
      };

      this.getNotes = function() {
        return $http.get('/notes')
          .then(resp => {
            this.set('notes', resp.data.results);
            return this.get('notes');
          });
      };

      this.subscribe = function(prop, cb) {
        _events[prop] = _events[prop] || [];
        _events[prop].push(cb);
      }

      this.get = function(prop) {
        return _state[prop];
      };

      this.set = function(prop, val) {
        _state[prop] = val;
        _events[prop].forEach(cb => {
          cb(val);
        });
        return val;
      };
      
    }]);
})();
