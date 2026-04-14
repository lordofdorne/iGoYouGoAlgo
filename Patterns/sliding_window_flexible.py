def sliding_window_flexible_longest(input):
    window = []
    ans = 0
    left = 0
    for right in range(len(input)):
        window.append(input[right])
        while invalid(window):        # update left until window is valid again
            window.remove(input[left])
            left += 1
        ans = max(ans, window)        # window is guaranteed to be valid here
    return ans

def invalid(window):
    pass