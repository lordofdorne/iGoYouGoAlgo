// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

const reverse = x => {
  //turn num to string, split, reverse, then join

  let res = x.toString().split('').reverse().join('')

  //turn back to number

  res = parseInt(res) * Math.sign(x)

  //check for ranges with exponents

  return (res < -(2 ** 31) || res > 2 ** 31 - 1 ? 0 : res)
}