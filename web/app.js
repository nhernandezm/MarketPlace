(function(){
    var app = angular.module('market-place',[]);
    app.factory('setting', function() {
        return {
            server : 'http://localhost:5000'
        };
      });
})();