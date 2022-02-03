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
    const [T, ...testCases] = input;

    testCases.forEach(testCase => {
        let [x1, y1, r1, x2, y2, r2] = testCase.split(' ').map(_ => +_);
        let distinct = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

        if (distinct === 0) {
            if (r1 === r2) {
                console.log(-1);
                return;
            } else {
                console.log(0);
                return;
            }
        }

        if(distinct < r1 || distinct < r2){
            //내접
            if(Math.abs(r1-r2) === distinct){
                console.log(1);
                return
            }else if(distinct < Math.abs(r1-r2)){
                console.log(0);
                return
            }else{
                console.log(2);
                return;
            }
        }else{
            //외접
            if (Math.abs(r1+r2) > distinct) {
                console.log(2);
                return;
            } else if (Math.abs(r1+r2) === distinct) {
                console.log(1);
                return;
            }else{
                console.log(0);
                return;
            }
        }
    });
}