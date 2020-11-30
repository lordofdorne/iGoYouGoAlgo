// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

const merge = intervals => {
  let res = []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  for (let i = 0; i < intervals.length; i++) {
    let pre = res[res.length - 1]

    if (i === 0 || intervals[i][0] > pre[1]) {
      res.push(intervals[i])
    } else {
      pre[1] = Math.max(pre[1], intervals[i][1])
    }
  }
  return res
}