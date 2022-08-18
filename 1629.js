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
    let [A, B, C] = input[0].split(' ').map(Number)

    function power(base, ex){
        let temp
        if(ex === 0) return 1;
        else if(ex % 2 === 1){
            temp = power(base , (ex / 2) >> 0);
            return (((BigInt(temp) * BigInt(temp)) %  BigInt(C)) * BigInt(base) % BigInt(C)) % BigInt(C);
        }
        else{
            temp = power(base, ex / 2)
            return ((BigInt(temp) * BigInt(temp)) %  BigInt(C))
        }
    }


    console.log(power(A,B).toString())
}   