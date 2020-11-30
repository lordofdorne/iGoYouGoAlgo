// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function (nums) {
  let maximum = nums[0]

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > maximum) maximum = nums[i]

    if (nums[i] + nums[i - 1] > nums[i]) {
      nums[i] += nums[i - 1]
      maximum = maximum < nums[i] ? nums[i] : maximum
    }
  }
  return maximum
};