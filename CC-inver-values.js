
/*Given a set of numbers, return the additive inverse of each.
 Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.  */





// can do .map and if - turn positive and + turn -


function invert(array) {
   return array.map(x => {
        if (x=>0){
           return x*-1
        }
        else{ return Math.abs(x)}
    })

 }
 console.log(invert([1,-2,3,-4,5,0]))  

