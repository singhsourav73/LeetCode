/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  let N = nums.length;
  let curSum = 0;

  for (let i = 0; i < N; i++)  {
    curSum += nums[i];
    if (i >= k)
      curSum -= nums[i - k];
    if (i >= k-1)
      nums[i-k+1] = curSum;
  }
  
  N = N-k+1;
  let max_overlap = 0;
  let left_max = new Array(N);
  for (let i = 0; i < N; i++) {
    if (nums[i] > nums[max_overlap]) 
      max_overlap = i;
    
    left_max[i] = max_overlap;
  }

  let right_max = new Array(N);
  max_overlap = N - 1;
  for (let i = N - 1; i >= 0; i--) {
    if (nums[i] >= nums[max_overlap])
      max_overlap = i;
    
    right_max[i] = max_overlap;
  }
  
  let ans_pos = new Array(3).fill(-1);

  for (let i = k; i < N - k; i++) {
    let left = left_max[i-k];
    let right = right_max[i+k];
    if (ans_pos[0] === -1 || nums[left] + nums[i] + nums[right] > nums[ans_pos[0]] + nums[ans_pos[1]] + nums[ans_pos[2]]) {
      ans_pos[0] = left;
      ans_pos[1] = i;
      ans_pos[2] = right;
    }
  }
  return ans_pos;
};

console.log(maxSumOfThreeSubarrays([1,2,1,2,2,2,2,2], 2));