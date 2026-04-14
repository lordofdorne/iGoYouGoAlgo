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
