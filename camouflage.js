//solu 1
// function solution(clothes) {
//     let result = 0;

//     let clotheKindArray = [];

//     let indexResult
//     for(let i = 0; i < clothes.length; i ++ ){
//         indexResult = clotheKindArray.findIndex(clotheKind => clotheKind[0] == clothes[i][1]);
//         if(indexResult === -1){
//             clotheKindArray.push([clothes[i][1],2])
//         }else{
//             ++ clotheKindArray[indexResult][1];
//         }
//     }

//     result += clotheKindArray.reduce((prev, curr) => prev * curr[1] ,1) -1;

//     return result;
// }

//solu 2
function solution(clothes) {
    let result = 1;

    let clotheKindMap = {};

    for(const arr of clothes){
        clotheKindMap[arr[1]] = (clotheKindMap[arr[1]] || 0) + 1;
    }

    for(let key in clotheKindMap){
        result *= (clotheKindMap[key] + 1);
    }

    return result -1;
}


// const clothes =  [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"],["red_sunglasses", "eyewear"], ["green_turban", "headgear"], ["green_T", "top"], ["red_T", "top"]]; //5 
const clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes));