$(function(){
    //서브 메뉴 각각 보이게
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
    //풀페이지
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        anchors:['Main', '02', '03', '04', '05', '06'],
        navigation: true,
        navigationPosition: 'left',
        afterLoad: function(anchorLink, index) {
            // 처리
            if (anchorLink == 'Main') {
                $('#header').removeClass('activated');
                $('#fp-nav').removeClass('bg');
            } else if (anchorLink == '02') {
                $('#header').removeClass('activated');
                $('#fp-nav').removeClass('bg');
            } else if (anchorLink == '03') {
                $('#header').addClass('activated');
                $('#fp-nav').addClass('bg');
            } else if (anchorLink == '04'){
                $('#header').removeClass('activated');
                $('#fp-nav').removeClass('bg');
            } else if (anchorLink == '05'){
                $('#header').addClass('activated');
                $('#fp-nav').addClass('bg');
            } else if (anchorLink == '06'){
                $('#header').addClass('activated');
                $('#fp-nav').addClass('bg');
            }
        }
    });
    //비주얼배너 페이드인
    $(".vs_fr li:gt(0)").css({display:"none"});
    function nextani(){
       $(".vs_fr li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".vs_fr");
    }
    var interval = setInterval(nextani, 6000);    
    //page3 탭버튼
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
        $('.main_center .slide1').slick('setPosition');
        $('.main_center .tab1').slick('setPosition');
        $('.main_center .slide2').slick('setPosition');
        $('.main_center .tab2').slick('setPosition');
    });
    //섹션 active
    /*$window.on('scroll', function() {
        var position = $window.scrollTop() + windowheight - delayPosition - 300;
        console.log(position);
        $('.section').each(function() {
            if(!$(this).hasClass('fp-completely') && $(this).data('offsetTop') < position) {
              $('.section').removeClass('fp-completely');
              $(this).addClass('fp-completely');
              $(this).removeClass('ready');
            }
        });
    });

    (function init() {
      insertTargetPosition();
    })();*/
});