/**
Problem Name: Detect Cycle in Linked List

Problem Description:
Given the head of a linked list, determine if the linked list has a cycle in it. 

A cycle is defined as having at least one node in the list that can be reached again by continuously following the next pointer. 

Implement the `detectCycle` function to return a boolean value indicating whether the linked list contains a cycle. 

The function should have the following signature:
```typescript
function detectCycle(head: ListNode | null): boolean 
```

Input:
The input parameter `head` is the reference to the head node of a linked list. The linked list is represented by a list of nodes, where each node is an object with properties `val` and `next`. 

Output:
The function should return a boolean value - `true` if there is a cycle in the linked list, `false` otherwise.

Constraints:
- The number of nodes in the linked list is in the range [0, 10^4].
- -10^5 <= ListNode.val <= 10^5
- The value of each node is unique.
- The linked list may or may not have a cycle.

Example:
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the second node.
```

Note:
- Do not modify the linked list.
*/ 



// Definition for a singly-linked list node.
class ListNode {
    val: number
    next: null | ListNode

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Function to detect a cycle in a linked list.
function detectCycle(head: ListNode | null): boolean {
    // Initialize two pointers: one that moves one step at a time, and another that moves two steps at a time.
    let slow = head;
    let fast = head;

    // While the faster pointer and its next node are not null
    while(fast != null && fast.next != null) {
        // Move the slow pointer one step and the fast pointer two steps.
        slow = slow.next;
        fast = fast.next.next;

        // If the two pointers meet, it means there's a cycle in the list.
        if(slow == fast) {
            return true;
        }
    }

    // If the pointers never meet, there's no cycle.
    return false;
};
