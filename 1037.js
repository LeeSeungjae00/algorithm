const { SourceMap } = require("module");
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

function main(input){
    const [N, data] = input;

    const nums = data.split(" ").map(_ => +_);

    nums.sort((a, b) => a - b)

    console.log(nums[0] * nums.pop())
}