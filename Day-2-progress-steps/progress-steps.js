const pro = document.getElementById('pro')
const pre = document.getElementById('pre')
const next = document.getElementById('next')
const cirs = document.querySelectorAll('.cir')


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > cirs.length) {
        currentActive = cirs.length
    }
    update()
    // console.log(currentActive)
})

pre.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
    // console.log(currentActive)
})

function update() {
    cirs.forEach((cir, indx) => {
        if (indx < currentActive) {
            cir.classList.add('active')
        } else {
            cir.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    pro.style.width = (actives.length - 1) / (cirs.length - 1) * 100 + '%'

    if (currentActive === 1) {
        pre.disabled = true
    } else if (currentActive === cirs.length) {
        next.disabled = true
    } else {
        pre.disabled = false
        next.disabled = false
    }



}