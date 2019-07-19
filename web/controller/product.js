(function(){
    var app = angular.module('market-place');
    app.controller('ProductCtl',['$scope','$http','setting',function($scope,$http,setting){
        $scope.title = 'Products';
        $scope.titleNew = 'Add a new product';
        $scope.titleUpdate = 'Edit product';
        $scope.textSearch = '';
        $scope.placeholder = 'Search products';
        $scope.listProducts = [];
        $scope.listProductsCart = [];
        $scope.objProduct = {};
        $scope.isValid = true;
        $scope.idProduct = null;
        $scope.countProductAdded = 0;
        $scope.amountTotalAdded = 0;

        var solitUrl = location.href.search("update");
        if(solitUrl > 0){
            var spliturl = location.href.split("/");
            $scope.idProduct = spliturl[spliturl.length -1];
        }

        $scope.search = function(){
            $scope.listProducts = [];
            
            //Search list product
            $http.get(setting.server +"/product/search/"+$scope.textSearch)
            .then(function(response) {
                //Search the first url for show the image at the list product
                angular.forEach(response.data, function(vP, kP) {
                    vP.urlImagePrincipal = "no_image_available";
                    if(vP.urlImage){
                        var urlimageSplit = vP.urlImage.split(';');
                        if(urlimageSplit.length > 0){
                            vP.urlImagePrincipal = urlimageSplit[0];
                            vP.listUrlImage = urlimageSplit;
                        }
                    }
    
                    this.push(vP);
                  }, $scope.listProducts);
            });
        };

        $scope.listCategories = [];

        $scope.searchCategory = function(){
            $scope.listCategories = [];
            $http.get(setting.server + "/category/list")
            .then(function(response) {
                $scope.listCategories = response.data;
            });
        };

        $scope.searchCategory();

        if($scope.idProduct){

            $scope.get = function(){
                $http.get(setting.server + "/product/list/" + $scope.idProduct)
                .then(function(response) {
                    $scope.objProduct = response.data;
                });
            };
        
            $scope.get();
        }else{
            $scope.search();
        }

        $scope.cancel = function(){
            location.href="/products";
        }

        //Save the product and validate fields required
        $scope.save = function(){
            if(!$scope.objProduct.code){
                $scope.isValid = false;
                return false;
            }
            if(!$scope.objProduct.name){
                $scope.isValid = false;
                return false;
            }

            if(!$scope.objProduct.amount){
                $scope.isValid = false;
                return false;
            }

            if(!$scope.objProduct.description){
                $scope.isValid = false;
                return false;
            }

            
            if(!$scope.objProduct.urlImage){
                $scope.isValid = false;
                return false;
            }

            $scope.isValid = true;

            if(!$scope.idProduct){

                $http.post(setting.server + "/product/new", $scope.objProduct)
                .then(function(response) {
                    location.href="/products";
                });
            }else{
                $http.put(setting.server + "/product/update/" + $scope.idProduct, $scope.objProduct)
                .then(function(response) {
                    location.href="/products";
                });
            }
        };

        $scope.delete = function(product){

            var conf = confirm("Are you secure of delete the product " + product.name +"?");
            if(conf){
                $http.delete(setting.server + "/product/delete/" + product.id)
                .then(function(response) {
                    $scope.search();
                });
            }
        }

        //Functions to show detail of product
        $scope.showDetail = function(product){
            $scope.productSelected = product;
            $('#modalDetailProduc').modal("show");
        }

        //Functions to show detail of cart
        $scope.showDetailCart = function(product){
            $('#modalDetailCart').modal("show");
        }        

        //Functions add a item to cart
        $scope.addCart = function(product){
            $scope.countProductAdded++;
            $scope.listProductsCart.push(product);
            $scope.calculateTotal();
        }  
        
        //Function to remove a item from cart
        $scope.removeCart = function(product){
            $scope.countProductAdded--;
            $scope.listProductsCartNew = [];

            angular.forEach($scope.listProductsCart, function(vP, kP) {
                if(vP.id != product.id){
                    $scope.listProductsCartNew.push(vP);
                }                
            });
            $scope.listProductsCart = $scope.listProductsCartNew;

            $scope.calculateTotal();
        }

        //Calculate the amount total 
        $scope.calculateTotal = function(){
            $scope.amountTotalAdded = 0;
            angular.forEach($scope.listProductsCart, function(vP, kP) {
                $scope.amountTotalAdded += vP.amount;
            });            
        };

        //Search the products by category
        $scope.searchByCategory = function(){
            if($scope.idCategoryToSearch){
                $scope.listProducts = [];
                //Search list product
                $http.get(setting.server +"/product/search/category/"+$scope.idCategoryToSearch)
                .then(function(response) {
                    //Search the first url for show the image at the list product
                    angular.forEach(response.data, function(vP, kP) {
                        vP.urlImagePrincipal = "no_image_available";
                        if(vP.urlImage){
                            var urlimageSplit = vP.urlImage.split(';');
                            if(urlimageSplit.length > 0){
                                vP.urlImagePrincipal = urlimageSplit[0];
                                vP.listUrlImage = urlimageSplit;
                            }
                        }
        
                        this.push(vP);
                    }, $scope.listProducts);
                });
            }else{
                $scope.search();
            }
        }

    }]);
})();