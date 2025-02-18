// Sample board data with more friendly descriptions
const boardsData = [
    {
        name: "Wave Rider",
        description: "This board is perfect for beginners and those who want a smooth ride. Great for small to medium-sized waves.",
        length: "6'0\"",
        material: "Fiberglass"
    },
    {
        name: "Big Wave Hunter",
        description: "For those chasing bigger, more powerful waves, this board will keep you in control and ready for any challenge.",
        length: "9'0\"",
        material: "Carbon Fiber"
    },
    {
        name: "Shorty",
        description: "Ideal for experts who want maximum performance. Lightweight, fast, and perfect for quick turns.",
        length: "5'6\"",
        material: "Epoxy"
    }
];

// Function to dynamically display featured surfboards
function loadBoards() {
    const boardList = document.getElementById('board-list');
    boardList.innerHTML = ''; // Clear out the previous boards
    
    boardsData.forEach(board => {
        const boardElement = document.createElement('div');
        boardElement.classList.add('board');
        boardElement.innerHTML = `
            <h3>${board.name}</h3>
            <p><strong>Length:</strong> ${board.length}</p>
            <p><strong>Material:</strong> ${board.material}</p>
            <p>${board.description}</p>
        `;
        boardList.appendChild(boardElement);
    });

    // Save to localStorage (just for fun! You could store user selections here, for example)
    localStorage.setItem("featuredBoards", JSON.stringify(boardsData));
}

// Function to show tutorials (mock functionality)
function loadTutorials() {
    const tutorials = [
        { title: "How to Pop Up on Your Surfboard", description: "Learn how to pop up and get riding the waves like a pro!" },
        { title: "Understanding the Ocean", description: "Get to know the ocean currents and waves to surf safely and effectively." },
        { title: "Advanced Surfing Techniques", description: "Mastering advanced techniques for big wave surfing." }
    ];

    const tutorialsContainer = document.getElementById('tutorials-list');
    tutorialsContainer.innerHTML = ''; // Clear previous content

    tutorials.forEach(tutorial => {
        const tutorialElement = document.createElement('div');
        tutorialElement.classList.add('tutorial');
        tutorialElement.innerHTML = `
            <h4>${tutorial.title}</h4>
            <p>${tutorial.description}</p>
        `;
        tutorialsContainer.appendChild(tutorialElement);
    });
}

// Event listener for the "Load Tutorials" button
document.getElementById('loadTutorials').addEventListener('click', () => {
    loadTutorials();
    alert("Tutorials loaded! Check them out below.");
});

// Load the boards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadBoards(); // Initial boards load
});
