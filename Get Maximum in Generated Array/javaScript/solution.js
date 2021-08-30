/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  let num = [];
  let max = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  num[0] = 0;
  num[1] = 1;
  
  for (let i = 1; i <= n; i++) {
    num[2*i] = num[i];
    max = Math.max(num[2*i], max);
    if (2*i === n) return max;
    
    num[2*i + 1] = num[i] + num[i+1];
    max = Math.max(num[2*i+1], max);
    if (2*i + 1 === n) return max;
  }
  
};