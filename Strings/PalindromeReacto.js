// we need to strip potential non-alphanumeric characters thus convert to lower-case.
//So in all of the following solutions, we will be using this clean function to get a clean sequence of characters removing non-alphanumeric characters and converting to lower-case



const clean = str => str.toLowerCase().replace(/[\W_]/g)

// Alright, let’s turn to use some of JavaScripts inbuilt methods.
// This solution is very intuitive — we will simply reverse the string and compare it to the original. If they are equal, it’s a palindrome.
// With this solution we are using the inbuilt methods split() which will split a string into an array, reverse() which will reverse the order of an array and join which will concatenate the elements of the array back together as a string.

function palindrome(str) {
  const cleanStr = clean(str)
  const reversed = cleanStr.split('').reverse('').join('')


  return cleanStr === reversed
}


// This method is similar to the previous, but instead of using a regular for loop, we are using for…of
// With this approach, we convert the string into an array and then we iterate through each element.
// For each element, we remove the last element of the array using pop() and then we compare the current element with that.
// Again, if any of these does not equal, it’s not a palindrome, and we break out and return false.
// Since we reduce the array as we iterate, using mutation, we still only do string.length / 2 total iterations.

const palindrome = str => {
  const cleanStr = clean(str)
  const charArr = cleanStr.split('')

  for (let char of charArr) {
    if (c !== charArr.pop()) {
      return false
    }
  }
  return true
}

// Let’s start with a very straight forward approach.
// The solution is to iterate through the characters using a for loop.
// For each character at position i, we compare with the character at position i from the end.
// If any of these does not equal, we can reject the input as being a palindrome and break out of the loop and return false.
// We also only need to iterate through the half of the string, since going through the whole string would be comparing every character twice.
// Therefore, we ensure to only do string.length / 2 total iterations.

const palindrome = str => {
  const cleanStr = clean(str)

  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}