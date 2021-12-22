let [length , ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < length * 2; i+= 2) {
    // N 문서의 갯수 M Q-index
    const [N ,M] = input[i].split(' ');
    const Q = input[i + 1].split(' ').map((val, index) => { return {index , [val] : Number(val)}});
    let result = 0;
    const MAX =  Q.sort((a ,b) => b.val - a.val)[0];
    

    console.log(MAX)
    console.log(Q);
}


