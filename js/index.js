$(function() {
    var $top = $('.nav-bar');
    $(window).scroll(function() {
        if ($(document).scrollTop() > 60) {
            $top.addClass('fixed');
        } else {
            $top.removeClass('fixed');
        }
    });
});
