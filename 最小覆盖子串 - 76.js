/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // 用双指针维护滑动窗口
    // 移动右指针，找到包含 t 的子串，再移动左指针，尽量减少包含 t 的子串长度
    let l = 0
    let r = 0
    const need = new Map()
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size
    let res = ''
    while (r < s.length) {
        const c = s[r]
        if (need.has(c)) {
            need.set(c, need.get(c) - 1)
            if (need.get(c) === 0) { needType -= 1 }

            while (needType === 0) {
                const newRes = s.substring(l, r + 1)
                if (!res || newRes.length < res.length) { res = newRes }
                const c2 = s[l]
                if (need.has(c2)) {
                    need.set(c2, need.get(c2) + 1)
                    if (need.get(c2) === 1) { needType += 1 }
                }
                l += 1
            }
        }
        r += 1
    }
    return res
};