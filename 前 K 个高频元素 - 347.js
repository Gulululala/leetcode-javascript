class MinHeap {
    constructor() {
        this.heap = []
    }

    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }

    getParentIndex(i) {
        return (i - 1) >> 1
    }

    getLeftIndex(i) {
        return i * 2 + 1
    }

    getRightIndex(i) {
        return i * 2 + 2
    }

    shiftUp(index) {
        if (index === 0) return
        const parentIndex = this.getParentIndex(index)

        if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }

    // 插入方法
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }

    // 删除方法
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    // 获取堆顶
    top() {
        return this.heap[0]
    }

    // 获取堆大小
    size() {
        return this.heap.length
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    nums.forEach(v => {
        map.set(v, map.has(v) ? map.get(v) + 1 : 1)
    })
    // 使用 sort
    // const list = [...map].sort((a, b) => b[1] - a[1])
    // return list.slice(0, k).map(v => v[0])

    // 使用最小堆
    const h = new MinHeap()
    map.forEach((value, key) => {
        h.insert({ value, key })
        if (h.size() > k) {
            h.pop()
        }
    })
    return h.heap.map(v => v.key)
};