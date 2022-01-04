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
    let result = ""
    const [T, ...testCase] = input;
    testCase.forEach(_ => {
        const [R, S] = _.split(' ');
        S.split('').forEach(chr => {
            for(let i = 0 ; i < Number(R); i ++){
                result += chr;
            }
        })
        result += "\n";
    });

    console.log(result);
}