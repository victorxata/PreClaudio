(function() {

    'use strict';

    angular.module('ClaudioApp', [
        'ngRoute',
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ui.bootstrap',
        'easypiechart',
        'textAngular',
        'ui.tree',
        'ngMap',
        'ngTagsInput',
        'slick',
        'ui.select',
        'selectApp',
        'ui.calendar',
        'tablesorting',
        'inlineedittable',
        'TodoApp',
        'app.controllers',
        'app.directives',
        'app.localization',
        'app.nav',
        'app.ui.ctrls',
        'app.ui.directives',
        'app.form.validation',
        'app.ui.form.ctrls',
        'app.ui.form.directives',
        'app.tables',
        'app.task',
        'app.chart.ctrl',
        'app.chart.directives',
        'angular-animate',
        'app.calendar',
        'app.ui.jvectormap',
        'xeditable',
        'FullscreenApp',
        'galleryApp',
        'datatables'
    ])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        var routes, setRoutes;
        routes = [
            'dashboard/dashboard-v1',
            'ui/typography',
            'ui/buttons',
            'ui/icons',
            'ui/grids',
            'ui/widgets',
            'ui/components',
            'ui/timeline',
            'ui/nested-lists',
            'ui/fontawesome',
            'ui/animation',
            'ui/panel',
            'ui/xeditable',
            'maps/gmap',
            'maps/vectormap',
            'tables/static',
            'tables/dynamic',
            'tables/responsive',
            'forms/elements',
            'forms/layouts',
            'forms/validation',
            'forms/select',
            'forms/wizard',
            'charts/charts',
            'charts/flot',
            'charts/morris',
            'charts/highcharts',
            'pages/404',
            'pages/500',
            'pages/blank',
            'pages/forgot-password',
            'pages/invoice',
            'pages/lock-screen',
            'pages/profile',
           /* 'pages/signin',
            'pages/signup',*/
            'pages/directory',
            'pages/faq',
            'pages/gallery',
            'mail/compose',
            'mail/inbox',
            'mail/mailview',
            'tasks/tasks',
            'calender/calender',
            'ecommerce/dashboard',
            'ecommerce/orders',
            'ecommerce/order-views',
            'ecommerce/products',
            'ngtable/ngtable',
            'settings/settings-panel'
        ];

        setRoutes = function (route) {
            var config, url;
            url = '/' + route;
            config = {
                templateUrl: 'views/' + route + '.html'
            };
            $routeProvider.when(url, config);
            return $routeProvider;
        };
        routes.forEach(function (route) {
            return setRoutes(route);
        });

        $routeProvider.when('/', {
            redirectTo: 'dashboard/dashboard-v1'
        }).when('/404', {
            templateUrl: 'views/pages/404.html'
        }).when('/login', {
                    controller: 'LoginController',
                    templateUrl: 'views/pages/signin.html',
                    controllerAs: 'vm'
        }).when('/register', {
                    controller: 'RegisterController',
                    templateUrl: 'views/pages/signup.html',
                    controllerAs: 'vm'
        }).otherwise({
            redirectTo: 'views/pages/signin'
        });

    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
})();
