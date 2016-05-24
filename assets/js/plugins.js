(function($) {
   "use strict";

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// ============================================================================
// mental_menu plugin
// ============================================================================

(function($, window, document, undefined) {

    var pluginName = 'mental_menu';
    var defaults = {
      easing: 'easeOutBack',
      speed: 'slow'
    };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, defaults, options);
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
         init: function() {
            var that = this;

            // Bind toggler button
            this.$element.find('.submenu-toggler').click(function(e){
               e.preventDefault();
               that.toggle_sub($(this).siblings('ul'), $(this).find('i.fa'))
            });

         },
         toggle_sub: function($sub_ul, $icon){
            if($icon.hasClass('fa-plus')) $icon.removeClass('fa-plus').addClass('fa-minus');
            else $icon.removeClass('fa-minus').addClass('fa-plus');
            $sub_ul.slideToggle(this.options.speed, this.options.easing);

           
         }
    } // Plugin.prototype

    $.fn[pluginName] = function(options) {
        var args = [].slice.call(arguments, 1);
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName))
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            else if ($.isFunction(Plugin.prototype[options]))
                $.data(this, 'plugin_' + pluginName)[options].apply($.data(this, 'plugin_' + pluginName), args);
        });
    }
})(jQuery, window, document);

})(jQuery);