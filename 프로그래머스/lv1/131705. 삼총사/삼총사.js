function solution(number) {
  let n = 0;

  for (let a = 0; a <= number.length; a++) {
    for (let b = a + 1; b <= number.length; b++) {
      for (let c = b + 1; c <= number.length; c++) {
        number[a] + number[b] + number[c] === 0 && n++;
      }
    }
  }

  return n;
}
