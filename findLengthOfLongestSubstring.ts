/**
Title: Length of Longest Substring

Description:
Given a string containing alphanumeric characters, write a function `findLengthOfLongestSubstring` that returns the length of the longest substring without repeating characters.

For example, given the input string `"findLengthOfLongestSubstring.ts"`, the longest substring without repeating characters is `"findLe"`, and thus, the expected output would be `6`.

Function Signature:
```typescript
function findLengthOfLongestSubstring(s: string): number
```

Input:
- The input string `s` consists of alphanumeric characters and has a length of at most 10^4.

Output:
- Return an integer, the length of the longest substring without repeating characters.

Constraints:
- The string `s` will only contain uppercase letters, lowercase letters, digits, and periods.
- The input string `s` is not null.

Note:
- The solution with linear time complexity is preferred.
*/ 



function findLengthOfLongestSubstring(s: string): number {
    let charSet = new Set(); // Create set to hold unique characters
    let left = 0; // Left pointer
    let right = 0; // Right pointer
    let maxLength = 0; // Variable to hold the maximum length

    // Iterate while right pointer is less than the string length
    while (right < s.length) {
        // If the character at right index is not already in the set, add to the set and move the right pointer
        if (!charSet.has(s.charAt(right))) {
            charSet.add(s.charAt(right));
            maxLength = Math.max(charSet.size, maxLength); // Update maxLength if numel of charSet is larger
            right++;
        } else {
            // If the character is already in the set, remove the left character and move the left pointer
            charSet.delete(s.charAt(left));
            left++;
        }
    }
    return maxLength; // Return the length of the longest substring
}
