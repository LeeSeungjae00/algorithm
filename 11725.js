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

function main(input) {
  const N = +input[0]
  const grafh = new Array(N + 1).fill(0).map(() => [])
  const root = []


  for (let i = 1; i < input.length; i++) {
    const [to, from] = input[i].split(' ')

    grafh[from].push(to);
    grafh[to].push(from)
  }

  dfs('1')
  console.log(root.join('\n'))



  function dfs(start) {
    const visited = {}
    const queue = [start]
    visited[start] = true
    while (queue.length !== 0) {
      let node = queue.pop()
      visited[node] = true
      grafh[node].forEach(val => {
        if (!visited[val]) {
          root[val - 2] = node;
          queue.push(val)
        }
      });
    }
  }
}
