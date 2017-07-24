$(document).ready(function() {
  // scroll to section
  $("#mainNav ul li a[href^='#']").click(function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 1000, function() {
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });
  });
});