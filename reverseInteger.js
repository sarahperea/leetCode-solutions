/**
 * Problem:
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output: 321
 *
 * Example 2:
 * Input: -123
 * Output: -321
 *
 * Example 3:
 * Input: 120
 * Output: 21
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this
 * problem, assume that your function returns 0 when the reversed integer overflows.
 */
 
/**
 * @param {number} x
 * @return {number}
 */
let reverse = (x) => {
    let rev = 0;
    
    while (x) {
        rev = rev * 10 + x % 10;
        x = parseInt(x/10);
    }
        
    return (rev > 2147483647 || rev < -2147483648) ? 0 : rev;
};