// all calculator buttons
const clearb = document.querySelector('#clear')
const signb = document.querySelector('#sign')
const percentb = document.querySelector('#percent')
const addb = document.querySelector('#add')
const sevenb = document.querySelector('#seven')
const eightb = document.querySelector('#eight')
const nineb = document.querySelector('#nine')
const fourb = document.querySelector('#four')
const fiveb = document.querySelector('#five')
const sixb = document.querySelector('#six')
const multiplyb = document.querySelector('#multiply')
const oneb = document.querySelector('#one')
const twob = document.querySelector('#two')
const threeb = document.querySelector('#three')
const divideb = document.querySelector('#divide')
const zerob = document.querySelector('#zero')
const decimalb = document.querySelector('#decimal')
const equalsb = document.querySelector('#equals')
const subtractb = document.querySelector('#subtract')

// display divs 
const topinput = document.querySelector(".topinput")
const maininput = document.querySelector(".maininput")

// variables
let currentNumber = "";         // The number being typed in right now (as a string)
let firstOperand = null;        // First number in the operation
let secondOperand = null;       // Second number in the operation
let currentOperator = null;     // The selected operator (+, -, etc.)
let shouldResetScreen = false; 

// function for adding onto/making currentnumber
function handleInput(digit) {
    if (shouldResetScreen) {
        currentNumber = ''
        shouldResetScreen = false
    }
    currentNumber += digit
    if (currentNumber > 99999999) {
    }
    maininput.textContent = currentNumber
}

// handleInput function inputs (click)
oneb.addEventListener('click', () => {
    handleInput(1)
})
twob.addEventListener('click', () => {
    handleInput(2)
})
threeb.addEventListener('click', () => {
    handleInput(3)
})
fourb.addEventListener('click', () => {
    handleInput(4)
})
fiveb.addEventListener('click', () => {
    handleInput(5)
})
sixb.addEventListener('click', () => {
    handleInput(6)
})
sevenb.addEventListener('click', () => {
    handleInput(7)
})
eightb.addEventListener('click', () => {
    handleInput(8)
})
nineb.addEventListener('click', () => {
    handleInput(9)
})
zerob.addEventListener('click', () => {
    handleInput(0)
})

// operator click input

function operatorInput(operator) {
    
    shouldResetScreen = true
    firstOperand = currentNumber
    currentOperator = operator
    topinput.textContent = `${currentNumber} ${currentOperator}`
}

addb.addEventListener('click', () => {
    operatorInput('+')
    maininput.textContent = '‎ '
})
subtractb.addEventListener('click', () => {
    operatorInput('-')
    maininput.textContent = '‎ '
})
divideb.addEventListener('click', () => {
    operatorInput('÷')
    maininput.textContent = '‎ '
})
multiplyb.addEventListener('click', () => {
    operatorInput('×')
    maininput.textContent = '‎ '
})
percentb.addEventListener('click', () => {
    operatorInput('%')
    maininput.textContent = '‎ '
})

signb.addEventListener('click', () => {
    if (currentNumber.startsWith('-')) {
        currentNumber = currentNumber.slice(1);
    } else {
        currentNumber = '-' + currentNumber;
    }
    maininput.textContent = currentNumber;
})



equalsb.addEventListener('click', () => {
    secondOperand = currentNumber
    operate(firstOperand, secondOperand, currentOperator)
})


function operate(num1, num2, op) {
        if (currentOperator === '+') {
            topinput.textContent = `${num1} ${op} ${num2} =`
            maininput.textContent = parseFloat(num1) + parseInt(num2)
        }
        else if (currentOperator === '-') {
            topinput.textContent = `${num1} ${op} ${num2} =`
            maininput.textContent = parseFloat(num1) - parseInt(num2)
        }
        else if (currentOperator === '÷') {
            topinput.textContent = `${num1} ${op} ${num2} =`
            maininput.textContent = parseFloat(num1) / parseInt(num2)
        }
        else if (currentOperator === '×') {
            topinput.textContent = `${num1} ${op} ${num2} =`
            maininput.textContent = parseFloat(num1) * parseInt(num2)
        }
        else if (currentOperator === '%') {
            topinput.textContent = `${num1} ${op} =`
            maininput.textContent = parseFloat(num1) / 100
        }
        else if (currentOperator === '×') {
            topinput.textContent = `${num1} ${op} ${num2} =`
            maininput.textContent = parseFloat(num1) * parseInt(num2)
        }
        else {
            topinput.textContent = 'Error'
        }
}
clearb.addEventListener('click', () => {
    currentNumber = "";         
    firstOperand = null;        
    secondOperand = null;       
    currentOperator = null;
    shouldResetScreen = false;
    topinput.textContent = ''
    maininput.textContent = ''
})