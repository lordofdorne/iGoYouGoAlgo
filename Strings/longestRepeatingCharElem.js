// Maintain left and right pointer, max instances of a single char, and visit counts for each char.
// for each char in string
// increment visit count for this char
// if new visit count is higher than max, update max
// if length of current string without max char count is greater than k,
// then we know the new char made it such that there are more chars missing than can be replaced by k,
// so we will remove the first char
// and increment left pointer
// increment right pointer to look at next char.
// In the end, the answer is whatever the window size is. This is because we never shrink the window size.
// As we look at new chars, we increase the window size.
// Once we see we can no longer increase due to limitation of k, we slide the window forward.
// In these inbetween states, it's possible the window doesn't span a valid subset,
// but that doesn't matter because the window size at one point did span a valid set.
// Instead, we wait until there's a possibility of a better set, which is when there is a substring with more instances of some char.


const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};