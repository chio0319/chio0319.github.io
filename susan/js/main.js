$(function(){ 
    $(".tabmenu li").click(function(){
        if($(this).hasClass("on")){
             /*$(".tabmenu li").removeClass("on");  */   
        } else {
             $(".tabmenu li").removeClass("on");
             $(this).addClass("on");
        }
    });
    $(".tab1").click(function(){
        $(".notice").css({display:"block"}); 
        $(".edu").css({display:"none"}); 
        $(".promotion").css({display:"none"}); 
    });
    $(".tab2").click(function(){
        $(".notice").css({display:"none"}); 
        $(".edu").css({display:"block"}); 
        $(".promotion").css({display:"none"}); 
    });
    $(".tab3").click(function(){
        $(".notice").css({display:"none"}); 
        $(".edu").css({display:"none"}); 
        $(".promotion").css({display:"block"}); 
    });
});