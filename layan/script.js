 
 const swiper = new Swiper('.swiper', {
   
   slidesPerView: 2,
   spaceBetween: 35,
  
   //  pagination
   pagination: {
     el: '.swiper-pagination',
     clickable:true,
   },

   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 35,
     },
     768: {
       slidesPerView: 3.5,
       spaceBetween: 35,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 40,
     },
   },

   
 });
  