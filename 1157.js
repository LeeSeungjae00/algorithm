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

function main(inp){
    const input = inp[0].toUpperCase();

    const map = {};
    let result = "";
    let max = 0;
    input.split('').forEach(chr => {
        if(map[chr] !== undefined){
            ++map[chr];
        }else{
            map[chr] = 1;
        }
    })

    Object.keys(map).forEach((key) => {
        if(max < map[key]){
            max = map[key];
            result = key;
        }else if(max === map[key]){
            result = "?";
        }
    })

    console.log(result)
    

}