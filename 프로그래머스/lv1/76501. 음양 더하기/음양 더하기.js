function solution(absolutes, signs) {
  return absolutes.map((v, i) => (signs[i] ? v : -v)).reduce((a, b) => a + b, 0);
}
