var app = angular.module('InvoArt',["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "templates/main.html",
		controller  : "ProductController"
	})
	.when("/product",{
		templateUrl : "templates/product.html"
	})
	.when("/detail",{
		templateUrl : "templates/detail.html",
		controller  : "DetailController"
	})
	.when("/about",{
		templateUrl : "templates/about.html"
	});
});