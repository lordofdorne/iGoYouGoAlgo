// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Time complexity : O(n^2)

// Space complexity : O(1)

const maxProfit = (prices) => {
  //set a variable to keep count of the highest profit
  let maxProfit = 0

  //create a loop to iterate through the prices until the second  to last element
  for (let i = 0; i < prices.length - 1; i++) {

    //the inner loop compares prices[i] to the future prices to compare

    for (let j = i + 1; j < prices.lengthl j++) {
      let profit = prices[j] - prices[i]

      if (profit > maxProfit) maxProfit = profit
    }
  }
  return maxProfit
}


// Time complexity : O(n)

// Space complexity : O(1) + O(1) = O(1)

const maxProfit = function (prices) {
  //intialize a variable to keep count of the current highest profit
  let maxProfit = 0;
  //we can also initialize min at prices[0] because the starting value of min will most likely be reassigned when we see a lower price-point
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    //if the current price is less than the lowest price point we've seen so far, reassign the min
    if (prices[i] < min) {
      min = prices[i]
    }
    let profit = prices[i] - min
    if (profit > maxProfit) {
      maxProfit = profit
    }
  }
  return maxProfit
};