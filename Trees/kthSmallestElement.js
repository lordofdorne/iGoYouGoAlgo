// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.



// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3


const smallest = (root, k) => {
  let elems = []

  function inorder(node) {
    if (node) {
      if (node.left) inorder(node.left)

      elems.push(node.val)

      if (node.right) inorder(node.right)
    }
  }
  inorder(root)
  return elems[k - 1]
}