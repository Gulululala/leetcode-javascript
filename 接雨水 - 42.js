/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 单调栈
    const stack = []
    let count = 0
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const cur = stack.pop()
            if (!stack.length) {
                break
            }
            const l = stack[stack.length - 1]
            const h = Math.min(height[l], height[i]) - height[cur]
            count += (i - l - 1) * h
        }
        stack.push(i)
    }
    return count
};