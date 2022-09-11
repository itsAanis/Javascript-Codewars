/* Complete the function that accepts a string parameter, and reverses each 
word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"   */



function reverseWords(str) {
 let newString = str.split(" ")
  
 let something = newString.map((e,i) => Array.from(e).reverse() )

let somethingNew = []

for (i=0; i< something.length; i++) {
     somethingNew.push(something[i].join(''))
}
 
 return somethingNew.join(' ')


}

console.log(reverseWords("This is an example!"))