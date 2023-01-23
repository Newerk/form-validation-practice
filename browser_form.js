//inputs
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipcodeInput = document.getElementById('zipcode');
const pwInput = document.getElementById('pw');
const pwConfirmInput = document.getElementById('pw-confirm');

const emailSpan = document.getElementById('email-span');
const countrySpan = document.getElementById('country-span');
const zipcodeSpan = document.getElementById('zipcode-span');
const pwSpan = document.getElementById('pw-span');
const pwConfirmSpan = document.getElementById('pw-confirm-span');

const monitorValidation = (() => {
    let text;
    document.querySelectorAll('input').forEach(el => el.addEventListener('focusout', () => {
        if (el.id === "email" && !el.validity.valid) {
            text = 'Email is not correctly formatted, example: example@domain.com';
            emailSpan.textContent = text;
            makeSpanVisible('email-span');
        }
        if (el.id === 'email' && el.validity.valid) {
            text = '';
            emailSpan.textContent = text;
            el.setAttribute('style', 'border: 2px solid limegreen')
            
        }

        if (el.id === "zipcode" && !el.validity.valid) {
            text = `Zipcode is not correctly formatted, example: 12345 or 12345-4321`;
            zipcodeSpan.textContent = text;
            makeSpanVisible('zipcode-span');
        }
        if (el.id === 'zipcode' && el.validity.valid) {
            text = '';
            zipcodeSpan.textContent = text;
            el.setAttribute('style', 'border: 2px solid limegreen')
            
        }

    }))
})();

function makeSpanVisible(id) {
    document.getElementById(id).setAttribute('style', 'visibility: visible')

}