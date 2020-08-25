const moveZeros = num => {
  let i = 0
  let count = 0


  while (i < nums.length - count) {
    if (!nums[i]) {
      nums.splice(1, 1)
      nums.push(0)
      count++
    } else {
      i++
    }
  }
  return nums
}