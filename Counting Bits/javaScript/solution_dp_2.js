const countBits = (num) => {
  if(num === 0){ return [0]}
  let memo = [];
  memo[0] = 0;
  memo[1] = 1;

  for(let x = 2; x <= num; x++){
    let sumOne = 0;
    let currNum = x;
    let reminder = currNum % 2;
    if(reminder === 1) sumOne++
    currNum = Math.floor(currNum/2)  

    if(memo[currNum] !== undefined){
      sumOne += memo[currNum];
    }
    memo.push(sumOne);
  }

  return memo;
}