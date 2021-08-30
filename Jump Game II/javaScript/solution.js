/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let maxReach = 0;
  let currentReach = 0;
  let jump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, nums[i] + i);
    if (i === currentReach) {
      jump++;
      currentReach = maxReach;
    }
  }
  return jump;
};