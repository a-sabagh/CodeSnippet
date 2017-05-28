// choose your internal link in your landing page for example:
jQuery(document).ready(function($){
	$(".single-portfolio .totalbusiness-portfolio-content a").on('click', function (event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	        // Prevent default anchor click behavior
	        event.preventDefault();
	
	        // Store hash
	        var hash = this.hash;
	        // Using jQuery's animate() method to add smooth page scroll
	        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	        $('html, body').animate({
	            scrollTop: $(hash).offset().top - 100
	        }, 1100, function () {
			return false;
	        });
	    } // End if
	});
});

