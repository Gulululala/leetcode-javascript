/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0

    let dp0 = 0
    let dp1 = nums[0]
    for (let i = 1; i < nums.length; i += 1) {
        const temp = dp0
        dp0 = dp1
        dp1 = Math.max(temp + nums[i], dp1)
    }
    return dp1
};