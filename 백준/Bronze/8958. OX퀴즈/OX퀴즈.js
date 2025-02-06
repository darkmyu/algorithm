const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

let score = 0;
const [count, rest] = [input[0], input.slice(1, input.length)];

for (let i = 0; i < count; i++) {
  const lines = rest[i].split('X').filter((value) => value !== '');

  lines.forEach((line) => {
    const sum = Array.from({ length: line.length}, (_, i) => i + 1).reduce((acc, cur) => acc + cur);
    score += sum;
  });

  console.log(score);
  score = 0;
}
