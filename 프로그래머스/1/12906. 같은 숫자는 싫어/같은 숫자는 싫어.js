// function solution(arr)
// {
//     const answer = [];
    
//     arr.reduce((acc, cur) => {
//         if (acc !== cur) {
//             answer.push(cur);
//         }
//         return cur;
//     }, -1);
    
//     return answer;
// }

// 다른 풀이
function solution(arr)
{
    return arr.filter((value, index) => value !== arr[index + 1]);
}