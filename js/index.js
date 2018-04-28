var testimonialSwiper = new Swiper('.testimonials-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});