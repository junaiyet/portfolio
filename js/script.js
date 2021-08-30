



$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navigation").addClass("fixed-manu")
    } else {
      $(".navigation").removeClass("fixed-manu")
    }
    // if($(window).scrollTop() > 1000){
    //   $(".backtotop").fadeIn()
    // }else{
    //   $(".backtotop").fadeOut()
    // }
  
  })
  
  // $(".backtotop").click(function(){
  //   $("html,body").animate({
  //     scrollTop:0,
  //   })
    
  // })
  
// //////////////////
$('.brand-logo-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay:true,
  fade:false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,

      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  
  ]
});
  // /////////////////
  $('.testimonial-left-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:false,
    prevArrow:'<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-right next-arrow"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-right-slider',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          autoplay:false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay:true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
  $('.testimonial-right-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay:false,
    fade:true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-left-slider',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
  setTimeout(function(){
    $(".preloder").fadeOut()
},3000);




// //////////////

AOS.init();


