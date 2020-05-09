
$(document).ready(function() {
    //smooth scroll
	$('a').smoothScroll({
		speed: 520
	});
    
    //navbar transition
    var header = $(".navbarTransp");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 700) {
            header.removeClass('navbarTransp').addClass("navbarLight");
        } else {
            header.removeClass("navbarLight").addClass('navbarTransp');
        }
    });
    

    
    
});

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-91000029-1', 'auto');
  ga('send', 'pageview');