

function first5(array) {
const newArray = array.slice(0,5);
return newArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const stringArray =["a","b", "c", "d", "e", "f"]

console.log(first5(numbers));
console.log(first5(stringArray));


function sortArray(array2) {
  const newArray2 = array2.sort();
  return newArray2;
}
const sortMe = ["a", "n", "c", "e", "z", "f"];

console.log(sortArray(sortMe));


function tidyUpString(array3) {
  for (let i = 0; i< array3.length; i++) {
 let tidyArray = array3[i].trim().toLowerCase().replaceAll("/","");
console.log(tidyArray)
} 
 
}
const tidyThis = [
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ];

console.log(tidyUpString(tidyThis));