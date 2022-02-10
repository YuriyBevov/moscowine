'use strict'

let calcSection = document.querySelector('.calc .container');
let calcSectionBg = document.querySelector('.calc__bg');

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting) {
            /* objectList.scrollTo({
                top: 0,
                behavior: 'smooth'
            }) */
            console.log('in viewport')

            !calcSectionBg.classList.contains('js-intersected') ?
            calcSectionBg.classList.add('js-intersected') : null;
        }
    });
});

observer.observe(calcSection);

import modernizrWebp from "./modules/modernizrWebp.js";
import bootstrap from './vendors/bootstrap.min.js'
import phoneMask from './modules/phoneMask.js';
import fullpage from './modules/fullpage.js';
import swiper from './modules/swiper.js';

import "./vue/main.js";


