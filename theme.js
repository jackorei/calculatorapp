let lightmode = localStorage.getItem('lightmode')
const themeswitcher = document.querySelector('#themeswitcher')
const body = document.querySelector('body')

function enableLight() {
    body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}
function disableLight() {
    body.classList.remove('lightmode')
    localStorage.setItem('lightmode', 'null')
}

if (lightmode === 'active') {
    enableLight()
}

themeswitcher.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode')
    if (lightmode !== "active") {
        enableLight()
    }
    else {
        disableLight()
    }
})

