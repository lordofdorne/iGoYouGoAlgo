//DFS



const numIslands = grid => {
  let islands = 0

  for (let row = 0; r < grid.length; row++) {
    for (let col = 0; c < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        islands++
        dfs(row, col)
      }
    }
  }
  const dfs = (row, col) => {
    if (row < 0 || row > grid.length || grid[row][col] !== 1) return

    grid[row][col] = '0'

    dfs(row + 1, col)
    dfs(row - 1, col)
    dfs(row, col + 1)
    dfs(row, col - 1)
  }
  return islands
}

