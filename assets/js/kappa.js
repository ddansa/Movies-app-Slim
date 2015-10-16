
//
$('#btn-search').on('click', function (){
	console.log("kappa 123")
	$.ajax({
<<<<<<< HEAD
			//url: api_url + 'movie/popular' + api_key + '&page=1',
			url: apiURL('movie/popular', 1),
			jsonp: 'callback',
			dataType: 'jsonp',
		}).success(function (data){
			$.each(data.results, function(n, movie){
				if(movie.poster_path) {
					$('#cover-scroller').append('<div class="poster" style="background-image: url(https://image.tmdb.org/t/p/w300/' + movie.backdrop_path + ')">');
					//$('#cover-scroller').append('<img src="https://image.tmdb.org/t/p/w185/' + movie.backdrop_path + '" id="poster-' + n + '" class="poster" alt="image"/>');
				}
			});
		});
})*/

$('#filter-search-bar').focusout(function(e) {
	($(this).val()) ?
		$(this).addClass('active') :
		$(this).removeClass('active');
});

$('#main-search').submit(function (e){
	e.preventDefault();
	$('.moviecovers').empty();
	$('.filter-error').hide().empty();
	var search_q = encodeURIComponent($('#filter-search-bar').val());
	if (search_q) {
		$.ajax({
			url: apiURL('search/movie', 1) + '&query=' + search_q,
			jsonp: 'callback',
			dataType: 'jsonp',
		}).success(function (data){

			if (data.results.length == 0 ) {
				$('.filter-error').append('<span>No results found :(</span>').fadeIn('250');
				$('.filter-error');
			} else {
				$.each(data.results, function(n, movie) {
					if(movie.poster_path) {
						$('.moviecovers').append('<img src="https://image.tmdb.org/t/p/w185/' + movie.poster_path + '" alt="image"/>');
					}
				});
				$('html, body').animate({
			    	scrollTop: parseInt($('.moviecovers').offset().top,10)
				}, 500);
=======
		url: 'http://api.themoviedb.org/3/movie/popular?api_key=34a209538e9c2bf4cbcdef696f2bf6a2&page=1',
		jsonp: 'callback',
		dataType: 'jsonp',
	}).success(function (data){
		$.each(data.results, function(n, movie){
			if(movie.poster_path !== 'N/A') {
				$('#cover-scroller').append('<img src="http://image.tmdb.org/t/p/w185/' + movie.poster_path + '" alt="image"/>')
>>>>>>> origin/master
			}
		});
	});
});
