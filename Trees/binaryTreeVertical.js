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