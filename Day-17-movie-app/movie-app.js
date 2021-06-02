const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fdd983bf9b7ac4f41aff82adbdf004da&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fdd983bf9b7ac4f41aff82adbdf004da&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const search_2 = document.getElementById('search_2')
const search_1 = document.getElementById('search_1')
const main = document.getElementById('main')
const logo = document.getElementById('logo')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const {
      title, poster_path, vote_average, overview
    } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    <div>
      <img
        src="${IMG_URL + poster_path}"
        alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    </div>
    `
    main.appendChild(movieEl)

    logo.addEventListener('click', () =>{
      main.appendChild(movieEl)
    })

  })
}



function getClassByRate(vote) {
  if(vote >= 8){
    return 'green'
  } else if (vote >= 5){
    return 'orange'
  } else {
    return 'red'
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm != '') {
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})

search_1.addEventListener('click', (e) => {
  e.preventDefault()
  const searchTerm2 = search_2.value

  if (searchTerm2 && searchTerm2 != '') {
    getMovies(SEARCH_API + searchTerm2)
    search_2.value = ''
  } else {
    window.location.reload()
  }
})