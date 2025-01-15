// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date of the document in the footer
document.getElementById("last-modified").textContent = document.lastModified;

// Members data
const members = [
    {
        "name": "Westernacher Consulting",
        "address": "Escazu Corporate Center",
        "phone": "(123) 456-7890",
        "website": "https://westernacher.com",
        "image": "images/westernacher.png",
        "membership_level": "1"
    },
    {
        "name": "Amazon",
        "address": "410 Terry Ave N, Seattle, WA 98109",
        "phone": "(888) 280-4331",
        "website": "https://amazon.com",
        "image": "images/amazon.jpeg",
        "membership_level": "2"
    },
    {
        "name": "Intel",
        "address": "2200 Mission College Blvd, Santa Clara, CA 95054",
        "phone": "(408) 765-8080",
        "website": "https://intel.com",
        "image": "images/intel.png",
        "membership_level": "3"
    },
    {
        "name": "DXC Technology",
        "address": "1775 Tysons Blvd, Tysons, VA 22102",
        "phone": "(800) 927-0303",
        "website": "https://dxc.com",
        "image": "images/dxc.png",
        "membership_level": "3"
    },
    {
        "name": "Accenture",
        "address": "1 Grand Canal Square, Dublin, Ireland",
        "phone": "(800) 336-1221",
        "website": "https://accenture.com",
        "image": "images/accenture.png",
        "membership_level": "2"
    },
    {
        "name": "IBM",
        "address": "1 New Orchard Rd, Armonk, NY 10504",
        "phone": "(800) 426-4968",
        "website": "https://ibm.com",
        "image": "images/IBM.PNG",
        "membership_level": "1"
    },
    {
        "name": "3M",
        "address": "3M Center, St. Paul, MN 55144",
        "phone": "(800) 364-3577",
        "website": "https://3m.com",
        "image": "images/3M.PNG",
        "membership_level": "2"
    }
];

// Function to display members dynamically
function displayMembers(membersList) {
    const memberContainer = document.getElementById('directory-list');
    memberContainer.innerHTML = ''; // Clear existing members

    membersList.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        // Create member details
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level}</p>
        `;

        memberContainer.appendChild(memberCard);
    });
}

// Call the displayMembers function to initially populate the member list
document.addEventListener('DOMContentLoaded', () => {
    displayMembers(members);

    // Toggle between grid and list view
    document.getElementById('grid-view').addEventListener('click', () => {
        document.getElementById('directory-list').classList.add('grid-view');
        document.getElementById('directory-list').classList.remove('list-view');
    });

    document.getElementById('list-view').addEventListener('click', () => {
        document.getElementById('directory-list').classList.add('list-view');
        document.getElementById('directory-list').classList.remove('grid-view');
    });
});
