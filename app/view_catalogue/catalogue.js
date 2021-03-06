'use strict';

(function(){

	var gems = [
		    {
		      name: 'Azurite',
		      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
		      shine: 8,
		   	  canPurchase: true,
			  soldOut: false,
		      price: 110.50,
		      rarity: 7,
		      color: '#DDF',
		      faces: 14,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 5,
		        body: "I love this gem!",
		        author: "joe@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "This gem sucks.",
		        author: "tim@example.org",
		        createdOn: 1397490980837
		      }]
		    },
		    {
		      name: 'Bloodstone',
		      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
		      shine: 9,
		      canPurchase: true,
			  soldOut: false,		      
		      price: 22.90,
		      rarity: 6,
		      color: '#E67',
		      faces: 12,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 3,
		        body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        author: "JimmyDean@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 4,
		        body: "Any gem with 12 faces is for me!",
		        author: "gemsRock@example.org",
		        createdOn: 1397490980837
		      }]
		    },
		    {
		      name: 'Zircon',
		      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
		      shine: 70,
		      canPurchase: true,
			  soldOut: false,
		      price: 1100,
		      rarity: 2,
		      color: '#FDE',
		      faces: 6,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 1,
		        body: "This gem is WAY too expensive for its rarity value.",
		        author: "turtleguyy@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "BBW: High Shine != High Quality.",
		        author: "LouisW407@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "Don't waste your rubles!",
		        author: "nat@example.org",
		        createdOn: 1397490980837
		      }]
		    },
		    {
		      name: 'Emerald',
		      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Emerald is one of those gems.",
		      shine: 8,
		   	  canPurchase: true,
			  soldOut: false,
		      price: 110.50,
		      rarity: 7,
		      color: '#7F8',
		      faces: 14,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 5,
		        body: "I love this gem!",
		        author: "joe@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "This gem sucks.",
		        author: "tim@example.org",
		        createdOn: 1397490980837
		      }]
		    },
		    {
		      name: 'Amethyst',
		      description: "Origin of the Amethyst is unknown, hence its low value. It has a very high shine and 12 sides, however.",
		      shine: 9,
		      canPurchase: true,
			  soldOut: false,		      
		      price: 22.90,
		      rarity: 6,
		      color: '#E14',
		      faces: 12,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 3,
		        body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        author: "JimmyDean@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 4,
		        body: "Any gem with 12 faces is for me!",
		        author: "gemsRock@example.org",
		        createdOn: 1397490980837
		      }]
		    },
		    {
		      name: 'Ruby',
		      description: "Ruby is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
		      shine: 70,
		      canPurchase: true,
			  soldOut: false,
		      price: 1100,
		      rarity: 2,
		      color: '#F23',
		      faces: 6,
		      images: [
			   			"https://placeimg.com/150/150/animals",
			   			"https://placeimg.com/150/150/nature",
			   			"https://placeimg.com/150/150/people"
		      ],
		      reviews: [{
		        stars: 1,
		        body: "This gem is WAY too expensive for its rarity value.",
		        author: "turtleguyy@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "BBW: High Shine != High Quality.",
		        author: "LouisW407@example.org",
		        createdOn: 1397490980837
		      }, {
		        stars: 1,
		        body: "Don't waste your rubles!",
		        author: "nat@example.org",
		        createdOn: 1397490980837
		      }]
		    }
		  ];

	var app = angular.module('myApp.catalogue', ['ngRoute'])

	app.controller('StoreController', function(){
		this.products = gems;
	});


	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	app.directive('productReview', function(){
		return {
			restrict: 'E',
			templateUrl: 'view_catalogue/product-review.html'
		};
	});

	app.directive('productSpecs', function(){
		return {
			restrict: 'E',
			templateUrl: 'view_catalogue/product-specs.html'
		};
	});

	app.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'view_catalogue/product-tabs.html',
			controller: function(){
				this.tab = 1;
				this.setTab = function (tab){
					this.tab = tab;
				};
				this.isSet = function(tab){
							return this.tab === tab;
				};
			},
			controllerAs: 'tab'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'view_catalogue/product-gallery.html',
			controller: function($scope){
				this.current = 0;
				this.setCurrent = function(image){
					let selected = $scope.product.images.indexOf(image);
					if (selected == 2) {
						$scope.product.images.push($scope.product.images.shift());
						selected = 1;
					}
					this.current = selected || 0;
				};
				this.isSet = function(image){
					return $scope.product.images[this.current] == image;
				}

			},
			controllerAs: 'gallery'
		}
	})

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/catalogue', {
    		templateUrl: 'view_catalogue/catalogue.html',
    		controller: 'StoreController'
	  	});	
	}])

})();