
    
    $(function(){
            //준비중 페이지
    $('.sns_wrap ul li').click(
        function(){
            alert("준비중인 페이지입니다.");
        }
    );
    $('.notice').click(
        function(){
            alert("준비중인 페이지입니다.");
        }
    );
    
        // main slider
    var swiperMain = new Swiper(".mainSwiper", {
        slidesPerView : 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        speed:1000,
        parallax : true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        watchSlidesProgress :true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        freemode: true,
        effect : 'fade',
    });


    // about txt animation
    $('.marquee').marquee({
        duration: 20000,
        delayBeforeStart:500,
        direction: 'left',
        startVisible: true,
        duplicated: true,
        gap:10,
        loop: true,
    });
    // scroll show
    ScrollReveal().reveal('.rev_scroll',{
        delay: 500,
        duration : 1400,
        distance : '80px',
        interval : 120,
});
    ScrollReveal().reveal('.about_items',{ 
        delay: 600,
        duration : 1200,
        distance : '80px',
        interval : 150,
    });
ScrollReveal().reveal('',);
    //sns slider
    var swiperSns = new Swiper(".snsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        freeMode: true,
        loop :true,
    });

});
