/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0;
    for (let i=0; i<s.length; i++) {
        let left = 0;
        for (let j=i; j<s.length; j++) {
            if (s[j] === '(') {
                left++;
            } else {
                left--;
                if (left < 0) {
                    break;
                }
            }
            if (left === 0) {
                max = Math.max(max, j-i+1);
            }
        }
    }
    return max;
};