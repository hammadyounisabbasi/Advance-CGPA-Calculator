/* ================= GRADING SYSTEM ================= */

function getGradeFromMarks(m) {

    m = parseFloat(m);

     if (isNaN(m)) return { ng: 0, lg: "N/A" };

    if (m < 50) return { ng: 0.00, lg: "F" };

    if (m <= 51) return { ng: 1.08, lg: "D" };
    if (m <= 52) return { ng: 1.17, lg: "D" };
    if (m <= 53) return { ng: 1.25, lg: "D" };
    if (m <= 54) return { ng: 1.33, lg: "D+" };
    if (m <= 55) return { ng: 1.42, lg: "D+" };
    if (m <= 56) return { ng: 1.50, lg: "D+" };
    if (m <= 57) return { ng: 1.58, lg: "D+" };

    if (m <= 58) return { ng: 1.67, lg: "C-" };
    if (m <= 59) return { ng: 1.75, lg: "C-" };
    if (m <= 60) return { ng: 1.83, lg: "C-" };

    if (m <= 61) return { ng: 1.92, lg: "C" };
    if (m <= 62) return { ng: 2.00, lg: "C" };
    if (m <= 63) return { ng: 2.08, lg: "C" };

    if (m <= 64) return { ng: 2.17, lg: "C+" };
    if (m <= 65) return { ng: 2.25, lg: "C+" };
    if (m <= 66) return { ng: 2.33, lg: "C+" };
    if (m <= 67) return { ng: 2.42, lg: "C+" };

    if (m <= 68) return { ng: 2.50, lg: "B-" };
    if (m <= 69) return { ng: 2.58, lg: "B-" };
    if (m <= 70) return { ng: 2.67, lg: "B-" };

    if (m <= 71) return { ng: 2.75, lg: "B" };
    if (m <= 72) return { ng: 2.83, lg: "B" };
    if (m <= 73) return { ng: 2.92, lg: "B" };
    if (m <= 74) return { ng: 3.00, lg: "B" };

    if (m <= 75) return { ng: 3.08, lg: "B+" };
    if (m <= 76) return { ng: 3.17, lg: "B+" };
    if (m <= 77) return { ng: 3.25, lg: "B+" };
    if (m <= 78) return { ng: 3.33, lg: "B+" };
    if (m <= 79) return { ng: 3.42, lg: "B+" };

    if (m <= 80) return { ng: 3.50, lg: "A-" };
    if (m <= 81) return { ng: 3.60, lg: "A-" };
    if (m <= 82) return { ng: 3.70, lg: "A-" };
    if (m <= 83) return { ng: 3.80, lg: "A-" };
    if (m <= 84) return { ng: 3.90, lg: "A-" };

    return { ng: 4.00, lg: "A" };
}


/* ================= TAB 1 ================= */

function generateSemesters() {

    let sems = parseInt(document.getElementById("totalSemesters").value);
    let box = document.getElementById("semesterContainer");

    box.innerHTML = "";

    for (let i = 1; i <= sems; i++) {

        box.innerHTML += `
        <div class="semester">
            <h3>Semester ${i}</h3>

            <input type="number" id="courses_${i}" placeholder="Number of Courses">

            <button onclick="generateCourses(${i})">Generate Table</button>

            <div id="courseBox_${i}"></div>
        </div>`;
    }
}

function generateCourses(sem) {

    let num = parseInt(document.getElementById(`courses_${sem}`).value);
    let box = document.getElementById(`courseBox_${sem}`);

    if (!num || num <= 0) {
        box.innerHTML = "<p style='color:red'>Enter valid number</p>";
        return;
    }

    let table = `
    <table>
        <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Credit Hours</th>
        </tr>`;

    for (let i = 0; i < num; i++) {

        table += `
        <tr>
            <td><input></td>
            <td><input type="number"></td>
            <td><input type="number"></td>
        </tr>`;
    }

    table += `</table>`;
    box.innerHTML = table;
}

function calculateCGPA() {

    let totalPoints = 0;
    let totalCredits = 0;

    document.querySelectorAll("#semesterContainer tr").forEach(row => {

        let inp = row.querySelectorAll("input");

        if (inp.length === 3) {

            let marks = inp[1].value;
            let credit = parseFloat(inp[2].value);

            let grade = getGradeFromMarks(marks);

            totalPoints += grade.ng * credit;
            totalCredits += credit;
        }
    });

    let cgpa = totalCredits ? totalPoints / totalCredits : 0;

    document.getElementById("output").innerHTML =
        `<h3>FINAL CGPA: ${cgpa.toFixed(2)}</h3>`;
}

/* ================= TAB 2 ================= */

function generateGPACourses() {

    let num = parseInt(document.getElementById("gpaCourseCount").value);
    let box = document.getElementById("gpaCourseContainer");

    let table = `
    <table>
        <tr>
            <th>Course</th>
            <th>Marks</th>
            <th>Credit Hours</th>
        </tr>`;

    for (let i = 0; i < num; i++) {

        table += `
        <tr>
            <td><input></td>
            <td><input type="number"></td>
            <td><input type="number"></td>
        </tr>`;
    }

    table += `</table>`;
    box.innerHTML = table;
}

function calculateSemesterGPA() {

    let totalPoints = 0;
    let totalCredits = 0;

    document.querySelectorAll("#gpaCourseContainer tr").forEach(row => {

        let inp = row.querySelectorAll("input");

        if (inp.length === 3) {

            let marks = inp[1].value;
            let credit = parseFloat(inp[2].value);

            let grade = getGradeFromMarks(marks);

            totalPoints += grade.ng * credit;
            totalCredits += credit;
        }
    });

    let gpa = totalCredits ? totalPoints / totalCredits : 0;

    document.getElementById("gpaOutput").innerHTML =
        `<h3>GPA: ${gpa.toFixed(2)}</h3>`;
}

/* ================= TAB 3 ================= */

function generateKnownSemesters() {

    let num = parseInt(document.getElementById("knownSemesterCount").value);
    let box = document.getElementById("knownSemesterContainer");

    let table = `
    <table>
        <tr>
            <th>Semester</th>
            <th>GPA</th>
            <th>Credit Hours</th>
        </tr>`;

    for (let i = 1; i <= num; i++) {

        table += `
        <tr>
            <td>${i}</td>
            <td><input type="number"></td>
            <td><input type="number"></td>
        </tr>`;
    }

    table += `</table>`;
    box.innerHTML = table;
}

function calculateKnownCGPA() {

    let totalPoints = 0;
    let totalCredits = 0;

    document.querySelectorAll("#knownSemesterContainer tr").forEach(row => {

        let inp = row.querySelectorAll("input");

        if (inp.length === 2) {

            let gpa = parseFloat(inp[0].value);
            let credit = parseFloat(inp[1].value);

            totalPoints += gpa * credit;
            totalCredits += credit;
        }
    });

    let cgpa = totalCredits ? totalPoints / totalCredits : 0;

    document.getElementById("knownOutput").innerHTML =
        `<h3>FINAL CGPA: ${cgpa.toFixed(2)}</h3>`;
}
