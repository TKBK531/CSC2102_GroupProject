$(document).ready(function() {
    // Show or hide the button based on the user's scroll position
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#myBtn').fadeIn();
      } else {
        $('#myBtn').fadeOut();
      }
    });
  
    // When the button is clicked, scroll to the top of the page
    $('#myBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  