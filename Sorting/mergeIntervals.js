// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

//create res array
//sort intervals by first elem
//loop through intervals, set pre as top of res
//check for index is 0 or overlapping 10 > 1, if so push current
//else set previous 1, i0
// //return res
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


const merge = intervals => {
  let res = []

  //sort the starting points of the array
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  //loop through the array AND create the previous variable
  for (let i = 0; i < intervals.length; i++) {
    let pre = res[res.length - 1]

    //if i is 0 or they overlap push into the results array
    if (i === 0 || intervals[1][0] > pre[1]) {
      res.push(intervals[i])
    } else {
      //set  previous 
      pre[1] = Math.max(pre[1], intervals[i][0])
    }
  }
  //return result string
  return res
}