$('.owl-one').owlCarousel({
    loop:true,
   
    nav:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    },
    dots:false,
    autoplay : 1000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 1000,
    singleItem : true,
    autoHeight : true
    
})
