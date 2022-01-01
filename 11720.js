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
    const [length, N] = input;
    let result = N.split('').reduce((pre,curr) => pre += +curr, 0);
    console.log(result);
}