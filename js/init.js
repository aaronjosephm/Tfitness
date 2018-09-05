const tabs = document.querySelectorAll("li.tab")

tabs.forEach(function(tab) {
  tab.addEventListener("click", (event) => {
    tabs.forEach(function(tab) {
      tab.firstElementChild.classList.remove("tab-highlight");
    });
    event.target.classList.add("tab-highlight");
  });
});

console.log("wtf");

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


taabs.forEach(function(tab) {
  tab.addEventListener("click", (event) => {
    taabs.forEach(function(tab) {
      tab.firstElementChild.classList.remove("tab-highlight");
    });
    event.element.classList.add("tab-highlight");
  });
});
