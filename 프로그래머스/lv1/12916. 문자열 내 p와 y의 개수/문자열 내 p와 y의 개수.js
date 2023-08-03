function solution(s) {
    let pCount = 0;
    let yCount = 0;
    
    s.split('')
        .map(m => m.toLowerCase())
        .filter(m => ['p', 'y'].includes(m))
        .forEach(m => m === 'p' ? pCount++ : yCount++);
    
    return pCount === yCount;
}