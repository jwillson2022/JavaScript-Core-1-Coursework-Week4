/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let part1 = statement.substring(0,5);
let part2 = statement.substring(9,25);
result = part1.concat(part2);
console.log(result);
console.log(statement.length);
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
