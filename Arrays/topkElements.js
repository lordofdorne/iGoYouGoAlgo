// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]





var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  let sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArr[i][0]);
  }
  return result;
};