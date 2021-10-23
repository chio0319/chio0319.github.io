//스크롤 시 배경 어둡게
$(function() {
    var shrinkHeader = 860;
    var shrinkHeader1 = 1060;
    $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
       $('.background_wrap').addClass('on');
    }
    else {
        $('.background_wrap').removeClass('on');
    }
});
    $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader1 ) {
       $('.background_wrap').addClass('on1');
    }
    else {
        $('.background_wrap').removeClass('on1');
    }
});
    function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
    //사이드바 메뉴 클릭 효과
    $(".fixed_gnb").click(function(){
        $(this).css({width:"400px", height:"100%", top:"0", boxShadow:"rgba(0,0,0,0.3) 0 0 0 9999px", zIndex:"1000", background:"#000"});
        $(".fixed_gnb .xi-flash, .fixed_gnb p").css({position:"absolute"});
        $(".fixed_gnb p").css({top:"50px"});
        $(".gnb_contents").css({display:"block"});
        $(".fixed_gnb i, .fixed_gnb p, .gnb_contents i").css({color:"#fff"});
    });
});