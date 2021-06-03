/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let i = 0
    s.forEach(v => {
        if (v >= g[i]) {
            i += 1
        }
    })
    return i
};