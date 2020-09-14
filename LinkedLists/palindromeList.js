// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

const palindromeList = head => {
  //set dummy pointers fast and slow
  let slow = head
  let fast = head
  //move fast twice as fast as slow
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  //set fast as the head and pass slow into a reverse list function
  fast = head
  slow = reverse(slow)

  //compare values to make sure they match
  while (slow.val !== null) {
    if (fast.val !== slow.val) {
      return false
    }
    //move pointers up list
    fast = fast.next
    slow = slow.next
  }
  return true
}
//simple reverse list function
const reverse = (head, prev = null) => {
  if (!head) {
    return prev
  }
  let temp = head.next
  head.next = prev
  return reverse(temp, head)

}