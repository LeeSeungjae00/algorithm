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
    const [N, ...testCases] = input
    const result = testCases.map(testCase => {
        const [a , b] = testCase.split(" ");
        let pow = 1;

        for (let j = 0; j < b; j++) {
          pow = (pow * a) % 10;
        }

        return pow === 0 ? 10 : pow;
    });
    console.log(result.join("\n"));
}