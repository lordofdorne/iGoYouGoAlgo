const reverseList = (head, prev = null) => {
  if (!head) return prev

  let temp = head.next
  head.next = prev
  return reverseList(temp, head)
}