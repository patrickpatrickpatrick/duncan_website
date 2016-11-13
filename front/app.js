var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'homeController'
  })
  .otherwise({redirectTo: '/'});
});

app.directive('navigationBar', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/navigation_bar.html'
	}
});

app.directive('bio', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/bio.html',
        link: function($scope, element, attrs) {
			$(document).ready(function() {
				$scope.bio_ready = true;
				$scope.check_loaded_elements();
			});
        }
	}
})

app.directive('news', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/news.html',
		link: function($scope, element, attrs) {
			$(document).ready(function() {
				$scope.news_ready = true;
				$scope.check_loaded_elements();
			});
        }
	}
})

app.directive('story', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/story.html',
		scope: {
			mystory: '='
		}
	}
})

app.directive('books', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/books.html'
	}
})

app.directive('book', function() {
	return {
	    restrict: 'E',
		templateUrl: 'directives/book.html',
		scope: {
			mybook: '='
		}
	}
})

app.controller('homeController', function($scope) {
	$scope.check_loaded_elements = function() {
		if (($scope.news_ready == true) && ($scope.bio_ready == true)) {
			setTimeout ( function () {
				$("#news").height($("#bio").outerHeight(true));
				$("#stories").outerHeight($("#bio-body").outerHeight(true) - $("#news-heading").outerHeight(true));
		    }, 200);
		}
	}

	$scope.books = [
		{
			title: "New Aspects of Quantity Surveying Practice 3rd Ed",
			description: "Public Private Partnerships in Construction is an authoritative and objective source of information on PPPs, including lessons to be learnt from the past decade, as well as coverage of their spread beyond the UK to governments in areas as diverse as Cambodia and California.",
			reviews: [
				{
					title:"Good book",
					body:"I love it.",
					reviewer:"John"
				}
			],
			author: "Duncan Cartlidge",
			date: new Date(),
			link: "",
			purchase_link: "",
			image: "http://placehold.it/200x260"
		},
		{
			title: "New Aspects of Quantity Surveying Practice 3rd Ed",
			description: "Public Private Partnerships in Construction is an authoritative and objective source of information on PPPs, including lessons to be learnt from the past decade, as well as coverage of their spread beyond the UK to governments in areas as diverse as Cambodia and California.",
			reviews: [
				{
					title:"Good book",
					body:"I love it.",
					reviewer:"John"
				}
			],
			author: "Duncan Cartlidge",
			date: new Date(),
			link: "",
			purchase_link: "",
			image: "http://placehold.it/200x260"
		},
		{
			title: "New Aspects of Quantity Surveying Practice 3rd Ed",
			description: "Public Private Partnerships in Construction is an authoritative and objective source of information on PPPs, including lessons to be learnt from the past decade, as well as coverage of their spread beyond the UK to governments in areas as diverse as Cambodia and California.",
			reviews: [
				{
					title:"Good book",
					body:"I love it.",
					reviewer:"John"
				}
			],
			author: "Duncan Cartlidge",
			date: new Date(),
			link: "",
			purchase_link: "",
			image: "http://placehold.it/200x260"
		}
	]

	$scope.news = [
		{
			title: "New Aspects of Quantity Surveying Practice - 3rd Edition",
			content: "Current projects include the preparation of a third edition of New Aspects of Quantity Surveying Practice. The new edition will have an emphasis on sustainability and will examine the  implications of introducing sustainable measures into new and refurbished buildings as well as the costs of complying with emerging green legislation.",
			image: "http://placehold.it/75x75",
			link: "alink",
			date: new Date()
		},
		{
			title: "The European Procurement Group",
			content: "Founded in 1996 the EPG's continuing mission is to provide advice and guidance on construction procurement issues to both public and private sectors..",
			image: "http://placehold.it/75x75",
			link: "alink",
			date: new Date()
		},
		{
			title: "The European Procurement Group",
			content: "Founded in 1996 the EPG's continuing mission is to provide advice and guidance on construction procurement issues to both public and private sectors..",
			image: "http://placehold.it/75x75",
			link: "alink",
			date: new Date()
		}
	]
});