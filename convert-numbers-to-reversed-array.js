/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
   */


//pseudo code 
// turn to string then array. reverse then use map method to turn them into numbers.

function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }
  