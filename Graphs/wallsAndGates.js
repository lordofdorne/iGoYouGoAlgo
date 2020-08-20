const wallGates = (rooms) => {

  let travel = (i, j, count) => {
    if (i < 0 || j < 0 || i >= rooms.length || j >= rooms[0].length) return;

    if (rooms[i][j] === -1) return

    if (rooms[i][j] === 0 && count !== 0) return

    if (rooms[i][j] < count) return

    if (rooms[i][j] < count) {
      rooms[i][j] = count
    }
    count++
    travel(i - 1, j, count) //left
    travel(i + 1, j, count) //right
    travel(i, j - 1, count) //up
    travel(i, j + 1, count) //down
  }
  if (rooms.length == 0) return;

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        travel(i, j, 0)
      }
    }
  }
}



//-----------------------------
//this can be solved with dfs
const dfs = (rooms, row, col, distance) => {
  //checks to see if we are still in grid, out of bounds too far to the left
  const lessThanLowerBound = row < 0 || col < 0;
  //to far to the left
  const moreThanHigherBound = row >= rooms.length || col >= rooms[0].length;
  //the last check is a case where we already found a shorter distance or hit a wall, if thats the case we need to simply return
  if (lessThanLowerBound || moreThanHigherBound || rooms[row][col] === -1 || rooms[row][col] < distance) {
    return;
  }
  //record the distance we have at the current cell
  rooms[row][col] = distance;

  //traverse all the neighboring cells // think of 2d GRID
  dfs(rooms, row - 1, col, distance + 1); // left
  dfs(rooms, row + 1, col, distance + 1); // right
  dfs(rooms, row, col - 1, distance + 1); // up
  dfs(rooms, row, col + 1, distance + 1); // down

}
//-----

//now that we have our dfs function we can use in 
var wallsAndGates = function (rooms) {
  if (!rooms || !rooms.length) {
    return;
  }

  //loop through 2d array
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      //if we find a gate then run dfs
      if (rooms[row][col] === 0) {
        dfs(rooms, row, col, 0);
      }
    }
  }
}