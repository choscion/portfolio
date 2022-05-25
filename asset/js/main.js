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

    $('a').mouseover(function(){
      gsap.to('.mouse-scroll',{
        // visibility: 'hidden',
        opacity: 0,
        scale:1.2,
      })
    })
    $('a').mouseleave(function(){
      gsap.to('.mouse-scroll',{
        // visibility: 'hidden',
        opacity: 1,
        scale:1,
      })
    })
  // 
  // $('.sc-visual').mouseleave(function(e){
  //   e.preventDefault();
  //   gsap.to('.mouse-scroll',.5,{
  //     visibility:'hidden',
  //     opacity:0,
  //   })
  // })


  // $('.sc-work .imagebox').mousemove(function(e){
  //   e.preventDefault();
  //   gsap.to('.mouse-view',{
  //     visibility: 'visible',
  //     opacity: 1,
  //     width:'6vw',height:'6vw',
  //     x:e.pageX + 40,
  //     y:e.pageY - 1820,
  //   })
  // })
  // $('.sc-work .imagebox').mouseleave(function(e){
  //   e.preventDefault();
  //   gsap.to('.mouse-view',{
  //     visibility:'hidden',
  //     opacity:0,
  //     width:0,height:0,
  //   })
  // })
  // $('.sc-reel').mousemove(function(e){
  //   e.preventDefault();
  //   gsap.to('.mouse-play',{
  //     visibility: 'visible',
  //     opacity: 1,
  //     width:'6vw',height:'6vw',
  //     x:e.pageX + 40,
  //     y:e.pageY - 4300,
  //   })
  // })

    scrollMoVisual = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-visual',
        start:'top top',
        end:'center top',
        // markers:true,
        scrub:1,
      }
    })
    scrollMoVisual.addLabel('MoVisual')
    scrollMoVisual.to('.bg-area .vod-bg',{y:100,opacity:0.6},'MoVisual')
    // .to('.bg-area .bk-bg',{opacity:0.6},'MoVisual')

    // $('.imgbox-item').hover(function(e){
    //   e.preventDefault();
    //   if ($(this).hasClass('hide')) {
    //     $(this).removeClass('hide');
    //     $(this).stop('hide');
    //     $(this).addClass('show');
    //   } else {
    //     $(this).addClass('show');
    //   }
      
    // },function(){
    //     $(this).removeClass('show');
    //     $(this).addClass('hide');
    //     return ;
    // })

    $('.imgbox-item').hover(function(){
      $(this).removeClass('hide');
      $(this).addClass('show');
    },function(){
      $(this).removeClass('show');
      $(this).addClass('hide');
      return;
    })

    //sc-reel bg scroll
    scrollMoReel = gsap.timeline({
        scrollTrigger:{
          trigger:'.sc-reel',
          start:'top top', //[트리거기준,윈도우기준]
          end:'+=300%',
        //   markers:true,
          scrub:1,
          pin:true,
          },
    })
    scrollMoReel.addLabel('MoReel');
    scrollMoReel.from('.sc-reel video',{transform:'scale(0.3)'},'MoReel')
    .to('.sc-reel .title span',{x:0},'MoReel')

    //sc-news img scroll
    scrollMoNews = gsap.timeline({
        scrollTrigger:{
          trigger:'.sc-news',
          start:'-30% top', //[트리거기준,윈도우기준]
          end:'80% top',
        //   markers:true,
          scrub:1,
          },
    })
    scrollMoNews.addLabel('MoNews');
    scrollMoNews.to('.sc-news .imgbox02',{top: '6vw',left: '13vw'},'MoNews')
    .to('.sc-news .imgbox03',{top: '2vw',right: '25vw'},'MoNews')
    .to('.sc-news .imgbox04',{top: '38vw',left: '5vw'},'MoNews')
    .to('.sc-news .imgbox05',{right: '7vw'},'MoNews')
    // .to('.content-area',{y:'-7vw'},'MoNews')

    ///////헤더, visual 첫 스크롤
    firstMoHd = gsap.timeline({
      scrollTrigger:{
          trigger:'main',
          start:'top 5%', //[트리거기준,윈도우기준]
          // markers:true,
      }
    })
    firstMoHd.addLabel('MoHd');
    firstMoHd.to('.top-logo',.8,{y:0,rotation:0,opacity:1},'MoHd')
    .to('.top-nav .nav-item',.8,{y:0,rotation:0,opacity:1,stagger:.05},'MoHd')
    .to('.sc-visual .intro-msg .mask-txt, .sc-visual .title .mask-txt',.8,{y:0,rotation:0,opacity:1,stagger:.2},'MoHd')

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
    
    ///////work 첫 스크롤
    firstMoNews = gsap.timeline({
      scrollTrigger:{
          trigger:'.sc-news .content-area',
          start:'top center', //[트리거기준,윈도우기준]
          // markers:true,
      }
    })
    firstMoNews.addLabel('MoNews');
    firstMoNews.to('.sc-news .mask-txt',.8,{y:0,rotation:0,opacity:1},'MoNews')

    //ddddddddd parallex scroll 효과
    $('.imgbox-item').each(function(index,item){
        yVal = $(this).data('y');
        scrubVal = $(this).data('scrub');

        gsap.to($(this),{
          scrollTrigger:{
            trigger:$(this),
            start:'top bottom', //[트리거기준,윈도우기준]
            end:'bottom top',
            markers:true,
            scrub:scrubVal,
            },
            yPercent:yVal
        })
    })


    ////menu click

    $('.nav-item a').click(function(e){
      e.preventDefault();

      trgt = $(this).data('target');
      trgtOffset = $(trgt).offset().top;

      gsap.to('html,body',{
        scrollTop:trgtOffset,
        duration: .5,
      })

    })

    
})