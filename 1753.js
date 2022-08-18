const { kill } = require("process");
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
        this.heap = [null];
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }

    size() {
        return this.heap.length - 1;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while (curIdx > 1 && this.heap[parIdx].cost > this.heap[curIdx].cost) {
            this.swap(curIdx, parIdx);
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }

    pop() {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curidx = 1;
        let leftidx = curidx * 2;
        let rightidx = curidx * 2 + 1;

        if (!this.heap[leftidx]) return min;
        if (!this.heap[rightidx]) {
            if (this.heap[leftidx].cost < this.heap[curidx].cost) {
                this.swap(leftidx, curidx);
            }
            return min;
        }

        while (
            leftidx < this.size() &&
            (this.heap[leftidx].cost < this.heap[curidx].cost ||
                this.heap[rightidx].cost < this.heap[curidx].cost)
        ) {
            const minidx =
                this.heap[leftidx].cost > this.heap[rightidx].cost ? rightidx : leftidx;
            this.swap(minidx, curidx);
            curidx = minidx;
            leftidx = curidx * 2;
            rightidx = curidx * 2 + 1;
        }

        return min;
    }
}

function main(input) {
    const [V, E] = input.shift().split(' ').map(Number)
    const start = +input.shift()
    const arr = {}
    let result = new Array(V + 1).fill(Infinity);
    let out = ""
    const minHeap = new Heap();

    input.forEach(str => {
        const [from, to, cost] = str.split(' ').map(Number)
        if (!arr[from]) {
            arr[from] = []
        }
        arr[from].push([to, cost])
    });


    function dijkstra(start) {
        visited = [];
        result[start] = 0
        minHeap.push({
            vertex: start,
            cost: 0,
        });

        while (minHeap.size() !== 0) {
            let { vertex, cost } = minHeap.pop();
            visited[vertex] = true
            if (arr[vertex]) {
                for (let i = 0; i < arr[vertex].length; i++) {
                    const [nextTo, nextCost] = arr[vertex][i]
                    if (visited[nextTo]) continue;
                    let data = cost + nextCost
                    if (data < result[nextTo]) {
                        minHeap.push({ vertex: nextTo, cost: data })
                        result[nextTo] = data
                    }
                }
            }
        }
    }


    dijkstra(start)

    for (let i = 1; i < result.length; i++) {
        if (result[i] === Infinity) { out += "INF\n" }
        else { out += `${result[i]}\n` }
    }

    console.log(out)



}   