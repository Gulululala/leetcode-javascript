/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 双指针维护滑动窗口
    let l = 0
    let res = 0
    const map = new Map()
    for (let r = 0; r < s.length; r += 1) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1
        }
        res = Math.max(res, r - l + 1)
        map.set(s[r], r)
    }
    return res
};