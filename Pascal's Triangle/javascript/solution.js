/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascalArray = [];
    pascalArray.push([1]);
    for (let i = 1; i < numRows; i++) {
      let pascalRow = [];
      pascalRow[0] = 1;
      pascalRow[i] = 1;
      for (let j = 1; j < i; j++) {
        pascalRow[j] = pascalArray[i-1][j-1] + pascalArray[i-1][j];
      }
      pascalArray.push(pascalRow);
    }
    
    return pascalArray;
  };