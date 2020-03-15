/*

Complete the functions below that finds the largest prime factor of a number. 
The function that takes the number as input and return the largest prime factor as output. 
*/
let isPrime = function(n) {
  // function to check whether the number is prime or not.
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % 2 === 0) {
        return false;
      }
    }
    return false;
  }
};
let getLargestPrimeFactor = function(n) {
  // function to find the largest prime factor
  let max = 1;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (isPrime(i)) {
      max = i;
    }
  }
  return max;
};
console.log(getLargestPrimeFactor(9));
