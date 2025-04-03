class Solution {
    public int binaryGap(int n) {
        int ans = 0;
        for (int pre = 100, cur = 0; n != 0; n >>= 1) {
            if (n % 2 == 1) {
                ans = Math.max(ans, cur - pre);
                pre = cur;
            }
            ++cur;
        }
        return ans;
    }
}
