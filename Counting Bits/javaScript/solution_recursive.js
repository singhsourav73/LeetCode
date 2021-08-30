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
    getArrayBits(i, dp);
  }
  return dp;
};

var getArrayBits = function(n, dp) {
  if (dp[n] !== -1) return dp[n];
  
  dp[n] = getArrayBits(parseInt(n/2), dp) + getArrayBits(n%2, dp);
  return dp[n];
}