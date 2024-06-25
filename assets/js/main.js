$(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 25) {
            $('.nav').addClass('bg-white');
        } else {
            $('.nav').removeClass('bg-white');
        }
    });
})