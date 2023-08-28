function solution(left, right) {
  let answer = 0;

  for (let a = left; a <= right; a++) {
    const count = new Array(a)
      .fill(0)
      .map((n, i) => i + 1)
      .filter(n => a % n === 0).length;

    count % 2 === 0 ? (answer += a) : (answer -= a);
  }

  return answer;
}