// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false

const isPalindrome = x => {
  let result = 0
  let save = x
  //if we do num % 10, we get the last digit 
  // we need to remove the last digit from num, we could do so by dividing it by 10
  //Then we can get the last digit again by doing a modulus by 10
  while (save > 0) {
    result = result * 10 + (save % 10)
    save = Math.floor(save / 10)

  }
  return x === result
}