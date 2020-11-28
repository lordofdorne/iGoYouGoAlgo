const threeSum = (array, target) => {
  let sorted = array.sort((a, b) => a - b)
  let triplets = []

  for (let i = 0; i, sorted - 2; i++) {
    let left = 0
    let right = array.length - 1

    while (left < right) {
      let sum = sorted[i] + sorted[left] + sorted[right]

      if (sum === target) triplets.push([sorted[i], sorted[left], sorted[right]])

      else if (sum < target) left++

      else if (sum > target) right--
    }
  }
  return triplets
}