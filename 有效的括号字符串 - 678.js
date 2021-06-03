/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const stackLeft = []
    const stackStar = []
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '(') {
            stackLeft.push(i) // 存储索引
        } else if (s[i] === '*') {
            stackStar.push(i) // 存储索引
        } else {
            if (stackLeft.length) {
                stackLeft.pop()
                continue
            } else { }
            if (stackStar.length) {
                stackStar.pop()
                continue
            }
            return false
        }
    }
    if (stackLeft.length > stackStar.length) return false
    // 判断是否 * 都在 ( 的右边
    while (stackLeft.length) {
        const lTop = stackLeft.pop()
        const sTop = stackStar.pop()
        if (lTop > sTop) return false
    }

    return true
};