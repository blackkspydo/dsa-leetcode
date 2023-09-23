/**
Problem Name: Merge Two Sorted Lists

Problem Description:
Given two sorted singly linked lists, write a TypeScript function `mergeTwoSortedLists` that returns a new sorted linked list by merging the two input lists.

The input lists are represented by the following structure:

```typescript
interface ListNode {
    val: number;
    next: ListNode | null;
}
```

The `val` field contains the value of the node, and the `next` field points to the next node in the list. The list ends with a null pointer.

You may assume that both input lists are sorted in non-decreasing order and have no cycles. The function should preserve the original order of elements in the merged list.

Example:

Input:
List 1: 1 -> 2 -> 4
List 2: 1 -> 3 -> 4

Output:
Result: 1 -> 1 -> 2 -> 3 -> 4 -> 4

Note:
- The merged list should consist of nodes from both input lists, sorted in non-decreasing order.
- If any of the input lists is empty (null), the function should return the other non-empty list as the merged list.
- The function should handle cases where either input list is null.
- The function should have a time complexity of O(m + n), where m and n are the lengths of the input lists, respectively.
*/ 



interface ListNode {
    val: number;
    next: ListNode | null;
}

function mergeTwoSortedLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    // Create a dummy node as a placeholder.
    let dummy: ListNode = { val: 0, next: null };
    let current: ListNode | null = dummy;

    while(l1 && l2){
        // Compare the values of l1 & l2, add the smaller to the result list.
        if(l1.val > l2.val){
            current.next = l2;
            l2 = l2.next;
        }else{
            current.next = l1;
            l1 = l1.next;
        }
        // Move to next node.
        current = current.next;
    }

    // Append the remaining elements of the longer list.
    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return dummy.next;
}
