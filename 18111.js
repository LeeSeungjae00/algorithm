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
    let [NMB, ...grounds] = input
    const [N, M, B] = NMB.split(" ").map(Number)

    grounds = grounds.map(ground => ground.split(" ").map(Number));

    const minMaxArr = grounds.join().split(",").map(Number)

    const minHegiht = Math.min.apply(null, minMaxArr)
    const maxHegiht = Math.max.apply(null, minMaxArr)
    let result = Infinity
    let resultHeight = 0


    for (let i = maxHegiht; i >= minHegiht; i--) {
        let inv = B;
        let timeVal = 0

        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                let val = grounds[j][k] - i;

                if (val > 0) {
                    timeVal += 2 * (val)
                } else if (val < 0) {
                    timeVal += 1 * (-1 * val)
                }
                inv += val
            }
        }

        if (inv >= 0 && result > timeVal) {
            result = timeVal;
            resultHeight = i;
        }

        timeVal = 0
    }

    console.log(result, resultHeight)
}