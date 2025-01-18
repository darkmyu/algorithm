function solution(arr)
{
    const answer = [];
    
    arr.reduce((acc, cur) => {
        if (acc !== cur) {
            answer.push(cur);
        }
        return cur;
    }, -1);
    
    return answer;
}