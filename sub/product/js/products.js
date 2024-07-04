/* header */
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


/* 제품 이미지 컬러 변경 */
$('.item_img_box').each(function() {
    var product = $(this);
    var mainImage = product.find('.mainImage');
    var originalSrc = mainImage.attr('src');

    product.find('.color-option').each(function() {
        var option = $(this);
        option.on('mouseover', function() {
            var color = option.data('color');
            mainImage.attr('src', 'images/products_' + color + '.png');
        });
        option.on('mouseout', function() {
            mainImage.attr('src', originalSrc); // 원본 이미지로 복원
        });
    });
});


/* 필터 토글 */
$(document).ready(function () {
    $(".filter_wrap").click(function(){
        $(".filter_wrap").toggleClass("filter_open");
    });

    $(".prod_list ul li").click(function(){
        $(".prod_list ul li").removeClass("selected_menu");
        $(this).addClass("selected_menu");
    });
});


/* ajax - 카테고리 */
function dspFunc(dsp_cont){
    $("#prod_menu_page").html(dsp_cont);
}

function getFile(url, callbackFunc){
    $.ajax({
        url: url,
        method: 'GET',
        success: function(response){
            callbackFunc(response);

            /*페이지 로드 후 스크립트 안먹는 오류 해결*/
            var script = document.createElement("script"); // 스크립트 요소 생성
            script.src = "js/products.js"; // 스크립트 src 속성 설정
            script.onload = function (){
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
            };
            document.body.appendChild(script); // 스크립트 요소를 문서의 body에 추가
        },
        error: function(xhr){
            callbackFunc("Error : " + xhr.status);
        }
    });
}


/* 관심상품 아이콘 */
$(document).ready(function(){
    const mtHeart = "images/like.png";
    const fullHeart = "images/full_like.png";

    $(".heart").click(function(){
        const img = $(this).find("a img");
        const currentSrc = img.attr("src");
        
        if(currentSrc === mtHeart) {
            img.attr("src", fullHeart);
        } else {
            img.attr("src", mtHeart);
        }
        
    });
});


/* top_btn */

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