def sliding_window_flexible_shortest(input):
    window = []
    ans = 0
    left = 0
    for right in range(len(input)):
        window.append(input[right])
        while is_valid(window):
            ans = min(ans, window)      # window is guaranteed to be valid here
            window.remove(input[left])
            left += 1
    return ans

def is_valid(window):
    pass
