/**
Problem: Minimum Path Sum

You are given a 2D grid of non-negative integers representing a map, where each cell in the grid represents the cost to traverse through that cell. You can only move either right or down at any point in time. 

Write a function `minimumPathSum(grid: number[][]): number` to find the minimum sum of a path from the top-left corner to the bottom-right corner by moving right and down.

Example:
Input:
```
grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
```
Output: 7

Explanation:
The path with minimum sum is `1 -> 3 -> 1 -> 1 -> 1`, with a total sum of 7.

Note:
- You can assume that the grid does not contain any negative numbers.
- You can assume that the grid can be of any size, but will always have at least one cell.
*/ 



function minimumPathSum(grid: number[][]): number {
    // Getting the dimensions of the grid
    let m = grid.length, n = grid[0].length;
    
    // Initializing a 2D array for storing the minimum sum of a path up to each grid cell
    let dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = grid[0][0];  // Minimum sum for the first cell is just the value of the first cell
    
    // Updating dp for the first column
    for(let i = 1; i < m; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // Updating dp for the first row
    for(let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // Updating dp for the remaining cells
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }

    // Returning the minimum sum of a path from the top-left corner to the bottom-right corner
    return dp[m-1][n-1];
}
