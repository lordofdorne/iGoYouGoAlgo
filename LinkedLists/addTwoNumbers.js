class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = (l1, l2) => {
  let list = new ListNode()
  let currHead = list
  //carry must be either 0 or 1 because the largest possible sum of two digits (including the carry) is 9 + 9 + 1 = 19
  let carry = 0

  while (l1 || l2) {
    let num = 0
    //add current values from each list to
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
//--------------------------------------------------------
///Recursive Solution
const addTwoNums = (l1, l2) => {
  const result = new ListNode();

  function traverse(n1, n2, sum, carry) {
    if (!n1 && !n2 && !carry) return result.next;
    let val = (n1 && n1.val) + (n2 && n2.val) + carry;
    carry = val > 9;
    sum.next = new ListNode(val % 10);
    return traverse((n1 && n1.next), (n2 && n2.next), sum.next, carry);
  }
  return traverse(l1, l2, result, 0);
}