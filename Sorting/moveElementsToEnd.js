function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0
  let right = array.length - 1
  while (left < right) {
    while (left < right && array[right] === toMove) right--
    if (array[left] === toMove) {
      swap(array, left, right)
    }
    left++
  }
  return array
}


function swap(array, i, j) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}
