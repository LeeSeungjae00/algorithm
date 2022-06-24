
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
    const N = +input[0];
    let cnt = 0;
    let result = 0;

    while(cnt < N){
        ++result;
        if(result.toString().indexOf("666") !== -1){
            ++cnt
        }
    }
    console.log(result);
}

// 666
// 1666
// 2666
// 3666
// 4666
// 5666

// 6660
// 6661
// 6662
// 6663
// 6664
// 6665
// 6666
// 6667
// 6668
// 6669

// 10666
// 11666
// 12666
// 13666
// 14666
// 15666

// 16660
// 16661
// 16662
// 16663
// 16664
// 16665
// 16666
// 16667
// 16668
// 16669

// 17666
// 18666
// 19666
// 20666
// 21666
// 22666
// 23666
// 24666
// 25666

// 26660
// 26661
// 26662
// 26663
// 26664
// 26665
// 26666
// 26667
// 26668
// 26669