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
    let [NM, ...board] = input;
    const [N, M] = NM.split(" ").map(Number);

    board = board.map(val => val.split(""));

    let result = Infinity;

    for(let i = 0 ; i <= N - 8; i++) {
        for(let j = 0 ; j <= M - 8; j++) {
            let val = countChange(i,j,board);
            if(val < result){
                result = val;
            }
        }
    }

    console.log(result)
}

function countChange(x,y, board){
    let fstW = 0;
    let fstB = 0;
    for(let i = x; i < x + 8; i++){
        let temp;
        if(i % 2 === 0){
            temp = 'W';
        }else{
            temp = 'B';
        }

        for(let j = y; j < y + 8; j++){
            if(board[i][j] === temp){
                if(j % 2 === 0){
                    ++fstW;
                }else{
                    ++fstB;
                }   
            }else{
                if(j % 2 ==! 0){  
                    ++fstW;
                }else{
                    ++fstB;
                }  
            }
        }
    }

    // console.log(fstB, fstW)

    if(fstB > fstW) return fstW;
    return fstB
}