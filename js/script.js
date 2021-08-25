$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".navigation").addClass("fixed-manu")
    } else {
      $(".navigation").removeClass("fixed-manu")
    }
  
  })
// //////////////////
$('.social-logo-slider').slick({
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
        slidesToShow: 5,
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});
  // /////////////////
  $('.tstimonial-left-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay:false,
    prevArrow:'<i class="fas fa-arrow-left prev-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-right next-arrow"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.tstimonial-right-slider',
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
  $('.tstimonial-right-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay:true,
    fade:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.tstimonial-left-slider',
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
