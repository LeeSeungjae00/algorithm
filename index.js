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
    const N = +input.shift()
    const tree = [, ...input.shift().split(' ')]

    input.forEach(val => {
        const [node, ch1, ch2] = val.split(' ')

        tree.push(ch1);
        tree.push(ch2)
    })


    console.log(pre(tree));
    console.log(inO(tree));
    console.log(post(tree));

    function pre(tree) {
        // const visited = [];
        // const result = [];
        // const queue = []

        // for (let i = 1; i < tree.length; i++) {
        //     if (!visited[i]) {
        //         let temp = i;
        //         while (tree.length > temp) {
        //             if (tree[temp] === '.') break;
        //             visited[temp] = true
        //             result.push(tree[temp])
        //             temp *= 2
        //         }
        //     }
        // }

        // return result.join('')
        rseult = pre()
    }
    function inO(tree) {
        const visited = [];
        let result = [];
        const queue = [];
        let rResult = '';

        for (let i = 1; i < tree.length; i++) {
            if (!visited[i]) {
                let temp = i;
                while (tree.length > temp) {
                    if (tree[temp] === '.') {
                        // rResult = [...rResult, ...result.reverse()]; 
                        rResult += result.reverse().join('')
                        result = []
                        break;
                    }
                    visited[temp] = true
                    result.push(tree[temp])
                    temp *= 2
                }
            }
        }

        return rResult
    }
    function post() {
        const visited = [];
        let result = [];
        const queue = [];
        let rResult = '';

        for (let i = 1; i < tree.length; i++) {
            let temp = i * 2;
            if (!visited[i]) {
                while (tree.length > temp) {
                    if (tree[temp] === '.') {
                        rResult += result.reverse().join('')
                        result = []
                        break;
                    }
                    visited[temp] = true
                    result.push(tree[temp])
                    temp *= 2
                }
            }
        }
        for (let i = tree.length - 1; i > 0; i--) {
            if (!visited[i]) {
                if(tree[i] !== "."){
                    rResult += tree[i]
                }
            }
        }

        return rResult
    }
}   