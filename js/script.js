$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".navigation").addClass("fixd-manu")
    } else {
      $(".navigation").removeClass("fixd-manu")
    }
  
  })