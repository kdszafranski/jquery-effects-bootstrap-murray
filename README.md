# jQuery Events and Effects (with Bootstrap CSS)

Lecture notes for working with jQuery event listeners, Bootstrap grid layout, jQuery effects, and of course, Bill Murray.

## Selecting Murrays
Includes logic to allow the user to click on a murray image and select it. This demonstrates how we would store data on each image element in the DOM and use it to set a 'selected' value on each image, and therefore track multiple values with .data().

This could then be used to target a specific image to use effects on instead of all of them.

    function selectMurray() {
    	var selected = $(this).data('id');

    	$('.murray').each(function(i) {
    	    // this refers to the <img> element we clicked on
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