// will loop through a and check for value x 
// there is a method that already does this for arrays.


function check(a, x) {
return a.indexOf(x) !== -1 
}
console.log(check([66, 101], 66))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))