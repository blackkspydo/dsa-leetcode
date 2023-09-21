/**
Problem Description:

You are given an array of unique integers from 1 to n, inclusive, where one element is missing. Your task is to find and return this missing number.

You need to implement the function `findMissingNumber(nums: number[]): number` which will take in one parameter:
- `nums` (1 <= nums.length <= 10^4) - an array of distinct integers from 1 to n-1, without the missing element.

The function should return the missing number.

You can assume that the input array will always be valid and will only contain distinct integers from 1 to n-1.

Example:

Input:
```typescript
findMissingNumber([1, 2, 4, 5, 6, 7, 8, 9, 10])
```
Output:
```typescript
3
```

Input:
```typescript
findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10])
```
Output:
```typescript
8
```

Note:

In the first example, the missing number is 3, as it should be part of the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], but it is not included.

In the second example, the missing number is 8, as it should be part of the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], but it is not included.
*/ 



// Function to find the missing number
function findMissingNumber(nums: number[]): number {
    // Expected sum of numbers
    let expectedSum = (nums.length + 1)*(nums.length + 2) / 2;
    // Actual sum of numbers
    let actualSum = nums.reduce((a, b) => a + b, 0);
    // Return the missing number
    return expectedSum - actualSum;
}
