// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

//create a set with the dictionary
//create an array with 1 plus the strings length and fill them with false values
//set the first element in the array as true
//1st loop frm end of word, 2nd loop frm start of word
//continue if current word isnt valid
//create word by slicing
//if our set has the word set it as true in our table and break
//exit outer loop and return the array with at the length of our string


var wordBreak = function (s, wordDict) {
  const dict = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) { // end of word
    for (let j = 0; j < i; j++) { // start of word
      if (!dp[j]) continue; // if not valid start continue
      const word = s.slice(j, i)
      if (dict.has(word)) {
        dp[i] = true; // mark as valid start
        break;
      }
    }
  }
  return dp[s.length];
};