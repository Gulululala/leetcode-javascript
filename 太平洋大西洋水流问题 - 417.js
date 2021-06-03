/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    if (!matrix || !matrix[0]) return []
    const m = matrix.length
    const n = matrix[0].length
    const flow1 = Array.from({ length: m }, () => new Array(n).fill(false)) // 太平洋
    const flow2 = Array.from({ length: m }, () => new Array(n).fill(false)) // 大西洋

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
                // 保证在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 防止死循环
                !flow[nr][nc] &&
                // 保证逆流而上
                matrix[nr][nc] >= matrix[r][c]
            ) {
                dfs(nr, nc, flow)
            }
        })
    }

    // 从海岸线往上遍历
    for (let r = 0; r < m; r += 1) {
        dfs(r, 0, flow1)
        dfs(r, n - 1, flow2)
    }
    for (let c = 0; c < n; c += 1) {
        dfs(0, c, flow1)
        dfs(m - 1, c, flow2)
    }

    // 找出俩矩阵同为 true 的值
    const res = []
    for (let r = 0; r < m; r += 1) {
        for (let c = 0; c < n; c += 1) {
            if (flow1[r][c] && flow2[r][c]) res.push([r, c])
        }
    }
    return res
};