//선수 part //완주자 compl
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i ++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = 	["stanko", "ana", "mislav"];

console.log(solution(participant,completion));