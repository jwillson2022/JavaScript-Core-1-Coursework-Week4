/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];
//let group2 =  ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

let groupIsOnlyStudents  = students.every(elem => group.includes(elem));
// complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");  // false
} else {
  console.log("The group does not contain only students"); // true
}

/* EXPECTED RESULT */
console.log(groupIsOnlyStudents); //argument
// The group does not contain only students
