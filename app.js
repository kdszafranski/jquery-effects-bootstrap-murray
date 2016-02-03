$(document).ready(function() {
	var img = '<img class="murray" src="http://www.fillmurray.com/250/250" />';

	// Event Listeners
	$('#fade-out').on('click', function() {
		$('.murray').fadeOut(500);
	});

	$('#fade-in').on('click', function() {
		$('.murray').fadeIn(500);
	});

	$('#remove-button').on('click', function() {
		// removes ALL my murrays from the page
		$('.murray').remove();
	});

	$('#add-button').on('click', function() {
		$('#murray-box').append(img);
	});

});


function randomNumber() {

}