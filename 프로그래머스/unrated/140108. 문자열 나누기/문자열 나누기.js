function solution(s) {
    let answer = 0;
    let first = s[0];
    let count = 0;
    let notCount = 0;
    
    for (let i = 0; i < s.split('').length; i++) {
        if (count === notCount) {
            answer++;
            first = s[i + 1];
        }
        
        if (first === s[i]) count++;
        if (first !== s[i]) notCount++;
    }
    
    return answer;
}