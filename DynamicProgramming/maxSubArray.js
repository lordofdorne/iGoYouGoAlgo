// iven an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const max = nums => {
  let maximum = nums[0]

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > maximum) maximum = nums[i]

    if (nums[i] + nums[i - 1] > nums[i]) {
      nums[i] += nums[i - 1]
      maximum = maximum < nums[i] ? nums[i] : maximum
    }
  }
  return maximum
}