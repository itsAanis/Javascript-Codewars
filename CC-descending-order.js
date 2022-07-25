/* Your task is to make a function that can take any non-negative integer as an argument
 and return it with its digits in descending order. Essentially, rearrange the digits to 
 create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

//pseudo code 

//will need to put the string into array. then sort it descending order
// then back to string ---> integer


function descendingOrder(n){
n = n.toString()
        .split("")
        .sort((a,b) => b-a)
return Number(n.join(""))
// or could do return n = +n.join("")
}

console.log(descendingOrder(42145)) 

