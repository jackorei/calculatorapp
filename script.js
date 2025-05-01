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
const divideb = document.querySelector('#divideb')
const zerob = document.querySelector('#zero')
const decimalb = document.querySelector('#decimal')
const equalsb = document.querySelector('#equals')

// display divs 
const topinput = document.querySelector(".topinput")
const maininput = document.querySelector(".maininput")

// number button click to display
oneb.addEventListener('click', () => {
    maininput.textContent = '1'
})
twob.addEventListener('click', () => {
    maininput.textContent = '2'
})
threeb.addEventListener('click', () => {
    maininput.textContent = '3'
})
fourb.addEventListener('click', () => {
    maininput.textContent = '4'
})
fiveb.addEventListener('click', () => {
    maininput.textContent = '5'
})
sixb.addEventListener('click', () => {
    maininput.textContent = '6'
})
sevenb.addEventListener('click', () => {
    maininput.textContent = '7'
})
eightb.addEventListener('click', () => {
    maininput.textContent = '8'
})
nineb.addEventListener('click', () => {
    maininput.textContent = '9'
})
zerob.addEventListener('click', () => {
    maininput.textContent = '0'
})

