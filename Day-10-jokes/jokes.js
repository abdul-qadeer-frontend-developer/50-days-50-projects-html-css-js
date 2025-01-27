const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

generateJoke()

jokebtn.addEventListener('click', generateJoke)

// Using async/await

async function generateJoke() {

  const config = {
    headers:{
      'Accept': 'application/json'
    }
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
  
}

// Using .then()

// function generateJoke() {

//   const config = {
//     headers:{
//       'Accept': 'application/json'
//     }
//   }
//   fetch('https://icanhazdadjoke.com', config)
//   .then((res) => res.json())
//   .then((data) => {
//     jokeEl.innerHTML = data.joke
//   })
// }