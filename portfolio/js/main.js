//로딩 애니
$(function(){
    $(window).on("load",function(){
        $(".load").fadeOut(4000);    
    });  
});


//메인페이지 캔버스
$(function(){
    "use strict";

    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,

      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1400;

    // Thanks @jackrugile for the performance tip! https://codepen.io/jackrugile/pen/BjBGoM
    // Cache gradient
    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
    var half = canvas2.width/2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#fff');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x,y) {
      var max = Math.max(x,y),
          diameter = Math.round(Math.sqrt(max*max + max*max));
      return diameter/2;
    }

    var Star = function() {

      this.orbitRadius = random(maxOrbit(w,h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 1000000;
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    }

    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
    }

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
        ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      };  

      window.requestAnimationFrame(animation);
    }

    animation();
});


//스크롤 네비
/*$(function(){
    (function($){
      $(window).on('load',(function(){
        $("#menu a,a[rel='m_PageScroll2id']").mPageScroll2id({
          highlightSelector:"#menu a"
        });
          $(".gnb a, a[rel='m_PageScroll2id']").mPageScroll2id({
          highlightSelector:".gnb a"
        });
      }));
    })(jQuery);
});*/


//스크롤 메뉴 onclass
$(function(){
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
       } else if(t >= ht*6 && t < ht*7) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(6).addClass("on"); 
       } else if(t >= ht*7 && t < ht*8) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(7).addClass("on"); 
       } else if(t >= ht*8 && t < ht*9) {
          $("#menu li").removeClass("on");
          $("#menu li").eq(8).addClass("on"); 
       } 
        /*var ws = $(window).scrollTop();
        var section0Offset = $('#page0').offset();
        var section1Offset = $('#page1').offset();
        var section2Offset = $('#page2').offset();
        var section3Offset = $('#page3').offset();
        var section4Offset = $('#page4').offset();
        var section5Offset = $('#page5').offset();
        var section6Offset = $('#page6').offset();
        var section7Offset = $('#page7').offset();
        var section8Offset = $('#page8').offset();
        if (ws > section0Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(0).addClass("on"); 
        } 
        if (ws > section1Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(1).addClass("on"); 
        } 
        if (ws > section2Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(2).addClass("on"); 
        } 
        if (ws > section3Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(3).addClass("on"); 
        } 
        if (ws > section4Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(4).addClass("on"); 
        } 
        if (ws > section5Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(5).addClass("on"); 
        } 
        if (ws > section6Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(6).addClass("on"); 
        } 
        if (ws > section7Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(7).addClass("on"); 
        } 
        if (ws > section8Offset.top) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(8).addClass("on"); 
        } */
    });
});


//메인페이지 텍스트 애니
$(function(){
    var $hauntedText = $('[data-haunted-text]');
    var maxDuration = 3000;
    var maxDelay = 2000;
    var minDuration = maxDuration - maxDelay;

    $hauntedText.blast({
      delimiter: 'character',
    });

    setTimeout(function() {
      $hauntedText.find('.blast').each(function(i, el) {
        var $el = $(el);

        var duration = getRandomValue(minDuration, maxDuration);
        var delay = maxDuration - duration;
        var blur = getRandomValue(2, 10);

        // From
        $el.velocity({
          opacity: 0,
          blur: blur,
        }, {
          duration: 0,
        });

        // To
        $el.velocity({
          opacity: 1,
          blur: 0,
        }, {
          duration: duration,
          delay: delay,
          ease: [250, 0],
        });
      });

      $hauntedText.css({visibility: 'visible'});
    }, 500);

    var getRandomValue = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});


//스킬바 애니
$(function() {
    function skb_ani() {
        function animated_contents() {
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');

                $this.css({'width' : skills + '%'});

            });
        }
        if(jQuery().appear) {
            $('.zt-skill-bar').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    }
    //스크롤시 시작
    $(window).scroll(function() {
        var skb = 800;
        var scroll = getCurrentScroll();
        if ( scroll >= skb ) {
            skb_ani();
        }
    });
    function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});