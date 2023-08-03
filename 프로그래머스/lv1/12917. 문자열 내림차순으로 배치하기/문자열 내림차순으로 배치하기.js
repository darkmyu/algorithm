function solution(s) {
    return s.split('')
        .map(m => m.charCodeAt())
        .sort((a, b) => b - a)
        .map(m => String.fromCharCode(m))
        .join('');
}