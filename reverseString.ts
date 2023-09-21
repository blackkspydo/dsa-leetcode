// Problem:
// Write a function to reverse a given string.

function reverseString(s: string): string {
    return s.split('').reverse().join('');
}
```

binarySearch.ts
```typescript
// Problem:
// Write a function that performs binary search on a sorted array.
// The function should return the index of the element if found, else return -1.

function binarySearch(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
```

bubbleSort.ts
```typescript
// Problem:
// Implement bubble sort algorithm in TypeScript. 
// Given an unsorted array, sort the array in ascending order using bubble sort.

function bubbleSort(nums: number[]): number[] {
    let n = nums.length;
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}
```

findMaxDepthBinaryTree.ts
```typescript
// Problem:
// Given the root of a binary tree, determine its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left); 
        this.right = (right===undefined ? null : right);
    }
}

function findMaxDepth(root: TreeNode | null): number {
    if(root === null) {
        return 0;
    } else {
        let leftDepth = findMaxDepth(root.left);
        let rightDepth = findMaxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}
