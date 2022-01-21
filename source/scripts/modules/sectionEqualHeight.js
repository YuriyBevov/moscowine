// блоки, которые должны быть одинаковыми по высоте, чтобы фон подстраивался зеркально
let investors = document.querySelector('.investors');
let partners = document.querySelector('.partners');

// блоки, которые должны быть одинаковыми по высоте, чтобы фон подстраивался зеркально
let calc = document.querySelector('.calc');
let news = document.querySelector('.news');

function setEqualHeight(section_1, section_2) {
    if(section_1.offsetHeight !== section_2.offsetHeight) {
       section_1.offsetHeight > section_2.offsetHeight ?
       section_2.style.minHeight = section_1.offsetHeight + 'px' :
       section_1.style.minHeight = section_2.offsetHeight + 'px';
    }
};

setEqualHeight(investors, partners);
setEqualHeight(calc, news);

window.addEventListener('resize', function() {
    setEqualHeight(investors, partners);
    setEqualHeight(calc, news);
});