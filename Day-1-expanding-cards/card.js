const panels = document.querySelectorAll('.card')
// console.log(panels)
panels.forEach(card =>{
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')        
    })
})

function removeActiveClasses(){
    panels.forEach(card =>{
        card.classList.remove('active')
    })
}

// function myFunction(){
//     alert('u clicked')
// }