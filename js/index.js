
	$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('nav').addClass('black');
	}
	else {
	    $('nav').removeClass('black');
	}
	})

	$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('div').addClass('black');
	}
	else {
	    $('div').removeClass('black');
	}
	})

	$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('img').addClass('black');
	}
	else {
	    $('img').removeClass('black');
	}

	})


	$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('label').addClass('black');
	}
	else {
	    $('label').removeClass('black');
	}

	})
	
	
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        
        window.location.hash = hash;
      });
    }
  });
});


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// on off button
var onoffbutton;
function OnOff() {
   var element = document.getElementById("test");
   element.classList.toggle("on");
}