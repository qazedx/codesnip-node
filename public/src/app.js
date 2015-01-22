angular.module('ContactsApp', ['ngRoute', 'ngResource', 'ngMessages'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                    .when('/contacts', {
                        controller: 'ListController',
                        templateUrl: 'views/list.html'
                    })
                    .when('/contact/new', {
                        controller: 'NewController',
                        templateUrl: 'views/new.html'
                    })
                    .when('/youtube', {
                        controller: 'YoutubeController',
                        templateUrl: 'views/youtube.html'
                    })
                    .when('/test1', {
                        controller: 'test1',
                        templateUrl: 'views/search1.html'
                    })
                    .when('/contact/:id', {
                        controller: 'SingleController',
                        templateUrl: 'views/single.html'
                    })
                    .when('/settings', {
                        controller: 'SettingsController',
                        templateUrl: 'views/settings.html'
                    })
                    .otherwise({
                        redirectTo: '/contacts'
                    });
            $locationProvider.html5Mode(true);
        })
        .value('options', {})
        .run(function (options, Fields) {
            Fields.get().success(function (data) {
                options.displayed_fields = data;
            });
        });
