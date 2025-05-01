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
    currentNumber += digit
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
    firstOperand = currentNumber
    operatorChoice = operator

    topinput.textContent = `${currentNumber} ${operator}`
}

addb.addEventListener('click', () => {
    operatorInput('+')
})
subtractb.addEventListener('click', () => {
    operatorInput('-')
})
divideb.addEventListener('click', () => {
    operatorInput('÷')
})
multiplyb.addEventListener('click', () => {
    operatorInput('×')
})



