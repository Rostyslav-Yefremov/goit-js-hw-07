const inputDataLen = document.querySelector('[data-length]');
const inputValidation = document.querySelector('#validation-input');
const inputlength = inputDataLen.dataset.length;

inputValidation.addEventListener('change', checkInputLength);

function checkInputLength(event) {
event.target.value.length === inputlength ? 
    inputValidation.classList.add('valid') ||
    inputValidation.classList.remove('invalid') : inputValidation.classList.remove('valid') ||
    inputValidation.classList.add('invalid');
}