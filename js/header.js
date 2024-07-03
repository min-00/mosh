$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("x_hamburger");
        $(".bg").toggleClass("bg_on");
        $(".top_menu").toggleClass("top_menu_on");
        $(".gnb").toggleClass("gnb_on");
    });

    var header = $('#header');
    var headerOffset = header.outerHeight();

    $(window).scroll(function() {

        if ($(window).scrollTop() > headerOffset) {
            header.addClass('fixed');
            $("body").css({"padding-top": headerOffset})
        } else {
            header.removeClass('fixed');
            $("body").css({"padding-top": ""})
        }
        
    });
});