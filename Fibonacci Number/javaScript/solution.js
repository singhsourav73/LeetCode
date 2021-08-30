/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, dp = {}) {
  if (n in dp) return dp[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  dp[n] = fib(n-1) + fib(n-2);
  return dp[n];
};