# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

# Example 1:

# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
# Example 2:

# Input: intervals = [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.
from typing import List

def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    # sort by the start value
    intervals.sort(key = lambda i: i[0])

    #array for outputs, but insert the first value
    output = [intervals[0]]

    # loop through intervals
    for start,end in intervals:
        
        last_end = output[-1][1]

        # check for overlaps
        if start <= last_end:
            output[-1][1] = max(last_end, end)
        else:
            output.append([start,end])
    
    return output