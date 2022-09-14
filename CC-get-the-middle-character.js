
function getCount(str) {
    let counter = ""
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i <str.length; i++) {  
        for(let x =0; x<vowels.length; x++){
            if(str[i] === vowels[x]){
                counter += str[i] ;
            }
        }

  }   
  return counter
}
console.log(getCount('abracadabra')) 
//returns 5
/* outer loop runs then goes to inner loop.
inner loop will run till it comes out false.
then the other command in the outer loop will run which is new line
as outer loop isnt finished runs again with increment.
as inner loop restarts again at 1 we go again till its false.
in the end we will get 

/*
function getMiddle(s){
    let middle = Math.floor(s.length/2)
    console.log(middle)
    return s.length % 2 === 0 ? s.slice(middle-1, middle+1) : s.slice(middle, middle+1)
    //index is -1 behind so that gets middle number + number after it 
    // slice is exclusive so returns index for it.
    // will return dd index of 2and3  but the 3rd and 4th letter.
}

console.log(getMiddle("middle"))   */


