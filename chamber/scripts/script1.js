// JavaScript to handle the dynamic footer info, courses array, and filter functionality

// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Sample array of courses
const courses = [
    { name: "Web Development Foundations", code: "WDD101", credits: 3, completed: true, type: "WDD" },
    { name: "Advanced JavaScript", code: "WDD201", credits: 4, completed: false, type: "WDD" },
    { name: "Database Management Systems", code: "CSE105", credits: 3, completed: true, type: "CSE" },
    { name: "Data Structures and Algorithms", code: "CSE207", credits: 4, completed: false, type: "CSE" },
    // More courses can be added here
];

// Function to display courses
function displayCourses(coursesToDisplay) {
    const courseListContainer = document.getElementById("coursesList");
    courseListContainer.innerHTML = ''; // Clear previous list
    let totalCredits = 0;

    coursesToDisplay.forEach(course => {
        // Create course card
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        
        // If course is completed, add a special class
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseListContainer.appendChild(courseCard);

        // Add credits of displayed courses
        totalCredits += course.credits;
    });

    // Display total credits
    const totalCreditsContainer = document.getElementById("totalCredits");
    totalCreditsContainer.textContent = `Total Credits: ${totalCredits}`;
}

// Event listeners for the filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;
        if (filter === "all") {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.completed === (filter === "completed"));
            displayCourses(filteredCourses);
        }
    });
});

// Initial display (All courses by default)
displayCourses(courses);
