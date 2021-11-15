
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c'

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`
const search = document.querySelector('.search');

const appEle = document.querySelector('#app');

var currentAPI = API_URL;
var pageIdx = 1;

search.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        appEle.innerHTML = '';
        appendMovieCard(SEARCH_API + e.target.value);
    }
})

window.addEventListener('scroll', () => {
    const ele = document.documentElement;
    // 滑动到距离页面底部 1/5 的 的时候加载数据
    if (ele.scrollHeight - ele.scrollTop < ele.clientHeight *  5 / 4) {
        pageIdx++;
        appendMovieCard(API_URL + `&page=${pageIdx}`);
    }
})

appendMovieCard();

async function getMovies(api) {
    const response = await fetch(api);
    return await response.json();
}

function createCard(item) {
    const {
        poster_path,
        original_title,
        vote_average,
        overview
    } = item;

    const content = `
    <img
        src="${IMG_PATH + poster_path}"
        alt=""
    />
    <div class="intro">
        <h3 class="title">${original_title}</h3>
        <span class="score ${getClassByScore(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview"><h3>overview</h3>${overview}</div>
    `

    return content;
}

function getClassByScore(score) {
    if (score >= 8) {
        return 'green'
    } else if (score >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function appendMovieCard(api = API_URL) {
    getMovies(api).then((data) => {
        data.results.forEach((item) => {
            const divEle = document.createElement('div');
            divEle.classList.add('card');
            divEle.innerHTML = createCard(item);
            appEle.appendChild(divEle);
        })
    })
}
