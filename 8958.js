let [length , ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.forEach(input => {
    let point = 0;
    let temp = 0;
    input.split('').forEach(val => {
        if(val === 'O'){
            ++temp;
            point += temp;
        }else{
            temp = 0;
        }
    })
    console.log(point);
})