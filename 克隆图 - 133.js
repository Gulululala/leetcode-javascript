/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return

    const visited = new Map()
    // 深度优先遍历
    // const dfs = (n) => {
    //   const nCopy = new Node(n.val)
    //   visited.set(n, nCopy);
    //   (n.neighbors || []).forEach(ne => {
    //     if (!visited.has(ne)) {
    //       dfs(ne)
    //     }
    //     nCopy.neighbors.push(visited.get(ne))
    //   })
    // }
    // dfs(node)

    // 广度优先遍历
    const q = [node]
    visited.set(node, new Node(node.val))
    while (q.length) {
        const n = q.shift();
        (n.neighbors || []).forEach(ne => {
            if (!visited.has(ne)) {
                q.push(ne)
                visited.set(ne, new Node(ne.val))
            }
            visited.get(n).neighbors.push(visited.get(ne))
        })
    }

    return visited.get(node)
};