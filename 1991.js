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
    const tree =  {}

    tree[1] = 'A'
    input.forEach(val => {
        const [node, ch1, ch2] = val.split(' ')

        tree[node] = {leftCh : ch1, rightCh : ch2}
    })

    console.log(pre('A'));
    console.log(inO('A'));
    console.log(post('A'));

    function pre(start) {
        const {leftCh, rightCh} = tree[start]
        let result = ''

        result += start

        if (tree[leftCh] && tree[leftCh] !== '.')
            result += pre(leftCh)
        if (tree[rightCh] && tree[rightCh] !== '.') {
            result += pre(rightCh)
        }
        return result
    }
    function inO(start) {
        const {leftCh, rightCh} = tree[start]
        let result = ''

        if (tree[leftCh] && tree[leftCh] !== '.') {
            result += inO(leftCh)
        }

        result += start

        if (tree[rightCh] && tree[rightCh] !== '.') {
            result += inO(rightCh)
        }
        return result
    }
    function post(start) {
        const {leftCh, rightCh} = tree[start]
        let result = ''

        if (tree[leftCh] && tree[leftCh] !== '.') {
            result += post(leftCh)
        }

        if (tree[rightCh] && tree[rightCh] !== '.') {
            result += post(rightCh)
        }

        result += start

        return result
    }
}   