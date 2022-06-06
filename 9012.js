
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
    let [T, ...testCases] = input
    
    testCases.forEach(testCase => {
        const checkArray = []
        const strArray = testCase.split(''); 
        
        for(let i = 0; i < strArray.length; i++){
            if(strArray[i] === "("){
                checkArray.push("(");
            }else{
                if(checkArray.length === 0){
                    console.log("NO")
                    check = true
                    return;
                }
                checkArray.pop();
            }
        }
        if(checkArray.length === 0){
            console.log("YES")
        }else{
            console.log("NO")
        }
    });

    
}