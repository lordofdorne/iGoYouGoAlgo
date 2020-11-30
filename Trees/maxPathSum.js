// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any node sequence from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.



var maxPathSum = function (root) {
  if (root === null) return 0;

  // Save a max and set it to the lowest possible value
  let max = -Infinity;

  // Call the recurisve function that will update the max variable above
  maxPath(root);

  // Return our calculated value
  return max;

  function maxPath(node) {
    // If the subtree is empty then it doesn't add or detract from our current path
    if (node === null) return 0;

    // We find the max of taking the path to the left - if its less than 0
    // we will not include it in our path so we default it to 0
    const leftMax = Math.max(0, maxPath(node.left));

    // Same logic applies to the right side
    const rightMax = Math.max(0, maxPath(node.right));

    // So the max path that passes through our current node
    const thisPath = leftMax + rightMax + node.val;

    // Update the max if its higher
    max = Math.max(max, thisPath);

    // Now we return the max path for our parent. We can only choose one branch
    // of our current path though, left or right plus our node's value
    return Math.max(leftMax, rightMax) + node.val;
  }
};