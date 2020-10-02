// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

const frequent = s => {
  //create map to store chars and its count
  let map = new Map()

  //loop through the string, if it doesnt exist in the map, add it with a value of 0, if it does increase the value by 1
  for (let char of s) {
    //set the value to 0
    if (!map.has(char)) map.set(char, 0)

    //the increment by 1
    map.set(char, map.get(char) + 1)
  }
  //spread all values and sort them
  map = [...map].sort((a, b) => a[1] - b[1])
  //this string will hold the values
  let res = ''
  //loop backwards
  for (let i = map.length - 1; i >= 0; i--) {

    let [char, count] = map[i]
    res += char.repeat(count)
  }
  return res
}