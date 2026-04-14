# Binary search (sorted array / predicate on index)
# Time: O(log n)  Space: O(1) extra (assuming feasible(mid) is O(1)).

from typing import List

def feasible(mid):
    pass

def binary_search(arr: List[int], target: int) -> int:
    left, right = 0, len(arr) - 1
    first_true_index = -1
    while left <= right:
        mid = (left + right) // 2
        if feasible(mid):
            first_true_index = mid
            right = mid - 1
        else:
            left = mid + 1

    return first_true_index
