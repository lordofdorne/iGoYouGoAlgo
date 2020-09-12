// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const longestString = s => {
  if (s.length === 0) return 1
  let longest = 0
  let map = {}
  let curSub = 0

  for (let i = 0; i < s.length; i++) {
    let j = i

    while (s[j] && !map[s[j]]) {
      map[s[j]] = true
      curSub++
      j++
    }

    if (curSub > longest) {
      longest = curSub
    }
    map = {}
    curSub = 0
  }
  return longest
}