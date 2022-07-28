/* task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0   */


function sumOfDifferences(arr) {
    arr.reverse(arr.reduce((acc, curr) => acc - curr, 0))}

    


let arr = [-3, -2, -1]