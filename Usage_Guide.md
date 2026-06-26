# CGPA Calculator - Troubleshooting & Usage Guide

## 🚀 Quick Start

1. Download the files:
   - `index.html`
   - `style.css`
   - `script.js`

2. Save them in the same folder

3. Open `index.html` in your web browser

4. The calculator is ready to use!

---

## 📋 How to Use Each Calculator

### 1. Detailed CGPA Calculator (Semester-wise)

Step 1: Enter Student Name (optional) and Roll Number (optional)

Step 2: Enter the **Number of Semesters** (e.g., 4, 6, 8)
- Click "Generate Semesters" button

Step 3: For each semester:
- Enter the **Number of Courses** (e.g., 5)
- Click **"Generate Courses"** button

Step 4: Fill in for each course:
- Course Name (e.g., "Programming Fundamentals")
- Marks (0-100)
- Credit Hours (1-10)

Step 5: Click **"Calculate CGPA"

Result: You'll see a professional transcript with:
- All semesters and courses in one table
- Semester GPA (SGPA) for each semester
- Final CGPA

---

### 2. Semester GPA Calculator (Single Semester)

Step 1: Enter the **Number of Courses** in one semester

Step 2: Click "Generate Courses"

Step 3: Fill in for each course:
- Course Name
- Marks (0-100)
- Credit Hours (1-10)

Step 4: Click "Calculate GPA"

Result: You'll see:
- Course details table
- Total credit hours
- Total grade points
- Semester GPA

---

### 3. CGPA from Previous Semesters

Step 1: Enter the Number of Previous Semesters

Step 2: Click "Generate Semesters"

Step 3: For each semester, enter:
- Semester GPA (0.00 - 4.00, e.g., 3.50)
- Credit Hours (1-100)

Step 4: Click "Calculate CGPA"

Result: You'll see:
- All semesters with GPA and credit hours
- Total credit hours
- Final CGPA

---

## ✅ Validation Rules

| Field | Min | Max | Required |
|-------|-----|-----|----------|
| Semesters | 1 | 20 | Yes |
| Courses per Semester | 1 | 15 | Yes |
| Marks | 0 | 100 | Yes |
| Credit Hours | 1 | 10 | Yes |
| Previous GPA | 0.00 | 4.00 | Yes |
| Course Name | - | - | Yes |

---

## 🐛 Troubleshooting

### Problem: "Generate Semesters" button doesn't work

Solution:
1. Make sure you entered a number (1-20) in the field
2. Open browser console (F12 key) to see error messages
3. Check that all three files are in the same folder

### Problem: After clicking "Generate", no input fields appear

Solution:
1. Check the browser console (F12) for errors
2. Make sure JavaScript is enabled in your browser
3. Try refreshing the page
4. Try a different browser

### Problem: "Calculate" button doesn't show results

Solution:
1. Make sure ALL course fields are filled (Name, Marks, Credits)
2. Check that marks are 0-100
3. Check that credit hours are 1-10
4. Make sure you clicked "Generate" first

### Problem: Results show wrong calculations

Solution:
1. Check that all fields have correct values
2. Make sure you're using the right calculator for your data
3. Verify the University of Haripur grading scale matches your requirements

---

## 🔍 How to Check Browser Console for Errors

### Chrome/Edge/Firefox:
1. Press F12 or Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
2. Go to the Console tab
3. Look for red error messages
4. Check the log messages (they start with "DOM Content Loaded")

### What to look for:
- Errors in red indicate JavaScript problems
- Console messages show what's happening
- Example: "generateSemesters called" means the function was triggered

---

## 📊 Grading Scale Used

Your calculator uses the exact University of Haripur grading scale:

| Marks | Grade | Points |
|-------|-------|--------|
| 85+ | A | 4.00 |
| 80-84 | A- | 3.50-3.90 |
| 75-79 | B+ | 3.08-3.42 |
| 71-74 | B | 2.75-3.00 |
| 68-70 | B- | 2.50-2.67 |
| 64-67 | C+ | 2.17-2.42 |
| 61-63 | C | 1.92-2.08 |
| 58-60 | C- | 1.67-1.83 |
| 54-57 | D+ | 1.33-1.58 |
| 50-53 | D | 1.08-1.25 |
| <50 | F | 0.00 |

---

## 💡 Tips for Best Results

1. Fill all fields - Empty fields will cause validation errors
2. Use realistic values - Marks 0-100, Credits 1-10
3. Check your work - Verify numbers before calculating
4. Save your data - Take screenshots of results before closing
5. Test with sample data - Try with known values first

---

## 📱 Responsive Design

The calculator works on:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Tablets (iPad, Android tablets)
- ✅ Mobile phones (iOS, Android)
- ✅ All screen sizes

Just open `index.html` in any browser!

---

## 🔧 Technical Details

- No server needed - Everything runs in your browser
- No internet required - Works offline
- No data saved - All calculations are local
- Fast - Instant results
- Accurate - Uses exact University of Haripur grading scale

---

## ❓ FAQ

Q: Can I use this offline?
A: Yes! Once downloaded, you can use it offline without any internet.

Q: Is my data saved?
A: No, calculations are temporary. Close the browser and data is gone (unless you screenshot).

Q: Can I modify the grading scale?
A: The grading scale is locked to preserve your original University of Haripur system.

Q: Why do I need to click "Generate" before entering data?
A: This creates the input fields dynamically based on the number you enter.

Q: Can I calculate multiple semesters at once?
A: Yes! Use the "Detailed CGPA" tab to enter and calculate all semesters together.

Q: What if I make a mistake?
A: Click "Reset" to clear everything and start again.

---

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Open browser console (F12) and look for error messages
3. Verify all files are in the same folder
4. Try a different browser (Chrome, Firefox, Safari)
5. Clear browser cache and refresh the page

---

## ✨ Version Information

- Calculator Type: Advanced CGPA Dashboard System
- Grading System: University of Haripur (Exact)
- Responsive: Yes (Mobile, Tablet, Desktop)
- Theme: Modern Professional
- Status: Production Ready

---

Enjoy using your Advanced CGPA Calculator! 🎓
