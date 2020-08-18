class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = (l1, l2) => {
  let list = new ListNode()
  let currHead = list
  let carry = 0

  while (l1 || l2) {
    let num = 0
    if (l1) num += l1.val
    if (l2) num += l2.val
    if (carry) num += carry

    if (num >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    currHead.val = num % 10
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next

    if (l1 || l2) {
      currHead.next = new ListNode()
      currHead = currHead.next
    }
  }
  if (carry) {
    currHead.next = new ListNode(1)
  }
  currHead.next = null
  return list
}