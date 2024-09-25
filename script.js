let result = document.getElementById('result');
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';
let isDecimalAdded = false;

function appendNumber(number) {
    if (number === '.' && isDecimalAdded) return;
    if (number === '.') isDecimalAdded = true;

    if (currentOperator === '') {
        firstOperand += number; 
    } else {
        secondOperand += number; 
    }
    result.value += number;
}

function appendOperator(operator) {
    if (firstOperand !== '') {
        currentOperator = operator;
        result.value += operator; 
        isDecimalAdded = false; 
    }
}

function clearResult() {
    result.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    isDecimalAdded = false;
}

function calculateResult() {
    let firstNumber = parseFloat(firstOperand);
    let secondNumber = parseFloat(secondOperand);
    let calcResult = 0;

    if (currentOperator === '+') {
        calcResult = firstNumber + secondNumber;
    } else if (currentOperator === '-') {
        calcResult = firstNumber - secondNumber;
    } else if (currentOperator === '*') {
        calcResult = firstNumber * secondNumber;
    } else if (currentOperator === '/') {
        calcResult = secondNumber !== 0 ? firstNumber / secondNumber : 'Error'; 
    }

    result.value = calcResult;
    firstOperand = calcResult.toString(); 
    secondOperand = '';
    currentOperator = '';
    isDecimalAdded = firstOperand.includes('.'); 
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (!isNaN(key) || key === '.') {
        appendNumber(key); 
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key); 
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace' || key === 'Escape') {
        clearResult(); 
    }
});



// let result = document.getElementById('result');

// function appendNumber(number) {
//     result.value += number;
// }

// function appendOperator(operator) {
//     result.value += operator;
// }

// function clearResult() {
//     result.value = '';
// }

// function calculateResult() {
//     try {
//         result.value = eval(result.value);
//     } catch (error) {
//         result.value = 'Error';
//     }
// }


