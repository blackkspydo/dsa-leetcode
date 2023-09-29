/**
Problem Title: Count Number of Islands

Problem Description:
You are given a 2D matrix, represented by a given file name "countNumberOfIslands.ts", where 1 represents land and 0 represents water. Your task is to write a function `countNumberOfIslands(matrix: number[][]): number` that counts the number of islands present in the matrix.

An island is defined as a group of adjacent land cells (horizontally or vertically) forming a connected component. Two land cells are considered adjacent if they share a common side.

Your function should return the total number of islands in the matrix.

Examples:
1. Given the matrix:
   ```
   [
     [1, 1, 0, 0, 0],
     [1, 1, 0, 0, 0],
     [0, 0, 0, 1, 1],
     [0, 0, 0, 1, 1]
   ]
   ```
   The function should return 3, as there are 3 islands in the matrix.

2. Given the matrix:
   ```
   [
     [1, 0, 1],
     [0, 1, 0],
     [1, 0, 1]
   ]
   ```
   The function should return 5, as there are 5 islands in the matrix.

Note:
- The matrix may be empty, in which case the function should return 0.
- The input matrix will contain only 0s and 1s.
- You can assume that the input matrix is rectangular, meaning that each row has the same length.
*/ 



// TypeScript implementation for finding the count of islands

// Create a function to check the boundary conditions
function isOnGrid(i: number, j: number, rows: number, cols: number): boolean {
  return i >= 0 && i < rows && j >= 0 && j < cols;
}

// Create a function to recursively perform depth-first search on the matrix
function dfs(matrix: number[][], i: number, j: number, rows: number, cols: number): void {
  // Stop condition for recursion
  if (!isOnGrid(i, j, rows, cols) || matrix[i][j] === 0) return;
  // Mark the cell as visited
  matrix[i][j] = 0;
  // Check neighbours
  dfs(matrix, i + 1, j, rows, cols);
  dfs(matrix, i - 1, j, rows, cols);
  dfs(matrix, i, j + 1, rows, cols);
  dfs(matrix, i, j - 1, rows, cols);
}

// Create a function to find the count of islands
function countNumberOfIslands(matrix: number[][]): number {
  // If matrix is empty then return 0 islands
  if (matrix.length === 0) return 0;
  // Determine the number of rows and columns
  const rows = matrix.length;
  const cols = matrix[0].length;
  // Create a variable to store the count of islands
  let islandCount = 0;
  // Loop through the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If land is found, call DFS function and increment islandCount
      if (matrix[i][j] === 1) {
        dfs(matrix, i, j, rows, cols);
        islandCount++;
      }
    }
  }
  // Return the count of islands
  return islandCount;
}

