# Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.

 

# Example 1:

# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4
# Example 2:

# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1

def search(self, nums: List[int], target: int) -> int:
    # set first and last pointers
    l, r = 0, len(nums) - 1

    # while pointers dont cross
    while l <= r:
        # set mid
        m = l + ((r - l) // 2)  # (l + r) // 2 can lead to overflow
        # if mid is too big, decrement r to left of mid
        if nums[m] > target:
            r = m - 1
        # if mid is too small, increment l to right of mid
        elif nums[m] < target:
            l = m + 1
        else:
            # else we get a match
            return m
    return -1
