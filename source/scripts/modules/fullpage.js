

import '../vendors/scrolloverflow.min.js';

import fullpage from 'fullpage.js';

let isInited = false;

let body = document.querySelector('body');
body.classList.add('fullpage-destroyed');

function initFullPage() {
	isInited = true;
	let fp = new fullpage('#fullpage', {
		licenseKey: 'D981602C-940F4E9F-B5104540-EB7B7079',
	
		paddingTop: '150px',
		paddingBottom: '150px',

		fitToSection: true,
		verticalCentered: true,
		navigation: true,
		slidesNavigation: true,
	
		menu: '#navList',
		anchors: ['company', 'investors', 'partners', 'calculator', 'news'],
		scrollOverflow: true,
	
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

				console.log(fp)
			}
		}
	});
}

// блоки, которые должны быть одинаковыми по высоте, 
// чтобы фон подстраивался зеркально
let investors = document.querySelector('.investors');
let partners = document.querySelector('.partners');

// блоки, которые должны быть одинаковыми по высоте, 
// чтобы фон подстраивался зеркально
let calc = document.querySelector('.calc');
let news = document.querySelector('.news');

function setEqualHeight(section_1, section_2) {
    if(section_1.offsetHeight !== section_2.offsetHeight) {
       section_1.offsetHeight > section_2.offsetHeight ?
       section_2.style.height = section_1.offsetHeight + 'px':
       section_1.offsetHeight < section_2.offsetHeight ?
       section_1.style.height = section_2.offsetHeight + 'px' : null;
    }
};

function init() {
	if(window.innerWidth > 960 && window.innerHeight > 875 && !isInited){
		isInited = true;
		initFullPage();
		body.classList.contains('fullpage-destroyed') ?
		body.classList.remove('fullpage-destroyed') : null;

		setTimeout(() => {
			console.log('height2')
			setEqualHeight(investors, partners);
			//setEqualHeight(calc, news);
		}, 100);
	} //else {
		/*setTimeout(() => {
			console.log('height3')
			setEqualHeight(investors, partners);
			setEqualHeight(calc, news);
		}, 100);*/
	//}

	setTimeout(() => {
		console.log('height1')
		setEqualHeight(investors, partners);
    	//setEqualHeight(calc, news);
	}, 100);
}

window.addEventListener('resize', () => {
	init();
});

init();