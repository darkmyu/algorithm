function solution(arr) {
    const answer = [];
    let temp;
    
    for (const [index, number] of arr.entries()) {
        if (temp !== number) {
            answer.push(number);
        }
        temp = number;
    }
    return answer;
}