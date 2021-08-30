/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  if (n === 0) return [0];
  let dp = new Array(n+1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    let div = parseInt(i/2);
    let rem = i%2;
    dp[i] = dp[div] + dp[rem];
  }
  
  return dp;
};