/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = {};
  return Math.min(costClimbingStairs(cost, 0, dp), costClimbingStairs(cost, 1, dp))
};

var costClimbingStairs = function(cost, i, dp) {
  if (i in dp) return dp[i];
  if (i >= cost.length) return 0;
  
  dp[i] = cost[i] + Math.min(costClimbingStairs(cost, i+1, dp), costClimbingStairs(cost, i+2, dp));
  return dp[i];
};