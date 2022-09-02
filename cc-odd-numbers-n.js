/*    
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!

*/
// loop from n condiiton if %2 remainder is not 0
// +1 to counter.

function oddCount(n) {
 let t = Math.round(n/2)
    let counter = 0   
    for(let i = t; i >= 0; i--) {
     if ( i % 2 !== 0) {
        counter += 1
     }
    }
    return (counter*2)
}
console.log(oddCount(11))







/*
function oddCount(n , c){
c===0
if (n === 0) {
return c }
else if (  n % 2 !== 0 ) {
c += 1  
return oddCount(n-1, c===c)
}
else {return oddCount(n-1, c===c)}

}

console.log(oddCount(21))  */