function solution(s) {
    return (s.replace(/[^a-zA-Z]/g, '').length === 0 && (s.length === 4 || s.length === 6));
}