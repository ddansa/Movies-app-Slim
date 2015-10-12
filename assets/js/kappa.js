
//
$('#btn-search').on('click', function (){
	console.log("kappa 123")
	$.ajax({
		url: 'http://api.themoviedb.org/3/movie/popular?api_key=34a209538e9c2bf4cbcdef696f2bf6a2&page=1',
		jsonp: 'callback',
		dataType: 'jsonp',
	}).success(function (data){
		$.each(data.results, function(n, movie){
			if(movie.poster_path !== 'N/A') {
				$('#cover-scroller').append('<img src="http://image.tmdb.org/t/p/w185/' + movie.poster_path + '" alt="image"/>')
			}
		});
	});
});
