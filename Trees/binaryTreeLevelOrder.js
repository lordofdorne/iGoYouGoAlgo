// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
//BFS so we can use  a Queue

const levelOrder = root => {
  //initialize queue as an empty array
  let queue = []

  //bfs helper function take the root and its level
  traverse(root, 0)

  //after traversing we can return the queue
  return queue

  //helper
  function traverse(root, level) {
    //if root is null we're at the end, so return  
    if (root === null) return

    //if the queue level is undefined we have to create one  
    if (queue[level] === undefined) {
      //push the current val into the queue  
      queue.push([root.val])
    } else {
      //if we have a level we will add the current root value to it
      queue[level].push(root.val)
    }
    //recursivley do the same for left and right while also moving up a level
    traverse(root.left, level + 1)
    traverse(root.right, level + 1)
  }
  //time complexity: O(n)
  //space complexity: O(n)
}