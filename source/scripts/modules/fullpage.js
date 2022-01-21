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
		anchors: ['company', 'investors', 'partners', 'calculator', 'news'],
	
		afterLoad: function(origin, destination, direction){
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

			if(destination.anchor === 'news') {
				!scrollUpBtn.classList.contains('active') ?
				scrollUpBtn.classList.add('active') : null
	
				pageTitle.innerHTML = 'Новости'
				scrollUpBtn.setAttribute('href', "#calculator")
			}
		},
	
		afterResize: function(width, height){
			if(width < 960 && isInited || height < 875 && isInited) {
				fullpage_api.destroy('all');
				body.classList.add('fullpage-destroyed');
				isInited = false;
			}
		}
	});
}

function init() {
	if(window.innerWidth > 960 && window.innerHeight > 875 && !isInited){
		isInited = true;
		initFullPage();
		body.classList.contains('fullpage-destroyed') ?
		body.classList.remove('fullpage-destroyed') : null;
	} 
}

window.addEventListener('resize', () => {
	init();
});

init();