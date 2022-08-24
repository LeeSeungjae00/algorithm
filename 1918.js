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
    let stack = []
    let result = ""

    let strs = input[0].split('')

    for(let i = 0; i < strs.length; i++){
        const lt = strs[i]
        if(lt >= "A" && lt <= "Z"){
            result += lt
        }
        else if(lt === "*" || lt === "/"){
            while(stack.length > 0 && (stack.at(-1) === "*" || stack.at(-1) === "/")){
                result += stack.pop()
            }
            stack.push(lt)
        }else if(lt === "+" || lt === "-"){
            while(stack.length > 0 && (stack.at(-1) !== "(")){
                result += stack.pop()
            }
            stack.push(lt)
        }else if(lt === "("){
            stack.push(lt)
        }   
        else if(lt === ")"){
            while(stack.length > 0 && (stack.at(-1) !== "(")){
                result += stack.pop()
            }
            stack.pop()
        }
    }
    while(stack.length !== 0){
        result += stack.pop()
    }

    console.log(result)
}   