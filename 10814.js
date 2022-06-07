
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

function main(input) {  
    const [N, ...userList] = input

    userList.sort((a , b) => 
        Number(a.split(" ")[0]) - Number(b.split(" ")[0])
    )

    console.log(userList.join("\n"))
}
