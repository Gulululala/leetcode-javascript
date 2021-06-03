/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) { return false }
    const stack = []
    const map = new Map()
    map.set('{', '}')
    map.set('[', ']')
    map.set('(', ')')

    // 方法一
    // const left = ['(', '{', '[']
    // const right = [')', '}', ']']
    // for (let i = 0; i < s.length; i += 1) {
    //   if (left.some(v => v === s[i])) {
    //     stack.push(s[i])
    //   }
    //   const index = right.findIndex(v => v === s[i])
    //   if (index > -1) {
    //     if (stack[stack.length - 1] === left[index]) {
    //       stack.pop()
    //     } else {
    //       return false
    //     }
    //   }
    // }

    // 方法二
    // for (let i = 0; i < s.length; i += 1) {
    //   const c = s[i]
    //   if (c === '(' || c === '{' || c === '[') {
    //     stack.push(c)
    //   } else {
    //     t = stack[stack.length - 1]
    //     if (
    //       (t === '(' && c === ')') ||
    //       (t === '{' && c === '}') ||
    //       (t === '[' && c === ']')
    //     ) {
    //       stack.pop()
    //     } else {
    //       return false
    //     }
    //   }
    // }

    // return stack.length === 0

    // 方法三：使用字典优化
    for (let i = 0; i < s.length; i += 1) {
        const c = s[i]
        if (map.has(c)) {
            stack.push(c)
        } else {
            t = stack[stack.length - 1]
            if (map.get(t) === c) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
};