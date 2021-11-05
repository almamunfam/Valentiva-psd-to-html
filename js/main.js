$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
     });
     $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        if( scroll>100 ){
            $(".navbar").addClass ("mamun");
        }
        else{
            $(".navbar").removeClass ("mamun");
        }
            });
     
$('.slidertesti').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    Infinity:true,
    autoplaySpeed: 1000,
    prevArrow:'<i class="fas fa-chevron-left prevArrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right nextArrow"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
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
 });