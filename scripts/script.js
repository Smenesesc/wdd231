// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date of the document in the footer
document.getElementById("lastModified").textContent = `Last modified on: ${document.lastModified}`;

// Courses
const courses = [
    { name: 'CSE210.001 - Programming with Classes', credits: 2, completed: false },
    { name: 'REL250A.257 - Jesus Christ and His Everlasting Gospel A', credits: 2, completed: false },
    { name: 'WDD231.003 - Web Frontend Development I', credits: 2, completed: false },
];

function displayCourses(coursesList) {
    const courseContainer = document.getElementById('coursesList');
    courseContainer.innerHTML = ''; 

    let totalCredits = 0;

    coursesList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');
        if (course.completed) {
            courseCard.style.backgroundColor = '#d4edda'; 
        } else {
            courseCard.style.backgroundColor = '#f8d7da'; 
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

document.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);

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
const nav = document.querySelector('nav');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
nav.prepend(menuToggle);
menuToggle.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('show');
});
