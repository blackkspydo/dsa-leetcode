/**
Title: Longest Increasing Subsequence

Problem Description:
You are given an array of integers, and your task is to find the length of the longest increasing subsequence from the given array.

An increasing subsequence is a sequence of elements from the array in which each element is strictly greater than the previous element. For example, [1, 3, 5] is an increasing subsequence of [1, 2, 3, 4, 5], but [5, 2, 3] is not.

Write a function `longestIncreasingSubsequence` that takes an array of integers as input and returns the length of the longest increasing subsequence.

Function Signature:
function longestIncreasingSubsequence(nums: number[]): number

Input:
The input parameter is an array of integers, `nums`, where 0 ≤ nums[i] ≤ 1000. The length of the array is between 1 and 1000.

Output:
The function should return an integer, which represents the length of the longest increasing subsequence in the given array.

Examples:
Example 1:
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4
Explanation:
The longest increasing subsequence in this case is [2, 3, 7, 101], which has a length of 4.

Example 2:
Input: [4, 10, 4, 3, 8, 9]
Output: 3
Explanation:
The longest increasing subsequence in this case is [4, 8, 9], which has a length of 3.

Note:
- The elements in the subsequence must be in the same order as they appear in the original array.
- There can be multiple valid answers, and you should return the length of the longest one.
*/ 



function longestIncreasingSubsequence(nums: number[]): number {
    // If the array is empty, return 0
    if(nums.length === 0) {
        return 0;
    }

    let dp: number[] = Array(nums.length).fill(1); 
    // Initialized with 1 because at the very least, each number is a subsequence of length 1

    // Iterate over the array
    for(let i = 1; i < nums.length; i++) { 
        for(let j = 0; j < i; j++) {
            // If the current number is greater than a previous number 
            // and the length of the longest increasing subsequence ending at the current number is less than
            // the length of the longest increasing subsequence ending at the previous number plus one,
            // update the length of the longest increasing subsequence ending at the current number.
            if(nums[j] < nums[i] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
            }
        }
    }
   
    // Return the maximum length found
    return Math.max(...dp);
}
