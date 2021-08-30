/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if(k > (prices.length/2)){
      let profit = 0;
      for(let i = 0; i< prices.length; i++){
          if(prices[i] < prices[i+1]){
              profit+=prices[i+1]-prices[i]
          }
      }
      return profit
  }

  let dp = new Array(prices.length).fill(0)
  for(let i = 1; i <= k; i++){
      let min = prices[0]
      let max = 0;
      for(let j = 0; j< prices.length; j++){
          min = Math.min(min , prices[j] - dp[j])
          max = Math.max( max , prices[j]- min)
          dp[j] = max
      }
  }
  return dp.pop() 
}