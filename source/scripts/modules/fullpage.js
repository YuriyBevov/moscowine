import fullpage from 'fullpage.js';

let isInited = false;

let body = document.querySelector('body');
body.classList.add('fullpage-destroyed');

function initFullPage() {
	isInited = true;
	new fullpage('#fullpage', {
		licenseKey: 'D981602C-940F4E9F-B5104540-EB7B7079',
	
		paddingTop: '150px',
		paddingBottom: '150px',

		fitToSection: true,
		verticalCentered: true,
		navigation: true,
		slidesNavigation: true,
	
		menu: '#navList',
		anchors: ['company', 'investors', 'partners', 'calculator'],
	
		afterLoad: function(origin, destination, direction){
			// var leavingSection = this;
			let pageNum = document.querySelector('.footer__page-num span:first-child');
			let pageTitle = document.querySelector('.footer__page-num span:last-child');
			let scrollUpBtn = document.getElementById('scrollUpBtn');
	
			let stopAnimate = document.querySelector('.fade-in-animation');
			
			pageNum.innerHTML = '0' + String(destination.index + 1)
	
			if(destination.anchor === 'company') {
				scrollUpBtn.classList.contains('active') ?
				scrollUpBtn.classList.remove('active') : null
				pageTitle.innerHTML = 'О Компании'
			}
	
			if(destination.anchor !== 'company') {
				stopAnimate ?
				stopAnimate.classList.remove('fade-in-animation') : null;
			}
	
			if(destination.anchor === 'investors') {
				!scrollUpBtn.classList.contains('active') ?
				scrollUpBtn.classList.add('active') : null
	
				pageTitle.innerHTML = 'О Компании'
				scrollUpBtn.setAttribute('href', "#company")
			}
	
			if(destination.anchor === 'partners') {
				!scrollUpBtn.classList.contains('active') ?
				scrollUpBtn.classList.add('active') : null
	
				pageTitle.innerHTML = 'Партнерам'
				scrollUpBtn.setAttribute('href', "#investors")
			}
	
			if(destination.anchor === 'calculator') {
				!scrollUpBtn.classList.contains('active') ?
				scrollUpBtn.classList.add('active') : null
	
				pageTitle.innerHTML = 'Калькулятор'
				scrollUpBtn.setAttribute('href', "#partners")
			}
		},
	
		afterResize: function(width, height){
			var pluginContainer = this;
			console.log("Завершено изменение размера разделов", width, height);
			
			if(width < 960 && isInited || height < 600 && isInited) {
				fullpage_api.destroy('all');
				body.classList.add('fullpage-destroyed');
				isInited = false;
			}
		}
	});
}

function init() {
	if(window.innerWidth > 960 && !isInited){
		initFullPage();
		body.classList.contains('fullpage-destroyed') ?
		body.classList.remove('fullpage-destroyed') : null
	} 
}

window.addEventListener('resize', () => {
	init();
});

init();

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