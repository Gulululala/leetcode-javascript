/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = []
    const rec = (path, len, start) => {
        if (path.length === len) {
            res.push(path)
            return
        }
        for (let i = start; i < nums.length; i += 1) {
            rec(path.concat(nums[i]), len, i + 1)
        }
    }
    for (let i = 0; i <= nums.length; i += 1) {
        rec([], i, 0)
    }
    return res
};