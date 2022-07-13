var readline = require("readline");
const { number } = require("yargs");
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
    let arr = new Array(21).fill(false);

    const M = input.shift();


    input.forEach(inp => {
        const [cmd, val] = inp.split(" ");
        switch (cmd) {
            case "add":
                arr[+val] = true
                break;
            case "remove":
                arr[+val] = false
                break;
            case "check":
                if(arr[+val]){
                    console.log(1)
                }else{
                    console.log(0)
                }
                break;
            case "toggle":
                arr[+val] = !arr[+val]
                break;
            case "all":
                arr.fill(true);
                break;
            case "empty":
                arr.fill(false);
                break;
            default:
                break;
        }
    });
}