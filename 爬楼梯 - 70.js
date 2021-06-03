/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1
    let dp0 = 1
    let dp1 = 1
    for (let i = 2; i <= n; i += 1) {
        const temp = dp0
        dp0 = dp1
        dp1 = dp1 + temp
    }
    return dp1
};