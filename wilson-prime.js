function amIWilson(P) {
    return (factorial(P-1) + 1) / Math.pow(P, 2) % 1 === 0;
  }
  
  function factorial(n) {
    if  (n == 0) return 1
    else return n * factorial(n-1);
  }

  // works to a point