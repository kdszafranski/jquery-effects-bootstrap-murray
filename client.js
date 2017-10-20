$(document).ready(readyNow);

function readyNow() {
  console.log('DOM is loaded');

  // add image

  // effects

}

// Returns a number between min and max (includ)
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
