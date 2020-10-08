// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Example 2:

// Input: [[7,10],[2,4]]
// Output: 1

//sort intervals by start times
//create rooms which is the first elem of intervals in an array
//loop through intervals create meeting, room, and roomTaken boolean
//nested loop through rooms
//if room is meeting continue
//if second room less than or eql to current time set as null to clear room
// if room is null and isnt taken set roomj as meeting, set roomtaken to true
//if j is last element in rooms and room isnt taken push that meeting into room
//break all and return rooms length


const minMeetingRooms = intervals => {
  if (!intervals.length) return 0;
  //sort by start times
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  //place the first meeting into the first room
  let rooms = [intervals.shift()];

  //loop thorugh meetings, set current meeting, its start time, and a boolean to see if room is taken
  for (let i = 0; i < intervals.length; i++) {
    let meeting = intervals[i];
    let currentTime = meeting[0];
    let roomTaken = false;

    //loop through existing rooms, set current room,
    for (let j = 0; j < rooms.length; j++) {
      let room = rooms[j];
      //if we already placed a room for a meeting continue to next room
      if (room === meeting) continue;

      //if the meeting in the current time has ended clear that room
      if (room[1] <= currentTime) {
        room = null;
      }

      //if the room is null and we havent found an empty room, place the meeting in that room, set boolean to true
      if (room === null && !roomTaken) {
        rooms[j] = meeting;
        roomTaken = true;
      }
      //if we reach the end and rooms have not been placed in rooms, add meeting to rooms
      if (j === rooms.length - 1 && !roomTaken) {
        rooms.push(meeting);
      }
    }
  }
  return rooms.length;
};