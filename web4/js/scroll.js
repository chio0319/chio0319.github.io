$(function(){
   var ht = $(window).height();
   console.log(ht);
   $(".page").height(ht);
   $(window).resize(function(){
     var ht = $(window).height();
     $(".page").height(ht);
     $(window).scrollTop(ht);
     location.reload();
    });
    $(window).scroll(function(){
       var ht = $(window).height();
       var t = $(window).scrollTop();
        
       if(t >= ht*0 && t < ht*1) {
         $("#menu li").removeClass("on");
         $("#menu li").eq(0).addClass("on");  
       } else if(t >= ht*1 && t < ht*2) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(1).addClass("on");
       } else if(t >= ht*2 && t < ht*3) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(2).addClass("on"); 
       } else if(t >= ht*3 && t < ht*4) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(3).addClass("on"); 
       } else if(t >= ht*4 && t < ht*5) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(4).addClass("on"); 
       } else if(t >= ht*5 && t < ht*6) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(5).addClass("on"); 
       }
    });
    $(".page").on("mousewheel", function(event, delta){
        console.log(delta);
       //마우스를 올릴때
       if(delta > 0) {
         var prev = $(this).prev().offset().top;
         console.log("prev :"+prev);
           $("html, body").stop().animate({scrollTop:prev},1000,"easeOutCubic");
           
      //마우스를 내릴때
       } else if(delta < 0) {
           var next = $(this).next().offset().top;
           $("html, body").stop().animate({scrollTop:next},1000,"easeOutCubic");
       }
    });
    $("#menu li").click(function(){
      var num = $(this).index();
      var nowTop = num*ht;
      $("html, body").stop().animate({scrollTop:nowTop},1000,"easeOutCubic");
    });
    /* 비주얼배너 페이드인 */
    $(".vs_fr li:gt(0)").css({display:"none"});
    function nextani(){
       $(".vs_fr li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".vs_fr");
    }
    var interval = setInterval(nextani, 6000);        
    /*페이지 스크롤 시 헤더 전환*/
    /*var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('.page-start'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
    });

    $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
    });*/
    var offset2 = $(".page").eq(2).offset().top;
    var offset3 = $(".page").eq(3).offset().top;
    var offset4 = $(".page").eq(4).offset().top;
    var offset5 = $(".page").eq(5).offset().top;
    $(window).scroll(function(){
        var navbar = $(this).scrollTop();
        console.log(navbar);
        var $header = $('header');
        if(navbar < offset2) {
            $header.removeClass('activated');
        }
        else if(navbar >= offset2 && navbar < offset3){
            $header.addClass('activated');
        }else if(navbar >= offset3 && navbar < offset4){
            
           $header.removeClass('activated');
        }else if(navbar >= offset4 && navbar < offset5){
            $header.addClass('activated');
        }else if(navbar >= offset5 ){
            $header.addClass('activated');
        }
      });
});