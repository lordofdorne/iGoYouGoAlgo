// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

const isValid = (root, min = null, max = null) => {
  if (!root) return true

  if (min && root.val <= min.val) return false

  if (max && root.val >= max.val) return false

  return isValid(root.left, min, root) && isValid(root.right, root, max)
}