jQuery(function($) {
    //owl carousel code start here
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    //stick us code start
        //enabling stickUp on the '.navbar-wrapper' class
        $(document).ready( function() {
            //enabling stickUp on the '.navbar-wrapper' class
           $('.navbar-wrapper').stickUp();
         });


//wow js code start
new WOW().init();

// Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
// animation counter
$('.hours').animationCounter({
        start: 0,
        step:20,
        end: 1500,
        delay: 20,
        txt: "+"
    });
$('.award').animationCounter({
        start: 0,
        step:10,
        end: 500,
        delay: 30,
        txt: "+"
    });
$('.clients').animationCounter({
        start: 0,
        step:40,
        end: 5000,
        delay: 10,
        txt: "+"
    });
    

});