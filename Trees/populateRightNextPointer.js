// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.


//create queue with root
//while queue, create size, loop through size, set current as  elem from queue
//if the index is less than size - 1. set currents next as the first elem from queue
//if we have a right and left push each into queue respevtively
//break while loop and return root

const populate = root => {
  if (!root) return root
  let queue = [root]

  while (queue.length) {
    let size = queue.length

    for (let i = 0; i < size; i++) {
      let current = queue.shift()

      if (i < size - 1) current.next = queue[0]

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }
  return root
}
