
// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true


var isSameTree = function (p, q) {


  if (!p && !q) {
    return true
  }

  if (!p || !q || p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)



};