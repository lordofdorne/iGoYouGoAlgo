class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const nodeDepth = (root, depth = 0) => {
  //base case
  if (root === null) return 0
  //recursive call while keeping track of depth
  return depth + nodeDepth(root.left, depth + 1) + nodeDepth(root.right, depth + 1)

}