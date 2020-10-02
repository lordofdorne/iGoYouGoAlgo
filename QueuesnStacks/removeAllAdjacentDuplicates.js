// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.



// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.



//create stack
//loop through stack setting current and peek
//if stack is empty or top of peek is not current push current and count of 1
//else we have adjacent so increment the count prop in peek, check if count is equal to target, if so pop off stack
//exit loop create result string
// for of with char and count of stack
//add the char with count repeat to result string
//return res string



//time complexity: O(n) linear because we go through the whole string
//space complexity: O(n) linear as well
//we use stack because we need adjacanent elements so the last element 
const removeDuplicates = (s, k) => {
  //initialize the stack
  let stack = []

  for (let i = 0; i < s.length; i++) {
    let current = s[i]
    //top of the stack
    let peek = stack[stack.length - 1]

    if (stack.length === 0 || peek[0] !== current) {
      //if it doesnt exist push the current char and a count of 1 to the stack
      stack.push([current, 1])
    }
    //this means we have adjacent characters so we must increase the count
    else {
      //increment the count
      peek[1]++
      //if the count is equal to the count pop it off because we dont need it in the final string
      if (peek[1] === k) stack.pop()

    }
  }
  //result string
  let result = ''
  for (let [character, count] of stack) {
    result += character.repeat(count)
  }
  return result
}