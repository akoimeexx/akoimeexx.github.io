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
});
