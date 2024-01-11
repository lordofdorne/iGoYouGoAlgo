def productExceptSelf(self, nums: List[int]) -> List[int]:
    # create result output array and init each position as 1
    res = [1] * (len(nums)) 

    prefix = 1
    for i in range(len(nums)):
        # add each value to its postion
        res[i] = prefix
        # take input array val an multiply by prefix (compute prefix as we iterate)
        prefix *= nums[i]

    postfix = 1
    for i in range(len(nums) -1, -1, -1):
        # multiply by value in result
        res[i] *= postfix
        postfix *= nums[i]
    return res