var A = false;


$('.parallax').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  autoplay: true,
  autoplaySpeed: 4000,
});


$(window).scroll(function() {
    if ( $(this).scrollTop() > 950 && !A ) {
          console.log("yes")
          let count1 = new CountUp("count1",0,150)
          count1.start();
  
          let count2 = new CountUp("count2",0,50);
          count2.start();

          let count3 = new CountUp("count3",0,350,);
          count3.start();
      
          let count4 = new CountUp("count4",0,50,);
          count4.start();
          A = true
    }
});
        
$('.postconteiner').slick({
  slidesToShow: 3,
  arrows:false,
  responsive: [
    {breakpoint: 1024,settings: {slidesToShow:1,slidesToScroll:1,} } ]
    
});
$('.commentconteiner').slick({
  slidesToShow: 3,
  arrows:false,
  responsive: [
    {breakpoint: 1024,settings: {slidesToShow:1,slidesToScroll:1,} } ]
    
});

new WOW().init();

