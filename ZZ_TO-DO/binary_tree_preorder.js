var isValidSerialization = function(preorder) {
  let preorderArr = preorder.split(",");
  let place = checkNode(preorderArr, 0);
  return place == preorderArr.length;
};

var checkNode = function(preorder, place){
  if(place>=preorder.length){
      return Number.MAX_VALUE;
  }
  else if(preorder[place] === "#"){
      return place+1;
  }
  else{
      let left = checkNode(preorder, place+1);
      return checkNode(preorder, left);
  }
  
}


/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {

  if(preorder === "#") return true

  let queue = preorder.split(",");

  if(queue.length < 3) return false

  // console.log(arr);
  let idx = 0
  return helper() && !queue[idx];
  

  function helper() {
      let val = queue[idx++]

      if (!val) return false;

      if (val === "#") return true;

      let left = helper();
      let right = helper();

      return left && right;
  }
  
};