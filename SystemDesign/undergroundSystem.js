// implement the class UndergroundSystem that supports three methods:

// 1. checkIn(int id, string stationName, int t)

// A customer with id card equal to id, gets in the station stationName at time t.
// A customer can only be checked into one place at a time.
// 2. checkOut(int id, string stationName, int t)

// A customer with id card equal to id, gets out from the station stationName at time t.
// 3. getAverageTime(string startStation, string endStation) 

// Returns the average time to travel between the startStation and the endStation.
// The average time is computed from all the previous traveling from startStation to endStation that happened directly.
// Call to getAverageTime is always valid.
// You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.

// implement the class UndergroundSystem that supports three methods:

//THOUGHTS
//cant store data in volatile computer memory because computer lose power or fail therefore we should use a permanent medium like a database and also have some database design that helps us
//we also have to consider scalability places like tokyo would have thousands of checkins/checkout


//time complexity for all O(1)
//space: O(P + S^2), s is the number of station and p is the number of passengers. 2 maps fist map size is O(P) because its just passengers checking in and out.
//second map has start and end times of journey over time it could hit every possible pais of the S stations whihc would make it O(S^)
//we dont know which is larger so we add them both together giving us O(P + S^2)

//createe class with map and average
//checkin takes id,timestamp,stationName, set the cutomer with id {sn,ts}
//checkout takes same, create checkin,error if no checkin, create station key
//create sum count obj which is avg key or 0
//set key and {sum: s + t-ct, c: c:1=c+1}
//getavg takes start and end, create sumcount obj whch is avgget ss - es or 0
//return sum / count


class UndergroundSystem {
  customer = new Map();
  avg = new Map();

  checkIn(id, stationName, timeStamp) {
    this.customer.set(id, { stationName, timeStamp });
  }
  checkOut(id, stationName, timeStamp) {
    const checkIn = this.customer.get(id);
    if (!checkIn) throw new Error(`Customer ${id} didn't checked in`);
    const key = `${checkIn.stationName}-${stationName}`;
    const { sum, count } = this.avg.get(key) || { sum: 0, count: 0 };
    this.avg.set(key, { sum: sum + (timeStamp - checkIn.timeStamp), count: count + 1 });
  }
  getAverageTime(startStation, endStation) {
    const { sum, count } = this.avg.get(`${startStation}-${endStation}`) || { sum: 0, count: 0 }
    return sum / count;
  }
}