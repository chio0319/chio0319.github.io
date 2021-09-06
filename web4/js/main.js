$(function(){
    $(".sub").css({display:"none"});
    $(".gnb ul li,#sub_wrap > div").hover(function(){
        var i = $(this).index();
        $("#sub_wrap > div").eq(i).stop().slideDown(300);
    },function(){
        $("#sub_wrap > div").stop().slideUp(300);
    });
    $("#sub_wrap > div").hover(function(){
        var i = $(this).index();
        $(".gnb ul li").eq(i).find("a").addClass("on");   
    },function(){
        $(".gnb ul li a").removeClass("on");     
    });
});