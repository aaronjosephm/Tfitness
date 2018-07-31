(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown();
    $('.materialboxed').materialbox();

    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
    setTimeout(autoplay, 9000);
    function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 9000);
}
    var instance = M.Sidenav.getInstance(elem);


  }); // end of document ready
})(jQuery);
