$(function(){
    $(window).mousemove(function(e){
      e.preventDefault();
      gsap.to('.mouse-scroll',{
        // visibility: 'visible',
        // opacity: 1,
        x:e.clientX,
        y:e.clientY,
        duration:.2,
        // ease:"none",
        })
    })

    $('a, .intro-msg, .main-msg,.sc-work .imgbox04, .sc-new .title, .power-msg, .story-msg').mouseover(function(){
      gsap.to('.mouse-scroll',{
        opacity: 0,
        scale:1.2,
      })
    })
    $('a, .intro-msg, .main-msg,.sc-work .imgbox04, .sc-new .title, .power-msg, .story-msg').mouseleave(function(){
      gsap.to('.mouse-scroll',{
        opacity: 1,
        scale:1,
      })
    })

    ///////헤더, visual 첫 스크롤
    firstMoHd = gsap.timeline({
      scrollTrigger:{
          trigger:'main',
          start:'top 5%', //[트리거기준,윈도우기준]
          // markers:true,
      }
    })
    firstMoHd.addLabel('MoHd');
    firstMoHd.to('.logo',.8,{y:0,rotation:0,opacity:1},'MoHd')
    .to('.top-nav .nav-item',.8,{y:0,rotation:0,opacity:1,stagger:.05},'MoHd')
    .to('.sc-visual .intro-msg .mask-txt, .sc-visual .title .mask-txt',.8,{y:0,rotation:0,opacity:1,stagger:.2},'MoHd')

    ////menu click
    $('.nav-item a, .menu-item a, .sub-menu-item a, .link-move').click(function(e){
      e.preventDefault();

      trgt = $(this).data('target');
      trgtOffset = $(trgt).offset().top;

      menuMo.reverse();
      $('.menu-wrap').removeClass('on');
      $('body').removeClass('noscroll');
        
      gsap.to('html,body',{
        scrollTop:trgtOffset,
        duration: .5,
      })

    })


    ////////////////////////   sc-visual   ////////////////////////
    $('.particle, .img-bg').each(function (index,bg) {
      scrubVal = $(this).data('scrub');
      rotVal = $(this).data('rot');
      xVal = $(this).data('x');
      yVal = $(this).data('y');
      scaleVal = $(this).data('scale');
      blurVal = $(this).data('blur');
      opacityVal = $(this).data('opacity');

      scrollMoVisual = gsap.timeline({
        scrollTrigger:{
          trigger:'.sc-visual',
          start:'top top',
          end:'bottom top',
          // markers:true,
          scrub:scrubVal,
        }
      })
      scrollMoVisual.addLabel('MoVisual')
      scrollMoVisual.to('.bg-area .img-bg',{opacity:0.6},'MoVisual')
      scrollMoVisual.to('.bg-area .img-bg .bg',{y:-100},'MoVisual')
      scrollMoVisual.to('.bg-area .particle-01',{yPercent:yVal, rotation: rotVal},'MoVisual')
      scrollMoVisual.to('.bg-area .particle-02',{xPercent:xVal},'MoVisual')
      scrollMoVisual.to('.bg-area .particle-03',{scaleX:scaleVal, scaleY:scaleVal, 'filter':blurVal},'MoVisual')
      // scrollMoVisual.to('.bg-area .particle-04',{opacity:opacityVal})
      })


    ////////////////////////   sc-work   ////////////////////////

    ///////work 첫 스크롤
    firstMoWork = gsap.timeline({
      scrollTrigger:{
          trigger:'.sc-work',
          start:'top center', //[트리거기준,윈도우기준]
          // markers:true,
      }
    })
    firstMoWork.addLabel('MoWork');
    firstMoWork.to('.sc-work .mask-txt',.8,{y:0,rotation:0,opacity:1},'MoWork')

    ///// work parallex scroll 효과
    $('.imgbox-item').each(function(index,item){
      yVal = $(this).data('y');
      scrubVal = $(this).data('scrub');

      gsap.to($(this),{
        scrollTrigger:{
          trigger:$(this),
          start:'top bottom', //[트리거기준,윈도우기준]
          end:'bottom top',
          // markers:true,
          scrub:scrubVal,
          },
          yPercent:yVal
      })
    })

    ////////////////////////   sc-strength   ////////////////////////
    //sc-strength bg scroll
    scrollMoStrength = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-strength',
        start:'top top', //[트리거기준,윈도우기준]
        end:'+=300%',
      //   markers:true,
        scrub:1,
        pin:true,
        },
    })
    scrollMoStrength.addLabel('MoStrength');
    scrollMoStrength.from('.sc-strength video',{transform:'scale(0.3)'},'MoStrength')
    .to('.sc-strength .title span',{x:0},'MoStrength')

    ////////////////////////   sc-power   ////////////////////////

    ///////power 첫 스크롤
    firstMoPower = gsap.timeline({
      scrollTrigger:{
          trigger:'.sc-power .content-area',
          start:'top center', //[트리거기준,윈도우기준]
          // markers:true,
      }
    })
    firstMoPower.addLabel('MoPower');
    firstMoPower.to('.sc-power .mask-txt',.8,{y:0,rotation:0,opacity:1},'MoPower')
    
    //sc-power img scroll
    scrollMoPower = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-power',
        start:'-30% top', //[트리거기준,윈도우기준]
        end:'80% top',
      //   markers:true,
        scrub:1,
        },
    })
    scrollMoPower.addLabel('MoPower');
    scrollMoPower.to('.sc-power .imgbox02',{top: '6vw',left: '13vw'},'MoPower')
    .to('.sc-power .imgbox03',{top: '2vw',right: '24vw'},'MoPower')
    .to('.sc-power .imgbox04',{top: '38vw',left: '5vw'},'MoPower')
    .to('.sc-power .imgbox05',{right: '7vw'},'MoPower')


})