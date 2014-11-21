var myApp = angular.module('route_app',['ngRoute']);

myApp.controller('homeCtrl',function($scope){
	$scope.x = 'this is a home page';
});

myApp.controller('contactCtrl',function($scope){
	$scope.x = 'contact page information is here';
});

myApp.controller('lastCtrl',function($scope,$routeParams){
	$scope.x = 'last page';
	$scope.y = $routeParams.no;
});


myApp.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'home.html',
		controller: 'homeCtrl'
	})

	.when('/contact',{
		templateUrl:'contact.html',
		controller:'contactCtrl'
	})

	.when('/last/:no',{
		templateUrl:'last.html',
		controller:'lastCtrl'
	})

	.otherwise({redirectTo:'/home'});





});