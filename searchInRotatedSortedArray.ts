/**
Problem Title: Search in Rotated Sorted Array

Problem Description:
You are given an integer array nums, which is sorted in ascending order and then rotated randomly. The rotations of the array can be either clockwise or counterclockwise.

You need to implement the function `searchInRotatedSortedArray`, which takes in an array and a target integer, and returns the index of the target if it is in the array, and -1 otherwise. The array may contain duplicates.

Consequently, the array will be partially sorted, where some of the ascending elements have been shifted to the beginning or the end of the array.

You must implement an efficient algorithm with O(log n) time complexity.

Function Signature:
function searchInRotatedSortedArray(nums: number[], target: number): number

Input:
The function `searchInRotatedSortedArray` takes in two parameters:
1. An integer array `nums` (2 <= nums.length <= 100) representing the rotated sorted array.
2. An integer `target` (-10^4 <= target <= 10^4) that needs to be searched in the array.

Output:
The function should return an integer, which is the index of the target if it is found in the array, and -1 if the target is not present.

Example:
Input:
nums = [4, 5, 6, 7, 0, 1, 2]
target = 0

Output:
4

Explanation:
0 is present at index 4 in the given array.

Note:
- The array may contain duplicates.
- The array can be rotated either clockwise or counterclockwise.
- The algorithm should run in O(log n) time complexity.
*/ 



function searchInRotatedSortedArray(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1; 
    // Iterate while start not meets end
    while (start <= end) {
        // Calculate Mid Index
        const mid = Math.floor(start + (end - start) / 2);

        // If element is present at mid, return its index
        if (nums[mid] === target) return mid;

        // When the first half is sorted
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        // When the second half is sorted
        else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    // When no element found, return -1
    return -1;
}

This function uses a binary search approach to achieve O(log n) time complexity. It iterates through the array, and for each iteration it checks the mid element of the current range. If mid element is the target, it returns its index. If not, it checks if the target lies in the sorted part of the array and adjusts the range accordingly until finding the target or exhausting the search space.