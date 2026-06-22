
/* =========================
   TAB SYSTEM
========================= */

window.openTab = function(event, tabId) {

    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab");

    tabs.forEach(t => t.classList.remove("active"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
};

/* =========================
   GRADING SYSTEM (UNCHANGED)
========================= */

function getGradeFromMarks(marks) {

    if (isNaN(marks)) return { ng: 0, lg: "N/A" };

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

/* ================= TAB 1 ================= */

function generateSemesters(){
    let n=document.getElementById("semCount").value;
    let box=document.getElementById("semBox");

    box.innerHTML="";

    for(let i=0;i<n;i++){
        box.innerHTML+=`
        <h3>Semester ${i+1}</h3>
        <table>
        <tr><th>Course</th><th>Marks</th><th>Credit</th></tr>
        ${Array(3).fill(0).map(()=>`
        <tr>
        <td><input></td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        </tr>`).join("")}
        </table>`;
    }
}

function calcCGPA(){
    let p=0,c=0;

    document.querySelectorAll("#semBox tr").forEach(r=>{
        let i=r.querySelectorAll("input");
        if(i.length==3){
            let m=+i[1].value;
            let cr=+i[2].value;
            let g=getGrade(m);
            p+=g.ng*cr;
            c+=cr;
        }
    });

    document.getElementById("out1").innerHTML=
    `<div class="final">CGPA: ${(p/c).toFixed(2)}</div>`;
}

/* ================= TAB 2 ================= */

function generateCourses(){
    let n=document.getElementById("courseCount").value;
    let box=document.getElementById("courseBox");

    box.innerHTML=`
    <table>
    <tr><th>Course</th><th>Marks</th><th>Credit</th></tr>
    ${Array(+n).fill(0).map(()=>`
    <tr>
    <td><input></td>
    <td><input type="number"></td>
    <td><input type="number"></td>
    </tr>`).join("")}
    </table>`;
}

function calcGPA(){
    let p=0,c=0;

    document.querySelectorAll("#courseBox tr").forEach(r=>{
        let i=r.querySelectorAll("input");
        if(i.length==3){
            let m=+i[1].value;
            let cr=+i[2].value;
            let g=getGrade(m);
            p+=g.ng*cr;
            c+=cr;
        }
    });

    document.getElementById("out2").innerHTML=
    `<div class="final">GPA: ${(p/c).toFixed(2)}</div>`;
}

/* ================= TAB 3 ================= */

function generatePast(){
    let n=document.getElementById("gpaCount").value;
    let box=document.getElementById("pastBox");

    box.innerHTML=`
    <table>
    <tr><th>GPA</th><th>Credit</th></tr>
    ${Array(+n).fill(0).map(()=>`
    <tr>
    <td><input type="number"></td>
    <td><input type="number"></td>
    </tr>`).join("")}
    </table>`;
}

function calcPastCGPA(){
    let p=0,c=0;

    document.querySelectorAll("#pastBox tr").forEach(r=>{
        let i=r.querySelectorAll("input");
        if(i.length==2){
            let g=+i[0].value;
            let cr=+i[1].value;
            p+=g*cr;
            c+=cr;
        }
    });

    document.getElementById("out3").innerHTML=
    `<div class="final">CGPA: ${(p/c).toFixed(2)}</div>`;
}
