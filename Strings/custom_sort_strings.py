# You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

# Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

# Return any permutation of s that satisfies this property.

class Solution:
    def customSortString(self, order: str, s: str) -> str:
        s_map = {}
        res = []

        for i in s:
            s_map[i] = 1 + s_map.get(i, 0)
        
        for char in order:
            if char in s_map:
                res.extend(char * s_map[char])
                del s_map[char]
        
        for char,count in s_map.items():
            res.extend([char * count])
        
        return ''.join(res)

# Time: O(N)
# Space: O(N)