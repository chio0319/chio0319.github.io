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
    //스크롤 시 문자 효과
    /*$(window).scroll(function(){
		var ht = $(window).scrollTop();
		if(ht>1000 && ht<1400){
			$(".text_box").stop().animate({top:"65%"},1000);
			$(".text_box").stop().animate({opacity:"1",top:"75%"},1000);
		}else if(ht>1500 && ht<2400){
			$(".text_box").stop().animate({top:"60%"},1000);
			$(".text_box").stop().animate({opacity:"0",top:"70%"},900);
		}else if(ht>3000 && ht<3900){
			$(".maintit2").stop().animate({top:"57%"},1000);
			$(".txt3").stop().animate({opacity:"1",top:"70%"},1000);
		}else if(ht>4000 && ht<4900){
			$(".maintit2").stop().animate({top:"50%"},1000);
			$(".txt3").stop().animate({opacity:"0",top:"65%"},900);
		}else if(ht>5000 && ht<5800){
			$(".maintit3").stop().animate({top:"60%"},1000);
			$(".txt4").stop().animate({opacity:"1",top:"70%"},1000); 
		}else if(ht>5850 && ht<6300){
			$(".maintit3").stop().animate({top:"55%"},1000);
			$(".txt4").stop().animate({opacity:"0",top:"65%"},900);
		}else if(ht>7250 && ht<8000){
			$(".maintit4").stop().animate({top:"64%"},1000);
			$(".txt5").stop().animate({opacity:"1",top:"70%"},1000);
		}else if(ht>7250 && ht<8160){
			$(".maintit4").stop().animate({top:"60%"},1000);
			$(".txt5").stop().animate({opacity:"0",top:"65%"},900);
			$(".ftWrap").stop().animate({opacity:"0",top:"35%"},1500);
		}else{
			$(".ftWrap").stop().animate({opacity:"1",top:"30%"},1500);
		}
	});*/
    //햄버거 메뉴
    var burger = $('.menu-trigger');

    burger.each(function(index){
      var $this = $(this);

      $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
      })
    });
    //사이드바 메뉴 클릭 효과
    $(".fixed_gnb").click(function(){
        $(this).css({width:"400px", height:"100%", top:"0", boxShadow:"rgba(0,0,0,0.3) 0 0 0 9999px", zIndex:"1000", background:"#000"});
        $(".fixed_gnb .xi-flash, .fixed_gnb p").css({position:"absolute"});
        $(".fixed_gnb p").css({top:"50px"});
        $(".gnb_contents").css({display:"block"});
        $(".fixed_gnb i, .fixed_gnb p, .gnb_contents i").css({color:"#fff"});
    });
    /*$(".xi-close-thin").cilck(function(){
        $(".fixed_gnb").css({display:"none"});
    });*/
    //사이드바 사진 상하 슬라이드 
    function nextani() {
        $(".gnb_contents .img_box").not(":animated").animate({marginTop:"-359.3px"},500,function(){
            $(".gnb_contents .img_box li").eq(0).appendTo(".gnb_contents .img_box");
            $(".gnb_contents .img_box").css({marginTop:"0"});
        });
    }
    var interval = setInterval(nextani, 6000);
});