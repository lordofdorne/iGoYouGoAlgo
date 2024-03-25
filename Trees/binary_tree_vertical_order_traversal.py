# # Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

# # If two nodes are in the same row and column, the order should be from left to right.

# Input: root = [3,9,20,null,null,15,7]
# Output: [[9],[3,15],[20],[7]]

# Input: root = [3,9,8,4,0,1,7]
# Output: [[4],[9],[3,0,1],[8],[7]]

# Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
# Output: [[4],[9,5],[3,0,1],[8,2],[7]]

from collections import defaultdict, deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


def verticalOrder(root: TreeNode):
    col_table = defaultdict(list)
    queue = deque([(root, 0)])

    while queue:
        node, col = queue.popleft()

        if node:
            col_table[col].append(node.val)

            queue.append((node.left, col - 1))
            queue.append((node.right, col + 1))
    
    return [col_table[col] for col in sorted(col_table)]
