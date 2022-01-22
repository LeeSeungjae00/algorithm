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
    const arr = [];

    let [T, ...testCases] = input;

    testCases = testCases.map(_ => +_);

    for (let i = 2; i <= Math.sqrt(Math.max(...testCases)); i++) {
        if (arr[i] !== true) {
            for (let j = i * i; j <= Math.max(...testCases); j += i) {
                arr[j] = true;
            }
        }
    }


    arr.splice(0, 2, true, true)

    console.log(arr[7])

    testCases.forEach(n => {
        
        let partition1 = n / 2;
        let partition2 = n / 2;

        while(arr[partition1] || arr[partition2]){
            partition1 -= 1;
            partition2 += 1;
        }
        console.log(partition1 + " " + partition2);

    });
}