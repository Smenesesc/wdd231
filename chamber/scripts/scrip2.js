// Weather Section (OpenWeatherMap API)
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'Lehi'; // Chamber location

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const weatherHTML = `
            <p><strong>Temperature:</strong> ${temp}°F</p>
            <p><strong>Weather:</strong> ${description}</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherHTML;
    })
    .catch(error => console.log('Error fetching weather data:', error));

// Randomly Display Business Spotlights from JSON
const members = [
    { name: "ABC Store", logo: "images/abc-logo.png", phone: "(123) 456-7890", address: "123 Main St", website: "https://www.abcstore.com", membership: "gold" },
    { name: "XYZ Services", logo: "images/xyz-logo.png", phone: "(987) 654-3210", address: "456 Oak St", website: "https://www.xyzservices.com", membership: "silver" },
    // Add more members here...
];

const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 3); // Randomly select 2-3 members
const spotlightContainer = document.getElementById('spotlight-container');

randomMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membership}</p>
    `;
    spotlightContainer.appendChild(card);
});

// Footer Dynamic Content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

