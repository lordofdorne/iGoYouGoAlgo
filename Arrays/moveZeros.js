const moveZeros = nums => {
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

//make variable 'placeNonZeros' or 'j'
//time complexity = O(n)
//space = O(1)

//set a nonZero pointer at 0
//loop through array if a number !== 0 we will swap its place with our non zero pointer and increment the pointer
//exit the loop and loop again setting i at the nonzero pointer, then set the rest of the elems in the array to 0
const secondSolution = nums => {
  let placeNonZeros = 0

  //move non zeros to the position of placenonzeros, move placenonzeros up
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[placeNonZeros] = nums[i]
      placeNonZeros++
    }
  }
  //turn everything else into zeros
  for (let i = placeNonZeros; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}