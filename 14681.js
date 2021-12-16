function check(a, b) {
    if (a > 0) {
        if (b > 0) return '1';
        else return '4';
    } else {
        if (b > 0) return '2'
        else return '3';
    }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  ///////////////////////////////
  const x = input[0];
  const y = input[1];

  console.log(check(x,y))
});