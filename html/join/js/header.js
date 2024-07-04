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

    // 검색버튼 토글
    $(".search_icon").click(function(){
        $(".search_box").toggleClass("search_slide");
        $(".search_box button").toggleClass("search_hide");
    });
});