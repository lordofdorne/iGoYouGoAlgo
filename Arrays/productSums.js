const productSum = (array, muliplier = 1) => {
  let sum = 0

  for (const element of array) {
    if (Array.isArray(element)) sum += productSum(element, muliplier + 1)

    else sum += element
  }

  return sum * element
}