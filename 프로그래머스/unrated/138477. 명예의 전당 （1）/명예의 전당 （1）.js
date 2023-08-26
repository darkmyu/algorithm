function solution(k, score) {
  const hall = [];
  const result = [];

  for (let i = 0; i < score.length; i++) {
    hall.push(score[i]);
    hall.sort((a, b) => b - a);
    hall.splice(k);
    result.push(Math.min(...hall));
  }

  return result;
}
