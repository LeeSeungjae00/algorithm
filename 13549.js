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
  const [N, K] = input[0].split(' ').map(Number)



  function bfs(start) {
    let queue = [start];
    const visited = {};
    visited[start] = 0

    while (queue.length !== 0) {
      const tempqueue = []
      for (let i = 0; i < queue.length; i++) {
        const node = queue[i];
        if (node === K) return visited[node]
        if (visited[node * 2] === undefined && node * 2 < 100001) {
          visited[node * 2] = visited[node]
          tempqueue.push(node * 2)
        }
        if (visited[node + 1] === undefined && node + 1 < 100001) {
          visited[node + 1] = visited[node] + 1
          tempqueue.push(node + 1)
        }
        if (visited[node - 1] === undefined && node - 1 >= 0) {
          visited[node - 1] = visited[node] + 1
          tempqueue.push(node - 1)
        }
      }
      queue = [...tempqueue]
    }
  }

  console.log(bfs(N))

}
