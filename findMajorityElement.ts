// Problem: Majority Element

// You are given an array of integers, where one element appears more than half of the total number of elements in the array. Your task is to write a function `findMajorityElement` to find and return this majority element.

// Write a function `findMajorityElement(nums: number[]): number` that takes in one parameter:
// - `nums` which is an array of integers (1 ≤ nums.length ≤ 10^5)

// The function should return an integer, denoting the majority element in the input array.

// Note:
// - The majority element always exists in the input array.
// - Only one majority element exists in the input array.

// Examples:
// ```
// findMajorityElement([3, 2, 3]) => 3
// findMajorityElement([2, 2, 1, 1, 1, 2, 2]) => 2
// findMajorityElement([3, 1, 1, 1, 2, 1, 1, 3, 3]) => 1
// ```

// In the first example, the majority element in the array [3, 2, 3] is 3, as it appears twice out of the total three elements.

// In the second example, the majority element in the array [2, 2, 1, 1, 1, 2, 2] is 2, as it appears four times out of the total seven elements.

// In the third example, the majority element in the array [3, 1, 1, 1, 2, 1, 1, 3, 3] is 1, as it appears five times out of the total nine elements.
function findMajorityElement(nums: number[]): number {
  let majority = nums[0];
  let count = 1;

  // Use Boyer–Moore majority vote algorithm
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {         
      majority = nums[i];     // New candidate for majority element is chosen when the count drops to 0
    }    
    if (nums[i] === majority) {
      count++;                // If the next element is same then increment the count
    } else {
      count--;                // else decrement the count
    }
  }

  return majority;            // Return the element which is left at the end of array traversal
}
