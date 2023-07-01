function solution(name, yearning, photo) {
    const result = [];
    const scoreMap = new Map();
    
    name.map((n, i) => scoreMap.set(n, yearning[i]))
    
    photo.forEach((v, i) => {
        let total = 0;
        
        v.forEach((v2, i2) => {
            total += scoreMap.get(v2) ?? 0;
        })
        result[i] = total;
        total = 0;
    })
    return result;
}