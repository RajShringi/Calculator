const expForm = document.forms['expression-form'];
let exp = expForm.querySelector("input[type='text']");

expForm.addEventListener('submit', function(e){
    e.preventDefault();
});

exp.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        exp.value = eval(exp.value);
    }
})

const btns = document.querySelector('.row');
btns.addEventListener('click', function(e){
    let number = e.target.className;
    switch(number) {
        case 'one':
            exp.value += e.target.textContent;
            break;
        case 'two':
            exp.value += e.target.textContent;
            break;
        case 'three':
            exp.value += e.target.textContent;
            break;
        case 'four':
            exp.value += e.target.textContent;
            break;
        case 'five':
            exp.value += e.target.textContent;
            break;
        case 'six':
            exp.value += e.target.textContent;
            break;
        case 'seven':
            exp.value += e.target.textContent;
            break;
        case 'eight':
            exp.value += e.target.textContent;
            break;
        case 'nine':
            exp.value += e.target.textContent;
            break;
        case 'zero':
            exp.value += e.target.textContent;
            break;
        case 'plus':
            exp.value += e.target.textContent;
            break;
        case 'minus':
            exp.value += e.target.textContent;
            break;
        case 'multiply':
            exp.value += e.target.textContent;
            break;
        case 'divide':
            exp.value += e.target.textContent;
            break;
        case 'equal':
            exp.value = eval(exp.value);
            break;
        case 'clear-everything':
            exp.value = '';
            break;
        case 'clear':
            exp.value = exp.value.slice(0, exp.value.length-1);
            break;
        case 'period':
            exp.value += e.target.textContent;
            break;
        case 'modulus':
            exp.value += e.target.textContent;
            break;
    }
})
