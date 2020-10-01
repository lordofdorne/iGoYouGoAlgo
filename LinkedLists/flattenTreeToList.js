const flattenTree = (root) => {
  if (!root) return root

  //helper function that will be used to push a node and its children into an array
  let helper = (node, stack = []) => {
    //push the node to the stack
    stack.push(node)
    //check for children if they exist add them to stack
    if (node.left) helper(node.left, stack)
    if (node.right) helper(node.right, stack)
    return stack
  }

  //insert the tree into the helper function
  let nodes = helper(root)
  //loop through the stack
  for (let i = 0; i < nodes.length - 1; i++) {
    let currNode = nodes[i]
    //the key is to set every nodes left property to null and force elements to the right
    currNode.left = null
    currNode.right = nodes[i + 1]
  }
  //return from the starting index
  return nodes[0]
}