function solution(num) {
  if (num === 1) return 0;
  for (let n = 1; n <= 500; n++) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    if (num === 1) return n;
  }
  return -1;
}
