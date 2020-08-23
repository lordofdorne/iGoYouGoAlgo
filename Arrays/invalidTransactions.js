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
    let name = info[0]
    time = info[1]
    amount = info[2]
    city = info[3]

    //create an object with time, amount, and city
    let obj = { time, amount, city }

    //check to see if the amount is invalid , if so push into the invalid array
    if (amount > 1000) invalid.push(curr)
    //if name doesnt exist exist, and it and its values to the name object
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
            previous.city
          ].join(",")
          if (isNew(current, invalid)) invalid.push(current)
          if (isNew(previousTransation, invalid)) invalid.push(previousTransation)
        }
      }
      transactionsByName[name].push(obj)
    }
  }
  return invalid
}