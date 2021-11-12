// let names = ["Deepak","Kumar","A","B","C","D","E","F","G","H","I","J","K"];


// function range(start, end) {
//         let selectedStudent = [];
//         let count = 0;
//         for(start; start<end; start++) {   
            
//             let randomIndex = Math.random() * names.length;
//             selectedStudent[i] = names[randomIndex];
//             count++;
//         }
//         return selectedStudent;
// }



function register(firstName, lastName, rollNumber, marks, college) {
    let person = {
        firstName,
        lastName,
        rollNumber,
        marks,
        college
    }
    return person;
}

let person1 = register('l', 'l', 1, 1, 'l');
let person2 = register('m', 'm', 2, 2, 'm');
let person3 = register('n', 'n', 3, 3, 'n');
let person4 = register('o', 'o', 4, 4, 'o');

students1 = [person1, person2, person3, person4];

// for (let i = 0; i < students1.length; i++) {
//     if (students1[i].rollNumber === 2) {
//         students1.splice(i, 1);
//         // console.log(students1[i].rollNumber === 4);
//     }
//     console.log(students1[i].rollNumber);
// }
// // console.log(students1[2]); 

// //console.log(students1);

// console.log(students1[1])



let array1 = [1, 2, 3, 4];
delete array1[2];

console.log(array1);

for (let i = 0; i < array1.length; i++) {
    if (array1[i] === undefined) {
        console.log('Keep trying');
    }
}

for (num of array1) {
    console.log(num);
}
















// let deepak = register('Deepak', 'Kumar');
// for (let property in deepak) {
//     console.log(property);
//     console.log(typeof(property));
// }

// let personKeys = Object.keys(register());
// for(let n in personKeys) {
//     console.log(n, typeof(n));
// }
// console.log(Object.values(register("Deepak","Singh")));

