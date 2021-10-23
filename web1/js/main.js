//페이지 가로 스크롤
$(function(){
    $(".page").each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollLeft();
            var elmSelecter = $(".page").eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().left;
                        /*$(moveTop).each(function(){
                            $(".txt").addClass("on");    
                        });*/
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().left;
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollLeft: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
});
//헤더 on클래스
$(function(){
    $(".header").hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });    
});