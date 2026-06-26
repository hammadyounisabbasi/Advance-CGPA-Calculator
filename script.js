
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

// UTILITY FUNCTIONS
// Validate number input

function validateNumber(value, min = 0, max = 100) {
    const valueStr = String(value).trim();
    
    if (valueStr === '' || isNaN(valueStr)) {
        return { isValid: false, value: 0, error: 'Please enter a valid number' };
    }
    
    const num = parseFloat(valueStr);
    
    if (num < min || num > max) {
        return { isValid: false, value: 0, error: `Value must be between ${min} and ${max}` };
    }
    
    return { isValid: true, value: num, error: null };
}

//  Round number to 2 decimal places
function roundTo(num, places = 2) {
    return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
}

//  Clear tab content
 
function clearTabContent(tabId) {
    const element = document.getElementById(tabId);
    if (element) {
        element.innerHTML = '';
    }
}

//   Show error message

function getErrorHTML(message) {
    return `<div class="error-message">⚠ ${message}</div>`;
}

//   Show success message
function getSuccessHTML(message) {
    return `<div class="success-message">✓ ${message}</div>`;
}

// TAB NAVIGATION - Will be initialized after DOM loads

// 1. DETAILED CGPA CALCULATOR

function generateSemesters() {
    console.log('generateSemesters called');
    const input = document.getElementById('semesterCount');
    if (!input) {
        alert('Error: semesterCount input not found');
        return;
    }
    
    const semesterCount = parseInt(input.value);
    console.log('Semester count:', semesterCount);
    
    const validation = validateNumber(semesterCount, 1, 20);
    if (!validation.isValid) {
        alert('Please enter a valid number of semesters (1-20)');
        return;
    }
    
    const container = document.getElementById('semesterInputsContainer');
    if (!container) {
        alert('Error: semesterInputsContainer not found');
        return;
    }
    
    container.innerHTML = '';
    
    for (let i = 1; i <= validation.value; i++) {
        const semesterBlock = document.createElement('div');
        semesterBlock.className = 'semester-block';
        semesterBlock.innerHTML = `
            <div class="semester-header">📚 Semester ${i}</div>
            <div class="form-group">
                <label for="semester${i}CourseCount">Number of Courses</label>
                <input type="number" id="semester${i}CourseCount" min="1" max="15" value="1" placeholder="Enter number of courses">
                <small>Min: 1, Max: 15</small>
            </div>
            <div id="semester${i}CoursesContainer" class="course-inputs"></div>
            <button class="btn btn-primary btn-sm" onclick="generateCoursesForSemester(${i})">Generate Courses</button>
        `;
        container.appendChild(semesterBlock);
    }
    console.log('Semesters generated successfully');
}

