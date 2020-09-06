// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the current board.



// Example:

// Input:
// board =
// [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

// Output:
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

const candyCrush = board => {
  let rows = board.length
  let colums = board[0].length
  let runAgain = false

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col + 2 < colums; col++) {
      let curr = Math.abs(board[row][col])
      if (
        curr !== 0 &&
        curr !== Math.abs(board[row][col + 1]) &&
        curr !== Math.abs(board[row][col + 2])

      ) {
        board[row][col] = board[row][col + 1] = board[row][col + 2] = -curr
        runAgain = true
      }
    }
  }

  for (let row = 0; row + 2 < rows; row++) {
    for (let col = 0; col < colums; col++) {
      let curr = Math.abs(board[row + 1][col])

      if (
        curr !== 0 &&
        curr === Math.abs(board[row + 1][col]) &&
        curr === Math.abs(board[row + 2][col])
      ) {
        board[row][col] = board[row + 1][col] = board[row + 2][col] = -curr;
        runAgain = true
      }
    }
  }

  const gravity = grid => {
    for (let col = 0; col < grid[0].length; col++) {
      let nums = []
      for (let row = grid.length - 1; row >= 0; row--) {
        nums.push(grid[row][col])
      }
      let filtered = nums.filter(el => el > 0)
      for (let row = grid.length - 1; row >= 0; row--) {
        let num = filtered.pop()
        if (num) grid[row][col] = num

        else grid[row][col] = 0
      }
    }
    return grid
  }
  let grid = gravity(board)
  return runAgain ? candyCrush(grid) : board
}