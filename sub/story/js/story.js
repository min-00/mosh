$(document).ready(function(){
    const recipeList = $("#recipeList>li");
    const recipeCont = $("#recipeCont>li");

    /*닫기 버튼*/
    $('.closed_btn').click(
        function(){
            $('.recipe_pop').stop().fadeOut();
        }
    );
/*컨텐츠 외부 클릭시 닫힘*/ 
    $(document).mouseup(function (e){
        var LayerOut= $(".recipe_pop");
        if(LayerOut.has(e.target).length === 0){
            LayerOut.stop().fadeOut();
        }
    });

// 레시피 팝업
    recipeList.click(
        function(){
            // 배경+버튼 보이기
            $('.recipe_pop').stop().fadeIn();
            // 레시피 리스트 인덱스 = 레시피 콘텐츠 인덱스
            let num = recipeList.index(this);
            // console.log(num);
            var cont = Number(num);
            //console.log(cont);
            recipeCont.hide();
            recipeCont.eq(cont).stop().fadeIn();

            /*슬라이드 구현*/
            $('.next_btn').click(
                function(){
                    console.log(cont);
                });
            $('.pre_btn').click(
                    function(){
                        console.log(cont);
                });

        }
    );

    /* animate 사용 시 위치가 고정되므로
    팝업 시 해당 내용이 나오지 않음! 
$('.next_btn').click(
    function(){
        $('.recipe_slider').animate(
            {
                right:1000
            },'fast');
    });
$('.pre_btn').click(
        function(){
            $('.recipe_slider').animate(
                {
                    left:0
                },'fast');
    });*/
});

