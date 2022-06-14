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
    const [N, ...XYs] = input;

    XYs.sort((a, b) => {
        const [x1, y1] = a.split(" ").map(Number);
        const [x2, y2] = b.split(" ").map(Number);
        if(x1 === x2){
            return y1 - y2
        }
        return x1 - x2
    })

    console.log(XYs.join("\n"))
}