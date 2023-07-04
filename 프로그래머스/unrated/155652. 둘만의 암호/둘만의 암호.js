function solution(s, skip, index) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        let count = 0;
        let asciiCode = s.charCodeAt(i);
        
        while (count < index) {
            asciiCode = asciiCode === 122 ? 97 : asciiCode + 1;
            
            if (skip.includes(String.fromCharCode(asciiCode))) {
                count--;
            }
            count++;
        }
        
        answer += String.fromCharCode(asciiCode);
    };
    
    return answer;
}