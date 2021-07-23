public class Solution {
    public string LongestPalindrome(string s) {
        bool[,] mat = new bool[s.Length, s.Length+1];
        
        string ans = "";
        int max_len = 0;
        for (int i = 0; i < s.Length; i++) {
            mat[i, i] = true;
            ans = s.Substring(i, 1);
            max_len = 1;
        }
        
        for (int i = 0; i < s.Length - 1; i++) {
            if (s[i] == s[i+1]) {
                mat[i, i+1] = true;
                ans = s.Substring(i,2);
                max_len = 2;
            }
        }
        
        for (int i = s.Length -1; i > -1; i--) {
            for (int j = i+1; j < s.Length; j++) {
                if ((j-i==1 || mat[i+1, j-1]) && s[i] == s[j]) {
                    mat[i, j] = true;
                    if ((j-i+1) > max_len) {
                        ans = s.Substring(i, j -i + 1);
                        max_len = j-i+1;
                    } 
                } else {
                    mat[i, j] = false;
                }
            }
        }
        return ans;
    }
}