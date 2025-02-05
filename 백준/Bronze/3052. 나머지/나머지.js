const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map(Number);

const rest = input.map((value) => value % 42);
const result = new Set(rest); // 중복 제거

console.log(result.size);
