<<<<<<< HEAD
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
});


=======
>>>>>>> a8f2ebc9230563a1607b302b0230604f8e6cae00
/* 제품 이미지 컬러 변경 */
document.querySelectorAll('.item_img_box').forEach(product => {
    const mainImage = product.querySelector('.mainImage');
    const originalSrc = mainImage.src;

    product.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('mouseover', () => {
        const color = option.getAttribute('data-color');
        mainImage.src = `images/products_${color}.png`;
      });
      option.addEventListener('mouseout', () => {
        mainImage.src = originalSrc; //원본 이미지로 복원
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
    document.getElementById("prod_menu_page").innerHTML = dsp_cont;
}

function getFile(url, callbackFunc){
    const req = new XMLHttpRequest();
    req.onload = function(){
        if(req.readyState == 4 && req.status == 200){
            callbackFunc(this.responseText);
        } else {
            callbackFunc("Error : " + req.status);
        }

        /*페이지 로드 후 스크립트 안먹는 오류 해결*/
        var script = document.createElement("script"); // 스크립트 요소 생성
        script.src = "js/products.js"; // 스크립트 src 속성 설정
        document.body.appendChild(script); // 스크립트 요소를 문서의 body에 추가
    }
    req.open("GET", url);
    req.send();
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
