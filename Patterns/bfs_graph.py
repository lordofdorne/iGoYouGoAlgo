# BFS on a graph (V vertices, E edges)
# Time: O(V + E)  Space: O(V) for queue + visited (auxiliary; adjacency is separate).

from collections import deque

def bfs(root):
    queue = deque([root])
    visited = set([root])
    while len(queue) > 0:
        node = queue.popleft()
        for neighbor in get_neighbors(node):
            if neighbor in visited:
                continue
            queue.append(neighbor)
            visited.add(neighbor)

def get_neighbors(node):
    pass

