# Two pointers
# - Opposite ends: O(n) time, O(1) extra space (each index moves at most once).
# - Same direction: O(n) time, O(1) extra space (fast scans once; slow only advances).
# Assumes process/condition are O(1) per step.

def process(left, right):
    pass

def condition(left, right):
    pass

def two_pointers_opposite(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        # Process current elements
        current = process(arr[left], arr[right])
        
        # Update pointers based on condition
        if condition(arr[left], arr[right]):
            left += 1
        else:
            right -= 1


def two_pointers_same(arr):
    slow, fast = 0, 0
    while fast < len(arr):
        # Process current elements
        current = process(arr[slow], arr[fast])
        
        # Update pointers based on condition
        if condition(arr[slow], arr[fast]):
            slow += 1
        
        # Fast pointer always moves forward
        fast += 1
