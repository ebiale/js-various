import { getJoke } from "./http-provider";

const body = document.body;
let btnAddJoke, olList;

const createJokeHtml = () => {
    const html = `
    <h1 class="mt-5">Jokes</h1>
    <hr>

    <button class="btn btn-info">Add Joke</button>
    <ol class="mt-2 list=group">
    
    </ol>
    `;

    const divJokes = document.createElement('div');
    divJokes.innerHTML = html;

    body.append(divJokes);
};

export const init = () => {
    createJokeHtml();
    events();
};

const events = () => {
    olList = document.querySelector('ol');
    btnAddJoke = document.querySelector('button');

    btnAddJoke.addEventListener('click', async() => {
        btnAddJoke.disabled = true;
        drawJoke(await getJoke());
        btnAddJoke.disabled = false;
    });
};

const drawJoke = (joke) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${joke.id}</b>: ${joke.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
};