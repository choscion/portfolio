$(function(){
    $(window).scroll(function(){
        crrt = $(this).scrollTop();
        trgt = $('.sc-visual').offset().top;
        blck1 = $('.sc-work').offset().top-90;
        wht1 = $('.sc-reel').offset().top-90;
        blck2 = $('.sc-news').offset().top-90;
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
    .to('.menu-close',{'z-index':2,opacity:1},'m1')
    .to('.menu-close .txt',{rotation:0,y:0,opacity:1},'m1')
    .to('.menu-item .underline, .sns-item .underline',.8,{rotation:0,y:0,opacity:1})
    // .to('.sns-item .underline',.5,{rotation:0,y:0,opacity:1})
    // .to('.cls',{opacity:1})
    // .to('.page-wrapper',{transform:'translate(0px, 468.5px) rotate(7deg) scale(1.3, 1.3)'})
    menuMo.pause();

    $('.menu-open').click(function(e){
        e.preventDefault();
        menuMo.play();
        $(this).siblings('.menu-wrap').addClass('on');
        $('.page-wrapper').addClass('rotate');
        $('body').addClass('noscroll');
        // menuMo.reverse();

        // $(this).toggleClass('on');
        // $(this).siblings('.menu-wrap').toggleClass('on');
    })
    $('.menu-close').click(function(e){
        e.preventDefault();
        menuMo.reverse();
        $(this).siblings('.menu-wrap').removeClass('on');
        $('.page-wrapper').removeClass('rotate');
        $('body').removeClass('noscroll');
        // menuMo.reverse();

        // $(this).toggleClass('on');
        // $(this).siblings('.menu-wrap').toggleClass('on');
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
          start:'300% bottom', //[트리거기준,윈도우기준]
          end:'390% bottom',
        //   markers:true,
            scrub:1,
          },
      })
      MotionFooter.to('.ft-inner',.7,{transform:'translate(0, 0)'})

      scrollMoInfo = gsap.timeline({
        scrollTrigger:{
          trigger:'.sc-info',
          start:'-10% top', //[트리거기준,윈도우기준]
          // end:'75% top',
          // markers:true,
          },
      })
      scrollMoInfo.to('.bg-title .char',.3,{y:0,opacity:1,stagger:.1})



}) //Do not touch!!!