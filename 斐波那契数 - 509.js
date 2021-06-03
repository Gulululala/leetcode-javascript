/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n

    let dp0 = 0
    let dp1 = 1
    for (let i = 2; i <= n; i += 1) {
        const temp = dp1
        dp1 = dp1 + dp0
        dp0 = temp
    }
    return dp1

    // 便于理解写法
    // let dp = [0, 1]
    // for (let i = 2; i <= n; i += 1) {
    //   dp[i] = dp[i - 1] + dp[i - 2]
    // }
    // return dp[n]
};