# DFS on a graph (V vertices, E edges)
# Time: O(V + E)  Space: O(V) for visited + O(V) recursion/stack depth worst case.

def dfs(root, visited):
    for neighbor in get_neighbors(root):
        if neighbor in visited:
            continue
        visited.add(neighbor)
        dfs(neighbor, visited)

def get_neighbors(node):
    pass