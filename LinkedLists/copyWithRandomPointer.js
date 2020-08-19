//solve using map

const randomListPointer = (head) => {
  //set map as the Map object
  const map = new Map()

  //function that will create a copy
  function copy(node) {
    //if the node doesnt exist return null
    if (!node) return null
    //if the map has that node use the get method to return that key
    if (map.has(node)) return map.get(node)
    //create a new node that we can use to set its values
    const newNode = new Node()
    //use the set method to set the key and its value
    map.set(node, newNode)
    //set current value
    newNode.val = node.val
    //set next value
    newNode.next = copy(node.next)
    //set the random pointer
    newNode.random = copy(node.random)
    //return the node
    return newNode
  }
  //retyrn the head inside the copy function
  return copy(head)
}