// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums, return the minimum element of this array.


var findMin = function (nums) {
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {

    if (prev > nums[i]) return nums[i];  // inflection point found


  }

  return prev; // code only gets here when there is no inflection point. Example: [1,2,3]
};

