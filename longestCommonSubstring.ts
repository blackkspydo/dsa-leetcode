/**
Problem Title: Longest Common Substring

Problem Description:
You are given two strings, str1 and str2, as input. Your task is to write a function `longestCommonSubstring` that finds the longest common substring between the two strings.

A substring is a contiguous sequence of characters within a string. The longest common substring is the longest substring that appears in both str1 and str2.

The function should take in two parameters - str1 and str2 - and return a string that represents the longest common substring. If there are multiple longest common substrings, you can return any one of them.

You can assume that the input strings, `str1` and `str2`, will contain only lowercase letters.

Function Signature: `function longestCommonSubstring(str1: string, str2: string): string`

Examples:
Input: `str1 = "hello", str2 = "world"`
Output: `"o"`
Explanation: The longest common substring between "hello" and "world" is "o".

Input: `str1 = "programming", str2 = "rowgramming"`
Output: `"gramming"`
Explanation: The longest common substring between "programming" and "rowgramming" is "gramming".

Note:
- The input strings may have different lengths.
- The input strings may not necessarily have a common substring. In such cases, the function should return an empty string.

*/ 



function longestCommonSubstring(str1: string, str2: string): string {
  let str1Length = str1.length;
  let str2Length = str2.length;
  let max = 0;
  let output = "";

  // Create a 2D array to compare substrings
  let dp = Array(str1Length + 1)
    .fill(0)
    .map(() => Array(str2Length + 1).fill(0));

  for (let i = 1; i <= str1Length; i++) {
    for (let j = 1; j <= str2Length; j++) {
      // If the current characters of the two strings are equal..
      if (str1[i - 1] == str2[j - 1]) {
        // ..Increment the value in the dp table diagonally and check if it's the max length so far.
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > max) {
          max = dp[i][j];
          output = str1.slice(i - max, i);
        }
      } else {
        // If the characters aren't equal, reset the value in the dp table for this pair of characters.
        dp[i][j] = 0;
      }
    }
  }
  // Return the max common substring
  return output;
}
