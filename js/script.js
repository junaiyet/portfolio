$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".navigation").addClass("fixd-manu")
    } else {
      $(".navigation").removeClass("fixd-manu")
    }
  
  })

  // /////////////////
  $('.tstimonial-left-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow:'<i class="fas fa-arrow-left left-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-right right-arrow"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
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
    prevArrow:'<i class="fas fa-arrow-left left-arrow"></i>',
    nextArrow:'<i class="fas fa-arrow-right right-arrow"></i>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });