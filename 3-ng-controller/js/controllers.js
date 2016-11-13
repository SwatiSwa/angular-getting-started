app.controller('ProductController',function($scope,$location,DetailService){
	$scope.products = [{
		title       : 'Wodden Candle Stand',
		description : "Empty wine bottles can easily be used as candle holders to uplift the aesthetics of the interiors of your cozy den. Moreover, they allow you to contribute towards a sound environment by recycling. Given below are a few charming ideas for home décor using lovely wine bottle candle holders.",
		imageUrl    : "images/art1.jpg"
	},{
		title       : 'Candle Bottle',
		description : "Empty wine bottles can easily be used as candle holders to uplift the aesthetics of the interiors of your cozy den. Moreover, they allow you to contribute towards a sound environment by recycling. Given below are a few charming ideas for home décor using lovely wine bottle candle holders.",
		imageUrl    : "images/art2.jpg"
	},{
		title       : 'Wodden Holder',
		description : "Empty wine bottles can easily be used as candle holders to uplift the aesthetics of the interiors of your cozy den. Moreover, they allow you to contribute towards a sound environment by recycling. Given below are a few charming ideas for home décor using lovely wine bottle candle holders.",
		imageUrl    : "images/art3.jpg"
	}];

	$scope.onClickProduct = function(path,product){
		 $scope.product = product;
		 DetailService.setCurrentProduct(product);
		 $location.path(path);
	};
});

app.controller('DetailController',function($scope,DetailService){
	$scope.product = DetailService.getCurrentProduct();
});