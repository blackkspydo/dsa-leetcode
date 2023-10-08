/**
Problem Statement:

You are given two sorted arrays `arr1` and `arr2` of integers. The length of `arr1` is `m` and the length of `arr2` is `n`.

Your task is to find the median of the combined sorted array formed by merging `arr1` and `arr2`.

Write a function `findMedianSortedArrays` to solve the problem. This function should take in the following parameters:

- `arr1`: A sorted array of length `m` containing distinct integers.
- `arr2`: A sorted array of length `n` containing distinct integers.

The function should return a single integer, which represents the median of the combined sorted array.

**Note:**

- The combined sorted array should be formed by merging `arr1` and `arr2` in non-decreasing order.
- If the combined sorted array has an odd length, the median is the middle element.
- If the combined sorted array has an even length, the median is the average of the two middle elements.

**Constraints:**

- The lengths of `arr1` and `arr2` satisfy the following conditions: `0 <= m <= 1000` and `0 <= n <= 1000`.
- The lengths of `arr1` and `arr2` sum up to an even number: `m + n` is even.
- The elements in `arr1` and `arr2` are distinct integers.

**Example:**

Input:
  `arr1 = [1, 3]`
  `arr2 = [2]`

Output:
  `2.0`

Explanation:
  After merging `arr1` and `arr2`, the combined sorted array is `[1, 2, 3]`. The median is `2.0`.

**Note:**

- You may assume that `arr1` and `arr2` cannot be empty.
*/ 



function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
  // Merging arr1 and arr2 into a single sorted array
  const sortedArray: number[] = [...arr1, ...arr2].sort((a, b) => a - b);

  // Getting the middle index of the sorted array
  const middleIndex: number = Math.floor(sortedArray.length / 2);

  // If the sorted array has an odd length, the median is the middle element.
  if (sortedArray.length % 2 !== 0) {
    return sortedArray[middleIndex];
  }

  //  If the sorted array has an even length, the median is the average of the two middle elements.
  else {
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  }
}
