/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 广度优先遍历
    // 方法一
    // if (!root) return []
    // const q = [[root, 0]]
    // let res = []
    // while (q.length) {
    //   const [n, level] = q.shift()
    //   if (!res[level]) {
    //     res.push([n.val])
    //   } else {
    //     res[level].push(n.val)
    //   }
    //   n.left && q.push([n.left, level + 1])
    //   n.right && q.push([n.right, level + 1])
    // }
    // return res

    // 方法二
    if (!root) return []
    const q = [root]
    let res = []
    while (q.length) {
        let len = q.length
        res.push([])
        while (len--) {
            const n = q.shift()
            res[res.length - 1].push(n.val)
            n.left && q.push(n.left)
            n.right && q.push(n.right)
        }
    }
    return res
};