function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = new Map();
    let [nowYear, nowMonth, nowDay] = today.split('.').map(Number);
    
    terms.forEach((v) => {
        const [term, count] = v.split(' ');
        termsMap.set(term, Number(count));
    });
    
    privacies.forEach((v, i) => {
        const result = v.split(' ');
        const privacieTerm = termsMap.get(result[1]);
        let [year, month, day] = result[0].split('.').map(Number);
        
        month += privacieTerm;
        while (month > 12) {
            year++;
            month = month - 12; 
        }
        
        day--;
        if (day === 0) {
            month--;
            if (month === 0) {
                year--;
                month = 12;
            }
            day = 28;
        }
        
        if (nowYear > year || 
            (nowYear === year && nowMonth > month) || 
            (nowYear === year && nowMonth === month && nowDay > day)) {
            answer.push(i + 1);
        }
    });
    
    return answer;
}