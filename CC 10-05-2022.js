//question completed https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

/* Question 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24   */



function grow(x){
    let multiplied = 1
    for ( let i = 0; i<x.length; i++)
      {multiplied *= x[i] } 
      return multiplied
      
    }

     // thought i'd do it without the array reduce method