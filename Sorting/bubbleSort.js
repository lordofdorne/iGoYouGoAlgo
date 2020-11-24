
//Time O(n) | Space O(1)
const bubbleSort = array => {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        isSorted = false
      }
    }
  }
  return array
}

const swap = (array, i, j) => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}