# Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

# A subarray is a contiguous non-empty sequence of elements within an array.

 

# Example 1:

# Input: nums = [1,1,1], k = 2
# Output: 2
# Example 2:

# Input: nums = [1,2,3], k = 3
# Output: 2

class Solution:
    def subarraySum(self, nums: int, k: int) -> int:
        res = 0
        curr_sum = 0
        prefix = {0: 1}

        for num in nums:
            curr_sum += num
            diff = curr_sum - k

            res += prefix.get(diff, 0)
            prefix[curr_sum] = 1 + prefix.get(curr_sum, 0)
        return res

# Time: O(N)
# Space: O(N)