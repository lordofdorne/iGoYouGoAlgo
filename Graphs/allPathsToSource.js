// Given a directed acyclic graph of N nodes. Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

//create target and result array
//create dfs helper with node and paths. push node into path
//check if the node is our target, if so we can push our path and return
//for of with edge and graph at node
//call dfs with edge and paths values
//exit call dfs with start values and return res



const allPaths = graph => {

  //target is the last value in the graph
  const target = graph.length - 1
  //res array to hold all paths
  const res = []
  //dfs helper function takes a node and a path
  const dfs = (node, path) => {
    path.push(node)
    //if the node is our target we can push that path
    if (node === target) {
      res.push(path)
      return;
    }
    //for of loop through graph at the node
    //call dfs with edge and paths
    for (let edge of graph[node]) {
      dfs(edge, [...path])
    }
  }
  //call dfs starting at 0 and empty array
  dfs(0, [])
  return res
}