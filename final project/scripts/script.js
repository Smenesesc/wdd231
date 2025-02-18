import { fetchBoards, fetchTutorials } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedBoards();
    handleTutorials();
});

async function loadFeaturedBoards() {
    const boardContainer = document.getElementById('board-list');
    const boards = await fetchBoards();
    boards.forEach(board => {
        const boardElement = document.createElement('div');
        boardElement.classList.add('board');
        boardElement.innerHTML = `
            <h3>${board.name}</h3>
            <img src="${board.image}" alt="${board.name}" />
            <p>Price: $${board.price}</p>
        `;
        boardContainer.appendChild(boardElement);
    });
}

function handleTutorials() {
    const loadButton = document.getElementById('loadTutorials');
    loadButton.addEventListener('click', async () => {
        const tutorials = await fetchTutorials();
        alert(`We have ${tutorials.length} tutorials ready for you!`);
    });
}
