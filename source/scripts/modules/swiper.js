import Swiper, { Navigation, Pagination } from 'swiper';

let newsSwiper = document.querySelector('.news__slider');

newsSwiper ?
new Swiper(newsSwiper, {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
        nextEl: ".news-slider-button-next",
        prevEl: ".news-slider-button-prev",
    },

    breakpoints: {
        420: {
          slidesPerView: 'auto',
          spaceBetween: 30
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
}) : null 