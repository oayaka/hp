let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/')).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}
