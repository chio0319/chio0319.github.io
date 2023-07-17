// $(function(){
// 	w3.includeHTML();
// 	includeHTML();
// });	

// $(function(){
// 	//setSkipNavigation();
// 	setMenuAll();
// 	setGNB();
// 	setMGNB();
// 	//setHeader();
// 	setSearch();
// });

/* 실행 */
// window.addEventListener('DOMContentLoaded', function(){
// 	includeHTML();
// });

$(document).ready(function(){
	includeHTML();
});

function includeHTML(){
    let z, elmnt, file, xhttp;
 
    z = document.getElementsByTagName("*");
    
    for (let i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("include-html");
      
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }//if
        }//onreadystatechange
 
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }//if - file
    }//for
}//includeHTML

window.onload = function () {
	//setSkipNavigation();
	setMenuAll();
	setGNB();
	setMGNB();
	//setHeader();
	setSearch();
	console.log('실행');
}

// $(window).load(function(){
// 	//setSkipNavigation();
// 	setMenuAll();
// 	setGNB();
// 	setMGNB();
// 	//setHeader();
// 	setSearch();
// });

// window.addEventListener('load',function(){
// 	//setSkipNavigation();
// 	setMenuAll();
// 	setGNB();
// 	setMGNB();
// 	//setHeader();
// 	setSearch();
// });


// window.addEventListener('DOMContentLoaded',function(){
//   includeHTML();
// });

function setSearch(){
    // $('#header .search-btn').on('click', function(){
    //     var $this = $(this);
    //     $('#header .search-box').slideToggle();
    //     $('#header .search-input input').focus();
    // });

    // $('.recent-search-word ul li:last-child a').blur(function(){
    //     $('#header .search-box').slideUp();
    //     $('.logo a').focus();
    // });

	// var target = '#menuAll';

	// $('a[href="' + target + '"]').on('click', function(e){
	// 	var current = e;
	// 	current.preventDefault();

	// 	if(!$(this).hasClass('on')){
	// 		$(this).addClass('on');

	// 		$(target).addClass('on').find('a:last').off().on('keydown', function(e){
	// 			if(!e.shiftKey && 9 == e.keyCode){
	// 				e.preventDefault();
	// 				current.currentTarget.focus();
	// 			}
	// 		}).end().find('a:first').off().on('keydown', function(e){
	// 			if(e.shiftKey && 9 == e.keyCode){
	// 				e.preventDefault();
	// 				current.currentTarget.focus();
	// 			}
	// 		});

	// 		$(this).on('keydown', function(e){
	// 			if($(this).hasClass('on') && e.shiftKey && 9 == e.keyCode){
	// 				e.preventDefault();
	// 				$(target).find('a:last').get(0).focus();
	// 			}
	// 		});
	// 	}else{
	// 		$(this).removeClass('on');
	// 		$(target).removeClass('on');
	// 	}
	// });

	var target = '#search-box';

	$('a[href="' + target + '"]').on('click', function(e){
		
		var current = e;
		current.preventDefault();

		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$('#header .search-box').stop(true,true).slideDown(300, 'easeOutExpo');
			//$('#header .search-input input').focus();

			$(target).addClass('on').find('.recent-search-word a:last').off().on('keydown', function(e){
				if(!e.shiftKey && 9 == e.keyCode){
					e.preventDefault();
					current.currentTarget.focus();
				}
			}).end().find('a:first').off().on('keydown', function(e){
				if(e.shiftKey && 9 == e.keyCode){
					e.preventDefault();
					current.currentTarget.focus();
				}
			});

			$(this).on('keydown', function(e){
				if($(this).hasClass('on') && e.shiftKey && 9 == e.keyCode){
					//e.preventDefault();
					//$(target).find('a:last').get(0).focus();
					//$('#header .search-input input').focus();
					$(target).addClass('on').find('.search-input input').focus();
				}
			});
		}else{
			$(this).removeClass('on');
			$(target).removeClass('on');
			$('#header .search-box').stop(true,true).slideUp(300, 'easeOutExpo');
		}
	});
}

