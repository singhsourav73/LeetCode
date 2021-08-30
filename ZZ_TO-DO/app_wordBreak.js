/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  return helper(s, wordDict, new Map());
};

function helper(s, wordDict, memo) {
  console.log(s);
  console.log(memo);
  
  if (memo.has(s)) return memo.get(s); 
  
  const ans = [];
  for (let word of wordDict) {
      if (!s.startsWith(word)) continue;
      
      if (word.length === s.length) {
          ans.push(word);
          continue;
      }
      
      for (let w of helper(s.substring(word.length), wordDict, memo)) {
          ans.push(`${word} ${w}`);
      }
  }
  
  memo.set(s, ans);
  return ans;
}

console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
