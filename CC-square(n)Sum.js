// square each number. doesnt say if its array etc.
//but will turn to array.
//array method.map or something *by element
// then figure out how to return total of each either reduce or some other way.

function squareSum(numbers){

let num = Array.from(numbers)
if(num.length ===0 ){
    return 0
}
return num.map(e => Math.pow(e,2))
.reduce((c,ac) => c+ac,) 
}

console.log(squareSum([]))
squareSum([1, 2, 2])