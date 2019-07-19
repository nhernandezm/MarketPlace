(function(){
    var app = angular.module('market-place');
    app.controller('CategoryCtl',['$scope','$http','setting',function($scope,$http,setting){
        $scope.title = 'List of categories';
        $scope.titleNew = 'Add a new category';
        $scope.titleUpdate = 'Edit category';
        $scope.textSearch = '';
        $scope.placeholder = 'Search category';
        $scope.objCategory = {};
        $scope.isValid = true;
        $scope.idCategory = null;

        var solitUrl = location.href.search("update");
        if(solitUrl > 0){
            var spliturl = location.href.split("/");
            $scope.idCategory = spliturl[spliturl.length -1];
        }

        $scope.listCategories = [];

        $scope.search = function(){
            $scope.listCategories = [];
            $http.get(setting.server + "/category/list")
            .then(function(response) {
                $scope.listCategories = response.data;
            });
        };

        if($scope.idCategory){

            $scope.get = function(){
                $http.get(setting.server + "/category/list/" + $scope.idCategory)
                .then(function(response) {
                    $scope.objCategory = response.data;
                });
            };
        
            $scope.get();
        }else{
            $scope.search();
        }

        $scope.cancel = function(){
            location.href="/categories";
        }

        $scope.save = function(){
            if(!$scope.objCategory.code){
                $scope.isValid = false;
                return false;
            }
            if(!$scope.objCategory.name){
                $scope.isValid = false;
                return false;
            }
            if(!$scope.objCategory.description){
                $scope.isValid = false;
                return false;
            }

            $scope.isValid = true;

            if(!$scope.idCategory){

                $http.post(setting.server + "/category/new", $scope.objCategory)
                .then(function(response) {
                    location.href="/categories";
                });
            }else{
                $http.put(setting.server + "/category/update/" + $scope.idCategory, $scope.objCategory)
                .then(function(response) {
                    location.href="/categories";
                });
            }
        };

        $scope.delete = function(category){

            var conf = confirm("Are you secure of delete the category " + category.name +"?");
            if(conf){
                $http.delete(setting.server + "/category/delete/" + category.id)
                .then(function(response) {
                    $scope.search();
                });
            }
        }

    }]);
})();