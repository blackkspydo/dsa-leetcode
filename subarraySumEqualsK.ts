/**
Problem Description:

You are given an array `nums` of integers and an integer `k`. Your task is to implement a function `subarraySumEqualsK` that determines the number of non-empty subarrays in `nums` whose sum equals `k`.

A subarray is defined as a contiguous sequence of elements within the array. Each element in the subarray must be adjacent to the next element in the subarray.

Function Signature:

```typescript
function subarraySumEqualsK(nums: number[], k: number): number
```

Input:
- The input parameters are an array `nums` of integers (1 <= nums.length <= 20000) and an integer `k` (-1000 <= k <= 1000).

Output:
- The function must return an integer representing the number of non-empty subarrays whose sum is equal to `k`. 

Example:

```typescript
console.log(subarraySumEqualsK([1, 1, 1], 2));  // Output: 2

console.log(subarraySumEqualsK([1, 2, 3], 3));  // Output: 2
```

Explanation:
- For the first example, the subarrays with sum equal to 2 are: [1, 1] and [2].
- For the second example, the subarrays with sum equal to 3 are: [1, 2] and [3].
*/ 



// Here we implement the function to solve the problem as described.

function subarraySumEqualsK(nums: number[], k: number): number {
  // Initializing the output count and sum
  let count = 0, sum = 0;

  // Object to store sum frequencies
  let sumMap: { [key: number]: number } = {}

  // Initialize map with sum 0
  sumMap[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    // If there exists a counter-part in the map for sum-k, add the frequency to the counter
    if (sumMap[sum - k]) count += sumMap[sum - k];

    // If sum exists in map increment frequency else initialize to 1
    sumMap[sum] = (sumMap[sum] || 0) + 1;
  }
  
  return count;
}
