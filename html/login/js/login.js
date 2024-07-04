$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    $('#top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});