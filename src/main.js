var angular = require('angular');
var angularUiRouter = require('angular-ui-router');

var myApp = angular.module('testApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state({
        	name: 'main',
            abstract: true,
            url: '/',
            template: "<h1>Abstract state Main</h1><div ui-view></div>",
            controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                console.log($stateParams);
            }]
        })
        .state({
        	name: 'main.details',
            url: ':lang',
            abstract: true,
            template: "<h2>Abstract state Main.Details</h2><div ui-view></div>",
            controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                    console.log($stateParams);
            }]
                /*views: {
                    'main': {
                        templateUrl: baseUrl + "index-content.html",
                        controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                            angular.extend($scope.config.params, $stateParams);
                        }]
                    }
                }*/
        })
        .state({
        	name: 'main.details.blog',
            url: '/blogs/:blogId',
            template: "<h3>State Main.Details.Blog</h3>",
            controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                    console.log($stateParams);
            }]
            /*views: {
                'main': {
                    templateUrl: baseUrl + "index-blog.html",
                    controller: "blogController"
                }
            },            */
        })
        .state( {
        	name: 'main.details.projects',
            url: '/:projectType',
            template: "<h3>State Main.Details.Projects</h3><div ui-view></div>",
            controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                    console.log($stateParams);
            }]
            /*views: {
                "": {
                    templateUrl: baseUrl + "projects.html",
                    controller: "projectController"
                },
                "blogList": {
                    templateUrl: baseUrl + "blogs.html",
                    controller: "blogListController"
                }
            }*/            
        })
        .state( {
        	name: 'main.details.projects.detailed',
            url: '/:projectNumber',
            template: "<h4>State Main.Details.Projects.Detailed</h4>",
            controller: ['$scope', '$stateParams', function($scope, $stateParams) {
                    console.log($stateParams);                    
            }]
            /*views: {
                '@main.details': {
                    templateUrl: baseUrl + "project-detailed.html",
                    controller: ['$scope', 'contentService', '$stateParams', '$location', function($scope, contentService, $stateParams, $location) {
                        $scope.InfoProject = contentService.localization.projects.list_project[$stateParams.projectNumber];
                        angular.extend($scope.config.params, $stateParams);
                        $scope.showSocialButtons = function() {
                            $scope.showSocial ? $scope.showSocial = false : $scope.showSocial = true;
                        };
                    }]
                }
            }*/
        });

    $locationProvider.html5Mode(false);
    //$urlRouterProvider.otherwise('/en/web-dev');
}]);