function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      result.push(numbers[i] + numbers[j + 1]);
    }
  }

  return result.filter((v, i) => result.indexOf(v) === i).sort((a, b) => a - b);
}
