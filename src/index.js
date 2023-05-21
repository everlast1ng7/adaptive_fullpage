import './styles/styles.css';
// import html from "./index.html";

const clientSection = document.querySelector('.clients');

const left = clientSection.querySelector('.left');
const right = clientSection.querySelector('.right');

const cards = clientSection.querySelector('.clients__cards')

left.addEventListener('click', (e) => {
    e.preventDefault();
    cards.scrollLeft += -320;
})

right.addEventListener('click', (e) => {
    e.preventDefault();
    cards.scrollLeft += 320;
})