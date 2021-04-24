const toggel = document.getElementById('toggle')
const nav = document.querySelector('nav')

toggel.addEventListener('click', () => nav.classList.toggle('active'))