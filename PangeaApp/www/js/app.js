angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform){
	$ionicPlatform.ready(function(){
		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard){
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}

		if(window.StatusBar){
			StatusBar.styleLightContent();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider){
	$stateProvider
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/tabs.html'
		})
		.state('tab.home', {
			url: '/home',
			views: {
				'tab-home': {
					templateUrl: 'templates/tab-home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state('tab.calendar', {
			url: '/calendar',
			views: {
				'tab-calendar': {
					templateUrl: 'templates/tab-calendar.html',
					controller: 'CalendarCtrl'
				}
			}
		})
		.state('tab.calendar-detail', {
			url: '/calendar/:calendarId',
			views: {
				'tab-calendar': {
					templateUrl: 'templates/calendar-detail.html',
					controller: 'CalendarDetailCtrl'
				}
			}
		})
		.state('tab.enter', {
			url: '/enter',
			views: {
				'tab-enter': {
					templateUrl: 'templates/tab-enter.html',
					controller: 'EnterCtrl'
				}
			}
		})
		.state('tab.sponsor', {
			url: '/sponsor',
			views: {
				'tab-sponsor': {
					templateUrl: 'templates/tab-sponsor.html',
					controller: 'SponsorCtrl'
				}
			}
		});

	$urlRouterProvider.otherwise('/tab/home');

	$translateProvider.translations('pt-br', {
		hello_message: "Olá",
		goodbye_message: "Tchau"
	});
	$translateProvider.translations('en', {
		hello_message: "Hello",
		goodbye_message: "Bye"
	});

	$translateProvider.preferredLanguage("pt-br");
	$translateProvider.fallbackLanguage("pt-br");
});