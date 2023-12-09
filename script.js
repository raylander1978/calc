document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');

    buttons.addEventListener('click', function (event) {
        if (event.target.matches('button')) {
            handleButtonClick(event.target.innerText);
        }
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Erro';
            }
        } else {
            display.value += value;
        }
    }
});