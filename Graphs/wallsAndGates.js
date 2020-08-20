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

