/*
function isIsogram(str)  {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');
  
  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}*/


function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
  // into Set() all to uppercase. size finds the amount of elements in set.
  // if it == the length in string it returns it.
  // because if it isnt isogram it would have less element but if its should match
  //exactly