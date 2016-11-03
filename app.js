$(document).ready(function() {
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

  // ad-hoc animation with .animate()
  $("#murray-box").on("click", ".murray", function() {
    $(this).animate({
      height: '-=50px',
      width: '-=50px'
    }, 500)
    .delay(500)
    .animate({
      height: '+=50px',
      width: '+=50px'
    }, 'fast');
  });

  // Use pre-defined CSS class to apply animation effects
  $("#murray-box").on("click", ".murray", function() {
    // if($(this).hasClass("spin-murray"))
    $(this).toggleClass("spin-murray");
  });

	$("#add-murray").on("click", function() {
    var size = randomNumber(150, 400);
    var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />';
    $("#murray-box").append(img);
  });

});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
