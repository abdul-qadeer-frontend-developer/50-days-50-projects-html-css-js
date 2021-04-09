const main = document.querySelector('.main')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
    main.classList.toggle('active')
    input.focus()
})