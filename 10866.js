
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
    let result = ""
    const queue = new Queue();

    cmds.forEach(cmd => {
        const [c, v] = cmd.split(" ");

        switch (c) {
            case "push_front":
                queue.pushFront(v);
                return;
            case "push_back":
                queue.pushBack(v);
                return;
            case "pop_front":
                result += `${queue.popFront()}\n`
                return;
            case "pop_back":
                result += `${queue.popBack()}\n`
                return;
            case "size":
                result += `${queue.size()}\n`
                return;
            case "empty":
                result += `${queue.empty()}\n`
                return;
            case "front":
                result += `${queue.front()}\n`
                return;
            case "back":
                result += `${queue.back()}\n`
                return;
        }

        
    });

    console.log(result);
    
}

class Node {
    constructor(data) {
        this.data = data;
        this.front = null;
        this.back = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    pushFront(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.tail = node;
        } else {
            node.back = this.head;
            this.head.front = node;
        }

        this.head = node;
        this.length++;
    }

    pushBack(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
        } else {
            node.front = this.tail
            this.tail.back = node;
        }

        this.tail = node;
        this.length++;
    }

    popFront() {
        if (this.length === 0) {
            return -1;
        }
        const val = this.head.data;
        this.head = this.head.back;
        this.length--;

        return val;
    }

    popBack() {
        if (this.length === 0) {
            return -1;
        }
        const val = this.tail.data;
        this.tail = this.tail.front;
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
        if (this.length === 0) {
            return -1;
        }
        return this.head.data;
    }

    back() {
        if (this.length === 0) {
            return -1;
        }
        return this.tail.data;
    }
}