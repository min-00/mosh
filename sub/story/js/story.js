$(document).ready(function(){
    $('.closed_btn').click(
        function(){
            // $('.recipe_pop').css({"display":"none"});
            $('.recipe_pop').stop().fadeOut();
        }
    );

    $('.recipe_list>li').click(
        function(){
            // $('.recipe_pop').css({"display":"block"});
            $('.recipe_pop').stop().fadeIn();
        }
    )
});