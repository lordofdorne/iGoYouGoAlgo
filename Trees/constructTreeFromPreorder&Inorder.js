// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const build = (preorder, inorder) => {

  const helper = (start, end) => {
    if (start > end) return null

    let node = preorder.shift()
    let root = new TreeNode(node)
    node.left = helper(start, inorder.indexOf(node) - 1)
    node.right = helper(inorder.indexOf(node) + 1, end)

    return root
  }
  return helper(0, inorder.length - 1)

}