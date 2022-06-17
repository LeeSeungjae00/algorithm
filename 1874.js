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
    const [N, ...nums] = input.map(Number);

    const temp = new Array(N).fill(0).map((val, index) => index + 1);
    temp.reverse()

    const queue = [];
    const result = [];

    for(let i = 0 ; i < N ; i ++){
        if(temp.indexOf(nums[i]) !== -1){
            let pushData

            while(pushData !== nums[i]){
                pushData = temp.pop();
                queue.push(pushData);
                result.push("+");
            }
            queue.pop()
            result.push("-");

        }else{
            let popData

            popData = queue.pop();
            if(nums[i] != popData) {

                console.log("NO");
                return;
            }
            result.push("-")
        }
    }

    console.log(result.join("\n"))
}