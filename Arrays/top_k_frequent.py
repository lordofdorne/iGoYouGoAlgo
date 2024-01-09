# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

# Example 1:

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]
# Example 2:

# Input: nums = [1], k = 1
# Output: [1]
 

# Constraints:

# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104
# k is in the range [1, the number of unique elements in the array].
# It is guaranteed that the answer is unique.

def topKFrequent(nums, k):
    # init hashmap and bucket
    hashmap = {}
    bucket = [[] for i in range(len(nums) + 1)]

    # build map with {value: count}
    for n in nums:
        hashmap[n] = 1 + hashmap.get(n, 0)

    # insert each value into the bucket based on its count
    for n,c in hashmap.items():
        bucket[c].append(n)

    # loop through the bucket backwards
    res = []
    for i in range(len(bucket) - 1, 0, -1):
        # loop through nested bucket
        for n in bucket[i]:
            # loop through the bucket backwards
            res.append(n)
            # when the result array is as big as the target we should get a valid response
            if len(res) == k:
                return res
