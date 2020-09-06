class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }



}

const insert = (tree, value) => {

  //check the case where the left node doesnt exist
  if (value < tree.value && tree.left) tree.left.insert(value)

  else if (value < tree.value) tree.left = new BST(value)
  //check the case where the right node doesnt exist
  else if (value > tree.right && tree.value) tree.right.insert(value)

  else if (value > tree.value) tree.right = new BST(value)
}

const contains = (tree, value) => {
  //if the current value is equal to the target value return

  if (tree.value === value) return tree.value
  //if the target value is less than the current value and the right node exists, recurively call the function 
  else if (value < tree.value && tree.right) return contains(tree.right, value)

  //if the target value is greater than the current value and the left node exists, recurively call the function 
  else if (value > tree.value && tree.left) return contains(tree.left, value)

  return null
}

const validate = (tree, min = null, max = null) => {

  if (max !== null && tree.value > max) return false

  if (min !== null && tree.value < min) return false

  if (tree.left && !validate(tree.left, min, tree.value)) return false

  if (tree.right && !validate(tree.right, tree.value, max)) return false

  return true
}