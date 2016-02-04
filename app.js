$(document).ready(function() {
	
	var counter = 0;

	// Event Listeners
	$('#fade-out').on('click', function() {
		$('.murray').fadeOut(500);
	});

	$('#fade-in').on('click', function() {
		$('.murray').fadeIn(500);
	});

	$('#fade-out-in').on('click', function() {
		$('.murray').fadeOut(500).fadeIn(250);
	});

	$('#slide-up').on('click', function() {
		$('.murray').slideUp();
	});

	$('#slide-down').on('click', function() {
		$('.murray').slideDown("slow");
	});

	$('#remove-button').on('click', function() {
		// removes ALL murrays from the page
		$('.murray').remove();
	});

	// using relative speeds for arguments
	$('#slide-with-delay').on('click', function() {
		$('.murray').slideUp("fast").delay("slow").slideDown("fast");
	});

	$('#add-button').on('click', function() {
		var size = randomNumber(200, 500);
		var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />';
		$('#murray-box').append(img);
		$('#murray-box').children().last().data('id', counter);
		console.log(counter);
		counter++;
	});

	$('#murray-box').on('click', '.murray', selectMurray);

});

function selectMurray() {
	var selected = $(this).data('id');
	console.log(selected);
	
	$('.murray').each(function(i) {
		var id = $(this).data('id');
		if(id == selected) {
			$(this).data('selected', true);
			$(this).addClass('selected');
		} else {
			$(this).data('selected', false);
			$(this).removeClass('selected');
		}
		console.log($(this).data());
	});
}


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}