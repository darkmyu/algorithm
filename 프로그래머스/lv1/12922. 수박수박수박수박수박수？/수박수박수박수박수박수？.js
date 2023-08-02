function solution(n) {
    let answer = '';
    const su = '수박'
    
    for (let i = 1; i <= n; i++) {
        answer += i % 2 ? su[0] : su[1];
    }
    return answer;
}