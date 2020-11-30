// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.




var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]

  //insert new interval in correct location
  const output = []
  let pushed = false

  //loop and if we have not pushed new int into output and new interval occurs first push set true
  for (const i of intervals) {
    if (!pushed && newInterval[0] <= i[0]) {
      output.push(newInterval)
      pushed = true
    }
    //continue to push
    output.push(i)
  }
  //the new interval shoule be at end of output
  if (!pushed) output.push(newInterval)

  //merge intervals
  return mergeIntervals(output)
};

const mergeIntervals = intervals => {
  const output = []
  let candidateInterval = intervals[0]

  //check for overlapping
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i]

    if (currentInterval[0] <= candidateInterval[1]) {
      //merge
      candidateInterval[1] = Math.max(candidateInterval[1], currentInterval[1])
    } else {
      output.push(candidateInterval)
      candidateInterval = currentInterval
    }
  }
  //push the last candidate
  output.push(candidateInterval)
  return output
}