function setGNB(){
    //상단 메뉴
	$("#gnb").each(function(){
		$(".gnb li li.on",this).parents("li").addClass("on");
		$(".gnb > li", this).on("mouseenter focusin",function(){
			$(this).addClass("on");
			$('.btnSearch').removeClass('on');
			$('#header .searchForm').slideUp('fast');
			$('.search_Bg').removeClass('on');
		}).on("mouseleave focusout",function(){
			$(this).removeClass("on");
		});
		$('.gnb',this).on("mouseenter focusin",function(){
			$(this).addClass("on").stop(true,true).animate({"height":"380px"},300, 'easeOutExpo');//높이 지정(메뉴 추가시 조절)
            $('#header .header-bg').stop(true,true).slideDown(300, 'easeOutExpo');
			$('#header').addClass("online");
		}).on("mouseleave",function(){
			$(this).removeClass("on").stop(true,true).animate({"height":"80px"},300, 'easeOutExpo');
            $('#header .header-bg').stop(true,true).slideUp(300, 'easeOutExpo');
			$('#header').removeClass("online");
		});
	});
	$('*:not("#gnb a")').focus(function(){
		$(".gnb").removeClass("on");
		$(".gnb").removeClass("on").stop(true,true).animate({"height":"80px"},300, 'easeOutExpo');
        $('#header .header-bg').stop(true,true).slideUp(300, 'easeOutExpo');
	});

	$('.char01, .char01 > a').on('focus mouseenter', function(){
		$('.header-bg .title').show();
		$('.header-bg .txt-box').html('<p>6가지 직불제를<br>한눈에 볼 수 있어요!</p>');
		$('.header-bg .img-box').css({'background':'url(../../images/common/char01.png)'});
	});
	$('.char02, .char02 > a').on('focus mouseenter', function(){
		$('.header-bg .title').show();
		$('.header-bg .txt-box').html('<p>교육과정을<br>알 수 있어요!</p>');
		$('.header-bg .img-box').css({'background':'url(../../images/common/char02.png)'});
	});
	$('.char03, .char03 > a').on('focus mouseenter', function(){
		$('.header-bg .title').show();
		$('.header-bg .txt-box').html('<p>수강 및 이수증 출력을<br>할 수 있어요!</p>');
		$('.header-bg .img-box').css({'background':'url(../../images/common/char03.png)'});
	});
	$('.char04, .char04 > a').on('focus mouseenter', function(){
		$('.header-bg .title').show();
		$('.header-bg .txt-box').html('<p>공지사항 등 여러정보를<br>볼 수 있어요!</p>');
		$('.header-bg .img-box').css({'background':'url(../../images/common/char04.png)'});
	});
	// $('.gnb > li').find('a').on('mouseleave', function(){
	// 	$('.header-bg .txt-box').hide();
	// });
}

function setMGNB(){
	var width = 1023;
	//var mobile = 767;

	//메뉴 좌측에서 우측으로 이동
	$(".menu-all").click(function(){
		if(width >= $(window).outerWidth()){
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				$("#totalMb").removeClass("on");
				$("#wrapper").removeClass("wra_box");
				$(".fix_bg").fadeOut('fast');
			}else{
				$(this).addClass('on');
				$("#totalMb").addClass("on");
				$("#wrapper").addClass("wra_box");
				$('.btnSearch').removeClass('on');
				$('.search_Bg').removeClass('on');
				$('.searchForm').slideUp('fast');
				$(".fix_bg").fadeIn('fast');
			}
			return false;
		}
	});

	//모바일메뉴
	// $('#totalMb > .mGnb > li.on').addClass('open');
	// $('#totalMb > .mGnb > li.open > ul').show();
	// $('#totalMb .mGnb li.has-sub.on').addClass('open');
	// $('#totalMb .mGnb li.has-sub.open > ul').show();
	// $('#totalMb .mGnb > li > a').on('click', function(){
	// 	$("#totalMb .mGnb> li").removeClass('open');
	// 	$(this).parent('li').addClass('open');
	// 	$("#totalMb .mGnb> li > ul").hide();
	// 	$(this).parent('li').children('ul').show();
	// 	$("#totalMb .mGnb> li > .img-box").hide();
	// 	$(this).parent('li').children('.img-box').show();
	// 	return false;
	// });
	// $('#totalMb .mGnb > li > ul').find('> li').each(function(i){
	// 	$(this).css("transition-delay",i*10/100+"s");
	// });

	var $listMoMenu1st = $("#totalMb > .mGnb > li");
    $listMoMenu1st.each(function(index) {
        var $this = $(this);
        var $list = $this.find('> ul > li');
        $list.each(function(i){
            var $el = $(this);
            $el.css("transition-delay",i*10/100+"s");
        });
    });

	var $btnMoMenu1st = $("#totalMb > .mGnb > li > a");
    $btnMoMenu1st.on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $nowList = $this.parent();
        var $activedList = $("#totalMb > .mGnb > li.open");
        $activedList.removeClass("open");
        //$activedList.addClass("action");

        $nowList.addClass("open");
        //$nowList.removeClass("action");
    });
}

