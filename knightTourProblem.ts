/**
Problem Title: Knight's Tour Problem

Problem Description:
Imagine you have a chessboard of size `N x N`, where `N` is a positive integer. Every cell of the chessboard represents a square on which a knight can be placed. The knight is initially placed on an empty cell of the chessboard.

Now, your task is to write a function `knightTour(boardSize: number): number[][]` that finds a sequence of moves for the knight such that it visits every cell of the chessboard exactly once, following the rules of a knight's move.

A knight's move is defined as follows:
- The knight can move in an L-shape: two squares in one direction (horizontally or vertically) and then one square in a perpendicular direction.
- The knight can move to any of the 8 cells that can be reached from its current position using an L-shape move.

Your function should return a 2D array `path` consisting of the sequence of cell positions that the knight should follow in order to visit every cell of the chessboard exactly once. Each cell position `path[i][j]` should contain the row number in the first element, and the column number in the second element. The first cell position in the path should correspond to the initial cell position of the knight.

If there are multiple valid solutions, you can return any valid one.

Function Signature:
function knightTour(boardSize: number): number[][]

Example:
Input:
boardSize = 5

Output:
[
  [2, 0], 
  [0, 1], 
  [1, 3], 
  [3, 2], 
  [4, 0], 
  [2, 1], 
  [0, 0], 
  [1, 2], 
  [3, 3], 
  [4, 1], 
  [2, 2], 
  [0, 3], 
  [1, 1], 
  [3, 0], 
  [4, 2], 
  [2, 3], 
  [0, 4], 
  [1, 0], 
  [3, 1], 
  [4, 3], 
  [2, 4], 
  [0, 2], 
  [1, 4], 
  [3, 4], 
  [4, 4]
]

Note:
In the above example, the function finds a valid path for a 5x5 chessboard where the knight visits every cell exactly once, following the rules of a knight's move. The first cell position is [2, 0], and the last cell position is [4, 4].
*/ 



function knightTour(boardSize: number): number[][] {
  const result = Array(boardSize).fill(0).map(() => Array(boardSize).fill(0));
  const path = [];
  const moves = [
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2]
  ];
  
  // If the solution exists, it returns the path, else returns []
  if (!solve(0, 0, 1)) {
    return [];
  }
  
  function solve(i: number, j: number, count: number): boolean {
    // If the knight has visited all cells
    if (count === boardSize ** 2) {
      return true;
    }
    
    // Try all moves from the current possition
    for (let k = 0; k < 8; k++) {
      let newI = i + moves[k][0];
      let newJ = j + moves[k][1];
      
      // If the new positon is valid (inside of the board and not visited)
      if (isValid(newI, newJ) && result[newI][newJ] === 0) {
        result[newI][newJ] = count;
        path.push([newI, newJ]);
        
        // If the solution does not exist, backtrack
        if (solve(newI, newJ, count + 1)) {
          return true;
        }
        
        // Backtracking
        result[newI][newJ] = 0;
        path.pop();
      }
    }
    
    // No solution from this path
    return false;
  }
  
  function isValid(i: number, j: number): boolean {
    return (i >= 0 && i < boardSize && j >= 0 && j < boardSize);
  }

  return path;
}
