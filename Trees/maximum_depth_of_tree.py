# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Input: root = [3,9,20,null,null,15,7]
# Output: 3
# Example 2:

# Input: root = [1,null,2]
# Output: 2

# Constraints:

# The number of nodes in the tree is in the range [0, 104].
# -100 <= Node.val <= 100

from collections import deque

def max_depth(root):
    if not root:
        return 0

    q = deque([root])
    level = 0

    while q:
        for i in range(len(q)):
            node = q.popleft()

            if node.left:
                q.append(node.left)
            
            if node.right:
                q.append(node.right)
        level +=1
    
    return level