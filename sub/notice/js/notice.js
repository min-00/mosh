$(document).ready(function () {
    $('.tab_menu>ul>li').on('click', function () {
        let tabIndex = $(".tab_menu>ul>li").index(this);
        $('.notice_cont_wrap section').removeClass('on');
        $('.notice_cont_wrap section:eq(' + tabIndex + ')').addClass('on');
    });

    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $('.slick-arrow').hide();
    $('.slider').on('mouseenter',function(){
        $('.slick-arrow').show();
    });
    $('.slider').on('mouseleave',function(){
        $('.slick-arrow').hide();
    });


    $('.qa>li>p').next().hide();
    $('.qa>li>p').on('click', function () {
        if ($(this).hasClass("active")) {
            slideUp();
        } else {
            slideUp();
            $(this).addClass("active").next().slideDown();
        }
        function slideUp() {
            $('.qa>li>p').removeClass("active").next().slideUp();
        }
    });
});