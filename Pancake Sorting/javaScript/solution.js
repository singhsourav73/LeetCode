/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  let pos = -1;
  let flip = [];
  for (let value = arr.length; value > 0; value--) {
    if (value === arr[value-1]) continue;
    for (let i = value - 2; i >= 0; i--) {
      if (value === arr[i]) {
        pos = i;
        break;
      }
    }
    
    if (pos!==0) {
      pancakeFlip(0,pos, arr);
      flip.push(pos+1);
    }
    pancakeFlip(0,value-1, arr);
    flip.push(value);
  }
  return flip;
};

var pancakeFlip = (start, end, arr) => {
  while(start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start+=1;
    end-=1;
  }
}