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

const submitBtn = document.getElementById('submit');

const monitorValidation = (() => {
    let text;

    countryInput.addEventListener('change', () => {

        if (countryInput.value === '0') {
            text = 'Please select a country from the dropdown';
            countrySpan.textContent = text;
            makeSpanVisible('country-span');
            document.querySelector('.select-border').setAttribute('style', 'border: none')


        } else {
            text = '';
            countrySpan.textContent = text;
            makeSpanVisible('country-span');
            document.querySelector('.select-border').setAttribute('style', 'border: 2px solid limegreen')
        }
    })

    document.querySelectorAll('input').forEach(el => el.addEventListener('focusout', () => {
        if (el.id === "email" && !el.validity.valid) {
            text = 'Email is not correctly formatted, example: example@domain.com';
            emailSpan.textContent = text;
            makeSpanVisible('email-span');
            el.setAttribute('style', 'border: none')

        }

        if (el.id === "email" && el.value.length === 0) {
            text = 'Please enter an email';
            emailSpan.textContent = text;
            makeSpanVisible('email-span');
            el.setAttribute('style', 'border: none')

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
            el.setAttribute('style', 'border: none')

        }

        if (el.id === "zipcode" && el.validity.tooShort) {
            text = `Zipcode must be atleast 5 digits long`;
            zipcodeSpan.textContent = text;
            makeSpanVisible('zipcode-span');
            el.setAttribute('style', 'border: none')

        }

        if (el.id === "zipcode" && /[^-\d]/gm.test(el.value)) {
            text = `No non-number values allowed`;
            zipcodeSpan.textContent = text;
            makeSpanVisible('zipcode-span');
            el.setAttribute('style', 'border: none')

        }
        if (el.id === 'zipcode' && el.validity.valid) {
            text = '';
            zipcodeSpan.textContent = text;
            el.setAttribute('style', 'border: 2px solid limegreen')

        }

        if (el.id === "pw" && !el.validity.valid) {
            text = `Minimum eight characters. At least one uppercase letter, one lowercase letter and one number`;
            pwSpan.textContent = text;
            makeSpanVisible('pw-span');
            el.setAttribute('style', 'border: none')

        }

        if (el.id === "pw" && el.validity.valid) {
            text = '';
            pwSpan.textContent = text;
            makeSpanVisible('pw-span');
            el.setAttribute('style', 'border: 2px solid limegreen')

        }


        if (el.id === "pw-confirm" && el.value !== pwInput.value) {
            text = 'Password does not match';
            pwConfirmSpan.textContent = text;
            makeSpanVisible('pw-confirm-span');
            el.setAttribute('style', 'border: none')

        }

        if (el.id === "pw-confirm" && el.value === pwInput.value) {
            text = '';
            pwConfirmSpan.textContent = text;
            makeSpanVisible('pw-confirm-span');
            el.setAttribute('style', 'border: 2px solid limegreen')

        }


    }))

    submitBtn.addEventListener('click', () => {
        if (countryInput.value === '0') {
            text = 'Please select a country from the dropdown';
            countrySpan.textContent = text;
            makeSpanVisible('country-span');
            document.querySelector('.select-border').setAttribute('style', 'border: none')
        } else
            if (emailInput.validity.valid &&
                countryInput.validity.valid &&
                zipcodeInput.validity.valid &&
                pwInput.validity.valid &&
                pwConfirmInput.validity.valid) {
                alert('all values are valid');
                document.querySelector('.select-border').setAttribute('style', 'border: 2px solid limegreen');

            }
    })

})();

function makeSpanVisible(id) {
    document.getElementById(id).setAttribute('style', 'visibility: visible')

}