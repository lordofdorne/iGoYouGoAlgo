// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.



// Example 1:

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

twocity = costs => {
  //order the array by the cost of a - b.  If a is cheaper then b, this number will be negative but will represent the money you will save by flying to a instead of b.
  //At this point, you will have a list organized by the money you would save flying to A from greatest savings to least.
  //Then iterate through the array taking the cost of a from the first half and the cost of b for the second half.


  //helper function to track money lost from least to greatest
  //sort the costs argument using the helper function
  //set a totalCost var to zero
  //for loop with 2 pointers, i is zero, j is half of cost, j is less than cost, both incriment
  //add everything to total  cost, costs[i] + costs[j]

  const monelLost = arr => {

    return arr[0] - arr[1]
  }
  costs.sort((a, b) => monelLost(a) - monelLost(b))
  let totalCost = 0

  for (let i = 0, j = costs.length / 2; j < costs.length; i++, j++) {
    totalCost += costs[i][0] + costs[j][1]
  }
  return totalCost

}



//-----------------------------------------

//take absolute difference and sort from largest to smalles
//set a cap, per city a and city b -> cap = costs.length / 2
//have counters to keep track of how many people we fly into the city
//when adding to the sum we pick the city with lower cost, as long as the city is under cap

const secondSolution = costs => {

  let sorted = costs.sort((a, b) => {
    return Math.abs(b[0] - b[1] - Math.abs(a[0] - a[1]))
  })
  let cap = costs.length / 2
  let sum = 0
  //counters
  let cityA = 0
  let cityB = 0

  for (let i = 0; i < sorted.length; i++) {
    let costOfCityA = cost[i][0]
    let costOfCityB = cost[i][1]

    //if cityA is cheaper
    if (costOfCityA <= costOfCityB) {
      if (cityA < cap) {
        sum += costOfCityA
        cityA++
      }
      //else if we reach the cap
      else {
        sum += costOfCityB
        cityB++
      }
    }
    //same thing when sending to cityB but reversed
    else {
      if (cityB < cap) {
        sum += costOfCityB
        cityB++
      } else {
        sum += costOfCityA
        cityA++
      }
    }
  }
  return sum
}