function generateCoursesForSemester(semesterNumber) {
    console.log('generateCoursesForSemester called for semester', semesterNumber);
    
    const courseCountInput = document.getElementById(`semester${semesterNumber}CourseCount`);
    if (!courseCountInput) {
        alert(`Error: semester${semesterNumber}CourseCount not found`);
        return;
    }
    
    const courseCount = parseInt(courseCountInput.value);
    console.log('Course count for semester', semesterNumber, ':', courseCount);
    
    const validation = validateNumber(courseCount, 1, 15);
    if (!validation.isValid) {
        alert('Please enter a valid number of courses (1-15)');
        return;
    }
    
    const container = document.getElementById(`semester${semesterNumber}CoursesContainer`);
    if (!container) {
        alert(`Error: semester${semesterNumber}CoursesContainer not found`);
        return;
    }
    
    container.innerHTML = '';
    
    for (let i = 1; i <= validation.value; i++) {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <div class="course-item-row">
                <div class="form-group">
                    <label>Course Name</label>
                    <input type="text" placeholder="e.g., Programming" class="course-name" data-semester="${semesterNumber}" data-course="${i}">
                </div>
                <div class="form-group">
                    <label>Marks (0-100)</label>
                    <input type="number" min="0" max="100" placeholder="0-100" class="course-marks" data-semester="${semesterNumber}" data-course="${i}">
                </div>
                <div class="form-group">
                    <label>Credit Hours</label>
                    <input type="number" min="1" max="10" placeholder="1-10" class="course-credits" data-semester="${semesterNumber}" data-course="${i}">
                </div>
            </div>
        `;
        container.appendChild(courseItem);
    }
    console.log('Courses generated for semester', semesterNumber);
}

function calculateDetailedCGPA() {
    console.log('calculateDetailedCGPA called');
    clearTabContent('detailedOutput');
    
    const semesterCount = parseInt(document.getElementById('semesterCount').value);
    const studentName = document.getElementById('studentName').value.trim() || 'Not Provided';
    const studentRoll = document.getElementById('studentRoll').value.trim() || 'Not Provided';
    
    console.log('Semester count:', semesterCount);
    
    const semesters = [];
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let hasError = false;
    
    for (let sem = 1; sem <= semesterCount; sem++) {
        const courses = [];
        const courseMarksElements = document.querySelectorAll(`.course-marks[data-semester="${sem}"]`);
        
        console.log('Courses found for semester', sem, ':', courseMarksElements.length);
        
        if (courseMarksElements.length === 0) {
            document.getElementById('detailedOutput').innerHTML = getErrorHTML('Please generate courses for all semesters before calculating.');
            return;
        }
        
        let semesterGradePoints = 0;
        let semesterCreditHours = 0;
        
        courseMarksElements.forEach((markElement, index) => {
            const courseIndex = markElement.dataset.course;
            const courseName = document.querySelector(`.course-name[data-semester="${sem}"][data-course="${courseIndex}"]`);
            const creditsElement = document.querySelector(`.course-credits[data-semester="${sem}"][data-course="${courseIndex}"]`);
            
            if (!courseName || !creditsElement) {
                console.log('Missing elements for semester', sem, 'course', courseIndex);
                hasError = true;
                return;
            }
            
            const courseNameValue = courseName.value.trim();
            const marks = markElement.value;
            const credits = creditsElement.value;
            
            if (!courseNameValue) {
                console.log('Course name is empty for semester', sem, 'course', courseIndex);
                hasError = true;
                return;
            }
            
            const marksValidation = validateNumber(marks, 0, 100);
            const creditsValidation = validateNumber(credits, 1, 10);
            
            if (!marksValidation.isValid || !creditsValidation.isValid) {
                console.log('Validation failed for semester', sem, 'course', courseIndex);
                hasError = true;
                return;
            }
            
            const gradeInfo = getGradeFromMarks(marksValidation.value);
            const gradePoints = gradeInfo.ng * creditsValidation.value;
            
            console.log(`Semester ${sem}, Course ${courseIndex}: ${courseNameValue} - Marks: ${marksValidation.value}, Grade: ${gradeInfo.lg}, Points: ${gradeInfo.ng}`);
            
            courses.push({
                name: courseNameValue,
                marks: marksValidation.value,
                credits: creditsValidation.value,
                grade: gradeInfo.lg,
                gradePoints: gradeInfo.ng,
                totalGradePoints: gradePoints
            });
            
            semesterGradePoints += gradePoints;
            semesterCreditHours += creditsValidation.value;
        });
        
        if (hasError) {
            document.getElementById('detailedOutput').innerHTML = getErrorHTML('Please fill all course details correctly. All fields are required.');
            return;
        }
        
        const semesterGPA = semesterCreditHours > 0 ? roundTo(semesterGradePoints / semesterCreditHours) : 0;
        
        console.log(`Semester ${sem} GPA: ${semesterGPA}`);
        
        semesters.push({
            number: sem,
            courses: courses,
            gpa: semesterGPA,
            gradePoints: semesterGradePoints,
            creditHours: semesterCreditHours
        });
        
        totalGradePoints += semesterGradePoints;
        totalCreditHours += semesterCreditHours;
    }
    
    const finalCGPA = totalCreditHours > 0 ? roundTo(totalGradePoints / totalCreditHours) : 0;
    
    console.log('Final CGPA:', finalCGPA);
    
    let html = getSuccessHTML('CGPA calculated successfully!');
    html += `
        <div class="output-card">
            <div class="output-title">📋 Academic Transcript</div>
            
            <div class="student-summary">
                <div class="student-summary-item">
                    <div class="student-summary-label">Student Name</div>
                    <div class="student-summary-value">${studentName}</div>
                </div>
                <div class="student-summary-item">
                    <div class="student-summary-label">Roll Number</div>
                    <div class="student-summary-value">${studentRoll}</div>
                </div>
                <div class="student-summary-item">
                    <div class="student-summary-label">Total Credit Hours</div>
                    <div class="student-summary-value">${totalCreditHours}</div>
                </div>
                <div class="student-summary-item">
                    <div class="student-summary-label">Final CGPA</div>
                    <div class="student-summary-value">${finalCGPA.toFixed(2)} / 4.00</div>
                </div>
            </div>
            
            <div class="transcript">
                <table>
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Grade Point</th>
                            <th>Credit Hours</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    semesters.forEach((semester) => {
        let isFirstCourse = true;
        
        semester.courses.forEach((course) => {
            html += '<tr>';
            
            if (isFirstCourse) {
                html += `<td rowspan="${semester.courses.length + 1}"><strong>Semester ${semester.number}</strong></td>`;
                isFirstCourse = false;
            }
            
            html += `
                <td>${course.name}</td>
                <td class="text-center">${course.marks}</td>
                <td class="text-center"><strong>${course.grade}</strong></td>
                <td class="text-right">${course.gradePoints.toFixed(2)}</td>
                <td class="text-center">${course.credits}</td>
            </tr>
            `;
        });
        
        html += `
            <tr class="semester-gpa-row">
                <td colspan="3"><strong>Semester ${semester.number} SGPA</strong></td>
                <td colspan="2"></td>
                <td class="text-right"><strong>${semester.gpa.toFixed(2)} / 4.00</strong></td>
            </tr>
        `;
    });
    
    html += `
        <tr class="final-cgpa-row">
            <td colspan="4"><strong>Final CGPA</strong></td>
            <td class="text-right"><strong>Total Credit Hours: ${totalCreditHours}</strong></td>
            <td class="text-right"><strong>${finalCGPA.toFixed(2)} / 4.00</strong></td>
        </tr>
    `;
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    document.getElementById('detailedOutput').innerHTML = html;
    
    // Show download button
    const downloadBtn = document.getElementById('downloadDetailedBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'block';
    }
}

function resetDetailedForm() {
    document.getElementById('semesterCount').value = '1';
    document.getElementById('studentName').value = '';
    document.getElementById('studentRoll').value = '';
    document.getElementById('semesterInputsContainer').innerHTML = '';
    clearTabContent('detailedOutput');
    
    // Hide download button
    const downloadBtn = document.getElementById('downloadDetailedBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
}

// 2. SEMESTER GPA CALCULATOR

function generateCourses() {
    console.log('generateCourses called');
    const courseCount = parseInt(document.getElementById('courseCount').value);
    
    const validation = validateNumber(courseCount, 1, 20);
    if (!validation.isValid) {
        alert('Please enter a valid number of courses (1-20)');
        return;
    }
    
    const container = document.getElementById('courseInputsContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= validation.value; i++) {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-block';
        courseItem.innerHTML = `
            <div class="course-header">📖 Course ${i}</div>
            <div class="form-group">
                <label for="course${i}Name">Course Name</label>
                <input type="text" id="course${i}Name" placeholder="e.g., Programming Fundamentals">
            </div>
            <div class="form-group-row">
                <div class="form-group">
                    <label for="course${i}Marks">Marks (0-100)</label>
                    <input type="number" id="course${i}Marks" min="0" max="100" placeholder="0-100">
                </div>
                <div class="form-group">
                    <label for="course${i}Credits">Credit Hours</label>
                    <input type="number" id="course${i}Credits" min="1" max="10" placeholder="1-10">
                </div>
            </div>
        `;
        container.appendChild(courseItem);
    }
    console.log('Courses generated');
}

function calculateSemesterGPA() {
    console.log('calculateSemesterGPA called');
    clearTabContent('semesterOutput');
    
    const courseCount = parseInt(document.getElementById('courseCount').value);
    const courses = [];
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let hasError = false;
    
    for (let i = 1; i <= courseCount; i++) {
        const courseName = document.getElementById(`course${i}Name`).value.trim();
        const marks = document.getElementById(`course${i}Marks`).value;
        const credits = document.getElementById(`course${i}Credits`).value;
        
        if (!courseName) {
            hasError = true;
            break;
        }
        
        const marksValidation = validateNumber(marks, 0, 100);
        const creditsValidation = validateNumber(credits, 1, 10);
        
        if (!marksValidation.isValid || !creditsValidation.isValid) {
            hasError = true;
            break;
        }
        
        const gradeInfo = getGradeFromMarks(marksValidation.value);
        const gradePoints = gradeInfo.ng * creditsValidation.value;
        
        courses.push({
            name: courseName,
            marks: marksValidation.value,
            credits: creditsValidation.value,
            grade: gradeInfo.lg,
            gradePoints: gradeInfo.ng,
            totalGradePoints: gradePoints
        });
        
        totalGradePoints += gradePoints;
        totalCreditHours += creditsValidation.value;
    }
    
    if (hasError || courses.length === 0) {
        document.getElementById('semesterOutput').innerHTML = getErrorHTML('Please fill all course details correctly.');
        return;
    }
    
    const semesterGPA = totalCreditHours > 0 ? roundTo(totalGradePoints / totalCreditHours) : 0;
    
    let html = getSuccessHTML('Semester GPA calculated successfully!');
    html += `
        <div class="output-card">
            <div class="output-title">📊 Semester GPA Results</div>
            
            <div class="gpa-table">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Grade</th>
                            <th>Grade Point</th>
                            <th>Credit Hours</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    courses.forEach((course) => {
        html += `
            <tr>
                <td><strong>${course.name}</strong></td>
                <td class="text-center">${course.marks}</td>
                <td class="text-center"><strong>${course.grade}</strong></td>
                <td class="text-right">${course.gradePoints.toFixed(2)}</td>
                <td class="text-center">${course.credits}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
            
            <div class="result-summary">
                <div class="result-item">
                    <div class="result-item-label">Total Credit Hours</div>
                    <div class="result-item-value">${totalCreditHours}</div>
                </div>
                <div class="result-item">
                    <div class="result-item-label">Total Grade Points</div>
                    <div class="result-item-value">${totalGradePoints.toFixed(2)}</div>
                </div>
                <div class="result-item">
                    <div class="result-item-label">Semester GPA</div>
                    <div class="result-item-value" style="color: var(--success-color);">${semesterGPA.toFixed(2)} / 4.00</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('semesterOutput').innerHTML = html;
    
    // Show download button
    const downloadBtn = document.getElementById('downloadSemesterBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'block';
    }
}

function resetSemesterForm() {
    document.getElementById('courseCount').value = '1';
    document.getElementById('courseInputsContainer').innerHTML = '';
    clearTabContent('semesterOutput');
    
    // Hide download button
    const downloadBtn = document.getElementById('downloadSemesterBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
}

// 3. PREVIOUS GPA-BASED CGPA CALCULATOR

function generatePreviousSemesters() {
    console.log('generatePreviousSemesters called');
    const semesterCount = parseInt(document.getElementById('prevSemesterCount').value);
    
    const validation = validateNumber(semesterCount, 1, 20);
    if (!validation.isValid) {
        alert('Please enter a valid number of semesters (1-20)');
        return;
    }
    
    const container = document.getElementById('previousSemesterInputsContainer');
    if (!container) {
        alert('Error: previousSemesterInputsContainer not found');
        return;
    }
    
    container.innerHTML = '';
    
    for (let i = 1; i <= validation.value; i++) {
        const semesterItem = document.createElement('div');
        semesterItem.className = 'previous-semester-block';
        semesterItem.innerHTML = `
            <div class="previous-semester-header">📚 Semester ${i}</div>
            <div class="previous-semester-item-row">
                <div class="form-group">
                    <label for="prevSemester${i}GPA">Semester GPA</label>
                    <input type="number" id="prevSemester${i}GPA" min="0" max="4" step="0.01" placeholder="0.00-4.00">
                </div>
                <div class="form-group">
                    <label for="prevSemester${i}Credits">Credit Hours</label>
                    <input type="number" id="prevSemester${i}Credits" min="1" max="100" placeholder="1-100">
                </div>
            </div>
        `;
        container.appendChild(semesterItem);
    }
    console.log('Previous semesters generated');
}

function calculatePreviousGPACGPA() {
    console.log('calculatePreviousGPACGPA called');
    clearTabContent('previousGpaOutput');
    
    const semesterCount = parseInt(document.getElementById('prevSemesterCount').value);
    const semesters = [];
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    let hasError = false;
    
    for (let i = 1; i <= semesterCount; i++) {
        const gpa = document.getElementById(`prevSemester${i}GPA`).value;
        const credits = document.getElementById(`prevSemester${i}Credits`).value;
        
        console.log(`Semester ${i}: GPA=${gpa}, Credits=${credits}`);
        
        const gpaValidation = validateNumber(gpa, 0, 4);
        const creditsValidation = validateNumber(credits, 1, 100);
        
        if (!gpaValidation.isValid || !creditsValidation.isValid) {
            console.log(`Validation failed for semester ${i}`);
            hasError = true;
            break;
        }
        
        const gradePoints = gpaValidation.value * creditsValidation.value;
        
        semesters.push({
            number: i,
            gpa: gpaValidation.value,
            credits: creditsValidation.value,
            gradePoints: gradePoints
        });
        
        totalGradePoints += gradePoints;
        totalCreditHours += creditsValidation.value;
    }
    
    if (hasError) {
        document.getElementById('previousGpaOutput').innerHTML = getErrorHTML('Please fill all semester details correctly. GPA must be 0-4.00 and credit hours must be 1-100.');
        return;
    }
    
    if (totalCreditHours === 0) {
        document.getElementById('previousGpaOutput').innerHTML = getErrorHTML('Please enter at least one semester data.');
        return;
    }
    
    const finalCGPA = roundTo(totalGradePoints / totalCreditHours);
    
    console.log('Final CGPA:', finalCGPA);
    
    let html = getSuccessHTML('CGPA calculated successfully!');
    html += `
        <div class="output-card">
            <div class="output-title">📊 CGPA Calculation Results</div>
            
            <div class="gpa-table">
                <table>
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>GPA</th>
                            <th>Credit Hours</th>
                            <th>Grade Points</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    semesters.forEach((semester) => {
        html += `
            <tr>
                <td><strong>Semester ${semester.number}</strong></td>
                <td class="text-center">${semester.gpa.toFixed(2)}</td>
                <td class="text-center">${semester.credits}</td>
                <td class="text-right">${semester.gradePoints.toFixed(2)}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
            
            <div class="result-summary">
                <div class="result-item">
                    <div class="result-item-label">Total Credit Hours</div>
                    <div class="result-item-value">${totalCreditHours}</div>
                </div>
                <div class="result-item">
                    <div class="result-item-label">Total Grade Points</div>
                    <div class="result-item-value">${totalGradePoints.toFixed(2)}</div>
                </div>
                <div class="result-item">
                    <div class="result-item-label">Final CGPA</div>
                    <div class="result-item-value" style="color: var(--danger-color);">${finalCGPA.toFixed(2)} / 4.00</div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('previousGpaOutput').innerHTML = html;
    
    // Show download button
    const downloadBtn = document.getElementById('downloadPreviousBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'block';
    }
}

function resetPreviousForm() {
    document.getElementById('prevSemesterCount').value = '1';
    document.getElementById('previousSemesterInputsContainer').innerHTML = '';
    clearTabContent('previousGpaOutput');
    
    // Hide download button
    const downloadBtn = document.getElementById('downloadPreviousBtn');
    if (downloadBtn) {
        downloadBtn.style.display = 'none';
    }
}

// ARROW KEY NAVIGATION


//   Enable arrow key navigation between input fields
 
function setupArrowKeyNavigation() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const activeElement = document.activeElement;
            
            // Check if currently focused element is an input
            if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'SELECT')) {
                e.preventDefault();
                
                // Get all focusable elements
                const focusableElements = document.querySelectorAll('input, select, button, [tabindex]:not([tabindex="-1"])');
                const focusableArray = Array.from(focusableElements);
                const currentIndex = focusableArray.indexOf(activeElement);
                
                if (currentIndex !== -1) {
                    let nextIndex;
                    
                    if (e.key === 'ArrowDown') {
                        // Move to next field
                        nextIndex = (currentIndex + 1) % focusableArray.length;
                    } else {
                        // Move to previous field
                        nextIndex = (currentIndex - 1 + focusableArray.length) % focusableArray.length;
                    }
                    
                    focusableArray[nextIndex].focus();
                    
                    // Select text in input fields
                    if (focusableArray[nextIndex].tagName === 'INPUT') {
                        focusableArray[nextIndex].select();
                    }
                }
            }
        }
    });
}

// PAGE INITIALIZATION

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing calculator');
    
    // Initialize input values
    const semesterCountInput = document.getElementById('semesterCount');
    const courseCountInput = document.getElementById('courseCount');
    const prevSemesterCountInput = document.getElementById('prevSemesterCount');
    
    if (semesterCountInput) semesterCountInput.value = '1';
    if (courseCountInput) courseCountInput.value = '1';
    if (prevSemesterCountInput) prevSemesterCountInput.value = '1';
    
    console.log('Input values initialized');
    
    // TAB NAVIGATION - Attach event listeners after DOM is ready
    
    const navTabs = document.querySelectorAll('.nav-tab');
    console.log('Found', navTabs.length, 'nav tabs');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            console.log('Switching to tab:', tabName);
            
            // Remove active class from all tabs and panes
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            this.classList.add('active');
            const pane = document.getElementById(tabName);
            if (pane) {
                pane.classList.add('active');
            } else {
                console.error('Tab pane not found:', tabName);
            }
        });
    });
    
    // ARROW KEY NAVIGATION - Setup keyboard navigation
    setupArrowKeyNavigation();
    
    console.log('Calculator initialized successfully');
});
