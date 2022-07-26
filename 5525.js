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

const DP = [0,0]

function main(input) {
    const N = +input[0]
    const M = +input[1]
    let S = input[2].split("")

    let temp = ""
    let result = 0;

    // for (let i = 0; i < N; i++) {
    //     temp += "IO"
    // }
    // temp += "I"

    // let change = temp.replace("IOI", "I")


    // while(S.includes(temp)){
    //     S = S.replace(temp, change)
    //     ++result
    // }

    // console.log(result)

    // let check = S.splice(-(N*2 + 1)).join('')

    // while(S.length > 0){
    //     if(check === temp){
    //         result++;
    //         check = check.substr(0, check.length - 2)
    //         check = S.pop() + check;
    //         check = S.pop() + check;
    //     }
    //     else{
    //         check = check.substr(0, check.length - 1)
    //         check = S.pop() + check
    //     }
    // }

    for (let i = 2; i < M; i++) {
        if (S[i] === 'I') {
            if (S[i - 2] + S[i - 1] == "IO") {
                DP[i] = DP[i - 2] + 1
                if(DP[i] >= N) result++
            }else{
                DP[i] = 0
            }
        }else{
            DP[i] = 0
        }
    }

    console.log(result)


}
