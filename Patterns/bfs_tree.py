# BFS on a tree (n nodes)
# Time: O(n)
# Space: O(w) for queue where w is max width; O(n) worst case.

from collections import deque

def bfs(root):
    queue = deque([root])
    while len(queue) > 0:
        node = queue.popleft()
        for child in node.children:
            if is_goal(child):
                return FOUND(child)
            queue.append(child)
    return NOT_FOUND

def is_goal(node):
    pass

def FOUND(node):
    pass

def NOT_FOUND():
    pass
