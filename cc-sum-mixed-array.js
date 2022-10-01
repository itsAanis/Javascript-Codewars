

// given an array of numbers and strings
// need to find the sum of all of them
// so loop and add them all together and return a number.

function sumMix(x){
let curr = 0
for(let i = 0; i<x.length; i++) {
 curr += Number(x[i])
}
return curr
}
console.log(sumMix(['5', '0', "9", "3", "2", "1", '9', "6", "7"]))
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])