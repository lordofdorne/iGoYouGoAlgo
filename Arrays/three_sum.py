# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

 

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Explanation: 
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.
# Example 2:

# Input: nums = [0,1,1]
# Output: []
# Explanation: The only possible triplet does not sum up to 0.
# Example 3:

# Input: nums = [0,0,0]
# Output: [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.

def threeSum(nums):
    res = []
    # sort the number in ascending order
    nums.sort()

    for i,v in enumerate(nums):
        # if this isn't the 1st index and the value isnt a duplicate
        if i > 0 and v == nums[i - 1]:
            continue
        
        # set two pointers (1st and last) 
        l,r = i + 1, len(nums) - 1
        while l < r:
            # check the sum of 3 pointers
            three = v + nums[l] + nums[r]
            # if sum is less than target incriment right
            if three > 0:
                r -= 1
            # else if sum is more than target incriment right
            elif three < 0:
                l += 1
            # else we have the correct sum so we can add them to the list
            else:
                res.append([v, nums[l], nums[r]])
                # incriement left pointer to find more matches
                l += 1
                # while the curr pointer is the same as the last
                # and the left pointer is less than the right,
                # incrimennt the L pointer
                while nums[l] == nums[l-1] and l < r:
                    l += 1

    return res