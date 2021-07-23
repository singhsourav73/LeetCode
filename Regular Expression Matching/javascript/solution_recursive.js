/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
      if (!p) {
        return s === "";
      }
      
      var first_match = (s &&
                         (p.charAt(0) == s[0] || p.charAt(0) == '.'));
      
      if (p.length >= 2 && p.charAt(1) == '*') {
        return (isMatch(s, p.substring(2)) || (first_match && isMatch(s.substring(1), p)));
      } else {
        return first_match && isMatch(s.substring(1), p.substring(1));
      }
};