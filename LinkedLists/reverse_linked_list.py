# Given the head of a singly linked list, reverse the list, and return the reversed list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(self, head: ListNode) -> ListNode:
    prev, curr = None, head

    while(curr):
        # store next in temp
        temp = curr.next
        # break the link and store next in previous (its ok becase val is stored as temp)
        curr.next = prev
        # fix the link: prev can move to current
        prev = curr
        # fix the link: curr can be the temp that was stored
        curr = temp
    
    return prev

#Time: O(n) Space: O(1)