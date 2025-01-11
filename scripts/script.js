// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date of the document in the footer
document.getElementById("lastModified").textContent = `Last modified on: ${document.lastModified}`;

// Course data
const courses = [
    { name: 'Web Development Fundamentals', credits: 3, completed: true },
    { name: 'Computer Science Fundamentals', credits: 3, completed: false },
    { name: 'Data Structures', credits: 4, completed: true },
    { name: 'Software Engineering Principles', credits: 3, completed: false }
];

// Function to display courses
function displayCourses(coursesList) {
    const courseContainer = document.getElementById('coursesList');
    courseContainer.innerHTML = ''; // Clear existing courses

    let totalCredits = 0;

    coursesList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');
        if (course.completed) {
            courseCard.style.backgroundColor = '#d4edda'; // Completed courses in green
        } else {
            courseCard.style.backgroundColor = '#f8d7da'; // Incomplete courses in red
        }
        
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        
        totalCredits += course.credits;
        courseContainer.appendChild(courseCard);
    });

    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);

    // Filter buttons for displaying different course categories
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filteredCourses = courses.filter(course => {
                if (button.dataset.filter === 'completed') {
                    return course.completed;
                } else if (button.dataset.filter === 'incomplete') {
                    return !course.completed;
                } else {
                    return true;
                }
            });
            displayCourses(filteredCourses);
        });
    });
});

// Responsive navigation menu (hamburger)
const nav = document.querySelector('nav');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
nav.prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('show');
});
