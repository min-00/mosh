
document.querySelectorAll('.item_img_box').forEach(product => {
    const mainImage = product.querySelector('.mainImage');

    product.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('mouseover', () => {
        const color = option.getAttribute('data-color');
        mainImage.src = `images/products_tumbler_${color}.png`;
      });
    });
}); // 제품 이미지 컬러 변경

$(document).ready(function () {
    $(".filter_wrap").click(function(){
        $(".filter_wrap").toggleClass("filter_open");
    }); //필터 토글

    $(".prod_list ul li").click(function(){
        $(".prod_list ul li").removeClass("selected_menu");
        $(this).addClass("selected_menu");
    });
});

function dspFunc(dsp_cont){
    document.getElementById("prod_menu_page").innerHTML = dsp_cont;
}

function getFile(callbackFunc){
    const req = new XMLHttpRequest();
    req.onload = function(){
        callbackFunc(this.responseText);
    }
    req.open("GET", "sss.html");
    req.send();
}
