public class Solution {
  public bool IsSubsequence(string s, string t) {
    var index = 0;
    var subLength = s.Length;
    for (var i = 0; i < t.Length; i++) {
      if (index < subLength && s[index] == t[i]) {
        index++;
      }
    }
    return index == subLength;
  }
}