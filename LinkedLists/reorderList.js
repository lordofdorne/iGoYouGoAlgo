// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

const reorderList = head => {
  if (!head) return null;

  // Point head to the rest of the list reversed
  head.next = reverseList(head.next);

  // Recurse on head.next
  reorderList(head.next);
};

function reverseList(head, prev = null) {
  if (!head) return prev

  let temp = head.next
  head.next = prev

  return reverseList(temp, head)
}