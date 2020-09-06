// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.

const maxAreaOfIsland = grid => {
  const res = { count: 0 }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      dfs(grid, r, c, res)
    }
  }
  return res.count
}


//dfs helper
const dfs = (grid, r, c, res, area = { count: 0 }) => {
  if (!grid[r] || !grid[r][c]) return

  res.count = Math.max(res.count, area.count += grid[r][c])
  grid[r][c] = 0

  dfs(grid, r + 1, c, res, area)
  dfs(grid, r - 1, c, res, area)
  dfs(grid, r, c + 1, res, area)
  dfs(grid, r, c - 1, res, area)
}