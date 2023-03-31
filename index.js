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

// 첫째 줄에 사람의 수 N과 파티의 수 M이 주어진다.

// 둘째 줄에는 이야기의 진실을 아는 사람의 수와 번호가 주어진다. 진실을 아는 사람의 수가 먼저 주어지고 그 개수만큼 사람들의 번호가 주어진다. 사람들의 번호는 1부터 N까지의 수로 주어진다.

// 셋째 줄부터 M개의 줄에는 각 파티마다 오는 사람의 수와 번호가 같은 방식으로 주어진다.

// N, M은 50 이하의 자연수이고, 진실을 아는 사람의 수는 0 이상 50 이하의 정수, 각 파티마다 오는 사람의 수는 1 이상 50 이하의 정수이다.

function main(input) {
    const parents = new Array(51)
    const [N, M] = input.shift().split(' ').map(_ => Number(_))
    const know = input.shift().split(' ').map(_ => Number(_))

    if (know[0] === 0) {
        console.log(M)
        return;
    }

    function find(x) {
        if (parents[x] == x) return x;
        return x = find(parents[x]);
    }

    function union(x, y) {
        x = find(x);
        y = find(y);
        parents[x] = y;
    }

    const knowTree = initUnionTree()

    console.log(N, M, know, knowTree)


}