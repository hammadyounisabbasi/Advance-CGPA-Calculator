
/* ==========================
   TAB SWITCHING
========================== */

function openTab(event, tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

/* ==========================
   ORIGINAL GRADING FUNCTION
   (UNCHANGED AS REQUESTED)
========================== */

function getGradeFromMarks(marks) {
    if (marks < 50) return { ng: 0.00, lg: "F" };
    if (marks <= 51) return { ng: 1.08, lg: "D" };
    if (marks <= 52) return { ng: 1.17, lg: "D" };
    if (marks <= 53) return { ng: 1.25, lg: "D" };
    if (marks <= 54) return { ng: 1.33, lg: "D+" };
    if (marks <= 55) return { ng: 1.42, lg: "D+" };
    if (marks <= 56) return { ng: 1.50, lg: "D+" };
    if (marks <= 57) return { ng: 1.58, lg: "D+" };
    if (marks <= 58) return { ng: 1.67, lg: "C-" };
    if (marks <= 59) return { ng: 1.75, lg: "C-" };
    if (marks <= 60) return { ng: 1.83, lg: "C-" };
    if (marks <= 61) return { ng: 1.92, lg: "C" };
    if (marks <= 62) return { ng: 2.00, lg: "C" };
    if (marks <= 63) return { ng: 2.08, lg: "C" };
    if (marks <= 64) return { ng: 2.17, lg: "C+" };
    if (marks <= 65) return { ng: 2.25, lg: "C+" };
    if (marks <= 66) return { ng: 2.33, lg: "C+" };
    if (marks <= 67) return { ng: 2.42, lg: "C+" };
    if (marks <= 68) return { ng: 2.50, lg: "B-" };
    if (marks <= 69) return { ng: 2.58, lg: "B-" };
    if (marks <= 70) return { ng: 2.67, lg: "B-" };
    if (marks <= 71) return { ng: 2.75, lg: "B" };
    if (marks <= 72) return { ng: 2.83, lg: "B" };
    if (marks <= 73) return { ng: 2.92, lg: "B" };
    if (marks <= 74) return { ng: 3.00, lg: "B" };
    if (marks <= 75) return { ng: 3.08, lg: "B+" };
    if (marks <= 76) return { ng: 3.17, lg: "B+" };
    if (marks <= 77) return { ng: 3.25, lg: "B+" };
    if (marks <= 78) return { ng: 3.33, lg: "B+" };
    if (marks <= 79) return { ng: 3.42, lg: "B+" };
    if (marks <= 80) return { ng: 3.50, lg: "A-" };
    if (marks <= 81) return { ng: 3.60, lg: "A-" };
    if (marks <= 82) return { ng: 3.70, lg: "A-" };
    if (marks <= 83) return { ng: 3.80, lg: "A-" };
    if (marks <= 84) return { ng: 3.90, lg: "A-" };
    return { ng: 4.00, lg: "A" };
}

/* ==========================
   TAB 1: DETAILED CGPA
========================== */

function generateSemesters() {
    let container = document.getElementById("semesterContainer");
    container.innerHTML = "";

    let sems = parseInt(document.getElementById("totalSemesters").value);

    for (let s = 1; s <= sems; s++) {
        container.innerHTML += `
        <div class="semester">
            <h3>Semester ${s}</h3>

            <input type="number" id="courses_${s}" placeholder="Number of Courses">

            <button class="primary-btn" onclick="generateCourses(${s})">
                Add Courses
            </button>

            <div id="courseBox_${s}"></div>
        </div>`;
    }
}

function generateCourses(sem) {
    let num = document.getElementById(`courses_${sem}`).value;
    let box = document.getElementById(`courseBox_${sem}`);

    box.innerHTML = "";

    for (let i = 0; i < num; i++) {
        box.innerHTML += `
        <div class="course">
            <input placeholder="Course Name">
            <input type="number" placeholder="Marks">
            <input type="number" placeholder="Credit Hours">
        </div>`;
    }
}

function calculateCGPA() {
    let sems = parseInt(document.getElementById("totalSemesters").value);
    let name = document.getElementById("studentName").value;

    let totalPoints = 0;
    let totalCredits = 0;

    let html = `<div class="result"><h2>Student: ${name}</h2>`;

    for (let s = 1; s <= sems; s++) {

        let courses = document.querySelectorAll(`#courseBox_${s} .course`);
        let semPoints = 0;
        let semCredits = 0;

        html += `<h3>Semester ${s}</h3>
        <div class="table-wrapper">
        <table>
        <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>NG</th>
            <th>Credits</th>
        </tr>`;

        courses.forEach(c => {
            let inputs = c.querySelectorAll("input");

            let name = inputs[0].value;
            let marks = parseFloat(inputs[1].value);
            let credit = parseFloat(inputs[2].value);

            let g = getGradeFromMarks(marks);

            semPoints += g.ng * credit;
            semCredits += credit;

            html += `
            <tr>
                <td>${name}</td>
                <td>${marks}</td>
                <td>${g.lg}</td>
                <td>${g.ng}</td>
                <td>${credit}</td>
            </tr>`;
        });

        let sgpa = semPoints / semCredits;

        html += `</table></div>
        <p><b>Semester GPA: ${sgpa.toFixed(2)}</b></p>`;

        totalPoints += semPoints;
        totalCredits += semCredits;
    }

    let cgpa = totalPoints / totalCredits;

    html += `
        <div class="final-box">
            <h2>Final CGPA: ${cgpa.toFixed(2)}</h2>
        </div>
    </div>`;

    document.getElementById("output").innerHTML = html;
}

/* ==========================
   TAB 2: SEMESTER GPA
========================== */

function generateGPACourses() {
    let num = document.getElementById("gpaCourseCount").value;
    let box = document.getElementById("gpaCourseContainer");

    box.innerHTML = "";

    for (let i = 0; i < num; i++) {
        box.innerHTML += `
        <div class="course">
            <input placeholder="Course Name">
            <input type="number" placeholder="Marks">
            <input type="number" placeholder="Credit Hours">
        </div>`;
    }
}

function calculateSemesterGPA() {
    let courses = document.querySelectorAll("#gpaCourseContainer .course");

    let points = 0;
    let credits = 0;

    let html = `
    <div class="table-wrapper">
    <table>
        <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>NG</th>
            <th>Credits</th>
        </tr>`;

    courses.forEach(c => {
        let inputs = c.querySelectorAll("input");

        let name = inputs[0].value;
        let marks = parseFloat(inputs[1].value);
        let credit = parseFloat(inputs[2].value);

        let g = getGradeFromMarks(marks);

        points += g.ng * credit;
        credits += credit;

        html += `
        <tr>
            <td>${name}</td>
            <td>${marks}</td>
            <td>${g.lg}</td>
            <td>${g.ng}</td>
            <td>${credit}</td>
        </tr>`;
    });

    let gpa = points / credits;

    html += `</table></div>
    <div class="final-box">
        <h2>Semester GPA: ${gpa.toFixed(2)}</h2>
    </div>`;

    document.getElementById("gpaOutput").innerHTML = html;
}

/* ==========================
   TAB 3: CGPA FROM GPA LIST
========================== */

function generateKnownSemesters() {
    let num = document.getElementById("knownSemesterCount").value;
    let box = document.getElementById("knownSemesterContainer");

    box.innerHTML = "";

    for (let i = 0; i < num; i++) {
        box.innerHTML += `
        <div class="semester">
            <h3>Semester ${i + 1}</h3>

            <input type="number" placeholder="GPA">
            <input type="number" placeholder="Credit Hours">
        </div>`;
    }
}

function calculateKnownCGPA() {
    let sems = document.querySelectorAll("#knownSemesterContainer .semester");

    let totalPoints = 0;
    let totalCredits = 0;

    let html = `
    <div class="table-wrapper">
    <table>
        <tr>
            <th>Semester</th>
            <th>GPA</th>
            <th>Credits</th>
        </tr>`;

    sems.forEach((s, i) => {
        let inputs = s.querySelectorAll("input");

        let gpa = parseFloat(inputs[0].value);
        let credit = parseFloat(inputs[1].value);

        totalPoints += gpa * credit;
        totalCredits += credit;

        html += `
        <tr>
            <td>Semester ${i + 1}</td>
            <td>${gpa}</td>
            <td>${credit}</td>
        </tr>`;
    });

    let cgpa = totalPoints / totalCredits;

    html += `</table></div>
    <div class="final-box">
        <h2>Final CGPA: ${cgpa.toFixed(2)}</h2>
    </div>`;

    document.getElementById("knownOutput").innerHTML = html;
}
