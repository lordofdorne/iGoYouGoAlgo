//worst cas runtime: n^2
//find largest element in the array and drag it to the right hand side
const bubbleSort = array => {

  for (let i = 0; i < array.length; i++) {
    //arr.length -1 -1 to handle the first interation
    for (let j = 0; j < (array.length - i - 1); j++) {

      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }
  return array
}
//n^2
const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    //assume that elem i is the least in the array, assign to indexOfMin.
    let indexOfMin = i
    //set for loop to validate assumption
    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      const lesser = array[indexOfMin]
      array[indexOfMin] = array[i]
      array[i] = lesser
    }
  }
  return array
}


//n*log(n)
const mergeSort = array => {
  //if the length is 1 the array cannot be split anymore
  if (array.length === 1) return array
  //get the center point
  const center = Math.floor(array.length / 2)
  //left side is everything in the array from the start  and up to but not including the center
  let left = array.slice(0, center)
  //the right side takes everthing from the center all the way to the end
  let right = array.slice(center)
  //recursively call the function to keep splitting the arrays
  return merge(mergeSort(left), mergeSort(right))


}

const merger = (left, right) => {
  let results = []

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}