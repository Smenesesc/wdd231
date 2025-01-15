document.addEventListener('DOMContentLoaded', () => {
    // Fetching member data from JSON
    async function fetchMembers() {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const directoryList = document.getElementById('directory-list');
        directoryList.innerHTML = '';

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                <p>Membership Level: ${member.membership_level}</p>
            `;
            directoryList.appendChild(card);
        });
    }

    // Initial fetch call
    fetchMembers();

    // Handle View Toggle
    document.getElementById('grid-view').addEventListener('click', () => {
        document.getElementById('directory-list').classList.remove('list-view');
        document.getElementById('directory-list').classList.add('grid-view');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        document.getElementById('directory-list').classList.remove('grid-view');
        document.getElementById('directory-list').classList.add('list-view');
    });

    // Display current year and last modified date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
