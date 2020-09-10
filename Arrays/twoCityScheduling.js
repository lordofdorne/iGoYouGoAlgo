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



const twoCitySchedCost = function (costs) {

  //the amount of people is half the amount of elements in the costs array
  let people = costs.length / 2
  //sort the array to in ascending order, since the arrays are nested we must take extra precaution
  let sorted = costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

  //reduce the array, if the index is less than the amount of people add the cheaper cost, else use the more expesive cost

  return sorted.reduce((total, cost, index) => (index < people) ? total + cost[0] : total + cost[1], 0);
};

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

  for (let i = 0; i < costs.length; i++) {
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