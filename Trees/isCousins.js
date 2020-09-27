// n a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false

//solve with BFS
//set queue and while loop while we have its length
//set values for queue size, finding x, and finding y
//loop through queue and check if x and y are children of current node if so return false
//find them at the same level and push into queue
//if found its true

const isCousins = (root, x, y) => {
  let queue = [root]

  while(queue.length) {
    let size = queue.length
    let foundY = false
    let foundX = false

    for (let i = 0; i < size.length; i++) {
      let node = queue.shift()

      //check if children are x and y
      if(node.left && node.right) {
        if (node.left.val === x && node.right.val === y || node.left.val === y && node.right.val === x) return false
      }
      //find x and y at the same level
      if (node.val === x) foundX = true
      if(node.val === y) foundY = true
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    if(foundY && foundX) return true
  }
return false
}