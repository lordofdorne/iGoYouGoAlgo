class {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function invertBinaryTree(tree) {
  let queue = [tree]

  while (queue.length) {
    let current = queue.shift()

    if (current === null) continue;

    swapNodes(current)

    queue.push(current.left)
    queue.push(current.right)
  }
}

function swapNodes(tree) {
  let left = tree.left
  tree.left = tree.right
  tree.right = left
}