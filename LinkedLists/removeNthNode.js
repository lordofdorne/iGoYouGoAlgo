// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.function ListNode(val) {
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeNthNodeFromEnd = (head, n) => {
  if (!head.next) return null;

  let dummy = new ListNode(0)
  dummy.next = head

  let slow = dummy.next
  let fast = dummy.next
}