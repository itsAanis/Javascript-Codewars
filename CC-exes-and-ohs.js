/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

// check if string has the same amount of x and o's
// if it has neither should return true aswell.
//someway gonna have to loop through
// condition tests to see if amounts match
// condition initially if there is none.


function XO(str) {
let str1 = str.toLowerCase()
let xcounter = 0
let ocounter = 0
if(str1.indexOf('x')== -1 && str1.indexOf('o')== -1 ) {
    return true
}
else {
 for(let i =0 ; i < str1.length; i++) {
    if(str1[i] == 'x') {
        xcounter += 1
    }
    if (str1[i] == 'o') {
        ocounter += 1
    }
 }
}
 return xcounter == ocounter
}
console.log(XO("zzoo"))
console.log(XO("zpzpzpp"))
console.log(XO("ooxx"))
console.log(XO("xxxx"))
