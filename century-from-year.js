/* The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20  */


// if a year is between 1 and 100 its year 1
// year 2 is 101 to 200.
// formula divide year by 100 if its not whole number +1 that its year

function century(year) {
 let round = year / 100
 return round > Math.floor(round) ? Math.floor(round) +1 : Math.floor(round)
    
  }

  console.log(century(1601))