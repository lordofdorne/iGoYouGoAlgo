// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]




const merge = (num1, num2, m, n) => {
  num1.splice(m, n, ...num2)
  num2.sort((a, b) => {
    if (a > b) return 1
    if (a === b) return 0
    if (a < b) return -1

  })
}