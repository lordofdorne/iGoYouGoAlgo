# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

# Input: list1 = [1,2,4], list2 = [1,3,4]
# Output: [1,1,2,3,4,4]
# Example 2:

# Input: list1 = [], list2 = []
# Output: []
# Example 3:

# Input: list1 = [], list2 = [0]
# Output: [0]
class ListNode():
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    dummy = ListNode()
    # temp way to store vars
    tail = dummy

    #confirm both lists have a head
    while list1 and list2:
        
        # while traversing we're looking for the lower val to append to out new list
        if list1.val < list2.val:
            # we set the tails next to the list with the lower value
            tail.next = list1
            # then we can move the list forward
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        # then we move the tail to its next and repeat
        tail = tail.next
    
    # in the case where the lists are not the same length
    # we will set our tails next to the list that that has more values left
    tail.next = list1 or list2

    return dummy.next
