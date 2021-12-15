'use strict'

import bootstrap from './vendors/bootstrap.min.js'

// Optional. When using fullPage extensions
//import scrollHorizontally from './fullpage.scrollHorizontally.min';

// Optional. When using scrollOverflow:true
//import IScroll from 'fullpage.js/vendors/scrolloverflow';

// Importing fullpage.js
import fullpage from 'fullpage.js';
import { waterEffect } from 'fullpage.js'

// When using fullPage extensions replace the previous import
// of fullpage.js for this file
//import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// Initializing it
var fullPageInstance = new fullpage('#fullpage', {
	licenseKey: 'D981602C-940F4E9F-B5104540-EB7B7079',
	scrollHorizontally: true,
	
    navigation: true,
	slidesNavigation: true,
	menu: '#navList',
	// anchors: ['fp-slide_1', 'fp-slide_2', 'fp-slide_3', 'fp-slide_4'],

	anchors: ['company', 'investors', 'partners', 'calculator'],

	// navigationTooltips: ['01 - О КОМПАНИИ', 'secondSlide', 'abracadabra', 'abracadabra4'],
	// showActiveTooltip: true,

	afterLoad: function(origin, destination, direction){
		var leavingSection = this;

		let pageNum = document.querySelector('.footer__page-num span:first-child');
		let pageTitle = document.querySelector('.footer__page-num span:last-child');
		console.log(pageNum.innerHTML)

		let sec = fullpage_api.getActiveSection();

		console.log('sec', leavingSection)
		pageNum.innerHTML = '0' + String(destination.index + 1)

		destination.anchor === 'company' ?
		pageTitle.innerHTML = 'О Компании' :
		destination.anchor === 'investors' ?
		pageTitle.innerHTML = 'Инвесторам' :
		destination.anchor === 'partners' ?
		pageTitle.innerHTML = 'Партнерам' :
		destination.anchor === 'calculator' ?
		pageTitle.innerHTML = 'Калькулятор' : null
	}
});

//let sec = fullpage_api.getActiveSection();

//console.log(sec)

//import fullpage from 'fullpage.js';

/*new fullpage('#fullpage', {
	//options here
	licenseKey: 'D981602C-940F4E9F-B5104540-EB7B7079',
	autoScrolling:true,
});

console.log(fullpage)


/*let myFullpage = new fullpage('#fullpage', {
	licenseKey: 'D981602C-940F4E9F-B5104540-EB7B7079',
	//Навигация
	/*menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',*/

	//Скроллинг
	/*css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Доступ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Дизайн
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Настроить селекторы
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//события
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});*/


