 //after " " i need to capitalise the next letter.

// if i turn to array. then map uppercase after every " "

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){    
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }  

  String.prototype.toJadenCase = function() {
    return this
      .split(" ")
      .map(i => i.replace(i[0], i[0].toUpperCase()))
      .join(" ");
  };

  //this refers to the object String.prototype
  // splits wherever there is space to a array.
  //CHARAT targets the index provided will turn it into a capital but returns just that letter
  //.slice slices word from 1 index and adds it to the captial letter
  // this gets joined together to make a