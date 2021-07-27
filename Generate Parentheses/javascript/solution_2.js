/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    backtrack(ans, "", n, n);
    return ans;
};

var backtrack = function(ans, cur, open, close) {
  if (open === 0 && close === 0) {
    ans.push(cur);
    return;
  }
  
  if (open > 0)
    backtrack(ans, cur + "(", open - 1, close);
  
  if (close > open)  
    backtrack(ans, cur + ")", open, close - 1);
}