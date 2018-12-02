// Main

bindEvents = function() {
  $(".altai-center").altaiCenter();
  $(".altai-off").altaiOff();
  $(".altai-scroll").altaiScroll();
  $(".altai-toggle").altaiToggle();
}
$( document ).ready(function() {
  bindEvents();
});

// $(window).resize(function() {
//   bindEvents();
// });
