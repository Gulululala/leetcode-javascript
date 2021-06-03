/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 使用集合
    // return [...new Set(nums1)].filter(v => nums2.includes(v))

    // 使用字典
    const map = new Map()
    nums1.forEach(v => {
        map.set(v, true)
    })
    const res = []
    nums2.forEach(v => {
        if (map.get(v)) {
            res.push(v)
            map.delete(v)
        }
    })
    return res
};