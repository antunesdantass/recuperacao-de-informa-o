(() => {
    angular.module('rec-info-app').controller('MovieController', ['MovieService', 'users', function(MovieService, users) {
        const self = this;
        self.users = users;
        self.usuarioSelecionado;
        self.movies = []
        self.moviesData = [];
     
        self.onUserChange = (user) => {
            self.movies.length = 0
            self.moviesData.length = 0;
            MovieService.getRecommendation(user).then(data => {
                self.movies = data.data.movies;
                for (movie of self.movies) {
                    
                    movie = movie.split(" ");
                    movie = movie.slice(0, movie.length - 1)
                    movie = movie.join("_")

                    MovieService.requestMovieData(movie).then((data) => {
                        // Boolean(data.data.Response) ? self.moviesData.push(data.data) : self.moviesData.push({Title: movie})
                        if (data.data.Response === "True") {
                            console.log(data.data)
                            self.moviesData.push(data.data)
                        }
                    });
                }
            }, err => console.log(err))
        };
    }]);
})();