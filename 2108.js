
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
    const [N, ...nums] = input.map(Number);
    let result = [];
    let OverlabCheck = {}

    nums.sort((a, b) => a - b);


    result.push(Math.round(nums.reduce((pre, curr) => pre + curr, 0) / N));
    result.push(nums[Math.floor(nums.length / 2)]);


    nums.forEach(num => {
        if (OverlabCheck[num] === undefined) {
            OverlabCheck[num] = 0;
        }
        ++OverlabCheck[num];
    });

    let hitMaxNum = Math.max.apply(null, Object.values(OverlabCheck));
    let hitMaxNumArr = [];
    let hitMaxNumResult = 0;
    for (let numKey in OverlabCheck) {
        if (OverlabCheck[numKey] === hitMaxNum) {
            hitMaxNumArr.push(numKey);
        }
    }

    if (hitMaxNumArr.length > 1) {
        hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
        result.push(hitMaxNumArr[1]);
    } else {
        result.push(hitMaxNumResult = hitMaxNumArr[0]);
    }




    result.push(nums[nums.length - 1] - nums[0]);

    console.log(result.join("\n"))

}