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