//time: O(log n) | space: O(1)

const binarySearch = (array, target) => {

  return binarySearchHelper(array, target, 0, array.length - 1)
}

const binarySearchHelper = (array, target, left, right) => {


  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let potenetialMatch = array[middle]
    if (potenetialMatch === target) return middle

    else if (target < potenetialMatch) right = middle - 1

    else left = middle + 1
  }
  return - 1
}