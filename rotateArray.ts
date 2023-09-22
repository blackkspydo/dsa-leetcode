/**
Problem Title: Rotate Array

Problem Description:
Given a file named "rotateArray.ts", write a function that takes in an array of integers as input and rotates the elements in the array to the right by a given number of steps.

The function should have the following signature:
```typescript
function rotateArray(nums: number[], steps: number): number[] {...}
```

Input:
The function should accept two parameters:
- `nums` (1 <= nums.length <= 10^5): A non-empty array containing integer values that need to be rotated.
- `steps` (0 <= steps <= 10^5): An integer representing the number of steps to rotate the array.

Output:
The function should return the rotated array.

Examples: 

Example 1:
```typescript
rotateArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
```
Explanation: The given array is [1, 2, 3, 4, 5]. By rotating the array to the right by 2 steps, the resulting array would be [4, 5, 1, 2, 3].

Example 2:
```typescript
rotateArray([7, -3, 8, 0, 4], 3) => [8, 0, 4, 7, -3]
```
Explanation: The given array is [7, -3, 8, 0, 4]. By rotating the array to the right by 3 steps, the resulting array would be [8, 0, 4, 7, -3].

Note:
- The rotation should be done in-place, meaning the original array should be modified.
- You may assume that the input array `nums` is non-empty and the number of steps `steps` is within the valid range.
*/ 



/**
 * function rotates an array of integers to the right by a given number of steps.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} steps - The number of steps to rotate the array.
 * @returns {number[]} - The rotated array.
 */

function rotateArray(nums: number[], steps: number): number[] {
  steps %= nums.length;  // If steps greater than array length, get remainder
  reverse(nums, 0, nums.length - 1);  // Reverse the whole array
  reverse(nums, 0, steps - 1);  // Reverse the first 'steps' elements
  reverse(nums, steps, nums.length - 1);  // Reverse the rest
  return nums;
}

/**
 * function reverses the array elements from the start index to the end index.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} start - The start index to begin the reversal.
 * @param {number} end - The end index to finish the reversal.
 */

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
