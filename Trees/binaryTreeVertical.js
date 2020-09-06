// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Examples 1:

// Input: [3,9,20,null,null,15,7]

//    3
//   /\
//  /  \
//  9  20
//     /\
//    /  \
//   15   7 

// Output:

// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]

//solved with BFS

const vertical = root => {
  if (!root) return []

  root.offset = 0
  let rootLevel = 0
  const queue = [root]
  const res = []


  while (queue.length) {
    //BFS  is FIFO so shift off the queue
    let node = queue.shift()

    if (res[rootLevel + node.offset]) {
      res[rootLevel + node.offset].push(node.val)
    } else if (node.offset < 0) {
      res.unshift([node.val])
    } else {
      res.push([node.val])
    }

    if (node.left) {
      node.left.offset - node.offset - 1
      queue.push(node.left)
    }

    if (node.right) {
      node.right.offset = node.offset + 1
      queue.push(node.right)
    }
  }
  return res
}