/**
 * Site-wide js implementation
 *    jQuery libraries must be loaded before this script.
 */

$(document).ready(function(){
	// Make external links open in a new window
	$('a[rel*=external]').click(function(){
		window.open($(this).attr('href'));
		event.preventDefault();
	});
	
	// Keep back-to-top links from hashing the url if possible
	$('a[href="#content"]').click(function(){
		$('html,body').animate(
			{scrollTop: $("body").offset().top}, 
			{duration: 'normal', easing: 'swing'}
		);
		return false;
	});

    // Navigation bar fader
    $("menu#navigation").hover(
        function () {
            $(this).css({
                'opacity': '1', 
                '-webkit-transition': 'opacity 0.2s ease'
            });
        }, 
        function () {
            $(this).css({
                'opacity': '0.33', 
                '-webkit-transition': 'opacity 1.50s ease'
            });
        }
    );
    
    // Creates 1:1 modal displays for constrained images, click-to-close
    $("img[height], img[width]").css({
		"cursor": "pointer", 
	}).prop('title', 'Click to enlarge').click(function(){
		var modal = $('<div />', {
			'css': {
				'backgroundColor': 'rgba(0, 0, 0, 0.95)',
				'backgroundImage': 'url(' + $(this).prop('src') + ')', 
				'backgroundPosition': 'center', 
				'backgroundRepeat': 'no-repeat', 
				'color': 'rgba(255, 255, 255, 0.45)', 
				'fontSize': '2.0em', 
				'fontWeight': 'bold', 
				'height': $(window).height(), 
				'left': '0px', 
				'position': 'fixed', 
				'textShadow': '2px 1px rgba(0, 0, 0, 0.95), -2px -1px rgba(0, 0, 0, 0.95)', 
				'top': '0px', 
				'width': $(window).width(), 
				'zIndex': 9999999, 
			}, 
			'click': function() { $(this).remove(); }, 
		}).prop('title', 'Click anywhere to close').html(
			'Click anywhere to close'
		);
		$('body').prepend(modal);
	});

});
