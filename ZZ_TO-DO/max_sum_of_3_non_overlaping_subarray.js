/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
      sum += nums[i];
  }
  
  const p = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
      p.push(sum);
      sum -= nums[i];
      sum += nums[i + k];
  }

  const a = [];
  let best = 0;
  for (let i = 0; i < nums.length - k + 1; i++) {
      if (i < k) {
          a.push(-1);
      } else {
          if (p[i - k] > p[best]) {
              best = i - k;
          }
          
          a.push(best);
      }
  }
  
  const b = [];
  best = k;
  
  for (let i = 0; i < p.length; i++) {
      if (i < 2 * k) {
          b.push(-1);
      } else {
          if (p[i - k] + p[a[i - k]] > p[best] + p[a[best]]) {
              best = i - k;
          }
          
          b.push(best);
      }
  }

  let m = [0, k, 2 * k];
  for (let i = 2 * k; i < p.length; i++) {
      if (p[i] + p[b[i]] + p[a[b[i]]] > p[m[0]] + p[m[1]] + p[m[2]]) {
          m = [a[b[i]], b[i], i];
      }
  }
  
  return m;
};