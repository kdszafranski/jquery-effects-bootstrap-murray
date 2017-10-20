$(document).ready(readyNow);

function readyNow() {
  console.log('DOM is loaded');
  
  // Get a new fill murray picture and put it on the DOM
	$("#add-murray").on("click", addMurray);

  // effects
  $("#fade-out").on("click", function() {
    $(".murray").slideUp(500).delay(1000).slideDown('slow');
  });
  $("#fade-in").on("click", function() {
    $(".murray").slideDown('fast');
  });
  $("#fade-toggle").on("click", function() {
    $(".murray").fadeToggle('slow');
  });
  $("#slide-up").on("click", function() {
    $(".murray").slideUp(500);
  });
  $("#slide-down").on("click", function() {
    $(".murray").slideDown(200);
  });
  $("#slide-combo").on("click", function() {
    $(".murray").slideUp('fast').delay(1000). slideDown('slow');
  });

  // Use pre-defined CSS class to apply animation effects, See CSS file for definition
  $("#murray-box").on("click", ".murray", function() {
    $(this).toggleClass("spin-murray");
  });

  // ad-hoc animation with .animate()
  // $("#murray-box").on("click", ".murray", function() {
  //   $(this).animate({
  //     height: '-=50px',
  //     width: '-=50px'
  //   }, 500)
  //   .delay(500)
  //   .animate({
  //     height: '+=50px',
  //     width: '+=50px'
  //   }, 'fast');
  // });

}

// Adds a bill murray image to the DOM
function addMurray() {
  var size = randomNumber(100, 400);
  var $img = $('<img>',
              {
                'src': 'http://www.fillmurray.com/' + size + '/' + size,
                'class': 'murray'
              });

  $("#murray-box").append($img);
}

// Returns a number between min and max (includ)
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
