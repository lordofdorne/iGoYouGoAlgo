# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.

# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
# Example 2:

# Input: height = [1,1]
# Output: 1

def brute_force(height):  # O(n^2)
    res = 0
    for left in range(len(height)):
        for right in range(left + 1, len(height)):
            area = (right - left) * min(height[left], height[right])
            res = max(res, area)
    return res

def optimal(height):  # O(n)
    l,r = 0, len(height) - 1
    res = 0

    while l < r:
        area = (r - l) * min(height[l], height[r])
        res = max(area, res)

        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return res
