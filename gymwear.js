function solution(n, lost, reserve) {
    const realRerve = reserve.filter((reserveStudent) => !lost.some(lostStudent => reserveStudent == lostStudent));
    const realLost = lost.filter((lostStudent) => !reserve.some(reserveStudent => lostStudent == reserveStudent));
    let lostCount = 0

    for(let loster of realLost){
        if(realRerve.indexOf(loster + 1) !== -1){
            realRerve[realRerve.indexOf(loster + 1)] = null;
        }else if(realRerve.indexOf(loster - 1) !== -1){
            realRerve[realRerve.indexOf(loster - 1)] = null;
        }else{
            lostCount++;
        }
    }

    return n - lostCount;
}


const n=5	
const lost=		[2, 4]
const reserve= [3]


solution(n,lost,reserve);