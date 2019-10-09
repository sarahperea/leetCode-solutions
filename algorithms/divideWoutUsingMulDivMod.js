/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {

    let min = Math.pow(2,31) * -1,
        max = Math.pow(2,31) - 1,
        negativeDivisor = divisor < 0,
        negativeDividend = dividend < 0;

    let count = ldivide(Math.abs(dividend), Math.abs(divisor));
    let ans = ((negativeDivisor && !negativeDividend) || (!negativeDivisor && negativeDividend))
        ? count * -1
        : count;
    if (ans > max) ans = max
    else if (ans < min) ans = min
    return ans
    
};

function ldivide (dividend, divisor) {
    if (dividend < divisor) return 0;
    
    let sum = divisor;
	let multiple = 1;
	while ((sum * 2) <= dividend) {
		sum *= 2;
		multiple *= 2;
	}

    return multiple + ldivide(dividend - sum, divisor);
}