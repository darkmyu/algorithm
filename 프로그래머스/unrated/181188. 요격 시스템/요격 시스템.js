function solution(targets) {
    targets.sort((a, b) => a[0] - b[0]);
    
    let answer = 0;
    let pos = [0, 0];
    
    for (target of targets) {
        const [start, end] = target;
        
        // start 값이 pos[1](end) 값을 넘어갈 경우 관통하는 미사일들이 없음(start로 오름차순 정렬 해놨기 때문)
        // ex) pos[3, 7] - target[4, 5] : target.start가 pos.end를 넘길 경우 pos 범위에는 다른 미사일이 존재할 수 없음
        if (pos[1] <= start) {
            pos = target;
            answer++;
        } else if (pos[0] <= start && pos[1] >= end) {
            pos = target;
        }
    }
    
    return answer;
}