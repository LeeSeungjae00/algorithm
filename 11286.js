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

class Heap {
    constructor() {
        this.heap = [null]
    }

    insert(data) {
        this.heap.push(data)

        let curIdx = this.heap.length - 1;
        let parentIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && Math.abs(this.heap[parentIdx]) >= Math.abs(this.heap[curIdx])) {
            if (Math.abs(this.heap[parentIdx]) === Math.abs(this.heap[curIdx])) {
                if (this.heap[parentIdx] < this.heap[curIdx]) {
                    break
                }
            }
            [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
            curIdx = parentIdx;
            parentIdx = (curIdx / 2) >> 0;
        }
    }

    delete() {
        const min = this.heap[1] ?? 0;
        if (this.heap.length <= 2) this.heap = [null]
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min;
        if (!this.heap[rightIdx]) {
            if (Math.abs(this.heap[curIdx]) > Math.abs(this.heap[leftIdx])|| (Math.abs(this.heap[curIdx]) === Math.abs(this.heap[leftIdx]) && this.heap[curIdx] > this.heap[leftIdx])) {
                [this.heap[leftIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[leftIdx]];
            }

            return min;
        }

        while (Math.abs(this.heap[leftIdx]) <= Math.abs(this.heap[curIdx]) ||
            Math.abs(this.heap[rightIdx]) <= Math.abs(this.heap[curIdx])) {
            let minIdx;
            if(Math.abs(this.heap[rightIdx]) < Math.abs(this.heap[leftIdx])) minIdx = rightIdx;
            else {
                if(Math.abs(this.heap[rightIdx]) === Math.abs(this.heap[leftIdx]) &&  this.heap[rightIdx] < this.heap[leftIdx])
                    minIdx = rightIdx;
                else
                    minIdx = leftIdx;
            }            

            if(Math.abs(this.heap[minIdx]) === Math.abs(this.heap[curIdx])){
                if(this.heap[minIdx] > this.heap[curIdx]){
                    break;
                }
            }

            [this.heap[minIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[minIdx]];
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min
    }
}


function main(input) {
    const heap = new Heap();
    const result = [];

    const N = input.shift();

    input.map(Number).forEach(element => {
        if (element === 0) {
            result.push(heap.delete());
        } else {
            heap.insert(element)
        }
    });

    console.log(result.join('\n'))

}