//Time O(n^2) | Space O(1)

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i

    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1)
    }
  }
  return array
}

const swap = (array, i, j) => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}