def two_sum_brute(nums, target):
    res = []
    if len(nums) == 2:
        return[0,1]

    for i in range(len(nums)):
        for j in range(i +1, len(nums)):
            if nums[i] + nums[j] == target:
                return res.extend([i, j])

def two_sum_optimized(nums, target):
    hashmap = {}
    for i, n in enumerate(nums):
        diff = target - n
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[n] = i