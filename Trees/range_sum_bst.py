# Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

def rangeSumBST(root, low, high):
    if not root:
        return 0

    if root.val > high:
        return rangeSumBST(root.left, low, high)
    
    if root.val < low:
        return rangeSumBST(root.right, low, high)
    
    return (
        root.val +
        rangeSumBST(root.left, low, high) +
        rangeSumBST(root.right, low, high)
    )