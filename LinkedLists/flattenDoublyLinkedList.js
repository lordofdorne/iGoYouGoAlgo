const flattenList = head => {

  let curr = head

  while (curr) {
    let next = curr.next

    if (curr.child) {
      let child = flattenList(curr.child)
      curr.next = child
      child.prev = current
      curr.child = null

      while (curr.next) {
        curr = curr.next
      }
      if (next) next.prev = curr
      curr.next = next
    }
    curr = curr.next
  }
  return head
}
//more readable solution
const flatten = (head) => {
  if (!head) return head;

  function traverse(node) {
    //if there is no next node or a child return that node 
    if (!node.next && !node.child) return node;

    //this problem is DFS so we check as deep as possible, if the node has a child...
    if (node.child) {
      //set the next node as a variable so we can store it
      const nextNode = node.next;
      //set the whole child branch as the next node
      node.next = node.child;
      //that next nodes previous elemenet is now the current elem
      node.next.prev = node;
      //set child to null
      node.child = null;


      if (nextNode) {
        const tailNode = traverse(node.next);
        tailNode.next = nextNode;
        nextNode.prev = tailNode;
      }
    }
    return traverse(node.next);
  }
  traverse(head);
  return head;

};