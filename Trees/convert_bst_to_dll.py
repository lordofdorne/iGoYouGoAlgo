"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""

class Solution:
    def treeToDoublyList(self, root):
        if not root:
            return None
        
        self.first = None
        self.last = None
        self.inorder(root)
        self.first.left = self.last
        self.last.right = self.first
        return self.first

    def inorder(self, node):
        if node:
            self.inorder(node.left)
        
            if not self.last:
                self.first = node
            else:
                node.left = self.last
                self.last.right = node
            self.last = node
            self.inorder(node.right)

# Time:O(n)
# Space:O(n)