function setMenuAll(){
	var width = 1023;
	var target = '#menu-all';

	$('a[href="' + target + '"]').on('click', function(e){
		var $this = $(this);
		var current = e;
		current.preventDefault();

		if(width < $(window).outerWidth()){
			if(!$(this).hasClass('on')){
				$(this).addClass('on');
				$('#menu-all-wrap').addClass('on');
	
				$(target).addClass('on').find('a:last').off().on('keydown', function(e){
					if(!e.shiftKey && 9 == e.keyCode){
						e.preventDefault();
						$(target).addClass('on').find('.close-btn').focus();
						// current.currentTarget.focus();
					}
				});
				$(target).addClass('on').find('.close-btn').off().on('keydown', function(key){
					if (key.keyCode == 13) {
						//e.preventDefault();
						current.currentTarget.focus();
						$('.menu-all').removeClass('on');
						$(target).removeClass('on');
						$('#menu-all-wrap').removeClass('on');
					}
				});
			}else{
				$(this).removeClass('on');
				$(target).removeClass('on');
				$('#menu-all-wrap').removeClass('on');
			}
		}
	});
}

// function setSkipNavigation(){
// 	if(navigator.userLanguage !== "undefined" && navigator.systemLanguage !== "undefined" && navigator.userAgent.match(/trident/i)) {
// 		window.addEventListener("hashchange", function(){
// 			var element = document.getElementById(location.hash.substring(1));
// 			if(element){
// 				if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)){
// 					element.tabIndex = -1;
// 				}
// 				element.focus();
// 			}
// 		}, false);
// 	}
// }

// function setGNB(){
// 	var gnb = $('#gnb');
// 	var level1 = $('li > a', gnb);
// 	var level2 = $('div > a', gnb);
// 	var width = 1250;
// 	var mobile = 767;

// 	level1.on('focus mouseenter', function(){
// 		if(width < $(window).outerWidth()){
// 			gnb.hasClass('on') ? false : gnb.addClass('on');
// 			if(!$(this).hasClass('on')){
// 				level1.removeClass('on');
// 				$(this).addClass('on');
// 			}
// 		}
// 	}).on('click', function(e){
// 		if(width >= $(window).outerWidth()){
// 			e.preventDefault();
// 			e.stopPropagation();
// 			gnb.hasClass('on') ? false : gnb.addClass('on');
// 			if(!$(this).hasClass('on')){
// 				level1.removeClass('on');
// 				$(this).addClass('on');
// 			}else{
// 				mobile >= $(window).outerWidth() ? $(this).removeClass('on') : false;
// 			}
// 		}
// 	});

// 	level2.on('focus mouseenter', function(){
// 		var parent = $(this).parent().prev('a');

// 		gnb.hasClass('on') ? false : gnb.addClass('on');
// 		if(!parent.hasClass('on')){
// 			level1.removeClass('on');
// 			parent.addClass('on');
// 		}
// 	});

// 	$('*').not(level1).not(level2).on('focus click', function(){
// 		gnb.hasClass('on') ? gnb.removeClass('on') : false;
// 		level1.removeClass('on');
// 	});

// 	gnb.on('mouseleave', function(){
// 		if(width < $(window).outerWidth()){
// 			gnb.hasClass('on') ? gnb.removeClass('on') : false;
// 			level1.removeClass('on');
// 		}
// 	});
// }

// function setHeader(){
// 	var header = $('#header');

// 	$('#header > button').on('click', function(){
// 		header.hasClass('on') ? header.removeClass('on') : header.addClass('on');
// 	});
// }

// function setMenuAll(){
// 	var target = '#menu-all';

// 	$('a[href="' + target + '"]').on('click', function(e){
// 		var current = e;
// 		current.preventDefault();

// 		if(!$(this).hasClass('on')){
// 			$(this).addClass('on');

