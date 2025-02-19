// Store the current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Function to display the visitor message based on the last visit
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
    const lastVisitDate = new Date(parseInt(lastVisit));
    const currentDate = new Date();
    const timeDiff = currentDate - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    let message = "";

    if (daysDiff < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
    }

    document.getElementById("visit-message").textContent = message;
} else {
    document.getElementById("visit-message").textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current date for the next visit
localStorage.setItem("lastVisit", Date.now());

// Load JSON data and dynamically generate cards
fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        const discoverSection = document.getElementById("discover-section");
        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.gridArea = `card${index + 1}`;
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            discoverSection.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading the discover data:', error));
