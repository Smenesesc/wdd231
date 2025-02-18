// Example Data for Surfboards
const surfboards = [
    {
        name: 'Tank Master 5000',
        type: 'All-rounder',
        size: '6\'0"',
        price: '$499',
    },
    {
        name: 'Wave Crusher',
        type: 'Longboard',
        size: '9\'0"',
        price: '$599',
    },
    {
        name: 'Speed Demon',
        type: 'Shortboard',
        size: '5\'6"',
        price: '$450',
    }
];

// Function to dynamically create surfboard list
function displaySurfboards() {
    const boardList = document.getElementById('board-list');

    surfboards.forEach(board => {
        const boardItem = document.createElement('div');
        boardItem.classList.add('board-item');

        boardItem.innerHTML = `
            <h3>${board.name}</h3>
            <p>Type: ${board.type}</p>
            <p>Size: ${board.size}</p>
            <p>Price: ${board.price}</p>
        `;

        boardList.appendChild(boardItem);
    });
}

// Run the function to display boards when the page loads
window.onload = () => {
    displaySurfboards();
};
