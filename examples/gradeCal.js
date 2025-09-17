// Grade Calculator: Calculate average grades and assign letter grades using loops.
const students = [
    { name: 'Alice', marks: [85, 90, 78] },
    { name: 'Bob', marks: [70, 60, 75] },
    { name: 'Charlie', marks: [95, 100, 98] },
    { name: 'David', marks: [50, 40, 60] },
];

function calAvgGrade(stds) {
    const grades = []
    for (let i = 0; i < stds.length; i++) {
        let avg = 0;
        let grade = ''
        const student = stds[i];
        let totalMarks = 0
        for (let j = 0; j < student.marks.length; j++) {
            const mark = student.marks[j];
            totalMarks += mark
        }
        avg = (totalMarks / (student.marks.length))

        if (avg > 90) {
            grade = 'A'
        } else if (avg > 70) {
            grade = 'B'
        } else if (avg > 50) {
            grade = 'C'
        } else {
            grade = 'FAIL'
        }
        const std = {
            name: student.name,
            marks: student.marks,
            avg: avg.toFixed(2),
            grade: grade,
        }
        grades.push(std)
    }

    return console.table(grades)
}

calAvgGrade(students)