// 			$(target).addClass('on').find('a:last').off().on('keydown', function(e){
// 				if(!e.shiftKey && 9 == e.keyCode){
// 					e.preventDefault();
// 					current.currentTarget.focus();
// 				}
// 			}).end().find('a:first').off().on('keydown', function(e){
// 				if(e.shiftKey && 9 == e.keyCode){
// 					e.preventDefault();
// 					current.currentTarget.focus();
// 				}
// 			});

// 			$(this).on('keydown', function(e){
// 				if($(this).hasClass('on') && e.shiftKey && 9 == e.keyCode){
// 					e.preventDefault();
// 					$(target).find('a:last').get(0).focus();
// 				}
// 			});
// 		}else{
// 			$(this).removeClass('on');
// 			$(target).removeClass('on');
// 		}
// 	});
// }

// function setSearch(){
// 	var mobile = 767;
// 	if(mobile > $(window).outerWidth()){
// 		$("#search .search-input input").attr("placeholder", "관심있는 주제 검색");
// 	} else {
// 		$("#search .search-input input").removeAttr("placeholder");
// 	}
// }

// function tick(){
// 	$('.popular-search-word ul li:first').slideUp( function () { $(this).appendTo($('.popular-search-word ul')).slideDown(); });
// }
// setInterval(function(){ tick () }, 4000);

// $(function(){
// 	$("#search .search-input input").on("focus", function(){
// 		$("#search .search-input").addClass("on");
// 	});
// 	$("#search .search-input input").on("blur", function(){
// 		$("#search .search-input").removeClass("on");
// 	});
// });

// $(function(){
// 	$('.pagination a').on('click', function(){
// 		var text = $(this).text();
        
//         $(this).addClass('on').siblings('a').removeClass('on');
//         $(this).attr('title',text+'페이지 선택됨').siblings('a').removeAttr('title');
//     });
// });

// $(document).ready(function() {
// 	$('select').niceSelect();
// });

// $(function(){
// 	// 셀렉트 커스텀
// 	$('.filter button').on('click', function(){
// 		var width = 767;
// 		var group = $(this).parent().parent().parent();
// 		var text = $(this).find('span').eq(0).text();

// 		if(group.hasClass('type1')) {
// 			if(width < $(window).outerWidth()){
// 				$(this).addClass('on').siblings().removeClass('on');
// 			}else{
// 				if($(this).hasClass('on')){
// 					$(this).data('show') ? $(this).data('show', false).siblings('button').hide() : $(this).data('show', true).siblings('button').show();
// 				}else{
// 					$(this).addClass('on').siblings('button').removeClass('on').data('show', false).hide();
// 				}
// 			}
// 		} else {
// 			$(this).addClass('on').siblings().removeClass('on');
// 		}
		
// 		$(this).attr('title',text+' 선택됨').siblings('button').removeAttr('title');
// 		$(this).parent('.filter').toggleClass('open');
// 	});
// });

// $(document).ready(function(){
// 	var jbOffset = $('#content').offset();

// 	$(window).resize(function(){ 
// 		if (window.innerWidth > 767) {  // 다바이스 크기가 767 이상일 때 
// 			$(window).scroll(function(){
// 				$('#mb-top-bar').removeClass('on');
// 			});	
// 		} else {
// 			$(window).scroll(function(){
// 				if ( $(document).scrollTop() > jbOffset.top ) {
// 					$('#mb-top-bar').addClass('on');
// 				}else {
// 					$('#mb-top-bar').removeClass('on');
// 				}
// 			});	
// 		}
// 	}).resize(); 
// });

// $(function(){
// 	$('.tit-area').css('background','red');
// 	$('address').css('background','red');
// 	$('.login').css('background','red');
// });



// 서브 상단 고정 배경 이미지 랜덤 출력
$(document).ready(function(){ 
    //var numberOfImages=4; 
    //var imageNum = Math.round(Math.random()*(numberOfImages-1))+1;
	var imageNum = Math.floor(Math.random() * 9) + 1;
    var imgPath=('../../images/content/common/bg_location0'+imageNum+'.jpg');

    $('.location').css('background-image', ('url("'+imgPath+'")'));
});




// 서브 좌측 메뉴
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

$(document).ready(function(){
	if (page == 'sub.html') {
		$('.lnb-menu ul li:nth-child(3)').addClass('on');
	}
});








