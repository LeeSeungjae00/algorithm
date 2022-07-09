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
    const [M,N] = input.shift().split(" ");

    const testCases = input.splice(M, M + N);
    const dogam = new Map()

    input.forEach((pok, index) => {
        dogam.set((index + 1).toString(), pok)
        dogam.set(pok, (index + 1).toString())
    });

    testCases.forEach((val) => {
        console.log(dogam.get(val));
    })
}