class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time | O(n) space where n is the number of nodes
function branchSums(root) {
  const sumsArray = []

  trackSum(root, 0, sums)
  return sumsArray

}

const trackSum = (node, sum, sumsArray) => {
  if (!node) return;

  const theSum = sum + node.value

  if (!node.left && !node.right) {
    sumsArray.push(theSum)
  }
  trackSum(node.left, theSum, sums)
  trackSum(node.right, theSum, sums)
}