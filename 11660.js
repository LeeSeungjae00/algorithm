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


function main(input) {
  const [N, M] = input[0].split(' ').map(Number)
  const prS = []
  const result = []

  for (let i = 1; i < N + 1; i++) {
    const temp = input[i].split(' ').map(Number)
    const pushArr = []
    pushArr[0] = temp[0]
    for (let j = 1; j < temp.length; j++) {
      pushArr[j] = temp[j] + pushArr[j - 1]
    }

    prS.push(pushArr)
  }


  for (let i = 1 + N; i < 1 + N + M; i++) {
    const [y1, x1, y2, x2] = input[i].split(' ').map(Number)
    let sum = 0
    for (let j = y1 - 1; j <= y2 - 1; j++) {
      if (x1 === 1) {
        sum += prS[j][x2 - 1];
        continue
      }
      sum += prS[j][x2 - 1] - prS[j][x1 - 2]

    }
    result.push(sum)
  }

  console.log(result.join('\n'))

}