// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };

// function displayWeather(currency) {
// 	var url = 'https://api.bitcoinaverage.com/ticker/global/' + currency;
// 	var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
// 	var units = '&units=metric';
// 	$.get(url + token + units, function(data) {
// 		$('#currentTemperature').text(data.main.temp);
// 	});
// }

function getCurrencyConversion() {
		return $.ajax({
				type  'GET'
	  		url: "https://api.bitcoinaverage.com/ticker/global/CAD/last",
	  // data: data,
	  // success: success,
	  // dataType: dataType
				});
}

$.get( "https://api.bitcoinaverage.com/ticker/global/CAD/last", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
