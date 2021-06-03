/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const len = s.length
    if (len <= 1) return s

    let left = 0
    let right = len - 1
    while (left < right) {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left += 1
        right -= 1
    }
    return s
};