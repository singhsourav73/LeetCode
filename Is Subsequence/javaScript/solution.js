/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s) return true;
  for (let i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      return isSubsequence(s.substring(1), t.substring(i+1));
    }
  }
  return false;
};