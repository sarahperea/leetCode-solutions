/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map(),
        stack = [];
    
    map.set('(',')');
    map.set('{','}');
    map.set('[',']');
    
    for (let i=0; i<s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else if (map.get(stack.pop()) !== s[i]) {
            return false;
        }
    }
    return !stack.length;
};