/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let tapWater = 0;
  let dpLeft = [];
  let dpRight = [];
  let size = height.length;
  
  dpLeft[0] = height[0];
  for (let i = 1; i < size-1; i++) {
    dpLeft[i] = Math.max(height[i], dpLeft[i-1]);
  }
  
  dpRight[size-1] = height[size-1]
  for (let i = size-2; i>=0; i--) {
    dpRight[i] = Math.max(height[i], dpRight[i+1]);
  }
  
  for (let i = 1; i < height.length - 1; i++) {
    tapWater += (Math.min(dpRight[i], dpLeft[i]) - height[i]);
  }

  return tapWater;
};