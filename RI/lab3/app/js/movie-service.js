(() => {
    angular.module('rec-info-app', ['ui.router']).service('MovieService', ['$http', function($http) {
        const self = this;
        const uri = 'http://127.0.0.1:5000/rec/';
        const OMDB_URI = 'http://www.omdbapi.com/?apikey=a9fca016&';

        /**
         * Request users from the server
         */
        self.getRecommendation = function(userId) {
            return $http.get(uri + userId);
        };

        self.getUsers = function() {
            return $http.get('http://127.0.0.1:5000/users').then((data) => {
                return data;
            });
        };

        self.requestMovieData = function(title) {
           return $http.get(OMDB_URI + 't=' + title);
        };
    }])
})();