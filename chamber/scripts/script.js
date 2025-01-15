// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date of the document in the footer
document.getElementById("lastModified").textContent = `Last modified on: ${document.lastModified}`;

// Courses array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses dynamically
function displayCourses(coursesList) {
    const courseContainer = document.getElementById('coursesList');
    courseContainer.innerHTML = ''; // Clear existing courses

    let totalCredits = 0;

    coursesList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');
        
        // Set background color based on completion status
        if (course.completed) {
            courseCard.style.backgroundColor = '#d4edda'; // Green for completed
        } else {
            courseCard.style.backgroundColor = '#f8d7da'; // Red for incomplete
        }

        // Create course details
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Subject:</strong> ${course.subject} ${course.number}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
        `;

        totalCredits += course.credits;
        courseContainer.appendChild(courseCard);
    });

    // Update total credits
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

// Call the displayCourses function to initially populate the course list
document.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);

    // Filter buttons
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

// Responsive navigation (Hamburger menu)
const nav = document.querySelector('nav');
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
nav.prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.querySelector('ul').classList.toggle('show');
});
