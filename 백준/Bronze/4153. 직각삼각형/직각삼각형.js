const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map((el) => el.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  const sorted = input[i].sort((a, b) => a - b);
  if (sorted[0] === 0) continue;

  const result = sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2 ? 'right' : 'wrong';
  console.log(result);
}
