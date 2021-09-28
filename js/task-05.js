const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
   refs.input === '' ? refs.span = 'незнакомец' : refs.span.textContent = event.currentTarget.value;  
};

   