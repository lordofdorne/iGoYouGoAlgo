// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

var maxProduct = function (nums) {
  let minProd = 1
  let maxProd = 1
  let res = -Infinity;
  for (let n of nums) {

    if (n < 0) [minProd, maxProd] = [maxProd, minProd];

    maxProd = Math.max(n, maxProd * n);
    minProd = Math.min(n, minProd * n);
    res = Math.max(res, maxProd);
  }
  return res;
};