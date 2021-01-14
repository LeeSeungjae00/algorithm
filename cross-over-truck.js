function solution(bridge_length, weight, truck_weights) {
    let answer = 0;

    let passTruck = [], passingTruck = [];
    let nonPassTruck = truck_weights.map(value => value);
    let times = [];
    let nowWeight = 0;

    while(passTruck.length !== truck_weights.length){
        if(weight >= nowWeight + nonPassTruck[0]){
            let temp = nonPassTruck.shift();
            passingTruck.push(temp);
            nowWeight += temp;
            times.push(0);
        }

        times = times.map(value => ++value);
        

        if(times[0] == bridge_length){
            let temp = passingTruck.shift()
            times.shift();
            passTruck.push(temp);
            nowWeight -= temp;
        }
        answer++;
    }


    return answer+1; //마지막에 나가는거 추가;
}




const bridge_length	 = 2;
const weight	 = 10;
const truck_weights	 = [7,4,5,6];

console.log(solution(bridge_length, weight, truck_weights));