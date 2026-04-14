# Fixed-size sliding window
# Time: O(n) when each step updates the window in O(1).
# Space: O(k) if storing the window of size k, or O(1) if only aggregates/counts.
# Note: slice + list.remove can be O(k) per step; index-based updates keep O(n) total.

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