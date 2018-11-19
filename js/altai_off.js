/*
* Name: altai_off
* Title: Altai Off
* Version: v1.1.2
* Description: Disable anchor href attributes.
*
*/

// jQuery
var jQuery;

(function($, window, document) {
  return $.fn.extend({
    altaiOff: function(options) {
      // Variables
      var action, log, settings;
      var object = $(this);

      // Default settings
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
        object.each(function() {
          $(this).on("click", function(e) {
            e.preventDefault();
          });
        });
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
          log("Altai off activated");
        });
      }
    }
  });
})(jQuery, window, document);
