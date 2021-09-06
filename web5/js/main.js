$(function(){ 
    //LANGUAGES 클릭 시 나타나게
    $(".lang").click(function(){
        var submenu = $(".lang_sub")
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
    //검색창 클릭 시 나타나게
    $(".search").click(function(){
        $(".search_fr").slideDown();
    });
    $(".close_btn1").click(function(){
        $(".search_fr").slideUp();
    })
    //전체 검색 클릭 시 서브 메뉴 보이기
    $(".whole").click(function(){
        var submenu = $(".whole_sub")
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
    //메뉴 클릭 시 서브 메뉴 각각 보이게
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
    //검색창 초기값
    /*$("input#keyword").val("검색어를 입력하세요.").css({color:"#fff"})
                                               .css({paddingLeft:"10px"});*/
});