/**
 * Problem:
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 *
 * Explanation: There is no common prefix among the input strings.
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = (strs) => {
   let prefix = "", count = 0;
   if (strs.length) {
       for (let i=0; i<strs[0].length; i++) {
           count = 0;
           for (let j=1; j<strs.length; j++) {
               if (strs[j][i] == strs[0][i]) count++;
               else break;
           }
           if (count == strs.length - 1) prefix += strs[0][i];
           else break;
       }        
   } 
    
   return prefix;
};