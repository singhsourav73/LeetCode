/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
    }
    
    return n === 1? 1: second;
  };