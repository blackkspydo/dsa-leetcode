/**
Title: Shortest Path in Maze

Problem Description:
You are given a maze represented by an N x N grid. Each cell in the grid can be either empty or blocked. The starting position is given as the top-left corner of the grid, denoted by the coordinates (0, 0). Your task is to find the shortest path from the starting position to the destination, which is the bottom-right corner of the grid, denoted by the coordinates (N-1, N-1).

Write a function `findShortestPathInMaze(grid: string[][]): number` that takes in a two-dimensional array of characters 'E' (empty) and 'B' (blocked), representing the maze. The function should return an integer representing the minimum number of steps required to reach the destination. If there is no valid path, return -1.

In one step, you can move from any cell to any of its adjacent cells (up, down, left, or right). A path can only pass through empty cells and cannot go through blocked cells.

It is guaranteed that the top-left and bottom-right cells will always be empty and the maze will have at least one valid path.

Function Signature:
```typescript
function findShortestPathInMaze(grid: string[][]): number {
    
}
```

Example:
```
Input:
[
  ["E", "E", "E", "E"],
  ["B", "B", "B", "E"],
  ["E", "E", "E", "E"],
  ["E", "B", "B", "E"]
]

Output: 5
Explanation: The shortest path from (0, 0) to (3, 3) is: (0, 0) -> (1, 0) -> (2, 0) -> (2, 1) -> (2, 2) -> (2, 3) -> (3, 3). The total number of steps is 5.
```

Note:
- You can assume that the input maze grid will be a square grid with dimensions N x N, where 1 ≤ N ≤ 100.
*/ 



function findShortestPathInMaze(grid: string[][]): number {
    const N = grid.length;
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    // create a queue and push start node into it
    const q = [];
    const startNode = { x: 0, y: 0, dist: 0 };
    visited[0][0] = true;
    q.push(startNode);

    while (q.length) {
        const { x, y, dist } = q.shift();

        // if destination is reached, return the distance
        if (x === N - 1 && y === N - 1) {
            return dist;
        }

        // check for all possible movements from current cell and enqueue each valid movement
        for (let i = 0; i < dx.length; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];

            if (newX >= 0 && newX < N && newY >= 0 && newY < N && !visited[newX][newY] && grid[newX][newY] !== "B") {
                visited[newX][newY] = true;
                q.push({ x: newX, y: newY, dist: dist + 1 });
            }
        }
    }

    return -1;  // return -1 if there does not exist a path
}
