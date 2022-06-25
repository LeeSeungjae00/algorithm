
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
    input.forEach(str => {
        const strToArr = str.split("");
        const checkArr = []
        if(str === ".") return;

        for (let i = 0; i < strToArr.length; i++) {
            let popData
            switch (strToArr[i]) {
                case "(":
                    checkArr.push("(");
                    break;
                case "[":
                    checkArr.push("[");
                    break;
                case ")":
                    if (checkArr.pop() !== "(") {
                        console.log("no");
                        return
                    };
                    break;
                case "]":
                    if (checkArr.pop() !== "[") {
                        console.log("no");
                        return
                    };
                    break;
                default:
                    
                    break;
            }
        }
        if (checkArr.length === 0) {
            console.log("yes")
        }else{
            console.log("no")
        }
    });

}