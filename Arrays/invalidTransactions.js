
// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

// Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.



// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]

//helper function
const isNew = (str, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (str === arr[i]) return false
  }
  return true
}


const invalidTransactions = transactions => {
  let invalid = []
  let transactionsByName = {}

  //loop through transactions
  for (let i = 0; i < transactions.length; i++) {
    //split them into seperate arrays
    let curr = transactions[i]
    let info = curr.split(",")
    let name = info[0],
      time = info[1],
      amount = info[2],
      city = info[3];

    //create an object with time, amount, and city
    let obj = { time, amount, city }

    //check to see if the amount is invalid , if so push into the invalid array
    if (amount > 1000) invalid.push(curr)
    //if name doesnt exist exist, add it and its values to the name object
    if (!transactionsByName[name]) {
      transactionsByName[name] = [obj]
    } else {
      //compare transaction to the previous one
      for (let j = 0; j < transactionsByName[name].length; j++) {
        let previous = transactionsByName[name][j];
        if (previous.city !== city && Math.abs(time - previous.time) <= 60) {
          let previousTransation = [
            name,
            previous.time,
            previous.amount,
            previous.city
          ].join(",")
          if (isNew(curr, invalid)) invalid.push(curr)
          if (isNew(previousTransation, invalid)) invalid.push(previousTransation)
        }
      }
      transactionsByName[name].push(obj)
    }
  }
  return invalid
}