
class ListNode():
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def addTwoNumbers(l1, l2):
        dummy = ListNode()
        carry = 0
        curr = dummy

        while l1 or l2 or carry:
            # init values if the lists have vals  else set to 0
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            # add values and carry
            val = v1 + v2 + carry


            # in the case we have a carry we need to extract it
            # this is done by setting the carry to val divided by 10 (to get the 1's place)
            carry = val // 10

            # in the case where val is > 10 we can get the carry by dividing the val by 10
            val = val % 10

            # insert the new val into dummy list
            curr.next = ListNode(val)


            # update pointers
            curr = curr.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next