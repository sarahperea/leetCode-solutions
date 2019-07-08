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