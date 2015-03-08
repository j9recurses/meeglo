$(document).ready(function() {
  // Cache the Window object
  $window = $(window);

  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% ' + yPos + 'px';

      // Move the background
      $bgobj.css({
        backgroundPosition: coords
      });

    }); // window scroll Ends

  });
  /*
   * Create HTML5 elements for IE's sake
   */

  document.createElement("article");
  document.createElement("section");

  $(function() {
    $("form#contact_me").submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/register/?",
        //serialize the form and use it as data for our ajax request
        data: $(this).serialize(),
        //the type of data we are expecting back from server, could be json too
        dataType: "html",
        success: function() {
          $(".btn").html("Thanks! We'll keep you posted!")
          document.getElementById("contact_me").reset();
        },
        error: function() {
          $(".btn").html("Couldn't register your email")
        }
      });
    });
  });

});
