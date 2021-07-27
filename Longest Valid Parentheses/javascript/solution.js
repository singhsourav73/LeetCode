/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  let dp = new Array(s.length).fill(0);
  
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i-1] === '(') {
        dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
      } else if ( s[i - dp[i-1] - 1] === '(') {
        dp[i] = dp[i-1] + ((i - dp[i-1]) >= 2 ? dp[i - dp[i-1] - 2] : 0) + 2;
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
  }
  return maxLen;
};