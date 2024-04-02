# You are given the root of a binary tree containing digits from 0 to 9 only.

# Each root-to-leaf path in the tree represents a number.

# For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
# Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

# A leaf node is a node with no children.

from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:

        def dfs(curr, num_sum):
            if not curr:
                return 0
            
            num_sum = num_sum * 10 + curr.val

            if not curr.left and not curr.right:
                return num_sum
            return dfs(curr.left, num_sum) + dfs(curr.right, num_sum)
        
        return dfs(root, 0)