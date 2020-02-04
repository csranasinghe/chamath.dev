(function($) {
    "use strict";
    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    };

    /* Loader Code Start */
    $(window).on("load", function() {
        $(".section-loader").fadeOut("slow");
    });
    /* Loader Code End */

    /*
|====================
| Mobile NAv trigger
|=====================
*/

    var trigger = $(".navbar-toggler"),
        overlay = $(".overlay"),
        navc = $(".navbar-collapse"),
        active = false;

    $(".navbar-toggler, .navbar-nav li a, .overlay").on("click", function() {
        $(".navbar-toggler").toggleClass("active");
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
        overlay.toggleClass("active");
        navc.toggleClass("active");
    });

}(jQuery));