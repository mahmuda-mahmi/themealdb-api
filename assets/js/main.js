$(function () {
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 25) {
            $('.nav').addClass('bg-white');
        } else {
            $('.nav').removeClass('bg-white');
        }
    });
})

$('.responsive').slick({
    dots: false,
    infinite: true,
    prevArrow:'<button type="button" class="slick-prev text-2xl hover:bg-[#12372A] border border-[#12372A] rounded-full h-10 w-10 leading-10 bg-white hover:text-white"><i class="fa-sharp fa-light fa-caret-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next text-2xl hover:bg-[#12372A] border border-[#12372A] rounded-full h-10 w-10 leading-10 bg-white hover:text-white"><i class="fa-sharp fa-light fa-caret-right"></i></button>',
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });