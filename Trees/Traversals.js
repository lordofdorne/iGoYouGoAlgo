//Basic Traversing Patterns

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.children = []
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBFS(fn) {
    const array = [this.root]

    while (array.length) {
      let node = array.shift()
      array.push(...node.children)
      fn(node)
    }
  }

  traverseDFS(fn) {
    const array = [this.root]

    let node = array.shift()
    array.unshift(...node.children)
    fn(node)
  }
}