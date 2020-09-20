const spiralOrder = grid => {
  if (grid === null || grid.length === 0) return grid;

  let dRow = [0, +1, 0, -1]; // row directions  0 = right 1 = down left up

  let dColumn = [+1, 0, -1, 0]; // column directions

  //to go down, grid[dRow[1]][dColumn[1]] = grid[r+1][c+0]
  let row = 0;
  let col = 0;
  let direction = 0;
  let result = [];
  let size = grid.length * grid[0].length

  for (let i = 0; i < size; i++) {
    result.push(grid[row][col]); // add the current number

    grid[row][col] = null; // mark it as null

    // if we follow the direction and encounter a null
    if (
      !grid[row + dRow[direction]] ||
      !grid[row + dRow[direction]][col + dColumn[direction]]
    ) {
      direction = (direction + 1) % 4; //change to the next direction
    }
    // apply the direction
    row += dRow[direction];
    col += dColumn[direction];
  }
  return result;
}
