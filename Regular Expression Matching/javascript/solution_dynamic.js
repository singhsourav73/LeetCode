/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p, i = 0, j = 0, memo = {}) {
    const key = i + "-" + j;
    if (key in memo) return memo[key];

    if (!p) {
      return s === "";
    }
    
    var first_match = (s &&
                       (p.charAt(0) == s[0] || p.charAt(0) == '.'));
    
    if (p.length >= 2 && p.charAt(1) == '*') {
      memo[key] = (isMatch(s, p.substring(2), i , j + 2, memo) || (first_match && isMatch(s.substring(1), p, i+1, j, memo)));
      return memo[key];
    } else {
      memo[key] = first_match && isMatch(s.substring(1), p.substring(1), i+1, j+1, memo);
      return memo[key];
    }
};