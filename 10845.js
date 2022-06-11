

function main() {
    let fs= require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const [N, ...cmds] = input;
    let result = ""
    const queue = new Queue();

    cmds.forEach(cmd => {
        const [c, v] = cmd.split(" ");

        switch (c) {
            case "push":
                queue.push(v);
                return;
            case "pop":
                result += `${queue.pop()}\n`
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
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
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

main()