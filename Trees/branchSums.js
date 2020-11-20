class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time | O(n) space where n is the number of nodes

function branchSums(root) {
  // Write your code here.
  const sums = []

  addSums(root, 0, sums)
  return sums
}

function addSums(node, newSum, sums) {
  if (!node) return 0

  const branchSum = newSum + node.value
  if (!node.left && !node.right) {
    sums.push(branchSum)
  }

  addSums(node.left, branchSum, sums)
  addSums(node.right, branchSum, sums)
}