angular.module('starter.controllers', []).config(function($sceDelegateProvider){
	$sceDelegateProvider.resourceUrlWhitelist([
		'https://docs.google.com/a/ciandt.com/forms/d/1_FLtZET0DBARxpGsE0WEMSsA6-5ZlqIpymCGY8epm_A/viewform']);
	})

.controller('HomeCtrl', function($scope, HomeContent) {
	$scope.content = HomeContent.all();
})

.controller('CalendarCtrl', function($scope, CalendarContent) {
	$scope.content = CalendarContent.all();
})

.controller('CalendarDetailCtrl', function($scope, $stateParams, CalendarContent) {
	$scope.calendar = CalendarContent.getCalendar($stateParams.calendarId);
})






.controller('EnterCtrl', function($scope){
	$scope.content = {
		link: "https://docs.google.com/a/ciandt.com/forms/d/1_FLtZET0DBARxpGsE0WEMSsA6-5ZlqIpymCGY8epm_A/viewform",
		height: window.innerHeight - 99
	}
});