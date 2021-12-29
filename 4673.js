
const n = 10000;
const isSelfNum = new Array(n + 1);
isSelfNum.fill(true);

function d(n) {
    const N = n.toString().split('');
    return n + N.reduce((pre, curr) => (pre += Number(curr)), 0);
}

isSelfNum.forEach((val,i,arr) => arr[d(i)] = false);
isSelfNum.forEach((val,i,arr) => {if(val) console.log(i)})