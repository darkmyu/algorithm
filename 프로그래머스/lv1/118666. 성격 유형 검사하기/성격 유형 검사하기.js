function solution(survey, choices) {
    let answer = '';
    const scoreMap = new Map();
    const mbti = [
        { 'R': 0, 'T': 0 },
        { 'C': 0, 'F': 0 },
        { 'J': 0, 'M': 0 },
        { 'A': 0, 'N': 0 },
    ]
    
    for (let i = 1; i <= 7; i++) {
        score = i < 4 ? 4 - i : i - 4;
        scoreMap.set(i, score);
    }
    
    survey.forEach((v, i) => {
        const choice = choices[i];
        const key = choice < 4 ? v[0] : v[1];
        const index = mbti.findIndex((m) => Object.keys(m).includes(key));
        
        mbti[index][key] += scoreMap.get(choice);
    });
    
    mbti.forEach((v) => {
        const first = v[Object.keys(v)[0]];
        const second = v[Object.keys(v)[1]];
        answer += first >= second ? Object.keys(v)[0] : Object.keys(v)[1];
    });
    
    return answer;
}
