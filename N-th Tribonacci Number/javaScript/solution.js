/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let first = 0;
  let second = 1;
  let third = 1;
  
  for(let i = 3; i <= n; i++) {
    let sum = first + second + third;
    first = second;
    second = third;
    third = sum;
  }
  
  if (n === 0) return first;
  if (n === 1) return second;
  
  return third;
};