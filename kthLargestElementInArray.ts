/**
Problem Title: Kth Largest Element in an Array

Problem Description:
You are given an array of integers and an integer k. Your task is to implement a function `kthLargestElementInArray` that returns the kth largest element in the given array.

Function Signature:
```typescript
function kthLargestElementInArray(nums: number[], k: number): number {
    // implementation
}
```

Input:
The function `kthLargestElementInArray` takes in two arguments:
- `nums` (1 <= nums.length <= 10^4): an array of integers, where each element is an integer -10^4 <= nums[i] <= 10^4.
- `k` (1 <= k <= nums.length): an integer representing the kth position of the largest element to be found.

Output:
The function should output a single integer, which is the kth largest element in the array.

Examples:
```typescript
console.log(kthLargestElementInArray([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(kthLargestElementInArray([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
```

Note:
- It is guaranteed that `k` will always be valid.
- The given array may contain duplicates, and the kth largest element is not necessary distinct.
- You may assume that the input array will always have at least k elements.
*/ 



function kthLargestElementInArray(nums: number[], k: number): number {
    // First, I will sort the array in decreasing order
    nums.sort((a, b) => b - a);

    // The sorted array's kth element will be the kth largest element in the array
    // Array index starts from 0, so we will subtract 1 from k to get the correct index
    return nums[k - 1];
}
