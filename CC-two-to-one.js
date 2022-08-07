/* Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters
 - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */


function longest(s1, s2) {
s1 = s1.split('')
s2 = s2.split('')
let s3 = []
s3.push(...s1,...s2)
let pls = new Set(s3.sort())
return Array.from(pls).join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")) 