// length is is x*n
//go up in multiples off x i


function countBy(x, n) {
    let z = [];
for(let i = 1 ; i <= (x*n); i++ ) {
 if (i % x == 0) {
    z.push(i)}
}
return z
}
console.log(countBy(1,10)) //=== [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)) //=== [2,4,6,8,10]