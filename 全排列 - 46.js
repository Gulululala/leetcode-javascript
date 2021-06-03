/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const rec = (path) => {
        if (path.length === nums.length) {
            res.push(path)
        }
        nums.forEach(v => {
            if (path.includes(v)) return
            rec(path.concat(v))
        })
    }
    rec([])
    return res
};