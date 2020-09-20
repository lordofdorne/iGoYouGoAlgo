// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.



// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

const removeDuplicates = (s, k) => {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    let peek = stack[stack.length - 1]

    if (stack.length === 0 || peek[0] !== curr) {
      stack.push([curr, 1])
    }
    else {
      peek[1]++
      if (peek[1] === k) stack.pop()

    }

  }
  let res = ''
  for (let [char, count] of stack) {
    res += char.repeat(count)
  }
  return result

}
