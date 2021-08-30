/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let tapWater = 0;
  for (let i = 0; i < height.length; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    
    for (let j = 0; j <= i; j++) {
      maxLeft = height[j] > maxLeft ? height[j] : maxLeft;
    }
    
    for (let j = height.length - 1; j >= i; j--) {
      maxRight = height[j] > maxRight ? height[j] : maxRight;
    }
    
    tapWater += (Math.min(maxLeft, maxRight) - height[i]);
  }

  return tapWater;
};