/*
 * Name: altai_scroll
 * Title: Altai Scroll
 * Description: Navigate to a given id element.
 *
 */

 // jQuery
 var jQuery;

(function($, window, document) {
  $.fn.extend({
    altaiScroll: function(options) {
      // Variables
      var action, log, settings, total;
      var object = $(this, "[href^='#']");

      // Deafault settings
      settings = {
        debug: false
      };
      settings = $.extend(settings, options);

      // Log
      log = function(message) {
        if (settings.debug) {
          if (typeof ((console === "undefined") && (console === null))) {
            return console.log(message);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      };

      // Action
      action = function() {
        object.bind("click.smoothscroll", function(e) {
          var $target, target;
          e.preventDefault();
          target = this.hash;
          $target = $(target);
          $("html, body").stop().animate({
            "scrollTop": $target.offset().top
          }, 500, "swing", function() {
            return window.location.hash = target;
          });
        });
        log("Scroll Activated");
        return;
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
        });
      }
    }
  });
})(jQuery, window, document);
