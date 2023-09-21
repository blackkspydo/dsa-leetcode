/**
Problem Statement:

You are given an array, `nums`, containing n distinct integers from 0 to n. However, one number is missing from the given array and it can be anywhere from 0 to n.

Your task is to implement a function `missingNumber(nums: number[]): number` that finds and returns the missing number in the array.

Constraints:

- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= n
- All the integers in `nums` are unique.

Examples:

1. 

Input:
nums = [3,0,1]

Output:
2

Explanation:
In this case, the missing number is 2. The array should contain numbers from 0 to 3, but 2 is missing.

2.

Input:
nums = [9,6,4,2,3,5,7,0,1]

Output:
8

Explanation:
In this case, the missing number is 8. The array should contain numbers from 0 to 9, but 8 is missing.
*/ 



// Function with argument 'nums' which is an array of numbers
function missingNumber(nums: number[]): number {
    // Finding the size of the given array
    let n: number = nums.length;

    // Initializing sum with the sum of first 'n+1' natural numbers
    let sum: number = (n * (n+1)) / 2;

    // Subtracting numbers one by one from sum
    for(let i = 0; i < n; i++) {
        sum -= nums[i];
    }

    // The remaining sum is the missing number
    return sum;
}
