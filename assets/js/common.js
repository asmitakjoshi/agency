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