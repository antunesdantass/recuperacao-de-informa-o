(() => {
    const recInfo = angular.module('rec-info-app');

    recInfo.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/html/movies.html',
            controller: 'MovieController as movieCtrl',
            resolve: {
                users: function(MovieService) {
                    return MovieService.getUsers().then(data => data.data);
                }
            }
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();