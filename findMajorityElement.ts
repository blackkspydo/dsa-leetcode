```typescript
function findMajorityElement(nums: number[]): number | null {
    // Create a map to hold the count of each element in the array.
    let countMap = new Map<number, number>();

    // Threshold count for majority element
    let threshold = nums.length / 2;

    for(let num of nums) {
        // If the map has the key increment the count else set the element count to 1.
        countMap.has(num) ? countMap.set(num, (countMap.get(num) || 0) + 1) : countMap.set(num,1);

        // If element count exceeds threshold, return the number.
        if(countMap.get(num) > threshold) {
            return num;
        }
    }

    // If no element occurred more than n/2 times return null
    return null;
}
```