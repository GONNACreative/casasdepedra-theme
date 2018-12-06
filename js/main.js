// Main

bindEvents = function() {
  $("body").hide();
  $(".altai-center").altaiCenter();
  $(".altai-off").altaiOff();
  $(".altai-scroll").altaiScroll();
  $(".altai-toggle").altaiToggle();
  $("body").delay(250).fadeIn(500);
  $("a.gallery").featherlightGallery({
		previousIcon: "&#9664;",
		nextIcon: "&#9654;",
		galleryFadeIn: 100,
		galleryFadeOut: 300
	});
}
$( document ).ready(function() {
  bindEvents();
});

// $(window).resize(function() {
//   bindEvents();
// });
