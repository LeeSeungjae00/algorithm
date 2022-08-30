// const { copyFileSync } = require("fs");
// var readline = require("readline");
// var r = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// r.on("line", function (line) {
//     input.push(line);
// }).on("close", function () {
//     main(input);
//     process.exit();
// });



// function main(input) {
//     let [N, M] = input.shift().split(' ').map(Number)
//     const arr = input.map(val => val.split(' ').map(Number))
//     let max = 0;

//     function bfs(x, y) {
//         const dx = [1, -1, 0, 0]
//         const dy = [0, 0, 1, -1]
//         const visited = {}

//         visited[`${y + "" + x}`] = arr[y][x]
//         let queue = [[x, y]]
//         let depth = 0


//         while (depth <= 1) {
//             depth++
//             const tempQueue = []
//             queue.forEach((val) => {
//                 console.log(visited)
//                 dx.forEach((xVal, i) => {
//                     [lx, ly] = [val[0] + xVal, val[1] + dy[i]]

//                     if (lx < 0 || ly < 0 || lx >= M || ly >= N) return
//                     if (visited[`${ly + "" + lx}`]) return

//                     visited[`${ly + "" + lx}`] = visited[`${val[1] + "" + val[0]}`] + arr[ly][lx];
//                     tempQueue.push([lx, ly])

//                 })
//             })
//             queue = [...tempQueue]
//         }

//         let loopData = [[-1, -1, 1, 0], [0, -1, 1, 1], [-1, 0, 1, 1], [-1, -1, 0, 1]]
//         for (let i = 0; i < 4; i++) {
//             const [fx, fy, sx, sy] = [x + loopData[i][0], y + loopData[i][1], x + loopData[i][2], y + loopData[i][3]]

//             if (fx < 0 || fy < 0 || sx >= M || sy >= N) continue

//             let val = arr[y][fx] + arr[y][sx] + arr[fy][x] + arr[sy][x]


//             if (max < val) max = val
//         }


//         if (x + 1 < M && y + 1 < N) {
//             let val = arr[y][x] + arr[y][x + 1] + arr[x + 1][y + 1] + arr[y + 1][x]
//             if (max < val) max = val
//         }


//         queue.forEach(val => {
//             const [x, y] = val;
//             if (max < visited[`${y + "" + x}`]) max = visited[`${y + "" + x}`]
//         })

//         return max
//     }

//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < M; j++) {
//             bfs(j, i)
//         }
//     }


//     console.log(max);
// }

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(Number));
const [N,M] = input[0]
const board = input.splice(1)

// ㅁㅁㅁㅁ
function check1(i,j){
  if(j+3<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i][j+3]  
  }
    return 0;
}

// ㅁ 
// ㅁ
// ㅁ
// ㅁ
function check2(i,j){
  if(i+3<N){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+3][j]  
  }
    return 0;
}

// ㅁ ㅁ 
// ㅁ ㅁ 
function check3(i,j){
  if(i+1<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i][j+1]+board[i+1][j+1]  
  }
  return 0;
}

// ㅁ 
// ㅁ 
// ㅁ ㅁ 
function check4(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+2][j+1]  
  }
  return 0;
}

// ㅁ ㅁ ㅁ 
// ㅁ
function check5(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i+1][j]+board[i][j+1]+board[i][j+2]  
  }
  return 0;
}

// ㅁ ㅁ
//    ㅁ
//    ㅁ
function check6(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

//       ㅁ
// ㅁ ㅁ ㅁ
function check7(i,j){
  if(i+1<N && j+2<M){
    return board[i][j+2]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}


// ㅁ
// ㅁ ㅁ 
//    ㅁ
function check8(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

//    ㅁ ㅁ 
// ㅁ ㅁ
function check9(i,j){
  if(i+1<N && j+2<M){
    return board[i+1][j]+board[i+1][j+1]+board[i][j+1]+board[i][j+2]  
  }
  return 0;
}

// ㅁ ㅁ ㅁ 
//    ㅁ
function check10(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+1]  
  }
  return 0;
}

//    ㅁ
// ㅁ ㅁ  
//    ㅁ
function check11(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1]  
  }
  return 0;
}

// ㅁ
// ㅁ ㅁ 
// ㅁ  
function check12(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+1][j+1]  
  }
  return 0;
}

//    ㅁ
// ㅁ ㅁ ㅁ 
function check13(i,j){
  if(i+1<N && j+2<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}

////대칭할 수도 있다니!!

//    ㅁ 
//    ㅁ 
// ㅁ ㅁ 
function check14(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j+1]+board[i+2][j]+board[i+2][j+1]  
  }
  return 0;
}

// ㅁ ㅁ ㅁ 
//       ㅁ
function check15(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+2]  
  }
  return 0;
}

// ㅁ ㅁ
// ㅁ
// ㅁ
function check16(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i][j+1]+board[i+1][j]+board[i+2][j]  
  }
  return 0;
}

// ㅁ
// ㅁ ㅁ ㅁ
function check17(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}


//    ㅁ
// ㅁ ㅁ 
// ㅁ
function check18(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j]  
  }
  return 0;
}

// ㅁ ㅁ 
//    ㅁ ㅁ
function check19(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}


let max = 0;
for(let i = 0; i<N; i++){
  for(let j = 0; j<M; j++){
    max = Math.max( max,
                    check1(i,j),
                    check2(i,j),
                    check3(i,j),
                    check4(i,j),
                    check5(i,j),
                    check6(i,j),
                    check7(i,j),
                    check8(i,j),
                    check9(i,j),
                    check10(i,j),
                    check11(i,j),
                    check12(i,j),
                    check13(i,j),
                    check14(i,j),
                    check15(i,j),
                    check16(i,j),
                    check17(i,j),
                    check18(i,j),
                    check19(i,j)
                    )

  }
}
console.log(max)