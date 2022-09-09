/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

const split = statement.split();
const slicer = statement.slice(1,7);
const subStr = statement.substring(0,19);  //  and dogs (19,27);
statement = subStr;

console.log(statement.length);  // 27 long
console.log(slicer); //
console.log(statement); //
console.log(split); //
/* EXPECTED OUTPUT 

  "I like programming"
  
*/
