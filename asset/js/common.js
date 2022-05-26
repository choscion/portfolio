$(function(){
    

    ////////////// matchMedia
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function (){ // 767px 이하
        $(window).scroll(function(){
            crrt = $(this).scrollTop();
            trgt = $('.sc-visual').offset().top;
            blck1 = $('.sc-work').offset().top-90;
            wht1 = $('.sc-strength').offset().top-90;
            blck2 = $('.sc-power').offset().top-90;
            wht2 = $('footer').offset().top-90;
    
    
            if (crrt > trgt) {
                $('.active-header').addClass('show');
            } else {
                $('.active-header').removeClass('show');
            }
    
            if (crrt > blck1 && crrt < wht1 || crrt > blck2 && crrt < wht2) {
                $('.active-header').addClass('black');
            } else{
                $('.active-header').removeClass('black');
            }
        })
        $(window).trigger('scroll');
        
      }, // 767px 이하 끝

      "all": function () { // 모든 구간

        $(window).scroll(function(){
            crrt = $(this).scrollTop();
            trgt = $('.sc-visual').offset().top;
            blck1 = $('.sc-work').offset().top-90;
            wht1 = $('.sc-strength').offset().top-90;
            blck2 = $('.sc-power').offset().top-90;
            wht2 = $('footer').offset().top-90;
    
            if (crrt > 0) {
                $('.top-header').addClass('hide');
                $('.etc-msg').addClass('hide');
            } else {
                $('.top-header').removeClass('hide');
                $('.etc-msg').removeClass('hide');
            }
    
            if (crrt > trgt+200) {
                $('.active-header').addClass('show');
            } else {
                $('.active-header').removeClass('show');
            }
    
            if (crrt > blck1 && crrt < wht1 || crrt > blck2 && crrt < wht2) {
                $('.active-header').addClass('black');
            } else{
                $('.active-header').removeClass('black');
            }
        })
        $(window).trigger('scroll');
    
    
        //메뉴 hover시
        $('.menu-item a').mouseover(function(){
            img =$(this).data('img');
            $(img).addClass('on').siblings().removeClass('on');
        })
    
        
        menuMo = gsap.timeline({
            defaults:{
                ease:'ease-in-out'
            }
        })
        menuMo.addLabel('m1')
        .to('.menu-open',{'z-index':1,opacity:0},'m1')
        .to('.menu-open .txt',.5,{rotation:-40,y:-100+'%',opacity:0},'m1')
        .to('.ham',{x:100,stagger:.1},'m1')
        .to('.menu-close',{'z-index':2,opacity:1,visibility:'visible'},'m1')
        .to('.menu-close .txt',{rotation:0,y:0,opacity:1},'m1')
        .to('.menu-item .underline, .sns-item .underline',.8,{rotation:0,y:0,opacity:1})
        menuMo.pause();
    
        $('.menu-open').click(function(e){
            e.preventDefault();
            menuMo.play();
            $(this).siblings('.menu-wrap').addClass('on');
            $('body').addClass('noscroll');
        })

        $('.menu-close').click(function(e){
            e.preventDefault();
            menuMo.reverse();
            $(this).siblings('.menu-wrap').removeClass('on');
            $('body').removeClass('noscroll');
        })
       
        ////////////
        $('.btn-work').click(function(e){
            e.preventDefault();
            var pos = $('.sc-work').offset();
            $('body').stop().animate({scrollTop:pos.top},500);
        })
        
        //////
        MotionFooter = gsap.timeline({
            scrollTrigger:{
              trigger:'footer',
              start:'200% bottom', //[트리거기준,윈도우기준]
              end:'290% bottom',
            //   markers:true,
                scrub:1,
              },
          })
          MotionFooter.to('.ft-inner',.7,{transform:'translate(0, 0)'})
    
        $('.btn-top').click(function(e){
            e.preventDefault();
    
            gsap.to('html,body',{
                scrollTop: 'body',
                duration: .3,
            })
        })
    
        $('.link-goto').click(function(e){
            e.preventDefault();
            trgt = $(this).data('target');
            trgtOffset = $(trgt).offset().top;
    
            menuMo.reverse();
            $('.menu-wrap').removeClass('on');
            $('body').removeClass('noscroll');
            
            gsap.to('html,body',{
                scrollTop: trgtOffset,
                duration: .3,
            })
        })

        ScrollTrigger.refresh();
      }
    })
    
}) //Do not touch!!!