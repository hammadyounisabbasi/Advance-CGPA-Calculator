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

function generateSemesters() {
    const container = document.getElementById("semesterContainer");
    container.innerHTML = "";
    let sems = document.getElementById("totalSemesters").value;

    for (let s = 1; s <= sems; s++) {
        container.innerHTML += `
        <div class="semester">
            <h3>Semester ${s}</h3>
            <label>Number of Courses</label>
            <input type="number" id="courses_${s}">
            <button onclick="generateCourses(${s})">Add Courses</button>
            <div id="courseBox_${s}"></div>
        </div>`;
    }
}

function generateCourses(sem) {
    const num = document.getElementById(`courses_${sem}`).value;
    const box = document.getElementById(`courseBox_${sem}`);
    box.innerHTML = "";

    for (let i = 0; i < num; i++) {
        box.innerHTML += `
        <div class="course">
            <input placeholder="Course Name">
            <input type="number" placeholder="Marks (0-100)">
            <input type="number" placeholder="Credit Hours">
        </div>`;
    }
}

function calculateCGPA() {
    let sems = document.getElementById("totalSemesters").value;
    let name = document.getElementById("studentName").value;

    let totalPoints = 0, totalCredits = 0;
    let output = "";

    for (let s = 1; s <= sems; s++) {
        let courses = document.querySelectorAll(`#courseBox_${s} .course`);
        let semPoints = 0, semCredits = 0;

        output += `<h3>Semester ${s}</h3>`;

        courses.forEach((c, i) => {
            let inputs = c.querySelectorAll("input");
            let cname = inputs[0].value;
            let marks = parseFloat(inputs[1].value);
            let credit = parseInt(inputs[2].value);

            let grade = getGradeFromMarks(marks);

            semPoints += grade.ng * credit;
            semCredits += credit;

            output += `Course ${i+1}: ${cname} | Marks: ${marks} | Grade: ${grade.lg} | NG: ${grade.ng}<br>`;
        });

        let sgpa = semPoints / semCredits;
        output += `<b>Semester GPA: ${sgpa.toFixed(2)}</b><br><br>`;

        totalPoints += semPoints;
        totalCredits += semCredits;
    }

    let cgpa = totalPoints / totalCredits;

    document.getElementById("output").innerHTML =
        `<div class="result">
            <h2>Student: ${name}</h2>
            ${output}
            <hr>
            <h2>Final CGPA: ${cgpa.toFixed(2)}</h2>
        </div>`;
}
