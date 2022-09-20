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
<<<<<<< HEAD
    const [N, M] = input[0].split(' ').map(Number)
    const result = []

    function backTrack(data) {
        if (data.length === M) {
            result.push(data.join(' '))
            return
        }


        for (let i = data[data.length - 1]; i <= N; i++) {
            if (data.indexOf(i) === -1) {
                backTrack([...data, i])
            }
        }
    }


    for (let i = 1; i <= N - M + 1; i++) {
        backTrack([i])
    }

    console.log(result.join('\n'))
}
=======
    const T = +input.shift()
    let index = 0

    function DP(dp, arr1, arr2, N){
        dp[0][0] = arr1[0]
        dp[1][0] = arr2[0]
        dp[0][1] = arr2[0] + arr1[1]
        dp[1][1] = arr2[1] + arr1[0]

        for (let i = 2; i < N; i++) {
            //-2 스티커중 큰 값
            const big = dp[1][i - 2] > dp[0][i - 2] ? dp[1][i - 2] : dp[0][i - 2]
            dp[0][i] = (big + arr1[i]) > (dp[1][i - 1] + arr1[i]) ? big + arr1[i] : (dp[1][i - 1] + arr1[i])
            dp[1][i] = (big + arr2[i]) > (dp[0][i - 1] + arr2[i]) ? big + arr2[i] : (dp[0][i - 1] + arr2[i])
        }

        return (dp[0][N - 1] > dp[1][N - 1]) ? dp[0][N - 1] : dp[1][N - 1]
    }

    for (let i = 0; i < T; i++) {
        const N = +input[index++]
        const dp = [new Array(N),new Array(N)]
        const arr1 = input[index++].split(' ').map(Number)
        const arr2 = input[index++].split(' ').map(Number)

        if(N === 1){
            console.log(arr1[0] > arr2[0] ? arr1[0] : arr2[0])
            continue;
        }

        console.log(DP(dp, arr1, arr2, N))
    }
}


>>>>>>> b100e2d89f75b2a782014bb7e21e933553da2621
