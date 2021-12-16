import IMask from 'imask';

let phoneInput = document.getElementById('phone');

if (phoneInput) {
    IMask(
        phoneInput, {
        mask: '+{7} (000) 000 00 00'
    });
}