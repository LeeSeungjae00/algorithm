function solution(name) {
    var answer = 0;

    const charArr = name.split('').map(val => val.charCodeAt());
    const AcharCode = 'A'.charCodeAt();
    const ZcharCode = 'Z'.charCodeAt();

    const upDown = [];
    

    for(let i = 0 ; i < charArr.length ; i ++){
        charArr[i] - AcharCode < ZcharCode -charArr[i] 
            ? upDown.push(charArr[i] - AcharCode)
            : upDown.push(ZcharCode -charArr[i] + 1) ;
    }
    
    let passCount = 0;
    let ACount = 0;

    for(let i = 0 ; i < upDown.length ; i ++){
        if()
    }

    return answer;
}

	
solution(NAME);
