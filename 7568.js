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
    const [N, ...xyList] = input;
    let result = [];


    for(let i = 0 ; i < +N; i++){
        let rank = 1;

        const [ix, iy] = xyList[i].split(" ").map(Number);


        for(let j = 0 ; j < +N; j++){
            const [jx, jy] = xyList[j].split(" ").map(Number);
            if(ix < jx){
                if(iy < jy){
                    ++rank;
                }
            }

        }
        result.push(rank);
    }
      
    console.log(result.join(" "));
    
}