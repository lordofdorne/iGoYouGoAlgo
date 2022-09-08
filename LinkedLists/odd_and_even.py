# Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

# You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

# Example 1:

# Input: 1->2->3->4->5->NULL
# Output: 1->3->5->2->4->NULL

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def odd_even_list(head):
    if not head:
        return head

    odd=head
    even=head.next
    evenhead=even

    while even and even.next:
        odd.next=odd.next.next
        even.next=even.next.next
        odd=odd.next
        even=even.next
        
    odd.next=evenhead     
    return head