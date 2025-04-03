function maxSlidingWindow(nums: number[], k: number): number[] {
    const ans: number[] = [];
    const q = new Deque();
    for (let i = 0; i < nums.length; ++i) {
        if (!q.isEmpty() && i - q.front()! >= k) {
            q.popFront();
        }
        while (!q.isEmpty() && nums[q.back()!] <= nums[i]) {
            q.popBack();
        }
        q.pushBack(i);
        if (i >= k - 1) {
            ans.push(nums[q.front()!]);
        }
    }
    return ans;
}
