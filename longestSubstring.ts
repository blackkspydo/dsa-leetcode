/**
Problem Description:

You are given the name of a TypeScript file, "longestSubstring.ts". This file contains a string which may or may not have unique characters. Your task is to write a function that determines the length of the longest substring with unique characters in the given string. 

For example, given the input string "abcabcbb", the longest substring with unique characters is "abc", so the function should return 3. 

Function Signature:
function longestSubstring(s: string): number

Input:
The input string, s, consists of lowercase English letters. The length of s will be at most 10^4.

Output:
Return an integer, which represents the length of the longest substring with unique characters in the given string.

Example:
Input: "abcabcbb"
Output: 3

Note:
In the given example, the longest substring with unique characters is "abc" with a length of 3.

Constraints:
- The string can contain both lowercase and uppercase English letters.
- The string can contain other characters apart from English letters.
- The given string can be empty.
- The given string can have a length of 1.
- The given string can have a length of 10^4.
*/ 



function longestSubstring(s: string): number {
    let maxLength = 0; // holds the maxLength of the substring
    let start = 0; // starting point of the current substring
    const visited = new Map(); // stores visited characters and their indexes

    for (let i = 0; i < s.length; i++) {
        // if the character is already visited
        if (visited.has(s[i])) {
            start = Math.max(start, visited.get(s[i]) + 1);
        }

        // calculate the max length so far
        maxLength = Math.max(maxLength, i - start + 1);

        // mark the character as visited with its index
        visited.set(s[i], i);
    }

    return maxLength;
}

// This code will provide the length of the longest substring with unique characters in the input string. The function `longestSubstring` performs a sliding window algorithm: it iterates through the string with an end pointer `i`, while maintaining a start pointer `start` which points to the start of the current substring. For each character, it checks if the character is already visited within the current window by using a Map `visited` to store the characters' indices. If the character is visited, it will move the start pointer to the right to exclude the visited character from the current substring. It then re-calculates the max length so far and marks the character as visited with its current index. This algorithm has a linear time complexity of O(n).