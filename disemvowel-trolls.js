
//splits string to array.
//by chaining method takes its arguement for filter
//will use vowels and check if any match new array made from string
// if none match you get -1 then get joined together back to string and returned.



function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}


console.log(disemvowel("This website is for losers LOL!"))


