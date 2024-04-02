# A peak element is an element that is strictly greater than its neighbors.

# Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

# You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

# You must write an algorithm that runs in O(log n) time.

class Solution:
    def findPeakElement(self, nums) -> int:
        l = 0
        r = len(nums) - 1

        while l <= r:
            m = l + ((r - l) // 2)
            # if L neighbor greater
            if m > 0 and nums[m] < nums[m-1]:
                r = m - 1
            elif m < len(nums) - 1 and nums[m] < nums[m+1]:
                l = m + 1
            else:
                return m 
                