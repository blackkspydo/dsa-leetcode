/**
Problem:

You are given an array of integers and a target integer. Your task is to implement a function `twoSum` that finds two numbers in the array whose sum is equal to the target. The function should return an array with the indices of the two numbers.

You may assume that there is exactly one solution, and the same element cannot be used twice. Additionally, you may assume that the array does not contain any duplicate elements.

Write a TypeScript function with the following signature:

```typescript
function twoSum(nums: number[], target: number): number[]
```

Example:

Given the following input:

```typescript
const nums = [2, 7, 11, 15];
const target = 9;
twoSum(nums, target);
```

Output:

The function `twoSum` should return `[0, 1]` since the sum of numbers at indices 0 and 1 in the array `[2, 7, 11, 15]` is equal to the target `9`.

Note:

In the given example, the numbers at indices 0 and 1 result in the sum of `2 + 7 = 9`, which matches the target value. Thus, the function returns `[0, 1]`.
*/ 



function twoSum(nums: number[], target: number): number[] {
    // Create a map to store the differences
    let map = new Map();

    // Loop through the array
    for(let i = 0; i < nums.length; i++) {
        // If map has the current element
        if(map.has(nums[i])) {
            // Return the index from the map and the current index
            return [map.get(nums[i]), i];
        } else {
            // If map does not have the current element, put the difference into the map
            map.set(target - nums[i], i);
        }
    }

    // If no solution found, return undefined
    return undefined;
}
