/**
Problem:

You are given a 2D binary matrix represented by an array of strings. The matrix contains only 0's and 1's, where 0 represents an empty space and 1 represents a filled space.

Your task is to find the area of the largest square containing only 1's in the matrix and return its side length. If no such square exists, return 0.

Function Signature:

```typescript
/**
 * Returns the side length of the largest square containing only 1's in the given matrix.
 * @param matrix A 2D binary matrix represented as an array of strings.
 * @returns The side length of the largest square containing only 1's, or 0 if no such square exists.
 */
function maximalSquare(matrix: string[]): number {
    
}
```

Example 1:

```typescript
const matrix = ["10100", "10111", "11111", "10010"];
const result = maximalSquare(matrix);
console.log(result);
// Output: 4
// Explanation: The largest square containing only 1's is formed by the submatrix:
// 1 1 1 1
// 1 0 1 1
// 1 1 1 1
// 1 0 0 1
// The side length of this square is 4.
```

Example 2:

```typescript
const matrix = ["11", "11"];
const result = maximalSquare(matrix);
console.log(result);
// Output: 4
// Explanation: The entire matrix is filled with 1's, forming a square of side length 2. Therefore, the area is 2^2 = 4.
```

Example 3:

```typescript
const matrix = ["000", "000", "000"];
const result = maximalSquare(matrix);
console.log(result);
// Output: 0
// Explanation: There is no square containing only 1's in the matrix, hence the area = 0.
```
*/ 



function maximalSquare(matrix: string[]): number {
    // Initialize helper variables
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0;
    let maxSide = 0; // Holds the maximum side length of the square.

    // Initialize 2D array for dynamic programming
    let dp = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));

    // Loop over the input matrix
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (parseInt(matrix[i - 1][j - 1]) === 1) {
                dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    // Return the area of the square (side length squared)
    return maxSide * maxSide;
}
