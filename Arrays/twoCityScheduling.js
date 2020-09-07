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