
$(document).ready(function() {
    //smooth scroll
	$('a').smoothScroll({
		speed: 520
	});
    
   
   
    

    
    
});

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-91000029-1', 'auto');
  ga('send', 'pageview');




$(document).ready(function() {
    
    // Add class to mailto link
    // Needed to separate the disabling of the default action AND copy email to clipboard
    $('a[href^=mailto]').addClass('mailto-link');

    var mailto = $('.mailto-link');
    var messageCopy = 'Get in touch';
    var messageSuccess = 'Email copied!';
    
    mailto.append('<span class="mailto-message"></span>');
    $('.mailto-message').append(messageCopy);
    
    // Disable opening your email client. yuk.
    $('a[href^=mailto]').click(function() {
        return false; 
    })
    
    // On click, get href and remove 'mailto:' from value
    // Store email address in a variable.
    mailto.click(function() {
        var href = $(this).attr('href');
        var email = href.replace('mailto:', '');
        copyToClipboard(email);
        $('.mailto-message').empty().append(messageSuccess);
        setTimeout(function() {
            $('.mailto-message').empty().append(messageCopy);}, 2000); 
    });
    
});

// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}



  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*    ALL NAVIGATION: menu btn, btn 2 states, icons for button     */
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*-------------------------------------------------------------*/
/*             jQuery .menu-toggle (CSS) btn onClick           */
/*-------------------------------------------------------------*/

$('.menu-toggle').click(function() {

    /*--------------------------------------------------------------*/
    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/
    /*--------------------------------------------------------------*/
    $('.site-nav').toggleClass('site-nav-open', 500);
        
    /*-------------------------------------------------------------*/
    /* changes hamburger to red X for close button .open CSS       */
    /*-------------------------------------------------------------*/
    $(this).toggleClass('open');

  })
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



