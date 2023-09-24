/**
Title: Unique Paths in a Matrix

Problem Description:
You are given a 2D matrix of size m x n, where each cell represents a spot in the matrix. The matrix contains obstacles at certain cells, represented by 'X', and empty spaces, represented by '.'. You can only move either right or down at any point in time. The goal is to count the number of unique paths from the top-left cell to the bottom-right cell, while avoiding obstacles.

Write a function `uniquePathsInMatrix` to solve this problem, which takes in the matrix as input and returns the number of unique paths.

Function Signature:
```typescript
function uniquePathsInMatrix(matrix: string[][]): number
```

Input:
The input matrix is a 2D array of strings `matrix` of size `m x n` (1 <= m, n <= 100). 

The matrix will contain only two characters:
- 'X': representing an obstacle cell.
- '.': representing an empty space cell.

The top-left cell is always empty (represented by '.'). The bottom-right cell is always empty (represented by '.'), and there is at least one valid path from the top-left cell to the bottom-right cell.

Output:
Return an integer representing the number of unique paths from the top-left cell to the bottom-right cell, while avoiding obstacles.

Example:
```typescript
const matrix: string[][] = [
  [ '.', '.', '.', '.' ],
  [ '.', 'X', '.', '.' ],
  [ '.', '.', '.', 'X' ],
  [ '.', '.', '.', '.' ],
];

const pathsCount: number = uniquePathsInMatrix(matrix);
console.log(pathsCount); // Output: 6

Explanation: The matrix represents a 4x4 grid where '.' represents an empty cell and 'X' represents an obstacle. The top-left cell is located at [0, 0], and the bottom-right cell is located at [3, 3]. There are 6 unique paths from the top-left to the bottom-right cell that avoid obstacles:
1. Right -> Right -> Down -> Down
2. Right -> Down -> Right -> Down
3. Right -> Down -> Down -> Right
4. Down -> Right -> Right -> Down
5. Down -> Right -> Down -> Right
6. Down -> Down -> Right -> Right
```

Note:
- You can only move either right or down from any given cell.
- Obstacle cells must be avoided.
- The top-left and bottom-right cells are always empty and can be traversed.
- The constraints ensure that the matrix size is within reasonable limits, so there is no need to be concerned about performance optimization.
*/ 



function uniquePathsInMatrix(matrix: string[][]): number {
  const rows = matrix.length;
  const columns = matrix[0].length;

  // Initialize a DP table with zeros
  let dp: number[][] = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(0));

  // Start from the top left cell
  dp[0][0] = matrix[0][0] === '.' ? 1 : 0;

  // Calculate paths for the first row
  for (let i = 1; i < columns; i++) {
    if (matrix[0][i] === '.') {
      dp[0][i] = dp[0][i - 1];
    }
  }

  // Calculate paths for the first column
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] === '.') {
      dp[i][0] = dp[i - 1][0];
    }
  }

  // Calculate paths for all other cells
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (matrix[i][j] === '.') {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rows - 1][columns - 1];
}


This script presents a dynamic programming approach to solve the given problem. The `uniquePathsInMatrix` function uses a DP table, where `dp[i][j]` stands for the number of unique paths from the top left to `matrix[i][j]`. It iterates over the matrix and, for each cell, checks if it is not an obstacle. If the cell is not an obstacle, it adds the number of unique paths from the cell above and the cell to the left in order to calculate the number of unique paths reaching the current cell. If the cell is an obstacle, no path can lead to it, so the number of unique paths is zero. The function finally returns the number of unique paths from the top left to the bottom right cell, stored in `dp[rows - 1][columns - 1]`.