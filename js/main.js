//jQuery to collapse the navbar on scroll
$(window).scroll(function() {

  if ($('#rent-hunt-nav').hasClass("rent-roll") == true) {
    if ($(".navbar").offset().top > 50) {
        $(".navbar").removeClass("navbar-brand");
        $(".navbar").addClass("navbar-default");
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar").removeClass("navbar-default");
        $(".navbar").addClass("navbar-brand");
    }
  } else {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
