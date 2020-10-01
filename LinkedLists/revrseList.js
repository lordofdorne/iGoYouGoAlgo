const reverseList = (head, prev = null) => {
  if (!head) return prev

  let temp = head.next
  head.next = prev
  return reverseList(temp, head)
}

var reverseList = function (head) {
  let prev = null
  let curr = head
  let next = null

  while (curr !== null) {
    // save next
    next = curr.next
    // reverse
    curr.next = prev
    // advance prev and curr
    prev = curr
    curr = next
  }
  return prev;
};