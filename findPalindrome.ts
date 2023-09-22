function findPalindrome(s: string): string {
  // If string is empty or has only one character, return the string itself as it is a palindrome
  if (s == null || s.length < 1) return s;

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // Check for palindromes of odd length (centered at current character)
    let length1 = expandAroundCenter(s, i, i);
    // Check for palindromes of even length (centered at current character and the next one)
    let length2 = expandAroundCenter(s, i, i + 1);
    // Get the max length between the two lengths
    let length = Math.max(length1, length2);
    // If the current length is larger than the previously found palindrome, update start and end
    if (length > end - start) {
      start = i - ((length - 1) >> 1);
      end = i + (length >> 1);
    }
  }

  return s.substring(start, end + 1);
}

// Helper function to expand around the center of a possible palindrome and return its length
function expandAroundCenter(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }
  // Return length of palindrome
  return right - left - 1;
}
