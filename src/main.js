var angular = require('angular');
var angularUiRouter = require('angular-ui-router');

var myApp = angular.module('testApp', ['ui.router']);

myApp.config(['$stateProvider', function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}]);