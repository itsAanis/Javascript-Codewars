//question completed https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

/* Question 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24   */



function grow(x){
    for ( let i = 0; i<x.length; i++)
      {let multiplied = 1
          multiplied *= x.push[i]
      } return multiplied
      }
     let x = [1, 2, 3, 4]

     // thought i'd do it without the array reduce method