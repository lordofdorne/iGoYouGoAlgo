def sliding_window_fixed(input, window_size):
    ans = window = input[0:window_size]
    for right in range(window_size, len(input)):
        left = right - window_size
        window.remove(input[left])
        window.append(input[right])
        ans = optimal(ans, window)
    return ans

def optimal(ans, window):
    pass