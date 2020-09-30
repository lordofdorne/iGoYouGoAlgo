// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
// loop through string while decrementing
//set pointers 
//while loop
// create substring with pointers then check if subsring is palindrome with helper
//increment/ decrement then return empty string 


const longestPalindrome = s => {

  for (let k = s.length; k > 0; k--) {
    let i = 0
    let j = k;
    while (j <= s.length) {
      let substring = s.substring(i, j);
      if (isPalindrome(substring)) return substring;
      i++
      j++;
    }
  }
  return "";
}

const isPalindrome = (s) => {
  let left = 0
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++
    right--
  }
  return true;

};