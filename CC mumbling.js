

/*This time no story, no theory. The examples below show you how to write 
function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/
// turn to array then loop through repeating by the index number. then finally join 
// each element in array with '-' by turning into string.


function accum(s) {

return s.split('')
.map((element, index) =>(element.toUpperCase() + element.toLowerCase().repeat(index)))
.join('-') 
}

console.log (accum("abcd"))  

