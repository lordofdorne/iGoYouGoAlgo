// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---



var rightSideView = function (root) {
  //traverse through tree with helper
  //check if right exists if so push into array
  //if left push null
  //base case
  if (!root) return []

  let arr = []

  function helper(root, level) {
    if (level === arr.length) {
      arr.push(root.val)
    }
    if (root.right) {
      helper(root.right, level + 1)
    }
    if (root.left) {
      helper(root.left, level + 1)
    }

  }
  helper(root, 0)
  return arr

};