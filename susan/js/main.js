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
    //서브메뉴 드롭다운
    // $(".sub").hide();
    // $(".menu").hover(function(){    
    //     $(this).parent().find(".sub").slideDown();
    //     $(this).parent().hover(function(){  

    //     },function(){
    //         $(this).parent().find(".sub").slideUp(900);
    //     });
    // });
    //모바일 메뉴
    // $(".menu_ico").click(function(){    
    //     // $(".menu").css({display:"block"});
    //     // $(".gnb >  ul > li").addClass("on");
    //     $(".moblie_menu").css({display:"block"});
    //     // $(".moblie_menu").css( { 'left' : '-100%' } );
    //     // $(".moblie_menu").animate( { left: '0px' });
    // });
    // $(".xi-close").click(function(){    
    //     $(".moblie_menu").css({display:"none"});
    // });
    //모바일 메뉴 수정
    $(".menu_ico").click(function(){
        $(".moblie_menu").addClass("on");
        // $(".bg-shadow").css("display", "block");
    });
    $(".xi-close").click(function(){
        $(".moblie_menu").removeClass("on");
        // $(".bg-shadow").css("display", "none");
    });
    //모바일 아코디언
    $('.nav > li').click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).find(' > ul').stop().slideUp(300);
            $(this).removeClass('active');
        }
        else {
            $(this).find(' > ul').stop().slideDown(300);
            $(this).addClass('active');
        }
    });
});