'use strict';

/**
 * Main module of the application.
 */
angular
  .module('torrentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl'
      })
      .when('/favourites', {
        templateUrl: 'views/favourites.html',
        controller: 'FavouritesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$(document).ready(function() {
	$('.sidebar li').on('click', function() {
		var second_nav = $(this).find('.collapse').first();
		if (second_nav.length) {
			second_nav.collapse('toggle');
			$(this).toggleClass('opened');
		}
	});

	$('.scrollable').scrollbar();


	$('body').on('click', '.header-navbar-mobile__menu button', function() {
		console.log($(this));
		$('.dashboard').toggleClass('dashboard_menu');
	});
});


function randomNumber() {
  return Math.floor(Math.random() * (1000 - 100 + 1) + 100);
}

function randomString(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}