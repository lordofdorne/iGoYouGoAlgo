# DFS on a binary tree (n nodes, height h)
# Time: O(n)  Space: O(h) recursion stack — O(log n) balanced, O(n) skewed.

def dfs(root, target):
    if root is None:
        return None
    if root.val == target:
        return root
    left = dfs(root.left, target)
    if left is not None:
        return left
    return dfs(root.right, target)
