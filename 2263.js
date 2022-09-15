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
  const n = Number(input.shift())
  let indexMap = {}
  const inOrder = input.shift().split(' ').map((val, i) => {
    indexMap[val] = i
    return val
  })
  const postOrder = input.shift().split(' ')
  let graph = '';

  function tree(postOrderStart, postOrderEnd, inOrderStart, inOrderEnd) {
    if (postOrderEnd < postOrderStart || inOrderStart > inOrderEnd) return
    if (postOrderEnd - postOrderStart === 1 === 0) {
      graph += postOrder[inOrderEnd] + ' '
      return
    }
    if (postOrderEnd - postOrderStart === 1) {
      graph += postOrder[postOrderEnd] + ' '
      graph += postOrder[postOrderStart] + ' '
      return
    }

    graph += postOrder[postOrderEnd] + ' '

    let inORoot = indexMap[postOrder[postOrderEnd]]

    tree(
      postOrderStart,
      postOrderStart + inORoot - 1 - inOrderStart,
      inOrderStart,
      inORoot - 1
    );
    tree(
      postOrderStart + inORoot - inOrderStart,
      postOrderEnd - 1,
      inORoot + 1,
      inOrderEnd
    )
  }
  tree(0, n - 1, 0, n - 1)
  console.log(graph)

}