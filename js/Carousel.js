$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        margin: 80,
        responsiveClass: true,
        responsive:{

            0:{
    
                items:1
    
            },
    
            600:{
    
                items:1
    
            },
    
            1000:{
    
                items:3,
    
                loop:true
    
            }
    
        }
    });
});