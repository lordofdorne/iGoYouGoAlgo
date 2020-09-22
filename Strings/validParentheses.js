// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = s => {
  let stack = []
  let paren = s.split('')

  for (let char of s) {
    if (char === '{') stack.push('}')
    else if (char === '(') stack.push(')')
    else if (char === '[') stack.push(']')
    else if (stack.length === 0 || char !== stack.pop()) return false
  }

  if (stack.length === 0) return true
  return false
}