const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map(Number);

const max = Math.max(...input);
const index = input.findIndex((value) => value === max);
console.log(max);
console.log(index + 1);
