function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reports = new Map();
    
    id_list.forEach((v) => {
        reports.set(v, []);
    });
    
    report.forEach((r) => {
        const [id, targetId] = r.split(' ');
        
        // 신고 ID = [...유저 ID]
        if (!reports.get(targetId).includes(id)) {
            reports.set(targetId, [...reports.get(targetId), id]);
        }
    });
    
    reports.forEach((v, key, m) => {
        // muzi -> answer[muzi_index] + 1
        if (v.length >= k) {
            m.get(key).forEach((v2) => {
                const index = id_list.indexOf(v2);
                answer[index] += 1;
            });
        }
    });
    
    return answer;
}