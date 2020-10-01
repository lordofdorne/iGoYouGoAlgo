// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Follow up: Can you solve it with time complexity O(height of tree)?



// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

//create inorder function that spreads elemes into an array
//filter out the node that you dont need
//create build function to recreate the tree
//tree builds from mid value
//return sorted array in build

var deleteNode = function (root, key) {

  function inorder(node) {
    if (!node) return [];
    return [...inorder(node.left), node.val, ...inorder(node.right)];
  }

  const sorted = inorder(root).filter(x => x !== key);

  function build(arr) {
    if (!arr.length) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);
    node.left = build(arr.slice(0, mid));
    node.right = build(arr.slice(mid + 1));
    return node;
  }
  return build(sorted);
};