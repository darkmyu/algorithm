function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reports = {};
    
    id_list.forEach((v) => {
        reports[v] = [];
    });
    
    report.forEach((r) => {
        const [id, targetId] = r.split(' ');
        
        // 신고 ID = [...유저 ID]
        if (!reports[targetId].includes(id)) {
            reports[targetId].push(id);
        }
    });
    
    Object.keys(reports).forEach((key) => {
        // muzi -> answer[muzi_index] + 1
        if (reports[key].length >= k) {
            reports[key].forEach((v) => {
                const index = id_list.indexOf(v);
                answer[index] += 1;
            })
        }
    });
    
    return answer;
}