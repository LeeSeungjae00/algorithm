var readline = require("readline");
var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

r.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    main(input);
    process.exit();
});

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
            if (this.heap[leftIdx] > this.heap[curIdx]) {
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


function main(input) {
    const heap = new MaxHeap();
    const result = [];

    const N = input.shift();

    input.map(Number).forEach(element => {
        if (element === 0) {
            result.push(heap.delete());
        } else {
            heap.insert(element)
        }
    });

    console.log(result.join("\n"))

}