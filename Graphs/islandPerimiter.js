// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

var islandPerimeter = function (grid) {
  let count = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        //first row or top
        if (row === 0 || grid[row - 1][col] === 0) {
          count++
        }

        if (col === grid[0].length - 1 || grid[row][col + 1] === 0) {
          count++
        }

        if (row === grid.length - 1 || grid[row + 1][col] === 0) {
          count++
        }

        if (col === 0 || grid[row][col - 1] === 0) {
          count++
        }
      }
    }
  }
  return count
};