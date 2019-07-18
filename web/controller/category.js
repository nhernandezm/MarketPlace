(function(){
    var app = angular.module('market-place');
    app.controller('CategoryCtl',['$scope','$http',function($scope,$http){
        $scope.title = 'List of categories';
        $scope.textSearch = '';
        $scope.placeholder = 'Search products';
        $scope.listCategories = [];

        $scope.search = function(){
            $scope.listCategories = [];
            $http.get("category/list")
            .then(function(response) {
                $scope.listCategories = response.data;
            });
        };

        $scope.search();

    }]);
})();