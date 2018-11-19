// Main

bindEvents = function() {
  $(".altai-off").altaiOff();
  $(".altai-scroll").altaiScroll();
}
$( document ).ready(function() {
  bindEvents();
});

$(window).resize(function() {
  bindEvents();
});
