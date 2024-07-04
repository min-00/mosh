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

/*제품 상세페이지 동시 스크롤*/
$(document).ready(function(){
    $(".left").on("scroll", function(){
        $(".right").scrollTop($(this).scrollTop());
    });
    $(".right").on("scroll", function(){
        $(".left").scrollTop($(this).scrollTop());
    });
});

/* 수량 카운트 */
$(document).ready(function(){
    var q = $("#quantity");
    $(".more").click(function(){
        q.val(parseInt(q.val()) + 1);
        //수량에 따른 가격 가져오기
        var inputNumber = q.val();
        var result = parseFloat(inputNumber)*37810;
        var fResult = result.toLocaleString();
        $(".quantity_price").text(fResult + "원");
    });
    $(".less").click(function(){
        if (q.val() > 1) {
            q.val(parseInt(q.val()) - 1);
            //수량에 따른 가격 가져오기
            var inputNumber = q.val();
            var result = parseFloat(inputNumber)*37810;
            var fResult = result.toLocaleString();
            $(".quantity_price").text(fResult + "원");
        }
    });
});


/* color 선택 */
$(document).ready(function(){
    $(".color_list li").click(function(){
        $(".color_list li").removeClass("active");
        $(this).addClass("active");

        var color = $(this).data("color");
        $(".color_box p span").text("- " + color);

        $(".thumb_box img").attr("src", "../images/products_tumbler_lst_350_" + color + ".png")
    });
});

/* 아코디언 */
$(document).ready(function() {
    // 페이지 로드 시 모든 .content 요소를 슬라이드 업
    $(".content").slideUp();

    $(".title").click(function() {
        const $content = $(this).next(".content");
        const $titles = $(".title");
        
        // 현재 클릭된 요소의 클래스 토글
        if ($content.is(":visible")) {
            $titles.removeClass("active");
        } else {
            $titles.removeClass("active");
            $(this).addClass("active");
        }
        
        // 슬라이드 토글 및 다른 .content 요소 슬라이드 업
        $content.slideToggle().parent().siblings().find(".content").slideUp();
    });
});


/* 선택한 아이템 담기 & 빼기 */ 
$(document).ready(function() {
    $(".add").click(function() {
        var color = $(".color_list .active").data("color");
        var num = $("#quantity").val();
        var total = num*37810
        // 템플릿 리터럴을 사용하여 계산된 값을 HTML에 삽입
        const newDiv = $(`<div>
        <p>라떼 스트로우 텀블러 350ml</p>
        <p>색상 : ${color}</p>
        <p class="item_num">수량 : <span>${num}</span></p>
        <p>${total.toLocaleString()}원</p>
        <button type="button" class="removeDiv">-</button>
        </div>`);
        
        // 새로운 div 요소 추가
        $(".selected_item_box").append(newDiv);


        // 모든 수량 합
        let sum = 0;
        $(".selected_item_box .item_num span").each(function(){
            sum += parseInt($(this).text());
        });
        $(".total_box p span").text(sum);

        var totalSum = sum*37810;
        $(".total_price").text(totalSum.toLocaleString() + "원");
    });

    $(".selected_item_box").on("click", ".removeDiv", function(){
        $(this).closest("div").remove();

        // 모든 수량 합
        let sum = 0;
        $(".selected_item_box .item_num span").each(function(){
            sum += parseInt($(this).text());
        });
        $(".total_box p span").text(sum);

        var totalSum = sum*37810;
        $(".total_price").text(totalSum.toLocaleString() + "원");
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