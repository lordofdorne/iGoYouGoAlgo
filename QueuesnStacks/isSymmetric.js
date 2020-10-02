// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


//create 2 queues
//while loop while we have both
//create 2 nodes
//check if both are null and check for symmetry if not false
//push the nodes left and right in reverse order
//true at end

var isSymmetric = function (root) {
  if (!root) return true

  //create 2 queues for both sides 
  let queue1 = [root.left]
  let queue2 = [root.right]

  //while loop for both
  while (queue1.length && queue2.length) {
    //2 current
    let node1 = queue1.shift()
    let node2 = queue2.shift()

    //if they both are null at the same time we just continue
    if (!node1 && !node2) continue

    //are they symmetric? is one null? if so return false they dont match
    if (!node1 || !node2 || node1.val !== node2.val) return false

    //tricky part is pushing while reversing each branch, 
    queue1.push(node1.left)
    queue1.push(node1.right)
    queue2.push(node2.right)
    queue2.push(node2.left)
  }
  //true if we make it this far
  return true
};