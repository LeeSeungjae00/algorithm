

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    insert(data) {
        this.heap.push(data);

        let curIdx = this.heap.length - 1;
        let parentIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[parentIdx] < this.heap[curIdx]) {
            [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
            curIdx = parentIdx;
            parentIdx = (curIdx / 2) >> 0;
        }
    }

    delete() {
        if (this.heap.length === 1) {
            return 0;
        }
        const max = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                [this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[leftIdx]];
            }
            return max;
        }

        while (this.heap[leftIdx] > this.heap[curIdx] || this.heap[rightIdx] > this.heap[curIdx]) {
            const maxIdx = this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
            [this.heap[maxIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[maxIdx]];
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return max;
    }

    top() {
        if (this.heap.length <= 1) {
            return null
        }
        return this.heap[1]
    }

    empty() {
        if (this.heap.length === 1) {
            return true
        }
        return false
    }
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(data) {
        this.heap.push(data);

        let curIdx = this.heap.length - 1;
        let parentIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[parentIdx] > this.heap[curIdx]) {
            [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
            curIdx = parentIdx;
            parentIdx = (curIdx / 2) >> 0;
        }
    }

    delete() {
        if (this.heap.length === 1) {
            return 0;
        }
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min;
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                [this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[leftIdx]];
            }
            return min;
        }

        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            [this.heap[minIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[minIdx]];
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }

    top() {
        if (this.heap.length <= 1) {
            return "empty"
        }
        return this.heap[1]
    }

    empty() {
        if (this.heap.length === 1) {
            return true
        }
        return false
    }
}

const T = Number(input.shift())
let N;
let queue = []
const result = []
const map = []


for (let i = 0; i < T; i++) {
    N = Number(input.shift())
    queue = [];
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();

    for (let j = 0; j < N; j++) {
        const [cmd, val] = input.shift().split(" ")

        if (cmd === "I") {
            if (!map[+val]) {
                map[+val] = 0
            }
            map[+val]++
            maxHeap.insert(+val);
            minHeap.insert(+val);

        } else if (cmd === "D") {
            if (val === "1") {
                while (!maxHeap.empty() && map[maxHeap.top()] === 0) {
                    maxHeap.delete()
                }
                if (!maxHeap.empty()) {
                    --map[maxHeap.top()];
                    maxHeap.delete();
                }
            } else {
                while (!minHeap.empty() && map[minHeap.top()] === 0) {
                    minHeap.delete()
                }
                if (!minHeap.empty()) {
                    map[minHeap.top()]--;
                    minHeap.delete();
                }
            }
        }
    }
    while (!maxHeap.empty() && map[maxHeap.top()] == 0) {
        maxHeap.delete()
    }
    while (!minHeap.empty() && map[minHeap.top()] == 0) {
        minHeap.delete()
    }
    if (maxHeap.empty() || minHeap.empty()) {
        result.push("EMPTY")
    } else {
        queue.sort((a, b) => a - b);
        result.push(`${maxHeap.top()} ${minHeap.top()}`)
    }
}

console.log(result.join('\n'))