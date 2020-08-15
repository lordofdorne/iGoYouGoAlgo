// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null

  let newList = {}
  let currHead = newList

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currHead.val = l1.val
      currHead.next = {}
      l1 = l1.next
    } else {
      currHead.val = l2.val
      currHead.next = {}
      l2 = l2.next
    }
    currHead = currHead.next
  }
  if (!l1) {
    currHead.val = l2.val
    currHead.next = l2.next
  }

  if (!l2) {
    currHead.val = l1.val
    currHead.next = l1.next
  }

  return newList
};

const List1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null,
    },
  },
};

const List2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: null,
    },
  },
};

console.log(mergeTwoLists(List1, List2));