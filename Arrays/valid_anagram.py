# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false
 

# Constraints:

# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

from re import S


def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    s_map = {}
    t_map = {}
    for i in range(len(s)):
        s_map[i] = 1 + s_map.get(s[i], 0)
        t_map[i] = 1 + t_map.get(t[i], 0)
    
    for c in s_map:
        if s_map.get(c) != t_map.get(c):
            return False

    return True