public class Solution {
    public int LastStoneWeightII(int[] stones) {
      int N_MAX = 0;
      
      for (int i = 0; i < stones.Length; i++) {
        N_MAX += stones[i];
      }
      
      int sum = N_MAX/2;
      
      bool[,] mat = new bool[stones.Length, sum+1];
      
      for (int i = 0; i < stones.Length; i++) {
        mat[i, 0] = true;
      }
      
      for (int i = 0; i <= sum; i++) {
        if (i == stones[0]) {
          mat[0, i] = true;
        }
      }
      
      for (int i = 1; i < stones.Length; i++) {
        for (int j = 1; j <= sum; j++) {
          if (mat[i-1, j]) {
            mat[i, j] = true;
          } else {
            if ( j >= stones[i]) {
              mat[i, j] = mat[i-1, j - stones[i]];
            }
          }
        }
      }
      
      int firstPartitionSum = -1;
      for (int i = sum; i >= 0; i--) {
        if (mat[stones.Length - 1, i]) {
          firstPartitionSum = i;
          break;
        }
      }
      
      int secondPartitionSum = N_MAX - firstPartitionSum;
      
      return Math.Abs(firstPartitionSum - secondPartitionSum); 
    }
}