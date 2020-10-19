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

//if not root return array
//set rootoffset, rootlevel, queue, and result array
//while queue make node
//if the res array has rootlevel + node offset - push val into it
//else if the offset is less than 0 unshift [nodeval]. increment rootlevel
//else push the [node val]
//if left node, left offset = offset - 1, then push nodeleft
//if right node, right offset = offset +1, then push noderight
//return res

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
      node.left.offset = node.offset - 1
      queue.push(node.left)
    }

    if (node.right) {
      node.right.offset = node.offset + 1
      queue.push(node.right)
    }
  }
  return res
}