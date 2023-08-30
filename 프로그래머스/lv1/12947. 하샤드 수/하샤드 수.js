function solution(x) {
  return x %
    x
      .toString()
      .split('')
      .map(n => +n)
      .reduce((a, b) => a + b, 0) ===
    0
    ? true
    : false;
}
