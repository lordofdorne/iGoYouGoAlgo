# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

 

# Example 1:

# Input: nums = [100,4,200,1,3,2]
# Output: 4
# Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
# Example 2:

# Input: nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9

from typing import List


def longestConsecutive(self, nums: List[int]) -> int:
    # create set from array
    nums_set = set(nums)
    longest = 0

    for i in nums:
        # check if left neighbor not in set
        if i - 1 not in nums_set:
            # get length of sequence
            length = 0
            # while right neighbor  in set increase length, get max of longest
            while i + length in nums_set:
                length += 1
            longest = max(longest, length)
    return longest