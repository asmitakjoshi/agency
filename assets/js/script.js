// common css start

(function($) {
    "use strict";
    $(document).ready(function () {
        $('.counts').counterUp({
            delay: 10,
            time: 1000
        });
    });
})(jQuery);

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
        $('.top-slide').fadeIn();
    } else {
        $('.top-slide').fadeOut();
    }
});
$('.top-slide').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

new WOW().init();

$('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
});

$(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll >= 60) {
         $(".navbar").addClass("darkHeader");
     } else {
         $(".navbar").removeClass("darkHeader");
     }
 });

// common css end

 $('.slider').owlCarousel({
    items:1,
    loop:true,
    autoplay: true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots: false,
    margin: 0,
  
})

$('.projects').owlCarousel({
    loop:true,
    // autoplay: true,
    nav:false,
    dots: false,
    // margin: 20,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin: 15
        },
        1000:{
            items:3,
            margin: 30
        }
    }
})
$('.testimonials').owlCarousel({
    items:1,
    loop:true,
    // autoplay: true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots: false,
    margin: 0,
  
})
$('.blog').owlCarousel({
    loop:true,
    // autoplay: true,
    nav:false,
    dots: false,
    margin: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin: 15
        },
        1000:{
            items:3
        }
    }
})



