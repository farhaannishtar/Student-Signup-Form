let students = [];
let count = 0;

let enterName = (firstName, lastName, studentRollNumber, studentMarks, studentCollege) => {
    enrollButton.textContent = "Enroll Student";
    console.log(firstName)
    let person = register(firstName, lastName, studentRollNumber, studentMarks, studentCollege);
    students[count] = person;

    uName.value = "";
    uLName.value = "";
    rollNumber.value = "";
    marks.value = "";
    college.value = "";

    console.log(students);
    count++;
}

let averageMarks = () => {
    marksButton.textContent = "Average Marks";
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i] === undefined) {
            continue;
        }
        sum += Number(students[i].marks);
    }
    console.log('Average marks for students are: ' + (sum / students.length));
}

let searchStudent = studentRollNumber => {
    searchStudentButton.textContent = "Search Student";
    for (let i = 0; i < students.length; i++) {
        if (students[i] === undefined) {
            continue;
        }
        if (students[i].rollNumber === studentRollNumber) {
            console.log(`Student with roll number ${studentRollNumber}`);
            console.log(students[i]);
            break;
        }
    }
}

let deleteStudent = studentRollNumber => {
    deleteStudentButton.textContent = 'Delete Student';
    for (let i = 0; i < students.length; i++) {
        if (students[i] === undefined) {
            continue;
        }
        if (students[i].rollNumber === studentRollNumber) {
            delete students[i];
            console.log(`Here are the new list of students:`);
            console.log(students);
        }
    } 
}

let updateStudent = (updateRollNumber, updateFirstName, updateLastName, updateMarks, updateCollege) => {
    updateStudentButton.textContent = 'Update Student';

    for (let i = 0; i <= students.length; i++) {
        if (students[i] === undefined) {
            continue;
        }
        if (students[i].rollNumber === updateRollNumber) {
            students[i].firstName = updateFirstName;
            students[i].lastName = updateLastName;
            students[i].studentMarks = updateMarks;
            students[i].studentCollege = updateCollege;
            console.log(`Here are the new list of students:`);
            console.log(students);
        }
    }
}


let uName = document.getElementById("fname");
let uLName = document.getElementById("lname");
let rollNumber = document.getElementById("rollNumber");
let marks = document.getElementById("marks");
let college = document.getElementById("college");

let enrollButton = document.getElementById("addStudent");
let marksButton = document.getElementById('averageMarks');

let searchStudentButton = document.getElementById('searchStudent');
let searchRollNumber = document.getElementById('searchRollNumber');

let deleteStudentButton = document.getElementById('deleteStudent');
let deleteRollNumber = document.getElementById('deleteRollNumber');

let updateStudentButton = document.getElementById('updateStudent');
let updateFirstName = document.getElementById("updateFirstName");
let updateLastName = document.getElementById("updateLastName");
let updateRollNumber = document.getElementById("updateRollNumber");
let updateMarks = document.getElementById("updateMarks");
let updateCollege = document.getElementById("updateCollege");


// enrollButton.addEventListener('click', enterName());
enrollButton.addEventListener('click', () => {
    enterName(uName.value, uLName.value, rollNumber.value, marks.value, college.value);
});

// marksButton.addEventListener('click', averageMarks);
marksButton.addEventListener('click', () => {
    averageMarks();
});

searchStudentButton.addEventListener('click', searchStudent(searchRollNumber.value));
// searchStudentButton.addEventListener('click', () => {
//     searchStudent(searchRollNumber.value);
// });


// deleteStudentButton.addEventListener('click', deleteStudent);
deleteStudentButton.addEventListener('click', () => {
    deleteStudent(deleteRollNumber.value);
});

// updateStudentButton.addEventListener('click', updateStudent);
updateStudentButton.addEventListener('click', () => {
    updateStudent(updateRollNumber.value, updateFirstName.value, updateLastName.value, updateMarks.value, updateCollege.value);
});