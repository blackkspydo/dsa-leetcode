/**
Problem: Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, prove that there is a duplicate number in the array. It is guaranteed that there is only one duplicate number in nums.

You must write a function `findDuplicateNumber` in TypeScript that returns the duplicate number. You should not modify the original array.

Examples:

Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3

Input: nums = [1,1]
Output: 1

Input: nums = [1,1,2]
Output: 1

Note:

- You must not modify the array (assume the array is read-only).
- You must use only constant, O(1) extra space.
- Your runtime complexity should be less than O(n^2).
- There is only one duplicate number in the array, but it could be repeated more than once.
*/ 



function findDuplicate(nums: number[]): number {
    // Using Floyd's cycle detection algorithm

    // Initializing slow and fast pointers
    let slow = nums[0]; 
    let fast = nums[0]; 

    do {
        // Moving slow pointer by one step and fast pointer by two steps
        slow = nums[slow]; 
        fast = nums[nums[fast]]; 
    } while (slow != fast);
  
    // Resetting slow pointer to start of the array
    slow = nums[0]; 
  
    // Moving both slow and fast pointers one step at a time till they meet
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    // Return the position where they met - this is the duplicate number
    return slow;
}
