/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Two Pointers O(n) Approach
/*    
    let i=0;
    for (let j=0; j<nums.length; j++) {
        if (nums[j] != val) {
            nums[i++] = nums[j];
        }
    }
    return i;
*/    
    // Two Pointers - when elements to remove are rare
    let i=0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n-1];
            n--;
        } else {
            i++;
        }
    }
    return n;
};