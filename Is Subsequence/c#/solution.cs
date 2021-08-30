public class Solution {
  public bool IsSubsequence(string s, string t) {
    var index = 0;
    for (var i = 0; i < t.Length; i++) {
      if (index < s.Length && s[index] == t[i]) {
        index++;
      }
    }
    return index == s.Length;
  }
}