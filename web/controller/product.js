(function(){
    var app = angular.module('market-place');
    app.controller('ProductCtl',['$scope','$http',function($scope,$http){
        $scope.title = 'Products';
        $scope.textSearch = '';
        $scope.placeholder = 'Search products';
        $scope.listProducts = [];

        $scope.search = function(){
            $scope.listProducts = [];
            $http.get("product/search/"+$scope.textSearch)
            .then(function(response) {
                angular.forEach(response.data, function(vP, kP) {
                    vP.urlImagePrincipal = "no_image_available";
                    if(vP.urlImage){
                        var urlimageSplit = vP.urlImage.split(';');
                        if(urlimageSplit.length > 0){
                            vP.urlImagePrincipal = urlimageSplit[0];
                        }
                    }
    
                    this.push(vP);
                  }, $scope.listProducts);
            });
        };

        $scope.search();

    }]);
})();