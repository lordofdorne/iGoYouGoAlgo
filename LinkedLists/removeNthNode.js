// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.function ListNode(val) {

//Time Complexity is O(n) where n is the length of the linked list
//Space Complexity is constant O(1) because we're just keeping track of nodes
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

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) {
    return dummy.next.next
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next

}

////----------------------------------

removeNthNodeFromEnd = (head, n) => {
  let counter = 1
  let slow = head
  let fast = head

  //move the fast pointer to n nodes ahead
  while (counter <= n) {
    fast = fast.next
    counter++
  }
  //if we get to the end that means the first pointer is the one that we need to remove
  if (fast === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }
  //move both pointers at the same time
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next


}