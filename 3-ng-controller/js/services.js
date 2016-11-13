app.factory('DetailService', function(){
	var currentProduct = {};

	return {
		getCurrentProduct : function(){
			return currentProduct;
		},
		setCurrentProduct : function(product){
			currentProduct = product;
		}
	};
});