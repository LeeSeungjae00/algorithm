

function solution(genres, plays) {
    let answer = [];

    let totalPlaysArray = [];
    let totalPalysArrayIndex;
    for (let i = 0; i < genres.length; i++) {
        totalPalysArrayIndex = totalPlaysArray.findIndex(value => value.category == genres[i])
        if (totalPalysArrayIndex === -1) {
            totalPlaysArray.push({ category: genres[i], totalPlays: plays[i] });
        } else {
            totalPlaysArray[totalPalysArrayIndex].totalPlays += plays[i];
        }
    }

    totalPlaysArray.sort((a, b) => b.totalPlays - a.totalPlays); //total 순위 매긴후 sort

    let arr = genres.map((val,index)=> ([val , plays[index]]));

    let playsRankOffset = 0;
    let categoryOffset;
    let tempArr;
    while (totalPlaysArray.length > playsRankOffset) {
        categoryOffset = totalPlaysArray[playsRankOffset].category;
        tempArr = [];
        for (let j = 0; j < genres.length; j++) {
            if (genres[j] === categoryOffset) {
                tempArr.push(arr[j]);
            }
        }

        let arrMax =  tempArr.reduceRight((prev, curr) => prev[1] > curr[1] ? prev : curr)
        if(tempArr.length > 1){
            answer.push(arr.findIndex((value) => value === arrMax));
            tempArr[tempArr.findIndex(value => value === arrMax)] = [0,0];
            arrMax = tempArr.reduceRight((prev, curr) => prev[1] > curr[1] ? prev : curr);
            answer.push(arr.findIndex((value) => value === arrMax));
        }else{
            answer.push(arr.findIndex((value) => value === arrMax));
        }


        playsRankOffset++;
    }

    return answer;
}

const genres = ["classic", "pop", "jas", "dance", "hiphop", "dance"];
const plays =[1000, 500, 150, 800,100,800]

console.log(solution(genres, plays));