const fib = num => {
  if (num === 1) return 0
  if (num === 2) return 1

  return fib(num - 1) + fib(num - 2)
}
//Time: O(2^n) || Space: O(n)

const fibMemo = (num, memo) = { 1: 0, 2: 0 } => {
  if (num in memo) {
    return memo[num]
  }

  else {
    memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo)
    return memo[num]
  }
}
//Time: O(n) || Space: O(n)