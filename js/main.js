
$(document).ready(function() {
    //smooth scroll
	$('a').smoothScroll({
		speed: 520
	});
    
    //navbar transition
    var header = $(".navbarDark");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 800) {
            header.removeClass('navbarDark').addClass("navbarLight");
        } else {
            header.removeClass("navbarLight").addClass('navbarDark');
        }
    });
    

    
    
});