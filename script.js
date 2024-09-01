document.addEventListener('DOMContentLoaded', function() {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
           handleInput(buttonText);
        })
});

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if(key === 'Enter') {
        event.preventDefault();
        handleInput('=');
    } else if(key==='Backspace') {
        event.preventDefault();
        handleInput('Backspace');
    } else if(/^[0-9]$/.test(key) || ['/', '*', '-', '+', '.'].includes(key)) {
        handleInput(key);
    }
});
function handleInput(input) {
    if (input === 'Clear') {
        resultInput.value = '';
    } else if (input === 'Backspace') {
        resultInput.value = resultInput.value.slice(0, -1);
    } else if (input === '=') {
        try {
            resultInput.value = eval(resultInput.value);
        } catch {
            resultInput.value = 'Error';
        }
    } else {
        resultInput.value += input;
    }
}
});







