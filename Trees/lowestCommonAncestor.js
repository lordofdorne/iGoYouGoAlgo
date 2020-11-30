// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);

  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);

  return root;
}