// Traversal the string s and push into a stack for non-] character
// When we meets the ] character, we should do these steps:

// - pop all characters until meets [
// - pop all numbers to get the repeat count
// - repeat the substring and push it back to stack

// Finally, we join all the pieces in the stack

const decodeString = s => {
  const stack = []

  for (const char of s) {
    if (char !== ']') { stack.push(char); continue }

    let curr = stack.pop()
    let str = ''
    while (cur !== '[') {
      str = curr + str
      curr = stack.pop()
    }
    let num = ''
    curr = stack.pop()
    while (!Number.isNaN(Number(curr))) {
      num = curr + num
      curr = stack.pop()
    }
    stack.push(curr)
    stack.push(str.repeat(Number(num)))
  }
  return stack.join('')
}