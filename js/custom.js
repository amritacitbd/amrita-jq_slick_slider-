$(document).ready(function(){
    $('.banner-slider').slick({
        prevArrow: '<i class="fas fa-chevron-left slick-prev  left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });
    $('.person-slider').slick({
        arrows:false,
        slidesToShow:3,
        centerMode: true,
        centerPadding:'0px',
        autoplay:true,
        asNavFor:'.text-slider',
        dots: true,

    });
   
    $('.text-slider').slick({
        arrows:false,
        autoplay:true,
        asNavFor:'.person-slider',
    });

    $('.image-slider').slick({
        arrows:false,
        slidesToShow:2,
        autoplay:false,
        dots:true,
        
    });

    
});




