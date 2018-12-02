/*
 * Name: altai_center
 * Title: Altai Center
 * Description: Center align a given element.
 *
 */

// jQuery
var jQuery;

(function($, window, document) {
  return $.fn.extend({
    altaiCenter: function(options) {
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
          if (typeof((console === "undefined") && (console === null))) {
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
          $(this).wrap("<div class='center-h-parent'><div class='center-h-child'></div></div>" );
        });
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function() {
          action();
          log("Altai Center Activated");
        });
      }
    }
  });
})(jQuery, window, document);
