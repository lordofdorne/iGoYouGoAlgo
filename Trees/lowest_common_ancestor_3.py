# Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

# Each node will have a reference to its parent node. The definition for Node is below:

# class Node {
#     public int val;
#     public Node left;
#     public Node right;
#     public Node parent;
# }

def solution(p, q):
    p_copy = p
    q_copy = q

    while q != p:
        p_copy = p_copy.parent if p_copy else q
        q_copy = q_copy.parent if q_copy else p
    
    return p