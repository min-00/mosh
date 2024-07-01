$(document).ready(function () {
    var contHigh = $('.notice_cont_wrap>.on').height();
    $('.notice_cont_wrap').height(contHigh);

    $('.tab_menu>ul>li').on('click', function () {
        let tabIndex = $(".tab_menu>ul>li").index(this);
        $('.tab_menu>ul>li>a').removeClass('tab_on');
        $('.notice_cont_wrap section').removeClass('on');
        $('.tab_menu>ul>li:eq(' + tabIndex + ')>a').addClass('tab_on');
        $('.notice_cont_wrap section:eq(' + tabIndex + ')').addClass('on');
        var contHigh = $('.notice_cont_wrap>.on').height();
        $('.notice_cont_wrap').height(contHigh);
    });

    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2300,
    });

    $('.slick-arrow').hide();
    $('.slider').on('mouseenter', function () {
        $('.slick-arrow').show(400);
    });
    $('.slider').on('mouseleave', function () {
        $('.slick-arrow').hide(400);
    });


    $('.qa>li>p').next().hide();
    $('.qa>li>p').on('click', function () {
        if ($(this).hasClass("active")) {
            slideUp('fast');
        } else {
            slideUp('fast');
            $(this).addClass("active").next().slideDown('fast');
        }
        function slideUp() {
            $(this).addClass("active").next().slideDown('fast');
            $('.qa>li>p').removeClass("active").next().slideUp('fast');
        }
    });
});