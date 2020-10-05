
// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.



// Example 1:

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]


// we simply flatten the list starting at next, flatten the list starting at child, then glue everything together,


//  head -> next -> ... -> null
//   |
// child -> ... -> null

//  head -> (child -> ... ) -> (next -> ...)
//the tail is basically the glue
//if no head return null
//check for head.next if it exists flatten with a tail
//else if check tail, if it exists we can link it to head.next-tail and tail.prev to head
//check child, its next should be flatten with the child and next, its next prev should be head, child null
//lastly we return head


const flatten = (head, tail = null) => {
  if (!head) return null;

  //flatten next get a tail
  if (head.next) {
    flatten(head.next, tail);
  } else if (tail) {            // the tail argument is used to glue the end of the
    head.next = tail;                  // 'child list' to the begining of the 'next list'
    tail.prev = head;
  }

  if (head.child) {
    head.next = flatten(head.child, head.next);
    head.next.prev = head;
    head.child = null;
  }

  return head;
};