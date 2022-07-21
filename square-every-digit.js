/*Welcome. In this kata, you are asked to square every digit of a number
 and concatenate them.

For example, if we run 9119 through the function, 811181 will come out,
 because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer  */

//pseudo code
// will need to convert number to string in order to loop through
// then to array to do power^2
// use join to concat and covert back to string.

function squareDigits(num){
    let string = num.toString() //convert to string
    let results = []
    for (let i = 0; i < string.length; i++){
        results[i] = string[i] * string[i] //provide new string value array index
    }
    return Number(results.join('')) //converts array to string
}


