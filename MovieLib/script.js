const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.querySelector('#searchForm');
const searchText = document.querySelector('#search');
const main = document.querySelector('main');
// function getMovies(url){
//     fetch(url).then(res => {
//         return res.json();
//     }).then(movies => {
//         console.log(movies.results);
//     })
// }

getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEl);

    })
}

function getClassByRating(rating){
    if(rating >= 8){
        return 'green';
    }
    else if(rating >= 5){
        return 'orange';
    }
    else{
        return 'red';
    }
}

//getMovies(API_URL);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = searchText.value;
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);
    }
    else{
        window.location.reload();
    }
});