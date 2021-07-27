/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pascalArray = [];
    pascalArray = [1];
    for (let i = 1; i <= rowIndex; i++) {
      let pascalRow = [];
      pascalRow[0] = 1;
      pascalRow[i] = 1;
      for (let j = 1; j < i; j++) {
        pascalRow[j] = pascalArray[j-1] + pascalArray[j];
      }
      pascalArray = pascalRow;
    }
    
    return pascalArray;
  };