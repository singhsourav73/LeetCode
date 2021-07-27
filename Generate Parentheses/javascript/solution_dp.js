/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    backtrack(n, ans);
    return ans;
};

var backtrack = function(max, ans = [], cur = "", open = 0, close = 0) {
  if (cur.length == max * 2) {
    ans.push(cur);
    return;
  }
  
  if (open < max) {
    backtrack(max, ans, cur + "(", open + 1, close);
  }
  
  if (close < open) {
    backtrack(max, ans, cur + ")", open, close + 1);
  }
}