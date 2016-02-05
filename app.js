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
	
	$('#toggle-slide').on('click', function() {
	    $('.murray').slideToggle();
	});

	// using relative speeds for arguments
	$('#slide-with-delay').on('click', function() {
		$('.murray').slideUp("fast").delay("slow").slideDown("fast");
	});

	$('#add-button').on('click', function() {
		var size = randomNumber(150, 430);
		var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />';
		$('#murray-box').append(img);
		$('#murray-box').children().last().data('id', counter);
		counter++;
	});

    // user clicked on an image
	$('#murray-box').on('click', '.murray', selectMurray);

});

function selectMurray() {
	var selected = $(this).data('id');
	console.log('Clicked on image: ', selected);
	
	// get all images and loop over them
	// we do this so we can deselect the ones we didn't click on
	$('.murray').each(function(i) {
		var id = $(this).data('id');
		// is this the image we clicked on?
		if(id == selected) {
			$(this).data('selected', true);
			$(this).addClass('selected');
		} else {
			$(this).data('selected', false);
			$(this).removeClass('selected');
		}
		// see that we changed the values stored with .data()
		console.log($(this).data());
	});
}


function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}