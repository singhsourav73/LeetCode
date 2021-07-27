/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        profit = prices[i] - minPrice > profit ? prices[i] - minPrice : profit;
      }
    }
    return profit;
  };