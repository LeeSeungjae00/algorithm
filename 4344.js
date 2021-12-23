

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

function main(inp) {
    let [length , ...input] = inp;
    input.forEach(_ => {
        const [len, ...values] = _.split(' ');
        const avg = values.reduce((pre,curr) => Number(pre) + Number(curr), 0) / len;
        const upAvg = values.filter(val => val > avg).length;

        console.log((upAvg / len * 100).toFixed(3) + "%")
    });
}