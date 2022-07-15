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

// let deps = 0;
// let arr;
// let M, N

// function bfs(tomato) {

//     const queue = [];

//     queue.push(tomato)

//     while (queue.length !== 0) {
//         let tomatoTemp = queue.pop()
//         const nexttomato = [];
//         while (tomatoTemp.length !== 0) {
//             const { x, y } = tomatoTemp.pop()

//             arr[y][x] = "1";
//             if (y - 1 >= 0 && arr[y - 1][x] === "0") {
//                 nexttomato.push({ x: x, y: y - 1 })
//             }
//             if (y + 1 < N && arr[y + 1][x] === "0") {
//                 nexttomato.push({ x: x, y: y + 1 })
//             }
//             if (x - 1 >= 0 && arr[y][x - 1] === "0") {
//                 nexttomato.push({ x: x - 1, y: y })
//             }
//             if (x + 1 < M && arr[y][x + 1] === "0") {
//                 nexttomato.push({ x: x + 1, y: y })
//             }

//         }
//         if (nexttomato.length === 0) {
//             continue;
//         }
//         queue.push(nexttomato)
//         ++deps
//     }
// }

// function main(input) {
//     [M, N] = input.shift().split(" ").map(Number);
//     const coolTomato = [];

//     arr = input.map(val => val.split(" "));
//     for (let i = 0; i < N; i++) {
//         let temp = arr[i].indexOf("1");
//         if (temp !== -1) {
//             coolTomato.push({ x: temp, y: i })
//         }
//     }

//     if (coolTomato.length === 0) {
//         console.log(-1)
//         return
//     }

//     bfs(coolTomato)

//     for (let i = 0; i < N; i++) {
//         let temp = arr[i].indexOf("0");
//         if (temp !== -1) {
//             return console.log(-1)
//         }
//     }

//     console.log(deps)
// }


const input = [];

const strToNumArr = (str) => str.split(' ').map(Number);
//인접 토마토 위치 계산에 활용
const drList = [1, -1, 0, 0];
const dcList = [0, 0, 1, -1];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    //M(가로 칸의 수) = C(열의 개수)
    //N(세로 칸의 수) = R(행의 개수)
    const [C, R] = strToNumArr(input.shift());
    //창고 안 토마토의 개수, 익은 토마토의 개수
    let tomatoCount = C * R,
      ripeCount = 0;

    //뒤에서 쓰이는 배열. 전 날짜에 익은 토마토의 위치들을 담음.
    let prevRipeList = [];
    //창고 입력 저장
    const box = input.map((str, r) =>
      str.split(' ').map((state, c) => {
        const ret = Number(state);
        if (ret === -1) {
          tomatoCount--;
        }
        if (ret === 1) {
          prevRipeList.push(`${r} ${c}`);
          ripeCount++;
        }
        return ret;
      })
    );

    //날짜, 새로 익은 토마토 담는 Set
    let t = 0;
    const newRipeSet = new Set();
    while (true) {
      //전 날짜에 익은 토마토의 인접 토마토 익게 만듦
      prevRipeList.forEach((pos) => {
        const [r, c] = strToNumArr(pos);
        //인접 토마토 익게 만듦
        drList.forEach((dr, i) => {
          const dc = dcList[i],
            nextR = r + dr,
            nextC = c + dc;
          //위치가 유효하지 않거나, 칸에 익지 않은 토마토가 없으면 리턴
          if (
            nextR < 0 ||
            nextR >= R ||
            nextC < 0 ||
            nextC >= C ||
            box[nextR][nextC] !== 0
          ) {
            return;
          }
          //토마토 익게 만듦
          box[nextR][nextC] = 1;
          //새로 익은 토마토 담는 Set에 위치 저장
          newRipeSet.add(`${nextR} ${nextC}`);
        });
      });

      //새로 익은 토마토가 없으면 모든 토마토가 익었거나
      //토마토를 더 익게 할 수 없는 상태이므로
      //날짜를 +1 하지 않고 break
      if (newRipeSet.size === 0) {
        break;
      }

      t++;
      //익은 토마토 개수에 새로 익은 토마토 개수를 더해줌
      ripeCount += newRipeSet.size;
      //전 과정에서 익은 토마토 배열을 담는 변수에 새로 익은 토마토들을 대입
      prevRipeList = Array.from(newRipeSet);
      //새로 익은 토마토 담는 Set 비우기
      newRipeSet.clear();
    }

    //익은 토마토의 개수가 입력의 토마토 개수와 같다면 다 익은 것이므로 t,
    //아니면 다 익을 수 없는 상태이므로 -1을 출력
    console.log(ripeCount === tomatoCount ? t : -1);
  });