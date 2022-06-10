
const { SourceMap } = require("module");
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



function main(input) {
    const [N, ...cmds] = input;
    const result = []
    const stack = []

    cmds.forEach(cmd => {
        const [c, v] = cmd.split(" ");
        if (c === "push") {
            cmdsMatcher[c](stack, v);
            return
        }
        result.push(cmdsMatcher[c](stack, v))
    });

    console.log(result.join("\n"))
}

function pop(arr) {
    if (arr.length === 0) return -1
    const val = arr.pop();

    return val
}

function push(arr, val) {
    arr.push(val);
}

function size(arr) {
    return arr.length;
}

function empty(arr) {
    if (arr.length === 0) return 1;
    else return 0;
}

function top(arr) {
    if (arr.length === 0) return -1
    return arr[arr.length - 1];
}

const cmdsMatcher = {
    "push": push,
    "top": top,
    "size": size,
    "empty": empty,
    "pop": pop
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;
    }

    pop() {
        if (this.size === 0) {
            return -1;
        }
        const val = this.head.data;
        this.head = this.head.next;
        this.length--;

        return val;
    }

    size() {
        return this.length;
    }

    empty() {
        return this.length === 0 ? 1 : 0;
    }

    front() {
        if (!this.head) {
            return -1;
        }
        return this.head.data;
    }

    back() {
        if (!this.tail) {
            return -1;
        }
        return this.tail.data;
    }
}