
//
var api_url = "http://api.themoviedb.org/3/",
	api_key = "?api_key=34a209538e9c2bf4cbcdef696f2bf6a2",
	search_q;

$(function () {
	$.ajax({
			url: api_url + 'movie/popular' + api_key + '&page=1',
			jsonp: 'callback',
			dataType: 'jsonp',
		}).success(function (data){
			$.each(data.results, function(n, movie){
				if(movie.poster_path) {
					$('#cover-scroller').append('<img src="http://image.tmdb.org/t/p/w185/' + movie.poster_path + '" id="poster-' + n + '" class="poster" alt="image"/>');
				}
			});
		});
})

$('#btn-search').on('click', function (){
	search_q = encodeURIComponent($('#search').val());
	console.log(api_url + 'search/movie' + api_key + '&query=' + search_q + '&page=1');
	$.ajax({
		url: api_url + 'search/movie' + api_key + '&query=' + search_q + '&page=1',
		jsonp: 'callback',
		dataType: 'jsonp',
	}).success(function (data){
		$.each(data.results, function(n, movie) {
			if(movie.poster_path) {
				$('.moviecovers').append('<img src="http://image.tmdb.org/t/p/w185/' + movie.poster_path + '" alt="image"/>');
			}
		});
	});
});
