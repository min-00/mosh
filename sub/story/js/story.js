$(document).ready(function () {
    ScrollReveal().reveal('.story_cont>div',{
        delay: 500,
        duration : 1400,
        distance : '60px',
        interval : 120,
});

    const recipeList = $("#recipeList>li");
    const recipeCont = $("#recipeCont>li");
    let cont =0;

    /*닫기 버튼*/
    $('.closed_btn').on('click',
        function () {
            $('.recipe_pop').stop().fadeOut();
        }
    );

    /*컨텐츠 외부 클릭시 닫힘*/
    $(document).mouseup(function (e){
        var LayerOut = $(".recipe_pop");
        if (LayerOut.has(e.target).length === 0) {
            LayerOut.stop().fadeOut();
        }
    });


    // 레시피 팝업
    recipeList.off('click').on('click',
        function(){
            // 배경+버튼 보이기
            $('.recipe_pop').stop().fadeIn();
            // 레시피 리스트 인덱스 = 레시피 콘텐츠 인덱스
            let num = recipeList.index(this);
            let cont = Number(num);
            // hide 코드가 빠질 경우 0번 인덱스만 보임
            recipeCont.hide();
            recipeCont.eq(cont).stop().fadeIn();
    /*다음*/
        $('.next_btn').off('click').on('click',
        function(){
            //console.log(cont);
            recipeCont.eq(cont).stop().fadeOut();
            if(cont>recipeList.length-1){
            cont = 0;}
            else{
            cont+1;
            };
            i = cont++;
            recipeCont.hide();
            recipeCont.eq(i).stop().fadeIn();
        });
    
    $('.pre_btn').off('click').on('click',
        function () {
            recipeCont.eq(cont).stop().fadeOut();
            if(cont<0){
                cont = recipeList.length-1;
            }
            else{
                cont+2;
            }
            i =cont--;
            recipeCont.hide();
            recipeCont.eq(i).stop().fadeIn();
        });
        });
});
